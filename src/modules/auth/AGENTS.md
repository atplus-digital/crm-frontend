<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

# AGENTS.md — auth

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication module — NocoBase client, auth state (user + token), service methods, and route guards.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File         | Purpose                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------- |
| `index.ts`   | Barrel export — `nocobaseClient`, guards, service methods, store + actions, types               |
| `client.ts`  | NocoBase SDK client singleton with env-driven baseURL and localStorage                          |
| `guard.ts`   | `requireAuth()`, `requireGuest()`, `validateTokenOnInit()` for route `loader`                   |
| `service.ts` | Auth operations: `signIn`, `signOut`, `checkAuth`, password reset                               |
| `store.ts`   | TanStack Store with `user`, `token`, `isAuthenticated` + actions `setUser`, `setToken`, `reset` |
| `types.ts`   | `AuthUser`, `AuthState`, `AuthResponse`, `LoginCredentials`, password-reset types               |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Import auth APIs from `#/modules/auth`; external code should not reach into sub-files directly.
- `service.ts` is the only place that talks to the NocoBase client directly.
- Guards must derive auth state from `authStore`, then redirect through React Router `redirect()`.
- Form components manage local loading/error state; global store only tracks `user`, `token`, `isAuthenticated`.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern             | Reference file                       |
| ------------------- | ------------------------------------ |
| Barrel import usage | `src/components/auth/login-form.tsx` |
| Route guard wiring  | `src/routes/index.tsx`               |
<!-- AGENTS-GENERATED:END golden-samples -->
