<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — negociacoes-filters

<!-- AGENTS-GENERATED:START overview -->

## Overview

Filter UI components for negociações — kanban and list filter variants sharing
the same `NegociacaoFilters` contract.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                 | Purpose                                     |
| -------------------- | ------------------------------------------- |
| `kanban-filters.tsx` | Kanban filter UI with status toggle buttons |
| `lista-filters.tsx`  | List filter UI with grid layout             |
| `index.ts`           | Barrel exports for both filter components   |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Both components use the same `NegociacaoFilters` type from `../negociacoes-types`
- Props interface naming: `{ComponentName}Props`
- Export both component and props interface
- Keep filter logic in component; delegate filter state to parent via `onFilter`

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                       | Reference file                                                       |
| ----------------------------- | -------------------------------------------------------------------- |
| Status toggle filter          | `src/features/cs/negociacoes/negociacoes-filters/kanban-filters.tsx` |
| Grid-based multi-field filter | `src/features/cs/negociacoes/negociacoes-filters/lista-filters.tsx`  |
| Filter barrel export          | `src/features/cs/negociacoes/negociacoes-filters/index.ts`           |

<!-- AGENTS-GENERATED:END golden-samples -->
