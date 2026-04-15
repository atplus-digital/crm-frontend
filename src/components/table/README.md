# DataTable Components

Conjunto de componentes genéricos para tabelas com TanStack Table.

## Componentes

### DataTable

Componente base de tabela que renderiza linhas e células baseadas em `ColumnDef` do TanStack Table.

```tsx
import { DataTable, useDataTable } from "#/components/table/data-table";

const table = useDataTable({ columns, data });
return <DataTable table={table} emptyMessage="Nenhum registro encontrado" />;
```

### DataTableWithPagination

Componente de tabela com paginação integrada. Suporta paginação server-side através das props `total` e `totalPages`.

```tsx
<DataTableWithPagination
  columns={columns}
  data={items}
  total={total}
  totalPages={totalPages}
  onPageChange={(page) => refetch({ page })}
  onPageSizeChange={(pageSize) => refetch({ page: 1, pageSize })}
  emptyMessage="Nenhum registro encontrado"
/>
```

### DataTablePagination

Componente de paginação standalone para usar com `DataTable` base.

## Hooks

### usePagination

Hook para gerenciar estado de paginação com TanStack Table.

```tsx
const { pagination, onPaginationChange } = usePagination({
  initialPage: 1,
  initialPageSize: 20,
  onPageChange: (page) => refetch({ page }),
  onPageSizeChange: (pageSize) => refetch({ page: 1, pageSize }),
});
```
