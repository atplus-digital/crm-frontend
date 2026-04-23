<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-23 -->

# AGENTS.md — troca-de-endereco

<!-- AGENTS-GENERATED:START overview -->

## Overview

Troca de Endereço subdomain — list/detail screens, query hooks, and filter contracts for address change requests.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                    | Purpose                                                            |
| --------------------------------------- | ------------------------------------------------------------------ |
| `troca-endereco-types.ts`               | Filter contracts, status options, and UI status color mappings     |
| `troca-endereco-hooks.ts`               | Query options/hooks for list and detail using `nocobaseRepository` |
| `troca-endereco-filters.tsx`            | Filter bar UI for status/cliente/IDs/date filters                  |
| `components/troca-endereco-list.tsx`    | Paginated/sortable table composition for exchange requests         |
| `components/troca-endereco-details.tsx` | Detail page sections for identification, address, contact, notes   |
| `index.ts`                              | Public exports for the subdomain                                   |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep list/detail components presentational; filtering and server-state are owned by hooks and page layer.
- Build repository filters via `buildFilter()` helpers (`eq`, `includes`, `gte`) in `troca-endereco-hooks.ts`.
- Status labels/options must come from generated enums/labels in `#/generated/nocobase/troca-endereco` (via local typed adapters in `troca-endereco-types.ts`).

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                         | Reference file                                                         |
| ------------------------------- | ---------------------------------------------------------------------- |
| Typed filter → repository query | `src/features/cs/troca-de-endereco/troca-endereco-hooks.ts`            |
| Standardized filter bar         | `src/features/cs/troca-de-endereco/troca-endereco-filters.tsx`         |
| Table composition               | `src/features/cs/troca-de-endereco/components/troca-endereco-list.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->
