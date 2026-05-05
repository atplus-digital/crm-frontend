<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-04 -->

# AGENTS.md — generate-custom-requests

<!-- AGENTS-GENERATED:START overview -->

## Overview

Custom request registry generation pipeline — fetches NocoBase custom request entries via API, transforms them into typed registry entries, merges with manual overrides, and writes split + registry files.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                                          | Purpose                                                                                                      |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `index.ts`                                                    | Entry point — self-executing `void runGeneratorCli(...)` via Listr2                                          |
| `generate-custom-requests.ts`                                 | Orchestrator — context creation, workspace lock, stage runners, assertion                                    |
| `config.ts`                                                   | Merges `requests.config.ts` into `ScriptConfig`                                                              |
| `requests.config.ts`                                          | **CRITICAL**: Maps NocoBase request IDs → friendly names + manual request definitions                        |
| `api/client.ts`                                               | `CustomRequestsApiClient` — extends `NocoBaseApiClient`, paginates `customRequests:list`                     |
| `pipeline/orchestration/types.ts`                             | `GenerationContext` (extends `PipelineContext`), `GenerationStage`                                           |
| `pipeline/stages/load-config/index.ts`                        | `loadConfigStage()` — resolves env, validates config                                                         |
| `pipeline/stages/fetch-entries/index.ts`                      | `fetchEntriesStage()` — paginates NocoBase API                                                               |
| `pipeline/stages/load-schemas/index.ts`                       | `loadSchemasStage()` — loads generated collection schemas                                                    |
| `pipeline/stages/write-analysis-report/index.ts`              | `writeAnalysisReportStage()` — collects report entries into pipeline report context                          |
| `pipeline/stages/write-analysis-report/analysis-collector.ts` | `collectAnalysisReport()` — identifies entries without options/dataSourceKey                                 |
| `pipeline/stages/transform-and-merge/index.ts`                | `transformAndMergeStage()` — transforms API entries + merges manual overrides                                |
| `pipeline/stages/transform-and-merge/entry-transformer.ts`    | `transformApiEntryToRegistry()`, `transformAllEntries()` — entry normalization + schema enrichment           |
| `pipeline/stages/transform-and-merge/merge-registries.ts`     | `mergeRegistries()` — manual override merge logic                                                            |
| `pipeline/stages/write-output/index.ts`                       | `writeOutputStage()` — atomic write of registry + split files                                                |
| `pipeline/stages/write-output/registry-writer.ts`             | Generated `generated-registry.ts` content builder                                                            |
| `pipeline/stages/write-output/split-writer.ts`                | Split file writer + legacy path cleanup                                                                      |
| `pipeline/stages/write-output/path-utils.ts`                  | Shared `toSafePathSegment()` / `toDataSourceDir()`                                                           |
| `utils/config.ts`                                             | `parseConfig()` — validates requests (kebab-case), manual entries (required fields, valid HTTP methods)      |
| `utils/collection-schema-loader.ts`                           | `loadCollectionSchemas()`, `findSchema()`, `extractPlaceholderFields()` — schema loader from generated types |
| `utils/schema-inference/index.ts`                             | `inferPayloadSchema()` — main export                                                                         |
| `utils/schema-inference/value-inferrer.ts`                    | `inferValueZod()`, `inferObjectZod()` — Zod schema generation from payload data                              |
| `utils/schema-inference/placeholder-resolver.ts`              | `extractPlaceholderPathSegments()` — NocoBase placeholder handling                                           |
| `utils/schema-inference/tree-renderer.ts`                     | `renderTree()`, `toSafeObjectKey()` — tree-to-Zod rendering utilities                                        |
| `utils/workspace-locker.ts`                                   | Adapter wrapping shared locker for this pipeline                                                             |
| `@types/script-config.ts`                                     | `ScriptConfig`, `RequestsMap`, `ManualRegistryEntry`                                                         |
| `@types/collection-schema.ts`                                 | `CollectionSchemaMapping`, `SchemaLoadResult`, `SchemaRegistry`                                              |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **7-stage pipeline** (one directory per stage under `pipeline/stages/`): load-config → fetch-entries → load-schemas → write-analysis-report → transform-and-merge → write-output → render-consolidated-reports
- **Listr2 orchestration**: Stages composed via `createOrchestrationTask()` from shared `generator-cli`; no manual pipeline loops
- **`PipelineContext` + `GenerationContext`**: Context types live in `pipeline/orchestration/types.ts` (base opcional + contexto obrigatório por etapa)
- **Manual overrides**: `requests.config.ts` defines `manualRequests[]` with `key`, `name`, `collection`, `method`, `url`, `payloadSchema`; these override API entries on key collision
- **Split + registry output**: Each request gets its own file; `generated-registry.ts` imports split entries and inlines manual-only entries
- **NocoBase placeholders**: Schema inference handles `$nForm`, `$nPopupRecord`, `$nSelectedRecord`, `currentRecord`, `currentUser` via data-driven placeholder config
- **Schema enrichment**: When schemas are available in `src/generated/types/`, the pipeline uses them to generate better typed schemas with `.pick()` for placeholders
- **Portuguese errors**: All assertion messages in Portuguese (e.g., `"Nenhuma entrada gerada"`)
- **No file over 250 lines**: All modules split into focused, single-responsibility files

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START schema-enrichment -->

## Schema Enrichment (Collection Schemas)

The pipeline can use schemas generated by `generate-types` to create better typed `payloadSchema` entries. When a custom request references a collection that has a generated schema, the pipeline will:

1. **Load schemas**: Scans `src/generated/types/` directories to build a registry of available schemas
2. **Match collections**: Maps `collectionName` + `dataSourceKey` to the corresponding generated schema
3. **Extract fields**: Parses `payloadData` to identify which fields are used from placeholders (`currentRecord`, `$nForm`, etc.)
4. **Generate `.pick()` schemas**: Creates schema code like `NegociacoesSchema.pick({ id: true, f_titulo: true })` instead of `z.unknown()`

### Output Example

**Before (without schema enrichment):**

```typescript
payloadSchema: z.object({
  currentRecord: z.object({
    id: z.unknown(),
    f_titulo: z.unknown(),
  }),
}),
```

**After (with schema enrichment):**

```typescript
payloadSchema: z.object({
  currentRecord: NegociacoesSchema.pick({
    id: true,
    f_titulo: true,
  }),
}),
```

### Missing Schemas Report

If a custom request references a collection without a generated schema, the pipeline will:

1. Use fallback schema inference (`z.unknown()`)
2. Log a warning during transformation
3. Include missing schema details in the consolidated pipeline report markdown

```bash
================================================================
SCHEMAS DE COLLECTIONS NÃO ENCONTRADOS:
================================================================
  - Collection: "minha_collection" (datasource: main)
    Essas collections não têm schema gerado em src/generated/types/.
    Considere adicionar ao datasources.config.ts do generate-types.
================================================================
```

<!-- AGENTS-GENERATED:END schema-enrichment -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                                         | Reference file                                             |
| ----------------------------------------------- | ---------------------------------------------------------- |
| Entry point wiring (Listr2)                     | `index.ts`                                                 |
| Orchestration (prepare/lock/orchestrate/assert) | `generate-custom-requests.ts`                              |
| API client with pagination                      | `api/client.ts`                                            |
| Entry transformation                            | `pipeline/stages/transform-and-merge/entry-transformer.ts` |
| Schema loader                                   | `utils/collection-schema-loader.ts`                        |
| Registry merge (manual overrides)               | `pipeline/stages/transform-and-merge/merge-registries.ts`  |
| Zod schema inference                            | `utils/schema-inference/value-inferrer.ts`                 |
| Placeholder resolution                          | `utils/schema-inference/placeholder-resolver.ts`           |
| Config validation                               | `utils/config.ts`                                          |
| Split file writer                               | `pipeline/stages/write-output/split-writer.ts`             |
| Pipeline context types                          | `pipeline/orchestration/types.ts`                          |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
pnpm generate-custom-requests              # Generate custom request registry
pnpm test scripts/generators/src/pipelines/generate-custom-requests # Run tests
```

<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START adding-requests -->

## Adding New Custom Requests

### API-managed (NocoBase custom requests)

1. Create the custom request in NocoBase admin
2. Note the request ID (e.g., `23btjo9ohrr`)
3. Add mapping in `requests.config.ts`: `"23btjo9ohrr": "my-request-name"`
4. Run `pnpm generate-custom-requests`

### Manual (non-NocoBase requests)

1. Add entry to `manualRequests[]` in `requests.config.ts` with `key`, `name`, `collection`, `method`, `url`, `payloadSchema`
2. Run `pnpm generate-custom-requests`

### Removing a request

1. Remove the mapping from `requests.config.ts`
2. Run `pnpm generate-custom-requests` (auto-cleanup removes stale files)

<!-- AGENTS-GENERATED:END adding-requests -->

<!-- AGENTS-GENERATED:START testing -->

## Testing

- **Framework**: Vitest with Portuguese test descriptions
- **Test location**: `test/` (7 files)
- **Key tests**: `config.test.ts`, `merge-logic.test.ts`, `schema-inference.test.ts`, `entry-transformer.test.ts`
- **Config mocking**: Uses `vi.hoisted()` + getter pattern (same as generate-types)
- **Run**: `pnpm test scripts/generators/src/pipelines/generate-custom-requests`

<!-- AGENTS-GENERATED:END testing -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                 | ✅ Use                                                |
| ---------------------------------------- | ----------------------------------------------------- |
| Editing generated registry files         | Update `requests.config.ts` + regenerate              |
| Hardcoding NocoBase request IDs in code  | Map in `requests.config.ts`, import generated types   |
| Skipping generation after config changes | **ALWAYS** run `pnpm generate-custom-requests`        |
| Adding pipeline-specific logic to `lib/` | Keep in pipeline's own `pipeline/stages/` or `utils/` |

<!-- AGENTS-GENERATED:END anti-patterns -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shared library conventions, see `generators/src/AGENTS.md`. For generator framework, see `generators/AGENTS.md`.
