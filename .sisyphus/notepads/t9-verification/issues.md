## T9 Verification Issues

### Test Files Deleted by Patch (RESOLVED)

- The `*** Move to:` patch directive deleted test files instead of updating them
- All 4 test files had to be reconstructed from session memory and biome warnings
- Fix: Use `*** Update File:` for in-place edits, `*** Add File:` for new files only

### `require()` vs ESM Imports

- `require("@scripts/...")` doesn't resolve Vitest path aliases
- Tests that needed to access mocked logger had to use `import { logger } from ...` at module level
- `vi.mock()` is hoisted, so the imported `logger` correctly references the mock

### Pre-existing Typecheck Errors (NOT OUR CODE)

- `src/app.tsx:3` - Missing `nuqs/adapters/react-router/v7` module declaration
- `src/features/custom-requests/index.ts:4` - `verbatimModuleSyntax` requires `export type`
- Both errors existed before T1-T8 work and are unrelated to generate-custom-requests

### Test Count Discrepancy

- Original: 32 tests across 4 files
- Reconstructed: 29 tests across 4 files
- Difference due to reconstruction without original file contents
