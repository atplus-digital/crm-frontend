# Fix: update-field-names preservando uiSchema completo + mover shared lib

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-step. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:**

1. Mover código reutilizável de `scripts/generators/src/lib/` → `scripts/shared/` (http client, env, TaskRunner)
2. Atualizar **todos** os consumidores para importar de `@shared/*`
3. Apagar arquivos antigos em generators
4. Corrigir `update-field-names` para preservar `uiSchema` completo ao atualizar titles

**Architecture:**

- 3 módulos mudam para `scripts/shared/`: `http/`, `utils/env.ts`, `types.ts` (só TaskRunner)
- Novo alias `@shared/*` no tsconfig + vitest
- 25 arquivos de import atualizados (http: 3, env: 3, TaskRunner: 19 + 3 testes relativos)
- Arquivos antigos apagados; `generators/lib/types.ts` mantém só generator-specific types
- Novo stage `fetch-existing-fields.ts` (1 GET/datasource → lookup map)
- `update-fields.ts` faz merge uiSchema existente + novo title

**Tech Stack:** TypeScript, Node.js fetch API, Listr2

---

## Root Cause

No `update-fields.ts:42-44`, o POST envia apenas `{ uiSchema: { title } }`. O NocoBase faz **shallow merge** — substitui tudo. Perde-se `enum`, `x-component`, `x-component-props`, `x-validator`, `x-read-pretty`, `x-use-component-props`, etc.

## Dados reais — chaves do uiSchema (ambos datasources)

| Chave                   | d_db_ixcsoft | main |
| ----------------------- | :----------: | :--: |
| `title`                 |      ✅      |  ✅  |
| `type`                  |      ✅      |  ✅  |
| `x-component`           |      ✅      |  ✅  |
| `x-component-props`     |      ✅      |  ✅  |
| `x-validator`           |      ✅      |  ✅  |
| `enum`                  |      ✅      |  ✅  |
| `default`               |      —       |  ✅  |
| `required`              |      —       |  ✅  |
| `x-component-designer`  |      —       |  ✅  |
| `x-read-pretty`         |      —       |  ✅  |
| `x-use-component-props` |      —       |  ✅  |

**Tipo `UiSchema` = `Record<string, unknown>`** (future-proof, cobre tudo).

---

## Inventário completo de consumidores

### `@shared/http/http-client` (fetchJsonWithAuth)

| Arquivo                                  | Import atual                                                    |
| ---------------------------------------- | --------------------------------------------------------------- |
| `scripts/shared/http/nocobase-client.ts` | `@generators/lib/http/http-client` → `@shared/http/http-client` |

### `@shared/http/nocobase-client` (NocoBaseApiClient, NocoBaseApiCredentials)

| Arquivo                                                                   | Import atual                                                                        |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `scripts/generators/src/pipelines/generate-types/pipeline.ts`             | `@generators/lib/http/nocobase-client` → `@shared/http/nocobase-client`             |
| `scripts/generators/src/pipelines/generate-custom-requests/api/client.ts` | `@generators/lib/http/nocobase-client` → `@shared/http/nocobase-client` (2 imports) |

### `@shared/utils/env` (resolveNocoBaseEnv)

| Arquivo                                                                           | Import atual                                                  |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| `scripts/generators/src/pipelines/generate-types/pipeline.ts`                     | `../../lib/utils/env` → `@shared/utils/env`                   |
| `scripts/generators/src/pipelines/generate-custom-requests/stages/load-config.ts` | `@scripts/generators/src/lib/utils/env` → `@shared/utils/env` |
| `scripts/nocobase/update-field-names/stages/resolve-config.ts`                    | `@generators/lib/utils/env` → `@shared/utils/env`             |

### `@shared/types` (TaskRunner, OrchestrationTaskRunner)

**Imports de `@generators/lib/types` (caminho alias):**

| #   | Arquivo                                                                                 | O que importa             |
| --- | --------------------------------------------------------------------------------------- | ------------------------- |
| 1   | `scripts/nocobase/update-field-names/pipeline.ts`                                       | `TaskRunner`              |
| 2   | `scripts/nocobase/update-field-names/stages/update-fields.ts`                           | `TaskRunner`              |
| 3   | `scripts/nocobase/update-field-names/@types/script.ts`                                  | `TaskRunner`              |
| 4   | `scripts/generators/src/pipelines/generate-types/stages/build-types.ts`                 | `TaskRunner`              |
| 5   | `scripts/generators/src/pipelines/generate-types/stages/fetch-schemas.ts`               | `TaskRunner`              |
| 6   | `scripts/generators/src/pipelines/generate-types/stages/generate-content.ts`            | `TaskRunner`              |
| 7   | `scripts/generators/src/pipelines/generate-types/stages/write-files.ts`                 | `TaskRunner`              |
| 8   | `scripts/generators/src/pipelines/generate-types/stages/write-reports.ts`               | `TaskRunner`              |
| 9   | `scripts/generators/src/pipelines/generate-types/pipeline.ts`                           | `OrchestrationTaskRunner` |
| 10  | `scripts/generators/src/pipelines/generate-custom-requests/stages/fetch-entries.ts`     | `TaskRunner`              |
| 11  | `scripts/generators/src/pipelines/generate-custom-requests/stages/load-config.ts`       | `TaskRunner`              |
| 12  | `scripts/generators/src/pipelines/generate-custom-requests/stages/load-schemas.ts`      | `TaskRunner`              |
| 13  | `scripts/generators/src/pipelines/generate-custom-requests/stages/transform-entries.ts` | `TaskRunner`              |
| 14  | `scripts/generators/src/pipelines/generate-custom-requests/stages/write-output.ts`      | `TaskRunner`              |
| 15  | `scripts/generators/src/pipelines/generate-custom-requests/stages/write-reports.ts`     | `TaskRunner`              |
| 16  | `scripts/generators/src/lib/lifecycle/lifecycle.ts`                                     | `TaskRunner`              |
| 17  | `scripts/generators/src/lib/lifecycle/lifecycle-tasks.ts`                               | `TaskRunner`              |
| 18  | `scripts/generators/src/lib/pipeline/runner.ts`                                         | `TaskRunner`              |

**Imports relativos de `../types` (testes + create-script-definition):**

| #   | Arquivo                                                           | O que importa                                                                             |
| --- | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 19  | `scripts/generators/src/lib/pipeline/runner.test.ts`              | `TaskRunner`                                                                              |
| 20  | `scripts/generators/src/lib/lifecycle/lifecycle.test.ts`          | `TaskRunner`                                                                              |
| 21  | `scripts/generators/src/lib/lifecycle/lifecycle-tasks.test.ts`    | `TaskRunner`                                                                              |
| 22  | `scripts/generators/src/lib/pipeline/create-script-definition.ts` | `GeneratorDefinition`, `OrchestrationTaskResult`, `OrchestrationTaskRunner`, `TaskRunner` |

> **Nota:** #22 importa generator-specific types (`GeneratorDefinition`, `OrchestrationTaskResult`) junto com `TaskRunner` e `OrchestrationTaskRunner`. Precisa split: shared types de `@shared/types`, generator-specific continuam de `../types`.

### `generators/lib/types.ts` — o que fica

Após mover `TaskRunner` e `OrchestrationTaskRunner`:

- `TaskRunner` → **apagado** (movido para `@shared/types`)
- `OrchestrationTaskRunner` → **apagado** (movido para `@shared/types`)
- `GeneratorDefinition` → **fica**
- `OrchestrationTaskResult` → **fica**
- Imports de `pipeline/context` e `pipeline/runner` → **apagados** (não precisa mais)

---

## File Structure

```
scripts/shared/
├── http/
│   ├── http-client.ts          # ← MOVE de generators/src/lib/http/
│   ├── http-client.test.ts     # ← MOVE de generators/src/lib/http/
│   └── nocobase-client.ts      # ← MOVE de generators/src/lib/http/
├── utils/
│   ├── env.ts                  # ← MOVE de generators/src/lib/utils/
│   └── env.test.ts             # ← MOVE de generators/src/lib/utils/
└── types.ts                    # ← NOVO (TaskRunner + OrchestrationTaskRunner)

scripts/generators/src/lib/
├── http/                        # ← APAGAR (diretório inteiro)
├── utils/env.ts                 # ← APAGAR
├── utils/env.test.ts            # ← APAGAR
├── types.ts                     # ← REESCREVER (só generator-specific)
└── (restante permanece)
```

---

### Task 1: Criar `scripts/shared/` e mover arquivos

- [ ] **Step 1: Criar diretórios**

```bash
mkdir -p scripts/shared/http scripts/shared/utils
```

- [ ] **Step 2: Mover HTTP files (preservando git history)**

```bash
git mv scripts/generators/src/lib/http/http-client.ts scripts/shared/http/http-client.ts
git mv scripts/generators/src/lib/http/http-client.test.ts scripts/shared/http/http-client.test.ts
git mv scripts/generators/src/lib/http/nocobase-client.ts scripts/shared/http/nocobase-client.ts
```

- [ ] **Step 3: Mover env files**

```bash
git mv scripts/generators/src/lib/utils/env.ts scripts/shared/utils/env.ts
git mv scripts/generators/src/lib/utils/env.test.ts scripts/shared/utils/env.test.ts
```

- [ ] **Step 4: Criar `scripts/shared/types.ts`**

```typescript
import type { ListrTaskResult, ListrTaskWrapper } from "listr2";

/**
 * Type alias for the Listr2 task wrapper used across pipeline orchestration.
 */
// biome-ignore lint/suspicious/noExplicitAny: Listr2 requires unconstrained renderer generics
export type TaskRunner = ListrTaskWrapper<any, any, any>;

export type OrchestrationTaskRunner = TaskRunner;
```

- [ ] **Step 5: Apagar diretório http vazio**

```bash
rmdir scripts/generators/src/lib/http
```

---

### Task 2: Registrar alias `@shared/*` no tsconfig e vitest

**Files:**

- Modify: `tsconfig.json`
- Modify: `scripts/vitest.config.ts`

- [ ] **Step 1: Adicionar path alias no tsconfig.json**

Em `compilerOptions.paths`, adicionar após a linha `"@generators/*"`:

```json
"@shared/*": ["./scripts/shared/*"]
```

- [ ] **Step 2: Adicionar alias no vitest.config.ts**

Em `resolve.alias`, adicionar após `"@generators"`:

```typescript
"@shared": path.resolve(__dirname, "./shared/"),
```

---

### Task 3: Atualizar imports — `@shared/http/*` (3 arquivos)

- [ ] **Step 1: `scripts/shared/http/nocobase-client.ts`**

```typescript
// ANTES:
import { fetchJsonWithAuth } from "@generators/lib/http/http-client";

// DEPOIS:
import { fetchJsonWithAuth } from "@shared/http/http-client";
```

- [ ] **Step 2: `scripts/generators/src/pipelines/generate-types/pipeline.ts`**

```typescript
// ANTES:
import { NocoBaseApiClient } from "@generators/lib/http/nocobase-client";

// DEPOIS:
import { NocoBaseApiClient } from "@shared/http/nocobase-client";
```

- [ ] **Step 3: `scripts/generators/src/pipelines/generate-custom-requests/api/client.ts`**

```typescript
// ANTES:
} from "@generators/lib/http/nocobase-client";
import { NocoBaseApiClient } from "@generators/lib/http/nocobase-client";

// DEPOIS:
} from "@shared/http/nocobase-client";
import { NocoBaseApiClient } from "@shared/http/nocobase-client";
```

---

### Task 4: Atualizar imports — `@shared/utils/env` (3 arquivos)

- [ ] **Step 1: `scripts/generators/src/pipelines/generate-types/pipeline.ts`**

```typescript
// ANTES:
import { resolveNocoBaseEnv } from "../../lib/utils/env";

// DEPOIS:
import { resolveNocoBaseEnv } from "@shared/utils/env";
```

- [ ] **Step 2: `scripts/generators/src/pipelines/generate-custom-requests/stages/load-config.ts`**

```typescript
// ANTES:
import { resolveNocoBaseEnv } from "@scripts/generators/src/lib/utils/env";

// DEPOIS:
import { resolveNocoBaseEnv } from "@shared/utils/env";
```

- [ ] **Step 3: `scripts/nocobase/update-field-names/stages/resolve-config.ts`**

```typescript
// ANTES:
import { resolveNocoBaseEnv } from "@generators/lib/utils/env";

// DEPOIS:
import { resolveNocoBaseEnv } from "@shared/utils/env";
```

---

### Task 5: Atualizar imports — `@shared/types` (22 arquivos)

**Grupo A: Imports de `@generators/lib/types` → `@shared/types` (18 arquivos)**

Todos esses importam **apenas** `TaskRunner` ou `OrchestrationTaskRunner` (nenhum generator-specific type).

- [ ] **Step 1: Arquivos que importam só `TaskRunner` (16 arquivos)**

Substituir em cada um:

```typescript
// ANTES:
import type { TaskRunner } from "@generators/lib/types";

// DEPOIS:
import type { TaskRunner } from "@shared/types";
```

Arquivos:

1. `scripts/nocobase/update-field-names/pipeline.ts`
2. `scripts/nocobase/update-field-names/stages/update-fields.ts`
3. `scripts/nocobase/update-field-names/@types/script.ts`
4. `scripts/generators/src/pipelines/generate-types/stages/build-types.ts`
5. `scripts/generators/src/pipelines/generate-types/stages/fetch-schemas.ts`
6. `scripts/generators/src/pipelines/generate-types/stages/generate-content.ts`
7. `scripts/generators/src/pipelines/generate-types/stages/write-files.ts`
8. `scripts/generators/src/pipelines/generate-types/stages/write-reports.ts`
9. `scripts/generators/src/pipelines/generate-custom-requests/stages/fetch-entries.ts`
10. `scripts/generators/src/pipelines/generate-custom-requests/stages/load-config.ts`
11. `scripts/generators/src/pipelines/generate-custom-requests/stages/load-schemas.ts`
12. `scripts/generators/src/pipelines/generate-custom-requests/stages/transform-entries.ts`
13. `scripts/generators/src/pipelines/generate-custom-requests/stages/write-output.ts`
14. `scripts/generators/src/pipelines/generate-custom-requests/stages/write-reports.ts`
15. `scripts/generators/src/lib/lifecycle/lifecycle.ts`
16. `scripts/generators/src/lib/lifecycle/lifecycle-tasks.ts`

- [ ] **Step 2: `scripts/generators/src/lib/pipeline/runner.ts`**

```typescript
// ANTES:
import type { TaskRunner } from "@generators/lib/types";

// DEPOIS:
import type { TaskRunner } from "@shared/types";
```

- [ ] **Step 3: `scripts/generators/src/pipelines/generate-types/pipeline.ts`**

```typescript
// ANTES:
import type { OrchestrationTaskRunner } from "@generators/lib/types";

// DEPOIS:
import type { OrchestrationTaskRunner } from "@shared/types";
```

**Grupo B: Imports relativos de `../types` (4 arquivos)**

- [ ] **Step 4: Testes que importam só `TaskRunner` (3 arquivos)**

```typescript
// ANTES:
import type { TaskRunner } from "../types";

// DEPOIS:
import type { TaskRunner } from "@shared/types";
```

Arquivos:

1. `scripts/generators/src/lib/pipeline/runner.test.ts`
2. `scripts/generators/src/lib/lifecycle/lifecycle.test.ts`
3. `scripts/generators/src/lib/lifecycle/lifecycle-tasks.test.ts`

- [ ] **Step 5: `scripts/generators/src/lib/pipeline/create-script-definition.ts` (split imports)**

```typescript
// ANTES:
import type {
  GeneratorDefinition,
  OrchestrationTaskResult,
  OrchestrationTaskRunner,
  TaskRunner,
} from "../types";

// DEPOIS:
import type { GeneratorDefinition, OrchestrationTaskResult } from "../types";
import type { OrchestrationTaskRunner, TaskRunner } from "@shared/types";
```

---

### Task 6: Apagar código antigo de `generators/lib/types.ts`

**Files:**

- Modify: `scripts/generators/src/lib/types.ts`

- [ ] **Step 1: Reescrever types.ts — só generator-specific**

```typescript
import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import type { AsyncPipelineStage } from "@generators/lib/pipeline/runner";
import type { PipelineJsonReportResult } from "@scripts/generators/src/lib/lifecycle/lifecycle-tasks";
import type { ListrTaskResult } from "listr2";
import type { OrchestrationTaskRunner, TaskRunner } from "@shared/types";

// ──────────────────────────────────────────────
// Shared types (re-exported from @shared/types for convenience)
// ──────────────────────────────────────────────

export type { OrchestrationTaskRunner, TaskRunner };

// ──────────────────────────────────────────────
// Generator definitions
// ──────────────────────────────────────────────

export interface GeneratorDefinition<TRuntimeConfig = unknown> {
  name: string;
  description: string;
  createPipelineOptions: (
    config: TRuntimeConfig,
  ) => StandardPipelineFactoryInput<TRuntimeConfig>;
  defaultConfig?: TRuntimeConfig;
  getOutputDirs: (config: TRuntimeConfig) => string[];
}

interface StandardPipelineInput<
  TRuntimeConfig = unknown,
  TPipelineContext = unknown,
> {
  task: TaskRunner;
  overrideConfig?: Partial<TRuntimeConfig>;
  defaultConfig: TRuntimeConfig;
  getOutputDirs: (config: TRuntimeConfig) => string[];
  stages: AsyncPipelineStage<
    PipelineExecutionContext<TRuntimeConfig, TPipelineContext>
  >[];
  label?: string;
  reportsOutputPath?: string;
  onReportReady?: (result: PipelineJsonReportResult) => void;
}

type StandardPipelineFactoryInput<
  TRuntimeConfig = unknown,
  TPipelineContext = unknown,
> = Omit<StandardPipelineInput<TRuntimeConfig, TPipelineContext>, "task">;

// ──────────────────────────────────────────────
// Orchestration
// ──────────────────────────────────────────────

type NestedTaskList = ReturnType<OrchestrationTaskRunner["newListr"]>;

export type OrchestrationTaskResult = NestedTaskList | ListrTaskResult<unknown>;
```

> **Nota:** Re-exporta `TaskRunner` e `OrchestrationTaskRunner` de `@shared/types` para compatibilidade com eventuais imports diretos de consumidores internos que ainda usem `../types`. Os imports já foram atualizados na Task 5, mas as re-exports garantem que nada quebra se alguém esquecer.

---

### Task 7: Atualizar tipos do update-field-names + criar fetch-existing-fields

**Files:**

- Modify: `scripts/nocobase/update-field-names/@types/script.ts`
- Create: `scripts/nocobase/update-field-names/stages/fetch-existing-fields.ts`

- [ ] **Step 1: Atualizar `@types/script.ts`**

```typescript
/**
 * Types for the update-field-names pipeline.
 */

import type { TaskRunner } from "@shared/types";

/** Credentials for the NocoBase API */
export interface NocoBaseCredentials {
  baseUrl: string;
  token: string;
  timeoutMs: number;
}

/** A single field update request */
export interface FieldUpdateRequest {
  datasourceKey: string;
  collectionName: string;
  fieldName: string;
  newLabel: string;
}

/** Result of a single field update */
export interface FieldUpdateResult {
  request: FieldUpdateRequest;
  success: boolean;
  statusCode?: number;
  errorMessage?: string;
}

/**
 * NocoBase uiSchema — opaque record.
 * Uses index signature because NocoBase can add arbitrary keys
 * (x-component, x-component-designer, x-read-pretty, x-use-component-props, etc.).
 * We only override `title`; everything else passes through unchanged.
 */
export type UiSchema = Record<string, unknown>;

/** Lookup map: `${datasourceKey}.${collectionName}.${fieldName}` → uiSchema */
export type FieldUiSchemaLookup = Map<string, UiSchema | undefined>;

/** Pipeline context carried through all Listr2 tasks */
export interface PipelineContext {
  credentials: NocoBaseCredentials;
  updates: FieldUpdateRequest[];
  fieldLookup: FieldUiSchemaLookup;
  results: FieldUpdateResult[];
}

/** A stage function signature matching the Listr2 task pattern */
export type PipelineStage = (
  ctx: PipelineContext,
  task: TaskRunner,
) => Promise<void> | ReturnType<TaskRunner["newListr"]> | void;
```

- [ ] **Step 2: Criar `stages/fetch-existing-fields.ts`**

```typescript
import type { TaskRunner } from "@shared/types";
import { fetchJsonWithAuth } from "@shared/http/http-client";
import type { PipelineContext } from "../@types/script";
import { fieldNameConfig } from "../config.js";

/**
 * Stage 1.5 — Fetch existing field uiSchema from NocoBase (1 request per datasource).
 *
 * Uses `fetchJsonWithAuth` from `@shared/http` to query
 * `dataSources/{key}/collections:list?paginate=false` for each datasource
 * in the config, then builds a lookup map of `${ds}.${collection}.${field} → uiSchema`.
 */
export async function fetchExistingFields(
  ctx: PipelineContext,
  task: TaskRunner,
): Promise<void> {
  const { credentials } = ctx;
  const lookup = ctx.fieldLookup;

  // Collect unique datasource keys from config
  const datasourceKeys = Object.keys(fieldNameConfig);

  for (const datasourceKey of datasourceKeys) {
    const collectionNames = Object.keys(
      (
        fieldNameConfig as Record<
          string,
          Record<string, Record<string, string>>
        >
      )[datasourceKey],
    );

    task.output = `Buscando collections de ${datasourceKey}...`;

    const collections = await fetchJsonWithAuth<
      Array<{
        name: string;
        fields: Array<{
          name: string;
          uiSchema?: Record<string, unknown>;
        }>;
      }>
    >(`dataSources/${datasourceKey}/collections:list?paginate=false`, {
      baseUrl: credentials.baseUrl,
      token: credentials.token,
      timeoutMs: credentials.timeoutMs,
    });

    // Filter in-memory: only collections present in config
    const targetSet = new Set(collectionNames);
    const matched = collections.filter((c) => targetSet.has(c.name));

    let fieldCount = 0;
    for (const collection of matched) {
      for (const field of collection.fields ?? []) {
        const key = `${datasourceKey}.${collection.name}.${field.name}`;
        lookup.set(key, field.uiSchema);
        fieldCount++;
      }
    }

    task.output = `${datasourceKey}: ${matched.length}/${collections.length} collections, ${fieldCount} fields carregados`;
  }
}
```

---

### Task 8: Atualizar pipeline.ts + update-fields.ts + README

**Files:**

- Modify: `scripts/nocobase/update-field-names/pipeline.ts`
- Modify: `scripts/nocobase/update-field-names/stages/update-fields.ts`
- Modify: `scripts/nocobase/update-field-names/README.md`

- [ ] **Step 1: Atualizar pipeline.ts — import + context + novo stage**

```typescript
/**
 * Pipeline para atualizar uiSchema.title dos campos via API do NocoBase.
 *
 * Usa Listr2 com stages organizadas, seguindo o padrão dos scripts geradores.
 * Não usa runStandardPipeline (que é para pipelines com atomic write de arquivos).
 */

import type { TaskRunner } from "@shared/types";
import { Listr } from "listr2";
import type { PipelineContext } from "./@types/script";
import { fetchExistingFields } from "./stages/fetch-existing-fields";
import { resolveConfig } from "./stages/resolve-config";
import { updateFields } from "./stages/update-fields";

/**
 * Runs the update-field-names pipeline with Listr2.
 *
 * Stages:
 *   1. Resolve config — loads NocoBase credentials and flattens fieldNameConfig
 *   2. Fetch existing fields — 1 GET/datasource → lookup map of uiSchema per field
 *   3. Update fields — sends POST requests for each field label (sub-tasks per field)
 *   4. Summary — prints results
 */
export async function runUpdateFieldNamesPipeline(): Promise<void> {
  const initialContext: PipelineContext = {
    credentials: { baseUrl: "", token: "", timeoutMs: 30_000 },
    updates: [],
    fieldLookup: new Map(),
    results: [],
  };

  const tasks = [
    {
      title: "Resolvendo configuração e credenciais",
      task: async (ctx: PipelineContext, task: TaskRunner) => {
        await resolveConfig(ctx, task);
      },
    },
    {
      title: "Buscando uiSchema existente dos campos",
      task: async (ctx: PipelineContext, task: TaskRunner) => {
        await fetchExistingFields(ctx, task);
      },
    },
    {
      title: "Atualizando labels dos campos",
      task: (ctx: PipelineContext, task: TaskRunner) => updateFields(ctx, task),
    },
    {
      title: "Resumo",
      task: (ctx: PipelineContext, task: TaskRunner) => {
        const succeeded = ctx.results.filter((r) => r.success).length;
        const failed = ctx.results.filter((r) => !r.success).length;
        const total = ctx.results.length;

        if (failed === 0) {
          task.title = `✅ Concluído: ${succeeded}/${total} campo(s) atualizado(s)`;
        } else {
          task.title = `⚠️ Concluído: ${succeeded} atualizado(s), ${failed} erro(s) de ${total} total`;
        }

        for (const result of ctx.results) {
          if (!result.success) {
            task.output = `  ❌ ${result.request.datasourceKey}.${result.request.collectionName} → ${result.request.fieldName}: ${result.errorMessage ?? `HTTP ${result.statusCode}`}`;
          }
        }
      },
    },
  ];

  const rootListr = new Listr(tasks, {
    concurrent: false,
    renderer: process.env.VITE_LOG_LEVEL === "debug" ? "verbose" : "default",
    rendererOptions: {
      lazy: false,
      collapseSkips: false,
      collapseErrors: false,
    },
  });

  await rootListr.run(initialContext);

  // Exit with error if any update failed
  const failed = initialContext.results.filter((r) => !r.success).length;
  if (failed > 0) {
    process.exitCode = 1;
  }
}
```

- [ ] **Step 2: Atualizar update-fields.ts — merge uiSchema**

```typescript
import type { TaskRunner } from "@shared/types";
import type { Listr } from "listr2";
import type { UiSchema } from "../@types/script";
import type { PipelineContext } from "../@types/script";

/**
 * Stage 3 — Execute all field label updates via NocoBase API.
 *
 * Each update is a sub-task in Listr2, showing progress per field.
 * Merges existing uiSchema from lookup with the new title before POST,
 * preserving all other uiSchema properties (enum, x-component, etc.).
 * Returns undefined when there are no updates (skips sub-task creation).
 */
export function updateFields(
  ctx: PipelineContext,
  task: TaskRunner,
): Listr<PipelineContext> | undefined {
  if (ctx.updates.length === 0) {
    task.output = "Nenhum campo para atualizar.";
    return undefined;
  }

  const { credentials } = ctx;

  const subTasks = ctx.updates.map((request) => ({
    title: `${request.datasourceKey}.${request.collectionName} → ${request.fieldName}`,
    task: async (_subCtx: unknown, subTask: TaskRunner): Promise<void> => {
      const endpoint = `${credentials.baseUrl}/dataSourcesCollections/${request.datasourceKey}.${request.collectionName}/fields:update`;

      const controller = new AbortController();
      const timeout = setTimeout(
        () => controller.abort(),
        credentials.timeoutMs,
      );

      try {
        // Lookup existing uiSchema from pre-fetched data
        const lookupKey = `${request.datasourceKey}.${request.collectionName}.${request.fieldName}`;
        const existingUiSchema = ctx.fieldLookup.get(lookupKey);

        // Merge: existing uiSchema + new title
        const mergedUiSchema: UiSchema = {
          ...(existingUiSchema ?? {}),
          title: request.newLabel,
        };

        // Send complete uiSchema preserving all data
        const response = await fetch(
          `${endpoint}?filterByTk=${request.fieldName}`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${credentials.token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              uiSchema: mergedUiSchema,
            }),
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          const errorBody = await response.text();
          ctx.results.push({
            request,
            success: false,
            statusCode: response.status,
            errorMessage: errorBody
              .replaceAll(/\s+/g, " ")
              .trim()
              .slice(0, 200),
          });
          throw new Error(
            `HTTP ${response.status}: ${errorBody.replaceAll(/\s+/g, " ").trim().slice(0, 150)}`,
          );
        }

        ctx.results.push({ request, success: true });
        subTask.title = `${request.datasourceKey}.${request.collectionName} → ${request.fieldName}: "${request.newLabel}" ✅`;
      } catch (err) {
        ctx.results.push({
          request,
          success: false,
          errorMessage: err instanceof Error ? err.message : String(err),
        });

        if (err instanceof DOMException && err.name === "AbortError") {
          throw new Error(
            `Timeout de ${credentials.timeoutMs}ms ao atualizar ${request.fieldName}`,
          );
        }
        throw err;
      } finally {
        clearTimeout(timeout);
      }
    },
  }));

  return task.newListr(subTasks, {
    concurrent: false,
    exitOnError: false,
  });
}
```

- [ ] **Step 3: Atualizar README.md**

Substituir **toda** a seção de tabela de stages + estrutura + Endpoint:

```markdown
| Stage                 | Arquivo                           | Descrição                                                     |
| --------------------- | --------------------------------- | ------------------------------------------------------------- |
| Resolve config        | `stages/resolve-config.ts`        | Carrega credenciais e flatten do `fieldNameConfig`            |
| Fetch existing fields | `stages/fetch-existing-fields.ts` | 1 GET/datasource → lookup map de uiSchema por campo           |
| Update fields         | `stages/update-fields.ts`         | Merge uiSchema + novo title, envia POST por campo (sub-tasks) |
| Summary               | `pipeline.ts`                     | Exibe resumo de resultados                                    |

## Estrutura
```

update-field-names/
├── update-field-names.ts # Entry point (self-executing)
├── pipeline.ts # Orquestração Listr2 + stages + summary
├── config.ts # Configuração de campos a atualizar
├── @types/
│ └── script.ts # Tipos da pipeline (inclui UiSchema, FieldUiSchemaLookup)
├── stages/
│ ├── resolve-config.ts # Stage 1: resolve credenciais + flatten config
│ ├── fetch-existing-fields.ts # Stage 2: busca uiSchema existente (1 GET/datasource)
│ └── update-fields.ts # Stage 3: merge + POST requests por campo
├── tsconfig.json
└── README.md

```

## Endpoints

O script executa 2 fases:

### Fase 1 — Buscar dados existentes (1 request por datasource)

```

GET /api/dataSources/{datasource_key}/collections:list?paginate=false

```

Retorna todas as collections com seus fields. O script filtra in-memory
só as collections presentes no `config.ts` e constrói um lookup map
de `uiSchema` por campo.

### Fase 2 — Atualizar labels (1 request por campo)

```

POST /api/dataSourcesCollections/{datasource_key}.{collection_key}/fields:update?filterByTk={field_name}

````

Body — **uiSchema completo** (existente + novo title), preservando enum, x-component, etc.:

```json
{
  "uiSchema": {
    "type": "string",
    "x-component": "Select",
    "enum": [
      {"label": "T", "value": "T"},
      {"label": "C", "value": "C"}
    ],
    "title": "Novo Label"
  }
}
````

````

---

### Task 9: Validar tudo

- [ ] **Step 1: Typecheck**

```bash
pnpm typecheck
````

- [ ] **Step 2: Lint**

```bash
pnpm biome:fix
```

- [ ] **Step 3: Rodar testes do HTTP client**

```bash
npx vitest run scripts/shared/http/http-client.test.ts --config scripts/vitest.config.ts
```

- [ ] **Step 4: Rodar testes do env**

```bash
npx vitest run scripts/shared/utils/env.test.ts --config scripts/vitest.config.ts
```

- [ ] **Step 5: Rodar todos os testes do generators**

```bash
npx vitest run --config scripts/vitest.config.ts
```

- [ ] **Step 6: Testar manualmente com campo com enum**

Configurar `config.ts`:

```typescript
export const fieldNameConfig = {
  d_db_ixcsoft: {
    su_ticket: {
      status: "Status (Teste)",
    },
  },
} satisfies FieldNameConfig<DatasourceCollectionsMap>;
```

Executar:

```bash
node --import tsx/esm scripts/nocobase/update-field-names/update-field-names.ts
```

Verificar pós-update:

```bash
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "https://crm.atplus.cloud/api/dataSourcesCollections/d_db_ixcsoft.su_ticket/fields:get?filterByTk=status" \
  | jq '.data.uiSchema'
```

Confirmar que `enum` e `x-component: "Select"` continuam presentes e `title` é `"Status (Teste)".

- [ ] **Step 7: Reverter título e config**

Restaurar `config.ts` para estado original (vazio):

```typescript
export const fieldNameConfig = {
  d_db_ixcsoft: {
    cidade: {},
    cliente_contrato: {},
    fn_areceber: {},
    radusuarios: {},
    su_ticket: {},
    vd_contratos_produtos: {},
  },
} satisfies FieldNameConfig<DatasourceCollectionsMap>;
```

- [ ] **Step 8: Commit**

```bash
git add scripts/ tsconfig.json
git commit -m "refactor(scripts): move shared libs + preserve uiSchema on field update"
```
