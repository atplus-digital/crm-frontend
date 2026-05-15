<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-15 -->

# AGENTS.md — scripts/

<!-- AGENTS-GENERATED:START overview -->

## Overview

Automation scripts for development workflow — type generation from NocoBase/IXC schemas, custom request registry generation, and incremental type checking for staged files.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START structure -->

## Structure

```
scripts/
├── code-check/              # Standalone git-hook utilities
│   └── typecheck-staged.ts  # Incremental tsc for staged .ts/.tsx files
├── generators/              # Code generation framework
│   ├── tsconfig.generated.json  # TSConfig for validating generated output
│   └── src/
│       ├── index.ts              # Main entry: runOrchestrator
│       ├── generator-registry.ts # Pipeline registry
│       ├── config/               # Datasource + custom request config
│       │   ├── datasources.ts
│       │   └── requests.ts
│       ├── lib/                  # Shared library (context, lifecycle, I/O, HTTP, utils, validation)
│       ├── pipelines/
│       │   ├── generate-types/            # NocoBase + IXC type generation (5 stages)
│       │   └── generate-custom-requests/  # Custom request registry generation (6 stages)
│       └── AGENTS.md        # Shared library conventions
└── shared/                   # Shared utilities extracted from generators
    ├── http/                 # HTTP client, NocoBase client
    ├── utils/                # Environment utilities
    └── types.ts              # Shared script types
```

<!-- AGENTS-GENERATED:END structure -->

<!-- AGENTS-GENERATED:START where-to-look -->

## Where to Look

| Task                                   | Location                                             | Notes                                                          |
| -------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------- |
| Add a new NocoBase/IXC collection type | `generators/src/pipelines/generate-types/`           | Add to `datasources.config.ts`, then run `pnpm generate:types` |
| Add a new custom request               | `generators/src/pipelines/generate-custom-requests/` | Add to `requests.config.ts`, then run `pnpm generate:requests` |
| Fix generation pipeline bugs           | `generators/src/pipelines/<pipeline>/`               | Follow the stage-by-stage pipeline pattern                     |
| Add shared utility                     | `shared/`                                            | HTTP clients, env utils — extracted from generators/src/lib    |
| Fix incremental type checking          | `code-check/typecheck-staged.ts`                     | Standalone, no dependency on generators                        |
| Modify pipeline lifecycle              | `generators/src/lib/lifecycle/`                      | `runStandardPipeline` in `lifecycle.ts`                        |
| Modify pipeline context/reports        | `generators/src/lib/pipeline/`                       | `PipelineExecutionContext` + `addJsonReport`                   |

<!-- AGENTS-GENERATED:END where-to-look -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
pnpm generate                    # Run all generators (types + custom requests)
pnpm generate:types              # Generate TypeScript types from NocoBase + IXC schemas
pnpm generate:requests           # Generate custom request registry from NocoBase API
pnpm generate                    # Run all generators (same as above)
pnpm biome:scripts               # Format/lint generators code
# Tests: removed with old.generators/ — Phase 2 TBD
```

<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START conventions -->

## Conventions

- **Self-executing entry points**: `executeEntry(import.meta.url, ...)` at module level
- **Path alias**: `@scripts/*` → `./scripts/*` (configured in root `tsconfig.json`)
- **Portuguese messages**: All user-facing strings in Portuguese
- **Zod-validated env**: NocoBase credentials loaded from `.env.local` via `config/env.ts`
- **No barrel exports in lib**: Import directly from specific files (not index.ts)
- **One-way dependency**: `lib/` → pipelines, never reverse
- **No Logger**: Listr2 `task` replaces Logger for output
- **No adapters**: Enum inference from `uiSchema.enum` only — no IXC wiki adapters or data inference

<!-- AGENTS-GENERATED:END conventions -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                       | ✅ Use                                            |
| ---------------------------------------------- | ------------------------------------------------- |
| Manually editing generated files               | Update config + regenerate                        |
| Importing from pipeline internals in `lib/`    | Keep `lib/` pure, pipeline-free                   |
| Running type generation without workspace lock | Pipeline auto-locks via `locker.ts`               |
| Writing directly to outputDir in stages        | Always write to `.temp/` — lifecycle handles swap |

<!-- AGENTS-GENERATED:END anti-patterns -->

<!-- AGENTS-GENERATED:START notes -->

## Notes

- `code-check/typecheck-staged.ts` is invoked by lint-staged, not `pnpm` scripts directly
- `tsconfig.generated.json` validates only `src/generated/**/*.ts` — not the scripts themselves
- Both pipelines use validate-first: write to `.temp/` → validate (tsc + biome) → diff → backup + swap OR cleanup
- Pipeline reports accumulate via `addJsonReport()` — lifecycle generates consolidated `.md` via `renderReportsMarkdown()`

<!-- AGENTS-GENERATED:END notes -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shared library conventions, see `generators/src/AGENTS.md`. For pipeline-specific rules, see each pipeline's own `AGENTS.md`.
