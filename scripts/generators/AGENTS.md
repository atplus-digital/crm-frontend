<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-04 -->

# AGENTS.md — scripts/generators

<!-- AGENTS-GENERATED:START overview -->

## Overview

Code generation framework — Listr2-based CLI runner, shared library layer, and two pipeline implementations (type generation + custom requests).

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START structure -->

## Structure

```
generators/
├── tsconfig.generated.json     # Validates generated output only (src/generated/**/*.ts)
└── src/
    ├── lib/                    # Shared library (no pipeline-specific logic)
    │   ├── cli/                # Listr2-based CLI framework
    │   ├── http/               # HTTP utilities
    │   │   ├── http-client.ts
    │   │   └── nocobase-client.ts
    │   ├── io/                 # File I/O operations
    │   │   ├── atomic-writer.ts
    │   │   ├── workspace-locker.ts
    │   │   └── workspace-locker-adapter.ts
    │   ├── validation/         # Code validation
    │   │   ├── linter-runner.ts
    │   │   └── tsc-validator.ts
    │   ├── env-config.ts       # dotenv + Zod env validation
    │   ├── logger.ts           # Structured logger with AsyncLocalStorage chains
    │   ├── pipeline-runner.ts  # Pipeline orchestration
    │   ├── strings.ts          # escapeString, serializePayloadData
    │   └── test/               # Test files
    └── pipelines/
        ├── generate-types/            # 10-stage type generation pipeline
        └── generate-custom-requests/  # 5-stage custom request registry pipeline
```

<!-- AGENTS-GENERATED:END structure -->

<!-- AGENTS-GENERATED:START where-to-look -->

## Where to Look

| Task                                     | Location                                       | Notes                                             |
| ---------------------------------------- | ---------------------------------------------- | ------------------------------------------------- |
| Understand generator CLI framework       | `src/lib/cli/`                                 | runner.ts → orchestration-task.ts → listr-task.ts |
| Add shared utility                       | `src/lib/`                                     | No barrel index.ts, direct imports only           |
| Modify pipeline orchestration            | `src/pipelines/<name>/pipeline/orchestration/` | Each pipeline defines its own stages              |
| Change how generated files are validated | `src/lib/validation/`                          | Post-pipeline validation                          |
| Understand atomic write pattern          | `src/lib/io/atomic-writer.ts`                  | Used by both pipelines for safe file writes       |
| HTTP/API operations                      | `src/lib/http/`                                | NocoBase client and HTTP utilities                |

<!-- AGENTS-GENERATED:END where-to-look -->

<!-- AGENTS-GENERATED:START key-files -->

## Key Files

| File                                | Purpose                                                                        |
| ----------------------------------- | ------------------------------------------------------------------------------ |
| `run-generator.ts`                  | Barrel re-export — bridges `@scripts/generators/run-generator` alias           |
| `tsconfig.generated.json`           | Extends root tsconfig, includes only `src/generated/**`                        |
| `src/lib/cli/runner.ts`             | `runGeneratorCli()` — builds Listr task list, injects logger, exits on failure |
| `src/lib/cli/orchestration-task.ts` | `createOrchestrationTask()` — wraps sub-stages with `runWithLogger()` chains   |
| `src/lib/cli/types.ts`              | `GeneratorTask`, `GeneratorContext`, `GeneratorOrchestrationStage` types       |

<!-- AGENTS-GENERATED:END key-files -->

<!-- AGENTS-GENERATED:START architecture -->

## Architecture

Both pipelines follow the same pattern:

1. **Entry point** (`index.ts`): Self-executing `void runGeneratorCli(...)` — creates tasks, wires orchestration stages
2. **Orchestration layer** (`generate-*.ts`): Creates execution context, defines task array (prepare → lock → orchestrate → assert)
3. **Pipeline stages**: Sequential `async (ctx: Readonly<C>) => Promise<C>` — functional, non-mutating
4. **Post-pipeline**: tsc validation + Biome lint in parallel

**Dependency flow:**

```
lib/ (shared) ← consumed by pipelines (one-way only)
cli/ ← consumed by both pipeline entry points
pipelines/ ← independent of each other
```

<!-- AGENTS-GENERATED:END architecture -->

<!-- AGENTS-GENERATED:START import-pattern -->

## Import Pattern

```typescript
// From pipelines, import shared lib directly:
import { logger } from "@scripts/generators/src/lib/logger";
import { createAtomicWriteSession } from "@scripts/generators/src/lib/io/atomic-writer";
import { resolveNocoBaseEnv } from "@scripts/generators/src/lib/env-config";
import {
  runGeneratorCli,
  createOrchestrationTask,
} from "@scripts/generators/src/lib/cli";
```

<!-- AGENTS-GENERATED:END import-pattern -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                              | ✅ Use                         |
| ------------------------------------- | ------------------------------ |
| `lib/` importing from `pipelines/`    | One-way only: pipelines → lib  |
| Adding barrel `index.ts` in `lib/`    | Direct imports to module files |
| Hardcoding output paths in shared lib | Pass via config/parameters     |

<!-- AGENTS-GENERATED:END anti-patterns -->

## When instructions conflict

The nearest `AGENTS.md` wins. For shared lib details, see `src/AGENTS.md`. For pipeline-specific rules, see each pipeline's own `AGENTS.md`.
