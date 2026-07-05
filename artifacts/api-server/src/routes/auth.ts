import { Router, type IRouter, type Request, type Response } from "express";
import crypto from "node:crypto";
import { eq } from "drizzle-orm";
import { db, seedMetaTable } from "@workspace/db";
import {
  parseCookies,
  sessionCookieMaxAge,
  sessionCookieName,
  signSession,
  verifySession,
  type SessionUser,
} from "../lib/session";

const router: IRouter = Router();

const STATE_COOKIE = "ccr_oauth_state";

function requestOrigin(req: Request): string {
  // Prefer the platform-provided public domain (deterministic, unspoofable).
  // REPLIT_DOMAINS holds the dev domain in development and the published
  // domain(s) in production.
  const domains = process.env.REPLIT_DOMAINS;
  if (domains) return `https://${domains.split(",")[0].trim()}`;
  // Fallback: trust proxy is enabled, so Express resolves X-Forwarded-*.
  return `${req.protocol}://${req.hostname}`;
}

const OWNER_KEY = "auth_owner";

type Owner = { sub: string; email: string };

async function getOwner(): Promise<Owner | null> {
  const rows = await db
    .select({ value: seedMetaTable.value })
    .from(seedMetaTable)
    .where(eq(seedMetaTable.key, OWNER_KEY));
  if (rows.length === 0) return null;
  try {
    const parsed = JSON.parse(rows[0].value);
    if (typeof parsed?.sub === "string" && typeof parsed?.email === "string") {
      return parsed as Owner;
    }
  } catch {
    // fall through
  }
  return null;
}

async function claimOwner(owner: Owner): Promise<void> {
  await db
    .insert(seedMetaTable)
    .values({ key: OWNER_KEY, value: JSON.stringify(owner) })
    .onConflictDoNothing({ target: seedMetaTable.key });
}

function redirectUri(req: Request): string {
  return `${requestOrigin(req)}/api/auth/google/callback`;
}

function isSecure(req: Request): boolean {
  return requestOrigin(req).startsWith("https://");
}

function setCookie(
  res: Response,
  name: string,
  value: string,
  opts: { maxAge: number; secure: boolean },
) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${opts.maxAge}`,
  ];
  if (opts.secure) parts.push("Secure");
  res.append("Set-Cookie", parts.join("; "));
}

export function sessionUserFromRequest(req: Request): SessionUser | null {
  const cookies = parseCookies(req.headers.cookie);
  return verifySession(cookies[sessionCookieName()]);
}

router.get("/auth/google", (req, res) => {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    res.status(500).json({ error: "GOOGLE_CLIENT_ID is not configured" });
    return;
  }
  // Prefix marks whether this is already an automatic retry, so a stale
  // callback can restart the flow once without risking a redirect loop.
  const isRetry = req.query.retry === "1";
  const state = `${isRetry ? "r1" : "r0"}${crypto.randomBytes(16).toString("hex")}`;
  setCookie(res, STATE_COOKIE, state, { maxAge: 600, secure: isSecure(req) });

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri(req),
    response_type: "code",
    scope: "openid email profile",
    state,
    prompt: "select_account",
  });
  res.redirect(`https://accounts.google.com/o/oauth2/v2/auth?${params}`);
});

router.get("/auth/google/callback", async (req, res) => {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      res.status(500).send("Google OAuth is not configured");
      return;
    }

    const { code, state, error } = req.query as Record<string, string>;
    if (error) {
      req.log.warn({ error }, "Google OAuth denied");
      res.redirect("/");
      return;
    }
    const cookies = parseCookies(req.headers.cookie);
    if (!code || !state || state !== cookies[STATE_COOKIE]) {
      // Stale or refreshed callback (expired state cookie, attempt started
      // before a redeploy, etc). Restart the flow at most once: only a
      // well-formed first-attempt ("r0") state may trigger a retry.
      if (typeof state === "string" && state.startsWith("r0")) {
        req.log.warn("Stale OAuth callback — restarting sign-in flow");
        res.redirect("/api/auth/google?retry=1");
        return;
      }
      res
        .status(400)
        .send(
          "Sign-in could not be completed — your browser may be blocking cookies. Enable cookies for this site and try again from the home page.",
        );
      return;
    }

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri(req),
        grant_type: "authorization_code",
      }),
    });
    if (!tokenRes.ok) {
      const body = await tokenRes.text();
      req.log.error({ status: tokenRes.status, body }, "Token exchange failed");
      res.status(502).send("Google token exchange failed");
      return;
    }
    const tokens = (await tokenRes.json()) as { access_token?: string };
    if (!tokens.access_token) {
      res.status(502).send("Google token exchange returned no access token");
      return;
    }

    const userRes = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      { headers: { Authorization: `Bearer ${tokens.access_token}` } },
    );
    if (!userRes.ok) {
      req.log.error({ status: userRes.status }, "Userinfo fetch failed");
      res.status(502).send("Failed to fetch Google profile");
      return;
    }
    const profile = (await userRes.json()) as {
      sub: string;
      email?: string;
      name?: string;
      picture?: string;
    };
    if (!profile.sub || !profile.email) {
      res.status(502).send("Google profile missing required fields");
      return;
    }

    // Single-user app: the first Google account to sign in claims ownership;
    // every other account is rejected from then on.
    let owner = await getOwner();
    if (!owner) {
      await claimOwner({ sub: profile.sub, email: profile.email });
      owner = await getOwner();
    }
    if (!owner || owner.sub !== profile.sub) {
      req.log.warn(
        { attempted: profile.email, owner: owner?.email },
        "Rejected sign-in from non-owner account",
      );
      res
        .status(403)
        .send(
          "This course belongs to another account. Sign in with the Google account that first registered.",
        );
      return;
    }

    const token = signSession({
      sub: profile.sub,
      email: profile.email,
      name: profile.name ?? "",
      picture: profile.picture ?? "",
    });
    setCookie(res, sessionCookieName(), token, {
      maxAge: sessionCookieMaxAge(),
      secure: isSecure(req),
    });
    setCookie(res, STATE_COOKIE, "", { maxAge: 0, secure: isSecure(req) });
    req.log.info({ email: profile.email }, "Google sign-in complete");
    res.redirect("/dashboard");
  } catch (e) {
    req.log.error({ err: e }, "OAuth callback failed");
    res.status(500).send("Sign-in failed");
  }
});

router.get("/auth/me", (req, res) => {
  const user = sessionUserFromRequest(req);
  if (!user) {
    res.status(401).json({ error: "Not signed in" });
    return;
  }
  res.json({ email: user.email, name: user.name, picture: user.picture });
});

router.post("/auth/logout", (req, res) => {
  setCookie(res, sessionCookieName(), "", { maxAge: 0, secure: isSecure(req) });
  res.json({ ok: true });
});

export default router;
