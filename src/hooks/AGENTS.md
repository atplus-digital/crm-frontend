<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-24 -->

# AGENTS.md — hooks

<!-- AGENTS-GENERATED:START overview -->

## Overview

Shared cross-feature hooks for responsive behavior and URL-synchronized page state (tabs, pagination, sorting, and filters).

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START state-patterns -->

## State Patterns

### Current Hook Inventory

| Hook          | Type        | Returns                         | Dependencies                  | Used By                                           |
| ------------- | ----------- | ------------------------------- | ----------------------------- | ------------------------------------------------- |
| `useIsMobile` | Media query | `boolean`                       | `usehooks-ts`                 | Layout/components with responsive behavior        |
| `usePageTab`  | URL path    | `[string, (v: string) => void]` | `react-router`                | Page layouts with tab state in route path         |
| `useListPage` | URL query   | `UseListPageReturn<TFilters>`   | `react-router`, `@tanstack/*` | CS list pages with query params for list controls |

### State Management Integration

- Global auth/permissions state lives in feature modules (`src/features/auth`, `src/features/permissions`), not in this folder.

### When to Add Hooks Here

Add hooks here when they are generic and reused across modules. Keep domain-specific hooks in their owning feature folder.

<!-- AGENTS-GENERATED:END state-patterns -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                     | Purpose                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------- |
| `use-mobile.ts`          | `useIsMobile()` helper with a fixed mobile breakpoint (`<768px`)                      |
| `use-page-tab.ts`        | `usePageTab()` syncs active tab with route path segments                              |
| `use-list-page.ts`       | `useListPage()` centralizes list query state (`page`, `pageSize`, `sort`, `filter_*`) |
| `use-list-page.test.tsx` | Regression tests for URL sync behavior in `useListPage()`                             |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START naming-conventions -->

## Naming Conventions

- Hooks must start with `use` and be exported as named exports.
- File name should match the main hook (`use-*.ts` → `use*` function).
- Boolean hooks should prefer `useIs*`/`useCan*` naming when applicable.

<!-- AGENTS-GENERATED:END naming-conventions -->

<!-- AGENTS-GENERATED:START usage-patterns -->

## Usage Patterns

### Media query hook

```typescript
import { useIsMobile } from "#/hooks/use-mobile";

const isMobile = useIsMobile();
```

### List query state hook

```typescript
const { page, pageSize, filters, handleFilterChange, setPage } =
  useListPage<MyFilters>({
    defaultFilters: {},
  });
```

<!-- AGENTS-GENERATED:END usage-patterns -->

<!-- AGENTS-GENERATED:START best-practices -->

## Best Practices

- Keep hooks focused and framework-level; no business rules from specific domains.
- Return strongly typed values and avoid `any`.
- Avoid side effects unless the hook contract requires them.
- Prefer composition of existing hooks/utilities instead of duplicating state logic.

<!-- AGENTS-GENERATED:END best-practices -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                    | Reference file                     |
| -------------------------- | ---------------------------------- |
| Responsive hook            | `src/hooks/use-mobile.ts`          |
| Route-path tab sync        | `src/hooks/use-page-tab.ts`        |
| URL query list state logic | `src/hooks/use-list-page.ts`       |
| URL sync regression tests  | `src/hooks/use-list-page.test.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->
