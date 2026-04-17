<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-17 -->

# AGENTS.md — scripts/generate-types

<!-- AGENTS-GENERATED:START overview -->

## Overview

Type generation pipeline — fetches NocoBase + IXC schemas via API, generates TypeScript types with field mapping, enum extraction, and auto-cleanup.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                 | Purpose                                                                               |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| `datasources.config.ts`              | **CRITICAL**: Datasource definitions (NocoBase + IXC), collection lists, split config |
| `src/generate-types.ts`              | Main entry point — orchestrates fetch, generate, write, cleanup                       |
| `src/api-client.ts`                  | NocoBase API client with retry logic                                                  |
| `src/generation/field-mapper.ts`     | NocoBase field → TypeScript type mapping                                              |
| `src/generation/enum-extractor.ts`   | Extracts enums from select/radio/multi-select fields                                  |
| `src/generation/type-generator.ts`   | Generates TypeScript interfaces from schemas                                          |
| `src/generation/writer.ts`           | Writes generated files to `src/generated/`                                            |
| `src/generation/workspace-locker.ts` | Prevents concurrent type generation                                                   |
| `src/utils/logger.ts`                | Structured logger with levels                                                         |
| `src/utils/config.ts`                | Config loader with env validation                                                     |
| `test/`                              | 22 test files (comprehensive coverage)                                                |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **Dual datasource**: NocoBase (main) + IXC (external `d_db_ixcsoft`) — both configured in `datasources.config.ts`.
- **Split collections**: Large collections split into individual files (`pessoas.ts`, `empresas.ts`, etc.) — defined in config.
- **Sample field fallback**: IXC datasource enables `enableSampleFieldFallback: true` — infers types from sample data when schema incomplete.
- **Auto-cleanup**: Removes stale collection files when collections are deleted from NocoBase.
- **Workspace locking**: `workspace-locker.ts` prevents concurrent generation (avoids race conditions).
- **Biome auto-fix**: `runBiomeFix()` called after generation — generated code is pre-formatted.
- **Portuguese test messages**: All test descriptions in Portuguese (project convention).

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                      | Reference file                     |
| ---------------------------- | ---------------------------------- |
| API client with retry        | `src/api-client.ts`                |
| Field mapper (NocoBase → TS) | `src/generation/field-mapper.ts`   |
| Enum extractor               | `src/generation/enum-extractor.ts` |
| Test factory helpers         | `test/setup.ts`                    |
| Config mocking pattern       | `test/utils/config.test.ts`        |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
# Generate types (CRITICAL — run after NocoBase schema changes)
pnpm generate-types

# Run tests
pnpm test scripts/generate-types

# Run single test file
pnpm test scripts/generate-types/test/generation/field-mapper.test.ts
```

<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START datasource-config -->

## Datasource Configuration

### NocoBase (Main)

```typescript
{
  name: "nocobase",
  dataSource: "main",
  outputDir: "src/generated/nocobase",
  splitCollections: [
    "users",
    "t_negociacoes",
    "t_empresas",
    "t_pessoas",
    "t_crm_troca_titularidade",
    "t_registros_de_contato",
  ],
}
```

### IXC ERP (External)

```typescript
{
  name: "ixc",
  dataSource: "d_db_ixcsoft",  // External datasource in NocoBase
  outputDir: "src/generated/ixc",
  collections: [
    "cliente",
    "cliente_contrato",
    "linha_mvno",
    "vd_contratos_produtos",
    "fn_areceber",
    "su_ticket",
  ],
  enableSampleFieldFallback: true,  // Infer from sample data if schema incomplete
}
```

**Adding New Collections:**

1. Add to `splitCollections` (NocoBase) or `collections` (IXC) in `datasources.config.ts`
2. Run `pnpm generate-types`
3. Import from `#/generated/nocobase/<collection>` or `#/generated/ixc/<collection>`

<!-- AGENTS-GENERATED:END datasource-config -->

<!-- AGENTS-GENERATED:START environment -->

## Environment Variables

Required in `.env.local` (copy from `.env.example`):

```bash
# Type generation
CRM_NOCOBASE_URL=https://your-nocobase-instance.com
CRM_NOCOBASE_TOKEN=your-api-token
CRM_NOCOBASE_TIMEOUT_MS=15000

# Runtime (optional)
VITE_NOCOBASE_URL=https://your-nocobase-instance.com
VITE_LOCAL_STORAGE_BASE_KEY=atplus-crm
```

**CI Auto-Setup:** `.github/workflows/deploy-test-coverage.yaml` copies `.env.example` → `.env.local` if missing.

<!-- AGENTS-GENERATED:END environment -->

<!-- AGENTS-GENERATED:START testing -->

## Testing

**Test Structure:**

- `test/setup.ts` — Shared utilities, mock factories (`createMockField`, `createMockGeneratedTypes`)
- `test/generation/` — Field mapper, enum extractor, type generator tests
- `test/utils/` — Config, logger, writer utilities tests
- `test/client.test.ts` — API client with fetch mocking

**Mocking Pattern:**

```typescript
// Hoisted config for modules with getters
const { getMockConfig, setMockConfig } = vi.hoisted(() => {
  let mockConfig = {
    /* ... */
  };
  return {
    getMockConfig: () => mockConfig,
    setMockConfig: (newConfig) => {
      mockConfig = { ...mockConfig, ...newConfig };
    },
  };
});

vi.mock("@scripts/generate-types/config", () => ({
  get config() {
    return getMockConfig();
  },
}));
```

**Test Command:**

```bash
pnpm test scripts/generate-types  # Run all script tests
```

<!-- AGENTS-GENERATED:END testing -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                      | ✅ Use                                                           |
| --------------------------------------------- | ---------------------------------------------------------------- |
| Manual type definitions for collections       | Run `pnpm generate-types` — import from `src/generated/`         |
| Editing generated files                       | Update `datasources.config.ts` + regenerate                      |
| Hardcoded collection names                    | Use generated types — TypeScript enforces validity               |
| Skipping type generation after schema changes | **ALWAYS** run `pnpm generate-types` after NocoBase changes      |
| Direct SDK calls in services                  | Use `nocobaseRepository` / `ixcRepository` from `#/repositories` |

<!-- AGENTS-GENERATED:END anti-patterns -->

<!-- AGENTS-GENERATED:START architecture -->

## Architecture Notes

**Generation Pipeline:**

```
1. Load config (datasources.config.ts)
2. Acquire workspace lock (prevent concurrent runs)
3. For each datasource:
   a. Connect via API client
   b. Fetch collection schemas
   c. Map fields → TypeScript types (field-mapper.ts)
   d. Extract enums (enum-extractor.ts)
   e. Generate interfaces (type-generator.ts)
   f. Write files (writer.ts)
4. Auto-cleanup (remove stale collection files)
5. Run Biome auto-fix
6. Release lock
```

**Field Mapping:**

- NocoBase `string` → TypeScript `string`
- NocoBase `integer` / `number` → `number`
- NocoBase `boolean` → `boolean`
- NocoBase `date` / `datetime` → `string` (ISO)
- NocoBase `select` / `radio` → Enum (extracted values)
- NocoBase `multiSelect` → `Array<enum>`
- NocoBase `relationship` → Relation metadata (for appends)

<!-- AGENTS-GENERATED:END architecture -->

## When instructions conflict

The nearest `AGENTS.md` wins. For repository usage, see `src/repositories/AGENTS.md`. For generated type usage, see root `AGENTS.md`.
