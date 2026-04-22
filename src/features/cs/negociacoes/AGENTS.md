<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — cs/negociacoes

<!-- AGENTS-GENERATED:START overview -->

## Overview

Negotiations subdomain for CS — list/kanban workflows, filtering, CSV export,
and detail-tab composition for negotiation lifecycle data.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                             | Purpose                                                     |
| -------------------------------- | ----------------------------------------------------------- |
| `negociacoes-types.ts`           | Domain types, status/substatus labels, and filter contracts |
| `negociacoes-service.ts`         | CRUD/list operations and CSV export helper wiring           |
| `negociacoes-hooks.ts`           | React Query hooks and query keys                            |
| `negociacoes-list.tsx`           | Tabular list for all negotiations                           |
| `negociacoes-kanban.tsx`         | Kanban board grouped by workflow status                     |
| `negociacoes-filters.tsx`        | Kanban/list filter UIs and action controls                  |
| `negociacao-badges.tsx`          | Shared badges for status/substatus/metadata                 |
| `negociacao-anexos-tab.tsx`      | Detail tab for attachments                                  |
| `negociacao-comentarios-tab.tsx` | Detail tab for comments                                     |
| `negociacao-itens-tab.tsx`       | Detail tab for negotiated items                             |
| `export-csv.ts`                  | CSV formatting utility used by negotiation export flow      |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep `negociacoes-list.tsx` as a presentational table component; filter/query
  state orchestration belongs to page/route layers.
- Status and motive chips should use shared `StatusBadge`/subdomain badge maps,
  not inline badge class logic in page components.
- List and kanban views share the same filter contract (`NegociacaoFilters`);
  new filter fields must be supported in both modes.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                         | Reference file                                        |
| ------------------------------- | ----------------------------------------------------- |
| Negotiation hook/query contract | `src/features/cs/negociacoes/negociacoes-hooks.ts`    |
| List table composition          | `src/features/cs/negociacoes/negociacoes-list.tsx`    |
| Filter UI parity (kanban/list)  | `src/features/cs/negociacoes/negociacoes-filters.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->
