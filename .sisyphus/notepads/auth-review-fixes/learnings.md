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

## T5: Fix validateTokenOnInit to discriminate network vs auth errors

- Added `isNetworkError()` helper that classifies TypeError and errors with fetch/network/ECONNREFUSED/timeout in message as network errors
- Updated `validateTokenOnInit` catch block: network errors preserve auth state (no reset), auth errors still call reset()
- Added 11 new test cases: 3 for validateTokenOnInit (TypeError, ECONNREFUSED, 401), 8 for isNetworkError (various inputs)
- `isNetworkError` exported from guard.ts but NOT added to barrel export (tests import directly, per "must not modify files outside guard.ts and test")
- All 344 tests pass, build succeeds


## T7: Add runtime validation for AuthResponse with Zod

- Replaced unsafe `as AuthResponse` cast in `signIn` with `authResponseSchema.safeParse()`
- Replaced `??` fallback in `checkAuth` with `checkAuthResponseSchema.safeParse()`
- Created separate schemas: `authResponseSchema` (wraps `{ data: { token, user } }`) and `checkAuthResponseSchema` (just user object with `id`)
- Used `.passthrough()` on user schema to allow NocoBase to add extra fields without breaking validation
- Added `AuthValidationError` class with optional `zodError` field for debugging
- Updated existing test "handles null data.data" → now correctly expects `AuthValidationError` (was silently passing bad data before)
- Added 4 new validation tests for `signIn` (no token, no user, malformed) and 1 for `checkAuth` (malformed)
- All 348 tests pass, build succeeds
- `grep -r 'as AuthResponse' src/modules/auth/service.ts` returns empty ✓

## T8: Remove console.error from login-form and add DEV-only console.warn to empty catch blocks

- `login-form.tsx`: Removed `console.error(e)` from catch block, kept user-facing error message — changed `} catch (e) {` to `} catch {`
- `service.ts` signOut: Added DEV-only `console.warn` to catch block using `import.meta.env.DEV` gate
- `logout-button.tsx`: Added DEV-only `console.warn` to empty catch block in handleLogout
- `theme-script.tsx`: Replaced empty `catch (_) {}` with DEV-only `console.warn` for theme initialization errors
- Pattern: `err instanceof Error ? err.message : String(err)` for safe error string conversion
- All 4 files follow the same DEV-only logging pattern established in guard.ts (T5)
- All 348 tests pass, build succeeds, grep confirms no console.error in login-form.tsx
