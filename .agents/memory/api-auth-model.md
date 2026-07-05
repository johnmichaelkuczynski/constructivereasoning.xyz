---
name: API auth model (canonical Passport Google OAuth)
description: How the course app authenticates — read before touching login, sessions, or protected endpoints.
---

# Canonical Passport-based Google OAuth (July 2026)

Auth history: Clerk ripped out → hand-rolled OAuth with owner lock → ALL login ripped out → user supplied a **canonical `auth.ts`** from another of their apps and mandated it be ported **verbatim** (only domain values changed). That file now lives at `artifacts/api-server/src/auth.ts`.

**Rules:**
- The file is FROZEN. Do not rewrite, refactor, "clean up", or substitute another auth system. Only app-specific domain values may change. Its `console.log` usage violates repo logging conventions — leave it anyway.
- Stack: passport + passport-google-oauth20 + express-session + connect-pg-simple. Sessions in `user_sessions` table. Login is OPTIONAL — the app is fully open; only `/api/admin/visits` is gated (hardcoded admin email in the file).
- No owner lock anymore: any Google account can sign in; users are created/updated in a `users` table via `storage.ts` (drizzle). Logins recorded in `visits`.
- `user_sessions` is defined in the drizzle schema deliberately: the esbuild-bundled server cannot read connect-pg-simple's `table.sql`, so `createTableIfMissing` fails with ENOENT — the table must exist via `db push`.
- Callback path is `/auth/google/callback` (NOT under /api) — the api-server's proxy paths include both `/api` and `/auth` in its artifact.toml for this reason.
- Registered Google domains: constructivereasoning.xyz, www.constructivereasoning.xyz, constructive-reasoning-101.replit.app (both /auth/... and /api/auth/... callback forms). Dev preview domain must be added by the user manually and rotates on workspace changes.

**Why:** user's explicit hard mandate ("Do NOT rewrite it") after multiple failed auth iterations; the file is battle-tested in their other app.

**How to apply:** for auth changes, edit only surrounding wiring (storage, schema, frontend, proxy paths) — never the canonical file's logic. `redirect_uri_mismatch` = Google Console URI list is out of date.
