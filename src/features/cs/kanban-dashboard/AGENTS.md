<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-24 -->

# AGENTS.md — kanban-dashboard

<!-- AGENTS-GENERATED:START overview -->

## Overview

Kanban Dashboard subdomain — unified Kanban board combining three NocoBase collections (Troca Titularidade, Troca Endereço, Suspensão de Contrato) into a single status-driven view.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                        | Purpose                                                               |
| --------------------------- | --------------------------------------------------------------------- |
| `kanban-dashboard-types.ts` | Unified status columns, discriminated card union, status mapping fns  |
| `kanban-dashboard-hooks.ts` | Parallel `useQueries` fetch for TT/TE/SC + normalization to cards     |
| `kanban-card.tsx`           | Individual card component with source-collection badge and navigation |
| `kanban-column.tsx`         | Single column component with pagination and card rendering            |
| `kanban-board.tsx`          | Board layout composing columns from grouped status cards              |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- The board normalizes three distinct NocoBase collections (`t_crm_troca_titularidade`, `t_troca_endereco`, `t_suspensao_contrato`) into a single `KanbanDashboardCard` discriminated union typed from generated interfaces (`#/generated/nocobase/**`).
- Status mapping functions (`mapTrocaTitularidadeStatus`, `mapTrocaEnderecoStatus`, `mapSuspensaoContratoStatus`) translate source-specific status codes into the unified `UnifiedStatusKey` set: Novo → Em Andamento → Assinatura → Concluído → Cancelado.
- Data fetching uses `useQueries` with three independent `queryOptions` (query keys: `["kanban-dashboard", "tt"|"te"|"sc"]`), each with `staleTime: 10_000` and `pageSize: 200`.
- Cards navigate to their source detail page via `buildRoute()` using the collection-specific route name from `CARD_CONFIG`.
- Keep types, hooks, and UI components colocated in this folder — no barrel `index.ts` exists; import directly from the file path.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                            | Reference file                                               |
| ---------------------------------- | ------------------------------------------------------------ |
| Unified discriminated union types  | `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts` |
| Parallel multi-collection fetching | `src/features/cs/kanban-dashboard/kanban-dashboard-hooks.ts` |
| Kanban card with navigation        | `src/features/cs/kanban-dashboard/kanban-card.tsx`           |
| Board column grouping              | `src/features/cs/kanban-dashboard/kanban-board.tsx`          |

<!-- AGENTS-GENERATED:END golden-samples -->
