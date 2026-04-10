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
| `login-form.tsx` | Controlled login form that calls `signIn()` and handles redirect-after-login |
| `login-page.tsx` | Composes AuthLayout + LoginForm |
| `logout-button.tsx` | Logout action button that signs out and returns to `/login` |
| `reset-password-form.tsx` | Requests a password reset and shows the confirmation state |
| `reset-password-confirm-form.tsx` | Validates and submits the new password from the reset token |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Components call auth functions through `#/modules/auth`; they do not import client or store sub-files directly.
- Form components keep local submission/error state and map backend failures to user-facing messages.
- Auth pages use `AuthLayout` for the centered card layout — never duplicate the `min-h-screen flex items-center justify-center` wrapper.
- `login-page.tsx` and route files compose `AuthLayout`; form components stay layout-free.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Auth page layout | `src/components/auth/auth-layout.tsx` |
| Login submission flow | `src/components/auth/login-form.tsx` |
| Password reset validation | `src/components/auth/reset-password-confirm-form.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->
