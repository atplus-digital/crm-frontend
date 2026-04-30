<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-30 -->

# AGENTS.md — generate-types

<!-- AGENTS-GENERATED:START overview -->

## Overview

TypeScript type generation pipeline — fetches NocoBase/IXC collection schemas, infers enums and relations, generates typed interfaces with split files, and validates output via tsc + Biome.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

### Entry & Orchestration

| File                    | Purpose                                                                                       |
| ----------------------- | --------------------------------------------------------------------------------------------- |
| `index.ts`              | Self-executing entry point — wires 6 Listr2 tasks (prepare/backup/orchestrate/assert/cleanup) |
| `generate-types.ts`     | Stage runners, post-pipeline task, `runGenerateTypes()` standalone runner                     |
| `context.ts`            | `GenerateTypesExecutionContext` interface + factory                                           |
| `backup.ts`             | Atomic backup/restore/cleanup for output directories                                          |
| `assert.ts`             | `assertGenerateTypesResult()` — validates pipeline output                                     |
| `config.ts`             | Merges `datasources.config.ts` into `ScriptConfig`                                            |
| `datasources.config.ts` | Datasource definitions (nocobase + ixc with adapters, splits, etc.)                           |

### Orchestration (outer pipeline — 5 stages)

| File                                                   | Purpose                                                       |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| `pipeline/orchestration/types.ts`                      | `GenerationContext`, `GenerationStage`, `DatasourceRunResult` |
| `pipeline/orchestration/stages/load-config.ts`         | Stage 1: parse config                                         |
| `pipeline/orchestration/stages/resolve-datasources.ts` | Stage 2: filter valid datasources                             |
| `pipeline/orchestration/stages/run-datasources.ts`     | Stage 3: run inner pipeline per datasource (concurrent)       |
| `pipeline/orchestration/stages/run-post-pipeline.ts`   | Stage 4: tsc validation + Biome lint (parallel)               |
| `pipeline/orchestration/stages/format-result.ts`       | Stage 5: format result summary                                |

### Datasource-pipeline (inner pipeline — 9 stages per datasource)

| File                                               | Purpose                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| `pipeline/datasource-pipeline/types.ts`            | `PipelineContext`, `PipelineStage`, stage-specific context extensions |
| `pipeline/datasource-pipeline/context-builder.ts`  | `createInitialContext()`                                              |
| `pipeline/datasource-pipeline/default-pipeline.ts` | Composes 9 stages sequentially                                        |

**Stages** (in execution order):

| File                                              | Purpose                                                 |
| ------------------------------------------------- | ------------------------------------------------------- |
| `pipeline/stages/fetch-collections/index.ts`      | Stage 1: fetch collection list from API                 |
| `pipeline/stages/fetch-relations/index.ts`        | Stage 2: fetch relations via adapter                    |
| `pipeline/stages/build-types/index.ts`            | Stage 3: fetch fields + build types (relations + enums) |
| `pipeline/stages/apply-enum-adapter/index.ts`     | Stage 4: apply IXC Wiki enum adapter                    |
| `pipeline/stages/infer-enums/index.ts`            | Stage 5: sample-based enum inference                    |
| `pipeline/stages/apply-enum-corrections/index.ts` | Stage 6: apply manual enum corrections                  |
| `pipeline/stages/split-collections/index.ts`      | Stage 7: split collections into groups                  |
| `pipeline/stages/generate-content/index.ts`       | Stage 8: generate TS source code                        |
| `pipeline/stages/write-files/index.ts`            | Stage 9: write files to disk                            |

### Post-Pipeline

| File                                          | Purpose                                      |
| --------------------------------------------- | -------------------------------------------- |
| `pipeline/post-pipeline.ts`                   | `runPostPipeline()` — tsc + Biome validation |
| `pipeline/post-pipeline/writer.ts`            | `writeGeneratedFile()` — single file writer  |
| `pipeline/post-pipeline/file-editor-check.ts` | Detects files being edited (vim/VSCode)      |

### Types, Adapters, Utils

| File / Directory                      | Purpose                                            |
| ------------------------------------- | -------------------------------------------------- |
| `@types/nocobase.ts`                  | NocoBase API types (Collection, Field, etc.)       |
| `@types/nocobase-field-interfaces.ts` | `NocoBaseFieldInterface` union type                |
| `@types/script-config.ts`             | `ScriptConfig`, `RuntimeConfig`, datasource config |
| `@types/script-results.ts`            | `SingleFileResult`, `MultiFileResult`, etc.        |
| `@types/script-data-source.ts`        | `DataSourceClient` interface                       |
| `@types/script-adapters.ts`           | `EnumAdapter`, `RelationsAdapter`                  |
| `@types/generation.ts`                | `GeneratedTypes`, `RelationInfo`, `EnumOption`     |
| `adapters/ixc-relations-data/`        | Hardcoded IXC relation maps (split by entity)      |
| `adapters/ixc-relations-adapter.ts`   | Wraps relation map into `RelationsAdapter`         |
| `adapters/ixc-wiki-scraper.ts`        | IXC Wiki enum scraper via `EnumAdapter`            |
| `adapters/enum-inference.config.ts`   | Enum inference heuristics (thresholds, blacklists) |
| `utils/client.ts`                     | `NocoBaseDataSourceClient` (API + fallback)        |
| `utils/config.ts`                     | `parseConfig()` — config validation + merge        |
| `utils/naming.ts`                     | PascalCase, kebab-case, collection type names      |
| `utils/enum-cache.ts`                 | File-based cache for IXC Wiki enum data            |
| `utils/concurrency.ts`                | `mapWithConcurrency()` parallel mapper             |
| `utils/wiki-parser.ts`                | IXC Wiki HTML parser                               |
| `utils/workspace-locker.ts`           | VSCode readonly locker adapter                     |
| `utils/create-dataSource-client.ts`   | `DataSourceClient` factory                         |
| `utils/load-config.ts`                | NocoBase env credentials loader                    |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **Two-level pipeline**: 6 Listr2 tasks (outer) → 5 orchestration stages → 9 inner stages per datasource
- **Immutable context**: Each inner stage receives `Readonly<C>` and returns `{ ...ctx, newField }`
- **No barrel in lib**: Pipeline-specific utilities stay in `utils/`, shared lib in `generators/src/lib/`
- **Portuguese messages**: All user-facing logs and errors in Portuguese
- **Atomic writes**: Output directories are backed up before generation; restored on failure
- **Concurrent datasources**: Inner pipeline runs per datasource concurrently via Listr2 subtasks

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                          | Reference file                                           |
| -------------------------------- | -------------------------------------------------------- |
| Entry point (Listr2 task wiring) | `index.ts`                                               |
| Orchestrator (stage runners)     | `generate-types.ts`                                      |
| Orchestration stage (factory)    | `pipeline/orchestration/stages/load-config.ts`           |
| Inner pipeline stage             | `pipeline/stages/fetch-collections/index.ts`             |
| Datasource configuration         | `datasources.config.ts`                                  |
| IXC adapter                      | `adapters/ixc-wiki-scraper.ts`                           |
| API client with fallback         | `utils/client.ts`                                        |
| Enum inference heuristics        | `pipeline/stages/infer-enums/enum-inference-analysis.ts` |
| Content generation               | `pipeline/stages/generate-content/index.ts`              |
| Naming utilities                 | `utils/naming.ts`                                        |
| Atomic write                     | `pipeline/post-pipeline/writer.ts`                       |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                       | ✅ Use                                                   |
| ---------------------------------------------- | -------------------------------------------------------- |
| Adding new universal code to `utils/client.ts` | Split into focused modules when growing                  |
| Editing generated files manually               | Update datasource config + regenerate                    |
| Importing from sibling pipeline                | Pipelines are independent; only share via `lib/`         |
| Adding pipeline logic to `generators/src/lib/` | One-way: pipelines → lib, not reverse                    |
| Hardcoding output paths                        | Derive from `config.outputDir` or datasource `outputDir` |

<!-- AGENTS-GENERATED:END anti-patterns -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shared library conventions, see `generators/src/AGENTS.md`.
For the generator framework, see `generators/AGENTS.md`.
