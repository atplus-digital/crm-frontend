# DataTable com Stale-While-Loading

## Visão Geral

As tabelas agora suportam o padrão **stale-while-loading** durante mudanças de página. Isso significa que:

1. **Dados da página anterior permanecem visíveis** enquanto os novos dados estão sendo carregados
2. **Overlay visual** indica que o loading está em progresso
3. **Melhor UX** - o usuário não vê uma tela em branco/skeletons durante navegação

## Como Usar

### Padrão Básico

```tsx
import { useQuery } from "@tanstack/react-query";
import { DataTableWithPagination } from "#/components/tables/data-table-with-pagination";
import { usePrevious } from "#/hooks/use-previous";

function MyTable() {
  const { data, isFetching } = useQuery({
    queryKey: ["items", page],
    queryFn: () => fetchItems({ page }),
  });

  // Hook utilitário para manter o valor anterior
  const previousData = usePrevious(data);

  return (
    <DataTableWithPagination
      columns={columns}
      data={data}
      staleData={previousData}
      isLoading={isFetching}
      total={meta.total}
      totalPages={meta.totalPages}
      onPageChange={(page) => refetch({ page })}
    />
  );
}
```

### Com Controle Manual (Opcional)

Se você precisa de controle mais fino sobre quando o loading começa/termina:

```tsx
import { useQuery } from "@tanstack/react-query";
import { DataTableWithPagination } from "#/components/tables/data-table-with-pagination";
import { usePrevious } from "#/hooks/use-previous";
import { useState } from "react";

function MyTable() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["items", page],
    queryFn: () => fetchItems({ page }),
  });

  const previousData = usePrevious(data);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const handlePageChange = async (newPage: number) => {
    setIsPageLoading(true);
    await refetch({ page: newPage });
    setIsPageLoading(false);
  };

  return (
    <DataTableWithPagination
      columns={columns}
      data={data}
      staleData={isPageLoading ? previousData : undefined}
      isLoading={isPageLoading || isFetching}
      onPageChange={handlePageChange}
    />
  );
}
```

## Componentes e Hooks Envolvidos

### `usePagination` Hook

Adicionado novo estado `isPageChanging`:

```tsx
const {
  pagination,
  onPaginationChange,
  isPageChanging,
  markPageChangeComplete,
} = usePagination({
  onPageChange: (page) => refetch({ page }),
  onPageChangeComplete: () => setIsLoading(false),
});
```

### `DataTableWithPagination` Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `staleData` | `TData[]` | Dados anteriores para mostrar durante page changes |
| `onPageChangeComplete` | `() => void` | Callback quando o loading da página completa |

### `DataTable` Props

| Prop | Tipo | Descrição |
|------|------|-----------|
| `isPageChanging` | `boolean` | Mostra overlay de loading sobre os dados stale |

## Comportamento Visual

### Loading Inicial (primeira carga)
- Mostra **10 skeleton rows**
- Bloqueia interações

### Page Change (navegação entre páginas)
- Mostra **dados da página anterior**
- Exibe **overlay com spinner e texto "Carregando..."**
- Permite leitura do conteúdo (não bloqueia totalmente)

### Dados Vazios
- Mostra mensagem `emptyMessage`
- Sem overlay de loading

## Backward Compatibility

A implementação é **100% backward compatible**:

- Todos os props novos são **opcionais**
- Tabelas existentes continuam funcionando sem mudanças
- Se `staleData` não for fornecido, comportamento é idêntico ao anterior

## Exemplo Completo

```tsx
// routes/my-page.tsx
import { useQuery } from "@tanstack/react-query";
import { DataTableWithPagination } from "#/components/tables/data-table-with-pagination";
import { usePrevious } from "#/hooks/use-previous";
import { columns } from "./columns";

export function Component() {
  const [page, setPage] = useState(1);

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["contratos", page],
    queryFn: () => api.getContratos({ page }),
  });

  const previousData = usePrevious(data);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contratos</h1>

      <DataTableWithPagination
        columns={columns}
        data={data?.items ?? []}
        staleData={previousData?.items}
        isLoading={isFetching}
        total={data?.total}
        totalPages={data?.totalPages}
        onPageChange={(newPage) => {
          setPage(newPage);
          refetch({ page: newPage });
        }}
        onPageSizeChange={(pageSize) => {
          setPage(1);
          refetch({ page: 1, pageSize });
        }}
        emptyMessage="Nenhum contrato encontrado"
      />
    </div>
  );
}
```
