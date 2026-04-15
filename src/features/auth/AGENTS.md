<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-14 -->

# AGENTS.md — auth

<!-- AGENTS-GENERATED:START overview -->
## Overview
Authentication module — NocoBase SDK client, TanStack Store for auth state (user + token), service methods, and React Router route guards. Integrates with permissions module for RBAC. Uses structured logging via `createLogger("auth")` from `#/lib/logger`.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File              | Purpose                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `index.ts`        | Barrel export — `nocobaseClient`, guards, service methods, store + actions, types, schemas                         |
| `client.ts`       | NocoBase SDK `APIClient` singleton com `baseURL` do env e `storageType: "localStorage"`                            |
| `guard.ts`        | `requireAuth()`, `requireGuest()`, `validateTokenOnInit()`, `isNetworkError()` para route loader                   |
| `service.ts`      | Auth operations: `signIn`, `signOut`, `checkAuth`, `requestPasswordReset`, `confirmPasswordReset`, `updateProfile` |
| `store.ts`        | TanStack Store com `user`, `token`, `isAuthenticated` + actions `setUser`, `setToken`, `reset`                     |
| `types.ts`        | `AuthUser`, `AuthState`, `LoginCredentials`, `ResetPasswordConfirm`, `UpdateProfilePayload`, Zod schemas           |
| `service.test.ts` | Testes unitários do service layer (mocks do repository)                                                            |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Import auth APIs from `#/features/auth`; external code should not reach into sub-files directly.
- `service.ts` talks to `nocobaseRepository` — never import `nocobaseClient` directly in services.
- Guards (`guard.ts`) read `authStore.state` directly and throw `redirect()` from React Router — they never call API.
- Store (`store.ts`) is TanStack Store — state é imutável, atualizações via `setState()`.
- Form components manage local loading/error state; global store only tracks `user`, `token`, `isAuthenticated`.
- `validateTokenOnInit()` preserva estado em erros de rede — não faz logout em falhas transitórias.
- All logging uses `createLogger("auth")` from `#/lib/logger` — never raw `console.*` calls.
- Password reset usa `X-Authenticator: basic` header — required pelo NocoBase.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern             | Reference file                       |
| ------------------- | ------------------------------------ |
| Barrel import usage | `src/components/auth/login-form.tsx` |
| Route guard wiring  | `src/routes/dashboard.tsx`           |
<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START api-reference -->
## Main Functions & API

### Guards (`guard.ts`)
| Function              | Signature                     | Purpose                                                        | Usage Example                                                          |
| --------------------- | ----------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `requireAuth`         | `(pathname: string) => never` | Redirect to `/login?returnTo=<pathname>` if not authenticated  | `loader` de rotas protegidas (`dashboard.tsx`, `profile.tsx`)          |
| `requireGuest`        | `() => never`                 | Redirect to `/` if already authenticated                       | `loader` de rotas públicas de auth (`login.tsx`, `reset-password.tsx`) |
| `validateTokenOnInit` | `() => Promise<void>`         | Validate stored token on app init, restore user or clear state | Chamado no `loader` da dashboard quando há token sem usuário           |
| `isNetworkError`      | `(err: unknown) => boolean`   | Classify error as network/transport vs auth error              | Usado internamente para preservar estado em falhas transitórias        |

### Service (`service.ts`)
| Function               | Signature                                              | Purpose                                                      | Returns                             |
| ---------------------- | ------------------------------------------------------ | ------------------------------------------------------------ | ----------------------------------- |
| `signIn`               | `(credentials: LoginCredentials) => Promise<...>`      | Autentica usuário via NocoBase, atualiza store e permissões  | `{ token: string, user: AuthUser }` |
| `signOut`              | `() => Promise<void>`                                  | Invalida token (SDK + local), limpa estado e permissões      | `Promise<void>`                     |
| `checkAuth`            | `() => Promise<AuthUser>`                              | Verifica token válido via `auth:check`, atualiza store       | `AuthUser`                          |
| `requestPasswordReset` | `(email: string) => Promise<void>`                     | Envia email de reset de senha via `auth:lostPassword`        | `Promise<void>`                     |
| `confirmPasswordReset` | `(data: ResetPasswordConfirm) => Promise<void>`        | Confirma nova senha com token via `auth:resetPassword`       | `Promise<void>`                     |
| `updateProfile`        | `(payload: UpdateProfilePayload) => Promise<AuthUser>` | Atualiza `email`, `nickname`, `phone` do usuário autenticado | `AuthUser` (via `checkAuth()`)      |

### Store (`store.ts`)
| Export      | Type                               | Purpose                                               |
| ----------- | ---------------------------------- | ----------------------------------------------------- |
| `authStore` | `Store<AuthState>`                 | TanStack Store com `user`, `token`, `isAuthenticated` |
| `setUser`   | `(user: AuthUser \| null) => void` | Atualiza usuário no estado global                     |
| `setToken`  | `(token: string \| null) => void`  | Atualiza token e deriva `isAuthenticated`             |
| `reset`     | `() => void`                       | Limpa estado completo (logout)                        |

### Client (`client.ts`)
| Export           | Type        | Purpose                                                        |
| ---------------- | ----------- | -------------------------------------------------------------- |
| `nocobaseClient` | `APIClient` | Singleton com `baseURL` do env e `storageType: "localStorage"` |

### Types (`types.ts`)
| Export                 | Type                                                                                                | Purpose                                  |
| ---------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `AuthUser`             | `Pick<Users, "id" \| "email" \| "username" \| "nickname" \| "phone"> & { roles: PermissionRole[] }` | Usuário autenticado com roles            |
| `AuthState`            | `{ user: AuthUser \| null, token: string \| null, isAuthenticated: boolean }`                       | Estado da store de auth                  |
| `LoginCredentials`     | `{ email: string, password: string }`                                                               | Input do `signIn()`                      |
| `ResetPasswordConfirm` | `{ token: string, password: string, confirmPassword: string }`                                      | Input do `confirmPasswordReset()`        |
| `UpdateProfilePayload` | `{ email: string, nickname: string, phone: string }`                                                | Input do `updateProfile()`               |
| `AuthValidationError`  | `class extends Error`                                                                               | Erro de validação com `zodError` anexado |
| `authUserSchema`       | `ZodSchema<AuthUser>`                                                                               | Validação de usuário da API              |
| `authResponseSchema`   | `ZodSchema<{ token: string, user: AuthUser }>`                                                      | Validação de resposta de login           |
<!-- AGENTS-GENERATED:END api-reference -->

<!-- AGENTS-GENERATED:START security-conventions -->
## Security Conventions

### Token Handling
- Token armazenado via `NocoBase SDK` no `localStorage` com prefixo configurável (`VITE_LOCAL_STORAGE_BASE_KEY`, default: `"crm-atplus"`)
- SDK gerencia persistência automática — `nocobaseClient.auth.token` acessa token atual
- Validação inicial (`validateTokenOnInit`) tolera erros de rede (`isNetworkError`) para evitar logout em falhas transitórias
- `signOut()` chama `nocobaseRepository.clearToken()` antes de `reset()` para limpeza explícita
- Token invalidado via API em `signOut()` — erro API é "swallowado" para garantir limpeza local

### Input Validation
- `authResponseSchema` e `authUserSchema` validam respostas da API com Zod
- `AuthValidationError` encapsula erros de validação com `zodError` anexado para debugging
- `authUserSchema` transforma `null` → `""` para `username`, `nickname`, `phone` (valores opcionais do NocoBase)
- Credential types (`LoginCredentials`, `ResetPasswordConfirm`, `UpdateProfilePayload`) definem contratos explícitos
- Forms usam Zod + React Hook Form para validação client-side antes de chamar service

### Error Handling
- Erros de rede em `checkAuth()` e `validateTokenOnInit()` preservam estado autenticado (evita logout em indisponibilidade do servidor)
- `signOut()` swallowa erros da API (`try/catch` com log `warn`) para garantir limpeza local do estado
- Logging estruturado via `createLogger("auth")` — dev mode mostra todos os níveis, produção apenas `warn` e `error`
- Components usam `extractNocoBaseError(err, fallbackMessage)` para parse de erros da API

### Permissions Integration
- `setPermissionsFromRoles(user.roles)` chamado após:
  - `signIn()` bem-sucedido
  - `checkAuth()` bem-sucedido
  - `validateTokenOnInit()` com token válido
- `resetPermissions()` chamado no:
  - `signOut()` (logout explícito)
  - Falha de validação de token (token expirado/inválido)
- Roles extraídos de `user.roles` — array de `PermissionRole` do módulo `#/features/permissions`

### Route Protection
- `requireAuth(pathname)` lança `redirect()` do React Router — não retorna valor, lança exceção
- `requireGuest()` lança `redirect("/")` se usuário já estiver autenticado
- `returnTo` parameter: `requireAuth` preserva pathname atual na query string para redirect pós-login
- Guards leem `authStore.state` diretamente — não chamam API
<!-- AGENTS-GENERATED:END security-conventions -->

<!-- AGENTS-GENERATED:START commands -->
## Module-Specific Commands

```bash
# Testar autenticação localmente (dev server)
pnpm dev

# Validar tipos do módulo
pnpm dlx tsc --noEmit --project tsconfig.json

# Rodar testes do módulo de auth
pnpm test src/features/auth

# Verificar uso do módulo no código
pnpm dlx grep -r "from \"#/features/auth\"" src/

# Verificar imports diretos (anti-pattern)
pnpm dlx grep -r "from \"#/features/auth/\"" src/
```
<!-- AGENTS-GENERATED:END commands -->
