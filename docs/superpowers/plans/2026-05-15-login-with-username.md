# Login com E-mail ou Usuário — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Allow users to log in and request password resets using either email or username via a single "E-mail ou usuário" field, leveraging NocoBase's native `account` parameter.

**Architecture:** Replace `email` field with `account` field throughout the auth flow. NocoBase accepts `account` natively in `auth:signIn` and `auth:lostPassword` — no dispatch logic or lookup needed. Changes are limited to 6 files: types, service, repository, login form, reset page, and reset route.

**Tech Stack:** React 19, TypeScript, Zod, React Hook Form, NocoBase SDK

---

### Task 1: Update auth types

**Files:**

- Modify: `src/features/auth/utils/types.ts`

- [ ] **Step 1: Update `LoginCredentials` and `ResetPasswordRequest` interfaces**

In `src/features/auth/utils/types.ts`, change:

```typescript
// Before (line 50-52)
export interface LoginCredentials {
  email: string;
  password: string;
}

// After
export interface LoginCredentials {
  account: string;
  password: string;
}
```

```typescript
// Before (line 55-57)
export interface ResetPasswordRequest {
  email: string;
}

// After
export interface ResetPasswordRequest {
  account: string;
}
```

- [ ] **Step 2: Run typecheck to see all breakage**

Run: `pnpm typecheck 2>&1 | head -40`

Expected: Type errors in `service.ts`, `login-form.tsx`, `reset-password.tsx`, `nocobase-repository.ts` — this confirms all call sites.

- [ ] **Step 3: Commit**

```bash
git add src/features/auth/utils/types.ts
git commit -m "refactor(auth): rename email to account in LoginCredentials and ResetPasswordRequest"
```

---

### Task 2: Update NocoBase repository

**Files:**

- Modify: `src/repositories/nocobase-repository.ts`

- [ ] **Step 1: Update `signIn` method signature and body**

In `src/repositories/nocobase-repository.ts`, change the `signIn` method (around line 252-258):

```typescript
// Before
async signIn(credentials: {
    email: string;
    password: string;
}): Promise<{ data: { data: { token: string; user: unknown } } }> {
    log.info("Sign in attempt", { email: credentials.email });
    return await this.client.auth.signIn(credentials);
}

// After
async signIn(credentials: {
    account: string;
    password: string;
}): Promise<{ data: { data: { token: string; user: unknown } } }> {
    log.info("Sign in attempt", { account: credentials.account });
    return await this.client.auth.signIn(credentials);
}
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck 2>&1 | head -20`

Expected: Error in `service.ts` passing `{ email, password }` — will fix in Task 3.

- [ ] **Step 3: Commit**

```bash
git add src/repositories/nocobase-repository.ts
git commit -m "refactor(auth): accept account param in repository signIn"
```

---

### Task 3: Update auth service

**Files:**

- Modify: `src/features/auth/utils/service.ts`

- [ ] **Step 1: Update `signIn` to pass `account`**

In `src/features/auth/utils/service.ts`, update the `signIn` function (around line 23-46):

```typescript
// Before (line 26)
log.info("Sign in attempt", { email: credentials.email });
// After
log.info("Sign in attempt", { account: credentials.account });

// Before (line 37)
await signIn({ email: values.email, password: values.password });
// This line is in login-form.tsx, not here. In service.ts, the signIn just passes credentials through.
```

The `signIn` function body stays the same — it already passes `credentials` to `nocobaseRepository.signIn(credentials)`, and the type of `credentials` is now `LoginCredentials` which has `account` instead of `email`. No other changes needed in the function body.

- [ ] **Step 2: Update `requestPasswordReset` to use `account`**

In `src/features/auth/utils/service.ts`, update `requestPasswordReset` (around line 84-99):

```typescript
// Before
export async function requestPasswordReset(email: string): Promise<void> {
	log.info("Password reset requested", { email });
	const payload: ResetPasswordRequest = { email };

// After
export async function requestPasswordReset(account: string): Promise<void> {
	log.info("Password reset requested", { account });
	const payload: ResetPasswordRequest = { account };
```

The rest of the function body (`{ ...payload, baseURL: window.location.origin }`) stays the same — the spread will now include `account` instead of `email`.

- [ ] **Step 3: Run typecheck**

Run: `pnpm typecheck 2>&1 | head -30`

Expected: Errors in `login-form.tsx` and `reset-password.tsx` — will fix in Tasks 4 and 5.

- [ ] **Step 4: Commit**

```bash
git add src/features/auth/utils/service.ts
git commit -m "refactor(auth): use account param in signIn and requestPasswordReset"
```

---

### Task 4: Update login form

**Files:**

- Modify: `src/features/auth/components/login-form.tsx`

- [ ] **Step 1: Update Zod schema, form fields, and submit handler**

Replace the full content of `src/features/auth/components/login-form.tsx`:

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
  Form,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { env } from "#/env";
import { signIn } from "#/features/auth";
import { extractNocoBaseError } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";

const loginSchema = z.object({
  account: z.string().min(1, "Obrigatório"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type LoginValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const navigate = useNavigate();

  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { account: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginValues> = async (values) => {
    try {
      await signIn({ account: values.account, password: values.password });
      const search = new URLSearchParams(window.location.search);
      const returnTo = search.get("returnTo") || routePaths.home;
      await navigate(returnTo);
    } catch (err: unknown) {
      toast.error(
        extractNocoBaseError(err, "E-mail, usuário ou senha inválidos"),
      );
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4">
      <Field name="account">
        <FieldLabel>E-mail ou usuário</FieldLabel>
        <FieldControl>
          <Input
            type="text"
            placeholder="seu@email.com ou nome de usuário"
            {...form.register("account")}
            autoComplete="username"
          />
        </FieldControl>
        <FieldError />
      </Field>
      <Field name="password">
        <FieldLabel>Senha</FieldLabel>
        <FieldControl>
          <Input
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
            autoComplete="current-password"
          />
        </FieldControl>
        <FieldError />
      </Field>
      <Button
        type="submit"
        className="w-full"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
      </Button>
      {!env.VITE_DISABLE_FORGOT_PASSWORD && (
        <div className="text-center">
          <Link
            to={routePaths.reset_password}
            className="text-sm text-muted-foreground hover:text-primary underline"
          >
            Esqueceu sua senha?
          </Link>
        </div>
      )}
    </Form>
  );
}
```

Key changes from original:

- Schema field: `email` → `account`, validation: `z.email("E-mail inválido")` → `z.string().min(1, "Obrigatório")`
- Default values: `{ email: "", password: "" }` → `{ account: "", password: "" }`
- Submit: `signIn({ email: values.email, password: values.password })` → `signIn({ account: values.account, password: values.password })`
- Error message: `"E-mail ou senha inválidos"` → `"E-mail, usuário ou senha inválidos"`
- Field name: `email` → `account`
- Label: `E-mail` → `E-mail ou usuário`
- Input type: `type="email"` → `type="text"`
- Placeholder: `seu@email.com` → `seu@email.com ou nome de usuário`
- autoComplete: `autoComplete="email"` → `autoComplete="username"`

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck 2>&1 | head -20`

Expected: No errors related to login form. Possible remaining errors in reset-password files.

- [ ] **Step 3: Commit**

```bash
git add src/features/auth/components/login-form.tsx
git commit -m "feat(auth): login form accepts email or username via account field"
```

---

### Task 5: Update reset password page

**Files:**

- Modify: `src/pages/auth/reset-password.tsx`

- [ ] **Step 1: Update Zod schema, form fields, and success message**

Replace the full content of `src/pages/auth/reset-password.tsx`:

```tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "#/components/ui/button";
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
  Form,
} from "#/components/ui/form";
import { Input } from "#/components/ui/input";
import { requestPasswordReset } from "#/features/auth";
import { routePaths } from "#/routes/route-paths";

const schema = z.object({
  account: z.string().min(1, "Obrigatório"),
});

type ResetPasswordValues = z.infer<typeof schema>;

export function ResetPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(schema),
    defaultValues: { account: "" },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(values: ResetPasswordValues) {
    try {
      await requestPasswordReset(values.account);
      setIsSuccess(true);
    } catch {
      toast.error("Erro ao enviar. Tente novamente.");
    }
  }

  if (isSuccess) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          Se a conta estiver cadastrada, você receberá as instruções para
          redefinir sua senha.
        </p>
        <Link
          to={routePaths.login}
          className="text-sm text-primary hover:underline"
        >
          Voltar para o login
        </Link>
      </div>
    );
  }

  return (
    <Form form={form} onSubmit={onSubmit} className="space-y-4">
      <Field name="account">
        <FieldLabel>E-mail ou usuário</FieldLabel>
        <FieldControl>
          <Input
            type="text"
            placeholder="seu@email.com ou nome de usuário"
            {...form.register("account")}
            autoComplete="username"
          />
        </FieldControl>
        <FieldError />
      </Field>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Enviando..." : "Enviar"}
      </Button>
      <div className="text-center">
        <Link
          to={routePaths.login}
          className="text-sm text-muted-foreground hover:text-primary underline"
        >
          Voltar para o login
        </Link>
      </div>
    </Form>
  );
}
```

Key changes from original:

- Schema field: `email` → `account`, validation: `z.string().min(1, "Obrigatório").email("E-mail inválido")` → `z.string().min(1, "Obrigatório")`
- Default values: `{ email: "" }` → `{ account: "" }`
- Submit: `requestPasswordReset(values.email)` → `requestPasswordReset(values.account)`
- Success message: `"Se o e-mail estiver cadastrado"` → `"Se a conta estiver cadastrada"`
- Field name: `email` → `account`
- Label: `E-mail` → `E-mail ou usuário`
- Input type: `type="email"` → `type="text"`
- Placeholder: `seu@email.com` → `seu@email.com ou nome de usuário`
- autoComplete: `autoComplete="email"` → `autoComplete="username"`

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`

Expected: Clean — no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/pages/auth/reset-password.tsx
git commit -m "feat(auth): reset password accepts email or username via account field"
```

---

### Task 6: Update reset password route description

**Files:**

- Modify: `src/routes/auth/reset-password/index.tsx`

- [ ] **Step 1: Update GuestLayout description**

In `src/routes/auth/reset-password/index.tsx`, change line 24:

```typescript
// Before
description = "Informe seu e-mail para receber as instruções";

// After
description = "Informe seu e-mail ou usuário para receber as instruções";
```

- [ ] **Step 2: Commit**

```bash
git add src/routes/auth/reset-password/index.tsx
git commit -m "feat(auth): update reset password route description for account field"
```

---

### Task 7: Update AGENTS.md docs

**Files:**

- Modify: `src/features/auth/AGENTS.md`
- Modify: `src/repositories/AGENTS.md`

- [ ] **Step 1: Update auth AGENTS.md**

In `src/features/auth/AGENTS.md`, update the API reference table for `signIn` (line 76):

```markdown
// Before
| `signIn` | `(credentials: LoginCredentials) => Promise<{ token: string; user: AuthUser }>` | Authenticates user, updates store and permissions |

// After
| `signIn` | `(credentials: LoginCredentials) => Promise<{ token: string; user: AuthUser }>` | Authenticates user via account (email or username), updates store and permissions |
```

Also update the `requestPasswordReset` row (line 79):

```markdown
// Before
| `requestPasswordReset` | `(email: string) => Promise<void>` | Calls `auth:lostPassword` |

// After
| `requestPasswordReset` | `(account: string) => Promise<void>` | Calls `auth:lostPassword` with account (email or username) |
```

And the `LoginCredentials` description in key files table if present — check types.ts row.

- [ ] **Step 2: Update repositories AGENTS.md**

In `src/repositories/AGENTS.md`, update the `signIn` method description in the API table:

```markdown
// Before
| `signIn(credentials)` | Authentication endpoint wrapper |

// After
| `signIn(credentials)` | Authentication via account (email or username) |
```

- [ ] **Step 3: Commit**

```bash
git add src/features/auth/AGENTS.md src/repositories/AGENTS.md
git commit -m "docs(auth): update AGENTS.md for account-based login"
```

---

### Task 8: Verify and final typecheck

- [ ] **Step 1: Run full typecheck**

Run: `pnpm typecheck`

Expected: Clean — no type errors.

- [ ] **Step 2: Run linter**

Run: `pnpm biome:fix`

Expected: No new errors.

- [ ] **Step 3: Run tests (if any auth-related)**

Run: `pnpm test -- --reporter=verbose 2>&1 | tail -30`

Expected: All existing tests pass. No auth-specific test files need changes since `LoginCredentials` is internal.

- [ ] **Step 4: Manual smoke test**

Start dev server with `pnpm dev` and verify:

1. Login page shows "E-mail ou usuário" label and generic placeholder
2. Login works with email
3. Login works with username
4. Reset password page shows "E-mail ou usuário" label
5. Reset password works with email
6. Reset password works with username (if testable)
