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
| `login-form.tsx` | React Hook Form + Zod login form that calls `signIn()` and handles redirect-after-login |
| `login-page.tsx` | Composes AuthLayout + LoginForm |
| `logout-button.tsx` | Logout action button that signs out and returns to `/login` |
| `reset-password-form.tsx` | React Hook Form + Zod reset-password request with success state |
| `reset-password-confirm-form.tsx` | React Hook Form + Zod new password submission with cross-field validation |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Components call auth functions through `#/modules/auth`; they do not import client or store sub-files directly.
- **All forms use React Hook Form + Zod** — `useForm` from `react-hook-form`, `zodResolver` from `@hookform/resolvers`, `Form`/`Field`/`FieldLabel`/`FieldControl`/`FieldError` from `#/components/ui/form`.
- Server errors are kept in a local `useState<string | null>` and displayed as `<p className="text-sm text-destructive">` — NOT via RHF field errors.
- `form.formState.isSubmitting` for button state — never manual `isLoading` state.
- Auth pages use `AuthLayout` for the centered card layout — never duplicate the `min-h-screen flex items-center justify-center` wrapper.
- `login-page.tsx` and route files compose `AuthLayout`; form components stay layout-free.
- Navigation uses `Link`/`useNavigate` from `react-router` — `navigate("/path")` (string path), not object syntax.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Auth page layout | `src/components/auth/auth-layout.tsx` |
| React Hook Form + Zod (simple) | `src/components/auth/login-form.tsx` |
| React Hook Form + Zod (cross-field refine) | `src/components/auth/reset-password-confirm-form.tsx` |
| React Hook Form + conditional view | `src/components/auth/reset-password-form.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->
