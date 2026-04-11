# auth-review-fixes learnings

## T2: Fix env var name mismatch (VITE_NOCOBASE_URL)

- `.env.example` had `VITE_CRM_NOCOBASE_URL` but `src/modules/auth/client.ts` and `src/env.ts` both use `VITE_NOCOBASE_URL`
- Fixed by renaming `VITE_CRM_NOCOBASE_URL` → `VITE_NOCOBASE_URL` in `.env.example`
- `CRM_NOCOBASE_URL` (server-side) is kept — it's a separate var for server-side API calls, distinct from the client-side `VITE_NOCOBASE_URL`

## T3: Remove unused AUTH_SESSION_SECRET

- `AUTH_SESSION_SECRET` was defined in `src/env.ts` server schema and `runtimeEnvStrict` but was NEVER used anywhere else in the codebase
- Confirmed by grepping entire repo — only appeared in `env.ts` itself (schema definition + runtimeEnvStrict mapping)
- Removed from:
  - `src/env.ts` server schema
  - `src/env.ts` runtimeEnvStrict mapping
  - `.env.example`
  - `.env.local`
- Build and all 333 tests passed after removal
