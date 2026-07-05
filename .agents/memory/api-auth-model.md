---
name: API auth model (single-user, no auth)
description: How the course API treats authentication/authorization — important before adding "protected" or "admin" endpoints.
---

# App has NO authentication at all (login ripped out July 2026)

The app previously used Clerk with frontend-only gating; at the user's explicit request the entire login system was removed. There is now **no auth anywhere**: no ClerkProvider, no sign-in/sign-up routes, no protected-route HOC, no auth middleware on the API. `/` renders the public landing; every page (dashboard, admin, diagnostics) is directly reachable.

**Why:** single-user, self-paced course — the owner is both student and administrator. The user said "rip out all existing login, I have a plan," so do not reintroduce auth without being asked.

**How to apply:**
- Do NOT assume any endpoint or page is protected. "Admin mode" is a client-side `localStorage` flag (`lib/adminMode.ts`); `skipDetection` and grader-lab endpoints have no server authz — by design.
- If a future task genuinely needs a trust boundary (multi-user, cost abuse), that is a deliberate architectural change across the whole API, not a one-endpoint patch.
- Clerk teardown touched: qr-course App.tsx/Landing.tsx/Layout.tsx/index.css, api-server app.ts (+ deleted clerk proxy middleware), and removed @clerk/* plus http-proxy-middleware/cookie-parser deps.
