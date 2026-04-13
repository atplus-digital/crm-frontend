<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — lib

<!-- AGENTS-GENERATED:START overview -->
## Overview
Pure utility functions with no React dependency — shared helpers used across the application.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File        | Purpose                                                                             |
| ----------- | ----------------------------------------------------------------------------------- |
| `utils.ts`  | General utilities: `cn()` (clsx + tailwind-merge), `formatDateInPortuguese()`, `getInitials()` |
| `logger.ts` | Structured logger: `createLogger(module)` factory. Dev mode → all levels; production → warn + error only |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- All functions in this folder are pure TypeScript — no React imports.
- Use `#/` alias for imports (e.g., `import { isDev } from "#/env"`).
- `createLogger(module)` returns a scoped logger with `[module]` prefix; never use raw `console.*` in application code.
- Logger levels: `debug` (dev only), `info`, `warn`, `error` — gated by `isDev` from `#/env`.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->
## Golden Samples
| Pattern           | Reference file              |
| ----------------- | --------------------------- |
| Logger usage      | `src/modules/auth/guard.ts`  |
| Utility function  | `src/lib/utils.ts`           |
<!-- AGENTS-GENERATED:END golden-samples -->