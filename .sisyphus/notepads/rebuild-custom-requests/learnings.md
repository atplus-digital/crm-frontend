# Learnings - Rebuild Custom Requests

## 2026-04-24T22:08:15Z - Session Start

- Plano: `.sisyphus/plans/rebuild-custom-requests.md`
- 11 tasks (T1-T11) + 4 final verification (F1-F4)
- 4 waves paralelas
- Feature atual tem 30+ issues identificados

## T2: types.ts Creation (2026-04-24)

### What worked

- Centralized types file at `src/features/custom-requests/utils/types.ts` (following features/AGENTS.md pattern of `utils/` subfolder for types)
- `CustomRequestKey` as union of 3 manual keys: `criarContratoIxc`, `qualirunInfo`, `n8nCompras`
- `CustomRequestPayloads` and `CustomRequestResponses` as interface-based mapped types (not Zod inference - schemas don't exist yet)
- Helper types `PayloadFor<K>` and `ResponseFor<K>` work correctly with index access
- `CollectionFor` simplified to plain `string` (no unused generic param)
- Zod schemas (`customRequestOptionsSchema`, `templateContextSchema`) included for runtime validation of options/context

### Decisions

- Payload/Response types are explicit interfaces (not `z.infer`) because schemas.ts (T4) will define Zod schemas that validate these same shapes
- `CollectionFor` is `string` not `CollectionFor<K>` to avoid unused type parameter warning
- Types file placed in `utils/` subfolder per features/AGENTS.md mandatory structure

### Pre-existing issues found

- `errors.ts` at feature root has Zod v3 API mismatches (project uses newer Zod) — T3 will rewrite
- `app.tsx` has missing `nuqs` dependency — unrelated to this task

## T1: Script Structure Creation (2026-04-24)

### What worked

- Created `scripts/generate-custom-requests/` following `scripts/generate-types/` structural pattern
- 4 files: `index.ts`, `config.ts`, `src/@types/script-config.ts`, `src/utils/config.ts`
- Reused logger from `@scripts/generate-types/src/utils/logger` via path alias
- Config uses Zod v4 schema for env validation (CRM_NOCOBASE_URL, CRM_NOCOBASE_TOKEN)
- `parseConfig()` merges defaults with overrides, follows generate-types pattern
- Output dir defaults to `src/features/custom-requests` (where generated-registry.ts will live)
- Execution without env vars produces clear Zod validation error with exit code 1
- Zero LSP diagnostics on all 4 new files

### Decisions

- Minimal config (no datasources, no enum inference) — only URL + token + timeout needed
- `ScriptConfig` interface is flat (not nested like generate-types) — simpler scope
- `outputDir` included in config for future T4 (writer) to use
- Logger level set to `debug` by default for development visibility

## T2: API Client Implementation (2026-04-24)

### What worked

- Created `CustomRequestsApiClient` class at `scripts/generate-custom-requests/src/api/client.ts`
- Created `CustomRequestApiEntry` and `CustomRequestsListResponse` types at `scripts/generate-custom-requests/src/@types/custom-request-api.ts`
- Reused `HttpResponseError` pattern from `generate-types/src/utils/client.ts` (local copy — different module scope)
- Reused `getErrorBodyPreview()` helper (same pattern as generate-types)
- Reused `logger` from `@scripts/generate-types/src/utils/logger` via path alias
- Pagination loop: `pageSize=200`, increments page until `entries.length < pageSize`
- AbortController timeout from `config.timeoutMs` (same pattern as NocoBaseDataSourceClient)
- HTTP error handling: 401 → descriptive token error, 404 → endpoint not found, 500+ → server error
- Zero LSP diagnostics on both files

### Decisions

- `CustomRequestApiEntry.options` is optional (`?`) — some custom requests may not have options defined
- `pageSize=200` — reasonable default for custom requests (unlikely to have hundreds)
- `HttpResponseError` defined locally (not re-exported) — only used internally for error discrimination
- No transformation logic — returns raw API entries as-is (T3 transformer's job)
- Import order: type imports first (alphabetical by path), then value imports — satisfies Biome organizeImports

## T3 — Entry Transformer (2026-04-24)

- Created `GeneratedRegistryEntry` interface with `"z.any()"` marker string for payloadSchema
- Transformer maps API entry → registry entry, returning null for entries missing options/collectionName
- Uses shared logger from `@scripts/generate-types/src/utils/logger.ts`
- `transformAllEntries` sorts output alphabetically by key and logs transformed/skipped counts
- Pattern: marker string `"z.any()"` instead of actual Zod schema — writer stage outputs real `z.any()` call
