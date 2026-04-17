<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-17 -->

# AGENTS.md — scripts

<!-- AGENTS-GENERATED:START overview -->

## Overview

Automation scripts for development workflow — type generation, build helpers, and CI utilities.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File | Purpose |
|------|---------|
| `generate-types/index.ts` | Main type generation script for NocoBase/IXC collections |
| `generate-types/datasources.config.ts` | Configuration for data sources and collection filtering |
| `generate-types/src/` | Generation logic (field mapping, type extraction, code writing) |
| `generate-types/test/` | Test suite for generation utilities (21 test files) |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Scripts are written in TypeScript and executed with `tsx`
- Test files use Vitest with `vi.mock()` for module mocking
- Configuration is separated from logic (`datasources.config.ts`)
- Scripts use structured logging with `createLogger()` from `#/lib/logger`
- All scripts are idempotent — safe to run multiple times

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
# Generate TypeScript types from NocoBase/IXC schemas
pnpm generate-types

# Run script tests only
pnpm test scripts/generate-types

# Run script with logging
pnpm tsx scripts/generate-types/index.ts --verbose
```

<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START type-generation -->

## Type Generation (`generate-types/`)

**Purpose:** Auto-generate TypeScript interfaces from NocoBase and IXC collection schemas.

**Workflow:**
1. Reads `datasources.config.ts` for API endpoints and collection filters
2. Fetches collection schemas from both data sources
3. Extracts field definitions, types, enums, and relations
4. Generates `.ts` files in `src/generated/nocobase/` and `src/generated/ixc/`
5. Updates barrel exports (`index.ts`) automatically

**Config structure:**
```typescript
// datasources.config.ts
export const datasources = {
  nocobase: {
    url: process.env.NOCOBASE_URL,
    token: process.env.NOCOBASE_TOKEN,
    collections: ['t_pessoas', 't_empresas', ...],
  },
  ixc: {
    url: process.env.IXC_URL,
    token: process.env.IXC_TOKEN,
    collections: ['cliente', 'cliente_contrato', ...],
  },
};
```

**When to modify:**
- Adding new collections to track
- Changing field type mappings
- Customizing enum extraction
- Adding relation type generation

<!-- AGENTS-GENERATED:END type-generation -->

<!-- AGENTS-GENERATED:START testing -->

## Testing

**Framework:** Vitest
**Location:** `scripts/generate-types/test/`
**Files:** 21 test files covering generation logic and utilities

**Test utilities:**
```typescript
// scripts/generate-types/test/setup.ts
import { createMockField, createMockCollectionTypesMap } from "@scripts/generate-types/test/setup";

const field = createMockField({ name: "name", type: "string", interface: "input" });
const typesMap = createMockCollectionTypesMap();
```

**Mocking pattern:**
```typescript
vi.mock("node:fs", () => ({
  existsSync: vi.fn(),
  mkdirSync: vi.fn(),
  writeFileSync: vi.fn(),
  readFileSync: vi.fn(),
}));
```

**Run tests:**
```bash
pnpm test scripts/generate-types
```

<!-- AGENTS-GENERATED:END testing -->

<!-- AGENTS-GENERATED:START best-practices -->

## Best Practices

- Keep scripts focused on single responsibility
- Use TypeScript for type safety
- Write tests for generation logic (high coverage)
- Log progress and errors with `createLogger()`
- Make scripts idempotent and safe to re-run
- Separate configuration from implementation
- Use absolute paths with `@scripts/` alias

<!-- AGENTS-GENERATED:END best-practices -->

<!-- AGENTS-GENERATED:START troubleshooting -->

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Generation fails with 401 | Verify `NOCOBASE_TOKEN` and `IXC_TOKEN` in `.env` |
| Missing collections in output | Add to `datasources.config.ts` collections array |
| Type errors after generation | Check for field type changes in source schemas |
| Tests fail with module errors | Ensure `vi.mock()` calls are at top of file before imports |

<!-- AGENTS-GENERATED:END troubleshooting -->

## When instructions conflict

The nearest `AGENTS.md` wins.
