<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — cs

<!-- AGENTS-GENERATED:START overview -->

## Overview

Customer Success domain module — contracts, negotiations, and people flows (types, services, React Query hooks, and domain UI components).

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                     | Purpose                                                      |
| ------------------------ | ------------------------------------------------------------ |
| `index.ts`               | Public barrel export for CS hooks/services/types/components  |
| `contratos-types.ts`     | Contract domain types, statuses, and list/filter params      |
| `contratos-service.ts`   | Contract fetch/detail service using `ixcRepository`          |
| `contratos-hooks.ts`     | React Query query options/hooks for contracts                |
| `negociacoes-types.ts`   | Negotiation entities, statuses/substatuses, and list params  |
| `negociacoes-service.ts` | CRUD + list/detail services for negotiations                 |
| `negociacoes-hooks.ts`   | React Query hooks for negotiations                           |
| `pessoas-types.ts`       | Person (PF/PJ) entities and filtering/pagination types       |
| `pessoas-service.ts`     | CRUD/list services for PF/PJ using NocoBase repositories     |
| `pessoas-hooks.ts`       | React Query hooks for PF/PJ lists and details                |
| `components/`            | Domain UI (tables, filters, status badge, negotiation views) |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep domain separation by concern: each subdomain uses the `*-types.ts` + `*-service.ts` + `*-hooks.ts` trio.
- Hooks expose stable query keys (`["cs", ...]`) and call service functions only.
- Service-layer filtering should use `#/lib/filter-builder` helpers whenever possible.
- IXC contract access lives in `contratos-service.ts` through `ixcRepository`; NocoBase collections for people/negotiations use `nocobaseRepository`.
- External modules should import from `#/features/cs` instead of sub-files.
- Services must call repositories with generated interfaces (`#/generated/**`) as source-of-truth; never redefine repository collection schemas manually.
- If an interface is missing for a collection, prefer updating the type generator config and regenerating before introducing any manual type.
- Relationship/appends typing (for example `f_nc_cliente`) must be derived from generated interfaces using `Pick`/`Omit`, never manually re-declared.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                          | Reference file                                   |
| -------------------------------- | ------------------------------------------------ |
| Contract list service            | `src/features/cs/contratos-service.ts`           |
| Negotiation hook pattern         | `src/features/cs/negociacoes-hooks.ts`           |
| People filter + repository usage | `src/features/cs/pessoas-service.ts`             |
| Domain table composition         | `src/features/cs/components/contratos-table.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->
