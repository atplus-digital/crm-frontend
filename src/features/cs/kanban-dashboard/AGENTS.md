<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-11 -->

# AGENTS.md — kanban-dashboard

<!-- AGENTS-GENERATED:START overview -->

## Overview

Kanban Dashboard subdomain — unified Kanban board combining four NocoBase collections (Troca Titularidade, Troca Endereço, Suspensão de Contrato, Negociações) into a single status-driven view.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                 | Purpose                                                                          |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| `types/index.ts`                     | Barrel: status columns, card types, source collections, status mappings, filters |
| `hooks/use-kanban-dashboard-data.ts` | Main hook: parallel `useQueries` fetch for TT/TE/SC/NEG + normalization to cards |
| `hooks/query-options.ts`             | Private query option factories for each collection                               |
| `hooks/normalizers.ts`               | Private normalization helpers for each collection type                           |
| `kanban-dashboard-sort-controls.tsx` | Sort select + current-user toggle (extracted from filters)                       |
| `kanban-card.tsx`                    | Individual card component with source-collection badge and navigation            |
| `kanban-column.tsx`                  | Single column component with pagination and card rendering                       |
| `kanban-board.tsx`                   | Board layout composing columns from grouped status cards                         |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- The board normalizes four distinct NocoBase collections (`t_crm_troca_titularidade`, `t_troca_endereco`, `t_suspensao_contrato`, `t_negociacoes`) into a single `KanbanDashboardCard` discriminated union typed from generated interfaces (`#/generated/nocobase/**`).
- Status mapping functions (`mapTrocaTitularidadeStatus`, `mapTrocaEnderecoStatus`, `mapSuspensaoContratoStatus`, `mapNegociacaoStatus`) translate source-specific status codes into the unified `UnifiedStatusKey` set: Novo → Em Andamento → Assinatura → Concluído → Cancelado.
- Data fetching uses `useQueries` with four independent `queryOptions` (query keys: `["kanban-dashboard", "tt"|"te"|"sc"|"neg"]`), each with `staleTime: 10_000` and `pageSize: 200`.
- Cards navigate to their source detail page via `buildRoute()` using the collection-specific route name from `SOURCE_COLLECTION_OPTIONS`.
- Badge colors and labels for source collections are centralized in `SOURCE_COLLECTION_BADGE` in `kanban-dashboard-types.ts` (not inline in card component).
- Types and hooks are split into `types/` and `hooks/` subdirectories for maintainability; the legacy files (`kanban-dashboard-types.ts`, `kanban-dashboard-hooks.ts`) remain as barrel re-exports for backward compatibility. New imports should use `./types` or `./hooks/use-kanban-dashboard-data` directly.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                            | Reference file                                                        |
| ---------------------------------- | --------------------------------------------------------------------- |
| Unified discriminated union types  | `src/features/cs/kanban-dashboard/types/card-types.ts`                |
| Parallel multi-collection fetching | `src/features/cs/kanban-dashboard/hooks/use-kanban-dashboard-data.ts` |
| Kanban card with navigation        | `src/features/cs/kanban-dashboard/kanban-card.tsx`                    |
| Board column grouping              | `src/features/cs/kanban-dashboard/kanban-board.tsx`                   |

<!-- AGENTS-GENERATED:END golden-samples -->
