---
name: DATABASE_URL is external Neon (intentional)
description: Which database the course app actually uses and why the DATABASE_URL secret must be kept.
---

# DATABASE_URL points at the user's external Neon DB (July 2026)

The app intentionally uses an **external Neon database** via the `DATABASE_URL` secret (host `ep-solitary-violet-…neon.tech`). The earlier platform-DB shadowing issue was resolved — the user removed the platform database, so their secret now takes effect.

- **Keep the `DATABASE_URL` secret.** The yellow "External database detected" banner in the Database pane is expected and informational, not an error.
- `checkDatabase()` may report "not provisioned" — that refers to the Replit platform DB, which deliberately does not exist. The app's DB works fine.
- Dev and production share this same Neon DB, so `pnpm --filter @workspace/db run push` from the workspace applies schema to production too — no separate prod migration step.

**Why:** user explicitly chose their own Neon DB; earlier sessions wasted time assuming the platform DB was authoritative.

**How to apply:** before any DB debugging, print the live `DATABASE_URL` host (never the password) to confirm which DB is in use; don't trust `checkDatabase()` alone. Never suggest provisioning a Replit DB — it would shadow the Neon secret again.
