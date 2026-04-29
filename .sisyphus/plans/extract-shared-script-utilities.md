# Extract Shared Script Utilities

## TL;DR
> **Summary**: Extracts duplicated utilities (logger, workspace locker, env config parser, string helpers) from `scripts/generate-types/` and `scripts/generate-custom-requests/` into a new `scripts/shared/` module, eliminating 4 code duplications and formalizing shared dependencies.
> **Deliverables**: `scripts/shared/utils/` (logger, workspace-locker, env-config, strings), `scripts/shared/test/` (test files), updated imports across both scripts, thin adapter wrappers per script.
> **Effort**: Short
> **Parallel**: YES — 3 waves
> **Critical Path**: Wave 1 (foundation) → Wave 2 (import updates + workspace locker) → Wave 6 (verification)

## Context
### Original Request
> "Eu tenho dois scripts @scripts/generate-types/ e @scripts/generate-custom-requests/. E eles compartilham algumas funcionalidades similares, quero um plano para extrair essas funcionalidades para serem reutilizáveis."

### Interview Summary
- **Target**: `scripts/shared/` with `utils/` subdirectory
- **Scope**: Logger, Workspace Locker (adapter pattern), Config Parser Base (env loading + Zod validation), String Utilities
- **Test Strategy**: Move tests to `scripts/shared/test/`, update imports
- **Workspace Locker Approach**: Core in shared accepts `outputDirs: string[]` parameter; each script creates thin adapter reading from its own config
- **Alias**: `@scripts/*` → `./scripts/*` already exists in `tsconfig.json` and `vitest.config.ts`

### Metis Review (gaps addressed)
- **Guardrail**: `npx knip` after extraction to catch unused exports
- **Guardrail**: Run both `pnpm generate-types` and `pnpm generate-custom-requests` to verify end-to-end
- **Edge case**: Workspace locker needs to handle empty `outputDirs` array (no-op)
- **Edge case**: Env config parser must handle `.env.local` missing (skip gracefully)
- **Risk**: Circular dependency if shared imports from either script — strictly one-way (scripts → shared)
- **Assumption validated**: `@scripts/shared/*` resolves correctly via existing alias

## Work Objectives
### Core Objective
Create `scripts/shared/` with reusable utilities, update both scripts to consume them, eliminate all code duplication.

### Deliverables
1. `scripts/shared/utils/logger.ts` — structured logger with levels
2. `scripts/shared/utils/strings.ts` — `escapeString`, `serializePayloadData`
3. `scripts/shared/utils/env-config.ts` — shared env loading + Zod validation
4. `scripts/shared/utils/workspace-locker.ts` — parameterized core
5. Thin adapter wrappers in each script for workspace locker
6. All imports updated, old duplicated code removed
7. Tests moved to `scripts/shared/test/`

### Definition of Done
```bash
# All tests pass
pnpm test scripts/shared scripts/generate-types scripts/generate-custom-requests

# Both scripts execute without errors
pnpm generate-types
pnpm generate-custom-requests

# No type errors
pnpm typecheck

# No unused code
pnpm knip

# No duplicate escapeString or serializePayloadData
grep -r "function escapeString" scripts/ | grep -v shared/
# Expected: no output
```

### Must Have
- Logger in shared, all imports updated
- Workspace locker unified, both scripts functional
- String utilities in shared, writer files deduplicated
- Env config parser in shared, both configs using it
- All existing tests pass after migration

### Must NOT Have
- Shared imports from generate-types or generate-custom-requests (one-way only: scripts → shared)
- Breaking changes to public API of either script
- New dependencies
- Changes to generated output format or content
- Manual edits to generated files in `src/generated/`

## Verification Strategy
> ZERO HUMAN INTERVENTION — all verification is agent-executed.
- Test decision: **tests-after** — migrate existing tests, add tests for new shared utilities
- QA policy: Every task has agent-executed scenarios
- Evidence: `.sisyphus/evidence/task-{N}-{slug}.{ext}`

## Execution Strategy
### Parallel Execution Waves
> Target: 5-8 tasks per wave.

Wave 1: Foundation — create directory structure, extract pure utilities (4 tasks, all parallel)
Wave 2: Import migration — update all imports to use shared (2 tasks, parallel)
Wave 3: Workspace locker — unified core + thin adapters (3 tasks, parallel after T7)
Wave 4: Config parser migration + cleanup (3 tasks, parallel)
Wave 5: Integration verification (2 tasks, sequential)
Wave 6: Final verification

### Dependency Matrix

| Task | Blocks | Blocked By |
|------|--------|------------|
| T1 | — | — |
| T2 | T5, T7 | T1 |
| T3 | T6, T10 | T1 |
| T4 | T8 | T1 |
| T5 | — | T2 |
| T6 | — | T3 |
| T7 | T9, T10 | T2 |
| T8 | T9, T10 | T4 |
| T9 | — | T7, T8 |
| T10 | T11 | T6, T9 |
| T11 | — | T10 |
| T12 | — | T11 |
| T13 | — | T12 |
| F1-F4 | — | T13 |

### Agent Dispatch Summary
| Wave | Tasks | Categories |
|------|-------|------------|
| 1 | T1-T4 | visual-engineering (logger), unspecified-low (strings, env-config, directory) |
| 2 | T5-T6 | unspecified-low |
| 3 | T7-T9 | unspecified-low |
| 4 | T10-T12 | unspecified-low |
| 5 | T13-T14 | unspecified-low |
| 6 | F1-F4 | oracle, unspecified-high ×2, deep |

## TODOs
> Implementation + Test = ONE task. Never separate.
> EVERY task MUST have: Agent Profile + Parallelization + QA Scenarios.

### Wave 1: Foundation

- [x] 1. Create shared directory structure

  **What to do**: Create `scripts/shared/utils/` and `scripts/shared/test/` directories. Add `scripts/shared/AGENTS.md` with overview, file map, and import patterns following project conventions (barrel pattern, `@scripts/shared/*` imports).
  **Must NOT do**: Create any source files (those come in T2-T4). Do not create `scripts/shared/index.ts` barrel — each utility is imported directly.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Simple directory and docs creation.
  - Skills: [`feature-agents-md`] — AGENTS.md creation following project conventions
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T2, T3, T4 | Blocked By: —

  **References**:
  - Pattern: `scripts/generate-types/AGENTS.md` — AGENTS.md structure with overview, filemap, patterns, commands
  - Alias: `tsconfig.json:12` — `@scripts/*` → `./scripts/*`

  **Acceptance Criteria**:
  - [ ] `scripts/shared/utils/` directory exists
  - [ ] `scripts/shared/test/` directory exists
  - [ ] `scripts/shared/AGENTS.md` exists with overview, filemap, and import examples

  **QA Scenarios**:
  ```
  Scenario: Directory structure verified
    Tool: Bash
    Steps: ls scripts/shared/utils/ scripts/shared/test/ scripts/shared/AGENTS.md
    Expected: All three paths exist, no errors
    Evidence: .sisyphus/evidence/task-1-structure.txt
  ```

  **Commit**: YES | Message: `feat(scripts): create shared utilities directory structure` | Files: `scripts/shared/AGENTS.md`

- [x] 2. Extract logger to shared

  **What to do**: Copy `scripts/generate-types/src/utils/logger.ts` to `scripts/shared/utils/logger.ts`. The file is already pure with no domain-specific logic. Verify the existing tests at `scripts/generate-types/test/utils/logger.test.ts` work when imported from the new location. Copy the test file to `scripts/shared/test/logger.test.ts` with updated imports.
  **Must NOT do**: Delete the original file yet (T5 handles migration). Do not change the logger API.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Simple file copy with import path updates.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T5, T7 | Blocked By: T1

  **References**:
  - Source: `scripts/generate-types/src/utils/logger.ts` — full logger implementation (78 lines)
  - Test: `scripts/generate-types/test/utils/logger.test.ts` — existing logger tests
  - Exports: `logger`, `createLogger`, `logInfo`, `logVerbose`, type `LogLevel`, interface `Logger`, interface `LogMeta`

  **Acceptance Criteria**:
  - [ ] `scripts/shared/utils/logger.ts` exists with identical API
  - [ ] `scripts/shared/test/logger.test.ts` exists with updated imports
  - [ ] `pnpm test scripts/shared/test/logger.test.ts` passes

  **QA Scenarios**:
  ```
  Scenario: Logger tests pass from shared location
    Tool: Bash
    Steps: pnpm test scripts/shared/test/logger.test.ts
    Expected: All tests pass, no import errors
    Evidence: .sisyphus/evidence/task-2-logger-test.txt

  Scenario: Logger API unchanged
    Tool: Bash
    Steps: grep -E "^export (const|function|type|interface)" scripts/shared/utils/logger.ts
    Expected: Same exports as original (logger, createLogger, logInfo, logVerbose, LogLevel, Logger, LogMeta)
    Evidence: .sisyphus/evidence/task-2-logger-api.txt
  ```

  **Commit**: YES | Message: `feat(shared): extract logger to scripts/shared/utils/` | Files: `scripts/shared/utils/logger.ts`, `scripts/shared/test/logger.test.ts`

- [x] 3. Extract string utilities to shared

  **What to do**: Create `scripts/shared/utils/strings.ts` with `escapeString()` and `serializePayloadData()`. `escapeString` exists at `scripts/generate-custom-requests/src/utils/string.ts`; `serializePayloadData` is duplicated in `registry-writer.ts` and `split-writer.ts` (both identical). Create tests at `scripts/shared/test/strings.test.ts` covering edge cases (empty, null, special chars, unicode).
  **Must NOT do**: Delete the original files yet. Do not add other string utilities.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Pure utility functions, no domain logic.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T6, T10 | Blocked By: T1

  **References**:
  - Source: `scripts/generate-custom-requests/src/utils/string.ts` — escapeString implementation
  - Source: `scripts/generate-custom-requests/src/writer/registry-writer.ts:7-14` — escapeString duplicate
  - Source: `scripts/generate-custom-requests/src/writer/registry-writer.ts:16-23` — serializePayloadData
  - Source: `scripts/generate-custom-requests/src/writer/split-writer.ts:6-13` — escapeString duplicate
  - Source: `scripts/generate-custom-requests/src/writer/split-writer.ts:15-20` — serializePayloadData duplicate

  **Acceptance Criteria**:
  - [ ] `scripts/shared/utils/strings.ts` exports `escapeString` and `serializePayloadData`
  - [ ] `scripts/shared/test/strings.test.ts` covers: basic escaping, null payload, empty payload, unicode, nested objects
  - [ ] `pnpm test scripts/shared/test/strings.test.ts` passes

  **QA Scenarios**:
  ```
  Scenario: escapeString handles all special chars
    Tool: Bash
    Steps: pnpm test scripts/shared/test/strings.test.ts --reporter=verbose
    Expected: Tests for backslash, quotes, newline, carriage return, tab all pass
    Evidence: .sisyphus/evidence/task-3-strings-test.txt

  Scenario: serializePayloadData handles edge cases
    Tool: Bash
    Steps: pnpm test scripts/shared/test/strings.test.ts --reporter=verbose
    Expected: null → "null", {} → "null", {a:1} → valid JSON string
    Evidence: .sisyphus/evidence/task-3-serialize-test.txt
  ```

  **Commit**: YES | Message: `feat(shared): extract string utilities to scripts/shared/utils/` | Files: `scripts/shared/utils/strings.ts`, `scripts/shared/test/strings.test.ts`

- [x] 4. Extract env config parser to shared

  **What to do**: Create `scripts/shared/utils/env-config.ts` with the shared env loading logic that is identical in both scripts: `normalizeBaseUrl()`, `resolveEnvPath()`, `getEnvPaths()`, `loadEnvFiles()`, `createNocoBaseEnvSchema()`, `formatZodError()`. Source from `generate-types/src/utils/load-config.ts` (the cleaner version). Create tests at `scripts/shared/test/env-config.test.ts` using the mocking pattern from `generate-custom-requests/test/config.test.ts`.
  **Must NOT do**: Include script-specific config types. Do not touch either script's `config.ts` yet.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Pure utility extraction, no domain logic.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T8 | Blocked By: T1

  **References**:
  - Source: `scripts/generate-types/src/utils/load-config.ts` — canonical env loading (70 lines)
  - Source: `scripts/generate-custom-requests/src/utils/config.ts:6-53` — inline env loading (identical pattern)
  - Test pattern: `scripts/generate-custom-requests/test/config.test.ts:33-69` — env loading test with dotenv mocking
  - Existing test: `scripts/generate-types/test/utils/config.test.ts:5-7` — vitest dotenv mocking pattern

  **Acceptance Criteria**:
  - [ ] `scripts/shared/utils/env-config.ts` exports: `normalizeBaseUrl`, `resolveEnvPath`, `getEnvPaths`, `loadEnvFiles`, `createNocoBaseEnvSchema`, `formatZodError`
  - [ ] `scripts/shared/test/env-config.test.ts` covers: URL normalization (trailing slash), env file loading order, Zod validation errors, timeout defaults
  - [ ] `pnpm test scripts/shared/test/env-config.test.ts` passes

  **QA Scenarios**:
  ```
  Scenario: normalizeBaseUrl strips trailing slashes
    Tool: Bash
    Steps: pnpm test scripts/shared/test/env-config.test.ts --reporter=verbose
    Expected: "https://example.com/api/" → "https://example.com/api", "https://example.com///" → "https://example.com"
    Evidence: .sisyphus/evidence/task-4-env-config-test.txt

  Scenario: Zod validation produces correct error messages
    Tool: Bash
    Steps: pnpm test scripts/shared/test/env-config.test.ts --reporter=verbose
    Expected: Missing URL → "CRM_NOCOBASE_URL: ...", invalid URL → "CRM_NOCOBASE_URL deve ser uma URL válida"
    Evidence: .sisyphus/evidence/task-4-zod-errors.txt
  ```

  **Commit**: YES | Message: `feat(shared): extract env config parser to scripts/shared/utils/` | Files: `scripts/shared/utils/env-config.ts`, `scripts/shared/test/env-config.test.ts`

### Wave 2: Import Migration

- [x] 5. Update generate-types to import logger from shared

  **What to do**: Update all imports in `scripts/generate-types/` that currently point to `./logger` or `@scripts/generate-types/src/utils/logger` to use `@scripts/shared/utils/logger`. Then delete the old `scripts/generate-types/src/utils/logger.ts`. Verify `pnpm test scripts/generate-types` passes.
  **Must NOT do**: Change the logger API. Delete the file before verifying tests pass.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Import path refactoring, mechanical changes.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: — | Blocked By: T2

  **References**:
  - Old import path: `@scripts/generate-types/src/utils/logger` or `./logger` (relative)
  - New import path: `@scripts/shared/utils/logger`
  - Files to check: Search for all imports of logger in `scripts/generate-types/src/` and `scripts/generate-types/test/`
  - Test: `scripts/generate-types/test/utils/logger.test.ts` — should be updated to import from shared (or test file is already moved to shared)

  **Acceptance Criteria**:
  - [ ] Zero imports of `./logger` or `@scripts/generate-types/src/utils/logger` in `scripts/generate-types/`
  - [ ] All imports use `@scripts/shared/utils/logger`
  - [ ] `scripts/generate-types/src/utils/logger.ts` is deleted
  - [ ] `pnpm test scripts/generate-types` passes
  - [ ] `pnpm generate-types` runs without errors

  **QA Scenarios**:
  ```
  Scenario: Type generation still works after logger migration
    Tool: Bash
    Steps: pnpm generate-types
    Expected: Script completes without errors, log messages appear with correct format
    Evidence: .sisyphus/evidence/task-5-generate-output.txt

  Scenario: All generate-types tests pass
    Tool: Bash
    Steps: pnpm test scripts/generate-types --reporter=verbose
    Expected: All 23 test files pass
    Evidence: .sisyphus/evidence/task-5-tests-pass.txt
  ```

  **Commit**: YES | Message: `refactor(generate-types): import logger from @scripts/shared` | Files: `scripts/generate-types/**` (updated imports + deleted logger.ts)

- [x] 6. Update generate-custom-requests to import from shared (logger + strings)

  **What to do**: Update all imports in `scripts/generate-custom-requests/` that use `@scripts/generate-types/src/utils/logger` to use `@scripts/shared/utils/logger`. Also update all inline `escapeString` and `serializePayloadData` references in `registry-writer.ts` and `split-writer.ts` to import from `@scripts/shared/utils/strings`. Delete `scripts/generate-custom-requests/src/utils/string.ts`. Remove duplicated inline functions.
  **Must NOT do**: Change any function signatures. Delete files before verifying tests pass.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Import path refactoring, mechanical changes.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocks: T10 | Blocked By: T3

  **References**:
  - Logger imports in: `index.ts:2`, `src/api/client.ts:6`, `src/transformer/entry-transformer.ts:4`, `src/writer/registry-writer.ts:5`, `src/writer/split-writer.ts:4`, `src/utils/workspace-locker.ts:4`
  - String duplicates: `src/writer/registry-writer.ts:7-14` (escapeString), `:16-23` (serializePayloadData)
  - String duplicates: `src/writer/split-writer.ts:6-13` (escapeString), `:15-20` (serializePayloadData)
  - Old string util: `scripts/generate-custom-requests/src/utils/string.ts`
  - Test: `scripts/generate-custom-requests/test/api-client.test.ts:8-16` — mocks logger, must update import path

  **Acceptance Criteria**:
  - [ ] Zero imports of `@scripts/generate-types/src/utils/logger` in `scripts/generate-custom-requests/`
  - [ ] Zero inline `escapeString` or `serializePayloadData` function definitions
  - [ ] `scripts/generate-custom-requests/src/utils/string.ts` deleted
  - [ ] `pnpm test scripts/generate-custom-requests` passes
  - [ ] `pnpm generate-custom-requests` runs without errors

  **QA Scenarios**:
  ```
  Scenario: Custom requests generation still works after migration
    Tool: Bash
    Steps: pnpm generate-custom-requests
    Expected: Script completes without errors, generates registry and split files
    Evidence: .sisyphus/evidence/task-6-generate-output.txt

  Scenario: All generate-custom-requests tests pass
    Tool: Bash
    Steps: pnpm test scripts/generate-custom-requests --reporter=verbose
    Expected: All 5 test files pass with updated imports
    Evidence: .sisyphus/evidence/task-6-tests-pass.txt
  ```

  **Commit**: YES | Message: `refactor(generate-custom-requests): import logger and strings from @scripts/shared` | Files: `scripts/generate-custom-requests/**` (updated imports + deleted string.ts + deduplicated writers)

### Wave 3: Workspace Locker Unification

- [x] 7. Extract unified workspace locker core to shared

  **What to do**: Create `scripts/shared/utils/workspace-locker.ts` by merging the two existing implementations. The core API accepts `outputDirs: string[]` parameter instead of reading from any specific config. Functions: `isWorkspaceLocked(outputDirs: string[])`, `lockWorkspace(outputDirs: string[])`, `applyWorkspaceLockIfNeeded(outputDirs: string[])`. Import logger from `@scripts/shared/utils/logger`. Use `logVerbose` for lock confirmation (consistent with generate-types style). Create tests at `scripts/shared/test/workspace-locker.test.ts` based on `generate-types/test/utils/workspace-locker.test.ts`.
  **Must NOT do**: Import from either script's config. Do not reference `datasources` or any script-specific types.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Merge two existing implementations, create tests.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocks: T9, T10 | Blocked By: T2

  **References**:
  - Source A: `scripts/generate-types/src/utils/workspace-locker.ts` — full implementation (134 lines), uses `config.datasources` iteration
  - Source B: `scripts/generate-custom-requests/src/utils/workspace-locker.ts` — simpler version (117 lines), uses `config.outputDir` directly
  - Existing test: `scripts/generate-types/test/utils/workspace-locker.test.ts`
  - Key difference: generate-types iterates `config.datasources` for `getDataSourceReadonlyPatterns()`; generate-custom-requests uses single `config.outputDir`
  - Shared core should accept `outputDirs: string[]` so each adapter passes its own list
  - `GENERATED_PATTERN = "src/generated/**"` is common to both

  **Acceptance Criteria**:
  - [ ] `scripts/shared/utils/workspace-locker.ts` exports `isWorkspaceLocked`, `lockWorkspace`, `applyWorkspaceLockIfNeeded`
  - [ ] All functions accept `outputDirs: string[]` parameter
  - [ ] `scripts/shared/test/workspace-locker.test.ts` covers: lock/unlock, empty outputDirs, multiple dirs, settings read, settings write
  - [ ] `pnpm test scripts/shared/test/workspace-locker.test.ts` passes

  **QA Scenarios**:
  ```
  Scenario: lockWorkspace writes correct readonlyInclude patterns
    Tool: Bash
    Steps: pnpm test scripts/shared/test/workspace-locker.test.ts --reporter=verbose
    Expected: "src/generated/**" and each outputDir/index.ts added to files.readonlyInclude
    Evidence: .sisyphus/evidence/task-7-locker-test.txt

  Scenario: isWorkspaceLocked returns false when settings.json is missing
    Tool: Bash
    Steps: pnpm test scripts/shared/test/workspace-locker.test.ts --reporter=verbose
    Expected: returns false without throwing
    Evidence: .sisyphus/evidence/task-7-locker-missing.txt

  Scenario: empty outputDirs array is handled gracefully
    Tool: Bash
    Steps: pnpm test scripts/shared/test/workspace-locker.test.ts --reporter=verbose
    Expected: Only GENERATED_PATTERN added, no errors
    Evidence: .sisyphus/evidence/task-7-locker-empty.txt
  ```

  **Commit**: YES | Message: `feat(shared): extract unified workspace locker to scripts/shared/utils/` | Files: `scripts/shared/utils/workspace-locker.ts`, `scripts/shared/test/workspace-locker.test.ts`

- [x] 8. Create generate-types workspace locker adapter

  **What to do**: Replace the content of `scripts/generate-types/src/utils/workspace-locker.ts` with a thin adapter that reads `config.datasources` and `config.outputDir`, extracts outputDirs, and calls the shared core functions. Keep existing public API (`isWorkspaceLocked`, `applyWorkspaceLockIfNeeded`) for backward compatibility.
  **Must NOT do**: Re-implement any locking logic. Do not change the public API signature.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Thin adapter wrapping shared core, mechanical.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 3 | Blocks: T9, T10 | Blocked By: T4

  **References**:
  - Shared core: `scripts/shared/utils/workspace-locker.ts`
  - Config import: `@scripts/generate-types/config` exports `config.datasources` (array of `DataSourceGenerationConfig`) and `config.outputDir`
  - Original file: `scripts/generate-types/src/utils/workspace-locker.ts`
  - Adapter pattern: extract `outputDirs` from `config.datasources.map(d => d.outputDir)` plus `config.outputDir`, deduplicate, pass to shared core

  **Acceptance Criteria**:
  - [ ] `scripts/generate-types/src/utils/workspace-locker.ts` is a thin wrapper (~15 lines)
  - [ ] Imports core from `@scripts/shared/utils/workspace-locker`
  - [ ] Preserves public API: `isWorkspaceLocked()`, `applyWorkspaceLockIfNeeded()`
  - [ ] `pnpm test scripts/generate-types` passes (workspace locker tests still work)
  - [ ] `pnpm generate-types` locking behavior unchanged

  **QA Scenarios**:
  ```
  Scenario: generate-types workspace locking still works
    Tool: Bash
    Steps: pnpm test scripts/generate-types/test/utils/workspace-locker.test.ts --reporter=verbose
    Expected: All workspace locker tests pass through the adapter
    Evidence: .sisyphus/evidence/task-8-adapter-test.txt

  Scenario: adapter correctly extracts outputDirs from datasources
    Tool: Bash
    Steps: node -e "const c = require('./scripts/generate-types/config'); console.log(c.config.datasources?.map(d=>d.outputDir))"
    Expected: Lists all outputDir values from datasources config
    Evidence: .sisyphus/evidence/task-8-outputdirs.txt
  ```

  **Commit**: YES | Message: `refactor(generate-types): replace workspace locker with shared adapter` | Files: `scripts/generate-types/src/utils/workspace-locker.ts`

- [x] 9. Create generate-custom-requests workspace locker adapter

  **What to do**: Replace the content of `scripts/generate-custom-requests/src/utils/workspace-locker.ts` with a thin adapter that reads `config.outputDir`, wraps it in an array, and calls the shared core functions. Keep existing public API for backward compatibility.
  **Must NOT do**: Re-implement locking logic. Do not change the public API signature. Do not import from generate-types.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Thin adapter wrapping shared core, mechanical.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 3 | Blocks: T10 | Blocked By: T7, T8

  **References**:
  - Shared core: `scripts/shared/utils/workspace-locker.ts`
  - Config import: `@scripts/generate-custom-requests/config` exports `config.outputDir`
  - Original file: `scripts/generate-custom-requests/src/utils/workspace-locker.ts`
  - Also update the logger import to use `@scripts/shared/utils/logger`

  **Acceptance Criteria**:
  - [ ] `scripts/generate-custom-requests/src/utils/workspace-locker.ts` is a thin wrapper (~15 lines)
  - [ ] Imports core from `@scripts/shared/utils/workspace-locker` and logger from `@scripts/shared/utils/logger`
  - [ ] Preserves public API: `isWorkspaceLocked()`, `applyWorkspaceLockIfNeeded()`
  - [ ] `pnpm test scripts/generate-custom-requests` passes

  **QA Scenarios**:
  ```
  Scenario: generate-custom-requests workspace locking is functional
    Tool: Bash
    Steps: pnpm generate-custom-requests 2>&1 | grep -i "lock\|bloqueado"
    Expected: Locking behavior unchanged (either locks or detects existing lock)
    Evidence: .sisyphus/evidence/task-9-locker-output.txt

  Scenario: adapter uses shared core logger
    Tool: Bash
    Steps: grep "@scripts/shared/utils" scripts/generate-custom-requests/src/utils/workspace-locker.ts
    Expected: Matches imports from @scripts/shared/utils/workspace-locker and @scripts/shared/utils/logger
    Evidence: .sisyphus/evidence/task-9-imports.txt
  ```

  **Commit**: YES | Message: `refactor(generate-custom-requests): replace workspace locker with shared adapter` | Files: `scripts/generate-custom-requests/src/utils/workspace-locker.ts`

### Wave 4: Config Parser Migration + Cleanup

- [x] 10. Update generate-types config to use shared env loading

  **What to do**: Update `scripts/generate-types/src/utils/load-config.ts` to import `normalizeBaseUrl`, `loadEnvFiles`, `createNocoBaseEnvSchema`, `formatZodError` from `@scripts/shared/utils/env-config` instead of defining them locally. Remove the duplicated function definitions. Verify `pnpm test scripts/generate-types` passes.
  **Must NOT do**: Change behavior. The `resolveEnvConfig` function's public API must remain identical.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Refactor to import from shared, mechanical.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 4 | Blocks: — | Blocked By: T6, T9

  **References**:
  - File to update: `scripts/generate-types/src/utils/load-config.ts` (70 lines)
  - Shared: `scripts/shared/utils/env-config.ts` exports `normalizeBaseUrl`, `loadEnvFiles`, `createNocoBaseEnvSchema`, `formatZodError`
  - Duplicated functions in load-config.ts: `normalizeBaseUrl:9-11`, `resolveEnvPath:13-15`, `getEnvPaths:17-19`, `formatZodError:21-28`, `createEnvSchema:30-44`
  - Functions `resolveEnvPath`, `getEnvPaths` are now wrapped by `loadEnvFiles` in shared — use `loadEnvFiles` directly

  **Acceptance Criteria**:
  - [ ] `scripts/generate-types/src/utils/load-config.ts` imports from `@scripts/shared/utils/env-config`
  - [ ] No duplicated function definitions for normalizeBaseUrl, formatZodError, env schema, env loading
  - [ ] `pnpm test scripts/generate-types` passes (config tests still work)
  - [ ] `pnpm generate-types` runs without errors

  **QA Scenarios**:
  ```
  Scenario: Env config behavior unchanged after migration
    Tool: Bash
    Steps: pnpm test scripts/generate-types/test/utils/config.test.ts --reporter=verbose
    Expected: All 11 config tests pass
    Evidence: .sisyphus/evidence/task-10-config-test.txt

  Scenario: Type generation works with shared env config
    Tool: Bash
    Steps: pnpm generate-types
    Expected: Script connects to NocoBase and generates types normally
    Evidence: .sisyphus/evidence/task-10-generate-output.txt
  ```

  **Commit**: YES | Message: `refactor(generate-types): use shared env config parser` | Files: `scripts/generate-types/src/utils/load-config.ts`

- [x] 11. Update generate-custom-requests config to use shared env loading

  **What to do**: Update `scripts/generate-custom-requests/src/utils/config.ts` to import `normalizeBaseUrl`, `loadEnvFiles`, `createNocoBaseEnvSchema`, `formatZodError` from `@scripts/shared/utils/env-config`. Remove the duplicated inline function definitions. The `parseConfig` function's public API must remain identical.
  **Must NOT do**: Change the `ScriptConfig` type or the config shape. Do not change the default values.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Refactor to import from shared, mechanical.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 4 | Blocks: — | Blocked By: T6, T9

  **References**:
  - File to update: `scripts/generate-custom-requests/src/utils/config.ts` (77 lines)
  - Shared: `scripts/shared/utils/env-config.ts`
  - Duplicated functions: `normalizeBaseUrl:6-8`, `resolveEnvPath:10-12`, `getEnvPaths:14-16`, `loadEnvFiles:18-29`, `envSchema:31-44`, `formatZodError:46-53`
  - Replace `loadEnvFiles`, `envSchema`, `formatZodError`, `normalizeBaseUrl` with shared imports
  - Keep `parseConfig` with its ScriptConfig-specific defaults and override logic

  **Acceptance Criteria**:
  - [ ] `scripts/generate-custom-requests/src/utils/config.ts` imports env functions from shared
  - [ ] No duplicated function definitions for env handling
  - [ ] `pnpm test scripts/generate-custom-requests` passes (config tests still work)
  - [ ] `pnpm generate-custom-requests` runs without errors

  **QA Scenarios**:
  ```
  Scenario: Custom requests config parsing unchanged
    Tool: Bash
    Steps: pnpm test scripts/generate-custom-requests/test/config.test.ts --reporter=verbose
    Expected: Both config tests pass
    Evidence: .sisyphus/evidence/task-11-config-test.txt

  Scenario: generate-custom-requests works end-to-end
    Tool: Bash
    Steps: pnpm generate-custom-requests
    Expected: Script fetches custom requests, generates registry and split files
    Evidence: .sisyphus/evidence/task-11-generate-output.txt
  ```

  **Commit**: YES | Message: `refactor(generate-custom-requests): use shared env config parser` | Files: `scripts/generate-custom-requests/src/utils/config.ts`

- [x] 12. Remove old logger test reference from vitest global setup

  **What to do**: Update `vitest.config.ts` if it references `scripts/generate-types/test/setup.ts` for logger setup. Verify that shared test files don't have broken global setup dependencies. Clean up any stale references to the now-deleted `scripts/generate-types/src/utils/logger.ts`.
  **Must NOT do**: Remove any setup that affects other tests. Only clean up specific to logger migration.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Config cleanup, mechanical.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: YES | Wave 4 | Blocks: T13 | Blocked By: T10, T11

  **References**:
  - Config: `vitest.config.ts` — setupFiles includes `scripts/generate-types/test/setup.ts`
  - Check if `scripts/generate-types/test/setup.ts` imports logger
  - Shared test files at `scripts/shared/test/` should work independently

  **Acceptance Criteria**:
  - [ ] `vitest.config.ts` does not reference deleted files
  - [ ] `pnpm test scripts/shared` passes
  - [ ] `pnpm typecheck` passes

  **QA Scenarios**:
  ```
  Scenario: Full test suite runs cleanly
    Tool: Bash
    Steps: pnpm test scripts/shared scripts/generate-types scripts/generate-custom-requests --reporter=verbose
    Expected: All test files pass, no import errors, no missing module errors
    Evidence: .sisyphus/evidence/task-12-full-tests.txt

  Scenario: TypeScript compilation passes
    Tool: Bash
    Steps: pnpm typecheck
    Expected: No type errors
    Evidence: .sisyphus/evidence/task-12-typecheck.txt
  ```

  **Commit**: YES | Message: `chore(vitest): clean up stale logger references` | Files: `vitest.config.ts` (if changed), any affected test setup files

### Wave 5: Integration Verification

- [x] 13. Run full integration verification

  **What to do**: Execute both scripts end-to-end, run full test suite, run knip for dead code, verify no duplicated code remains. This is the integration gate before final verification.
  **Must NOT do**: Make any code changes — this is verification only. If failures detected, fix in prior tasks.

  **Recommended Agent Profile**:
  - Category: `unspecified-low` — Reason: Test execution and verification, no code changes.
  - Skills: [] — No special skills needed
  - Omitted: none

  **Parallelization**: Can Parallel: NO | Wave 5 | Blocks: F1-F4 | Blocked By: T12

  **References**:
  - Commands: `pnpm generate-types`, `pnpm generate-custom-requests`, `pnpm test`, `pnpm knip`, `pnpm typecheck`

  **Acceptance Criteria**:
  - [ ] `pnpm generate-types` exits 0
  - [ ] `pnpm generate-custom-requests` exits 0
  - [ ] `pnpm test scripts/shared scripts/generate-types scripts/generate-custom-requests` passes
  - [ ] `pnpm typecheck` passes
  - [ ] `pnpm knip` reports no unused exports in scripts/shared/

  **QA Scenarios**:
  ```
  Scenario: Both scripts execute successfully
    Tool: Bash
    Steps: pnpm generate-types && pnpm generate-custom-requests
    Expected: Both exit 0, generated output identical to pre-refactor
    Evidence: .sisyphus/evidence/task-13-scripts-run.txt

  Scenario: No duplicated code remains
    Tool: Bash
    Steps: grep -rn "function escapeString" scripts/ | grep -v shared/
    Expected: No output (no duplicates outside shared/)
    Evidence: .sisyphus/evidence/task-13-no-duplicates.txt

  Scenario: Dead code check passes
    Tool: Bash
    Steps: pnpm knip
    Expected: No new unused exports reported, especially in scripts/shared/
    Evidence: .sisyphus/evidence/task-13-knip.txt
  ```

  **Commit**: NO | Message: — | Files: —

## Final Verification Wave (MANDATORY — after ALL implementation tasks)
> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**
> **Never mark F1-F4 as checked before getting user's okay.** Rejection or user feedback → fix → re-run → present again → wait for okay.
- [x] F1. Plan Compliance Audit — oracle
- [x] F2. Code Quality Review — unspecified-high
- [x] F3. Real Manual QA — unspecified-high (+ playwright if UI)
- [x] F4. Scope Fidelity Check — deep
## Commit Strategy
Atomic commits per task, conventional commit format. Final verification (T13) does NOT create a commit — it's pure verification. Commits T1-T12 only.

```
feat(scripts): create shared utilities directory structure
feat(shared): extract logger to scripts/shared/utils/
feat(shared): extract string utilities to scripts/shared/utils/
feat(shared): extract env config parser to scripts/shared/utils/
refactor(generate-types): import logger from @scripts/shared
refactor(generate-custom-requests): import logger and strings from @scripts/shared
feat(shared): extract unified workspace locker to scripts/shared/utils/
refactor(generate-types): replace workspace locker with shared adapter
refactor(generate-custom-requests): replace workspace locker with shared adapter
refactor(generate-types): use shared env config parser
refactor(generate-custom-requests): use shared env config parser
chore(vitest): clean up stale logger references
```

## Success Criteria
```bash
# 1. All tests pass across all three test suites
pnpm test scripts/shared scripts/generate-types scripts/generate-custom-requests
# Expected: All pass, exit 0

# 2. Both scripts execute without errors
pnpm generate-types && pnpm generate-custom-requests
# Expected: Both exit 0

# 3. No type errors
pnpm typecheck
# Expected: Exit 0

# 4. No duplicated code
grep -rn "function escapeString\|function serializePayloadData" scripts/ | grep -v shared/
# Expected: No output (all duplicates eliminated)

# 5. No unused exports
pnpm knip
# Expected: No new unused exports from scripts/shared/

# 6. Generated output unchanged
git diff src/generated/
# Expected: No diff (refactoring scripts, not output)
```
