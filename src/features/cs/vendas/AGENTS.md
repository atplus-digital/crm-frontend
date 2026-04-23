<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-23 -->

# AGENTS.md — vendas

<!-- AGENTS-GENERATED:START overview -->

## Overview

Vendas subdomain for CS — seller lookup, list columns, and dedicated filter UI for negotiation records in the sales view.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                | Purpose                                              |
| ----------------------------------- | ---------------------------------------------------- |
| `vendas-service.ts`                 | Fetches sellers (`users`) for sales filters          |
| `vendas-hooks.ts`                   | React Query options/hook for seller lookup           |
| `vendas-list-columns.tsx`           | Table columns and value formatting for sales list    |
| `vendas-filters/vendas-filters.tsx` | Sales filter bar (seller/status/substatus/text/date) |
| `vendas-filters/index.ts`           | Barrel export for sales filters                      |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Sales filters reuse `NegociacaoFilters` and status/substatus options from `#/features/cs/negociacoes/negociacoes-types`.
- Seller options come from NocoBase `users` via `fetchVendedores()`; keep service sorted by `nickname`.
- Sales list columns are typed as `NegociacaoWithRelations` (`VendasItem`) and use shared formatting helpers from `#/lib/utils`.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                       | Reference file                                             |
| ----------------------------- | ---------------------------------------------------------- |
| Seller query options          | `src/features/cs/vendas/vendas-hooks.ts`                   |
| Sales filter composition      | `src/features/cs/vendas/vendas-filters/vendas-filters.tsx` |
| Sales list column definitions | `src/features/cs/vendas/vendas-list-columns.tsx`           |

<!-- AGENTS-GENERATED:END golden-samples -->
