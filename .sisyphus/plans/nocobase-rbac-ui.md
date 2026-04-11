# NocoBase RBAC UI — Permissões de Visualização no Frontend

## TL;DR

> **Integrar roles e permissões do NocoBase no frontend React**, lendo os dados que o `auth:check` já retorna (roles com strategy.actions e snippets) e criando um módulo de permissões que controla visibilidade de rotas, navegação, botões e campos de formulário.
>
> **Deliverables**:
> - Módulo `src/modules/permissions/` com store, hooks, componentes e guards
> - Extensão do `AuthUser` para incluir roles
> - Componente `<Can>` declarativo para controlar visibilidade
> - Hooks `useCan(action)` e `useHasSnippet(snippet)` para lógica imperativa
> - Guards `requireSnippet()` e `requireAction()` para rotas
>
> **Estimated Effort**: Medium (7 arquivos, ~400-500 linhas)
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 (validar API) → Task 2-3 (tipos + store) → Task 4-7 (hooks, componentes, guards, integração)

---

## Context

### Original Request
Integrar roles e permissões do NocoBase no frontend customizado, sem criar cada permissão manualmente. O NocoBase já gerencia as permissões na API; precisamos refletir isso na UI.

### Interview Summary
**Key Discussions**:
- Usuário quer ler permissões direto do NocoBase, não criar manualmente
- `auth:check` já retorna roles completos com strategy e snippets
- Todos os roles usam `usingConfig: strategy` (sem permissões granulares por collection)
- 7 actions disponíveis: create, view, update, destroy, export, importXlsx, templatePrint
- Snippets usam `!` prefix para negação (ex: `!pm`, `!app`)
- Actions com `:own` suffix (ex: `update:own`, `templatePrint:own`) — UI mostra normalmente, API enforcement
- 4 níveis de permissão na UI: rotas, navegação, ações, campos de formulário

**Research Findings**:
- `auth:check` retorna `user.roles[]` com `strategy.actions`, `snippets`, `allowConfigure`, `allowNewMenu`, etc.
- `availableActions:list` retorna 7 ações com aliases e `allowConfigureFields`
- Todos os 23 roles usam `strategy` (não `resourceAction`) — permissões são globais, não por collection
- `RolesBase` gerado tem `snippets: unknown[]` e `strategy: Record<string, unknown>` — precisa type narrowing
- Nenhum sidebar/componente de navegação existe ainda (app tem 5 rotas apenas)
- 184 `desktopRoutes` no NocoBase (menus do admin), mas não mapeiam diretamente para o app customizado

### Metis Review
**Identified Gaps** (addressed):
- G1: Validação do formato exato de `auth:check` response com roles → Task 1 (validar API)
- G2: Merge de roles conflitantes → Decisão: union com `!` prefix having priority (deny wins)
- G3: Staleness de permissões durante sessão → Decisão: V1 load-once, re-login para refresh
- G4: `desktopRoutes` não são relevantes para o app customizado → Excluído do escopo
- G5: `<Can>` esconde vs desabilita → Decisão: esconde (null render), futuro pode adicionar disabled
- G6: `:own` suffix → Decisão: V1 mostra botão normalmente, API enforcement
- Tipo `unknown[]` em snippets → Task 2 (Zod schema para runtime validation)
- Sem sidebar existente → Excluído do escopo (nav-config é só dados)

---

## Work Objectives

### Core Objective
Criar um módulo `permissions` que lê roles do `auth:check`, computa permissões efetivas (merge de múltiplos roles), e fornece hooks/componentes/guards para controlar visibilidade na UI.

### Concrete Deliverables
- `src/modules/permissions/types.ts` — Tipos TypeScript + Zod schemas
- `src/modules/permissions/store.ts` — Store de permissões efetivas
- `src/modules/permissions/service.ts` — Cálculo de permissões a partir de roles
- `src/modules/permissions/hooks.ts` — useCan, useHasSnippet, useCanEdit
- `src/modules/permissions/components/can.tsx` — Componente <Can> declarativo
- `src/modules/permissions/guards.ts` — requireSnippet, requireAction para rotas
- `src/modules/permissions/index.ts` — Barrel export
- Modificação de `src/modules/auth/types.ts` — Estender AuthUser com roles
- Modificação de `src/modules/auth/service.ts` — Parsear roles do auth:check
- Modificação de `src/modules/auth/store.ts` — Limpar permissionsStore no logout
- Modificação de `src/routes/__root.tsx` — Inicializar permissionsStore
- Modificação de `src/router.tsx` — Injetar permissionsStore no contexto (opcional)

### Definition of Done
- [ ] `pnpm dlx tsc --noEmit` passa sem erros
- [ ] `pnpm biome:fix` passa sem erros
- [ ] Login como admin → `useCan("create")` retorna true, `useHasSnippet("pm")` retorna true
- [ ] Login como member → `useCan("create")` retorna false, `useHasSnippet("pm")` retorna false
- [ ] `<Can action="create"><button>Nova Pessoa</button></Can>` renderiza para admin, null para member
- [ ] `requireSnippet("pm")` em beforeLoad redireciona member para /forbidden
- [ ] Logout limpa permissionsStore

### Must Have
- Tipagem segura com Zod validation para roles vindos da API
- Merge de múltiplos roles com regra deny-wins para snippets com `!` prefix
- `<Can>` componente para controle declarativo de visibilidade
- Hooks `useCan()` e `useHasSnippet()` para lógica imperativa
- Route guards `requireSnippet()` e `requireAction()`
- Limpeza do store de permissões no logout
- Edge case: usuário sem roles → sem permissões (fail-closed)

### Must NOT Have (Guardrails)
- NÃO modificar tipos gerados em `src/@types/generated/`
- NÃO criar sidebar/componentes de navegação (escopo separado)
- NÃO adicionar checagem de `:own` no nível de registro (V2)
- NÃO fazer chamadas API adicionais durante navegação para checar permissões
- NÃO animar transições show/hide do `<Can>`
- NÃO criar UI de administração de roles (NocoBase já faz isso)
- NÃO adicionar auto-refresh de permissões durante sessão (V1 = load-once)
- NÃO modificar a API pública existente do módulo auth (exports atuais mantêm assinatura)

---

## Verification Strategy (MANDATORY)

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: YES (Vitest via `pnpm test`)
- **Automated tests**: YES (Tests-after — unit tests para store, service, hooks)
- **Framework**: Vitest (`pnpm test`)

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Hooks/Store/Service**: Use Vitest unit tests
- **Components**: Use Vitest + React Testing Library
- **Integration**: Use Bash (curl) to verify auth:check response shape
- **TypeScript**: `pnpm dlx tsc --noEmit` after each task
- **Linting**: `pnpm biome:fix` after each task

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation — sequential, Task 1 unblocks everything):
└── Task 1: Validar formato do auth:check response com roles [quick]

Wave 2 (Core — max parallel, after Task 1):
├── Task 2: Tipos TypeScript + Zod schemas [quick]
├── Task 3: Permissions store [quick]
├── Task 4: Permissions service (merge logic) [quick]
└── Task 5: Auth module modifications (types, service, store) [quick]

Wave 3 (UI — after Wave 2):
├── Task 6: Hooks (useCan, useHasSnippet, useCanEdit) [quick]
├── Task 7: Component <Can> [quick]
├── Task 8: Route guards (requireSnippet, requireAction) [quick]
└── Task 9: Root route integration (init + logout cleanup) [quick]

Wave 4 (Verification — after Wave 3):
├── Task 10: Integration tests [unspecified-high]
└── Task 11: Typecheck + lint final verification [quick]

Wave FINAL (After ALL tasks — 4 parallel reviews):
├── F1: Plan compliance audit (oracle)
├── F2: Code quality review (unspecified-high)
├── F3: Real manual QA (unspecified-high)
└── F4: Scope fidelity check (deep)

Critical Path: Task 1 → Task 2-5 → Task 6-9 → Task 10-11 → F1-F4
Parallel Speedup: ~50% faster than sequential
Max Concurrent: 4 (Wave 2)
```

### Dependency Matrix

| Task | Depends On | Blocks |
|------|-----------|--------|
| 1 | — | 2, 3, 4, 5 |
| 2 | 1 | 6, 7 |
| 3 | 1 | 6, 8, 9 |
| 4 | 1 | 6 |
| 5 | 1 | 9 |
| 6 | 2, 3, 4 | 10 |
| 7 | 2, 3 | 10 |
| 8 | 3 | 10 |
| 9 | 3, 5 | 10 |
| 10 | 6, 7, 8, 9 | 11 |
| 11 | 10 | F1-F4 |

### Agent Dispatch Summary

- **Wave 1**: 1 task — T1 → `quick`
- **Wave 2**: 4 tasks — T2 → `quick`, T3 → `quick`, T4 → `quick`, T5 → `quick`
- **Wave 3**: 4 tasks — T6 → `quick`, T7 → `quick`, T8 → `quick`, T9 → `quick`
- **Wave 4**: 2 tasks — T10 → `unspecified-high`, T11 → `quick`
- **FINAL**: 4 tasks — F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Validar shape real do `auth:check` com roles e criar tipos com Zod

  **What to do**:
  - Chamar `nocobaseClient.request({ url: "auth:check" })` diretamente e inspecionar a resposta completa, especialmente o campo `roles[]`
  - Confirmar que `roles[].strategy.actions` é `string[]` (flat array) e NÃO um objeto aninhado por collection
  - Confirmar que `roles[].snippets` é `string[]` e NÃO `unknown[]`
  - Confirmar que o endpoint retorna roles sem precisar de `appends` parameter
  - Criar `src/modules/permissions/types.ts` com:
    - `PermissionRole` type (Pick from RolesBase: name, title, snippets, strategy, allowConfigure, allowNewMenu, hidden, default) com Zod schema para validação runtime
    - `PermissionState` type com `effectiveActions: string[]`, `effectiveSnippets: string[]`, `roleNames: string[]`, `allowConfigure: boolean`
    - Zod schemas: `permissionRoleSchema` que valida `strategy.actions` como `string[]` e `snippets` como `string[]`
  - Criar `src/modules/permissions/index.ts` (barrel export vazio por enquanto)

  **Must NOT do**:
  - Não modificar `src/@types/generated/` — tipos gerados são intocáveis
  - Não criar o store ainda — só tipos e validação

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`nocobase-docs`]

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (com Task 2)
  - **Blocks**: Task 3, Task 4, Task 5, Task 6, Task 7
  - **Blocked By**: None

  **References**:
  - `src/@types/generated/crm/index.ts:206-227` — RolesBase type com `snippets: unknown[]` e `strategy: Record<string, unknown>` — precisa de type narrowing
  - `src/modules/auth/types.ts` — AuthUser type atual (Pick sem roles)
  - `src/modules/auth/service.ts` — checkAuth() que faz o request auth:check

  **Acceptance Criteria**:
  - [ ] Arquivo `src/modules/permissions/types.ts` criado com PermissionRole, PermissionState e Zod schemas
  - [ ] `pnpm dlx tsc --noEmit` passa sem erros
  - [ ] Zod schema valida corretamente: `{ strategy: { actions: ["create", "view"] }, snippets: ["!pm"] }` → success
  - [ ] Zod schema rejeita: `{ strategy: { actions: [1, 2] }, snippets: [true] }` → error com mensagem clara

  **QA Scenarios**:

  ```
  Scenario: Valid role data passes Zod validation
    Tool: Bash
    Preconditions: types.ts file exists
    Steps:
      1. Run `pnpm dlx tsc --noEmit`
      2. Verify exit code 0
      3. Create a test file that imports permissionRoleSchema and validates `{ name: "admin", title: "Admin", strategy: { actions: ["create", "view"] }, snippets: ["pm"], allowConfigure: true, allowNewMenu: true, hidden: false, default: false }`
      4. Assert validation succeeds
    Expected Result: TypeScript compiles, Zod validation passes
    Failure Indicators: TypeScript errors, Zod parse errors
    Evidence: .sisyphus/evidence/task-1-zod-validation.txt

  Scenario: Invalid role data (non-string arrays) rejected by Zod
    Tool: Bash
    Preconditions: types.ts file exists
    Steps:
      1. Test with `{ strategy: { actions: [123] }, snippets: [true] }`
      2. Assert Zod parse throws ZodError
    Expected Result: ZodError with clear message about expected string arrays
    Failure Indicators: Parse succeeds with wrong types
    Evidence: .sisyphus/evidence/task-1-zod-rejection.txt
  ```

  **Commit**: YES (groups with Task 2)
  - Message: `feat(permissions): add permission types with Zod validation`
  - Files: `src/modules/permissions/types.ts`, `src/modules/permissions/index.ts`
  - Pre-commit: `pnpm dlx tsc --noEmit`

- [x] 2. Criar `permissionsStore` seguindo padrão do `authStore`

  **What to do**:
  - Criar `src/modules/permissions/store.ts` com:
    - `PermissionState` state shape: `effectiveActions: string[]`, `effectiveSnippets: string[]`, `roleNames: string[]`, `allowConfigure: boolean`, `isInitialized: boolean`
    - `createStore<PermissionState>()` com defaults (arrays vazios, isInitialized false)
    - Funções exportadas: `setPermissionsFromRoles(roles: PermissionRole[])`, `resetPermissions()`, `computeEffectivePermissions(roles: PermissionRole[]): PermissionState`
    - `computeEffectivePermissions` faz: union de actions (desduplica), union de snippets com lógica de negação (!prefix)
  - Criar `src/modules/permissions/compute.ts` com a lógica de merge:
    - `mergeActions(actionsFromAllRoles: string[][]): string[]` — union com desduplicação, suporta `:own` suffix (base action incluído)
    - `mergeSnippets(snippetsFromAllRoles: string[][]): string[]` — union com lógica de negação: se `!X` está presente, remove `X` e `X.*`
    - Tratar edge cases: role com `strategy: null` → ações vazias; role com `snippets: []` → sem snippets
  - Atualizar `src/modules/permissions/index.ts` com exports

  **Must NOT do**:
  - Não fazer import circular com authStore
  - Não adicionar React hooks (isso é Task 4)
  - Não adicionar componentes (isso é Task 5)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (com Task 1)
  - **Blocks**: Task 4, Task 5, Task 6
  - **Blocked By**: None

  **References**:
  - `src/modules/auth/store.ts` — Padrão do authStore: `createStore<State>()` + funções exportadas
  - `src/modules/permissions/types.ts` (Task 1) — PermissionRole e PermissionState types
  - `src/@types/generated/crm/index.ts:206-227` — RolesBase com `strategy: Record<string, unknown>` e `snippets: unknown[]`

  **Acceptance Criteria**:
  - [ ] `src/modules/permissions/store.ts` criado com createStore + setPermissionsFromRoles + resetPermissions
  - [ ] `src/modules/permissions/compute.ts` criado com mergeActions e mergeSnippets
  - [ ] `pnpm dlx tsc --noEmit` passa
  - [ ] `mergeActions([["create", "view"], ["view", "update"]])` → `["create", "view", "update"]`
  - [ ] `mergeActions([["create"], ["update:own"]])` → `["create", "update:own", "update"]` (base action incluído)
  - [ ] `mergeSnippets([["!pm", "!ui.*"], ["app", "pm"]])` → `["app"]` (!pm nega pm, !ui.* nega ui.*)

  **QA Scenarios**:

  ```
  Scenario: mergeActions produces correct union with :own handling
    Tool: Bash (bun test)
    Preconditions: store.ts and compute.ts exist
    Steps:
      1. Test mergeActions([["create", "view"], ["view", "destroy"]]) → ["create", "view", "destroy"]
      2. Test mergeActions([["create"], ["update:own"]]) → contains "update" AND "update:own"
      3. Test mergeActions([]) → []
    Expected Result: All assertions pass
    Failure Indicators: Duplicate actions, missing base actions for :own
    Evidence: .sisyphus/evidence/task-2-merge-actions.txt

  Scenario: mergeSnippets handles denial logic correctly
    Tool: Bash (bun test)
    Preconditions: compute.ts exists
    Steps:
      1. Test mergeSnippets([["!pm", "!ui.*"], ["app", "pm"]]) → ["app"] only (pm denied by !pm)
      2. Test mergeSnippets([["pm.*", "ui.*"], ["!pm"]]) → ["pm.*", "ui.*"] (!pm denied but pm.* still allowed because wildcard)
      3. Test mergeSnippets([["!app"], ["app"]]) → [] (denial wins)
      4. Test mergeSnippets([[]]) → []
    Expected Result: Denial prefix ! correctly negates exact matches and wildcards
    Failure Indicators: Denied snippets appearing in result, wildcards incorrectly negated
    Evidence: .sisyphus/evidence/task-2-merge-snippets.txt
  ```

  **Commit**: YES (groups with Task 1)
  - Message: `feat(permissions): add permission types with Zod validation`
  - Files: `src/modules/permissions/types.ts`, `src/modules/permissions/index.ts`, `src/modules/permissions/store.ts`, `src/modules/permissions/compute.ts`
  - Pre-commit: `pnpm dlx tsc --noEmit`

- [x] 3. Estender `auth` para extrair roles do `auth:check` e popular `permissionsStore`

  **What to do**:
  - Estender `src/modules/auth/types.ts`:
    - Adicionar `RoleData` type (narrowed de RolesBase, sem `unknown[]`)
    - Adicionar `roles: RoleData[]` ao `AuthUser` (não mais Pick puro de UsersBase)
    - Atualizar `authUserSchema` Zod para incluir validação de `roles` com `permissionRoleSchema` do módulo de permissions
  - Modificar `src/modules/auth/service.ts`:
    - Em `checkAuth()`, após receber resposta de `auth:check`, extrair roles do response data
    - Chamar `setPermissionsFromRoles(validatedRoles)` do permissionsStore
  - Modificar `src/modules/auth/store.ts`:
    - Em `reset()`, também chamar `resetPermissions()` do permissionsStore
  - Verificar com `lsp_find_references` todos os usos de `AuthUser` e `authStore.state.user` para garantir compatibilidade

  **Must NOT do**:
  - Não mudar assinatura de `requireAuth()`, `requireGuest()`, `signIn()`, `signOut()`, `checkAuth()`
  - Não remover campos existentes de `AuthUser`
  - Não modificar rotas existentes

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (após Wave 1)
  - **Blocks**: Task 4, Task 5, Task 6
  - **Blocked By**: Task 1, Task 2

  **References**:
  - `src/modules/auth/types.ts` — AuthUser type atual e authUserSchema Zod
  - `src/modules/auth/service.ts` — checkAuth() que faz `nocobaseClient.request({ url: "auth:check" })`
  - `src/modules/auth/store.ts` — authStore com `reset()` que precisa chamar `resetPermissions()`
  - `src/modules/auth/guard.ts` — requireAuth e requireGuest patterns
  - `src/routes/__root.tsx` — validateTokenOnInit() que chama checkAuth()

  **Acceptance Criteria**:
  - [ ] `AuthUser` type inclui `roles: RoleData[]`
  - [ ] `checkAuth()` popula `permissionsStore` com roles do response
  - [ ] `signOut()` chama `resetPermissions()` além de `reset()` do authStore
  - [ ] `pnpm dlx tsc --noEmit` passa
  - [ ] `pnpm biome:fix` passa
  - [ ] Login → auth:check → roles extraídos → permissionsStore populado

  **QA Scenarios**:

  ```
  Scenario: Login flow populates permissionsStore correctly
    Tool: Playwright
    Preconditions: App running, test user with known roles
    Steps:
      1. Navigate to /login
      2. Fill credentials and submit
      3. Wait for redirect to /
      4. In browser console, check `window.__PERMISSIONS_STORE__` (add debug export)
      5. Verify effectiveActions contains expected actions
      6. Verify effectiveSnippets contains expected snippets
    Expected Result: Permissions store populated with merged role data
    Failure Indicators: Store is empty, actions missing, snippets incorrect
    Evidence: .sisyphus/evidence/task-3-login-permissions.png

  Scenario: Logout clears permissionsStore
    Tool: Playwright
    Preconditions: User logged in with permissions
    Steps:
      1. Click logout button
      2. Wait for redirect to /login
      3. Check permissionsStore state is reset (empty arrays, isInitialized: false)
    Expected Result: All permission data cleared on logout
    Failure Indicators: Permissions persist after logout
    Evidence: .sisyphus/evidence/task-3-logout-reset.png

  Scenario: Hard refresh re-populates permissionsStore
    Tool: Playwright
    Preconditions: User logged in, permissions populated
    Steps:
      1. Reload page (F5)
      2. Wait for auth:check to complete
      3. Verify permissionsStore has same effectiveActions as before refresh
    Expected Result: Permissions survive page refresh
    Failure Indicators: Permissions lost on refresh, default to empty
    Evidence: .sisyphus/evidence/task-3-refresh-persist.png
  ```

  **Commit**: YES
  - Message: `feat(auth): extend AuthUser with roles and populate permissionsStore`
  - Files: `src/modules/auth/types.ts`, `src/modules/auth/service.ts`, `src/modules/auth/store.ts`
  - Pre-commit: `pnpm dlx tsc --noEmit && pnpm biome:fix`

- [x] 4. Criar hooks `useCan`, `useHasSnippet`, `useCanEdit` e guards `requireSnippet`, `requireAction`

  **What to do**:
  - Criar `src/modules/permissions/hooks.ts`:
    - `useCan(action: string): boolean` — verifica se action está em `effectiveActions` (suporta `:own` suffix: `useCan("update")` retorna true se `update:own` está presente)
    - `useHasSnippet(snippet: string): boolean` — verifica snippets com lógica de negação (`!` prefix) e wildcard (`.*` suffix)
    - `useCanEdit(action?: string): boolean` — alias para `useCan(action ?? "update")`
    - `useRoleNames(): string[]` — retorna nomes dos roles do usuário
  - Criar `src/modules/permissions/guards.ts`:
    - `requireSnippet(snippet: string): () => void` — lê `permissionsStore.state`, throws `redirect()` se snippet não permitido
    - `requireAction(action: string): () => void` — lê `permissionsStore.state`, throws `redirect()` se action não permitida
    - Seguir padrão exato de `src/modules/auth/guard.ts` (read from store, throw redirect)
  - Atualizar `src/modules/permissions/index.ts` com novos exports

  **Must NOT do**:
  - Não criar componentes de UI (Task 5)
  - Não criar nav config (Task 6)
  - Não fazer chamadas API adicionais nos hooks

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (após Task 3)
  - **Blocks**: Task 5, Task 6, Task 7
  - **Blocked By**: Task 2, Task 3

  **References**:
  - `src/modules/auth/guard.ts` — Padrão de route guards com `throw redirect()`
  - `src/modules/permissions/store.ts` (Task 2) — permissionsStore.state shape
  - `src/modules/permissions/compute.ts` (Task 2) — mergeActions e mergeSnippets logic
  - `src/components/dashboard/user-dashboard.tsx:19` — Padrão `useStore(authStore, selector)`

  **Acceptance Criteria**:
  - [ ] `useCan("create")` retorna true quando `effectiveActions` inclui `"create"`
  - [ ] `useCan("update")` retorna true quando `effectiveActions` inclui `"update:own"` (base action)
  - [ ] `useHasSnippet("pm")` retorna false quando snippets inclui `"!pm"`
  - [ ] `useHasSnippet("ui.pages")` retorna true quando snippets inclui `"ui.*"` (wildcard)
  - [ ] `requireSnippet("pm")` throws redirect quando `!pm` está nos snippets
  - [ ] `requireAction("destroy")` throws redirect quando `destroy` não está nas actions
  - [ ] `pnpm dlx tsc --noEmit` passa

  **QA Scenarios**:

  ```
  Scenario: useCan returns correct values for various action scenarios
    Tool: Bash (bun test)
    Preconditions: hooks.ts exists, permissionsStore populated
    Steps:
      1. Set effectiveActions to ["create", "view", "update:own", "export"]
      2. Assert useCan("create") === true
      3. Assert useCan("destroy") === false
      4. Assert useCan("update") === true (base of update:own)
      5. Assert useCan("update:own") === true
    Expected Result: All assertions pass
    Failure Indicators: Incorrect boolean returns, :own not matching base
    Evidence: .sisyphus/evidence/task-4-usecan.txt

  Scenario: useHasSnippet handles denial and wildcard patterns
    Tool: Bash (bun test)
    Preconditions: hooks.ts exists
    Steps:
      1. Set effectiveSnippets to ["!pm", "!ui.*", "app"]
      2. Assert useHasSnippet("pm") === false (denied by !pm)
      3. Assert useHasSnippet("ui.pages") === false (denied by !ui.*)
      4. Assert useHasSnippet("app") === true
      5. Set effectiveSnippets to ["pm.*", "ui.*"]
      6. Assert useHasSnippet("pm") === true (pm.* covers pm)
      7. Assert useHasSnippet("pm.settings") === true (pm.* wildcard)
    Expected Result: Denial and wildcard logic works correctly
    Failure Indicators: Denied snippets showing as allowed, wildcards not matching
    Evidence: .sisyphus/evidence/task-4-usehassnippet.txt

  Scenario: requireSnippet throws redirect for denied snippets
    Tool: Bash (bun test)
    Preconditions: guards.ts exists
    Steps:
      1. Set effectiveSnippets to ["!pm", "app"]
      2. Call requireSnippet("pm")()
      3. Assert it throws redirect to /forbidden
      4. Call requireSnippet("app")()
      5. Assert it does NOT throw
    Expected Result: Denial triggers redirect, allowance passes through
    Failure Indicators: No redirect thrown for denied snippet, redirect for allowed snippet
    Evidence: .sisyphus/evidence/task-4-guards.txt
  ```

  **Commit**: YES
  - Message: `feat(permissions): add useCan, useHasSnippet hooks and route guards`
  - Files: `src/modules/permissions/hooks.ts`, `src/modules/permissions/guards.ts`, `src/modules/permissions/index.ts`
  - Pre-commit: `pnpm dlx tsc --noEmit`

- [x] 5. Criar componente `<Can>` e `<PermissionField>`

  **What to do**:
  - Criar `src/modules/permissions/components/can.tsx`:
    - `<Can>` component que recebe `action?`, `snippet?`, `fallback?`, `children`
    - Usa `useCan(action)` e/ou `useHasSnippet(snippet)` para decidir renderização
    - Se permitido: renderiza `children`
    - Se não permitido: renderiza `fallback` (default: `null`)
  - Criar `src/modules/permissions/components/permission-field.tsx`:
    - `<PermissionField>` que recebe `label`, `action?`, `children: (editable: boolean) => ReactNode`
    - Se `useCan("view")` é false: não renderiza nada
    - Se `useCan("view")` é true e `useCan(action ?? "update")` é true: renderiza children(true) (editável)
    - Se `useCan("view")` é true e `useCan(action)` é false: renderiza children(false) (readOnly)
  - Atualizar `src/modules/permissions/index.ts` com component exports

  **Must NOT do**:
  - Não criar sidebar ou navigation (Task 6)
  - Não adicionar `React.memo` ou `useMemo` (premature optimization)
  - Não animar show/hide transitions

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`react-patterns`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (após Task 4)
  - **Blocks**: Task 7
  - **Blocked By**: Task 4

  **References**:
  - `src/modules/permissions/hooks.ts` (Task 4) — useCan e useHasSnippet
  - `src/components/dashboard/user-dashboard.tsx` — Exemplo de componente existente que consome store

  **Acceptance Criteria**:
  - [ ] `<Can action="create"><Button>Nova</Button></Can>` renderiza Button quando action está presente
  - [ ] `<Can action="destroy" fallback={<span>Sem permissão</span>}>` renderiza fallback quando action NÃO está presente
  - [ ] `<Can snippet="pm"><AdminPanel /></Can>` renderiza AdminPanel quando snippet está presente e não negado
  - [ ] `<PermissionField label="CPF" action="update">` renderiza children(true) quando update permitido, children(false) quando só view
  - [ ] `pnpm dlx tsc --noEmit` passa

  **QA Scenarios**:

  ```
  Scenario: Can component renders children when action is permitted
    Tool: Playwright
    Preconditions: App running, user logged in with "create" action
    Steps:
      1. Navigate to a page with <Can action="create"><button data-testid="new-btn">Nova</button></Can>
      2. Assert button with data-testid="new-btn" is visible
    Expected Result: Button is in the DOM and visible
    Failure Indicators: Button not found in DOM (Can hid it)
    Evidence: .sisyphus/evidence/task-5-can-visible.png

  Scenario: Can component renders fallback when action is NOT permitted
    Tool: Playwright
    Preconditions: App running, user logged in with ONLY "view" action (no "destroy")
    Steps:
      1. Navigate to page with <Can action="destroy" fallback={<span data-testid="no-perm">Sem permissão</span>}><button>Delete</button></Can>
      2. Assert span with data-testid="no-perm" is visible
      3. Assert button "Delete" is NOT in the DOM
    Expected Result: Fallback renders, children hidden
    Failure Indicators: Delete button still visible
    Evidence: .sisyphus/evidence/task-5-can-fallback.png

  Scenario: PermissionField renders editable vs readOnly based on action
    Tool: Playwright
    Preconditions: App running
    Steps:
      1. With "update" action: verify PermissionField children receives editable=true, input is NOT readOnly
      2. With only "view" action: verify PermissionField children receives editable=false, input has readOnly attribute
      3. Without "view" action: verify PermissionField renders nothing
    Expected Result: Field visibility and editability matches actions
    Failure Indicators: Field shown when shouldn't be, editable when shouldn't be
    Evidence: .sisyphus/evidence/task-5-permission-field.png
  ```

  **Commit**: YES
  - Message: `feat(permissions): add Can and PermissionField components`
  - Files: `src/modules/permissions/components/can.tsx`, `src/modules/permissions/components/permission-field.tsx`, `src/modules/permissions/index.ts`
  - Pre-commit: `pnpm dlx tsc --noEmit`

- [x] 6. Criar nav-config declarativo e integrar guards nas rotas existentes

  **What to do**:
  - Criar `src/modules/permissions/nav-config.ts`:
    - `NavItem` interface com: `label`, `icon?`, `to`, `requiresSnippet?`, `requiresAction?`, `children?`
    - Array `NAV_CONFIG` vazio por enquanto (será preenchido quando a sidebar for criada)
    - Export `filterNavByPermissions(items: NavItem[], actions: string[], snippets: string[]): NavItem[]` que filtra recursivamente
  - Adicionar guards de permissão nas rotas existentes:
    - `src/routes/index.tsx` — Adicionar `requireSnippet('app')` ao `beforeLoad` existente (compor com `requireAuth()`)
  - Criar rota `/forbidden` em `src/routes/forbidden.tsx` — página de acesso negado
  - Atualizar `src/modules/permissions/index.ts` com novos exports

  **Must NOT do**:
  - Não criar componente sidebar/layout (será feito separadamente)
  - Não modificar rotas que ainda não existem
  - Não popular NAV_CONFIG com itens reais (isso depende da sidebar)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`react-patterns`]

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (após Task 4)
  - **Blocks**: Task 7
  - **Blocked By**: Task 4

  **Acceptance Criteria**:
  - [ ] `src/modules/permissions/nav-config.ts` criado com NavItem interface e filterNavByPermissions
  - [ ] `src/routes/forbidden.tsx` criado com página 403
  - [ ] `src/routes/index.tsx` compos `requireSnippet('app')` com `requireAuth()`
  - [ ] `filterNavByPermissions` funciona corretamente com snippets negados e actions
  - [ ] `pnpm dlx tsc --noEmit` passa

  **QA Scenarios**:

  ```
  Scenario: User without 'app' snippet is redirected to /forbidden
    Tool: Playwright
    Preconditions: App running, user with role that has !app snippet
    Steps:
      1. Login as user with snippets: ["!app", "!pm", "!ui.*"]
      2. Navigate to /
      3. Assert redirect to /forbidden
    Expected Result: User redirected to forbidden page
    Failure Indicators: User reaches dashboard despite lacking app snippet
    Evidence: .sisyphus/evidence/task-6-forbidden-redirect.png

  Scenario: User with 'app' snippet reaches dashboard
    Tool: Playwright
    Preconditions: App running, user with role that has app snippet
    Steps:
      1. Login as user with snippets: ["app", "pm.*", "ui.*"]
      2. Navigate to /
      3. Assert page shows dashboard content (not forbidden)
    Expected Result: Dashboard loads normally
    Failure Indicators: Dashboard redirected to forbidden
    Evidence: .sisyphus/evidence/task-6-app-access.png

  Scenario: filterNavByPermissions correctly filters navigation items
    Tool: Bash (bun test)
    Preconditions: nav-config.ts exists
    Steps:
      1. Define NAV_CONFIG with items requiring snippet "pm" and action "create"
      2. Call filterNavByPermissions with actions=["view"] and snippets=["!pm"]
      3. Assert items requiring "pm" or "create" are filtered out
    Expected Result: Only permitted nav items remain
    Failure Indicators: Denied items still in result
    Evidence: .sisyphus/evidence/task-6-nav-filter.txt
  ```

  **Commit**: YES
  - Message: `feat(permissions): add nav config and route guards`
  - Files: `src/modules/permissions/nav-config.ts`, `src/routes/forbidden.tsx`, `src/routes/index.tsx`, `src/modules/permissions/index.ts`
  - Pre-commit: `pnpm dlx tsc --noEmit`

- [x] 7. Criar testes unitários para o módulo de permissions

  **What to do**:
  - Criar `src/modules/permissions/__tests__/compute.test.ts`:
    - Testes para `mergeActions`: union, desduplicação, `:own` suffix, arrays vazios
    - Testes para `mergeSnippets`: denial com `!`, wildcards com `.*`, conflitos
  - Criar `src/modules/permissions/__tests__/hooks.test.ts`:
    - Testes para `useCan`: com actions presentes/ausentes, `:own` base action
    - Testes para `useHasSnippet`: com snippets permitidos, negados, wildcards
    - Testes para edge case: usuário sem roles (tudo negado)
  - Criar `src/modules/permissions/__tests__/guards.test.ts`:
    - Testes para `requireSnippet`: snippet presente → passa, snippet negado → redirect
    - Testes para `requireAction`: action presente → passa, action ausente → redirect
  - Verificar que `pnpm test` passa

  **Must NOT do**:
  - Não criar testes de integração com NocoBase API real
  - Não testar componentes React (testar lógica pura)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave FINAL (após Tasks 1-6)
  - **Blocks**: Final Verification
  - **Blocked By**: Task 2, Task 4

  **References**:
  - `src/modules/permissions/compute.ts` (Task 2) — mergeActions, mergeSnippets
  - `src/modules/permissions/hooks.ts` (Task 4) — useCan, useHasSnippet
  - `src/modules/permissions/guards.ts` (Task 4) — requireSnippet, requireAction
  - `src/modules/permissions/store.ts` (Task 2) — permissionsStore

  **Acceptance Criteria**:
  - [ ] `src/modules/permissions/__tests__/compute.test.ts` com testes para mergeActions e mergeSnippets
  - [ ] `src/modules/permissions/__tests__/hooks.test.ts` com testes para useCan e useHasSnippet
  - [ ] `src/modules/permissions/__tests__/guards.test.ts` com testes para requireSnippet e requireAction
  - [ ] `pnpm test` passa sem erros
  - [ ] Cobertura de edge cases: roles vazios, strategy null, snippets vazios

  **QA Scenarios**:

  ```
  Scenario: All permission tests pass
    Tool: Bash
    Preconditions: Test files created
    Steps:
      1. Run `pnpm test src/modules/permissions`
      2. Verify all tests pass
      3. Verify no skipped tests
    Expected Result: All tests pass, 0 failures
    Failure Indicators: Any test failures or skips
    Evidence: .sisyphus/evidence/task-7-tests.txt

  Scenario: Edge case tests cover all scenarios
    Tool: Bash
    Preconditions: Test files created
    Steps:
      1. Run `pnpm test src/modules/permissions/__tests__/compute.test.ts`
      2. Verify test names include: empty roles, null strategy, denial prefix, wildcard matching, :own suffix
      3. All assertions pass
    Expected Result: 100% of edge cases covered and passing
    Failure Indicators: Missing test names for edge cases
    Evidence: .sisyphus/evidence/task-7-edge-cases.txt
  ```

  **Commit**: YES
  - Message: `test(permissions): add unit tests for compute, hooks, and guards`
  - Files: `src/modules/permissions/__tests__/compute.test.ts`, `src/modules/permissions/__tests__/hooks.test.ts`, `src/modules/permissions/__tests__/guards.test.ts`
  - Pre-commit: `pnpm test`

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `pnpm dlx tsc --noEmit` + `pnpm biome:fix` + `pnpm test`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names (data/result/item/temp).
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Tests [N pass/N fail] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high`
  Start dev server. Navigate to app. Login as admin → verify `useCan("create")` true, `useHasSnippet("pm")` true. Login as member → verify `useCan("create")` false, `useHasSnippet("pm")` false. Check `<Can>` renders/hides correctly. Check route guard redirects. Save screenshots to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff (git log/diff). Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT do" compliance. Detect cross-task contamination: Task N touching Task M's files. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **1**: `feat(permissions): validate auth:check response shape with roles` - Task 1 validation script
- **2**: `feat(permissions): add TypeScript types and Zod schemas` - src/modules/permissions/types.ts
- **3**: `feat(permissions): add permissions store` - src/modules/permissions/store.ts
- **4**: `feat(permissions): add merge logic service` - src/modules/permissions/service.ts
- **5**: `feat(auth): extend AuthUser with roles` - src/modules/auth/types.ts, service.ts, store.ts
- **6**: `feat(permissions): add hooks (useCan, useHasSnippet, useCanEdit)` - src/modules/permissions/hooks.ts
- **7**: `feat(permissions): add Can component` - src/modules/permissions/components/can.tsx
- **8**: `feat(permissions): add route guards` - src/modules/permissions/guards.ts
- **9**: `feat(permissions): integrate with root route and auth logout` - src/routes/__root.tsx, src/modules/auth/store.ts
- **10+11**: `test(permissions): add integration tests and final verification`

---

## Success Criteria

### Verification Commands
```bash
pnpm dlx tsc --noEmit           # Expected: 0 errors
pnpm biome:fix                   # Expected: 0 errors
pnpm test                        # Expected: all tests pass
```

### Final Checklist
- [ ] All "Must Have" present
- [ ] All "Must NOT Have" absent
- [ ] All tests pass