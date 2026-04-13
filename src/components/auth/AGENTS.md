<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — auth components

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication UI components — login and password-reset flows, and shared auth page layout.

**Component Architecture:**
- **Layout layer**: `GuestLayout` provides centered card container with consistent styling
- **Page layer**: Composes layout + form components (e.g., `LoginPage`)
- **Form layer**: Self-contained forms with validation, submission, and error handling

**Auth Flows Implemented:**
1. **Login**: Email/password → `signIn()` → redirect to `/` or `?returnTo` path
2. **Logout**: `signOut()` → navigate to `/login` (graceful on API failure)
3. **Reset Password Request**: Email submission → `requestPasswordReset()` → success state
4. **Reset Password Confirm**: Token + new password → `confirmPasswordReset()` → redirect to login
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File | Purpose |
|------|---------|
| `auth-layout.tsx` | Shared centered-card layout for auth pages (login, reset password, etc.) |
| `login-form.tsx` | React Hook Form + Zod login form that calls `signIn()` and handles redirect-after-login |
| `login-page.tsx` | Composes AuthLayout + LoginForm |

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

<!-- AGENTS-GENERATED:START ui-conventions -->
## UI Conventions
### Layout Structure
```tsx
<div className="min-h-screen flex items-center justify-center bg-background p-4">
  <Card className="w-full max-w-md">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
</div>
```

### Form Structure
- **Spacing**: `className="space-y-4"` on `<Form>` for consistent vertical rhythm
- **Fields**: Use `Field` wrapper with `FieldLabel` → `FieldControl` → `FieldError` hierarchy
- **Input styling**: `Input` component with `type="password"` for sensitive fields
- **Button**: `className="w-full"` for full-width submit buttons
- **Links**: `text-sm text-muted-foreground hover:text-primary underline` for secondary navigation

### Error Display
- **Field errors**: Rendered by `<FieldError />` component (RHF integration)
- **Server errors**: Manual `<p className="text-sm text-destructive">{serverError}</p>` below fields
- **Error messages**: User-friendly, non-technical language (e.g., "E-mail ou senha inválidos")

### Loading States
- Button text changes during submission: `"Entrando..."`, `"Enviando..."`, `"Redefinindo..."`
- Disabled state: `disabled={form.formState.isSubmitting}`
- No spinner icons — text change provides sufficient feedback
<!-- AGENTS-GENERATED:END ui-conventions -->

<!-- AGENTS-GENERATED:START security -->
## Security Patterns
### Input Validation
- **Email**: `z.email("E-mail inválido")` — Zod built-in email validation
- **Password**: `z.string().min(1, "Senha é obrigatória")` — required field check
- **New Password**: `z.string().min(8, "A senha deve ter no mínimo 8 caracteres")` — minimum length
- **Password Confirmation**: `.refine()` for cross-field matching validation

### Error Handling
```tsx
// Server error parsing pattern
try {
  await authFunction(values);
} catch (err: unknown) {
  const errData = (err as { response?: { data?: { errors?: Array<{ message?: string }> } } })?.response?.data;
  const msg = errData?.errors?.[0]?.message;
  setServerError(msg || "User-friendly fallback message");
}
```

### Security Best Practices
- **Password fields**: `type="password"` with `autoComplete="current-password"` or `autoComplete="new-password"`
- **Token handling**: Tokens passed as props to form components, never stored in local state
- **Expired token detection**: Check error message for "expired"/"expirad" keywords → show actionable message
- **Logout resilience**: Wrap `signOut()` in try-catch, navigate anyway (graceful degradation)
- **No sensitive data in URLs**: Tokens passed via props, not query params (except for token validation in route loaders)

### Route Protection
- Public auth routes use `requireGuest()` in loader
- Protected routes use `requireAuth()` in loader
- Login redirect preserves `?returnTo` query param for post-login navigation
<!-- AGENTS-GENERATED:END security -->

<!-- AGENTS-GENERATED:START auth-flows -->
## Authentication Flows
### Login Flow
```
[LoginPage] → [LoginForm] → signIn({email, password})
  ↓ success
  → Extract ?returnTo from URL or default to "/"
  → navigate(returnTo)
  ↓ error
  → Parse error.response.data.errors[0].message
  → Display user-friendly message
```

### Logout Flow
```
[LogoutButton] → signOut()
  ↓ success
  → navigate("/login")
  ↓ error (caught)
  → Log warning in dev mode only
  → navigate("/login") anyway (graceful degradation)
```

### Reset Password Request Flow
```
[ResetPasswordForm] → requestPasswordReset(email)
  ↓ success
  → setIsSuccess(true)
  → Show confirmation message
  → Link to "/login"
  ↓ error
  → Display generic error ("Erro ao enviar. Tente novamente.")
```

### Reset Password Confirm Flow
```
[ResetPasswordConfirmForm] (receives token prop)
  → confirmPasswordReset({token, password, confirmPassword})
  ↓ success
  → navigate("/login")
  ↓ error
  → Check for "expired" in message
  → Show specific message ("Link expirado. Solicite um novo.")
```
<!-- AGENTS-GENERATED:END auth-flows -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern | Reference file | Key features |
|---------|---------------|--------------|
| Auth page layout | `src/components/auth/auth-layout.tsx` | Centered card, responsive max-width, consistent header/content structure |
| React Hook Form + Zod (simple) | `src/components/auth/login-form.tsx` | Basic email/password validation, returnTo redirect, server error handling |
| React Hook Form + Zod (cross-field refine) | `src/components/auth/reset-password-confirm-form.tsx` | `.refine()` for password match, token prop, expired token detection |
| React Hook Form + conditional view | `src/components/auth/reset-password-form.tsx` | Success state toggle, two-step flow (form → confirmation message) |
| Logout action | `src/components/auth/logout-button.tsx` | Graceful error handling, dev-only logging, guaranteed navigation |
<!-- AGENTS-GENERATED:END golden-samples -->
