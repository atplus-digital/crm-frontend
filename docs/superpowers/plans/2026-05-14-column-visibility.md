# Column Visibility Toggle — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a dropdown button "Colunas" to the table toolbar that lets users toggle column visibility, activated via a single prop on `DataTableContainer`.

**Architecture:** Wire TanStack Table's native `columnVisibility` state through the existing controller/context chain. New component `DataTableColumnVisibility` reads the table from context. `DataTableContainer` renders it conditionally via `enableColumnVisibility` prop.

**Tech Stack:** TanStack Table (column visibility API), shadcn DropdownMenuCheckboxItem, React state (no persistence).

---

### Task 1: Add `columnVisibility` to `useDataTable`

**Files:**

- Modify: `src/components/table/data-table.tsx`

- [ ] **Step 1: Add `VisibilityState` import and extend `UseDataTableOptions`**

In `src/components/table/data-table.tsx`, add `VisibilityState` to the TanStack import and extend the options interface:

```ts
import type {
  Column,
  ColumnDef,
  OnChangeFn,
  PaginationState,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";
```

Add to the `UseDataTableOptions` interface after the `sorting` fields:

```ts
	columnVisibility?: VisibilityState;
	onColumnVisibilityChange?: OnChangeFn<VisibilityState>;
```

- [ ] **Step 2: Wire `columnVisibility` into `useReactTable` call**

In the `useDataTable` function, add to the spread `state` object and the `onColumnVisibilityChange` option:

```ts
export function useDataTable<TData>(options: UseDataTableOptions<TData>) {
  return useReactTable({
    data: options.data,
    columns: options.columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: options.pageCount !== undefined,
    manualSorting: options.sorting !== undefined,
    ...(options.pageCount !== undefined
      ? { pageCount: options.pageCount }
      : {}),
    state: {
      ...(options.pagination !== undefined
        ? { pagination: options.pagination }
        : {}),
      ...(options.sorting !== undefined ? { sorting: options.sorting } : {}),
      ...(options.columnVisibility !== undefined
        ? { columnVisibility: options.columnVisibility }
        : {}),
    },
    onPaginationChange: options.onPaginationChange,
    onSortingChange: options.onSortingChange,
    onColumnVisibilityChange: options.onColumnVisibilityChange,
  });
}
```

- [ ] **Step 3: Verify typecheck**

Run: `pnpm typecheck`
Expected: PASS (no new errors)

- [ ] **Step 4: Commit**

```bash
git add src/components/table/data-table.tsx
git commit -m "feat(table): wire columnVisibility into useDataTable options"
```

---

### Task 2: Add `columnVisibility` to controller hook

**Files:**

- Modify: `src/components/table/hooks/use-data-table-controller.ts`

- [ ] **Step 1: Add `VisibilityState` import and state**

Add import at the top:

```ts
import type {
  ColumnDef,
  OnChangeFn,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
```

Add state inside `useDataTableController`, after the `sorting` destructuring:

```ts
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
```

- [ ] **Step 2: Pass `columnVisibility` to `useDataTable`**

In the `useDataTable` call, add:

```ts
const table = useDataTable({
  columns: options.columns,
  data: options.data,
  pageCount: options.totalPages,
  pagination,
  onPaginationChange,
  columnVisibility,
  onColumnVisibilityChange: setColumnVisibility,
  ...(sorting !== undefined
    ? {
        sorting,
        onSortingChange,
      }
    : {}),
});
```

- [ ] **Step 3: Add to return object**

Add `columnVisibility` and `setColumnVisibility` to the return object:

```ts
return {
  table,
  total,
  emptyMessage: emptyMessage ?? DEFAULT_DATA_TABLE_EMPTY_MESSAGE,
  isLoading: options.isLoading,
  hasInitialQueryData: options.hasInitialQueryData,
  pagination,
  page,
  pageSize,
  setPage,
  setPageSize,
  filters,
  setFilters,
  setFilter,
  applyFilters,
  clearFilters,
  sorting,
  onSortingChange,
  columnVisibility,
  setColumnVisibility,
};
```

- [ ] **Step 4: Verify typecheck**

Run: `pnpm typecheck`
Expected: FAIL — `DataTableController` interface doesn't have `columnVisibility` yet (fixed in Task 3)

---

### Task 3: Add `columnVisibility` to `DataTableController` type

**Files:**

- Modify: `src/components/table/data-table-context.tsx`

- [ ] **Step 1: Add `VisibilityState` import and extend interface**

Add to TanStack imports:

```ts
import type {
  OnChangeFn,
  PaginationState,
  SortingState,
  Table,
  VisibilityState,
} from "@tanstack/react-table";
```

Add to the `DataTableController` interface, after `onSortingChange`:

```ts
columnVisibility: VisibilityState;
setColumnVisibility: OnChangeFn<VisibilityState>;
```

- [ ] **Step 2: Verify typecheck**

Run: `pnpm typecheck`
Expected: PASS (controller hook return now matches interface, container props are next)

- [ ] **Step 3: Commit**

```bash
git add src/components/table/data-table-context.tsx src/components/table/hooks/use-data-table-controller.ts
git commit -m "feat(table): add columnVisibility to DataTableController type and hook"
```

---

### Task 4: Create `DataTableColumnVisibility` component

**Files:**

- Create: `src/components/table/data-table-column-visibility.tsx`

- [ ] **Step 1: Write the component**

Create `src/components/table/data-table-column-visibility.tsx`:

```tsx
import { SlidersHorizontal } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { useResolvedDataTable } from "#/components/table/data-table-context";

export function DataTableColumnVisibility<TData>() {
  const { table } = useResolvedDataTable<TData>({
    componentName: "DataTableColumnVisibility",
  });

  const hideableColumns = table
    .getAllLeafColumns()
    .filter((column) => column.getCanHide());

  if (hideableColumns.length === 0) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="size-4" />
          <span className="hidden sm:inline">Colunas</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Colunas visíveis</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {hideableColumns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={column.getIsVisible()}
            onCheckedChange={(value) => column.toggleVisibility(!!value)}
          >
            {typeof column.columnDef.header === "string"
              ? column.columnDef.header
              : column.id}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `pnpm typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/components/table/data-table-column-visibility.tsx
git commit -m "feat(table): create DataTableColumnVisibility dropdown component"
```

---

### Task 5: Wire `enableColumnVisibility` prop into `DataTableContainer`

**Files:**

- Modify: `src/components/table/data-table-container.tsx`

- [ ] **Step 1: Add prop and import**

Add import at the top:

```ts
import { DataTableColumnVisibility } from "#/components/table/data-table-column-visibility";
```

Add `enableColumnVisibility` to the interface, after `children`:

```ts
	enableColumnVisibility?: boolean;
```

Destructure in the function params:

```ts
	enableColumnVisibility = false,
```

- [ ] **Step 2: Render column visibility button in toolbar**

Replace the `{children}` render block to include the column visibility button:

```tsx
return (
  <DataTableProvider value={controller}>
    <div className="flex flex-col gap-4">
      {enableColumnVisibility || children ? (
        <div className="flex items-center gap-2">
          {enableColumnVisibility && <DataTableColumnVisibility />}
          {children}
        </div>
      ) : null}
      <DataTable />
      {showPagination ? <DataTablePagination /> : null}
    </div>
  </DataTableProvider>
);
```

This wraps the toolbar area in a flex row, placing the column visibility button before any existing children (filter buttons, export, etc.).

- [ ] **Step 3: Verify typecheck**

Run: `pnpm typecheck`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add src/components/table/data-table-container.tsx
git commit -m "feat(table): add enableColumnVisibility prop to DataTableContainer"
```

---

### Task 6: Enable column visibility on one page as smoke test

**Files:**

- Modify: one existing page that uses `DataTableContainer` (e.g., negociações list or contratos)

- [ ] **Step 1: Pick a page and add the prop**

Find a page using `DataTableContainer` and add `enableColumnVisibility`:

```tsx
<DataTableContainer
  columns={columns}
  data={data}
  enableColumnVisibility
  // ... existing props
>
```

- [ ] **Step 2: Run dev server and visually verify**

Run: `pnpm dev`

Verify:

- Button "Colunas" appears in the toolbar
- Clicking opens dropdown with all column names
- Unchecking hides the column immediately
- Rechecking shows it again
- Columns with `enableHiding: false` do NOT appear in dropdown

- [ ] **Step 3: Verify typecheck and lint**

Run: `pnpm typecheck && pnpm biome:fix`
Expected: PASS

- [ ] **Step 4: Commit**

```bash
git add <modified-page-file>
git commit -m "feat(cs): enable column visibility toggle on <page-name>"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** Every spec requirement maps to a task (prop, state, component, composition, no persistence, `enableHiding: false`)
- [x] **Placeholder scan:** No TBDs, TODOs, or vague steps — all code shown inline
- [x] **Type consistency:** `VisibilityState`, `columnVisibility`, `setColumnVisibility` used consistently across all tasks
- [x] **No new dependencies:** Uses existing shadcn DropdownMenuCheckboxItem, lucide-react icons, TanStack Table built-in API
