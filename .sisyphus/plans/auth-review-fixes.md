# Revisão Geral do Projeto — Correções e Melhorias

## TL;DR

> **Quick Summary**: Revisão completa do módulo de autenticação e infraestrutura do projeto CRM-ATPlus. Identificados 2 CRITICAL, 6 HIGH, 11 MEDIUM e 8 LOW issues. O plano corrige CRITICAL e HIGH em 2 waves, defere MEDIUM/LOW como tech debt.
> 
> **Deliverables**:
> - Segurança: .gitignore atualizado para excluir .env.example do tracking
> - Correção de env vars: nomes consistentes entre env.ts, client.ts e .env.example
> - Remoção de AUTH_SESSION_SECRET (código morto)
> - Remoção do ngrok hardcoded em vite.config.ts
> - Robustez: validateTokenOnInit distingue erro de rede vs token inválido
> - Validação runtime de AuthResponse (elimina cast inseguro `as`)
> - Remoção de console.error em produção
> - DevTools condicional (só em DEV)
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 2 waves
> **Critical Path**: Task 1 → Task 2 → Task 5 → Task 6 → Task 9 → Final

---

## Context

### Original Request
"Faça uma revisão geral no que já foi feito no projeto (praticamente só autenticação) e veja o que há para ser corrigido ou melhorado."

### Interview Summary
**Key Discussions**:
- Usuário pediu revisão geral do estado atual do projeto
- Projeto está em fase inicial — apenas autenticação implementada
- Revisão executada via 4 agentes paralelos: estrutura, auth, segurança, config

**Research Findings**:
- 4 agentes exploraram o codebase em paralelo
- 2 CRITICAL, 6 HIGH, 11 MEDIUM, 8 LOW issues identificados
- `.env.local` com JWT real está commitado no git
- Inconsistência de nomes de env vars entre arquivos
- `AUTH_SESSION_SECRET` definido mas nunca usado
- Múltiplos problemas de error handling no módulo de auth

### Metis Review
**Identified Gaps** (addressed):
- Token JWT pode estar em produção — decisão: tratar como CRITICAL, rotacionar imediatamente
- NocoBase pode ser compartilhado — decisão: verificar antes de rotacionar token
- Necessário definir escopo — decisão: fix CRITICAL+HIGH apenas, MEDIUM/LOW como tech debt
- Risk de scope creep — decisão: 3 batches strict, sem "while I'm in there"
- Missing acceptance criteria — decisão: cada task com QA scenarios agent-executable

---

## Work Objectives

### Core Objective
Corrigir todos os problemas CRITICAL e HIGH identificados na revisão do módulo de autenticação e infraestrutura do projeto, garantindo segurança, robustez e consistência.

### Concrete Deliverables
- `.env.local` removido do git tracking e git history limpo
- Nomes de env vars consistentes (env.ts ↔ client.ts ↔ .env.example)
- `AUTH_SESSION_SECRET` removido (dead code) ou implementado
- `allowedHosts` em vite.config.ts parametrizável via env var
- `validateTokenOnInit` distingue erro de rede (não desloga) vs token inválido (desloga)
- Validação runtime de `AuthResponse` substitui cast `as` inseguro
- `console.error` removido de código de produção (login-form.tsx)
- DevTools carregado condicionalmente (só em DEV)

### Definition of Done
- [x] `pnpm build` passa sem erros
- [x] `pnpm test` passa (333+ tests)
- [x] `pnpm biome:fix` não reporta problemas novos
- [x] `.env.local` não está mais no git tracking
- [x] Nenhum `console.error`/`console.log` em src/ (exceto testes)
- [x] DevTools não incluído no bundle de produção

### Must Have
- Todas as correções CRITICAL e HIGH implementadas
- Testes existentes continuam passando
- Build de produção funciona com .env.example

### Must NOT Have (Guardrails)
- ❌ NÃO upgrade de Nitro ou Biome (risco diferente, trabalho separado)
- ❌ NÃO migrar test environment de "node" para "jsdom" (afeta 333+ testes)
- ❌ NÃO implementar token refresh mechanism (feature nova, não fix)
- ❌ NÃO implementar rate limiting (requer coordenação com backend)
- ❌ NÃO adicionar noUncheckedIndexedAccess ao tsconfig (efeito cascata)
- ❌ NÃO criar CI pipeline do zero (infra, não auth fix)
- ❌ NÃO adicionar i18n ou mudar idioma das mensagens
- ❌ NÃO refatorar estrutura de módulos além do necessário para os fixes
- ❌ NÃO tocar arquivos fora de src/ exceto para CRITICAL fixes (vite.config.ts, .gitignore)
- ❌ NÃO fix issues MEDIUM/LOW neste plano — serão tech debt documentado

---

## Verification Strategy (MANDATORY)

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: YES (Vitest)
- **Automated tests**: Tests-after (correções primeiro, depois verificar testes)
- **Framework**: Vitest
- **Existing tests**: 333+ tests across auth module and lib

### QA Policy
Every task MUST include agent-executed QA scenarios.
Evidence saved to `.sisyphus/evidence/task-{N}-{scenario-slug}.{ext}`.

- **Backend/Service**: Use Bash (curl) - Send requests, assert status + response fields
- **Module/Store**: Use Bash (pnpm test) - Run targeted tests, verify pass/fail
- **Build/Config**: Use Bash (pnpm build) - Verify build succeeds
- **Security**: Use Bash (git log, grep) - Verify secrets removed, patterns absent

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately - security + config fixes):
├── Task 1: Remove .env.local from git + clean history [deep]
├── Task 2: Fix env var name mismatch (env.ts ↔ client.ts ↔ .env.example) [quick]
├── Task 3: Remove unused AUTH_SESSION_SECRET from env.ts [quick]
├── Task 4: Remove hardcoded ngrok URL from vite.config.ts [quick]
└── Task 5: Remove console.error from login-form.tsx [quick]

Wave 2 (After Wave 1 - reliability fixes):
├── Task 6: Fix validateTokenOnInit error discrimination [deep]
├── Task 7: Add runtime validation for AuthResponse [unspecified-high]
├── Task 8: Make DevTools conditional (DEV only) [quick]
└── Task 9: Fix empty catch blocks — add structured logging [quick]

Wave FINAL (After ALL tasks — 4 parallel reviews):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
-> Present results -> Get explicit user okay

Critical Path: Task 1 → Task 5 → Task 6 → Task 9 → F1-F4 → user okay
Parallel Speedup: ~50% faster than sequential
Max Concurrent: 5 (Wave 1)
```

### Dependency Matrix

| Task | Depends On | Blocks | Wave |
|------|-----------|--------|------|
| 1 | - | F1-F4 | 1 |
| 2 | - | F1-F4 | 1 |
| 3 | - | F1-F4 | 1 |
| 4 | - | F1-F4 | 1 |
| 5 | - | F1-F4 | 1 |
| 6 | - | F1-F4 | 2 |
| 7 | 2 | F1-F4 | 2 |
| 8 | - | F1-F4 | 2 |
| 9 | - | F1-F4 | 2 |

### Agent Dispatch Summary

- **Wave 1**: **5** - T1 → `deep`, T2-T5 → `quick`
- **Wave 2**: **4** - T6 → `deep`, T7 → `unspecified-high`, T8-T9 → `quick`
- **FINAL**: **4** - F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Atualizar `.gitignore` — adicionar `.env.*` e `.env.example` ao ignore

  **What to do**:
  - Verificar estado atual do `.gitignore` para entradas `.env*`
  - O `.env.local` já NÃO está sendo rastreado (padrão `.env.*` já cobre), mas `.env.example` está rastreado
  - O usuário quer que `.env.example` também seja ignorado pelo git
  - Atualizar `.gitignore` para:
    - Remover a exceção `!.env.example` (se existir)
    - Garantir que `.env.*` cobre todos os env files
    - Adicionar `.env.example` explicitamente ao `.gitignore`
  - Remover `.env.example` do git tracking: `git rm --cached .env.example`
  - Verificar se não há outros arquivos `.env*` rastreados: `git ls-files | grep -i '\.env'`
  - **IMPORTANTE**: O token JWT (`CRM_NOCOBASE_TOKEN`) está no `.env.local` e no histórico do git. Após esta task, **rotacionar o token no painel admin do NocoBase** — qualquer pessoa com acesso ao repo tem o token

  **Must NOT do**:
  - NÃO modificar o conteúdo do `.env.local` — apenas ajustar .gitignore
  - NÃO fazer push force sem confirmação do usuário
  - NÃO deletar o arquivo `.env.example` — só remover do git tracking

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`git-master`]
    - `git-master`: Necessário para operações de git (rm --cached, verificação de tracking)

  **Parallelization**:
  - **Can Run In Parallel**: NO — tarefa de segurança que deve ser feita primeiro
  - **Parallel Group**: Wave 1 (Batch 1)
  - **Blocks**: Tasks 2, 3, 4
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `.gitignore` — Padrão atual `.env.*` com excessão `!.env.example`. Verificar estado atual

  **WHY Each Reference Matters**:
  - `.gitignore`: Precisa ser atualizado para ignorar `.env.example` também
  - `.env.local` já está coberto por `.env.*`, mas `.env.example` precisa ser adicionado ao ignore

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Nenhum arquivo .env* está rastreado pelo git
    Tool: Bash
    Preconditions: Repositório git limpo
    Steps:
      1. `git ls-files | grep -i '\.env'`
      2. Assert: output vazio (nenhum arquivo .env rastreado)
      3. `grep '\.env' .gitignore`
      4. Assert: contém `.env.*` e `.env.example`
    Expected Result: Nenhum .env* em `git ls-files`, ambos os padrões em .gitignore
    Failure Indicators: `git ls-files` retorna algum .env* file
    Evidence: .sisyphus/evidence/task-1-env-files-not-tracked.txt

  Scenario: .env.example ainda existe no disco mas não no git
    Tool: Bash
    Preconditions: git rm --cached já executado
    Steps:
      1. `ls -la .env.example`
      2. Assert: arquivo existe no disco
      3. `git ls-files .env.example`
      4. Assert: output vazio (não rastreado)
    Expected Result: Arquivo existe localmente, mas não é rastreado pelo git
    Failure Indicators: Arquivo não existe no disco ou ainda é rastreado
    Evidence: .sisyphus/evidence/task-1-env-example-untracked.txt
  ```

  **Commit**: YES
  - Message: `chore: add .env.* and .env.example to .gitignore, untrack env files`
  - Files: `.gitignore`, `.env.example` (git rm --cached)
  - Pre-commit: `git ls-files | grep -i '\.env'` (deve retornar vazio)

  ⚠️ **AÇÃO MANUAL NECESSÁRIA**: Após esta task, rotacionar o token JWT no painel admin do NocoBase. O token está no histórico do git.

- [x] 2. Corrigir mismatch de nomes de env vars entre `env.ts`, `client.ts` e `.env.example`

  **What to do**:
  - Auditar TODAS as env vars usadas no projeto: `grep -rn 'env\.\VITE_\|env\.CRM_\|env\.SERVER_\|env\.AUTH_' src/`
  - Comparar as vars definidas em `src/env.ts` (schema) com as documentadas em `.env.example`
  - Identificar inconsistências:
    - `.env.example` tem `VITE_CRM_NOCOBASE_URL` mas `env.ts` define `VITE_NOCOBASE_URL` no client schema
    - `client.ts` usa `env.VITE_NOCOBASE_URL` mas `.env.example` diz `VITE_CRM_NOCOBASE_URL`
  - Escolher a nomenclatura correta (preferir `VITE_NOCOBASE_URL` — mais simples e já usado no código)
  - Atualizar `.env.example` para refletir o nome correto
  - Verificar se `.env.local` dos desenvolvedores precisa ser atualizado (documentar migration step)
  - Verificar se `CRM_NOCOBASE_URL` (server-side) é realmente usado. Se não, marcar como candidato a remoção ou documentar uso futuro

  **Must NOT do**:
  - NÃO renomear env vars que são usadas no server-side se TanStack Start/Nitro as requer
  - NÃO quebrar o `.env.local` existente sem documentar o migration
  - NÃO adicionar novas env vars — apenas corrigir nomes existentes

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []
    - Nenhuma skill especializada necessária

  **Parallelization**:
  - **Can Run In Parallel**: NO — depende do Task 1 (não mexer em .env enquanto git tracking não está resolvido)
  - **Parallel Group**: Wave 1 (Batch 1)
  - **Blocks**: Tasks 3, 4
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `src/env.ts` — Schema de validação de env vars com `createEnv()`. Server vars e client vars separados
  - `src/modules/auth/client.ts:6` — `env.VITE_NOCOBASE_URL` usado como `baseURL` do NocoBase client

  **API/Type References**:
  - `.env.example` — Documenta vars esperadas. Linha 7 tem `VITE_CRM_NOCOBASE_URL`
  - `.env.local` — Contém vars reais. Verificar quais nomes estão sendo usados na prática

  **WHY Each Reference Matters**:
  - `env.ts`: É a source of truth para quais vars o app espera. Tudo deve ser consistente com este arquivo
  - `client.ts`: Usa `VITE_NOCOBASE_URL` — se .env.example diz outra coisa, dev vai configurar errado
  - `.env.example`: É o guia para novos desenvolvedores. Se está inconsistente, onboarding quebra

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Nomes de env vars são consistentes entre env.ts, client.ts e .env.example
    Tool: Bash
    Preconditions: Código atualizado
    Steps:
      1. Extrair chaves do client schema em env.ts: `grep -oP 'VITE_\w+' src/env.ts | sort -u`
      2. Extrair chaves do .env.example: `grep -oP 'VITE_\w+' .env.example | sort -u`
      3. Comparar os dois conjuntos — devem ser idênticos
      4. Verificar que client.ts usa exatamente as vars do env.ts: `grep 'env\.\VITE_' src/modules/auth/client.ts`
    Expected Result: Chaves VITE_* em env.ts, .env.example e client.ts são idênticas
    Failure Indicators: Qualquer VITE_* presente em um mas ausente em outro
    Evidence: .sisyphus/evidence/task-2-env-consistency.txt

  Scenario: Build funciona com .env.example como base
    Tool: Bash
    Preconditions: .env.example atualizado, .env.local temporariamente renomeado
    Steps:
      1. `cp .env.example .env.local` (substituir valores placeholder por valores reais de teste)
      2. `pnpm build`
      3. Assert: build succeeds (exit code 0)
      4. Restaurar .env.local original
    Expected Result: `pnpm build` exit code 0
    Failure Indicators: Build falha com "missing env var" ou "invalid env var"
    Evidence: .sisyphus/evidence/task-2-build-with-example.txt
  ```

  **Commit**: YES (agrupado com Task 3)
  - Message: `fix(config): align env var names across env.ts, client.ts and .env.example`
  - Files: `src/env.ts`, `.env.example`
  - Pre-commit: `pnpm build`

- [x] 3. Resolver `AUTH_SESSION_SECRET` — remover ou implementar

  **What to do**:
  - Buscar TODAS as referências a `AUTH_SESSION_SECRET` no código: `grep -rn 'AUTH_SESSION_SECRET' src/`
  - Confirmar que é definido em `env.ts` mas NUNCA usado (já verificado: zero referências além da definição)
  - Verificar se TanStack Start ou Nitro usam essa var internamente
  - Se confirmado como dead code: remover de `env.ts` e `.env.example`
  - Se for parte de uma feature planejada: adicionar TODO comment e documentar o propósito
  - Atualizar `.env.local` para remover a var (valor placeholder `"your-auth-session-secret-at-least-32-chars"`)
  - Garantir que `pnpm build` passa após remoção

  **Must NOT do**:
  - NÃO implementar session signing do zero — isso é feature nova, não fix
  - NÃO deixar a var com placeholder — é security theater

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES (com Task 2 — mas commits devem ser agrupados)
  - **Parallel Group**: Wave 1 (Batch 1)
  - **Blocks**: None
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `src/env.ts` — Define `AUTH_SESSION_SECRET: z.string().min(32)` no server schema

  **API/Type References**:
  - `.env.example` — Documenta `AUTH_SESSION_SECRET`
  - `.env.local` — Tem placeholder `"your-auth-session-secret-at-least-32-chars"`

  **WHY Each Reference Matters**:
  - `env.ts`: Se AUTH_SESSION_SECRET é removido, a validação falha se a var estiver no .env (T3Env é strict). Precisa remover do schema E do .env
  - `.env.example`: Precisa ser consistente com o que o app realmente requer

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: AUTH_SESSION_SECRET não é mais requerido pelo app
    Tool: Bash
    Preconditions: Código atualizado
    Steps:
      1. `grep -rn 'AUTH_SESSION_SECRET' src/` — deve retornar vazio
      2. `grep 'AUTH_SESSION_SECRET' .env.example` — deve retornar vazio
      3. `pnpm build` — deve passar
      4. `pnpm test` — deve passar
    Expected Result: Nenhuma referência a AUTH_SESSION_SECRET no código, build e testes passam
    Failure Indicators: Build falha com "missing env var AUTH_SESSION_SECRET"
    Evidence: .sisyphus/evidence/task-3-session-secret-removed.txt

  Scenario: App funciona sem AUTH_SESSION_SECRET no .env
    Tool: Bash
    Preconditions: AUTH_SESSION_SECRET removido do .env.local
    Steps:
      1. Remover AUTH_SESSION_SECRET do .env.local (se presente)
      2. `pnpm build`
      3. Assert: exit code 0
    Expected Result: Build passa sem AUTH_SESSION_SECRET
    Failure Indicators: Build falha
    Evidence: .sisyphus/evidence/task-3-app-without-secret.txt
  ```

  **Commit**: YES (agrupado com Task 2)
  - Message: `fix(config): align env var names across env.ts, client.ts and .env.example`
  - Files: `src/env.ts`, `.env.example`, `.env.local`
  - Pre-commit: `pnpm build`

- [x] 4. Remover ngrok URL hardcoded do `vite.config.ts`

  **What to do**:
  - Abrir `vite.config.ts` e localizar `allowedHosts: ["fifteen-unglue-rascal.ngrok-free.dev"]`
  - Remover o host hardcoded
  - Se necessário para desenvolvimento, mover para env var: `VITE_ALLOWED_HOSTS`
  - Se não é mais necessário, simplesmente remover a config `allowedHosts`
  - Verificar se a URL ngrok é usada por outros devs (provavelmente era debug temporário)

  **Must NOT do**:
  - NÃO adicionar infraestrutura complexa de env var se não é necessário
  - NÃO quebrar o dev server existente

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (Batch 1)
  - **Blocks**: None
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `vite.config.ts` — Contém `allowedHosts` com URL ngrok hardcoded

  **WHY Each Reference Matters**:
  - `vite.config.ts`: URL ngrok é por sessão — muda a cada restart. Não deve estar no código

  **Acceptance Criteria**:

  **QA Scenarios (MANDATORY):**

  ```
  Scenario: Nenhuma URL ngrok no vite.config.ts
    Tool: Bash
    Preconditions: Código atualizado
    Steps:
      1. `grep -i 'ngrok' vite.config.ts`
      2. Assert: output vazio
      3. `pnpm build`
      4. Assert: exit code 0
    Expected Result: Nenhuma referência a ngrok, build passa
    Failure Indicators: grep retorna URL ngrok ou build falha
    Evidence: .sisyphus/evidence/task-4-ngrok-removed.txt
  ```

  **Commit**: YES
  - Message: `fix(config): remove hardcoded ngrok URL from vite.config.ts`
  - Files: `vite.config.ts`
  - Pre-commit: `pnpm build`

- [x] 5. **Fix `validateTokenOnInit` — distinguish network errors from auth errors**

  **What to do**:
  - In `src/modules/auth/guard.ts`, modify `validateTokenOnInit` to catch specific error types
  - Network errors (TypeError, Failed to fetch, ECONNREFUSED) → do NOT call `reset()`, preserve auth state, log warning
  - Auth errors (401, 403, token expired) → call `reset()` as before
  - Add a simple error classifier function:
    ```ts
    function isNetworkError(err: unknown): boolean {
      if (err instanceof TypeError) return true;
      if (err instanceof Error && /fetch|network|ECONNREFUSED|timeout/i.test(err.message)) return true;
      return false;
    }
    ```
  - Update catch block in `validateTokenOnInit`:
    ```ts
    catch (err) {
      if (isNetworkError(err)) {
        // Don't log out user on network errors
        console.warn("[auth] Network error during token validation, preserving auth state");
        return;
      }
      reset();
    }
    ```
  - Update corresponding test file `src/_tests/auth/guard.test.ts` — add test cases for:
    - Network error → auth state preserved (user NOT logged out)
    - 401 error → auth state cleared (user logged out)
    - Generic error → auth state cleared (current behavior)
  - Run `pnpm test -- src/_tests/auth/guard.test.ts` to verify

  **Must NOT do**:
  - Do NOT add retry logic or exponential backoff (Metis: avoid retry loops)
  - Do NOT add loading/spinner UI for network errors (deferred)
  - Do NOT change the behavior of `requireAuth` or `requireGuest`

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`react-patterns`]
    - `react-patterns`: Error handling patterns in React/TS

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 6, 7, 8)
  - **Blocks**: Task F1-F4
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/modules/auth/guard.ts:46-51` — Current catch-all error swallowing that needs to be replaced
  - `src/modules/auth/service.ts:36-44` — `checkAuth()` throws errors that guard catches; understand what error shapes it produces
  - `src/_tests/auth/guard.test.ts` — Existing test patterns to follow for new test cases

  **API/Type References**:
  - `src/modules/auth/types.ts` — Auth types used in guard

  **WHY Each Reference Matters**:
  - `guard.ts:46-51`: This is the EXACT code to replace. The current `catch { reset() }` swallows ALL errors.
  - `service.ts:36-44`: Understanding what `checkAuth()` throws determines the error classification logic.
  - `guard.test.ts`: Follow existing test structure and mock patterns for consistency.

  **Acceptance Criteria**:

  - [x] `src/modules/auth/guard.ts` has `isNetworkError()` classifier function
  - [x] `validateTokenOnInit` catch block distinguishes network vs auth errors
  - [x] Network errors do NOT clear auth state
  - [x] Auth errors (401/403) DO clear auth state
  - [x] `pnpm test -- src/_tests/auth/guard.test.ts` → ALL PASS
  - [x] New test cases added: network error preserves state, 401 clears state

  **QA Scenarios (MANDATORY)**:

  ```
  Scenario: Network error during token validation preserves auth state
    Tool: Bash (vitest)
    Preconditions: Auth store has valid token and user set
    Steps:
      1. Run `pnpm test -- src/_tests/auth/guard.test.ts`
      2. Check test output for "network error" test case
      3. Assert: test confirms auth state is NOT reset on network error
    Expected Result: All tests pass, including new network error test case
    Failure Indicators: Test fails OR network error still calls reset()
    Evidence: .sisyphus/evidence/task-5-network-error-preserve.txt

  Scenario: 401 error during token validation clears auth state
    Tool: Bash (vitest)
    Preconditions: Auth store has token, mock returns 401
    Steps:
      1. Run `pnpm test -- src/_tests/auth/guard.test.ts`
      2. Check test output for "401" test case
      3. Assert: test confirms auth state IS reset on 401
    Expected Result: All tests pass, 401 test confirms reset
    Failure Indicators: 401 error does NOT call reset()
    Evidence: .sisyphus/evidence/task-5-auth-error-clear.txt
  ```

  **Commit**: YES (groups with 6, 7, 8)
  - Message: `fix(auth): improve error handling in guards and service`
  - Files: `src/modules/auth/guard.ts`, `src/_tests/auth/guard.test.ts`

---

- [x] 6. **Add runtime validation for `AuthResponse` — replace unsafe `as` cast**

  **What to do**:
  - In `src/modules/auth/service.ts`, replace `as AuthResponse` with runtime validation
  - The project already uses Zod 4 (`zod` in dependencies) — use it to validate the API response
  - Create a Zod schema for `AuthResponse` in `src/modules/auth/types.ts`:
    ```ts
    import { z } from "zod";
    export const authResponseSchema = z.object({
      data: z.union([
        z.object({
          token: z.string().min(1),
          user: z.object({ id: z.number() }).passthrough(),
        }),
        z.object({
          token: z.string().min(1),
          user: z.object({ id: z.number() }).passthrough(),
        }),
      ]),
    });
    ```
    Note: Use `.passthrough()` on user object to allow extra fields from NocoBase without breaking validation
  - In `service.ts`, replace the unsafe cast:
    ```ts
    // BEFORE:
    const response = (await nocobaseClient.auth.signIn(credentials)) as AuthResponse;
    const { token, user } = response.data?.data ?? response.data;
    
    // AFTER:
    const rawResponse = await nocobaseClient.auth.signIn(credentials);
    const responseData = rawResponse.data?.data ?? rawResponse.data;
    const parsed = authResponseSchema.safeParse({ data: responseData });
    if (!parsed.success) {
      throw new AuthValidationError("Resposta de autenticação inválida", parsed.error);
    }
    const { token, user } = parsed.data.data;
    ```
  - Add `AuthValidationError` class to types.ts:
    ```ts
    export class AuthValidationError extends Error {
      constructor(message: string, public readonly zodError?: z.ZodError) {
        super(message);
        this.name = "AuthValidationError";
      }
    }
  ```
  - Update `signIn` and `checkAuth` to use the schema validation
  - Update tests in `src/_tests/auth/service.test.ts` to test:
    - Valid response → parses successfully
    - Invalid response shape → throws `AuthValidationError`
    - Missing token → throws `AuthValidationError`
  - Run `pnpm test -- src/_tests/auth/service.test.ts`

  **Must NOT do**:
  - Do NOT make the schema so strict that NocoBase API version changes break it (use `.passthrough()`)
  - Do NOT change the NocoBase SDK's internal types
  - Do NOT add validation to `signOut` (best-effort, no response needed)

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
  - **Skills**: [`react-patterns`]
    - `react-patterns`: TypeScript patterns, Zod validation in React apps

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 7, 8)
  - **Blocks**: Task F1-F4
  - **Blocked By**: Task 4 (needs consistent env vars to verify API calls work)

  **References**:

  **Pattern References**:
  - `src/modules/auth/service.ts:14` — Current unsafe `as AuthResponse` cast to replace
  - `src/modules/auth/service.ts:17,41` — Fallback `response.data?.data ?? response.data` to replace with schema validation
  - `src/modules/auth/types.ts` — Current type definitions to extend with Zod schemas

  **API/Type References**:
  - `src/modules/auth/types.ts:AuthResponse` — Type that the Zod schema must validate against
  - `src/env.ts` — Uses Zod for env validation already — follow the same pattern

  **Test References**:
  - `src/_tests/auth/service.test.ts` — Existing test structure and mock patterns

  **External References**:
  - Zod 4 docs: `https://zod.dev` — Schema validation API, `.safeParse()`, `.passthrough()`

  **WHY Each Reference Matters**:
  - `service.ts:14`: The EXACT line with the unsafe cast. This is the primary target.
  - `types.ts`: Where to add the Zod schema alongside the existing type definition.
  - `env.ts`: Shows the project already uses Zod — follow the same validation patterns.

  **Acceptance Criteria**:

  - [x] `AuthResponse` has a corresponding Zod schema in `types.ts`
  - [x] `signIn` uses `.safeParse()` instead of `as AuthResponse`
  - [x] `checkAuth` uses runtime validation instead of `??` fallback
  - [x] `AuthValidationError` class exists in `types.ts`
  - [x] `grep -r 'as AuthResponse' src/modules/auth/service.ts` returns empty
  - [x] `pnpm test -- src/_tests/auth/service.test.ts` → ALL PASS
  - [x] New test: invalid response shape throws `AuthValidationError`

  **QA Scenarios (MANDATORY)**:

  ```
  Scenario: Valid auth response parses successfully
    Tool: Bash (vitest)
    Preconditions: Mock NocoBase returns valid { data: { data: { token, user } } }
    Steps:
      1. Run `pnpm test -- src/_tests/auth/service.test.ts`
      2. Assert: signIn test passes with valid mock data
    Expected Result: All tests pass, token and user extracted correctly
    Failure Indicators: AuthValidationError thrown on valid response
    Evidence: .sisyphus/evidence/task-6-valid-response.txt

  Scenario: Invalid auth response shape throws typed error
    Tool: Bash (vitest)
    Preconditions: Mock NocoBase returns { data: null }
    Steps:
      1. Run `pnpm test -- src/_tests/auth/service.test.ts`
      2. Assert: test confirms AuthValidationError is thrown
    Expected Result: AuthValidationError thrown with meaningful message
    Failure Indicators: Generic TypeError or silent failure instead of AuthValidationError
    Evidence: .sisyphus/evidence/task-6-invalid-response.txt
  ```

  **Commit**: YES (groups with 5, 7, 8)
  - Message: `fix(auth): improve error handling in guards and service`
  - Files: `src/modules/auth/types.ts`, `src/modules/auth/service.ts`, `src/_tests/auth/service.test.ts`

---

- [x] 7. **Remove `console.error` leak and replace empty catch blocks with structured warnings**

  **What to do**:
  - In `src/components/auth/login-form.tsx:26`, replace `console.error(e)` with a sanitized user-facing error:
    ```ts
    // BEFORE:
    console.error(e);
    setErrorLocal("E-mail ou senha inválidos");
    
    // AFTER:
    // Don't leak raw error to console — only show user-friendly message
    setErrorLocal("E-mail ou senha inválidos");
    ```
    Remove the `console.error` entirely. The error is already handled by showing the user a message.
  - In `src/modules/auth/service.ts:28-29`, add a development-only warning to the empty catch in `signOut`:
    ```ts
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn("[auth] signOut API call failed:", err instanceof Error ? err.message : String(err));
      }
    }
    ```
  - In `src/components/auth/logout-button.tsx:11-12`, add same dev-only warning:
    ```ts
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn("[auth] logout API call failed:", err instanceof Error ? err.message : String(err));
      }
    }
    ```
  - In `src/components/document/theme-script.tsx:16`, replace empty `catch (_) {}` with:
    ```ts
    } catch (err) {
      if (import.meta.env.DEV) {
        console.warn("[theme] initialization failed:", err instanceof Error ? err.message : String(err));
      }
    }
    ```
  - In `src/modules/auth/guard.ts:46-51`, update the catch block (this will be handled by Task 5, but if Task 5 adds `isNetworkError`, the else branch should also log):
    ```ts
    // If Task 5 already adds logging, skip this for guard.ts
    ```
  - Run `pnpm biome:fix` to ensure formatting
  - Run `pnpm test` to verify nothing breaks

  **Must NOT do**:
  - Do NOT add a logging framework or Sentry (deferred)
  - Do NOT change error messages shown to users (keep Portuguese messages)
  - Do NOT add `console.error` anywhere — use `console.warn` in DEV mode only
  - Do NOT touch test files' console.log statements (test hygiene is low priority)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 8)
  - **Blocks**: Task F1-F4
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/components/auth/login-form.tsx:26` — `console.error(e)` to remove
  - `src/modules/auth/service.ts:28-29` — Empty catch in `signOut`
  - `src/components/auth/logout-button.tsx:11-12` — Empty catch in `handleLogout`
  - `src/components/document/theme-script.tsx:16` — Empty `catch (_) {}`

  **WHY Each Reference Matters**:
  - `login-form.tsx:26`: Leaks raw error objects to browser console — security concern
  - `service.ts:28-29`: Best-effort API call, but should be observable in dev
  - `logout-button.tsx:11-12`: Same pattern, same fix
  - `theme-script.tsx:16`: Silent failure makes theme debugging impossible

  **Acceptance Criteria**:

  - [x] `grep -r 'console\.error' src/components/auth/login-form.tsx` returns empty
  - [x] Empty catch blocks replaced with DEV-only `console.warn`
  - [x] `grep -r 'console\.error' src/modules/auth/` returns empty (or only test files)
  - [x] `pnpm test` → ALL PASS
  - [x] `pnpm biome:fix` → no errors

  **QA Scenarios (MANDATORY)**:

  ```
  Scenario: Login form error does not leak to console
    Tool: Bash (grep)
    Preconditions: None
    Steps:
      1. Run: grep -n 'console.error' src/components/auth/login-form.tsx
      2. Assert: output is empty (no matches)
    Expected Result: No console.error in login form
    Failure Indicators: grep finds console.error
    Evidence: .sisyphus/evidence/task-7-no-console-error.txt

  Scenario: Dev-only warnings in catch blocks
    Tool: Bash (grep)
    Preconditions: None
    Steps:
      1. Run: grep -n 'import.meta.env.DEV' src/modules/auth/service.ts src/components/auth/logout-button.tsx
      2. Assert: each file has at least one match
    Expected Result: DEV-gated console.warn in catch blocks
    Failure Indicators: No DEV check found, or console.warn without DEV gate
    Evidence: .sisyphus/evidence/task-7-dev-warnings.txt
  ```

  **Commit**: YES (groups with 5, 6, 8)
  - Message: `fix(auth): improve error handling in guards and service`
  - Files: `src/components/auth/login-form.tsx`, `src/modules/auth/service.ts`, `src/components/auth/logout-button.tsx`, `src/components/document/theme-script.tsx`

---

- [x] 8. **Gate DevTools behind DEV environment check**

  **What to do**:
  - In `src/components/document/root-document.tsx`, wrap `<TanstackDevTools />` in a DEV check:
    ```tsx
    // BEFORE:
    <TanstackDevTools />
    
    // AFTER:
    {import.meta.env.DEV && <TanstackDevTools />}
    ```
  - Verify the build excludes devtools code:
    - Run `pnpm build`
    - Check that the production bundle does NOT include devtools code
  - Run `pnpm dev` to verify devtools still appear in development

  **Must NOT do**:
  - Do NOT remove the DevTools import entirely
  - Do NOT change the DevTools configuration
  - Do NOT add lazy loading (over-engineering for this fix)

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 2 (with Tasks 5, 6, 7)
  - **Blocks**: Task F1-F4
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `src/components/document/root-document.tsx:13` — Current `<TanstackDevTools />` without DEV gate
  - `src/integrations/tanstack/` — DevTools integration setup

  **WHY Each Reference Matters**:
  - `root-document.tsx:13`: The EXACT line to wrap in a DEV check

  **Acceptance Criteria**:

  - [x] `src/components/document/root-document.tsx` has `import.meta.env.DEV` check around DevTools
  - [x] `pnpm build` succeeds
  - [x] `pnpm dev` starts and DevTools are visible
  - [x] Build output does not include devtools bundle (verify via grep or bundle analysis)

  **QA Scenarios (MANDATORY)**:

  ```
  Scenario: DevTools conditional on DEV environment
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run: grep -n 'import.meta.env.DEV' src/components/document/root-document.tsx
      2. Assert: match found wrapping TanstackDevTools
    Expected Result: TanstackDevTools rendered only when DEV is true
    Failure Indicators: No DEV check found, or DevTools always rendered
    Evidence: .sisyphus/evidence/task-8-devtools-gated.txt

  Scenario: Production build excludes DevTools
    Tool: Bash
    Preconditions: pnpm build completed
    Steps:
      1. Run: pnpm build
      2. Run: grep -r 'devtools\|DevTools' .output/ 2>/dev/null | head -5
      3. Assert: no devtools references in production output (or only dead code eliminated)
    Expected Result: DevTools code not in production bundle
    Failure Indicators: DevTools code present in production bundle
    Evidence: .sisyphus/evidence/task-8-prod-no-devtools.txt
  ```

  **Commit**: YES (groups with 5, 6, 7)
  - Message: `fix(perf): gate DevTools behind DEV environment check`
  - Files: `src/components/document/root-document.tsx`

---

## Deferred Items (Tech-Debt Backlog)

> These issues were identified during the audit but are explicitly OUT OF SCOPE for this plan.
> They are documented here for future planning sessions.

| # | Issue | Severity | Why Deferred |
|---|-------|----------|-------------|
| D1 | No CI workflow (lint/typecheck/build) | HIGH | Infrastructure work, not auth fix. Separate plan needed. |
| D2 | GitHub Actions not pinned to SHA | HIGH | CI security, separate infra concern. |
| D3 | No Dependabot configuration | MEDIUM | Infra configuration, not auth fix. |
| D4 | Nitro beta version in production deps | MEDIUM | Dependency upgrade has breaking change risk. Separate plan. |
| D5 | Vitest environment is "node" not "jsdom" | MEDIUM | Affects ALL 333 tests, not just auth. |
| D6 | No token refresh mechanism | MEDIUM | New feature, requires backend API. |
| D7 | No rate limiting on password reset | MEDIUM | New feature, requires backend coordination. |
| D8 | `noUncheckedIndexedAccess` not in tsconfig | LOW | Project-wide ripple effect. Separate type-safety initiative. |
| D9 | Token stored in localStorage (XSS risk) | MEDIUM | Requires HTTP-only cookie migration, backend change. |
| D10 | Fragile Portuguese substring error matching | MEDIUM | Requires backend error codes contract. |
| D11 | `confirmPassword` field in type but never sent | LOW | Documentation issue, not a bug. |
| D12 | Race condition in root.tsx token validation | LOW | Theoretical, not causing user-reported bugs. |
| D13 | `displayName` in dashboard computed every render | LOW | Performance micro-optimization. |
| D14 | `returnTo` open redirect potential | LOW | TanStack Router likely mitigates; verify when implementing navigation features. |
| D15 | Direct SDK token mutation `nocobaseClient.auth.token = ""` | MEDIUM | SDK coupling, needs verification of alternative API. |
| D16 | Module-level side effect in store.ts | MEDIUM | SSR edge case, needs careful testing. |
| D17 | `console.log` in test file `clearmocks.test.ts` | LOW | Test hygiene, not production code. |
| D18 | Missing `CODEOWNERS` file | LOW | Team governance, not code quality. |
| D19 | `.cta.json` says `packageManager: "npm"` but project uses pnpm | LOW | Config inconsistency, not affecting functionality. |
| D20 | Biome version outdated | MEDIUM | Dependency upgrade, separate from auth fixes. |
| D21 | `scripts/generate-types/src/generate-types.ts` has syntax errors | CRITICAL | Separate from auth module — needs its own investigation. |

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [x] F2. **Code Quality Review** — `unspecified-high`
  Run `pnpm dlx tsc --noEmit` + `pnpm biome:fix` + `pnpm test`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names (data/result/item/temp).
  Output: `Build [PASS/FAIL] | Lint [PASS/FAIL] | Tests [N pass/N fail] | Files [N clean/N issues] | VERDICT`

- [x] F3. **Real Manual QA** — `unspecified-high`
  Start from clean state. Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-task integration (features working together, not isolation). Test edge cases: empty state, invalid input, rapid actions. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [x] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff (git log/diff). Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT do" compliance. Detect cross-task contamination: Task N touching Task M's files. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **1**: `fix(security): remove .env.local from git tracking and clean history` - .env.local, .gitignore
- **2**: `fix(env): align env var names across env.ts, client.ts and .env.example` - src/env.ts, src/modules/auth/client.ts, .env.example
- **3**: `chore(env): remove unused AUTH_SESSION_SECRET` - src/env.ts, .env.example
- **4**: `fix(config): remove hardcoded ngrok URL from vite.config.ts` - vite.config.ts
- **5**: `fix(auth): remove console.error from login form` - src/components/auth/login-form.tsx
- **6**: `fix(auth): discriminate network vs auth errors in validateTokenOnInit` - src/modules/auth/guard.ts, src/modules/auth/service.ts
- **7**: `fix(auth): add runtime validation for AuthResponse` - src/modules/auth/service.ts, src/modules/auth/types.ts
- **8**: `fix(ui): make DevTools conditional on DEV environment` - src/components/document/root-document.tsx
- **9**: `fix(auth): add structured logging to empty catch blocks` - src/modules/auth/service.ts, src/components/auth/logout-button.tsx

---

## Success Criteria

### Verification Commands
```bash
pnpm build                    # Expected: successful build
pnpm test                     # Expected: all 333+ tests pass
pnpm biome:fix                # Expected: no new issues
git ls-files | grep '\.env'   # Expected: only .env.example
grep -r 'console\.\(error\|log\|warn\)' src/ --include='*.ts' --include='*.tsx' | grep -v test | grep -v node_modules  # Expected: empty
```

### Tech Debt Backlog (DEFERRED — NOT in this plan)

| Priority | Issue | Rationale for Deferral |
|----------|-------|----------------------|
| MEDIUM | Token em localStorage (XSS risk) | Requer migração para HTTP-only cookies + coordenação backend |
| MEDIUM | `as` type assertion em reset-password-confirm-form.tsx | Mesmo padrão de T7, mas em componente; corrigir quando refatorar error handling |
| MEDIUM | Substring matching em PT para erros | Requer contrato de API com backend (error codes) |
| MEDIUM | Module-level side effect em store.ts | Requer reestruturação do store |
| MEDIUM | Direct SDK token mutation | Requer verificar SDK internals |
| MEDIUM | confirmPassword type misleading | Cosmético, sem impacto funcional |
| MEDIUM | Unsafe nested property access em service.ts | Corrigido parcialmente por T7 |
| MEDIUM | Rate limiting no password reset | Requer backend + infra |
| MEDIUM | Vitest environment "node" vs "jsdom" | Afeta 333+ testes |
| LOW | Race condition em validateTokenOnInit | Teórico, sem bugs reportados |
| LOW | Empty string token em validateSearch | Funcional, redirect funciona |
| LOW | returnTo open redirect | TanStack Router mitiga; defense-in-depth |
| LOW | console.log em test files | Higiene de testes |
| LOW | displayName computed no dashboard | Premature optimization |
| LOW | No token refresh mechanism | Feature nova |
| HIGH | CI workflow inexistente | Infra, não auth fix |
| HIGH | GitHub Actions sem SHA pinning | Infra, não auth fix |

### Final Checklist
- [x] All "Must Have" present
- [x] All "Must NOT Have" absent
- [x] All tests pass
- [x] No secrets in git history