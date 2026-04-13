<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

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

<!-- AGENTS-GENERATED:START api-reference -->
## Main Functions & API

### Guards (`guard.ts`)
| Function | Purpose | Usage |
|----------|---------|-------|
| `requireAuth(pathname: string)` | Redirect to `/login` if not authenticated | `loader` de rotas protegidas |
| `requireGuest()` | Redirect to `/` if already authenticated | `loader` de rotas públicas de auth |
| `validateTokenOnInit()` | Validate stored token on app init | Chamado no bootstrap da aplicação |

### Service (`service.ts`)
| Function | Purpose | Returns |
|----------|---------|---------|
| `signIn(credentials)` | Autentica usuário via NocoBase | `{ token, user }` |
| `signOut()` | Invalida token e limpa estado | `Promise<void>` |
| `checkAuth()` | Verifica token válido via `auth:check` | `AuthUser` |
| `requestPasswordReset(email)` | Envia email de reset de senha | `Promise<void>` |
| `confirmPasswordReset(data)` | Confirma nova senha com token | `Promise<void>` |

### Store (`store.ts`)
| Action | Purpose |
|--------|---------|
| `setUser(user)` | Atualiza usuário no estado global |
| `setToken(token)` | Atualiza token e `isAuthenticated` |
| `reset()` | Limpa estado (logout) |

### Client (`client.ts`)
| Export | Purpose |
|--------|---------|
| `nocobaseClient` | Singleton `APIClient` com baseURL do env |
<!-- AGENTS-GENERATED:END api-reference -->

<!-- AGENTS-GENERATED:START security-conventions -->
## Security Conventions

### Token Handling
- Token armazenado via `NocoBase SDK` no `localStorage` com prefixo do env (`VITE_LOCAL_STORAGE_BASE_KEY`)
- Validação inicial tolera erros de rede (`isNetworkError`) para evitar logout em falhas transitórias
- `signOut()` limpa token manualmente antes de chamar `reset()`

### Input Validation
- `authResponseSchema` e `authUserSchema` validam respostas da API com Zod
- `AuthValidationError` encapsula erros de validação com detalhe do Zod
- Credential types (`LoginCredentials`, `ResetPasswordConfirm`) definem contratos explícitos

### Error Handling
- Erros de rede em `checkAuth()` preservam estado autenticado (evita logout em indisponibilidade do servidor)
- `signOut()` swallowa erros da API para garantir limpeza local do estado
- Modo dev (`isDev`) loga warnings para debugging sem expor detalhes em produção

### Permissions Integration
- `setPermissionsFromRoles(user.roles)` chamado após autenticação bem-sucedida
- `resetPermissions()` chamado no logout ou falha de validação de token
<!-- AGENTS-GENERATED:END security-conventions -->

<!-- AGENTS-GENERATED:START commands -->
## Module-Specific Commands

```bash
# Testar autenticação localmente
pnpm dev

# Validar tipos do módulo
pnpm dlx tsc --noEmit --project tsconfig.json

# Verificar uso do módulo no código
pnpm dlx grep -r "from \"#/modules/auth\"" src/
```
<!-- AGENTS-GENERATED:END commands -->
