# Plan: scripts/generators Rewrite

> Spec: `.specs/scripts/generators/README.md`
> Created: 2026-05-08
> Status: approved

## Overview

Rewrite `scripts/generators/` from ~207 `.ts` files to ~50, removing enum inference, IXC adapters, custom logging, and multi-route API fallback. The old code is backed up at `scripts/old.generators/`.

## Pre-conditions

- Old code available at `scripts/old.generators/src/`
- `scripts/generators/` directory does NOT exist yet — must be created
- Path alias: `@scripts/*` → `./scripts/*` in root `tsconfig.json`
- Tests are **Phase 2** — no test updates in this plan

---

## Execution Flow

### Orchestrator → Pipelines → Lifecycle

```
src/index.ts
  │
  └─ runOrchestrator({ name: "run-generators", generators: [...] })
       │
       ├─ Generator: generate-types
       │    └─ runStandardPipeline({ ... })
       │
       └─ Generator: generate-custom-requests
            └─ runStandardPipeline({ ... })
```

Each generator runs independently as a Listr2 task. Failure in one does NOT prevent the other from starting — each has its own lifecycle.

### Shared Lifecycle (per generator)

```
runStandardPipeline()
  │
  ├── 1. createExecutionContext()     ← build context with runtime config + reports context
  │
  ├── 2. lockWorkspace()             ← .vscode/settings.json → files.readonlyInclude
  │
  ├── 3. runPipelineStages()         ← execute pipeline-specific stages sequentially
  │      │                              each stage: (context) → Promise<context>
  │      │                              stages write generated files to .temp/
  │      │                              stages populate context.reports via addJsonReport()
  │      └─ outputDirs: generate-types has 2, custom-requests has 1
  │
  ├── 4. validateTemp()              ← for each .temp/ dir:
  │      │                              ├─ tsc (tsconfig.generated.json)
  │      │                              └─ biome --fix
  │      └─ FAIL → remove .temp/, throw Error (output untouched)
  │
  ├── 5. diffTempVsOutput()          ← compare .temp/ with current outputDir
  │      ├─ NO CHANGES → remove .temp/, generate report .md, print summary, DONE
  │      └─ CHANGES → continue to step 6
  │
  ├── 6. backupOutput()              ← copy current outputDir → .backup/{timestamp}/
  │
  ├── 7. swapTempToOutput()          ← rm outputDir → rename .temp/ → outputDir
  │
  └── 8. renderReportsMarkdown()     ← pipeline produces reports object as finalResult
         │                              lifecycle reads reports via renderReportsMarkdown()
         │                              writes consolidated .md to configured output path
         └─ print summary (files changed, files unchanged, reports generated)
```

### Diferenças do fluxo atual

| Aspecto                 | Antigo                             | Novo                                  |
| ----------------------- | ---------------------------------- | ------------------------------------- |
| Onde os stages escrevem | Direto no `outputDir` (wrap mode)  | Sempre em `.temp/`                    |
| Quando valida           | Depois do swap (no outputDir real) | Antes do swap (no `.temp/`)           |
| Quando faz backup       | Antes dos stages (sempre)          | Só se houver mudanças                 |
| Sem mudanças            | Ainda faz backup + valida          | Encerra limpo, sem backup             |
| Restore on fail         | Sim — restore do backup            | Não precisa — output nunca foi tocado |

### generate-types Pipeline (5 stages)

```
runDatasourcePipeline(datasourceConfig)  ← called once per datasource
  │
  ├── Stage 1: fetch-schemas
  │    GET /api/dataSources/{key}/collections:list?paginate=false
  │    → filter by configured collections
  │    → extract enums from uiSchema.enum
  │    → extract relations from belongsTo/hasMany fields
  │    → context: { schemas, enums, relations }
  │
  ├── Stage 2: build-types
  │    → map schemas to TypeScript interfaces
  │    → apply split logic (e.g. t_pessoas → pessoa-fisica + pessoa-juridica)
  │    → build relation types
  │    → context: { typeDefinitions, splitDefinitions }
  │
  ├── Stage 3: generate-content
  │    → generate .ts source code per collection
  │    → generate zod schemas, labels, imports
  │    → generate collections index files
  │    → context: { generatedFiles }
  │
  ├── Stage 4: write-files
  │    → write all generated files to .temp/ (NOT to outputDir)
  │
  └── Stage 5: write-reports              ← NEW
       → generate generation-report.md per datasource (relations não resolvidas, collections não-splitadas, stats)
       → addJsonReport() into context.reports
       → context: pipeline produces reports object as finalResult
```

**generate-types itera sobre 2 datasources** (nocobase, ixc), rodando os 4 stages para cada. Output dirs:

- `src/generated/types/nocobase/`
- `src/generated/types/d_db_ixcsoft/`

### generate-custom-requests Pipeline (6 stages)

```
runCustomRequestsPipeline(config)
  │
  ├── Stage 1: load-config
  ├── Stage 2: load-schemas
  ├── Stage 3: fetch-entries
  ├── Stage 4: transform-entries
  ├── Stage 5: write-output      → write to .temp/
  └── Stage 6: context: { generatedFiles }
```

**Output dir:** `src/generated/custom-requests/`

### Error Handling

| Scenario                    | Behavior                                          |
| --------------------------- | ------------------------------------------------- |
| Stage fails mid-pipeline    | `.temp/` removido, output untouched, Error thrown |
| tsc/biome falha no `.temp/` | `.temp/` removido, output untouched, Error thrown |
| biome check -- write falha  | `.temp/` removido, output untouched, Error thrown |
| Diff sem mudanças           | `.temp/` removido, resumo impresso, encerra       |
| Diff com mudanças           | Backup → swap → resumo impresso                   |
| Um generator falha          | Outro ainda roda (tasks independentes no Listr2)  |
| Workspace já locked         | `isWorkspaceLocked()` → skip lock                 |

### PipelineExecutionContext

```typescript
interface PipelineExecutionContext<TRuntimeConfig, TPipelineContext = unknown> {
  task: ListrTaskWrapper; // Listr2 task for output (replaces Logger)
  tempDir: string; // .temp/{timestamp}-{id}/
  outputDirs: string[]; // e.g. ["src/generated/types/nocobase", ...]
  runtimeConfig: TRuntimeConfig; // resolved config (default + override)
  overrideConfig?: Partial<TRuntimeConfig>;
  reports: PipelineReportsContext; // reports acumulados via addJsonReport()
  pipelineContext?: TPipelineContext; // pipeline-specific data (schemas, files, etc.)
  finalResult?: unknown; // set by lifecycle after swap + reports .md generated
}
```

### Report Flow (shared lifecycle → pipelines)

1. **Lifecycle** creates `PipelineReportsContext` via `createReportsContext()` in `createExecutionContext()`
2. **Pipeline stages** call `addJsonReport(ctx.reports, {...})` to accumulate reports during execution
3. **Lifecycle** calls `renderReportsMarkdown(ctx.reports)` after swap, writes consolidated `.md`
4. **Pipeline** exposes `finalResult` containing the reports object + summary stats

---

## Tasks

### Task 1: Create directory skeleton + copy unchanged lib files ✅

- **Acceptance:** `scripts/generators/src/lib/` exists with all unchanged files. `nocobase-client.ts` has only `fetchCollections()`, `fetchPaginated()`, `fetchJson()` — no `fetchCollectionSample`, `fetchDistinctValues`, `inferEnumsFromData`, `inferFieldFromSample`, `fetchCollectionsFromDataSourceScope`, `fetchCollectionFieldsWithFallback`. `pipeline-assert.ts` moved to `lib/pipeline/assert.ts`. `pipeline-policy.ts` moved to `lib/pipeline/policy.ts`. All `@scripts/generators/src/lib/logging` imports removed.
- **Verify:** `pnpm typecheck` (expected to fail on missing imports until later tasks complete — just check no syntax errors in new files via `npx tsc --noEmit -p scripts/generators/tsconfig.json 2>&1 | head -20`)
- **Files created (~11):**
  - `scripts/generators/src/lib/http/http-client.ts` (copy, update imports)
  - `scripts/generators/src/lib/http/nocobase-client.ts` (copy, simplify — remove 6 methods, add `fetchCollections(dataSourceKey)`)
  - `scripts/generators/src/lib/io/atomic-writer.ts` (rewrite — keep only: `computeDiff()`, `backupDir()`, `swapTempToOutput()`, `removeDir()`, `runValidation()`. Remove: `AtomicWriteSession` class, wrap mode (`backup()`/`validateAndFinalize()`/`restore()`), `commit()`, `finalizeStagedWrite()`, permanent backup logic. The lifecycle in `lib/pipeline/lifecycle.ts` orchestrates backup→swap directly.)
  - `scripts/generators/src/lib/reports.ts` (copy, update imports)
  - `scripts/generators/src/lib/strings.ts` (copy, update imports)
  - `scripts/generators/src/lib/path-utils.ts` (copy, update imports)
  - `scripts/generators/src/lib/validation/tsc-validator.ts` (copy, update imports)
  - `scripts/generators/src/lib/validation/linter-runner.ts` (copy, update imports)
  - `scripts/generators/src/lib/pipeline/assert.ts` (move from `pipeline-assert.ts`)
  - `scripts/generators/src/lib/pipeline/policy.ts` (move from `pipeline-policy.ts`)
  - `scripts/generators/tsconfig.generated.json` (copy)

---

### Task 2: Create `lib/pipeline/` — context, lifecycle, runner ✅

- **Acceptance:** 3 new files in `lib/pipeline/`. `context.ts` exports `PipelineExecutionContext<TRuntime, TPipeline>` with `task: ListrTaskWrapper` (not `Logger`), `tempDir: string`, `reports: PipelineReportsContext` (no `atomicSessions`). `lifecycle.ts` exports `runStandardPipeline()` implementing: createContext (with reports) → lockWorkspace → runStages → validateTemp → diffTempVsOutput → (no changes → cleanup + renderReports + summary) OR (changes → backup → swap → renderReports → summary). `runner.ts` exports `runPipelineStages()`. No `import type { Logger }` anywhere.
- **Verify:** `npx tsc --noEmit -p scripts/generators/tsconfig.json 2>&1 | grep -c "error TS"` — should only have errors from missing downstream files, not from these 3 files themselves
- **Files created (3):**
  - `scripts/generators/src/lib/pipeline/context.ts` — `PipelineExecutionContext` with `task: ListrTaskWrapper`, `tempDir`, `outputDirs`, `runtimeConfig`, `pipelineContext?`
  - `scripts/generators/src/lib/pipeline/lifecycle.ts` — `runStandardPipeline()` implementing: lock → stages → validate .temp/ → diff → (backup+swap OR cleanup+summary)
  - `scripts/generators/src/lib/pipeline/runner.ts` — `runPipelineStages()`, `createOrchestrationRunner()`

---

### Task 3: Create `lib/io/locker.ts` — unified workspace locker ✅

- **Acceptance:** Single `locker.ts` exports `lockWorkspace()` and `unlockWorkspace()`. No `Logger` dependency. Merges behavior from 4 old files: `workspace-locker.ts`, `workspace-locker-adapter.ts`, and both pipeline-specific lockers.
- **Verify:** `grep -r "Logger" scripts/generators/src/lib/io/locker.ts` returns empty
- **Files created (1):**
  - `scripts/generators/src/lib/io/locker.ts` — merged from 4 old files

---

### Task 4: Create `lib/cli/` — types.ts (rewrite without Logger) ✅

- **Acceptance:** `types.ts` exports all needed CLI types. No `Logger` in any type signature. `GeneratorContext` has no `logger` field. `GeneratorOrchestrationStage` has optional `task?: ListrTaskWrapper`.
- **Verify:** `grep -c "Logger" scripts/generators/src/lib/cli/types.ts` returns 0
- **Files created (1):**
  - `scripts/generators/src/lib/cli/types.ts` — rewritten from old `types.ts`, remove all Logger references

---

### Task 5: Create `lib/cli/` — tasks.ts (merge 7 old files) ✅

- **Acceptance:** `tasks.ts` exports `createOrchestrationTasks()` and `createLockWorkspaceTask()`. Preparation e finalization são inlined no `lifecycle.ts` (não precisam de tasks CLI separadas). No `Logger` imports. Uses `ListrTaskWrapper` for output.
- **Verify:** `grep -c "Logger" scripts/generators/src/lib/cli/tasks.ts` returns 0
- **Files created (1):**
  - `scripts/generators/src/lib/cli/tasks.ts` — merged from old `task-presets.ts`, `orchestration-stage-runner.ts`, `orchestration-task.ts`, `logged-subtask.ts`, `generator-factory.ts`, `listr-task.ts`, `task-runtime.ts`

---

### Task 6: Create `lib/cli/` — runner.ts (merge 4 old files) ✅

- **Acceptance:** `runner.ts` exports `executeEntry()`, `createGeneratorOptions()`, `runGeneratorCli()`, `runOrchestrator()`. No `defaultLogger` import. Error handler uses `console.error`. `executeEntry()` does `isMain` check via `fileURLToPath` comparison.
- **Verify:** `grep -c "Logger\|defaultLogger" scripts/generators/src/lib/cli/runner.ts` returns 0
- **Files created (1):**
  - `scripts/generators/src/lib/cli/runner.ts` — merged from old `runner.ts`, `execute-entry.ts`, `defaults.ts`, `runner/orchestrator.ts`

---

### Task 7: Create `config/` — env.ts, datasources.ts, requests.ts ✅

- **Acceptance:** 3 files in `config/`. `env.ts` has no `resolveLogLevel()`, no `Logger` import, uses `console.error` for Zod errors. `datasources.ts` has no `preEnumAdapter`, `relationsAdapter`, `generateEnumReport` fields on any datasource. No `createIXCWikiAdapter` or `createIXCRelationsAdapter` imports. `requests.ts` has updated imports.
- **Verify:** `grep -rn "Logger\|adapter\|generateEnumReport\|resolveLogLevel" scripts/generators/src/config/` returns empty
- **Files created (3):**
  - `scripts/generators/src/config/env.ts` — from old `lib/env-config.ts`
  - `scripts/generators/src/config/datasources.ts` — from old `datasources.config.ts`
  - `scripts/generators/src/config/requests.ts` — from old `requests.config.ts`

---

### Task 8: Create `generate-types/@types/` — type definitions ✅

- **Acceptance:** 7 type files (not 8 — `script-adapters.ts` removed). `script-config.ts` has no `preEnumAdapter`, `relationsAdapter`, `generateEnumReport`, `enumCorrection` fields. `script.ts` has no adapter type imports. All imports point to new paths.
- **Verify:** `ls scripts/generators/src/pipelines/generate-types/@types/ | wc -l` returns 7
- **Files created (7):**
  - `scripts/generators/src/pipelines/generate-types/@types/nocobase.ts`
  - `scripts/generators/src/pipelines/generate-types/@types/nocobase-field-interfaces.ts`
  - `scripts/generators/src/pipelines/generate-types/@types/script-config.ts`
  - `scripts/generators/src/pipelines/generate-types/@types/script.ts`
  - `scripts/generators/src/pipelines/generate-types/@types/script-results.ts`
  - `scripts/generators/src/pipelines/generate-types/@types/script-data-source.ts`
  - `scripts/generators/src/pipelines/generate-types/@types/generation.ts`

---

### Task 9: Create `generate-types/utils/naming.ts` + `generate-types/content/` ✅

- **Acceptance:** `naming.ts` exists with updated imports. `content/` directory has 10 files (4 renamed from old `content-*` prefix, `index.ts` + `relation-inference.ts` removed — merged where needed). All imports use new paths. No `Logger` references.
- **Verify:** `ls scripts/generators/src/pipelines/generate-types/content/ | wc -l` returns 10
- **Files created (11):**
  - `scripts/generators/src/pipelines/generate-types/utils/naming.ts`
  - `scripts/generators/src/pipelines/generate-types/content/enums.ts` (was `content-enums.ts`)
  - `scripts/generators/src/pipelines/generate-types/content/interfaces.ts` (was `content-interfaces.ts`)
  - `scripts/generators/src/pipelines/generate-types/content/sorting.ts` (was `content-sorting.ts`)
  - `scripts/generators/src/pipelines/generate-types/content/assembly.ts` (was `content-assembly.ts`)
  - `scripts/generators/src/pipelines/generate-types/content/collections-index.ts`
  - `scripts/generators/src/pipelines/generate-types/content/split-index.ts`
  - `scripts/generators/src/pipelines/generate-types/content/import-injector.ts`
  - `scripts/generators/src/pipelines/generate-types/content/field-mapper.ts`
  - `scripts/generators/src/pipelines/generate-types/content/relations.ts`
  - `scripts/generators/src/pipelines/generate-types/content/content.ts` (was old main content file)

---

### Task 10: Create `generate-types/stages/` — 5 new pipeline stages ✅

- **Acceptance:** Exactly 5 files in `stages/`. `fetch-schemas.ts` uses single endpoint `GET /api/dataSources/${key}/collections:list?paginate=false`, extracts enums from `uiSchema.enum` and relations from `belongsTo`/`hasMany`. `build-types.ts` merges old `build-types` + `split-collections` logic. `generate-content.ts` calls `content/` modules. `write-files.ts` writes to `.temp/` using atomic-writer functions. `write-reports.ts` populates `context.reports` via `addJsonReport()` with data about generated types (unresolved relations, non-split collections, counts). No `Logger` references.
- **Verify:** `ls scripts/generators/src/pipelines/generate-types/stages/ | wc -l` returns 5
- **Files created (5):**
  - `scripts/generators/src/pipelines/generate-types/stages/fetch-schemas.ts`
  - `scripts/generators/src/pipelines/generate-types/stages/build-types.ts`
  - `scripts/generators/src/pipelines/generate-types/stages/generate-content.ts`
  - `scripts/generators/src/pipelines/generate-types/stages/write-files.ts`
  - `scripts/generators/src/pipelines/generate-types/stages/write-reports.ts`

---

### Task 11: Create `generate-types/pipeline.ts` + `index.ts` ✅

- **Acceptance:** `pipeline.ts` exports `createGenerateTypesTasks()`, `runDatasourcePipeline()`. Uses the 5 stages from Task 10. Validation (tsc + biome) happens in the shared lifecycle (`validateTemp()`), NOT inside the pipeline. The pipeline populates `context.reports` via `addJsonReport()` — the lifecycle handles `.md` generation via `renderReportsMarkdown()`. `index.ts` calls `executeEntry(import.meta.url, createGenerateTypesTasks)`. No `Logger` references.
- **Verify:** `pnpm typecheck` should now pass for generate-types pipeline (may still fail on custom-requests if not yet created)
- **Files created (2):**
  - `scripts/generators/src/pipelines/generate-types/pipeline.ts`
  - `scripts/generators/src/pipelines/generate-types/index.ts`

---

### Task 12: Create `generate-custom-requests/@types/` + `utils/` + `api/` ✅

- **Acceptance:** All `@types/` files copied with updated imports. `utils/` has `schema-loader.ts`, `schema-inference/` directory (4 files). No `workspace-locker.ts` — use shared `lib/io/locker.ts`. `api/client.ts` copied with updated imports. No `Logger` references.
- **Verify:** `grep -rn "Logger\|workspace-locker" scripts/generators/src/pipelines/generate-custom-requests/utils/ scripts/generators/src/pipelines/generate-custom-requests/api/` returns empty
- **Files created (~10):**
  - `scripts/generators/src/pipelines/generate-custom-requests/@types/collection-schema.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/@types/custom-request-api.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/@types/generated-registry.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/@types/script-config.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/collection-schema-loader.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/collection-schema-loader/case-utils.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/collection-schema-loader/file-scanner.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/collection-schema-loader/placeholders.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/collection-schema-loader/schema-parser.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/schema-inference/index.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/schema-inference/placeholder-resolver.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/schema-inference/tree-renderer.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/utils/schema-inference/value-inferrer.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/api/client.ts`

---

### Task 13: Create `generate-custom-requests/stages/` + `pipeline.ts` + `index.ts` ✅

- **Acceptance:** `stages/` has 6 files. `transform-entries.ts` merges old `transform-and-merge/` (6 files). `write-output.ts` merges old `write-output/` (9 files). `write-reports.ts` populates `context.reports` via `addJsonReport()` (analysis: entries without options/dataSourceKey). Consolidated markdown generated by shared lifecycle via `renderReportsMarkdown()`. `pipeline.ts` exports `createCustomRequestsTasks()`. `index.ts` calls `executeEntry()`. No `Logger`, no `workspace-locker` imports.
- **Verify:** `pnpm typecheck` should pass for full generators
- **Files created (8):**
  - `scripts/generators/src/pipelines/generate-custom-requests/stages/load-config.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/stages/load-schemas.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/stages/fetch-entries.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/stages/transform-entries.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/stages/write-output.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/stages/write-reports.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/pipeline.ts`
  - `scripts/generators/src/pipelines/generate-custom-requests/index.ts`

---

### Task 14: Create `src/index.ts` — main orchestrator ✅

- **Acceptance:** `src/index.ts` imports `runOrchestrator` from `lib/cli/runner` and pipeline task creators from each pipeline. No `defaultLogger` import. Error handler uses `console.error`.
- **Verify:** `pnpm typecheck` passes fully
- **Files created (1):**
  - `scripts/generators/src/index.ts`

---

### Task 15: Validate — format, typecheck, run generators, compare output ✅

- **Acceptance:** All 4 checks pass: `pnpm biome:fix`, `pnpm typecheck`, `pnpm generate-types`, `pnpm generate-custom-requests`. Generators validate `.temp/` (tsc + biome) before touching output. No changes → `.temp/` cleaned, no backup. Changes → `.backup/{timestamp}/` created, `.temp/` swapped to output. Generated output divergence ≤ 5%. `pnpm typecheck` on main project passes after generation. Review all divergent files manually.
- **Verify:** Run `pnpm generate-types` — check output says "validating .temp/" before any swap. Run `pnpm generate-custom-requests` — same check. `git diff --stat src/generated/` — count changed files vs total; divergence ≤ 5%. Then `pnpm typecheck` to confirm no broken imports.
- **Files created (0)**

---

### Task 16: Cleanup — remove old.generators + stage deletions ✅

- **Acceptance:** `scripts/old.generators/` deleted. All old `scripts/generators/` deletions staged. All new files staged. `pnpm typecheck` still passes. `pnpm generate-types` still works.
- **Verify:** `test -d scripts/old.generators && echo "FAIL" || echo "OK"` returns OK
- **Files created (0)**

---

## Verification Checklist

- [ ] `pnpm typecheck` passes
- [ ] `pnpm biome:fix` passes
- [ ] `pnpm generate-types` validates `.temp/` before touching output (tsc + biome on `.temp/`)
- [ ] `pnpm generate-custom-requests` validates `.temp/` before touching output
- [ ] No changes detected → `.temp/` cleaned, no backup created, output untouched
- [ ] Changes detected → backup saved to `.backup/{timestamp}/`, `.temp/` swapped to output
- [ ] generate-types output divergence ≤ 5% (`git diff src/generated/types/`)
- [ ] generate-custom-requests output identical (`git diff src/generated/custom-requests/` is clean)
- [ ] `pnpm typecheck` passes after generation (no broken imports from divergent types)
- [ ] All divergent files reviewed — changes are safe (e.g., enum values from `uiSchema.enum` vs old inference)
- [ ] No `lib/logging.ts` imports remain
- [ ] No adapter imports remain
- [ ] `scripts/old.generators/` removed

## Phase 2 (Not in scope)

- Update test imports to new file locations
- Run `pnpm test scripts/generators/`
- Fix broken tests
- Update `scripts/AGENTS.md` and pipeline AGENTS.md files
