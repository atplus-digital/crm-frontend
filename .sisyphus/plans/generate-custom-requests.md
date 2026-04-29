# Gerador de Custom Requests - Script de Sincronização

## TL;DR

> **Summary**: Criar script `generate-custom-requests` para buscar 164 custom requests da API NocoBase e gerar registry TypeScript automaticamente, com merge estratégico entre entradas geradas e manuais.
> **Deliverables**: Script completo, arquivo gerado, registry merged, testes, comando npm
> **Effort**: Medium
> **Parallel**: YES - 3 waves
> **Critical Path**: Script structure → API client → Transformer → Writer → Merge layer → Tests

## Context

### Original Request

Usuário precisa de um script similar ao `generate-types` que busque os 164 custom requests existentes na API do NocoBase e gere automaticamente as entradas do registry, em vez de manter tudo hardcoded.

### Interview Summary

- Script deve seguir padrão do `scripts/generate-types/`
- Output em arquivo separado (`generated-registry.ts`)
- Manter registry manual existente para 3 entradas com schemas Zod específicos
- Merge em tempo de execução com override manual
- Comando: `pnpm generate-custom-requests`

### Metis Review (gaps addressed)

- **Architecture**: Three-file structure (manual, generated, merged) for type safety
- **Type-level merge**: `CustomRequestKey` must union both registries
- **Edge cases**: 11 specific edge cases identified with handling strategies
- **QA criteria**: 12 specific acceptance criteria from Metis
- **Deterministic output**: Sort by key, no timestamps, idempotent
- **Biome integration**: Auto-format after generation

## Work Objectives

### Core Objective

Criar infraestrutura completa para geração automática de registry de custom requests a partir da API NocoBase, mantendo compatibilidade total com o sistema existente.

### Deliverables

1. `scripts/generate-custom-requests/` - Script completo com estrutura similar ao generate-types
2. `src/features/custom-requests/generated-registry.ts` - Arquivo gerado com 164 entradas
3. `src/features/custom-requests/merged-registry.ts` - Camada de merge com unificação de tipos
4. `src/features/custom-requests/index.ts` - Atualizado para exportar do merged registry
5. Testes unitários (mínimo 4 arquivos)
6. Comando npm `pnpm generate-custom-requests`

### Definition of Done (verifiable conditions)

- [ ] `pnpm generate-custom-requests` executa com sucesso e gera `generated-registry.ts`
- [ ] `generated-registry.ts` contém exatamente 164 entradas (verificar com `grep -c "key:"`)
- [ ] `pnpm typecheck` passa sem erros após geração
- [ ] `pnpm biome:fix` não produz mudanças no arquivo gerado
- [ ] Entradas manuais (`"37yaihkravc"`, `"0j7f9fuzuo7"`, `"h32vk2yid08"`) usam schemas Zod manuais, não `z.any()`
- [ ] Entradas geradas usam `z.any()` para payloadSchema
- [ ] Registry merged contém todas as chaves únicas (164 ou 167 se sem sobreposição)
- [ ] Script falha com código não-zero quando API está inacessível
- [ ] Script falha quando API retorna lista vazia
- [ ] Chaves duplicadas: entrada manual sobrescreve gerada
- [ ] Execução duas vezes produz output idêntico (hash do arquivo igual)
- [ ] Testes existem em `scripts/generate-custom-requests/test/` com mínimo 4 arquivos
- [ ] `pnpm test scripts/generate-custom-requests` passa todos os testes

### Must Have

- Estrutura similar ao `scripts/generate-types/` (config, client, transformer, writer)
- Separação clara entre registry manual e gerado
- Merge estratégico com override manual
- Formatação Biome automática
- Output determinístico (ordenado por key)
- Tratamento de edge cases com logging
- Testes unitários abrangentes

### Must NOT Have

- Parseamento de templates `{{}}` para gerar schemas Zod
- Modificação do `registry.ts` existente
- Código executável dinâmico (eval, Function)
- Timestamps no arquivo gerado
- Append incremental (sempre sobrescrever arquivo inteiro)

## Verification Strategy

> ZERO HUMAN INTERVENTION - all verification is agent-executed.

- Test decision: tests-after (seguir padrão do generate-types)
- QA policy: Every task has agent-executed scenarios
- Evidence: .sisyphus/evidence/

### Test Strategy

- Unit tests for API client (mock fetch)
- Unit tests for transformer (API response → registry entry)
- Unit tests for merge logic (manual overrides generated)
- Unit tests for edge cases (missing fields, duplicates, empty response)
- Integration test: run script, verify output structure
- Typecheck verification after generation
- Biome format verification
- Idempotency test (run twice, compare hashes)

## Execution Strategy

### Parallel Execution Waves

**Wave 1: Foundation (3 tasks)**

- T1: Create script structure and config
- T2: Implement API client for custom requests
- T3: Implement entry transformer

**Wave 2: Core Logic (3 tasks)**

- T4: Implement file writer with Biome integration
- T5: Create merged registry layer
- T6: Update barrel exports

**Wave 3: Testing & Integration (3 tasks)**

- T7: Write unit tests (4 test files)
- T8: Add npm script command
- T9: End-to-end verification

### Dependency Matrix

| Task | Depends On | Blocks     |
| ---- | ---------- | ---------- |
| T1   | None       | T2, T3, T4 |
| T2   | T1         | T3, T4     |
| T3   | T1, T2     | T4         |
| T4   | T1, T2, T3 | T5         |
| T5   | T4         | T6         |
| T6   | T5         | T7, T8     |
| T7   | T6         | T9         |
| T8   | T6         | T9         |
| T9   | T7, T8     | None       |

### Agent Dispatch Summary

| Wave | Tasks      | Categories          |
| ---- | ---------- | ------------------- |
| 1    | T1, T2, T3 | quick, quick, quick |
| 2    | T4, T5, T6 | quick, quick, quick |
| 3    | T7, T8, T9 | quick, quick, quick |

## TODOs

- [x] T1. Criar estrutura do script e configuração

  **What to do**:
  - Criar diretório `scripts/generate-custom-requests/`
  - Criar `index.ts` (entry point)
  - Criar `config.ts` (configuração com CRM_NOCOBASE_URL, CRM_NOCOBASE_TOKEN)
  - Criar `src/@types/` com tipos necessários
  - Reutilizar padrão do `scripts/generate-types/`

  **Must NOT do**:
  - Não copiar código do generate-types, apenas seguir padrão estrutural
  - Não adicionar lógica de negócio aqui

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Estrutura straightforward, seguir padrão existente
  - Skills: [`find-docs`] - Para referência do generate-types
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T2, T3, T4

  **References**:
  - Pattern: `scripts/generate-types/index.ts` - Entry point pattern
  - Pattern: `scripts/generate-types/config.ts` - Config parsing pattern
  - Pattern: `scripts/generate-types/datasources.config.ts` - Datasource config
  - Type: `scripts/generate-types/src/@types/script.ts` - Type definitions

  **Acceptance Criteria**:
  - [ ] Diretório `scripts/generate-custom-requests/` criado com estrutura completa
  - [ ] `index.ts` exporta função principal e pode ser executado com `tsx`
  - [ ] `config.ts` lê variáveis de ambiente e valida presença
  - [ ] Tipos definidos em `src/@types/`

  **QA Scenarios**:

  ```
  Scenario: Executar script sem variáveis de ambiente
    Tool: Bash
    Steps: Executar `pnpm tsx scripts/generate-custom-requests/index.ts` sem CRM_NOCOBASE_URL
    Expected: Script falha com erro claro sobre variáveis ausentes
    Evidence: .sisyphus/evidence/t1-missing-env-error.txt

  Scenario: Estrutura segue padrão generate-types
    Tool: Bash
    Steps: Comparar estrutura de diretórios com generate-types
    Expected: Mesmos subdiretórios (src/@types/, src/utils/, etc.)
    Evidence: .sisyphus/evidence/t1-structure-verified.txt
  ```

  **Commit**: YES | Message: `feat(scripts): add generate-custom-requests script structure` | Files: `scripts/generate-custom-requests/*`

- [x] T2. Implementar cliente API para custom requests

  **What to do**:
  - Criar `src/api/client.ts`
  - Implementar fetch para `GET /customRequests:list`
  - Suportar paginação (page, pageSize)
  - Reutilizar `NocoBaseDataSourceClient` ou criar wrapper fino
  - Tratamento de erros HTTP com retry

  **Must NOT do**:
  - Não reinventar cliente HTTP (reutilizar existente)
  - Não adicionar lógica de transformação aqui

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Wrapper simples sobre cliente existente
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocked by: T1 | Blocks: T3, T4

  **References**:
  - Pattern: `scripts/generate-types/src/utils/client.ts` - NocoBaseDataSourceClient
  - Pattern: `docs/nocobase-custom-requests.md` - API endpoints e estrutura
  - API: `GET /customRequests:list` - Listar todos os custom requests

  **Acceptance Criteria**:
  - [ ] Cliente faz fetch em `/customRequests:list` com paginação
  - [ ] Retorna array de custom requests com estrutura completa
  - [ ] Tratamento de erros HTTP (401, 404, 500)
  - [ ] Timeout configurável (padrão 15s)

  **QA Scenarios**:

  ```
  Scenario: Fetch bem-sucedido com paginação
    Tool: Bash (mock)
    Steps: Mock fetch retornando 2 páginas com 100 requests cada
    Expected: Cliente retorna array com 200 items
    Evidence: .sisyphus/evidence/t2-fetch-success.txt

  Scenario: API retorna erro 401
    Tool: Bash (mock)
    Steps: Mock fetch retornando 401
    Expected: Cliente lança erro com mensagem clara
    Evidence: .sisyphus/evidence/t2-auth-error.txt
  ```

  **Commit**: YES | Message: `feat(scripts): add API client for custom requests` | Files: `scripts/generate-custom-requests/src/api/`

- [x] T3. Implementar transformador de entradas

  **What to do**:
  - Criar `src/transformer/entry-transformer.ts`
  - Transformar resposta da API em estrutura de registry entry
  - Mapear `options.collectionName` → `collection`
  - Gerar `payloadSchema: z.any()` para entradas geradas
  - Extrair `key`, `name`, `options` da resposta
  - Log warnings para entradas com campos ausentes

  **Must NOT do**:
  - Não parsear templates `{{}}` do options.data
  - Não gerar schemas Zod complexos
  - Não validar URLs (podem ser rotas internas)

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Transformação straightforward
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocked by: T1, T2 | Blocks: T4

  **References**:
  - Pattern: `src/features/custom-requests/registry.ts` - CustomRequestEntry interface
  - Type: `src/features/custom-requests/registry.ts:CustomRequestEntry` - Interface alvo
  - Pattern: `scripts/generate-types/src/pipeline/stages/generate-content/field-mapper.ts` - Transform pattern

  **Acceptance Criteria**:
  - [ ] Transforma resposta API em CustomRequestEntry
  - [ ] Usa `z.any()` para payloadSchema
  - [ ] Mapeia collectionName corretamente
  - [ ] Log warning para entradas sem options
  - [ ] Log warning para entradas sem URL

  **QA Scenarios**:

  ```
  Scenario: Transformação de entrada válida
    Tool: Bash (unit test)
    Steps: Passar API response com key, options, collectionName
    Expected: Retorna CustomRequestEntry com z.any()
    Evidence: .sisyphus/evidence/t3-transform-valid.txt

  Scenario: Entrada sem options
    Tool: Bash (unit test)
    Steps: Passar API response sem campo options
    Expected: Retorna null e log warning
    Evidence: .sisyphus/evidence/t3-missing-options.txt
  ```

  **Commit**: YES | Message: `feat(scripts): add entry transformer for custom requests` | Files: `scripts/generate-custom-requests/src/transformer/`

- [x] T4. Implementar writer com integração Biome

  **What to do**:
  - Criar `src/writer/registry-writer.ts`
  - Gerar código TypeScript para `generated-registry.ts`
  - Ordenar entradas alfabeticamente por key
  - Incluir header com comentário de geração
  - Executar `pnpm biome:fix` após escrita
  - Sobrescrever arquivo inteiro (não append)

  **Must NOT do**:
  - Não adicionar timestamps no header
  - Não fazer append incremental
  - Não validar formato (Biome faz isso)

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Geração de código straightforward
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocked by: T1, T2, T3 | Blocks: T5

  **References**:
  - Pattern: `scripts/generate-types/src/pipeline/post-pipeline/writer.ts` - File writer
  - Pattern: `scripts/generate-types/src/pipeline/post-pipeline/linter-runner.ts` - Biome integration
  - Output: `src/features/custom-requests/generated-registry.ts` - Arquivo alvo

  **Acceptance Criteria**:
  - [ ] Gera arquivo TypeScript válido
  - [ ] Entradas ordenadas alfabeticamente
  - [ ] Header com comentário de geração (sem timestamp)
  - [ ] Executa `pnpm biome:fix` após escrita
  - [ ] Sobrescreve arquivo existente (idempotente)

  **QA Scenarios**:

  ```
  Scenario: Geração de arquivo com 164 entradas
    Tool: Bash
    Steps: Executar writer com mock data de 164 entradas
    Expected: Arquivo gerado com 164 entries, ordenado por key
    Evidence: .sisyphus/evidence/t4-write-164.txt

  Scenario: Idempotência
    Tool: Bash
    Steps: Executar writer duas vezes, comparar hashes
    Expected: Hashes idênticos
    Evidence: .sisyphus/evidence/t4-idempotent.txt
  ```

  **Commit**: YES | Message: `feat(scripts): add registry writer with Biome integration` | Files: `scripts/generate-custom-requests/src/writer/`

- [x] T5. Criar camada de merge (merged-registry.ts)

  **What to do**:
  - Criar `src/features/custom-requests/merged-registry.ts`
  - Importar generated-registry e registry manual
  - Merge: `{ ...generated, ...manual }` (manual override)
  - Exportar `customRequestsRegistry` unificado
  - Exportar `CustomRequestKey` como union type
  - Garantir type safety completo

  **Must NOT do**:
  - Não modificar registry.ts existente
  - Não alterar schemas.ts
  - Não mudar lógica dos hooks/services existentes

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Lógica de merge simples
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocked by: T4 | Blocks: T6

  **References**:
  - Pattern: `src/features/custom-requests/registry.ts` - Manual registry
  - Pattern: `src/features/custom-requests/generated-registry.ts` - Generated registry (a ser criado)
  - Type: `src/features/custom-requests/types.ts` - Type definitions

  **Acceptance Criteria**:
  - [ ] Importa ambos os registries
  - [ ] Manual override funciona (spread order correto)
  - [ ] CustomRequestKey inclui todas as chaves
  - [ ] Type check passa sem erros
  - [ ] Entradas manuais mantêm schemas Zod específicos

  **QA Scenarios**:

  ```
  Scenario: Merge com sobreposição de chaves
    Tool: Bash (unit test)
    Steps: Criar mock onde generated e manual têm mesma key
    Expected: Versão manual prevalece no merged registry
    Evidence: .sisyphus/evidence/t5-merge-override.txt

  Scenario: Type safety do merged registry
    Tool: Bash
    Steps: Executar `pnpm typecheck`
    Expected: Zero erros de tipo
    Evidence: .sisyphus/evidence/t5-typecheck.txt
  ```

  **Commit**: YES | Message: `feat(custom-requests): add merged registry layer` | Files: `src/features/custom-requests/merged-registry.ts`

- [x] T6. Atualizar barrel exports (index.ts)

  **What to do**:
  - Modificar `src/features/custom-requests/index.ts`
  - Exportar `customRequestsRegistry` de `merged-registry.ts` em vez de `registry.ts`
  - Exportar `CustomRequestKey` do merged registry
  - Manter exports de schemas, hooks, utils inalterados
  - Verificar compatibilidade com consumidores existentes

  **Must NOT do**:
  - Não remover exports existentes
  - Não alterar assinaturas de funções
  - Não mudar estrutura de hooks

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Mudança simples de import
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocked by: T5 | Blocks: T7, T8

  **References**:
  - File: `src/features/custom-requests/index.ts` - Barrel export atual
  - Pattern: `src/features/custom-requests/merged-registry.ts` - Novo merge layer

  **Acceptance Criteria**:
  - [ ] Exporta customRequestsRegistry do merged registry
  - [ ] Exporta CustomRequestKey do merged registry
  - [ ] Todos os exports existentes mantidos
  - [ ] Type check passa
  - [ ] Consumores existentes não quebram

  **QA Scenarios**:

  ```
  Scenario: Imports funcionam após mudança
    Tool: Bash
    Steps: Executar `pnpm typecheck` no projeto inteiro
    Expected: Zero erros
    Evidence: .sisyphus/evidence/t6-imports-ok.txt

  Scenario: Barrel export completo
    Tool: Bash
    Steps: Verificar todos os exports do index.ts
    Expected: Mesmos exports de antes, agora vindos do merged registry
    Evidence: .sisyphus/evidence/t6-barrel-complete.txt
  ```

  **Commit**: YES | Message: `refactor(custom-requests): update barrel exports to use merged registry` | Files: `src/features/custom-requests/index.ts`

- [x] T7. Escrever testes unitários

  **What to do**:
  - Criar `scripts/generate-custom-requests/test/`
  - Escrever mínimo 4 arquivos de teste:
    1. `api-client.test.ts` - Testes do cliente API
    2. `entry-transformer.test.ts` - Testes do transformador
    3. `merge-logic.test.ts` - Testes da lógica de merge
    4. `edge-cases.test.ts` - Testes de edge cases
  - Usar Vitest (mesmo framework do generate-types)
  - Mocks para fetch API

  **Must NOT do**:
  - Não testar comportamento do NocoBase (mockar)
  - Não fazer chamadas reais na API durante testes
  - Não ignorar edge cases

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Testes unitários straightforward
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 3 | Blocked by: T6 | Blocks: T9

  **References**:
  - Pattern: `scripts/generate-types/test/` - Estrutura de testes
  - Pattern: `scripts/generate-types/test/setup.ts` - Mock factories
  - Framework: Vitest com `vi.mock()`

  **Acceptance Criteria**:
  - [ ] 4 arquivos de teste criados
  - [ ] Testes cobrem cliente, transformador, merge, edge cases
  - [ ] `pnpm test scripts/generate-custom-requests` passa
  - [ ] Mocks para fetch API
  - [ ] Testes de idempotência incluídos

  **QA Scenarios**:

  ```
  Scenario: Executar suite de testes
    Tool: Bash
    Steps: Executar `pnpm test scripts/generate-custom-requests`
    Expected: Todos os testes passam
    Evidence: .sisyphus/evidence/t7-tests-pass.txt

  Scenario: Cobertura de edge cases
    Tool: Bash
    Steps: Verificar testes para missing options, empty response, duplicates
    Expected: Todos os edge cases cobertos
    Evidence: .sisyphus/evidence/t7-edge-cases.txt
  ```

  **Commit**: YES | Message: `test(scripts): add unit tests for custom requests generator` | Files: `scripts/generate-custom-requests/test/`

- [x] T8. Adicionar comando npm

  **What to do**:
  - Adicionar script em `package.json`: `"generate-custom-requests": "tsx scripts/generate-custom-requests/index.ts"`
  - Verificar se funciona com `pnpm generate-custom-requests`
  - Atualizar documentação se necessário

  **Must NOT do**:
  - Não modificar outros scripts existentes
  - Não alterar estrutura do package.json além do novo script

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Mudança simples no package.json
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: YES | Wave 3 | Blocked by: T6 | Blocks: T9

  **References**:
  - File: `package.json` - Scripts section
  - Pattern: `"generate-types": "tsx scripts/generate-types/index.ts"` - Referência

  **Acceptance Criteria**:
  - [ ] Comando `pnpm generate-custom-requests` funciona
  - [ ] Executa o script corretamente
  - [ ] Não quebra comandos existentes

  **QA Scenarios**:

  ```
  Scenario: Executar comando npm
    Tool: Bash
    Steps: Executar `pnpm generate-custom-requests`
    Expected: Script executa e gera arquivo
    Evidence: .sisyphus/evidence/t8-npm-cmd.txt
  ```

  **Commit**: YES | Message: `chore: add generate-custom-requests npm script` | Files: `package.json`

- [x] T9. Verificação end-to-end

  **What to do**:
  - Executar script completo com API real (ou mock realista)
  - Verificar `generated-registry.ts` gerado corretamente
  - Executar `pnpm typecheck`
  - Executar `pnpm biome:fix` e verificar sem mudanças
  - Verificar contagem de entradas (164)
  - Executar `pnpm test scripts/generate-custom-requests`
  - Verificar idempotência (executar duas vezes, comparar hashes)

  **Must NOT do**:
  - Não marcar como completo sem todas as verificações
  - Não ignorar erros de typecheck ou biome

  **Recommended Agent Profile**:
  - Category: `quick` - Reason: Verificação final
  - Skills: N/A
  - Omitted: N/A

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocked by: T7, T8 | Blocks: None

  **References**:
  - All previous tasks
  - `docs/nocobase-custom-requests.md` - Estrutura esperada

  **Acceptance Criteria**:
  - [ ] Script executa com sucesso
  - [ ] `generated-registry.ts` tem 164 entradas
  - [ ] `pnpm typecheck` passa
  - [ ] `pnpm biome:fix` não produz mudanças
  - [ ] Testes passam
  - [ ] Idempotente (hashes iguais)
  - [ ] Manual override funciona

  **QA Scenarios**:

  ```
  Scenario: Verificação completa end-to-end
    Tool: Bash
    Steps:
      1. Executar `pnpm generate-custom-requests`
      2. Verificar `grep -c "key:" src/features/custom-requests/generated-registry.ts` = 164
      3. Executar `pnpm typecheck`
      4. Executar `pnpm biome:fix` e verificar sem mudanças
      5. Executar `pnpm test scripts/generate-custom-requests`
      6. Executar script novamente e comparar hashes
    Expected: Todas as verificações passam
    Evidence: .sisyphus/evidence/t9-e2e-verification.txt

  Scenario: Manual override verification
    Tool: Bash
    Steps: Verificar que entradas manuais usam schemas Zod específicos, não z.any()
    Expected: "37yaihkravc", "0j7f9fuzuo7", "h32vk2yid08" têm schemas ZodObject
    Evidence: .sisyphus/evidence/t9-manual-override.txt
  ```

  **Commit**: YES | Message: `chore: verify custom requests generator end-to-end` | Files: N/A (verificação apenas)

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [x] F1. Plan Compliance Audit — oracle
- [x] F2. Code Quality Review — unspecified-high
- [x] F3. Real Manual QA — unspecified-high (+ playwright if UI)
- [x] F4. Scope Fidelity Check — deep

## Commit Strategy

- Commits atômicos por task (T1-T9)
- Mensagens no formato Conventional Commits
- Squash merge ao final
- Verificar typecheck e biome antes de cada commit

## Success Criteria

- Script gera 164 entradas automaticamente
- Merge estratégico funciona (manual override)
- Type safety mantido
- Testes passam
- Idempotente e determinístico
- Zero intervenção humana para verificação
