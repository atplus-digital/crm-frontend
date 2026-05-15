# Vendas: Status Cards + Remoção de Tab

**Data:** 2026-05-15
**Status:** Aprovado

## Objetivo

Na tela `/cs/vendas`, remover a tab "Lista" (única tab existente) e adicionar cards clicáveis de "Suas Vendas por Status" acima da tabela, permitindo filtrar rapidamente por status. Os cards mostram apenas as vendas do usuário logado (vendedor).

## Mudanças

### 1. Remover tab "Lista" da página Vendas

**Arquivo:** `src/pages/cs/vendas/vendas.tsx`

- Remover `tabs` e `defaultTab` do `PageLayout`
- Remover `<Outlet />`
- Renderizar conteúdo (filtros + tabela) diretamente dentro de `PageLayout`
- Manter header com título "Vendas", subtítulo e botão "Nova Venda"

**Arquivo:** `src/routes/cs/vendas/lista.tsx`

- Converter para redirect → `/cs/vendas` (backward compatibility com URLs antigas)

### 2. Seção "Suas Vendas por Status"

**Localização:** dentro de `VendasPage`, acima dos filtros e tabela.

Layout: 5 cards horizontais (flex-wrap) usando `StatusSummaryCards`.

| Card       | Status (f_status) | Cor do badge |
| ---------- | ----------------- | ------------ |
| Novos      | 1                 | blue         |
| Negociando | 2                 | amber        |
| Assinatura | 3                 | purple       |
| Auditoria  | 4                 | orange       |
| Concluído  | 5                 | green        |

Status 6 (Arquivado) **não** aparece nos cards.

**Fonte de dados dos cards:** query dedicada com filtro `f_vendedor = currentUser.id`, sem filtro de status — sempre mostra contagens totais do vendedor logado, independente dos filtros da tabela.

### 3. Interação de clique nos cards

- Clicar em um card → aplica filtro `f_status = <status_key>` na tabela + destaca o card visualmente
- Clicar no card já ativo → remove o filtro (volta a mostrar todas as negociações)
- Estado default (nenhum card ativo) → tabela sem filtro de status

### 4. Extensão do `StatusSummaryCards`

**Arquivo:** `src/components/status-summary-cards.tsx`

Adicionar ao componente:

- `onClick?: (key: string) => void` — callback ao clicar em um card
- `activeKey?: string | null` — key do card ativo para destaque visual

Estilo do card ativo: borda com a cor do status correspondente (via prop `getVariant` ou cor explícita).

### 5. Fluxo de dados

```
VendasPage
├── StatusSummaryCards (query: vendedor logado, sem filtro de status)
│   └── onClick → seta statusFilter state
├── VendasFilters (recebe statusFilter como valor inicial)
└── NegociacoesList (query: filtros da filter bar + statusFilter)
```

O `statusFilter` é state local de `VendasPage`. Quando um card é clicado, o status é passado como filtro para a tabela (junto com os filtros existentes da filter bar).

## Arquivos afetados

| Arquivo                                   | Mudança                                                                |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| `src/pages/cs/vendas/vendas.tsx`          | Remove tabs, renderiza conteúdo inline, adiciona seção de status cards |
| `src/components/status-summary-cards.tsx` | Adiciona props `onClick` e `activeKey`                                 |
| `src/routes/cs/vendas/lista.tsx`          | Redirect → `/cs/vendas`                                                |

## Limites

- Não alterar a lógica de filtros existentes (VendasFilters)
- Não alterar o componente NegociacoesList
- Não adicionar card "Arquivado" (status 6)
- Cards sempre mostram contagens do vendedor logado, independente dos filtros da tabela
