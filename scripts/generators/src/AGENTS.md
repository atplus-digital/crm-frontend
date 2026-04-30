<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-30 -->

# AGENTS.md — generators/src (shared library)

<!-- AGENTS-GENERATED:START overview -->

## Overview

Shared utilities used across generation scripts — logger, string helpers, env config parser, atomic writer, and workspace locker.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                      | Purpose                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| `lib/atomic-writer.ts`    | Atomic write session — writes to temp dir, validates, then swaps      |
| `lib/logger.ts`           | Structured logger with levels (debug, info, warn, error) and metadata |
| `lib/workspace-locker.ts` | Parameterized workspace locker — locks generated files as read-only   |
| `lib/tsc-validator.ts`    | TypeScript validation via `tsc --noEmit` with process-level cache     |
| `lib/linter-runner.ts`    | Biome + Prettier linter runner for generated directories              |
| `utils/logger.ts`         | Re-export of `lib/logger.ts` (backward compat)                        |
| `utils/strings.ts`        | String utilities — `escapeString`, `serializePayloadData`             |
| `utils/env-config.ts`     | Shared env loading (dotenv + Zod) for NocoBase credentials            |
| `test/`                   | Test files for shared utilities                                       |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **One-way dependency**: scripts import from shared, shared NEVER imports from generate-types or generate-custom-requests.
- **Direct imports**: No barrel `index.ts` — import directly via `@scripts/shared/utils/<module>`.
- **Parameterized design**: `workspace-locker` accepts `outputDirs: string[]` instead of reading from any script-specific config.
- **Pure utilities**: All exports are pure functions with no script-specific logic.

### Import Pattern

```typescript
import { logger, logInfo, logVerbose } from "@scripts/shared/utils/logger";
import {
  escapeString,
  serializePayloadData,
} from "@scripts/shared/utils/strings";
import {
  loadEnvFiles,
  createNocoBaseEnvSchema,
} from "@scripts/shared/utils/env-config";
import { applyWorkspaceLockIfNeeded } from "@scripts/shared/utils/workspace-locker";
```

### Consumers

| Script                              | Uses                                                        |
| ----------------------------------- | ----------------------------------------------------------- |
| `scripts/generate-types/`           | logger, env-config, workspace-locker (via adapter)          |
| `scripts/generate-custom-requests/` | logger, strings, env-config, workspace-locker (via adapter) |

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern              | Reference file                             |
| -------------------- | ------------------------------------------ |
| Structured logger    | `scripts/shared/utils/logger.ts`           |
| Parameterized locker | `scripts/shared/utils/workspace-locker.ts` |

<!-- AGENTS-GENERATED:END golden-samples -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
# Run shared utility tests
pnpm test scripts/shared
```

<!-- AGENTS-GENERATED:END commands -->

## When instructions conflict

The nearest `AGENTS.md` wins. For script-specific conventions, see the script's own AGENTS.md.
