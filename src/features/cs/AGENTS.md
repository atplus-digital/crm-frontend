<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — cs

<!-- AGENTS-GENERATED:START overview -->

## Overview

Customer Success domain module — contracts, negotiations, and people flows (types, services, React Query hooks, and domain UI components).

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                 | Purpose                                                     |
| ------------------------------------ | ----------------------------------------------------------- |
| `contratos/`                         | Contract subdomain (types, service, hooks, table, filters)  |
| `negociacoes/`                       | Negotiation subdomain (types, service, hooks, kanban, list) |
| `pessoas/`                           | Person subdomain (PF/PJ types, service, hooks, columns)     |
| `troca-titularidade/`                | Ownership transfer subdomain (has own `AGENTS.md`)          |
| `contratos/contratos-types.ts`       | Contract statuses and list/filter params                    |
| `contratos/contratos-service.ts`     | Contract fetch/detail using `ixcRepository`                 |
| `contratos/contratos-hooks.ts`       | React Query query options/hooks for contracts               |
| `negociacoes/negociacoes-types.ts`   | Negotiation entities, statuses/substatuses, and list params |
| `negociacoes/negociacoes-service.ts` | CRUD + list/detail services for negotiations                |
| `negociacoes/negociacoes-hooks.ts`   | React Query hooks for negotiations                          |
| `pessoas/pessoas-types.ts`           | Person (PF/PJ) entities and filtering/pagination types      |
| `pessoas/pessoas-service.ts`         | CRUD/list services for PF/PJ using NocoBase repositories    |
| `pessoas/pessoas-hooks.ts`           | React Query hooks for PF/PJ lists and details               |
| `back-button.tsx`                    | Cross-CS back navigation helper for detail pages            |
| `detail-field.tsx`                   | Read-only label/value primitive for CS detail screens       |
| `detail-skeleton.tsx`                | Shared skeletons for CS detail sections and cards           |
| `contract-tab-wrapper.tsx`           | Shared card wrapper for contract/negotiation tab bodies     |
| `contract-tab-skeleton.tsx`          | Skeleton body used by the shared contract tab wrapper       |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Domain separation by concern: each subdomain uses the `*-types.ts` + `*-service.ts` + `*-hooks.ts` trio inside its own folder.
- Hooks expose stable query keys (`["cs", ...]`) and call service functions only.
- Service-layer filtering should use `#/lib/filter-builder` helpers whenever possible.
- IXC contract access lives in `contratos/contratos-service.ts` through `ixcRepository`; NocoBase collections for people/negotiations use `nocobaseRepository`.
- External modules should import from specific subdomain files (e.g., `#/features/cs/contratos/contratos-service`), not from a root `index.ts` (no barrel export exists).
- Services must call repositories with generated interfaces (`#/generated/**`) as source-of-truth; never redefine repository collection schemas manually.
- If an interface is missing for a collection, prefer updating the type generator config and regenerating before introducing any manual type.
- Relationship/appends typing (for example `f_nc_cliente`) must be derived from generated interfaces using `Pick`/`Omit`, never manually re-declared.
- Shared CS presentation primitives live at the feature root and are imported
  from `#/features/cs/*`; keep subdomain-specific UI next to the owning flow.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                          | Reference file                                     |
| -------------------------------- | -------------------------------------------------- |
| Contract list service            | `src/features/cs/contratos/contratos-service.ts`   |
| Negotiation hook pattern         | `src/features/cs/negociacoes/negociacoes-hooks.ts` |
| People filter + repository usage | `src/features/cs/pessoas/pessoas-service.ts`       |
| Domain table composition         | `src/features/cs/contratos/contratos-table.tsx`    |

<!-- AGENTS-GENERATED:END golden-samples -->
