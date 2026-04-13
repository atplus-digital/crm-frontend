<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

# AGENTS.md — auth components

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication UI components — login, logout, password-reset flows, and shared auth page layout.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `auth-layout.tsx` | Shared centered-card layout for auth pages (login, reset password, etc.) |
| `login-form.tsx` | TanStack Form + Zod login form that calls `signIn()` and handles redirect-after-login |
| `login-page.tsx` | Composes AuthLayout + LoginForm |
| `logout-button.tsx` | Logout action button that signs out and returns to `/login` |
| `reset-password-form.tsx` | TanStack Form + Zod reset-password request with success state |
| `reset-password-confirm-form.tsx` | TanStack Form + Zod new password submission with cross-field validation |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Components call auth functions through `#/modules/auth`; they do not import client or store sub-files directly.
- **All forms use TanStack Form + Zod** — `useAppForm` from `#/hooks/use-app-form`, Zod schema in `validators.onChange`, `form.AppForm` > `Form` > `form.AppField` structure.
- Server errors are kept in a local `useState<string | null>` and displayed as `<p className="text-sm text-destructive">` — NOT via TanStack Form field errors.
- `form.Subscribe` reads `canSubmit`/`isSubmitting` for button state — never manual `isLoading` state.
- Auth pages use `AuthLayout` for the centered card layout — never duplicate the `min-h-screen flex items-center justify-center` wrapper.
- `login-page.tsx` and route files compose `AuthLayout`; form components stay layout-free.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Auth page layout | `src/components/auth/auth-layout.tsx` |
| TanStack Form + Zod (simple) | `src/components/auth/login-form.tsx` |
| TanStack Form + Zod (cross-field refine) | `src/components/auth/reset-password-confirm-form.tsx` |
| TanStack Form + conditional view | `src/components/auth/reset-password-form.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->
