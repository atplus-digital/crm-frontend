<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-14 -->

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
2. **Reset Password Request**: Email submission → `requestPasswordReset()` → success state
3. **Reset Password Confirm**: Token + new password → `confirmPasswordReset()` → redirect to login
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File                              | Purpose                                                                                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `auth-layout.tsx`                 | `GuestLayout` component — centered card layout for auth pages with title/description props                                               |
| `login-form.tsx`                  | `LoginForm` — React Hook Form + Zod login form, calls `signIn()`, handles `?returnTo` redirect, uses `toast` for errors                  |
| `login-page.tsx`                  | `LoginPage` — Composes `GuestLayout` + `LoginForm` with CRM ATPlus branding                                                              |
| `reset-password-form.tsx`         | `ResetPasswordForm` (default export) — React Hook Form + Zod email form with success state toggle                                        |
| `reset-password-confirm-form.tsx` | `ResetPasswordConfirmForm` (default export) — React Hook Form + Zod new password form with cross-field validation, receives `token` prop |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Components call auth functions through `#/features/auth`; they do not import client or store sub-files directly.
- **All forms use React Hook Form + Zod** — `useForm` from `react-hook-form`, `zodResolver` from `@hookform/resolvers`, `Form`/`Field`/`FieldLabel`/`FieldControl`/`FieldError` from `#/components/ui/form`.
- **Error notifications use `toast` from `sonner`** — server errors displayed via `toast.error()` with `extractNocoBaseError()` helper for parsing.
- `form.formState.isSubmitting` for button state — never manual `isLoading` state.
- Auth pages use `GuestLayout` for the centered card layout — never duplicate the `min-h-screen flex items-center justify-center` wrapper.
- `login-page.tsx` and route files compose `GuestLayout`; form components stay layout-free.
- Navigation uses `Link`/`useNavigate` from `react-router` — `navigate(returnTo)` (string path), not object syntax.
- **Export patterns**: Named exports for components used externally (`LoginForm`, `GuestLayout`, `LoginPage`), default exports for form components used in routes (`ResetPasswordForm`, `ResetPasswordConfirmForm`).
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
- **Success state**: Conditional rendering with `useState<boolean>` to toggle form → confirmation message

### Error Display
- **Field errors**: Rendered by `<FieldError />` component (RHF integration)
- **Server errors**: Use `toast.error()` from `sonner` with `extractNocoBaseError()` helper for parsing NocoBase error responses
- **Error messages**: User-friendly, non-technical language in Portuguese (e.g., "E-mail ou senha inválidos", "Link expirado. Solicite um novo.")

### Loading States
- Button text changes during submission: `"Entrando..."`, `"Enviando..."`, `"Redefinindo..."`
- Disabled state: `disabled={form.formState.isSubmitting}`
- No spinner icons — text change provides sufficient feedback

### shadcn Components Used
| Component                                                           | Source                   | Usage                                  |
| ------------------------------------------------------------------- | ------------------------ | -------------------------------------- |
| `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` | `#/components/ui/card`   | Layout wrapper in `GuestLayout`        |
| `Button`                                                            | `#/components/ui/button` | Submit buttons with full-width styling |
| `Input`                                                             | `#/components/ui/input`  | Email and password fields              |
| `Form`, `Field`, `FieldLabel`, `FieldControl`, `FieldError`         | `#/components/ui/form`   | RHF form structure with validation     |
<!-- AGENTS-GENERATED:END ui-conventions -->

<!-- AGENTS-GENERATED:START security -->
## Security Patterns
### Input Validation
- **Email**: `z.email("E-mail inválido")` — Zod built-in email validation
- **Password**: `z.string().min(1, "Senha é obrigatória")` — required field check
- **New Password**: `z.string().min(8, "A senha deve ter no mínimo 8 caracteres")` — minimum length
- **Password Confirmation**: `.refine((data) => data.password === data.confirmPassword, { message: "As senhas não coincidem", path: ["confirmPassword"] })`

### Error Handling
```tsx
// Server error parsing pattern with toast notifications
import { toast } from "sonner";
import { extractNocoBaseError } from "#/lib/api-errors";

try {
  await authFunction(values);
} catch (err: unknown) {
  toast.error(extractNocoBaseError(err, "Fallback message"));
}
```

### Security Best Practices
- **Password fields**: `type="password"` with `autoComplete="current-password"` or `autoComplete="new-password"`
- **Token handling**: Tokens passed as props to form components (`ResetPasswordConfirmFormProps`), never stored in local state
- **Expired token detection**: Check error message for "expired"/"expirad" keywords → show actionable message "Link expirado. Solicite um novo."
- **No sensitive data in URLs**: Tokens passed via props, not query params (except for token validation in route loaders)
- **Conditional features**: `VITE_DISABLE_FORGOT_PASSWORD` env var controls visibility of password reset link

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
  → Extract ?returnTo from window.location.search
  → navigate(returnTo)
  ↓ error
  → extractNocoBaseError(err, "E-mail ou senha inválidos")
  → toast.error(message)
```

### Reset Password Request Flow
```
[ResetPasswordForm] → requestPasswordReset(email)
  ↓ success
  → setIsSuccess(true)
  → Show confirmation message
  → Link to "/login"
  ↓ error
  → toast.error("Erro ao enviar. Tente novamente.")
```

### Reset Password Confirm Flow
```
[ResetPasswordConfirmForm] (receives token prop)
  → confirmPasswordReset({token, password, confirmPassword})
  ↓ success
  → navigate("/login")
  ↓ error
  → extractNocoBaseError(err, "Erro ao redefinir. Tente novamente.")
  → Check for "expired"/"expirad" in message
  → Show specific message or toast.error(message)
```
<!-- AGENTS-GENERATED:END auth-flows -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern                                    | Reference file                                        | Key features                                                                                         |
| ------------------------------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Auth page layout                           | `src/components/auth/auth-layout.tsx`                 | `GuestLayout` with `title`/`description` props, centered card, `w-full max-w-md`                     |
| React Hook Form + Zod (simple)             | `src/components/auth/login-form.tsx`                  | Basic email/password validation, `?returnTo` redirect, `toast.error()` with `extractNocoBaseError()` |
| React Hook Form + Zod (cross-field refine) | `src/components/auth/reset-password-confirm-form.tsx` | `.refine()` for password match, `token` prop, expired token detection, `autoComplete="new-password"` |
| React Hook Form + conditional view         | `src/components/auth/reset-password-form.tsx`         | `useState<boolean>` success state toggle, two-step flow (form → confirmation message)                |
<!-- AGENTS-GENERATED:END golden-samples -->
