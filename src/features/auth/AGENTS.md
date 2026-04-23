<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — auth

<!-- AGENTS-GENERATED:START overview -->

## Overview

Authentication module — NocoBase SDK client, auth store, service operations, and route guards, integrated with permissions state.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                             | Purpose                                                                                |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| `index.ts`                       | Public barrel exports for client, guards, services, store actions, and auth types      |
| `utils/client.ts`                | NocoBase `APIClient` singleton configured from `env`                                   |
| `utils/guard.ts`                 | Route guards (`requireAuth`, `requireGuest`) + token bootstrap (`validateTokenOnInit`) |
| `utils/service.ts`               | Auth flows (`signIn`, `signOut`, `checkAuth`, reset-password, profile update)          |
| `utils/store.ts`                 | TanStack Store state (`user`, `token`, `isAuthenticated`) and state updaters           |
| `utils/types.ts`                 | Auth types and Zod schemas (`authUserSchema`, `authResponseSchema`)                    |
| `components/login-form.tsx`      | Login form with React Hook Form + Zod and redirect handling                            |
| `components/detail-item.tsx`     | Small label/value row used by the profile details view                                 |
| `components/info-card.tsx`       | Compact summary card used by the profile details view                                  |
| `components/profile-details.tsx` | Profile presentation component for authenticated user data                             |
| `components/auth-layout.tsx`     | Shared guest/auth page shell                                                           |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Import auth APIs from `#/features/auth`; avoid direct imports from module internals.
- `service.ts` must use `nocobaseRepository`; avoid direct SDK calls from service methods.
- Guards read local auth state and throw `redirect()`; they do not execute API requests directly.
- Always sync permissions with auth lifecycle: set on login/check and reset on logout/invalid token.
- Use `createLogger("auth")` for all module logs; avoid raw `console.*` calls.
- Password reset endpoints require header `X-Authenticator: basic`.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                           | Reference file                                |
| --------------------------------- | --------------------------------------------- |
| Guard implementation              | `src/features/auth/utils/guard.ts`            |
| Service + permissions integration | `src/features/auth/utils/service.ts`          |
| Auth form flow                    | `src/features/auth/components/login-form.tsx` |
| Protected route usage             | `src/routes/dashboard/index.tsx`              |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START api-reference -->

## Main Functions & API

### Guards (`utils/guard.ts`)

| Function              | Signature                        | Purpose                                                                   |
| --------------------- | -------------------------------- | ------------------------------------------------------------------------- |
| `requireAuth`         | `(pathname: string) => Response` | Redirects to `/login?returnTo=<pathname>` when no valid auth state exists |
| `requireGuest`        | `() => Response`                 | Redirects authenticated users to `/`                                      |
| `validateTokenOnInit` | `() => Promise<void>`            | Validates/restores stored token on app bootstrap                          |
| `isNetworkError`      | `(err: unknown) => boolean`      | Distinguishes transient network failures from auth failures               |

### Service (`service.ts`)

| Function               | Signature                                                                       | Purpose                                                                       |
| ---------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `signIn`               | `(credentials: LoginCredentials) => Promise<{ token: string; user: AuthUser }>` | Authenticates user, updates store and permissions                             |
| `signOut`              | `() => Promise<void>`                                                           | Signs out remotely when possible, then always clears local auth + permissions |
| `checkAuth`            | `() => Promise<AuthUser>`                                                       | Calls `auth:check`, updates user and permissions                              |
| `requestPasswordReset` | `(email: string) => Promise<void>`                                              | Calls `auth:lostPassword`                                                     |
| `confirmPasswordReset` | `(data: ResetPasswordConfirm) => Promise<void>`                                 | Calls `auth:resetPassword`                                                    |
| `updateProfile`        | `(payload: UpdateProfilePayload) => Promise<AuthUser>`                          | Updates authenticated user profile and refreshes user state                   |

### Store (`store.ts`)

| Export      | Purpose                                     |
| ----------- | ------------------------------------------- |
| `authStore` | Global auth state store                     |
| `setUser`   | Updates authenticated user                  |
| `setToken`  | Updates token and derived `isAuthenticated` |
| `reset`     | Clears all auth state                       |

<!-- AGENTS-GENERATED:END api-reference -->

<!-- AGENTS-GENERATED:START security-conventions -->

## Security Conventions

- Token persistence is handled by NocoBase SDK storage; logout must clear token via repository + local auth store reset.
- Auth responses are validated with Zod before mutating state.
- `validateTokenOnInit()` preserves auth state on transient network errors to avoid false logouts.
- Route protection relies on explicit loader guards (`requireAuth`/`requireGuest`), not client-only UI checks.

<!-- AGENTS-GENERATED:END security-conventions -->

<!-- AGENTS-GENERATED:START commands -->

## Module-Specific Commands

```bash
# Validate TS project
pnpm typecheck

# Find module usage
rg -n 'from "#/features/auth"' src

# Detect anti-pattern deep imports
rg -n 'from "#/features/auth/' src
```

<!-- AGENTS-GENERATED:END commands -->
