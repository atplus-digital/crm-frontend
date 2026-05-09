# Spec: scripts/generators Rewrite

> Plan: `.weave/plans/generators-rewrite.md`
> Created: 2026-05-08
> Status: draft — pending human review

## Objective

Rewrite `scripts/generators/` to simplify, deduplicate, and remove dead code. The goal is a smaller, easier-to-maintain codebase that produces **identical output** to the current implementation.

**Problem being solved:**

- ~207 `.ts` files is excessive for what the generators do
- Enum inference (scraping sample data for enum values) is unreliable and complex
- IXC adapters require external wiki scraper + relations scraper — API now provides this inline
- Custom `Logger` abstraction over Listr2 adds indirection without value
- Multi-route API fallback (4 different endpoints tried in sequence) is fragile

**What success looks like:**

- `pnpm generate-types` produces the exact same `src/generated/types/**/*.ts` files
- `pnpm generate-custom-requests` produces the exact same `src/generated/custom-requests/**/*.ts` files
- File count reduced from ~207 to ~50
- No `Logger` abstraction — use Listr2's `task.output` directly
- Single API endpoint per datasource: `GET /api/dataSources/[name]/collections:list?paginate=false`
- Tests deferred to Phase 2

## ASSUMPTIONS

1. The NocoBase API at `NOCOBASE_URL` provides `/api/dataSources/[name]/collections:list` with `paginate=false`
2. That endpoint returns collections with fields including `uiSchema.enum` (enums inline) and `belongsTo`/`hasMany` fields (relations inline)
3. Generated file format (Zod schemas, labels, barrel exports) must remain **byte-for-byte identical** to current output
4. Tests in `scripts/generators/**/*.test.ts` will be updated in Phase 2 only
5. `src/generated/` is the only output directory that matters for correctness

→ **Correct any of these before we proceed.**

## Commands

```bash
pnpm generate-types               # Generate TypeScript types from NocoBase schemas
pnpm generate-custom-requests     # Generate custom request registry
pnpm biome:fix                   # Format all scripts/generators files
pnpm typecheck                   # TypeScript check (full project)
```

No test commands for Phase 1 — tests are Phase 2.

## Project Structure

### New structure

```
scripts/generators/
├── tsconfig.generated.json        # Validates generated output only
└── src/
    ├── index.ts                   # Top-level orchestrator entry point
    ├── config/
    │   ├── datasources.ts         # Datasource configs (NO adapters, NO generateEnumReport)
    │   ├── env.ts                 # Env config (NO Logger, NO resolveLogLevel)
    │   └── requests.ts            # Request configs (updated imports)
    └── lib/
        ├── http/
        │   ├── http-client.ts     # Unchanged
        │   └── nocobase-client.ts # Simplified: fetchCollections() only
        ├── io/
        │   ├── atomic-writer.ts   # Unchanged
        │   └── locker.ts          # Merged: 4 old lockers → 1
        ├── pipeline/              # NEW shared pipeline framework
        │   ├── context.ts         # PipelineExecutionContext (task: ListrTaskWrapper)
        │   ├── lifecycle.ts        # runStandardPipeline() (no Logger)
        │   ├── runner.ts           # runPipelineStages() (no Logger)
        │   ├── assert.ts           # Moved from pipeline-assert.ts
        │   └── policy.ts           # Moved from pipeline-policy.ts
        ├── cli/                    # SIMPLIFIED CLI (12 files → 3)
        │   ├── runner.ts           # executeEntry(), runGeneratorCli(), runOrchestrator()
        │   ├── tasks.ts            # createPreparationTasks(), createFinalizationTasks(), createOrchestrationTasks()
        │   └── types.ts            # GeneratorTask, GeneratorContext (NO Logger)
        ├── reports.ts              # Unchanged
        ├── strings.ts              # Unchanged
        ├── path-utils.ts           # Unchanged
        └── validation/
            ├── tsc-validator.ts    # Unchanged
            └── linter-runner.ts    # Unchanged
    └── pipelines/
        ├── generate-types/
        │   ├── index.ts            # executeEntry(import.meta.url, createGenerateTypesPipeline())
        │   ├── pipeline.ts         # createGenerateTypesPipeline(), runDatasourcePipeline()
        │   ├── @types/             # Type defs (NO script-adapters.ts)
        │   ├── utils/naming.ts     # Unchanged logic
        │   ├── content/            # 10 files — logic unchanged, updated imports
        │   └── stages/             # NEW 4-stage pipeline (was 9 stages)
        │       ├── fetch-schemas.ts
        │       ├── build-types.ts
        │       ├── generate-content.ts
        │       └── write-files.ts
        └── generate-custom-requests/
            ├── index.ts            # executeEntry(import.meta.url, createCustomRequestsPipeline())
            ├── pipeline.ts         # createCustomRequestsPipeline()
            ├── @types/             # Unchanged
            ├── utils/              # schema-loader, schema-inference, NO workspace-locker
            ├── api/client.ts       # Unchanged
            └── stages/             # Simplified (6 files)
                ├── load-config.ts
                ├── load-schemas.ts
                ├── fetch-entries.ts
                ├── transform-entries.ts
                ├── write-output.ts
                └── write-reports.ts
```

## What Gets Removed and Why

### 1. Custom Logger (`lib/logging.ts`)

Listr2 already has `ListrTaskWrapper.task.output()` for task output. The custom Logger adds indirection without benefit.

**Replace with:**

- `defaultLogger.info/warn/error/debug(...)` → `console.error(...)` for fatal errors, `task.output(...)` for pipeline output
- `logger: Logger` in function params → `task: ListrTaskWrapper` in pipeline context
- `createLogger()`, `defaultLogger`, `isLogLevelEnabled()` → removed entirely

### 2. Enum inference (IXC adapters)

Old flow: `createIXCWikiAdapter` scrapes IXC Wiki API → `infer-enums` samples collection data → `apply-enum-adapter` merges.

New flow: NocoBase API provides `uiSchema.enum` directly. Extract in `build-types.ts`.

**Remove:**

- `preEnumAdapter`, `relationsAdapter`, `generateEnumReport` config fields
- `adapters/ixc-wiki-scraper/`, `adapters/ixc-relations-adapter/`, `adapters/ixc-relations-data/`
- `infer-enums`, `apply-enum-adapter`, `apply-enum-corrections` stages
- `utils/wiki-parser.ts`, `utils/enum-cache.ts`, `utils/concurrency.ts`

### 3. Multi-route API fallback

Old: try `dataSourcesCollections:list` → `collections:list` → `[]` → infer from sample.

New: single `GET /api/dataSources/${dataSourceKey}/collections:list?paginate=false`.

**Remove from `nocobase-client.ts`:**

- `fetchCollectionsFromDataSourceScope()`, `fetchCollectionFieldsWithFallback()`
- `inferFieldFromSample()`, `fetchCollectionSample()`, `fetchDistinctValues()`, `inferEnumsFromData()`

**Keep:** `fetchPaginated()`, `fetchJson()`

### 4. Pipeline splitting

Old: `split-collections` stage splits one file into multiple.

New: merge `split-collections` logic into `build-types.ts` — no separate stage.

### 5. CLI framework (12 files → 3)

| Old file                            | New location                             |
| ----------------------------------- | ---------------------------------------- |
| `cli/execute-entry.ts`              | `cli/runner.ts` (as `executeEntry()`)    |
| `cli/runner.ts`                     | `cli/runner.ts`                          |
| `cli/defaults.ts`                   | `cli/runner.ts`                          |
| `runner/orchestrator.ts`            | `cli/runner.ts` (as `runOrchestrator()`) |
| `cli/task-presets.ts`               | `cli/tasks.ts`                           |
| `cli/orchestration-stage-runner.ts` | `cli/tasks.ts`                           |
| `cli/orchestration-task.ts`         | `cli/tasks.ts`                           |
| `cli/logged-subtask.ts`             | `cli/tasks.ts`                           |
| `cli/generator-factory.ts`          | `cli/tasks.ts`                           |
| `cli/listr-task.ts`                 | `cli/tasks.ts`                           |
| `cli/task-runtime.ts`               | `cli/tasks.ts`                           |
| `cli/types.ts`                      | `cli/types.ts` (rewrite — remove Logger) |

### 6. Workspace locker (4 files → 1)

Old: `lib/io/workspace-locker.ts`, `lib/io/workspace-locker-adapter.ts`, and 2 pipeline-specific lockers.

New: single `lib/io/locker.ts` with `lockWorkspace()` + `unlockWorkspace()`.

### 7. Pipeline lifecycle (4 files → 1 shared module)

Old: `lib/pipeline-lifecycle.ts`, `lib/pipeline-runner.ts`, `lib/runtime-context.ts`, `lib/io/atomic-session-lifecycle.ts`.

New: `lib/pipeline/` with `context.ts`, `lifecycle.ts`, `runner.ts`, `assert.ts`, `policy.ts`.

## Code Style

### No Logger abstraction

Old (removed):

```typescript
import { defaultLogger } from "@scripts/generators/src/lib/logging";
defaultLogger.info("Fetching collections", { datasource: "nocobase" });
```

New:

```typescript
// Fatal errors → console.error
console.error("[ERRO] NocoBase credentials não configuradas.");

// Pipeline output → task.output
context.task.output("Buscando schemas do NocoBase main...");
```

### Listr2 task.output usage

Inside pipeline stages, `PipelineExecutionContext` provides `task: ListrTaskWrapper`:

```typescript
export async function fetchSchemasStage(context: PipelineExecutionContext) {
  context.task.output("Buscando schemas do NocoBase main...");
  const schemas = await nocobaseClient.fetchCollections("main");
  context.task.output(`Encontradas ${schemas.length} coleções.`);
  return schemas;
}
```

### API fetching — single endpoint

Old (removed — multi-route fallback):

```typescript
// Removed: 4 endpoints tried in sequence
const collections =
  (await client.fetchCollectionsFromDataSourceScope(name)) ??
  (await client.fetchCollectionFieldsWithFallback(name)) ??
  (await client.fetchCollectionSample(name)) ??
  [];
```

New:

```typescript
export class NocoBaseDataSourceClient {
  async fetchCollections(dataSourceKey: string): Promise<CollectionSchema[]> {
    return this.client.fetchJson<CollectionSchema[]>(
      `/api/dataSources/${dataSourceKey}/collections:list?paginate=false`,
    );
  }
}
```

### CLI entry point pattern (unchanged)

```typescript
import { executeEntry } from "@scripts/generators/src/lib/pipeline/runner";
export default executeEntry(import.meta.url, createGenerateTypesPipeline);
```

## Testing Strategy

**Phase 1: No tests.** Tests are out of scope until Phase 2.

**Phase 2 (later, not in this spec):**

- Update all test imports from old paths to new paths
- Run `pnpm test scripts/generators/`
- Fix broken tests

**How we'll know Phase 1 is correct:**

- `pnpm generate-types` produces byte-for-byte identical `src/generated/types/**/*.ts`
- `pnpm generate-custom-requests` produces byte-for-byte identical `src/generated/custom-requests/**/*.ts`
- `git diff src/generated/` returns empty after both generators run

## Boundaries

### Always Do (Phase 1)

- Run `pnpm biome:fix` after each file change
- Run `pnpm typecheck` after each step
- Verify `git diff src/generated/` is clean before claiming done
- Keep output format of generated files **identical** to current output
- Use Listr2's `task.output()` for pipeline output

### Ask First

- Changing the output format of generated files
- Modifying `datasources.config.ts` or `requests.config.ts`
- Adding new pipeline stages or dependencies

### Never Do (Phase 1)

- Run tests or modify test files
- Modify `src/generated/` manually
- Commit with `pnpm typecheck` failing
- Keep any `lib/logging.ts` imports or adapter imports
- Delete `scripts/old.generators/` until step 15 (validation complete)

## Success Criteria

### Step-level acceptance

| Step    | Acceptance Criteria                                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Step 1  | `scripts/generators/` skeleton exists, all unchanged lib files copied, `nocobase-client.ts` has only `fetchCollections()` + `fetchPaginated()` + `fetchJson()` |
| Step 2  | `lib/pipeline/` has 5 files, no `Logger` import anywhere, `PipelineExecutionContext` uses `task: ListrTaskWrapper`                                             |
| Step 3  | `lib/io/locker.ts` exists as single file, no `Logger` dependency                                                                                               |
| Step 4  | `lib/pipeline/` has exactly 3 files, no `Logger` reference in types                                                                                            |
| Step 5  | `config/` has `datasources.ts`, `env.ts`, `requests.ts`; `datasources.ts` has no `preEnumAdapter`, `relationsAdapter`, `generateEnumReport`                    |
| Step 6  | `generate-types/@types/` has no `script-adapters.ts`                                                                                                           |
| Step 9  | `generate-types/stages/` has exactly 4 files: `fetch-schemas.ts`, `build-types.ts`, `generate-content.ts`, `write-files.ts`                                    |
| Step 14 | `git diff src/generated/types/` is clean AND `git diff src/generated/custom-requests/` is clean                                                                |

### Final acceptance

1. `pnpm generate-types` runs without errors and produces byte-for-byte identical output
2. `pnpm generate-custom-requests` runs without errors and produces byte-for-byte identical output
3. `pnpm typecheck` passes
4. `pnpm biome:fix` passes
5. No `lib/logging.ts` file exists in new `scripts/generators/`
6. No `adapters/` directory exists in new `scripts/generators/`
7. `scripts/old.generators/` removed

## Open Questions

1. **Should we keep `resolveLogLevel()` in `env.ts`?** Old `env-config.ts` reads `LOG_LEVEL` from env but Logger is removed. **Decision: Remove.**

2. **Should `create-generator-step.ts` and `lib/pipeline/run-helper.ts` be removed?** Plan says not used. Verify by grepping before removing.

3. **Should pipeline lifecycle be async?** Old `runStandardStandalonePipeline` was async. New `runStandardPipeline` should also be async.

4. **Should `atomic-session-lifecycle.ts` become a separate file?** New `lib/pipeline/lifecycle.ts` inlines this behavior. No separate file needed.

## Implementation Order

```
Phase A — Foundation
  Step 1:  Directory skeleton + unchanged lib files
  Step 2:  lib/pipeline/ (shared framework)
  Step 3:  lib/io/locker.ts (unified locker)
  Step 4:  lib/pipeline/ (simplified CLI)

Phase B — Config
  Step 5:  config/ (env, datasources, requests)

Phase C — generate-types pipeline
  Step 6:  @types/ (type defs, no adapters)
  Step 7:  utils/naming.ts
  Step 8:  content/ (10 files)
  Step 9:  stages/ (4 new stages)
  Step 10: pipeline.ts + index.ts

Phase D — generate-custom-requests pipeline
  Step 11: @types/ + utils/ + api/
  Step 12: stages/ + pipeline.ts + index.ts

Phase E — Entry point
  Step 13: src/index.ts (orchestrator)

Phase F — Validate
  Step 14: Run generators, git diff src/generated/ must be clean
  Step 15: Remove scripts/old.generators/
```

## Spec Change Log

| Date       | Change        | Author |
| ---------- | ------------- | ------ |
| 2026-05-08 | Initial draft | loom   |
