<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — table

<!-- AGENTS-GENERATED:START overview -->

## Overview

Shared table primitives for CRM AT+ — TanStack table controller, context-driven
composition, rendering, and pagination building blocks.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                 | Purpose                                                              |
| ------------------------------------ | -------------------------------------------------------------------- |
| `data-table.tsx`                     | Base table renderer and low-level `useDataTable` factory             |
| `data-table-pagination.tsx`          | Shared pagination UI wired to TanStack pagination state              |
| `data-table-with-pagination.tsx`     | Default composed wrapper (provider + table + optional pagination)    |
| `data-table-context.tsx`             | Context contract/provider for shared table controller state/actions  |
| `data-table-column-header.tsx`       | Sortable column header primitive used in feature column definitions  |
| `empty-table.tsx`                    | Table-shaped empty placeholder with header skeleton                  |
| `hooks/use-pagination.ts`            | Generic pagination state hook with page/pageSize callbacks           |
| `hooks/use-data-table-controller.ts` | High-level table controller hook (pagination, filters, table object) |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Prefer `DataTableWithPagination` for standard list screens; inject custom
  toolbars/filters as `children` and consume controller via `useDataTableContext`.
- Keep `DataTable`/`DataTablePagination` backward-compatible: they may receive
  explicit props or derive state from `DataTableProvider`.
- New cross-table behavior (filters, reset/apply flow, pagination adapters)
  belongs in `use-data-table-controller.ts`, not in feature-level pages.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                          | Reference file                                            |
| -------------------------------- | --------------------------------------------------------- |
| Context-driven table composition | `src/components/table/data-table-with-pagination.tsx`     |
| Generic controller hook contract | `src/components/table/hooks/use-data-table-controller.ts` |
| Stateless pagination view        | `src/components/table/data-table-pagination.tsx`          |

<!-- AGENTS-GENERATED:END golden-samples -->
