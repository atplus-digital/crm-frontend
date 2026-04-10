<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-10 -->

# AGENTS.md — auth components

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication UI components — login, logout, and password-reset flows.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `login-form.tsx` | Controlled login form that calls `signIn()` and handles redirect-after-login |
| `login-page.tsx` | Auth card layout for the login screen |
| `logout-button.tsx` | Logout action button that signs out and returns to `/login` |
| `reset-password-form.tsx` | Requests a password reset and shows the confirmation state |
| `reset-password-confirm-form.tsx` | Validates and submits the new password from the reset token |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Components call auth functions through `#/modules/auth`; they do not import client or store sub-files directly.
- Form components keep local submission/error state and map backend failures to user-facing messages.
- `login-page.tsx` owns layout only; form behavior stays in the dedicated form component.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file |
|---------|---------------|
| Login submission flow | `src/components/auth/login-form.tsx` |
| Password reset validation | `src/components/auth/reset-password-confirm-form.tsx` |
<!-- AGENTS-GENERATED:END golden-samples -->
