import crypto from "node:crypto";

export type SessionUser = {
  sub: string;
  email: string;
  name: string;
  picture: string;
};

const SESSION_COOKIE = "ccr_session";
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30;

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (!s) throw new Error("SESSION_SECRET is not set");
  return s;
}

function b64url(buf: Buffer): string {
  return buf.toString("base64url");
}

function hmac(data: string): string {
  return b64url(crypto.createHmac("sha256", secret()).update(data).digest());
}

export function signSession(user: SessionUser): string {
  const payload = b64url(
    Buffer.from(
      JSON.stringify({
        ...user,
        exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
      }),
    ),
  );
  return `${payload}.${hmac(payload)}`;
}

export function verifySession(token: string | undefined): SessionUser | null {
  if (!token) return null;
  const dot = token.lastIndexOf(".");
  if (dot < 0) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = hmac(payload);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof data.exp !== "number" || data.exp < Date.now() / 1000) {
      return null;
    }
    const { sub, email, name, picture } = data;
    if (typeof sub !== "string" || typeof email !== "string") return null;
    return {
      sub,
      email,
      name: typeof name === "string" ? name : "",
      picture: typeof picture === "string" ? picture : "",
    };
  } catch {
    return null;
  }
}

export function parseCookies(header: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq < 0) continue;
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim();
    if (!key) continue;
    try {
      out[key] = decodeURIComponent(value);
    } catch {
      // Malformed percent-encoding — skip this cookie rather than throwing.
    }
  }
  return out;
}

export function sessionCookieName(): string {
  return SESSION_COOKIE;
}

export function sessionCookieMaxAge(): number {
  return SESSION_TTL_SECONDS;
}
