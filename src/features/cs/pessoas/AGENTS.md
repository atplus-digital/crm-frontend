<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — cs/pessoas

<!-- AGENTS-GENERATED:START overview -->

## Overview

People (Pessoas) subdomain for CS — handles both physical persons (PF / `t_pessoas`) and legal entities (PJ / `t_empresas`) with separate types, services, hooks, and column definitions.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                  | Purpose                                                                       |
| --------------------- | ----------------------------------------------------------------------------- |
| `pessoas-types.ts`    | PF/PJ filter contracts and list params types                                  |
| `pessoas-service.ts`  | CRUD + list for PF/PJ using `nocobaseRepository`                              |
| `pessoas-hooks.ts`    | React Query hooks and query keys (`usePessoasFisicas`, `usePessoasJuridicas`) |
| `pessoas-columns.tsx` | TanStack `ColumnDef` definitions for PF/PJ tables with badges                 |

<!-- AGENTS-GENERATED:END filemap -->

## Collections

**NocoBase:** `t_pessoas` (PF), `t_empresas` (PJ)

**Key PF fields:** `f_nome`, `f_cpf`, `f_email`, `f_telefone`, `f_analise_ixc`

**Key PJ fields:** `f_razao_social`, `f_nome_fantasia`, `f_cnpj`, `f_inscricao_estadual`

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- PF and PJ use **separate** type/params/hooks — `PessoaFisica*` vs `PessoaJuridica*` prefixes.
- Services use `nocobaseRepository` (not `ixcRepository`) — these are NocoBase collections.
- Filter building uses `filter-builder` helpers (`includes`, `eq`) in `pessoas-service.ts`.
- Column definitions include `StatusBadge` for `f_analise_ixc` and credit-related badges.
- Query keys follow the `["cs", "pessoas", "fisicas" | "juridicas", params]` pattern.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                    | Reference file                                |
| -------------------------- | --------------------------------------------- |
| People filter + repository | `src/features/cs/pessoas/pessoas-service.ts`  |
| PF/JK column definitions   | `src/features/cs/pessoas/pessoas-columns.tsx` |
| Dual hook pattern (PF/JK)  | `src/features/cs/pessoas/pessoas-hooks.ts`    |

<!-- AGENTS-GENERATED:END golden-samples -->

## When instructions conflict

The nearest `AGENTS.md` wins. See `src/features/cs/AGENTS.md` for CS domain patterns.
