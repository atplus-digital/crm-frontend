<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-13 -->

# AGENTS.md — generators/src

## Overview

Shared library layer for the code generation framework — utilities, pipeline lifecycle, I/O, and CLI runner. Used by both `generate-types` and `generate-custom-requests` pipelines.

<!-- AGENTS-GENERATED:START structure -->

## Structure

```
src/
├── index.ts                  # Main entry: runOrchestrator
├── generator-registry.ts     # Pipeline registry
├── config/
│   ├── datasources.ts        # NocoBase + IXC datasource config
│   └── requests.ts           # Custom request config
├── lib/
│   ├── types.ts              # Shared CLI types (no Logger)
│   ├── http/
│   │   ├── http-client.ts    # Base HTTP client
│   │   └── nocobase-client.ts # NocoBase API client (fetchCollections, fetchPaginated, fetchJson)
│   ├── io/
│   │   ├── atomic-writer.ts  # computeDiff, backupDir, swapTempToOutput, removeDir, runValidation
│   │   └── locker.ts         # Workspace lock/unlock (merged from 4 old files)
│   ├── lifecycle/
│   │   ├── lifecycle.ts      # runStandardPipeline orchestration
│   │   └── lifecycle-tasks.ts # Listr2 task wrappers
│   ├── pipeline/
│   │   ├── context.ts        # PipelineExecutionContext<TRuntime, TPipeline>
│   │   ├── reports.ts        # PipelineReportsContext, addJsonReport, renderReportsMarkdown
│   │   ├── runner.ts         # runPipelineStages, createOrchestrationRunner
│   │   ├── orchestrator.ts   # Orchestrator runner
│   │   └── create-script-definition.ts # Script definition factory
│   ├── utils/
│   │   ├── args.ts           # CLI argument parser
│   │   ├── env.ts            # Environment variables
│   │   ├── path-utils.ts     # Path utilities
│   │   └── strings.ts        # String utilities
│   └── validation/
│       ├── tsc-validator.ts  # TypeScript validation
│       └── linter-runner.ts  # Biome linter runner
└── pipelines/
    ├── generate-types/       # NocoBase + IXC type generation
    └── generate-custom-requests/ # Custom request registry generation
```

<!-- AGENTS-GENERATED:END structure -->

<!-- AGENTS-GENERATED:START conventions -->

## Conventions

- **No barrel exports in lib**: Import directly from specific files (e.g., `#/lib/io/locker`)
- **No Logger**: Listr2 `task` replaces Logger for output
- **One-way dependency**: `lib/` ← pipelines, never reverse
- **Portuguese messages**: All user-facing strings in Portuguese
- **No adapter code**: Enum inference from `uiSchema.enum` only — no IXC wiki adapters or data inference

<!-- AGENTS-GENERATED:END conventions -->

<!-- AGENTS-GENERATED:START key-patterns -->

## Key Patterns

| For                      | Reference                                            |
| ------------------------ | ---------------------------------------------------- |
| Pipeline lifecycle       | `src/lib/lifecycle/lifecycle.ts`                     |
| Pipeline context type    | `src/lib/pipeline/context.ts`                        |
| Report accumulation      | `src/lib/pipeline/reports.ts`                        |
| Atomic write to .temp/   | `src/lib/io/atomic-writer.ts`                        |
| Workspace lock           | `src/lib/io/locker.ts`                               |
| NocoBase API calls       | `src/lib/http/nocobase-client.ts`                    |
| Generate types pipeline  | `src/pipelines/generate-types/pipeline.ts`           |
| Custom requests pipeline | `src/pipelines/generate-custom-requests/pipeline.ts` |

<!-- AGENTS-GENERATED:END key-patterns -->
