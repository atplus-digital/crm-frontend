<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-30 -->

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
└── generators/              # Code generation framework
    ├── run-generator.ts      # Barrel re-export of generator-cli
    ├── tsconfig.generated.json  # TSConfig for validating generated output
    └── src/
        ├── lib/              # Shared library (logger, atomic-writer, etc.)
        ├── pipelines/
        │   ├── generate-types/            # NocoBase + IXC type generation
        │   └── generate-custom-requests/  # Custom request registry generation
        └── AGENTS.md        # Shared library conventions
```

<!-- AGENTS-GENERATED:END structure -->

<!-- AGENTS-GENERATED:START where-to-look -->

## Where to Look

| Task                                   | Location                                             | Notes                                                                 |
| -------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------------- |
| Add a new NocoBase/IXC collection type | `generators/src/pipelines/generate-types/`           | Add to `datasources.config.ts`, then run `pnpm generate-types`        |
| Add a new custom request               | `generators/src/pipelines/generate-custom-requests/` | Add to `requests.config.ts`, then run `pnpm generate-custom-requests` |
| Fix generation pipeline bugs           | `generators/src/pipelines/<pipeline>/`               | Follow the stage-by-stage pipeline pattern                            |
| Add shared utility                     | `generators/src/lib/`                                | No barrel `index.ts` — direct imports only                            |
| Fix incremental type checking          | `code-check/typecheck-staged.ts`                     | Standalone, no dependency on generators                               |
| Modify generator CLI framework         | `generators/src/lib/generator-cli/`                  | Listr2-based runner, shared by both pipelines                         |

<!-- AGENTS-GENERATED:END where-to-look -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
pnpm generate-types              # Generate TypeScript types from NocoBase + IXC schemas
pnpm generate-custom-requests    # Generate custom request registry from NocoBase API
pnpm test scripts/generate-types # Run type generation tests
pnpm test scripts/generate-custom-requests  # Run custom request tests
```

<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START conventions -->

## Conventions

- **Self-executing entry points**: `void runGeneratorCli(...)` at module level
- **Path alias**: `@scripts/*` → `./scripts/*` (configured in root `tsconfig.json`)
- **Portuguese error/log messages**: All user-facing strings in Portuguese
- **Zod-validated env**: NocoBase credentials loaded from `.env.local` via `env-config.ts`
- **No barrel exports in lib**: Import directly via `@scripts/generators/src/lib/<module>`
- **One-way dependency**: `lib/` → pipelines, never reverse

<!-- AGENTS-GENERATED:END conventions -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                       | ✅ Use                                     |
| ---------------------------------------------- | ------------------------------------------ |
| Manually editing generated files               | Update config + regenerate                 |
| Importing from pipeline internals in `lib/`    | Keep `lib/` pure, pipeline-free            |
| Running type generation without workspace lock | Pipeline auto-locks via `workspace-locker` |

<!-- AGENTS-GENERATED:END anti-patterns -->

<!-- AGENTS-GENERATED:START notes -->

## Notes

- `code-check/typecheck-staged.ts` is invoked by lint-staged, not `pnpm` scripts directly
- `tsconfig.generated.json` validates only `src/generated/**/*.ts` — not the scripts themselves
- Both pipelines use atomic writes (backup → swap → validate → keep/restore)

<!-- AGENTS-GENERATED:END notes -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shared library conventions, see `generators/src/AGENTS.md`. For pipeline-specific rules, see each pipeline's own `AGENTS.md`.
