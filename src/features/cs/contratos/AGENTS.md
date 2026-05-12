<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-11 -->

# AGENTS.md — cs/contratos

<!-- AGENTS-GENERATED:START overview -->

## Overview

Contracts subdomain for CS — IXC contract listing/detail integrations and
contract-specific table, tabs, filters, and status badges.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                   | Purpose                                                     |
| -------------------------------------- | ----------------------------------------------------------- |
| `contratos-types.ts`                   | Contract entities, filters, sorting, and metadata contracts |
| `contratos-service.ts`                 | IXC list/detail calls and filter mapping                    |
| `contratos-hooks.ts`                   | React Query hooks for list/detail cache keys                |
| `contratos-table.tsx`                  | Main contracts list table composition                       |
| `contratos-filters.tsx`                | Form filters for cpf/cnpj, nome, status, and contrato ID    |
| `contrato-status-badge.tsx`            | Status and internet badge renderers                         |
| `contrato-detalhes/tabs/atendimentos/` | Contract support tickets tab section                        |
| `contrato-detalhes/tabs/negociacoes/`  | Contract negotiations tab section                           |
| `contrato-detalhes/tabs/registros/`    | Contract contact/history records tab section                |
| `contrato-detalhes/tabs/movel/`        | Mobile/line-related contract tab section                    |
| `contrato-detalhes/tabs/detalhes/`     | Detail tab (summary, info, cliente, endereço, faturas)      |
| `contrato-detalhes/actions/`           | Sheet actions (troca-endereco, transferencia-titularidade)  |
| `informacoes-adicionais-card.tsx`      | Informações Adicionais section (4 fields from NocoBase)     |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep `contratos-table.tsx` focused on table rendering/composition; query and
  URL-state logic stays in route/page layer.
- Status visualization must use `ContratoStatusBadge` and `InternetStatusBadge`;
  avoid ad-hoc badge color logic in table cells.
- Filters for IXC list requests must be translated in `contratos-service.ts`
  using repository-compatible filter objects.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                     | Reference file                                        |
| --------------------------- | ----------------------------------------------------- |
| IXC list filter mapping     | `src/features/cs/contratos/contratos-service.ts`      |
| Contracts table composition | `src/features/cs/contratos/contratos-table.tsx`       |
| Status badge usage in table | `src/features/cs/contratos/contrato-status-badge.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->
