# Specs — scripts/generators Rewrite

> Gerado em: 2026-05-08 | Status: draft

## 1. Overview

Reescrever o framework `scripts/generators/` com cinco objetivos:

1. **Simplificar** — reduzir as camadas de abstração redundantes do CLI framework
2. **Deduplicar** — unificar padrões duplicados entre os dois pipelines (`generate-types`, `generate-custom-requests`)
3. **Migrar fetch** — mudar do fallback multi-rota (`collections:list` + `dataSourcesCollections:list`) para endpoint único `/api/dataSources/[name]/collections:list`
4. **Remover logging custom** — usar `task.output` nativo do Listr2 em vez de wrapper `Logger`
5. **Remover adapters + inferências** — IXC wiki scraper, relations adapter, enum inference e enum corrections não são mais necessários (API já provê enums, fields e relations inline)

**NÃO muda**: formato de saída dos arquivos gerados (Zod schemas, labels, indexes, registros), formato de configuração, estrutura de arquivos.

## 2. Nova Arquitetura

```
scripts/generators/
├── src/
│   ├── index.ts                    # Entry point: executa os dois pipelines
│   ├── config/
│   │   ├── datasources.ts          # Definições de datasources (era datasources.config.ts)
│   │   ├── requests.ts             # Mapeamento de custom requests (era requests.config.ts)
│   │   └── env.ts                  # Zod-validated env (CRM_NOCOBASE_URL, TOKEN, TIMEOUT)
│   │
│   ├── lib/                        # Shared utilities (sem barrel exports)
│   │   ├── cli/
│   │   │   ├── runner.ts           # Listr2 runner + createGeneratorOptions (merged: runner + orchestrator + factory)
│   │   │   ├── tasks.ts            # Standard prep/final/exec task factories (merged: task-presets + orchestration-task)
│   │   │   └── types.ts            # GeneratorTask, GeneratorContext, types compartilhados
│   │   ├── http/
│   │   │   ├── http-client.ts      # fetchJsonWithAuth (inalterado)
│   │   │   └── nocobase-client.ts  # Simplificado: fetchCollections(endpoint único) + fetchPaginated + fetchJson. (6 métodos removidos)
│   │   ├── io/
│   │   │   ├── atomic-writer.ts    # Atomic file writer simplificado (diff + backup + swap) — sem AtomicWriteSession
│   │   │   └── locker.ts           # Workspace locker (merged: workspace-locker + adapter + adapter de ambos pipelines)
│   │   ├── pipeline/
│   │   │   ├── context.ts          # PipelineExecutionContext genérico (merged: runtime-context + pipeline-runner)
│   │   │   ├── lifecycle.ts        # runStandardPipeline() — lock → stages (.temp/) → validate → diff → backup+swap OU cleanup
│   │   │   ├── runner.ts           # runPipelineStages(), createOrchestrationRunner() (moved from lib/pipeline-runner)
│   │   │   ├── policy.ts           # Validation policy (inalterado)
│   │   │   └── assert.ts           # assertWithRestore (inalterado)
│   │   ├── reports.ts              # Report infrastructure (inalterado)
│   │   ├── strings.ts              # String utilities — jsonToSingleQuotedString, sanitizeForComment (inalterado)
│   │   ├── path-utils.ts           # Path utilities (inalterado)
│   │   └── validation/
│   │       ├── tsc-validator.ts    # TypeScript compilation validation (inalterado)
│   │       └── linter-runner.ts    # Biome lint+fix runner (inalterado)
│   │
│   └── pipelines/
│       ├── generate-types/
│       │   ├── index.ts            # Self-executing entry
│       │   ├── pipeline.ts         # Pipeline definition + datasource runner
│       │   ├── stages/
│       │   │   ├── fetch-schemas.ts     # (NEW) Single API call: /api/dataSources/[name]/collections:list
│       │   │   ├── build-types.ts       # Build types (inclui parsing de enums + relations da API)
│       │   │   ├── generate-content.ts  # Generate labels, schemas, indexes
│       │   │   └── write-files.ts       # Write to disk
│       │   ├── content/            # Content generation utilities (mesma lógica, paths reorganizados)
│       │   │   ├── enums.ts
│       │   │   ├── interfaces.ts
│       │   │   ├── sorting.ts
│       │   │   ├── assembly.ts
│       │   │   ├── collections-index.ts
│       │   │   ├── split-index.ts
│       │   │   ├── import-injector.ts
│       │   │   ├── field-mapper.ts
│       │   │   └── relations.ts
│       │   ├── utils/
│       │   │   └── naming.ts                # Naming utilities (inalterado)
│       │   ├── @types/                      # Type definitions (inalterado)
│       │   └── test/                        # Tests (inalterado)
│       │
│       └── generate-custom-requests/
│           ├── index.ts
│           ├── pipeline.ts
│           ├── stages/
│           │   ├── load-config.ts
│           │   ├── load-schemas.ts
│           │   ├── fetch-entries.ts
│           │   ├── transform-entries.ts     # (merged: transform-and-merge/*)
│           │   ├── write-output.ts
│           │   └── write-reports.ts
│           ├── utils/
│           │   ├── schema-loader.ts
│           │   └── schema-inference/
│           ├── api/
│           │   └── client.ts
│           ├── @types/
│           └── test/
```

## 3. NocoBase Client — Nova estratégia de fetch

### 3.1 Antes (multi-rota com fallback)

```
NocoBaseDataSourceClient.fetchCollections()
  ├─ dataSourceKey presente?
  │   ├─ dataSourcesCollections:list?filter={"dataSourceKey":"d_db_ixcsoft"}
  │   │   ├─ sucesso → retorna
  │   │   └─ falha → tenta collections:list (pode 404)
  │   │       ├─ sucesso → retorna
  │   │       └─ falha → []
  │   └─ (sem dataSourceKey) → collections:list
  │
  └─ fetchCollectionFields()
      ├─ dataSourceKey presente?
      │   └─ dataSourcesCollections/[key].[collection]/fields:list
      │       └─ 404 → fallback
      └─ (sem dataSourceKey) → collections:get?filterByTk=[name]&appends=fields
          └─ 404 → sample → inferFieldFromSample
```

### 3.2 Depois (endpoint único)

```
NocoBaseDataSourceClient.fetchCollections(name: string)
  └─ GET /api/dataSources/[name]/collections:list?paginate=false

  Resposta (já inclui collections + fields + enums + relations):
  {
    data: [{
      name: "t_pessoas",
      title: "Pessoas",
      fields: [{
        name: "id", type: "bigInt", interface: "id",
        uiSchema: { enum: [...] }  // enums inline
      }, {
        name: "f_cliente", type: "belongsTo", target: "t_empresas",
        sourceKey: "id", foreignKey: "f_cliente_id"  // relations inline
      }],
    }]
  }

NocoBaseDataSourceClient.fetchFields(collectionName: string)
  └─ GET /api/dataSources/[name]/collections/[collection]/fields:list?paginate=false

  (fields já vêm inline na resposta de collections:list,
   mas endpoint separado disponível para refresh)
```

### 3.3 Simplificações no cliente

**Remover** (`NocoBaseDataSourceClient`):

- `fetchCollectionsFromDataSourceScope()` — não mais necessário
- `fetchCollectionFieldsWithFallback()` — substituído por endpoint único
- `inferFieldFromSample()` — não mais necessário (API sempre retorna schema)
- `fetchCollectionSample()` — não mais necessário (enum inference removido)
- `fetchDistinctValues()` — não mais necessário (enum inference removido)
- `inferEnumsFromData()` — não mais necessário (enums vêm da API)

**Manter**:

- `fetchPaginated()` — útil para paginação em geral
- `fetchJson()` — base de todas as chamadas

## 4. Pipeline Framework (lib/pipeline/)

Framework compartilhado que ambos pipelines usam.

### 4.0 Output via Listr2 nativo

**ANTES**: wrapper `Logger` com `logger.info()`, `logger.warn()`, `logger.error()`, `setLevel()`, `getLevel()`, metadata formatting — 117 linhas de indireção sobre `ListrLogger`.

**DEPOIS**: `task.output = "mensagem"` direto no `ListrTaskWrapper` injetado no contexto.

```typescript
// Exemplo de uso em stage de pipeline:
export const fetchSchemas: PipelineStage<InitContext> = async (ctx) => {
  ctx.task.output = "Buscando schemas...";
  const data = await client.fetchCollections(ctx.dataSource.name);
  ctx.task.output = `${data.length} collections encontradas`;
  return { ...ctx, collections: data };
};
```

Listr2 renderiza automaticamente com:

- Spinner animado durante execução
- ✅/❌ ícones de status
- Cores por nível (output padrão, persistido ao final da task)
- Collapse/expand de subtasks

**Não usado mais**: `env-config.ts` usava `defaultLogger` para erros de validação Zod — substituído por `console.error` (erro fatal, não é output de pipeline).

- `atomicSessions` não são mais necessários (saída vai para `.temp/` primeiro)

### 4.1 Lifecycle padrão (novo fluxo)

```typescript
// lib/pipeline/lifecycle.ts
export async function runStandardPipeline<C, R>(options: {
  name: string;
  overrideConfig?: Partial<C["runtimeConfig"]>;
  createContext: (
    override: Partial<C["runtimeConfig"]> | undefined,
    task: ListrTaskWrapper,
  ) => C;
  lockWorkspace: () => void;
  stages: AsyncPipelineStage<C["pipelineContext"]>[];
  validateTemp: (tempDir: string) => Promise<boolean>;
  diffTempVsOutput: (tempDir: string, outputDirs: string[]) => DiffResult;
  backupOutput: (outputDirs: string[]) => string;
  swapTempToOutput: (tempDir: string, outputDirs: string[]) => void;
  onNoChanges: (diff: DiffResult) => void;
  onChangesApplied: (diff: DiffResult, backupDir: string) => void;
}): Promise<R>;
```

Fluxo: `lock → stages (write to .temp/) → validate .temp/ → diff → (no changes: cleanup + summary) OU (changes: backup → swap → summary)`

- **Sem wrap mode** — estágios sempre escrevem em `.temp/`, nunca tocam o output diretamente
- **Validação antes do swap** — tsc + biome rodam no `.temp/` antes de qualquer alteração no projeto
- **Backup só se houver mudanças** — output original só é copiado para `.backup/{timestamp}/` quando o diff detecta alterações
- **Diff determina a ação**: sem mudanças → remove `.temp/`, imprime resumo, encerra; com mudanças → faz backup do output atual → swap `.temp/` para output

### 4.2 Pipeline context

```typescript
// lib/pipeline/context.ts
export interface PipelineExecutionContext<TRuntime, TPipeline> {
  task: ListrTaskWrapper; // Listr2 task nativo para output
  tempDir: string; // .temp/{timestamp}-{id}/ — destino de todos os estágios
  outputDirs: string[]; // e.g. ["src/generated/types/nocobase", ...]
  runtimeConfig: TRuntime;
  overrideConfig?: Partial<TRuntime>;
  pipelineContext?: TPipeline;
  finalResult?: unknown;
}
```

### 4.3 AtomicWriter simplificado

O `AtomicWriter` é simplificado — sem class `AtomicWriteSession`, sem wrap mode, sem backup permanente automático. Expõe funções puras:

```typescript
// lib/io/atomic-writer.ts
export function computeDiff(tempDir: string, outputDir: string): DiffResult;
export function backupDir(sourceDir: string, backupBaseDir: string): string;
export function swapTempToOutput(tempDir: string, outputDir: string): void;
export function removeDir(dir: string): void;
export function runValidation(targetDir: string): Promise<boolean>;
```

O lifecycle em `lib/pipeline/lifecycle.ts` orquestra a sequência: `validateTemp()` → `diffTempVsOutput()` → (backup + swap OR cleanup).

### 4.4 CLI Tasks (flat)

```typescript
// lib/cli/tasks.ts
export function createLockWorkspaceTask(opts: {
  lockWorkspace: () => void;
}): GeneratorTask<C>[];

export function createOrchestrationTasks<C>(opts: {
  stages: GeneratorOrchestrationStage[];
}): GeneratorTask<C>[];
```

Tasks de preparação e finalização são orquestradas diretamente pelo lifecycle (`runStandardPipeline`), não como tasks CLI separadas. O lifecycle chama `lockWorkspace()` → `runPipelineStages()` → `validateTemp()` → `diff` → `backup+swap` ou `cleanup`.

## 5. generate-types Pipeline

### 5.1 Entry point

```typescript
// pipelines/generate-types/index.ts
import { executeEntry } from "../../lib/cli/runner";
import { createGenerateTypesTasks } from "./pipeline";

// executeEntry faz isMain check internamente (fileURLToPath comparando com process.argv[1])
void executeEntry(import.meta.url, createGenerateTypesTasks());
```

### 5.2 Pipeline stages (por datasource)

| Ordem | Stage                | Responsabilidade                                                                                                                                                                       |
| ----- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | **fetch-schemas**    | `GET /api/dataSources/[name]/collections:list` — obtém collections + fields + enums + relations inline                                                                                 |
| 2     | **build-types**      | Constrói tipos internos a partir dos dados brutos da API: mapeia fields → CollectionTypesMap, extrai enums dos `uiSchema.enum`, mapeia relations dos fields tipo `belongsTo`/`hasMany` |
| 3     | **generate-content** | Gera labels.ts, schemas.ts, index.ts, collections.ts                                                                                                                                   |
| 4     | **write-files**      | Escreve no disco via AtomicWriter                                                                                                                                                      |

### 5.3 Datasource runner

```typescript
// pipelines/generate-types/pipeline.ts
export async function runDatasourcePipeline(
  client: DataSourceClient,
  dataSource: DataSourceConfig,
  config: RuntimeConfig,
  task: ListrTaskWrapper,
): Promise<DataSourceResult> {
  const stages = [fetchSchemas, buildTypes, generateContent, writeFiles];

  let ctx = createInitialContext(config, dataSource, client, task);
  ctx = await runPipelineStages(ctx, stages);
  return { writeResults: ctx.writeResults ?? [] };
}
```

### 5.4 Mudanças no datasource config

**ANTES** (`datasources.config.ts`):

```typescript
{
  name: "ixc",
  type: "nocobase",
  dataSource: "d_db_ixcsoft",
  splitCollections: ["cliente", "cliente_contrato", ...],
  preEnumAdapter: createIXCWikiAdapter(logger),      // REMOVIDO
  relationsAdapter: createIXCRelationsAdapter(logger), // REMOVIDO
  generateEnumReport: true,
}
```

**DEPOIS** (`config/datasources.ts`):

```typescript
{
  name: "ixc",
  type: "nocobase",
  dataSource: "d_db_ixcsoft",
  splitCollections: ["cliente", "cliente_contrato", ...],
  // enums e relations vêm da API — sem adapters
  // generateEnumReport removido — sem enum inference, não há o que reportar
}
```

### 5.5 Mudanças no fetch-collections stage

**ANTES** (`pipeline/stages/fetch-collections/index.ts`):

```typescript
// Para dataSources não-main: tenta dataSourcesCollections:list → fallback collections:list → []
// Para main: collections:list puro
```

**DEPOIS** (`stages/fetch-schemas.ts`):

```typescript
export const fetchSchemas: PipelineStage<InitContext> = async (ctx) => {
  const { client, dataSource } = ctx;

  if (dataSource.type !== "nocobase") {
    throw new Error(`DataSource '${dataSource.name}' não é nocobase`);
  }

  // Single endpoint: retorna collections com fields e relations inline
  const response = await client.fetchJson<{
    data: Array<{
      name: string;
      title?: string;
      fields?: NocoBaseField[];
    }>;
  }>(`dataSources/${dataSource.dataSource}/collections:list?paginate=false`);

  // Filtra apenas as collections configuradas (splitCollections + collections)
  const configuredNames = new Set([
    ...(dataSource.collections ?? []),
    ...(dataSource.splitCollections ?? []),
  ]);

  const collections = (response.data ?? [])
    .filter((c) => configuredNames.has(c.name))
    .map((c) => ({
      name: c.name,
      title: c.title,
      fields: c.fields ?? [],
    }));

  return { ...ctx, collections };
};
```

## 6. generate-custom-requests Pipeline

### 6.1 Entry point

```typescript
// pipelines/generate-custom-requests/index.ts
import { executeEntry } from "../../lib/cli/runner";
import { createGenerateCustomRequestsTasks } from "./pipeline";

// executeEntry faz isMain check internamente
void executeEntry(import.meta.url, createGenerateCustomRequestsTasks());
```

### 6.2 Pipeline stages

| Ordem | Stage                 | Responsabilidade                                                                     |
| ----- | --------------------- | ------------------------------------------------------------------------------------ |
| 1     | **load-config**       | Carrega e valida `requests.config.ts` + env                                          |
| 2     | **load-schemas**      | Carrega schemas gerados de `src/generated/types/` para enriquecimento                |
| 3     | **fetch-entries**     | Pagina `customRequests:list` da API NocoBase                                         |
| 4     | **transform-entries** | Transforma API entries + merge com manual overrides (merged: transform-and-merge/\*) |
| 5     | **write-output**      | Atomic write do registry + split files + cleanup                                     |
| 6     | **write-reports**     | Gera analysis report + consolidated report                                           |

### 6.3 Mudanças

Os estágios de `transform-and-merge` (atualmente 4 arquivos separados: `index.ts`, `entry-transformer.ts`, `merge-registries.ts`, `entry-transformer/payload-data.ts`, `entry-transformer/schema-enrichment.ts`, `entry-transformer/schemas-not-found.ts`) são colapsados em `stages/transform-entries.ts`.

Os estágios de `write-output` (8 arquivos) são colapsados em `stages/write-output.ts` com helpers mantidos inline ou em `utils/`.

## 7. Migração — O que muda

### Removidos

| Arquivo/Diretório                                                  | Motivo                                                         |
| ------------------------------------------------------------------ | -------------------------------------------------------------- |
| `lib/cli/execute-entry.ts`                                         | Merge em `lib/cli/runner.ts`                                   |
| `lib/cli/runner.ts`                                                | Merge (rewrite) em novo `lib/cli/runner.ts`                    |
| `lib/cli/types.ts`                                                 | Merge em `lib/cli/types.ts` (inalterado)                       |
| `lib/cli/index.ts`                                                 | Removido (barrel export, não mais necessário)                  |
| `lib/cli/generator-factory.ts`                                     | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/listr-task.ts`                                            | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/orchestration-task.ts`                                    | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/orchestration-stage-runner.ts`                            | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/logged-subtask.ts`                                        | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/defaults.ts`                                              | Merge em `lib/cli/runner.ts`                                   |
| `lib/cli/task-runtime.ts`                                          | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/task-presets.ts`                                          | Merge em `lib/cli/tasks.ts`                                    |
| `lib/cli/run-helper.ts`                                            | Removido (não usado)                                           |
| `lib/logging.ts`                                                   | Removido — usar `task.output` nativo do Listr2                 |
| `lib/pipeline-lifecycle.ts`                                        | Merge em `lib/pipeline/lifecycle.ts`                           |
| `lib/pipeline-runner.ts`                                           | Merge em `lib/pipeline/runner.ts`                              |
| `lib/pipeline-assert.ts`                                           | Move para `lib/pipeline/assert.ts`                             |
| `lib/pipeline-policy.ts`                                           | Move para `lib/pipeline/policy.ts`                             |
| `lib/runtime-context.ts`                                           | Merge em `lib/pipeline/context.ts`                             |
| `lib/io/workspace-locker-adapter.ts`                               | Merge em `lib/io/locker.ts`                                    |
| `lib/io/atomic-session-lifecycle.ts`                               | Merge em `lib/pipeline/lifecycle.ts`                           |
| `runner/orchestrator.ts`                                           | Merge em `lib/cli/runner.ts`                                   |
| `runner/generate-types-step.ts`                                    | Merge em `pipelines/generate-types/pipeline.ts`                |
| `runner/generate-custom-requests-step.ts`                          | Merge em `pipelines/generate-custom-requests/pipeline.ts`      |
| `runner/create-generator-step.ts`                                  | Removido (não usado)                                           |
| `pipelines/generate-types/generator/`                              | Merge em `pipelines/generate-types/pipeline.ts`                |
| `pipelines/generate-types/orchestration/`                          | Merge em `lib/cli/tasks.ts` + `pipeline.ts`                    |
| `pipelines/generate-types/runtime/`                                | Merge em `lib/pipeline/lifecycle.ts`                           |
| `pipelines/generate-types/adapters/`                               | Removido — API já provê enums + relations inline               |
| `pipelines/generate-types/pipeline/stages/apply-enum-adapter/`     | Removido — não mais necessário                                 |
| `pipelines/generate-types/pipeline/stages/apply-enum-corrections/` | Removido — não mais necessário                                 |
| `pipelines/generate-types/pipeline/stages/infer-enums/`            | Removido — API já provê enums inline                           |
| `pipelines/generate-types/pipeline/stages/split-collections/`      | Removido — merge em `build-types.ts`                           |
| `pipelines/generate-types/pipeline/stages/fetch-relations/`        | Removido — relations já vêm em fetch-schemas                   |
| `pipelines/generate-types/utils/client.ts`                         | Merge em `lib/http/` ou `stages/fetch-schemas.ts`              |
| `pipelines/generate-types/utils/create-dataSource-client.ts`       | Inline no pipeline                                             |
| `pipelines/generate-types/utils/config.ts`                         | Inline no pipeline                                             |
| `pipelines/generate-types/utils/wiki-parser.ts`                    | Removido — não mais necessário                                 |
| `pipelines/generate-types/utils/enum-cache.ts`                     | Removido — cache de IXC wiki não mais necessário               |
| `pipelines/generate-types/utils/concurrency.ts`                    | Removido — só usado pelo enum inference                        |
| `pipelines/generate-types/config.ts`                               | Inline no pipeline (removido: importa adapters/enum-inference) |
| `pipelines/generate-types/adapters/enum-inference.config.ts`       | Removido — enum inference não mais necessário                  |
| `pipelines/generate-types/utils/workspace-locker.ts`               | Merge em `lib/io/locker.ts`                                    |
| `pipelines/generate-types/pipeline/orchestration/`                 | Removido (estágios movidos para `stages/`)                     |
| `pipelines/generate-types/pipeline/datasource-pipeline/`           | Merge em `pipeline.ts`                                         |
| `pipelines/generate-types/pipeline/post-pipeline/`                 | Merge em `stages/write-files.ts`                               |
| `pipelines/generate-custom-requests/generator/`                    | Merge em `pipelines/generate-custom-requests/pipeline.ts`      |
| `pipelines/generate-custom-requests/orchestration/`                | Merge em `lib/cli/tasks.ts` + `pipeline.ts`                    |
| `pipelines/generate-custom-requests/runtime/`                      | Merge em `lib/pipeline/lifecycle.ts`                           |
| `pipelines/generate-custom-requests/pipeline/orchestration/`       | Removido                                                       |
| `pipelines/generate-custom-requests/utils/config.ts`               | Inline no pipeline                                             |
| `pipelines/generate-custom-requests/utils/workspace-locker.ts`     | Merge em `lib/io/locker.ts`                                    |
| `src/datasources.config.ts`                                        | Move para `src/config/datasources.ts`                          |
| `src/requests.config.ts`                                           | Move para `src/config/requests.ts`                             |
| `src/lib/env-config.ts`                                            | Move para `src/config/env.ts`                                  |

### Mantidos (lógica inalterada)

- Todo código de **geração de conteúdo** (`content/`): assembly, enums, interfaces, sorting, collections-index, split-index, import-injector, field-mapper, relations
- **Atomic writer** (`lib/io/atomic-writer.ts`) — simplificado (sem `AtomicWriteSession`, sem wrap mode; funções puras: `computeDiff`, `backupDir`, `swapTempToOutput`, `removeDir`, `runValidation`)
- **Reports** (`lib/reports.ts`)
- **HTTP client** (`lib/http/http-client.ts`)
- **NocoBase API client** (`lib/http/nocobase-client.ts`) — simplificado (6 métodos removidos: `fetchCollectionsFromDataSourceScope`, `fetchCollectionFieldsWithFallback`, `inferFieldFromSample`, `fetchCollectionSample`, `fetchDistinctValues`, `inferEnumsFromData`; adicionado `fetchCollections(dataSourceKey)` com endpoint único)
- **Validation** (`lib/validation/tsc-validator.ts`, `lib/validation/linter-runner.ts`)
- **String utilities** (`lib/strings.ts`)
- **Type definitions** (`@types/` de cada pipeline)
- **Utils específicos**: naming, schema-loader, schema-inference, collection-schema-loader
- **Config files**: `datasources.config.ts`, `requests.config.ts` (movidos, mas formato inalterado)
- **Generate-custom-requests API client** (`api/client.ts`)
- **Tests**: postergados para fase 2 — arquivos mantidos como-is, imports não atualizados na primeira fase

### Mudanças no NocoBaseDataSourceClient

```diff
- fetchCollections(): Promise<DataSourceCollection[]>
-   → lógica complexa de fallback (dataSourcesCollections → collections → [])
+ fetchCollections(dataSourceKey: string): Promise<DataSourceCollection[]>
+   → GET /api/dataSources/[dataSourceKey]/collections:list?paginate=false

- fetchCollectionFields(name): Promise<{ fields, schemaAvailable }>
-   → fallback para sample inference
+ fetchCollectionFields(dataSourceKey: string, name: string): Promise<NocoBaseField[]>
+   → GET /api/dataSources/[dataSourceKey]/collections/[name]/fields:list?paginate=false
+   (ou usar fields inline da resposta de collections:list)

- fetchCollectionSample(name, pageSize): Promise<Record[]>          # REMOVIDO
- inferEnumsFromData(...): Promise<EnumMap>                          # REMOVIDO
- fetchDistinctValues(...): Promise<Record[]>                        # REMOVIDO
- inferFieldFromSample(...): NocoBaseField                           # REMOVIDO
```

## 8. Não-Escopo (Non-Goals)

- ❌ Alterar o formato de saída (Zod schemas, labels, indexes, registries)
- ❌ Alterar a estrutura de configuração (`datasources.config.ts`, `requests.config.ts`)
- ❌ Alterar os testes — **postergado para fase 2** (apenas garantir que o código compila e produz saída)
- ❌ Alterar o sistema de validação (tsc + biome via `tsconfig.generated.json`)
- ❌ Alterar o formato dos reports
- ❌ Alterar o `.gitignore` ou `.backup`/`.cache`/`.temp`
- ❌ Migrar de `listr2` para outra lib de TUI
- ❌ Alterar suporte a datasources não-NocoBase
- ❌ Adicionar novos pipelines
- ❌ Manter compatibilidade com IXC Wiki scraper, relations hardcoded, enum inference ou split collections — API já provê tudo inline

## 9. Contagem de arquivos

| Métrica                           | Antes | Depois | Redução |
| --------------------------------- | ----- | ------ | ------- |
| Total arquivos `.ts` (src/)       | ~207  | ~50    | ~76%    |
| Testes (.test.ts + test/)         | ~37   | ~37\*  | 0%\*    |
| Não-teste afetados pela reescrita | ~170  | ~50    | ~71%    |
| CLI framework (lib/cli/)          | 12    | 3      | 75%     |
| Pipeline lifecycle duplicado      | 6     | 3      | 50%     |
| Orchestration wrappers duplicados | 8     | 0      | 100%    |
| Workspace lockers duplicados      | 3     | 1      | 67%     |
| Logging custom                    | 1     | 0      | 100%    |
| Adapters (IXC wiki + relations)   | 8     | 0      | 100%    |
| Enum inference + corrections      | ~15   | 0      | 100%    |
| Pipeline stages (inner)           | 9     | 4      | 56%     |

> \* Testes são fase 2 — contagem não muda nesta iteração.

## 10. Ordem de implementação

1. **Criar `lib/pipeline/`** — novo lifecycle + context + runner
2. **Criar `lib/cli/` simplificado** — tasks.ts + runner.ts + types.ts (3 arquivos)
3. **Criar `config/`** — mover e renomear datasources.config.ts, requests.config.ts, env-config.ts
4. **Reescrever `generate-types` pipeline** — novo pipeline.ts + stages/ + content/
5. **Reescrever `generate-custom-requests` pipeline** — novo pipeline.ts + stages/
6. **Atualizar `src/index.ts`** — novo orchestrator
7. **Rodar `pnpm generate-types` + `pnpm generate-custom-requests`** — validar saída idêntica
8. **Remover arquivos antigos** (`.backup/` de segurança mantido até validação completa)

> **Fase 2** (não incluída nesta iteração): atualizar imports nos testes, rodar testes, corrigir testes quebrados.
