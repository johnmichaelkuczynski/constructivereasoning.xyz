---
name: API auth model (custom Google OAuth, owner-locked)
description: How the course app authenticates — important before touching login, sessions, or "protected" endpoints.
---

# Custom Google OAuth with first-sign-in owner lock (July 2026)

Clerk was fully ripped out at the user's request, then replaced with a hand-rolled Google OAuth flow using the user's own `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` secrets (no auth library, no new deps).

**How it works:**
- API routes under `/api/auth/*`: `google` (redirect), `google/callback` (code exchange via native fetch), `me`, `logout`. Session = HMAC-SHA256-signed cookie (`SESSION_SECRET`), 30-day TTL, HttpOnly/Lax/Secure.
- **Owner lock:** the FIRST Google account to complete sign-in claims ownership (stored in `seed_meta` under key `auth_owner` as `{sub,email}`); all other Google accounts get 403 forever after. Resetting the DB (or deleting that row) re-opens the claim.
- OAuth `redirect_uri` derives from `REPLIT_DOMAINS` env (deterministic; never from request headers — spoofable and `Host` is `localhost` behind the proxy). Google Console must list `https://<domain>/api/auth/google/callback` for both dev and published domains.
- Frontend gating: react-query `useAuth` on `/api/auth/me`; wouter routes wrapped in a `Protected` component; `/` = public landing with "Sign in with Google".

**Why:** single-user app; user explicitly wanted their own Google credentials instead of Clerk. The rest of the API still has NO per-route server authz (only login admission is gated) — pre-existing single-user design.

**How to apply:** don't add per-route authz piecemeal; if a real multi-user trust boundary is ever needed, gate the whole API on the session cookie deliberately. If sign-in breaks with `redirect_uri_mismatch`, the Google Console redirect URI list is out of date (dev domain rotates on repl changes; published domain differs).
