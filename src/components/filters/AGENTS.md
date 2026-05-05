<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-27 -->

# AGENTS.md — filters

<!-- AGENTS-GENERATED:START overview -->

## Overview

Shared filter primitives for the app — field inputs/selects/date, action buttons, and reusable filter layout composition.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                      | Purpose                                                     |
| ------------------------- | ----------------------------------------------------------- |
| `filter-select-field.tsx` | Controlled select field primitive (`FilterSelectField`)     |
| `filter-input-field.tsx`  | Controlled debounced input field (`FilterInputField`)       |
| `filter-date-field.tsx`   | Controlled date field primitive (`FilterDateField`)         |
| `filter-badge-group.tsx`  | Multi-select badge group filter (`FilterBadgeGroup`)        |
| `filter-actions.tsx`      | Reusable `Filtrar`/`Limpar` action row                      |
| `filter-layout.tsx`       | Standardized container for fields grid + actions block      |
| `flush-filters.ts`        | `flushFilters()` utility to apply pending debounced changes |
| `index.ts`                | Public exports for filter primitives                        |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep components stateless and controlled via props; state handling lives in feature filter bars.
- Compose filter UIs with `FilterLayout` + field components + `FilterActions` instead of custom wrappers.
- `FilterSelectField` uses `"all"` as the default sentinel option and emits `undefined` when "Todos" is selected.
- `FilterInputField` debounces text input by 300ms by default; set `debounceMs={0}` to disable. Use `flushFilters(containerRef.current)` before applying filters to ensure pending changes are flushed.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                        | Reference file                                    |
| ------------------------------ | ------------------------------------------------- |
| Standard field grid + actions  | `src/components/filters/filter-layout.tsx`        |
| Action row API (`apply/clear`) | `src/components/filters/filter-actions.tsx`       |
| Feature-level usage            | `src/features/cs/contratos/contratos-filters.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->
