<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-13 -->

# AGENTS.md — pipelines/generate-custom-requests

## Overview

Custom request registry generation pipeline — loads NocoBase schemas, fetches API entries, transforms and merges data, and generates the custom request registry output at `src/generated/custom-requests/`.

<!-- AGENTS-GENERATED:START structure -->

## Structure

```
generate-custom-requests/
├── index.ts              # Entry: executeEntry(import.meta.url, createCustomRequestsTasks)
├── pipeline.ts           # createCustomRequestsTasks, runCustomRequestsPipeline
├── @types/
│   ├── collection-schema.ts      # Collection schema types
│   ├── custom-request-api.ts     # API entry types
│   ├── generated-registry.ts     # Registry output types
│   └── script-config.ts          # Pipeline config types
├── stages/
│   ├── load-config.ts            # Stage 1: load configuration
│   ├── load-schemas.ts           # Stage 2: load collection schemas
│   ├── fetch-entries.ts          # Stage 3: fetch entries from NocoBase API
│   ├── transform-entries.ts      # Stage 4: transform + merge entries (merged from old transform-and-merge/)
│   ├── write-output.ts           # Stage 5: write to .temp/ (merged from old write-output/)
│   └── write-reports.ts          # Stage 6: analysis reports via addJsonReport
├── utils/
│   ├── collection-schema-loader.ts           # Schema loading facade
│   ├── collection-schema-loader/
│   │   ├── case-utils.ts         # Case conversion utilities
│   │   ├── file-scanner.ts       # File scanning
│   │   ├── placeholders.ts       # Placeholder resolution
│   │   └── schema-parser.ts      # Schema parsing
│   └── schema-inference/
│       ├── index.ts              # Inference facade
│       ├── placeholder-resolver.ts
│       ├── tree-renderer.ts
│       └── value-inferrer.ts
└── api/
    └── client.ts                 # API client for custom requests
```

<!-- AGENTS-GENERATED:END structure -->

<!-- AGENTS-GENERATED:START stages -->

## Pipeline Stages

| Stage | File                   | Description                                                                 |
| ----- | ---------------------- | --------------------------------------------------------------------------- |
| 1     | `load-config.ts`       | Loads configuration for custom request generation                           |
| 2     | `load-schemas.ts`      | Loads NocoBase collection schemas                                           |
| 3     | `fetch-entries.ts`     | Fetches entries from NocoBase API                                           |
| 4     | `transform-entries.ts` | Transforms and merges entries (consolidated from old 6 files)               |
| 5     | `write-output.ts`      | Writes registry and split files to `.temp/` (consolidated from old 9 files) |
| 6     | `write-reports.ts`     | Analysis report: entries without options, without dataSourceKey             |

<!-- AGENTS-GENERATED:END stages -->
