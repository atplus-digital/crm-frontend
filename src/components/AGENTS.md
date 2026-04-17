<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — components

<!-- AGENTS-GENERATED:START overview -->

## Overview

Shared UI building blocks for the frontend — design-system primitives, reusable
table/filter/feedback components, and app shell composition used by pages and
features.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                   | Purpose                                            |
| -------------------------------------- | -------------------------------------------------- |
| `ui/`                                  | shadcn/ui primitives and styled base components    |
| `table/data-table.tsx`                 | Base TanStack table renderer + `useDataTable` hook |
| `table/data-table-with-pagination.tsx` | Standard reusable paginated table wrapper          |
| `table/empty-table.tsx`                | Empty-state table placeholder with headers         |
| `filters/filter-actions.tsx`           | Reusable `Filtrar`/`Limpar` action group           |
| `feedback/inline-error-alert.tsx`      | Reusable inline destructive feedback block         |
| `layout/dashboard-layout.tsx`          | App layout scaffold with sidebar + content area    |
| `error-boundary.tsx`                   | Global render error boundary fallback UI           |

**Scoped Docs:**

- `ui/AGENTS.md` — shadcn/ui component reference and customization guide
- `layout/AGENTS.md` — App shell composition and sidebar patterns

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep components in `src/components` framework-agnostic when possible; domain
  rules stay in `src/features/*`.
- Prefer composing from `ui/*` primitives instead of duplicating classes across
  pages.
- For tabular data, default to `DataTableWithPagination`; use `EmptyTable` for
  header + empty-message placeholders.
- Reusable feedback/actions (`feedback/*`, `filters/*`) should stay stateless
  and receive behavior via props.
- **Use `<Link to="...">` from `react-router` for all internal navigation.** Never use bare `<a href="...">` for app routes — it bypasses the SPA router and causes full-page reloads. Reserve `<a>` for external/off-site URLs only.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                             | Reference file                                        |
| ----------------------------------- | ----------------------------------------------------- |
| Generic paginated table composition | `src/components/table/data-table-with-pagination.tsx` |
| Shared filter action row            | `src/components/filters/filter-actions.tsx`           |
| Shared inline error feedback        | `src/components/feedback/inline-error-alert.tsx`      |

<!-- AGENTS-GENERATED:END golden-samples -->
