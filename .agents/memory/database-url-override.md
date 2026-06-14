---
name: DATABASE_URL platform override
description: The app's DATABASE_URL resolves to a Replit platform DB and shadows any user-set DATABASE_URL secret.
---

# DATABASE_URL is platform-injected (shadows user secrets)

In this project `process.env.DATABASE_URL` resolves to host `helium`, db `heliumdb` — a Replit-platform-injected value. There is **no** `.env` or code that sets it.

- A user can add a `DATABASE_URL` *secret* (e.g. an external Neon URL), but the platform-injected `DATABASE_URL` **wins**, so the app keeps using `heliumdb`. The user's external URL is then unreadable from env/shell/sandbox because it's shadowed everywhere.
- `checkDatabase()` may report `provisioned: false` even though the app has a fully working database at `heliumdb` (the skill's provisioning check and the app's actual `DATABASE_URL` are not the same source of truth).
- The agent has **no tool to deprovision** the platform DB. Switching the app to a user's external DB requires the user to remove the platform database in the Database pane so their secret takes effect — it cannot be done agent-side.

**Why:** explains the confusing case where a user insists "use my external DATABASE_URL" but the app won't. **How to apply:** classify the live `DATABASE_URL` host (print host/dbname only, never the password) before assuming which DB is in use; don't trust `checkDatabase()` alone.

## After the switch actually takes effect

Once the platform DB has been removed and the external secret is live, two things bite:

1. **A running workflow caches the OLD `DATABASE_URL` in its process env.** A fresh bash/node process sees the new (external) URL while the long-running API workflow still reads the old platform URL — they disagree until you restart the workflow. Symptom: diagnostics that passed (seeded data present) suddenly fail (`relation "topics" does not exist`) right after a restart, because the restart is when the app finally moves to the empty external DB.
2. **The external DB usually has NO schema.** Fix: `pnpm --filter @workspace/db run push` (drizzle-kit push) against the external DB, then restart the API workflow so the boot-time `seedIfEmpty` self-healing seeder populates it. Verify via `GET /api/diagnostics/system`.
