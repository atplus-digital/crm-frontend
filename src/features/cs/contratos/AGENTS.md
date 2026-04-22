<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — cs/contratos

<!-- AGENTS-GENERATED:START overview -->

## Overview

Contracts subdomain for CS — IXC contract listing/detail integrations and
contract-specific table, tabs, filters, and status badges.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                            | Purpose                                                     |
| ------------------------------- | ----------------------------------------------------------- |
| `contratos-types.ts`            | Contract entities, filters, sorting, and metadata contracts |
| `contratos-service.ts`          | IXC list/detail calls and filter mapping                    |
| `contratos-hooks.ts`            | React Query hooks for list/detail cache keys                |
| `contratos-table.tsx`           | Main contracts list table composition                       |
| `contratos-filters.tsx`         | Form filters for cpf/cnpj, nome, status, and contrato ID    |
| `contrato-status-badge.tsx`     | Status and internet badge renderers                         |
| `contrato-atendimentos-tab.tsx` | Contract support tickets tab section                        |
| `contrato-negociacoes-tab.tsx`  | Contract negotiations tab section                           |
| `contrato-registros-tab.tsx`    | Contract contact/history records tab section                |
| `contrato-movel-tab.tsx`        | Mobile/line-related contract tab section                    |

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
