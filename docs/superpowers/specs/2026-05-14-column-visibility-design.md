# Column Visibility Toggle — Design Spec

**Date:** 2026-05-14
**Status:** Approved
**Approach:** Prop no `DataTableContainer` (Approach A)

## Summary

Adiciona um dropdown "Colunas" na toolbar da tabela que permite ao usuário mostrar/esconder colunas individualmente. Ativado por prop no `DataTableContainer`, sem persistência (estado React apenas).

## Motivation

Tabelas com muitas colunas ficam poluídas. O usuário precisa controlar quais dados são relevantes no momento sem perder as definições originais.

## Design

### 1. Prop no `DataTableContainer`

Novo prop booleano, default `false`:

```tsx
<DataTableContainer
  columns={columns}
  data={data}
  enableColumnVisibility  // ativa o recurso
>
```

### 2. Estado no controller

`DataTableController` adiciona `columnVisibility` como estado React:

```ts
const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
```

Passado para `useReactTable`:

```ts
useReactTable({
  state: { columnVisibility },
  onColumnVisibilityChange: setColumnVisibility,
  // ... resto das options
});
```

### 3. Componente `DataTableColumnVisibility`

Novo componente em `src/components/table/data-table-column-visibility.tsx`.

Dropdown usando `DropdownMenuCheckboxItem` (mesmo pattern do `filter-multi-select`):

- Botão: ícone `SlidersHorizontal` + label "Colunas"
- Conteúdo: lista de checkboxes, um por coluna ocultável
- Usa `table.getAllLeafColumns()` do contexto
- Toggle via `column.toggleVisibility(!!value)`
- Colunas com `enableHiding: false` no column def são excluídas automaticamente

### 4. Composição no toolbar

O `DataTableContainer` renderiza o botão de colunas **na mesma linha** do toolbar do consumidor:

```
┌────────────────────────────────────────────────────────────────┐
│  [≡ Colunas ▼]  {children (toolbar actions existentes)}       │
│  ───────────────────────────────────────────────────────────── │
│  ┌ Table ──────────────────────────────────────────────────┐  │
│  └─────────────────────────────────────────────────────────┘  │
│  ┌ Pagination ─────────────────────────────────────────────┐  │
│  └─────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

Renderização condicional dentro do container:

```tsx
{
  enableColumnVisibility && <DataTableColumnVisibility />;
}
{
  children;
}
```

### 5. Persistência

Nenhuma. Estado vive em React state — perde ao recarregar a página.

### 6. Colunas não-ocultáveis

Colunas de ações (edit/delete) podem marcar `enableHiding: false` no column def para não aparecer no dropdown:

```ts
{
  id: "actions",
  enableHiding: false,
  // ...
}
```

## Arquivos Modificados

| Arquivo                                                 | Mudança                                                                          |
| ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `src/components/table/data-table-container.tsx`         | Prop `enableColumnVisibility`, renderiza `DataTableColumnVisibility`             |
| `src/components/table/data-table-context.tsx`           | Adiciona `columnVisibility` / `setColumnVisibility` ao controller type           |
| `src/components/table/data-table.tsx`                   | Passa `state.columnVisibility` e `onColumnVisibilityChange` para `useReactTable` |
| `src/components/table/data-table-column-visibility.tsx` | **Novo** — componente dropdown                                                   |
| `src/hooks/use-data-table-controller.ts`                | Estado `columnVisibility` e inclusão no controller                               |

## Uso

```tsx
// Qualquer página — só adicionar a prop
<DataTableContainer columns={columns} data={data} enableColumnVisibility ...>
```

## Decisões

- **Estado React puro** — sem localStorage, sem URL params
- **Prop no container** — não componente solto para garantir consistência
- **`SlidersHorizontal`** como ícone (padrão TanStack/shadcn)
- Colunas de ações marcam `enableHiding: false` para ficarem sempre visíveis
