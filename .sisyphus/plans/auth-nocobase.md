# Autenticação CRM ATPlus — NocoBase Integration

## TL;DR

> **Quick Summary**: Implementar autenticação completa (login, logout, reset de senha) integrando com a API NocoBase em produção via `@nocobase/sdk`, usando JWT em localStorage + TanStack Store para estado de auth, com proteção de rotas via `beforeLoad` hooks.
> 
> **Deliverables**:
> - Módulo de autenticação (`src/modules/auth/`)
> - Página de login (`src/routes/login.tsx`)
> - Página de reset de senha (`src/routes/reset-password.tsx`)
> - Route guards em todas as rotas protegidas
> - NocoBase SDK client configurado
> - Auth store com TanStack Store
> - QueryClient com handling de 401
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 4 waves
> **Critical Path**: Task 1 → Task 3 → Task 4 → Task 5 → Task 8 → Task 9

---

## Context

### Original Request
Criar autenticação para o novo front-end do CRM ATPlus que integra com NocoBase em produção. O NocoBase já está em uso com usuários reais. Autenticação por e-mail e senha.

### Interview Summary
**Key Discussions**:
- **Client HTTP**: `@nocobase/sdk` — SDK oficial com Auth integrado
- **Token Storage**: localStorage + estado em memória (padrão NocoBase)
- **Rotas públicas**: Apenas `/login`
- **Escopo**: Login + logout + reset de senha (sem signUp, OAuth, MFA)
- **Testes**: Tests after com Vitest

**Research Findings**:
- NocoBase endpoints: `POST /auth:signIn`, `POST /auth:signOut`, `GET /auth:check`
- NocoBase usa JWT com Bearer token por padrão
- `CRM_NOCOBASE_URL` é server-only — precisa de variável client-side
- `@nocobase/sdk` não está instalado — precisa adicionar
- Scripts de geração de tipos usam fetch direto, mas doc recomenda SDK
- TanStack Start recomenda client-first pattern para auth

### Metis Review
**Identified Gaps** (addressed):
- `CRM_NOCOBASE_URL` inacessível no client → adicionar `VITE_CRM_NOCOBASE_URL`
- `UsersBase` contém campos sensíveis (`password`, `resetToken`) → criar `AuthUser` type
- SSR com localStorage → auth checks client-only
- Concurrent 401s → mutex para redirect único
- QueryClient precisa de `clear()` no logout
- `returnTo` parameter para redirecionamento pós-login

---

## Work Objectives

### Core Objective
Implementar fluxo completo de autenticação (login, logout, reset de senha) integrado com NocoBase API, com proteção de rotas e gerenciamento de sessão via JWT.

### Concrete Deliverables
- `src/modules/auth/` — store, types, hooks, NocoBase client
- `src/routes/login.tsx` — página de login
- `src/routes/reset-password.tsx` — página de reset de senha
- `src/components/auth/` — login form, reset password form
- Modificações em `src/env.ts`, `__root.tsx`, `root-provider.tsx`, `router.tsx`

### Definition of Done
- [ ] Login com email/senha funciona e redireciona para dashboard
- [ ] Logout limpa token e redireciona para /login
- [ ] Reset de senha envia email e permite trocar senha
- [ ] Rotas protegidas redirecionam para /login quando não autenticado
- [ ] Após login, redireciona para URL original (returnTo)
- [ ] Token expirado → redirect automático para /login
- [ ] `pnpm build` passa sem erros

### Must Have
- Login com email/senha via NocoBase API
- Logout com limpeza completa (token + query cache)
- Reset de senha (request + use token)
- Route guard via `beforeLoad` em todas as rotas exceto `/login`
- Auth store via TanStack Store
- `AuthUser` type (sem campos sensíveis)
- QueryClient 401 handling (redirect + clear)
- returnTo redirect (preservar URL original)
- Validação de token no init do app (não confiar apenas na presença no localStorage)
- UI em pt-BR

### Must NOT Have (Guardrails)
- **NÃO implementar RBAC/roles** — fora do escopo
- **NÃO adicionar OAuth** — sem Google, GitHub, etc.
- **NÃO criar signUp/registro** — usuários são gerenciados no NocoBase admin
- **NÃO adicionar MFA/2FA** — explicitamente excluído
- **NÃO criar API client genérico** — apenas auth calls
- **NÃO usar React Context para auth** — usar TanStack Store
- **NÃO usar createServerFn** — fluxo client-side JWT
- **NÃO decodificar JWT para user data** — usar `auth:check`
- **NÃO implementar token refresh** — redirect para login no expiry
- **NÃO adicionar form validation library** — controlled inputs com validação nativa
- **NÃO criar toast/notification system** — inline error messages
- **NÃO implementar "Remember me"** — token sempre persiste em localStorage
- **NÃO criar mais de 1 TanStack store para auth**
- **NÃO criar arquivos fora de** `src/modules/auth/`, `src/routes/`, `src/components/auth/`
- **NÃO espalhar lógica de auth em** `src/lib/`, `src/utils/`, `src/services/`

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: YES (Vitest configurado, testes nos scripts)
- **Automated tests**: Tests after
- **Framework**: Vitest + Testing Library

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Frontend/UI**: Use Playwright — Navigate, interact, assert DOM, screenshot
- **API/Backend**: Use Bash (curl) — Send requests, assert status + response fields
- **Store/Logic**: Use Bash (vitest) — Run tests, verify pass/fail

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately — foundation):
├── Task 1: Instalar @nocobase/sdk + configurar env vars [quick]
├── Task 2: Auth types — AuthUser, AuthResponse, etc. [quick]
└── Task 3: Auth store com TanStack Store [quick]

Wave 2 (After Wave 1 — core modules):
├── Task 4: NocoBase client + auth service (depends: 1, 2, 3) [unspecified-high]
├── Task 5: Route context extension + guard (depends: 2, 3) [unspecified-high]
└── Task 6: QueryClient 401 handling (depends: 3) [quick]

Wave 3 (After Wave 2 — UI):
├── Task 7: Login page (depends: 4, 5, 6) [visual-engineering]
├── Task 8: Password reset page (depends: 4, 5) [visual-engineering]
└── Task 9: Auth integration — wire everything (depends: 7, 8) [unspecified-high]

Wave FINAL (After ALL tasks — 4 parallel reviews):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
→ Present results → Get explicit user okay

Critical Path: T1 → T4 → T7 → T9 → F1-F4
Parallel Speedup: ~50% faster than sequential
Max Concurrent: 3 (Waves 1 & 2)
```

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|-----------|--------|------|
| 1 | — | 4 | 1 |
| 2 | — | 4, 5 | 1 |
| 3 | — | 4, 5, 6 | 1 |
| 4 | 1, 2, 3 | 7, 8 | 2 |
| 5 | 2, 3 | 7, 8, 9 | 2 |
| 6 | 3 | 7 | 2 |
| 7 | 4, 5, 6 | 9 | 3 |
| 8 | 4, 5 | 9 | 3 |
| 9 | 7, 8 | F1-F4 | 3 |

### Agent Dispatch Summary

- **Wave 1**: 3 tasks — T1 `quick`, T2 `quick`, T3 `quick`
- **Wave 2**: 3 tasks — T4 `unspecified-high`, T5 `unspecified-high`, T6 `quick`
- **Wave 3**: 3 tasks — T7 `visual-engineering`, T8 `visual-engineering`, T9 `unspecified-high`
- **FINAL**: 4 tasks — F1 `oracle`, F2 `unspecified-high`, F3 `unspecified-high`, F4 `deep`

---

## TODOs

- [x] 1. Instalar `@nocobase/sdk` + Configurar Variáveis de Ambiente

  **What to do**:
  - Instalar `@nocobase/sdk` via `pnpm add @nocobase/sdk`
  - Adicionar `VITE_CRM_NOCOBASE_URL` na seção `client:` do `src/env.ts` (NocoBase URL para uso no browser)
  - Manter `CRM_NOCOBASE_URL` na seção `server:` (já existe, para server-side scripts)
  - Adicionar `.env.local` entry para `VITE_CRM_NOCOBASE_URL` (ex: `https://crm.atplus.cloud/api`)
  - Verificar que `AUTH_SESSION_SECRET` já está configurado corretamente no env

  **Must NOT do**:
  - NÃO remover `CRM_NOCOBASE_URL` da seção server — scripts de geração de tipos ainda usam
  - NÃO instalar axios wrapper ou outras libs HTTP — usar SDK oficial
  - NÃO configurar SDK ainda — apenas instalar e configurar env

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single dependency install + env file edits
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `shadcn`: Não relevante — não é UI

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 2, 3)
  - **Blocks**: Task 4 (NocoBase client)
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/env.ts` — Arquivo de env com T3Env + Zod. A seção `server:` tem `CRM_NOCOBASE_URL` e `AUTH_SESSION_SECRET`. A seção `client:` tem `VITE_LOCAL_STORAGE_BASE_KEY`. Adicionar `VITE_CRM_NOCOBASE_URL` seguindo o mesmo padrão.

  **External References**:
  - NocoBase SDK docs: https://docs.nocobase.com/api/sdk/ — Referência para instalação e uso básico
  - NocoBase Auth SDK: https://docs.nocobase.com/api/sdk/auth — Auth module do SDK

  **WHY Each Reference Matters**:
  - `src/env.ts`: O padrão T3Env separa server/client vars. Variáveis client DEVEM ter prefixo `VITE_` para serem acessíveis no browser. Sem isso, o NocoBase URL não estaria disponível para as chamadas API do client.

  **Acceptance Criteria**:

  - [ ] `@nocobase/sdk` aparece em `package.json` dependencies
  - [ ] `VITE_CRM_NOCOBASE_URL` aparece na seção `client:` de `src/env.ts` com validação `z.url()`
  - [ ] `pnpm install` executa sem erros
  - [ ] `pnpm build` passa sem erros

  **QA Scenarios:**

  ```
  Scenario: SDK instalado corretamente
    Tool: Bash
    Preconditions: Repositório limpo
    Steps:
      1. Run: grep '"@nocobase/sdk"' package.json
      2. Assert: output contains "@nocobase/sdk" with version
      3. Run: pnpm build
      4. Assert: exit code 0, no errors
    Expected Result: SDK listado em dependencies, build passa
    Failure Indicators: SDK ausente, build falha com missing dependency
    Evidence: .sisyphus/evidence/task-1-sdk-installed.txt

  Scenario: Variável de ambiente client-side configurada
    Tool: Bash
    Preconditions: src/env.ts existe
    Steps:
      1. Run: grep 'VITE_CRM_NOCOBASE_URL' src/env.ts
      2. Assert: output contains "VITE_CRM_NOCOBASE_URL" in client section
    Expected Result: Variável definida com validação z.url()
    Failure Indicators: Variável ausente ou na seção errada (server:)
    Evidence: .sisyphus/evidence/task-1-env-configured.txt
  ```

  **Commit**: YES (group with Wave 1)
  - Message: `feat(auth): install @nocobase/sdk and configure client env vars`
  - Files: `package.json`, `pnpm-lock.yaml`, `src/env.ts`

- [x] 2. Auth Types — AuthUser, AuthResponse, AuthState

  **What to do**:
  - Criar `src/modules/auth/types.ts` com os tipos de autenticação:
    - `AuthUser` — subset de `UsersBase` SEM campos sensíveis (`password`, `resetToken`). Campos: `id`, `email`, `username`, `nickname`, `appLang`, `phone`
    - `AuthResponse` — shape da resposta do NocoBase: `{ data: { token: string; user: AuthUser } }`
    - `AuthState` — estado do auth store: `{ user: AuthUser | null; token: string | null; isAuthenticated: boolean; isLoading: boolean; error: string | null }`
    - `LoginCredentials` — `{ email: string; password: string }`
    - `ResetPasswordRequest` — `{ email: string }`
    - `ResetPasswordConfirm` — `{ token: string; password: string; confirmPassword: string }`
  - Exportar todos os tipos do `src/modules/auth/index.ts`

  **Must NOT do**:
  - NÃO incluir `password` ou `resetToken` no tipo `AuthUser`
  - NÃO criar tipos para RBAC/roles — fora do escopo
  - NÃO criar tipos para OAuth providers

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Type definitions only, no logic
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 3)
  - **Blocks**: Tasks 4, 5
  - **Blocked By**: None

  **References**:

  **API/Type References**:
  - `src/@types/generated/crm/users.ts` — Interface `UsersBase` com TODOS os campos do usuário NocoBase. Usar como base para `AuthUser`, REMOVENDO `password` (linha ~19), `resetToken` (linha ~22). Manter: id, email, username, nickname, appLang, phone.
  - NocoBase signIn response (da skill nocobase-docs): `POST /auth:signIn` retorna `{ "data": { "token": "...", "user": {...} } }`. Shape confirmado na documentação do SDK.

  **Pattern References**:
  - `src/@types/generated/crm/index.ts` — Padrão de exports e organização de tipos. Seguir o mesmo estilo de export.

  **WHY Each Reference Matters**:
  - `users.ts`: É a fonte canônica dos tipos de usuário gerados do NocoBase. O `AuthUser` DEVE ser derivado deste, não inventado. A exclusão de `password`/`resetToken` é crítica de segurança — esses campos nunca devem estar no client-side auth state.

  **Acceptance Criteria**:

  - [ ] Arquivo `src/modules/auth/types.ts` criado com todos os tipos listados
  - [ ] Arquivo `src/modules/auth/index.ts` criado exportando todos os tipos
  - [ ] `AuthUser` NÃO contém campos `password` ou `resetToken`
  - [ ] `pnpm build` passa sem erros

  **QA Scenarios:**

  ```
  Scenario: Tipos criados corretamente
    Tool: Bash
    Preconditions: Arquivo src/modules/auth/ existe
    Steps:
      1. Run: grep 'export.*AuthUser' src/modules/auth/types.ts
      2. Assert: output contains "AuthUser" type definition
      3. Run: grep 'password' src/modules/auth/types.ts
      4. Assert: NO "password" field in AuthUser type
      5. Run: grep 'resetToken' src/modules/auth/types.ts
      6. Assert: NO "resetToken" field in AuthUser type
      7. Run: pnpm build
      8. Assert: exit code 0
    Expected Result: Todos os tipos definidos, sem campos sensíveis, build passa
    Failure Indicators: Campos sensíveis presentes, tipos ausentes, build falha
    Evidence: .sisyphus/evidence/task-2-types-created.txt
  ```

  **Commit**: YES (group with Wave 1)
  - Message: `feat(auth): add authentication type definitions`
  - Files: `src/modules/auth/types.ts`, `src/modules/auth/index.ts`

- [x] 3. Auth Store com TanStack Store

  **What to do**:
  - Criar `src/modules/auth/store.ts` usando `@tanstack/react-store`:
    - Estado inicial: `{ user: null, token: null, isAuthenticated: false, isLoading: false, error: null }`
    - Ações:
      - `setUser(user: AuthUser | null)` — define o usuário atual
      - `setToken(token: string | null)` — define o token JWT (também salva/remove no localStorage)
      - `setLoading(loading: boolean)` — controla loading state
      - `setError(error: string | null)` — define mensagem de erro
      - `reset()` — limpa tudo (logout)
    - Função auxiliar `getTokenFromStorage()` — lê token do localStorage na key `${VITE_LOCAL_STORAGE_BASE_KEY}:auth-token`
    - Função auxiliar `setTokenToStorage(token)` — salva token no localStorage
    - Função auxiliar `removeTokenFromStorage()` — remove token do localStorage
    - Constante `AUTH_TOKEN_KEY` usando `VITE_LOCAL_STORAGE_BASE_KEY` do env
  - Exportar `authStore` e todas as ações

  **Must NOT do**:
  - NÃO criar mais de 1 store — tudo em um único `authStore`
  - NÃO usar React Context — usar TanStack Store
  - NÃO implementar lógica de API aqui — apenas estado
  - NÃO decodificar JWT para extrair user data
  - NÃO usar `AUTH_SESSION_SECRET` — essa var é server-only, não relevante para client-side auth

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Store definition with simple actions
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Tasks 1, 2)
  - **Blocks**: Tasks 4, 5, 6
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `docs/integracao-api-client.md` — Documento que descreve o padrão TanStack Store: `import { store } from "@tanstack/react-store"`. Seguir EXATAMENTE este padrão.
  - `src/env.ts` — `VITE_LOCAL_STORAGE_BASE_KEY` com default `"crm-atplus"`. Usar para compor a key do token: `"crm-atplus:auth-token"`.

  **API/Type References**:
  - Task 2 types (`src/modules/auth/types.ts`): `AuthState`, `AuthUser` — tipos que o store deve usar.

  **WHY Each Reference Matters**:
  - `integracao-api-client.md`: Define o padrão oficial de store do projeto. O `store()` function é a API correta do TanStack Store para este projeto. Desviar criaria inconsistência.
  - `src/env.ts`: A key `VITE_LOCAL_STORAGE_BASE_KEY` já é a convenção do projeto para namespace de localStorage. Usar `${VITE_LOCAL_STORAGE_BASE_KEY}:auth-token` mantém consistência.

  **Acceptance Criteria**:

  - [ ] Arquivo `src/modules/auth/store.ts` criado com `authStore`
  - [ ] Store exporta ações: setUser, setToken, setLoading, setError, reset
  - [ ] Funções auxiliares de localStorage implementadas
  - [ ] `AUTH_TOKEN_KEY` usa `VITE_LOCAL_STORAGE_BASE_KEY` como prefixo
  - [ ] `pnpm build` passa

  **QA Scenarios:**

  ```
  Scenario: Store criado e funcional
    Tool: Bash
    Preconditions: Task 2 completa
    Steps:
      1. Run: grep 'authStore' src/modules/auth/store.ts
      2. Assert: output contains authStore definition
      3. Run: grep 'VITE_LOCAL_STORAGE_BASE_KEY' src/modules/auth/store.ts
      4. Assert: output contains localStorage key composition
      5. Run: pnpm build
      6. Assert: exit code 0
    Expected Result: Store definido com ações e helpers de localStorage
    Failure Indicators: Store ausente, localStorage key hardcoded, build falha
    Evidence: .sisyphus/evidence/task-3-store-created.txt

  Scenario: Store exportado do index
    Tool: Bash
    Preconditions: store.ts criado
    Steps:
      1. Run: grep 'store' src/modules/auth/index.ts
      2. Assert: output contains re-export of authStore
    Expected Result: Store acessível via import from #/modules/auth
    Failure Indicators: Store não exportado
    Evidence: .sisyphus/evidence/task-3-store-exported.txt
  ```

  **Commit**: YES (group with Wave 1)
  - Message: `feat(auth): add auth store with TanStack Store`
  - Files: `src/modules/auth/store.ts`, `src/modules/auth/index.ts`

- [x] 4. NocoBase Client + Auth Service

  **What to do**:
  - Criar `src/modules/auth/client.ts` — instanciar o `@nocobase/sdk` APIClient:
    - Configurar com `VITE_CRM_NOCOBASE_URL` do env
    - Configurar auth module do SDK
    - Exportar instância singleton `nocobaseClient`
  - Criar `src/modules/auth/service.ts` — funções de auth que usam o client:
    - `signIn(credentials: LoginCredentials): Promise<{ token: string; user: AuthUser }>` — chama `POST /auth:signIn`
    - `signOut(): Promise<void>` — chama `POST /auth:signOut`
    - `checkAuth(): Promise<AuthUser>` — chama `GET /auth:check` com Bearer token
    - `requestPasswordReset(email: string): Promise<void>` — chama endpoint de reset
    - `confirmPasswordReset(data: ResetPasswordConfirm): Promise<void>` — confirma reset
  - Atualizar `src/modules/auth/index.ts` para exportar client e service

  **Must NOT do**:
  - NÃO criar API client genérico para outras collections — apenas auth
  - NÃO implementar token refresh — redirect para login no expiry
  - NÃO decodificar JWT para extrair dados — sempre usar `auth:check`
  - NÃO adicionar interceptors complexos ou retry logic

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: SDK integration requires understanding NocoBase API patterns
  - **Skills**: [`find-docs`]
    - `find-docs`: Para consultar documentação do @nocobase/sdk se necessário

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6)
  - **Blocks**: Tasks 7, 8
  - **Blocked By**: Tasks 1, 2, 3

  **References**:

  **Pattern References**:
  - `scripts/generate-types/src/generation/client.ts` — O script de geração de tipos faz chamadas ao NocoBase. Ver como ele configura o base URL e headers. NOTA: ele usa fetch direto, mas o padrão de URL (`${baseUrl}/auth:signIn`) é o mesmo.
  - `.agents/skills/nocobase-docs/SKILL.md` — Skill com endpoints confirmados: `POST /auth:signIn` com body `{"email": "...", "password": "..."}`, response `{ "data": { "token": "...", "user": {...} } }`. Auth header: `Authorization: Bearer <token>`.

  **API/Type References**:
  - `src/modules/auth/types.ts` (Task 2): `LoginCredentials`, `AuthResponse`, `AuthUser`, `ResetPasswordRequest`, `ResetPasswordConfirm`
  - `src/modules/auth/store.ts` (Task 3): `authStore` para integração

  **External References**:
  - NocoBase SDK Auth: https://docs.nocobase.com/api/sdk/auth — Métodos signIn(), signOut() do SDK
  - NocoBase API Auth: https://docs.nocobase.com/api/auth/base-auth — BaseAuth com endpoints e response shapes

  **WHY Each Reference Matters**:
  - `SKILL.md`: Contém os endpoints EXATOS e payloads confirmados para a instância `crm.atplus.cloud`. O formato é `/auth:signIn` (não `/auth/signIn`). O body usa `email` e `password` diretos, não envolvidos em `values`.
  - `scripts/generate-types/src/generation/client.ts`: Mostra como o projeto já faz chamadas ao NocoBase — o padrão de URL building é a referência para evitar incompatibilidades.

  **Acceptance Criteria**:

  - [ ] `src/modules/auth/client.ts` criado com instância do APIClient configurado
  - [ ] `src/modules/auth/service.ts` criado com signIn, signOut, checkAuth, requestPasswordReset, confirmPasswordReset
  - [ ] Todas as funções tipadas corretamente
  - [ ] `pnpm build` passa

  **QA Scenarios:**

  ```
  Scenario: Client configurado com URL do NocoBase
    Tool: Bash
    Preconditions: Task 1 completa, SDK instalado
    Steps:
      1. Run: grep 'VITE_CRM_NOCOBASE_URL' src/modules/auth/client.ts
      2. Assert: output contains env variable reference
      3. Run: pnpm build
      4. Assert: exit code 0
    Expected Result: Client importa URL do env, build passa
    Failure Indicators: URL hardcoded, build falha
    Evidence: .sisyphus/evidence/task-4-client-configured.txt

  Scenario: Service com todas as funções de auth
    Tool: Bash
    Preconditions: client.ts criado
    Steps:
      1. Run: grep 'signIn\|signOut\|checkAuth\|requestPasswordReset\|confirmPasswordReset' src/modules/auth/service.ts
      2. Assert: output contains all 5 function names
      3. Run: grep 'auth:signIn\|auth:signOut\|auth:check' src/modules/auth/service.ts
      4. Assert: output contains NocoBase endpoint patterns
    Expected Result: Todas as 5 funções definidas, endpoints NocoBase referenciados
    Failure Indicators: Funções ausentes, endpoints errados
    Evidence: .sisyphus/evidence/task-4-service-functions.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Message: `feat(auth): add NocoBase client and auth service`
  - Files: `src/modules/auth/client.ts`, `src/modules/auth/service.ts`, `src/modules/auth/index.ts`

- [x] 5. Route Context Extension + Auth Guard (beforeLoad)

  **What to do**:
  - Estender `AppRouterContext` em `src/routes/__root.tsx`:
    - Adicionar `authStore: typeof authStore` ao tipo do context
    - Importar `authStore` de `#/modules/auth`
    - Passar `authStore` no `context` do `createRootRouteWithContext`
  - Criar `src/modules/auth/guard.ts` — função helper de route guard:
    - `requireAuth(): void` — verifica se `authStore` tem token e isAuthenticated. Se não, redireciona para `/login?returnTo=${currentPath}`
    - `requireGuest(): void` — verifica se NÃO está autenticado. Se está, redireciona para `/`
    - `validateTokenOnInit(): void` — no primeiro carregamento, checa se token no localStorage é válido via `auth:check`. Se inválido, limpa token.
    - Lidar com SSR: verificar se está no browser (`typeof window !== 'undefined'`) antes de acessar localStorage
  - Adicionar `beforeLoad` na root route:
    - Se tem token no localStorage mas `isAuthenticated === false` → validar token via `checkAuth()`
    - Se rota não é `/login` e não está autenticado → redirecionar para `/login?returnTo=${location.pathname}`
    - Se rota é `/login` e está autenticado → redirecionar para `/`
  - Exportar guard do index

  **Must NOT do**:
  - NÃO criar componente `<ProtectedRoute>` — usar `beforeLoad` apenas
  - NÃO criar React Context para auth — usar TanStack Store
  - NÃO usar `createServerFn` — client-side only
  - NÃO implementar RBAC/role checks

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Route guard logic requires understanding TanStack Router internals + SSR considerations
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `find-docs`: TanStack Router docs já foram pesquisadas pelo librarian

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4, 6)
  - **Blocks**: Tasks 7, 8, 9
  - **Blocked By**: Tasks 2, 3

  **References**:

  **Pattern References**:
  - `src/routes/__root.tsx` — Root route atual com `createRootRouteWithContext<AppRouterContext>()`. Context atual: `{ queryClient: QueryClient }`. Estender adicionando authStore. NÃO mudar o shellComponent ou notFoundComponent.
  - `src/router.tsx` — Router config. Ver como queryClient é passado para o context. Seguir o mesmo padrão para authStore.

  **API/Type References**:
  - `src/modules/auth/store.ts` (Task 3): `authStore` — store a ser adicionado ao router context
  - `src/modules/auth/types.ts` (Task 2): `AuthState` — tipo do estado

  **External References**:
  - TanStack Router Auth: https://tanstack.com/router/latest/docs/framework/react/guide/authenticated-routes — Padrão `beforeLoad` com redirect

  **WHY Each Reference Matters**:
  - `__root.tsx`: É o ponto exato onde o router context é definido. O `createRootRouteWithContext<AppRouterContext>()` define o que está disponível em TODAS as rotas via `beforeLoad`. Adicionar authStore aqui o torna acessível globalmente.
  - TanStack Router Auth docs: Mostra o padrão oficial de `beforeLoad` com `throw redirect()`. É a forma correta de implementar guards sem criar wrappers.

  **Acceptance Criteria**:

  - [ ] `AppRouterContext` estendido com `authStore`
  - [ ] `src/modules/auth/guard.ts` criado com `requireAuth` e `requireGuest`
  - [ ] `beforeLoad` implementado na root route
  - [ ] SSR-safe (não acessa localStorage no server)
  - [ ] Redirect inclui `returnTo` parameter
  - [ ] `pnpm build` passa

  **QA Scenarios:**

  ```
  Scenario: Auth context estendido no router
    Tool: Bash
    Preconditions: Task 3 completa
    Steps:
      1. Run: grep 'authStore' src/routes/__root.tsx
      2. Assert: output contains authStore in AppRouterContext
      3. Run: grep 'beforeLoad' src/routes/__root.tsx
      4. Assert: output contains beforeLoad function
    Expected Result: authStore no context, beforeLoad definido
    Failure Indicators: Context não estendido, beforeLoad ausente
    Evidence: .sisyphus/evidence/task-5-context-extended.txt

  Scenario: Guard funciona sem quebrar build
    Tool: Bash
    Preconditions: guard.ts criado
    Steps:
      1. Run: grep 'requireAuth\|requireGuest' src/modules/auth/guard.ts
      2. Assert: both functions present
      3. Run: grep 'returnTo' src/modules/auth/guard.ts
      4. Assert: redirect URL includes returnTo parameter
      5. Run: pnpm build
      6. Assert: exit code 0
    Expected Result: Guards definidos com returnTo, build passa
    Failure Indicators: Funções ausentes, returnTo faltando, build falha
    Evidence: .sisyphus/evidence/task-5-guards-created.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Message: `feat(auth): extend route context and add auth guards`
  - Files: `src/routes/__root.tsx`, `src/modules/auth/guard.ts`, `src/modules/auth/index.ts`

- [x] 6. QueryClient 401 Error Handling

  **What to do**:
  - Modificar `src/integrations/tanstack/query/root-provider.tsx`:
    - Configurar `QueryClient` com `defaultOptions`:
      - `queries.retry`: `(failureCount, error) => error.status !== 401 && failureCount < 3` — NÃO retry em 401
      - `queries.staleTime`: `1000 * 60 * 5` (5 minutos)
    - Adicionar `queryClient.getQueryCache().config.onError` global:
      - Se error.status === 401: limpar token do localStorage, fazer `authStore.reset()`, `queryClient.clear()`, redirecionar para `/login`
      - Usar flag mutex (`isRedirecting`) para evitar múltiplos redirects em 401s concorrentes
  - Criar hook `src/hooks/use-auth-queries.ts`:
    - `useCurrentUser()` — TanStack Query que chama `checkAuth()` do service, com `queryKey: ['auth', 'currentUser']`, `staleTime: 5min`

  **Must NOT do**:
  - NÃO adicionar retry logic complexo — apenas bypass 401
  - NÃO adicionar cache persistor
  - NÃO implementar token refresh/rotation
  - NÃO criar toast notifications para erros

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Modification of existing file + simple hook
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 4, 5)
  - **Blocks**: Task 7
  - **Blocked By**: Task 3

  **References**:

  **Pattern References**:
  - `src/integrations/tanstack/query/root-provider.tsx` — QueryClient atual. Tem apenas `new QueryClient()` sem config. Adicionar `defaultOptions` ao construtor.
  - `docs/integracao-api-client.md` — Descreve o padrão TanStack Query para services. Seguir o mesmo estilo.

  **API/Type References**:
  - `src/modules/auth/store.ts` (Task 3): `authStore.reset()` — para limpar state no 401
  - `src/modules/auth/service.ts` (Task 4): `checkAuth()` — para o useCurrentUser hook

  **WHY Each Reference Matters**:
  - `root-provider.tsx`: É o ÚNICO lugar onde QueryClient é criado. Qualquer config global DEVE ser aqui. O padrão atual é barebones, então precisa ser enriquecido sem quebrar o SSR setup existente.
  - Mutex para 401: Sem ele, 3 calls simultâneas que retornam 401 causam 3 redirects e 3 limpezas de state — race condition.

  **Acceptance Criteria**:

  - [ ] QueryClient configurado com retry bypass para 401
  - [ ] Handler global de erro para 401 (clear token, reset store, redirect)
  - [ ] Mutex para evitar redirects múltiplos
  - [ ] Hook `useCurrentUser` criado
  - [ ] `pnpm build` passa

  **QA Scenarios:**

  ```
  Scenario: QueryClient configurado para 401
    Tool: Bash
    Preconditions: root-provider.tsx existe
    Steps:
      1. Run: grep '401\|retry' src/integrations/tanstack/query/root-provider.tsx
      2. Assert: output contains retry bypass for 401
      3. Run: grep 'isRedirecting\|mutex' src/integrations/tanstack/query/root-provider.tsx
      4. Assert: output contains redirect mutex
    Expected Result: 401 handling e mutex implementados
    Failure Indicators: Sem retry config, sem mutex
    Evidence: .sisyphus/evidence/task-6-queryclient-401.txt

  Scenario: useCurrentUser hook criado
    Tool: Bash
    Preconditions: Task 4 completa
    Steps:
      1. Run: grep 'useCurrentUser' src/hooks/use-auth-queries.ts
      2. Assert: output contains hook definition with queryKey
      3. Run: pnpm build
      4. Assert: exit code 0
    Expected Result: Hook definido com queryKey, build passa
    Failure Indicators: Hook ausente, build falha
    Evidence: .sisyphus/evidence/task-6-current-user-hook.txt
  ```

  **Commit**: YES (group with Wave 2)
  - Message: `feat(auth): add QueryClient 401 handling and useCurrentUser hook`
  - Files: `src/integrations/tanstack/query/root-provider.tsx`, `src/hooks/use-auth-queries.ts`

- [x] 7. Login Page (Route + Component)

  **What to do**:
  - Criar `src/routes/login.tsx` — rota de login:
    - `createFileRoute('/login')()` com `beforeLoad` que chama `requireGuest()` (redireciona para `/` se já autenticado)
    - Renderiza componente `<LoginPage />`
  - Criar `src/components/auth/login-form.tsx` — formulário de login:
    - Campos: email (type="email", required), password (type="password", required)
    - Validação nativa HTML5 (required, type="email") — SEM form validation library
    - Submit handler:
      1. `authStore.setLoading(true)`, `authStore.setError(null)`
      2. Chamar `signIn({ email, password })` do service
      3. Se sucesso: `authStore.setToken(token)`, `authStore.setUser(user)`, redirecionar para `returnTo` ou `/`
      4. Se erro: `authStore.setError("E-mail ou senha inválidos")`
      5. Finally: `authStore.setLoading(false)`
    - Estado: controlled inputs com `useState`
    - Exibir erro inline abaixo do formulário (não toast)
    - Loading state: botão com `disabled` e texto "Entrando..." durante submit
    - Link para `/reset-password` ("Esqueceu sua senha?")
  - Criar `src/components/auth/login-page.tsx` — layout da página:
    - Centrado na tela, com card shadcn/ui
    - Logo/nome do CRM no topo
    - `<LoginForm />` dentro do card
    - Footer com copyright
  - UI em pt-BR

  **Must NOT do**:
  - NÃO usar react-hook-form, zod schemas, ou tanstack form — 2 campos não precisam
  - NÃO criar toast/notification — erro inline
  - NÃO adicionar "Remember me" checkbox
  - NÃO adicionar links para sign-up/registro
  - NÃO criar página de loading separada — usar loading state no botão

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: UI page with form interaction and styling
  - **Skills**: [`shadcn`]
    - `shadcn`: Para usar componentes Card, Input, Button, Label já instalados

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Task 8)
  - **Blocks**: Task 9
  - **Blocked By**: Tasks 4, 5, 6

  **References**:

  **Pattern References**:
  - `src/routes/index.tsx` — Rota existente. Ver como `createFileRoute` é usado. Seguir o mesmo padrão.
  - `src/components/ui/button.tsx` — Componente Button com variantes CVA. Usar variant "default" para o botão de login.
  - `src/components/ui/input.tsx` — Componente Input. Usar diretamente.
  - `src/components/ui/card.tsx` — Componente Card com CardHeader, CardContent, etc. Usar para o layout do login.
  - `src/components/ui/label.tsx` — Componente Label. Usar para labels dos inputs.

  **API/Type References**:
  - `src/modules/auth/store.ts` (Task 3): `authStore` — para setLoading, setError, setToken, setUser
  - `src/modules/auth/service.ts` (Task 4): `signIn()` — para fazer login
  - `src/modules/auth/guard.ts` (Task 5): `requireGuest()` — para beforeLoad
  - `src/@types/generated/crm/users.ts`: `UsersBase` — referência dos campos do usuário

  **WHY Each Reference Matters**:
  - `index.tsx`: Mostra o padrão exato de como rotas são criadas neste projeto. Cada rota usa `createFileRoute` com tipagem.
  - Componentes shadcn/ui: Já estão instalados e seguem o padrão do projeto. Usá-los garante consistência visual.

  **Acceptance Criteria**:

  - [ ] `src/routes/login.tsx` criado com rota `/login`
  - [ ] `beforeLoad` redireciona para `/` se autenticado
  - [ ] Formulário com campos email e password, validação HTML5
  - [ ] Submit chama `signIn` do service
  - [ ] Erro exibido inline: "E-mail ou senha inválidos"
  - [ ] Botão mostra "Entrando..." durante loading
  - [ ] Link para `/reset-password`
  - [ ] `pnpm build` passa

  **QA Scenarios:**

  ```
  Scenario: Página de login renderiza corretamente
    Tool: Playwright
    Preconditions: pnpm dev rodando
    Steps:
      1. Navigate to http://localhost:3000/login
      2. Assert: page contains heading with text containing "CRM" or "ATPlus"
      3. Assert: input[type="email"] is visible
      4. Assert: input[type="password"] is visible
      5. Assert: button with text "Entrar" is visible
      6. Assert: link with text containing "Esqueceu" is visible
      7. Take screenshot
    Expected Result: Login form renderizado com todos os campos
    Failure Indicators: Campos ausentes, layout quebrado
    Evidence: .sisyphus/evidence/task-7-login-page-rendered.png

  Scenario: Login com credenciais inválidas mostra erro
    Tool: Playwright
    Preconditions: pnpm dev rodando
    Steps:
      1. Navigate to http://localhost:3000/login
      2. Fill input[type="email"] with "invalido@teste.com"
      3. Fill input[type="password"] with "senhaerrada"
      4. Click button "Entrar"
      5. Wait for error message
      6. Assert: page contains text "E-mail ou senha inválidos"
      7. Assert: URL is still /login
      8. Take screenshot
    Expected Result: Mensagem de erro exibida, usuário fica na página
    Failure Indicators: Erro não aparece, redirect ocorre, crash
    Evidence: .sisyphus/evidence/task-7-login-error.png

  Scenario: Validação HTML5 impede submit com campos vazios
    Tool: Playwright
    Preconditions: pnpm dev rodando
    Steps:
      1. Navigate to http://localhost:3000/login
      2. Click button "Entrar" sem preencher nada
      3. Assert: browser shows validation message (email field has :invalid pseudo-class)
      4. Assert: URL is still /login
    Expected Result: Formulário não submete, browser mostra validação nativa
    Failure Indicators: Request é enviado sem dados
    Evidence: .sisyphus/evidence/task-7-login-validation.png
  ```

  **Commit**: YES (group with Wave 3)
  - Message: `feat(auth): add login page with form and route`
  - Files: `src/routes/login.tsx`, `src/components/auth/login-form.tsx`, `src/components/auth/login-page.tsx`

- [x] 8. Password Reset Page (Route + Component)

  **What to do**:
  - Criar `src/routes/reset-password.tsx` — rota de reset:
    - `createFileRoute('/reset-password')()` com `beforeLoad` que chama `requireGuest()`
    - Renderiza componente `<ResetPasswordPage />`
  - Criar `src/components/auth/reset-password-form.tsx` — formulário de request de reset:
    - Campo: email (type="email", required)
    - Submit: chama `requestPasswordReset(email)` do service
    - Mensagem de sucesso: "Se o e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha." (genérica para evitar email enumeration)
    - Mensagem de erro: "Erro ao enviar. Tente novamente."
    - Após sucesso, mostrar a mensagem e esconder o formulário
  - Criar `src/routes/reset-password-confirm.tsx` — rota de confirmação de reset:
    - `createFileRoute('/reset-password/confirm')()` com `beforeLoad` que chama `requireGuest()`
    - Lê `token` do search params (`?token=xxx`)
    - Se não tem token, redireciona para `/reset-password`
    - Renderiza formulário de nova senha
  - Criar `src/components/auth/reset-password-confirm-form.tsx` — formulário de nova senha:
    - Campos: nova senha, confirmar senha (type="password", required, minLength 8)
    - Validação: senhas devem ser iguais, mínimo 8 caracteres
    - Submit: chama `confirmPasswordReset({ token, password, confirmPassword })`
    - Sucesso: redirecionar para `/login` com mensagem "Senha alterada com sucesso"
  - UI em pt-BR, mesmo estilo visual da login page

  **Must NOT do**:
  - NÃO implementar password strength meter — apenas validação de tamanho mínimo
  - NÃO criar tela de "check your email" separada — substituir form inline
  - NÃO adicionar countdown ou timer para reenvio
  - NÃO implementar magic link login — apenas reset

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: UI pages with forms, styling consistent with login page
  - **Skills**: [`shadcn`]
    - `shadcn`: Para usar componentes consistentes com login page

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 3 (with Task 7)
  - **Blocks**: Task 9
  - **Blocked By**: Tasks 4, 5

  **References**:

  **Pattern References**:
  - `src/components/auth/login-form.tsx` (Task 7): Seguir o mesmo padrão de formulário, controlled inputs, error handling, loading state.
  - `src/components/auth/login-page.tsx` (Task 7): Seguir o mesmo layout (card centralizado).
  - `src/components/ui/card.tsx`, `src/components/ui/input.tsx`, `src/components/ui/button.tsx` — componentes UI

  **API/Type References**:
  - `src/modules/auth/types.ts` (Task 2): `ResetPasswordRequest`, `ResetPasswordConfirm`
  - `src/modules/auth/service.ts` (Task 4): `requestPasswordReset()`, `confirmPasswordReset()`
  - `src/modules/auth/guard.ts` (Task 5): `requireGuest()`
  - `src/@types/generated/crm/users.ts`: Campo `resetToken` — o token que vem do NocoBase para reset

  **External References**:
  - NocoBase password reset: o endpoint usa o `resetToken` do `UsersBase`. O NocoBase envia um email com link contendo o token. O front precisa receber esse token via URL e enviar para o endpoint de confirmação.

  **WHY Each Reference Matters**:
  - `login-form.tsx`: É o padrão de referência. O reset form DEVE seguir o mesmo estilo (controlled inputs, inline errors, loading state) para manter consistência visual e de código.
  - `resetToken`: Confirma que o NocoBase suporta password reset com token — o fluxo é viável.

  **Acceptance Criteria**:

  - [ ] `src/routes/reset-password.tsx` criado
  - [ ] `src/routes/reset-password-confirm.tsx` criado (com search param `token`)
  - [ ] Formulário de request mostra mensagem genérica de sucesso
  - [ ] Formulário de confirmação valida senhas iguais e minLength
  - [ ] Após reset, redireciona para `/login`
  - [ ] `pnpm build` passa

  **QA Scenarios:**

  ```
  Scenario: Página de reset renderiza corretamente
    Tool: Playwright
    Preconditions: pnpm dev rodando
    Steps:
      1. Navigate to http://localhost:3000/reset-password
      2. Assert: input[type="email"] is visible
      3. Assert: button with text containing "Enviar" or "Redefinir" is visible
      4. Assert: link back to login is visible
      5. Take screenshot
    Expected Result: Formulário de reset com campo de email
    Failure Indicators: Campo ausente, layout quebrado
    Evidence: .sisyphus/evidence/task-8-reset-page-rendered.png

  Scenario: Reset com email mostra mensagem de sucesso genérica
    Tool: Playwright
    Preconditions: pnpm dev rodando
    Steps:
      1. Navigate to http://localhost:3000/reset-password
      2. Fill input[type="email"] with "teste@exemplo.com"
      3. Click submit button
      4. Wait for success message
      5. Assert: page contains text "instruções" or "e-mail"
      6. Take screenshot
    Expected Result: Mensagem genérica mostrada (não revela se email existe)
    Failure Indicators: Mensagem específica diferente para email existente/inexistente
    Evidence: .sisyphus/evidence/task-8-reset-success.png

  Scenario: Página de confirmação sem token redireciona
    Tool: Playwright
    Preconditions: pnpm dev rodando
    Steps:
      1. Navigate to http://localhost:3000/reset-password/confirm
      2. Assert: URL is /reset-password (redirected)
    Expected Result: Redirect para /reset-password quando sem token
    Failure Indicators: Página renderiza sem token, crash
    Evidence: .sisyphus/evidence/task-8-reset-no-token.png
  ```

  **Commit**: YES (group with Wave 3)
  - Message: `feat(auth): add password reset pages`
  - Files: `src/routes/reset-password.tsx`, `src/routes/reset-password-confirm.tsx`, `src/components/auth/reset-password-form.tsx`, `src/components/auth/reset-password-confirm-form.tsx`

- [x] 9. Auth Integration — Wire Everything Together

  **What to do**:
  - Atualizar `src/router.tsx`:
    - Garantir que `authStore` é passado no contexto do router
  - Atualizar `src/routes/index.tsx`:
    - Adicionar `beforeLoad` que chama `requireAuth()` — rota protegida
  - Criar/atualizar `src/modules/auth/index.ts`:
    - Exportar tudo: types, store, service, client, guard, hooks
  - Criar componente de logout (botão/ação):
    - `src/components/auth/logout-button.tsx` — botão que chama `signOut()`, limpa store e redireciona para `/login`
  - Teste de integração manual: executar fluxo completo
    1. App sem token → redirect para /login
    2. Login com credenciais válidas → redirect para /
    3. Navegação entre rotas funciona
    4. Logout → redirect para /login
    5. Token expirado → redirect automático

  **Must NOT do**:
  - NÃO criar layout de dashboard completo — apenas o botão de logout
  - NÃO adicionar sidebar, navigation, ou outros componentes de layout
  - NÃO implementar RBAC ou role checks

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Integration work connecting multiple modules, requires understanding of full auth flow
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (after Wave 3)
  - **Blocks**: F1-F4
  - **Blocked By**: Tasks 7, 8

  **References**:

  **Pattern References**:
  - `src/router.tsx` — Router principal. Ver como `context` é passado (QueryClient). Adicionar authStore seguindo o mesmo padrão.
  - `src/routes/index.tsx` — Rota atual. Adicionar `beforeLoad` com `requireAuth()`.
  - `src/routes/__root.tsx` — Root com context estendido (Task 5). Garantir compatibilidade.

  **API/Type References**:
  - `src/modules/auth/store.ts` (Task 3): `authStore`
  - `src/modules/auth/service.ts` (Task 4): `signOut()`
  - `src/modules/auth/guard.ts` (Task 5): `requireAuth()`
  - `src/hooks/use-auth-queries.ts` (Task 6): `useCurrentUser()`

  **WHY Each Reference Matters**:
  - `router.tsx`: É onde tudo se conecta. O router precisa ter o authStore no contexto para que os guards funcionem em todas as rotas.
  - `index.tsx`: É a única rota existente. Precisa se tornar protegida, validando o fluxo de redirect.

  **Acceptance Criteria**:

  - [ ] Router passa authStore no contexto
  - [ ] Rota `/` protegida com `requireAuth()`
  - [ ] Logout button funcional
  - [ ] Fluxo completo funciona: login → navegação → logout → login novamente
  - [ ] `pnpm build` passa
  - [ ] `pnpm dev` funciona sem erros

  **QA Scenarios:**

  ```
  Scenario: Fluxo completo de auth funciona
    Tool: Playwright
    Preconditions: pnpm dev rodando, NocoBase API acessível
    Steps:
      1. Navigate to http://localhost:3000/
      2. Assert: URL redirected to /login
      3. Take screenshot of login page
      4. Fill email with valid test credentials
      5. Fill password with valid test credentials
      6. Click "Entrar"
      7. Wait for redirect
      8. Assert: URL is / (or returnTo path)
      9. Assert: page shows logged-in state
      10. Take screenshot
    Expected Result: Fluxo login completo funciona end-to-end
    Failure Indicators: Redirect não funciona, login falha, crash
    Evidence: .sisyphus/evidence/task-9-full-auth-flow.png

  Scenario: Logout limpa sessão e redireciona
    Tool: Playwright
    Preconditions: Usuário logado (após Scenario 1)
    Steps:
      1. Click logout button
      2. Assert: URL redirected to /login
      3. Assert: localStorage does not contain auth token
      4. Navigate to http://localhost:3000/
      5. Assert: URL redirected to /login (session cleared)
      6. Take screenshot
    Expected Result: Logout funciona, sessão limpa, rotas protegidas
    Failure Indicators: Token permanece, rota acessível sem auth
    Evidence: .sisyphus/evidence/task-9-logout-flow.png

  Scenario: Rota protegida sem token redireciona para login
    Tool: Playwright
    Preconditions: Nenhum token no localStorage
    Steps:
      1. Navigate to http://localhost:3000/
      2. Assert: URL is /login?returnTo=/
      3. Assert: returnTo parameter present in URL
    Expected Result: Redirect para login com returnTo preservando URL original
    Failure Indicators: Redirect sem returnTo, página carrega sem auth
    Evidence: .sisyphus/evidence/task-9-route-guard.png
  ```

  **Commit**: YES (final integration commit)
  - Message: `feat(auth): integrate all auth modules and finalize`
  - Files: `src/router.tsx`, `src/routes/index.tsx`, `src/modules/auth/index.ts`, `src/components/auth/logout-button.tsx`

---

## Final Verification Wave

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> Do NOT auto-proceed after verification. Wait for user's explicit approval.

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [x] F2. **Code Quality Review** — `unspecified-high`
  Run `pnpm build` + `pnpm biome:fix`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names.
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [x] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill)
  Start from clean state (`pnpm dev`). Execute EVERY QA scenario from EVERY task. Test cross-task integration: login → navigate → API call → 401 → redirect → login again. Test edge cases: empty state, invalid input, network error. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [x] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff. Verify 1:1 — everything in spec was built, nothing beyond spec was built. Check "Must NOT do" compliance. Detect cross-task contamination. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **Wave 1**: `feat(auth): add SDK, types, and auth store` — package.json, src/env.ts, src/modules/auth/types.ts, src/modules/auth/store.ts
- **Wave 2**: `feat(auth): add NocoBase client, route guards, and 401 handling` — src/modules/auth/client.ts, src/modules/auth/service.ts, src/routes/__root.tsx, src/integrations/tanstack/query/root-provider.tsx
- **Wave 3**: `feat(auth): add login and password reset pages` — src/routes/login.tsx, src/routes/reset-password.tsx, src/components/auth/
- **Final**: `feat(auth): integrate all auth modules and finalize` — src/router.tsx, integration files
- **After QA**: `test(auth): add authentication tests` — src/modules/auth/__tests__/

---

## Success Criteria

### Verification Commands
```bash
pnpm build                  # Expected: BUILD SUCCESS
pnpm dev                    # Expected: Server starts on port 3000
# Login flow: navigate to /login → submit credentials → redirect to /
# Logout: click logout → redirect to /login → token cleared
# Protected route: navigate to / while unauthenticated → redirect to /login?returnTo=/
# Reset password: navigate to /reset-password → submit email → success message
# 401 handling: expired token → auto redirect to /login
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] `pnpm build` passes
- [ ] Login/logout flow works end-to-end
- [ ] Reset password flow works end-to-end
- [ ] Route protection works for all routes
- [ ] 401 handling redirects correctly
- [ ] No auth flash on SSR
