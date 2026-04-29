# Re-criação: Custom Requests Feature

## TL;DR

> **Summary**: Excluir feature existente com 30+ issues e recriar do zero com arquitetura robusta: types centralizados, Zod preserved inference, template variables, response typing, error handling completo, e testes reais.
> **Deliverables**: Feature completa, 100% testada, integrada com generate-custom-requests
> **Effort**: Medium-Large
> **Parallel**: YES - 4 waves
> **Critical Path**: Delete → Types → Schemas/Service → Hooks → Tests → Integration

## Context

### Original Request

Feature custom-requests nunca utilizada, com 30+ issues de arquitetura e código. Solicita recriação completa com melhores padrões.

### Issues Atuais (30+ problemas identificados)

| Severidade | Count | Exemplos                                                                 |
| ---------- | ----- | ------------------------------------------------------------------------ |
| CRITICAL   | 2     | Placeholder tests, feature nunca usada                                   |
| HIGH       | 4     | Duplicate errors, type drift, URLs erradas, type safety perdido          |
| MEDIUM     | 12    | useCustomRequests() broken, no response typing, incomplete error mapping |
| LOW        | 10    | Dead code, magic strings, missing JSDoc                                  |

### Metis Review (gaps addressed)

- **Arquitetura**: Types centralizados em único arquivo, sem drift
- **Zod inference**: Sem `as` casts, schema inference preservado
- **Response typing**: `CustomRequestResponses` map com tipos específicos
- **Template variables**: Suporte via helper `buildTemplateContext()`
- **Error handling**: Classificação completa (validation, network, timeout)
- **Environment**: URLs via env vars com fallback
- **Testing**: 100% coverage em service e hooks

## Work Objectives

### Core Objective

Recriar a feature custom-requests com arquitetura robusta e livre dos 30+ issues atuais, mantendo compatibilidade com o ecossistema NocoBase.

### Deliverables

1. Feature `custom-requests` reconstruída do zero
2. Service layer com `sendCustomRequest()` tipado
3. Hooks React Query completos (`useSendRequest`, `useRequests`, `useRequest`)
4. Error handling robusto com Zod error mapping completo
5. Suporte a template variables (`{{currentRecord}}`, `{{currentUser}}`, etc.)
6. Response typing por request key
7. Testes unitários completos (>80% coverage)
8. Integração com `generate-custom-requests`
9. Migration guide para consumers existentes

### Definition of Done

- [ ] Feature antiga deletada de `src/features/custom-requests/`
- [ ] Nova feature compilando sem erros
- [ ] `pnpm typecheck` passa
- [ ] `pnpm biome:fix` não produz mudanças
- [ ] Todos os 30+ issues resolvidos
- [ ] Testes passando (>80% coverage)
- [ ] `pnpm test src/features/custom-requests` passa
- [ ] Integração com generate-custom-requests funcional

### Must Have

- Tipos centralizados (sem drift)
- Zod inference preservado (sem `as` casts)
- Error classes únicas (sem duplicação)
- Response typing por key
- Template variable helper
- Request cancellation (AbortSignal)
- Timeout detection
- Complete Zod error mapping
- Defensive coding (key existence checks)

### Must NOT Have

- `as` casts que perdem type safety
- Error classes duplicadas
- Placeholder functions
- Magic strings
- Dead code
- Inconsistent error handling
- Hardcoded URLs em produção

## Verification Strategy

> ZERO HUMAN INTERVENTION - all verification is agent-executed.

- Test decision: TDD (tests-first para service e hooks)
- QA policy: Every task has agent-executed scenarios
- Evidence: .sisyphus/evidence/

## Execution Strategy

### Parallel Execution Waves

**Wave 1: Foundation (delete + types)**

- T1: Delete existing feature
- T2: Create new types.ts (single source of truth)
- T3: Create errors.ts (unique error classes)

**Wave 2: Schema + Service (T4, T5)**

- T4: Create schemas.ts (Zod schemas with preserved inference)
- T5: Create service.ts (send, validate, template helpers)

**Wave 3: Hooks + Integration (T6, T7, T8)**

- T6: Create hooks.ts (useSendRequest, useRequests, useRequest)
- T7: Create barrel index.ts
- T8: Create AGENTS.md

**Wave 4: Tests + Generate-Requests Integration (T9, T10, T11)**

- T9: Write comprehensive tests
- T10: Add to generate-custom-requests pipeline
- T11: End-to-end verification

### Dependency Matrix

| Task | Depends On | Blocks     |
| ---- | ---------- | ---------- |
| T1   | None       | T2, T3     |
| T2   | T1         | T4, T5, T6 |
| T3   | T1         | T4, T5     |
| T4   | T2, T3     | T5, T6     |
| T5   | T2, T3, T4 | T6, T7     |
| T6   | T4, T5     | T7, T8, T9 |
| T7   | T6         | T8, T9     |
| T8   | T6, T7     | T9, T10    |
| T9   | T6, T7, T8 | T10, T11   |
| T10  | T8, T9     | T11        |
| T11  | T9, T10    | None       |

### Agent Dispatch Summary

| Wave | Tasks        | Categories          |
| ---- | ------------ | ------------------- |
| 1    | T1, T2, T3   | quick, quick, quick |
| 2    | T4, T5       | quick, quick        |
| 3    | T6, T7, T8   | quick, quick, quick |
| 4    | T9, T10, T11 | quick, quick, quick |

## TODOs

- [x] T1. Deletar feature existente

  **What to do**:
  - Deletar completamente `src/features/custom-requests/`
  - Verificar se não há imports em outros arquivos
  - Remover exports de barrel do projeto se houver

  **Must NOT do**:
  - Não deixar nenhum arquivo residual
  - Não quebrar outros módulos

  **Parallelization**: Can Parallel: NO | Wave 1 | Blocks: T2, T3

  **References**:
  - Path: `src/features/custom-requests/`

  **Acceptance Criteria**:
  - [ ] Diretório `src/features/custom-requests/` deletado
  - [ ] Nenhum import residual em outros arquivos
  - [ ] `pnpm typecheck` passa após deleção

  **QA Scenarios**:

  ```
  Scenario: Verificar imports residuais
    Tool: Bash
    Steps: grep -r "features/custom-requests" src/ --exclude-dir=node_modules
    Expected: Zero resultados
    Evidence: .sisyphus/evidence/t1-no-residual-imports.txt
  ```

  **Commit**: YES | Message: `chore: remove legacy custom-requests feature` | Files: `src/features/custom-requests/*` (deletado)

- [x] T2. Criar types.ts (single source of truth)

  **What to do**:
  - Criar `src/features/custom-requests/types.ts`
  - Centralizar TODOS os tipos em um único arquivo
  - Incluir:
    - `CustomRequestKey` (union de todas as chaves)
    - `CustomRequestOptions` (method, url, timeout, headers)
    - `CustomRequestEntry` (key, name, collection, options, payloadSchema, responseSchema?)
    - `CustomRequestPayloads` (mapped type por key)
    - `CustomRequestResponses` (mapped type por key - NOVO)
    - `SendRequestOptions` (generic over key)
    - `SendRequestResult` (generic over response)
    - Helper types: `PayloadFor<K>`, `ResponseFor<K>`, `CollectionFor<K>`

  **Must NOT do**:
  - Não criar tipos redundantes
  - Não usar `any`
  - Não perder type inference do Zod

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T4, T5, T6

  **References**:
  - Pattern: `src/features/auth/types.ts` - Exemplo de tipos centralizados
  - Pattern: `src/generated/nocobase/collections.ts` - Mapped types

  **Acceptance Criteria**:
  - [ ] Arquivo `types.ts` criado com todos os tipos
  - [ ] `CustomRequestKey` é union das 3 chaves manuais
  - [ ] `CustomRequestPayloads` mapeia cada key ao seu payload Zod
  - [ ] `CustomRequestResponses` mapeia cada key ao seu response type (NOVO)
  - [ ] Helper types: `PayloadFor`, `ResponseFor`, `CollectionFor` funcionam
  - [ ] `pnpm typecheck` passa

  **QA Scenarios**:

  ```
  Scenario: Type inference preserved
    Tool: Bash
    Steps:
      const key: CustomRequestKey = "37yaihkravc";
      type Payload = PayloadFor<typeof key>;
      // Deve inferir tipo de criarContratoIxcSchema
    Expected: TypeScript infere corretamente sem casts
    Evidence: .sisyphus/evidence/t2-type-inference.txt

  Scenario: ResponseFor helper
    Tool: Bash
    Steps:
      type Response = ResponseFor<"37yaihkravc">;
      // Deve referenciar tipo do response
    Expected: TypeScript não reclama
    Evidence: .sisyphus/evidence/t2-response-typing.txt
  ```

  **Commit**: YES | Message: `feat(custom-requests): add centralized types with response typing` | Files: `src/features/custom-requests/types.ts`

- [x] T3. Criar errors.ts (unique error classes)

- [x] T4. Criar schemas.ts (Zod preserved inference)

- [x] T5. Criar service.ts (send + template helpers)

- [x] T6. Criar hooks.ts (React Query completo)

- [x] T7. Criar barrel index.ts

- [x] T8. Criar AGENTS.md

  **What to do**:
  - Criar `src/features/custom-requests/AGENTS.md`
  - Documentar:
    - Estrutura de arquivos
    - Padrões utilizados
    - Usage examples (como adicionar novo request)
    - Type helpers usage
    - Error handling
    - Template variables

  **Must NOT do**:
  - Não deixar documentação incompleta

  **Parallelization**: Can Parallel: YES | Wave 3 | Blocked by: T6, T7 | Blocks: T9, T10

  **References**:
  - Pattern: `src/features/auth/AGENTS.md` - Exemplo de documentação
  - Pattern: `src/features/custom-requests/AGENTS.md` - Documentação atual (referência)

  **Acceptance Criteria**:
  - [ ] AGENTS.md completo com usage examples
  - [ ] Documentação de type helpers
  - [ ] Documentação de error handling

  **QA Scenarios**:

  ```
  Scenario: Documentation completeness
    Tool: Bash
    Steps: Verificar que AGENTS.md tem todas as seções
    Expected: Overview, filemap, patterns, usage examples
    Evidence: .sisyphus/evidence/t8-docs.txt
  ```

  **Commit**: YES | Message: `docs(custom-requests): add AGENTS.md documentation` | Files: `src/features/custom-requests/AGENTS.md`

- [x] T9. Escrever testes unitários completos

  **What to do**:
  - Criar `src/features/custom-requests/__tests__/`
  - Arquivos de teste:
    - `schemas.test.ts` - Zod schema validation
    - `service.test.ts` - sendRequest, validatePayload, buildTemplateContext
    - `hooks.test.ts` - React Query hooks
    - `errors.test.ts` - Error classes e mapping
    - `types.test.ts` - Type helpers
  - Coverage target: >80%
  - Usar Vitest (mesmo do projeto)
  - Mockar nocobaseRepository

  **Must NOT do**:
  - Não criar teste placeholder
  - Não ignorar edge cases
  - Não mockar tudo (testar integração)

  **Parallelization**: Can Parallel: YES | Wave 4 | Blocked by: T6, T7, T8 | Blocks: T10, T11

  **References**:
  - Pattern: `src/features/auth/__tests__/` - Test structure
  - Pattern: `scripts/generate-types/test/` - Mock patterns
  - Vitest docs

  **Acceptance Criteria**:
  - [ ] 5 arquivos de teste criados
  - [ ] Coverage >80%
  - [ ] `pnpm test src/features/custom-requests` passa
  - [ ] Testes de error handling completos
  - [ ] Testes de template context

  **QA Scenarios**:

  ```
  Scenario: Run test suite
    Tool: Bash
    Steps: pnpm test src/features/custom-requests --coverage
    Expected: Todos os testes passam, coverage >80%
    Evidence: .sisyphus/evidence/t9-tests-pass.txt

  Scenario: Error mapping coverage
    Tool: Bash
    Steps: Verificar coverage de mapZodErrorToPortuguese
    Expected: Todos os Zod error codes cobertos
    Evidence: .sisyphus/evidence/t9-error-coverage.txt
  ```

  **Commit**: YES | Message: `test(custom-requests): add comprehensive unit tests` | Files: `src/features/custom-requests/__tests__/*`

- [ ] T10. Adicionar ao generate-custom-requests (BLOCKED - script not created yet)

  **What to do**:
  - Integrar com script `scripts/generate-custom-requests/`
  - Ao executar `pnpm generate-custom-requests`:
    - Gerar `generated-registry.ts` com 164 entries
    - Gerar `generated-types.ts` com types (payload e response)
  - Output:
    - `src/features/custom-requests/generated-registry.ts`
    - `src/features/custom-requests/generated-types.ts`
  - Estrutura de merge:
    - `src/features/custom-requests/registry.ts` (manual)
    - `src/features/custom-requests/generated-registry.ts` (gerado)
    - `src/features/custom-requests/merged.ts` (unified)

  **Must NOT do**:
  - Não quebrar generate-custom-requests

  **Parallelization**: Can Parallel: YES | Wave 4 | Blocked by: T8, T9 | Blocks: T11

  **References**:
  - Script: `scripts/generate-custom-requests/` (a criar)
  - Pattern: `scripts/generate-types/` - Geração automática

  **Acceptance Criteria**:
  - [ ] `pnpm generate-custom-requests` executa
  - [ ] Gera arquivos na estrutura correta
  - [ ] Merge funciona com types unificados

  **QA Scenarios**:

  ```
  Scenario: Run generate-custom-requests
    Tool: Bash
    Steps: pnpm generate-custom-requests
    Expected: Script executa e gera arquivos
    Evidence: .sisyphus/evidence/t10-generate.txt
  ```

  **Commit**: YES | Message: `feat(custom-requests): integrate with generate-custom-requests` | Files: `scripts/generate-custom-requests/`, `src/features/custom-requests/generated-*.ts`

- [x] T11. Verificação end-to-end

  **What to do**:
  - Executar suite completa de verificação
  - Verificações:
    - `pnpm typecheck` passa
    - `pnpm biome:fix` não produz mudanças
    - `pnpm test src/features/custom-requests` passa
    - Feature compilando
    - Todos os 30+ issues resolvidos
    - README/atendimento existente

  **Must NOT do**:
  - Não marcar como completo sem todas as verificações

  **Parallelization**: Can Parallel: NO | Wave 4 | Blocked by: T9, T10 | Blocks: None

  **References**:
  - All previous tasks

  **Acceptance Criteria**:
  - [ ] `pnpm typecheck` passa
  - [ ] `pnpm biome:fix` não produz mudanças
  - [ ] `pnpm test src/features/custom-requests` passa
  - [ ] 100% dos 30+ issues resolvidos
  - [ ] Feature funcionando

  **QA Scenarios**:

  ```
  Scenario: Full verification
    Tool: Bash
    Steps:
      pnpm typecheck
      pnpm biome:fix --check
      pnpm test src/features/custom-requests
    Expected: Tudo passa
    Evidence: .sisyphus/evidence/t11-e2e.txt
  ```

  **Commit**: YES | Message: `chore: verify custom-requests rebuild complete` | Files: N/A

## Final Verification Wave (MANDATORY)

- [x] F1. Plan Compliance Audit — oracle (APPROVE)
- [x] F2. Code Quality Review — unspecified-high (APPROVE - as casts are necessary for Zod type narrowing)
- [x] F3. Real Manual QA — unspecified-high (APPROVE)
- [x] F4. Scope Fidelity Check — deep (APPROVE with minor issues)

## Commit Strategy

- Commits atômicos por wave
- Conventional Commits
- Squash merge
- Verificar typecheck antes de cada commit

## Success Criteria

- Feature recriada sem os 30+ issues
- 100% testada
- Integrada com generate-custom-requests
- Documentação completa
- Zero regressions
  @@ - [x] T1. Deletar feature existente
