<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-30 -->

# AGENTS.md — generate-custom-requests

<!-- AGENTS-GENERATED:START overview -->

## Overview

Custom request registry generation pipeline — fetches NocoBase custom request entries via API, transforms them into typed registry entries, merges with manual overrides, and writes split + registry files.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                               | Purpose                                                                                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `index.ts`                         | Entry point — self-executing `void runGeneratorCli(...)`                                                |
| `generate-custom-requests.ts`      | Orchestrator — context creation, workspace lock, stage runners, assertion                               |
| `config.ts`                        | Merges `requests.config.ts` into `ScriptConfig`                                                         |
| `requests.config.ts`               | **CRITICAL**: Maps NocoBase request IDs → friendly names + manual request definitions                   |
| `api/client.ts`                    | `CustomRequestsApiClient` — extends `NocoBaseApiClient`, paginates `customRequests:list`                |
| `transformer/entry-transformer.ts` | Transforms API entries → `GeneratedRegistryEntry`; normalizes payload data                              |
| `writer/registry-writer.ts`        | Generates `generated-registry.ts` (split entries imported, inline entries embedded)                     |
| `writer/split-writer.ts`           | Writes individual split files (`nocobase/<collection>/<name>.ts`); cleans legacy paths                  |
| `writer/analysis-writer.ts`        | Writes `analysis-report.json` (entries without options/dataSourceKey)                                   |
| `utils/config.ts`                  | `parseConfig()` — validates requests (kebab-case), manual entries (required fields, valid HTTP methods) |
| `utils/merge-registries.ts`        | Merges API-generated + manual entries (manual overrides win on key collision)                           |
| `utils/schema-inference.ts`        | Infers Zod schemas from payload data; handles NocoBase placeholders                                     |
| `utils/workspace-locker.ts`        | Adapter wrapping shared locker for this pipeline                                                        |
| `pipeline/orchestration/types.ts`  | `GenerationContext`, `GenerationStage`, `runGenerationPipeline()`                                       |
| `@types/script-config.ts`          | `ScriptConfig`, `RequestsMap`, `ManualRegistryEntry`                                                    |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **5-stage pipeline**: load-config → fetch-entries → write-analysis-report → transform-and-merge → write-output
- **Manual overrides**: `requests.config.ts` defines `manualRequests[]` with `key`, `name`, `collection`, `method`, `url`, `payloadSchema`; these override API entries on key collision
- **Split + registry output**: Each request gets its own file; `generated-registry.ts` imports split entries and inlines manual-only entries
- **NocoBase placeholders**: Schema inference handles `$nForm`, `$nPopupRecord`, `$nSelectedRecord`, `currentRecord`, `currentUser`
- **Portuguese errors**: All assertion messages in Portuguese (e.g., `"Nenhuma entrada gerada"`)

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                                         | Reference file                     |
| ----------------------------------------------- | ---------------------------------- |
| Entry point wiring                              | `index.ts`                         |
| Orchestration (prepare/lock/orchestrate/assert) | `generate-custom-requests.ts`      |
| API client with pagination                      | `api/client.ts`                    |
| Entry transformation                            | `transformer/entry-transformer.ts` |
| Registry merge (manual overrides)               | `utils/merge-registries.ts`        |
| Zod schema inference                            | `utils/schema-inference.ts`        |
| Config validation                               | `utils/config.ts`                  |
| Split file writer                               | `writer/split-writer.ts`           |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
pnpm generate-custom-requests              # Generate custom request registry
pnpm test scripts/generate-custom-requests # Run tests
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
- **Run**: `pnpm test scripts/generate-custom-requests`

<!-- AGENTS-GENERATED:END testing -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                 | ✅ Use                                              |
| ---------------------------------------- | --------------------------------------------------- |
| Editing generated registry files         | Update `requests.config.ts` + regenerate            |
| Hardcoding NocoBase request IDs in code  | Map in `requests.config.ts`, import generated types |
| Skipping generation after config changes | **ALWAYS** run `pnpm generate-custom-requests`      |
| Adding pipeline-specific logic to `lib/` | Keep in pipeline's own `utils/`                     |

<!-- AGENTS-GENERATED:END anti-patterns -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shared library conventions, see `generators/src/AGENTS.md`. For generator framework, see `generators/AGENTS.md`.
