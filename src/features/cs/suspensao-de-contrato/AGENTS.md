<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — suspensao-de-contrato

<!-- AGENTS-GENERATED:START overview -->

## Overview

Contract suspension feature — manages suspension requests with ZapSign digital signature integration, status lifecycle, and comments.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                           | Purpose                                                                                  |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `suspensao-de-contrato-types.ts`               | Status labels (local override), filter options, badge variants, filter/params interfaces |
| `suspensao-de-contrato-hooks.ts`               | React Query hooks for list/detail via `nocobaseRepository`                               |
| `suspensao-de-contrato-filters.tsx`            | Filter bar component (Status, Título, dates, Criado por)                                 |
| `detail-section.tsx`                           | Card wrapper for detail page sections                                                    |
| `components/suspensao-de-contrato-list.tsx`    | DataTableContainer with 8 columns                                                        |
| `components/suspensao-de-contrato-details.tsx` | Detail page with 2 tabs (Detalhes + Contrato)                                            |
| `index.ts`                                     | Barrel export for hooks and components                                                   |

<!-- AGENTS-GENERATED:END filemap -->

## Collection

**NocoBase:** `t_suspensao_contrato`

**Key fields:**

- `f_status` — workflow status (1-5)
- `f_titulo` — customer name
- `f_cpf` — CPF/CNPJ
- `f_id_contrato` — IXC contract ID
- `f_email`, `f_telefone` — contact info for ZapSign
- `f_dias_suspensao` — suspension duration in days
- `f_link_assinatura` — ZapSign verification URL
- `f_contratos` — signed contract PDF (relation)
- `f_comentarios` — comments relation (via `t_comentarios_suspensao_de_contrato`)

**Relations:** `createdBy`, `updatedBy`, `f_comentarios`, `f_contratos`, `f_pessoas`, `f_pessoas_pj`, `f_responsavel`

<!-- AGENTS-GENERATED:START status -->

## Status Values

| Value | Label                 |
| ----- | --------------------- |
| `1`   | Nova Solicitação      |
| `2`   | Aguardando Assinatura |
| `3`   | Assinatura Concluída  |
| `4`   | Concluído             |
| `5`   | Cancelado             |

> **Note:** The generated `SUSPENSAOCONTRATO_STATUS_LABELS` is outdated. Always use the local `SUSPENSAO_CONTRATO_STATUS_LABELS` override from `suspensao-de-contrato-types.ts`.

<!-- AGENTS-GENERATED:END status -->

## Routes

| Path                            | Page        |
| ------------------------------- | ----------- |
| `/cs/suspensao-de-contrato`     | List page   |
| `/cs/suspensao-de-contrato/:id` | Detail page |

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Hooks call `nocobaseRepository` directly (no service file) — same as `troca-titularidade`.
- Collection `"t_suspensao_contrato"` is not yet in `CollectionName`, so hooks cast it as `"users"` to satisfy the type system.
- Status labels use a local override — never import `SUSPENSAOCONTRATO_STATUS_LABELS` from generated.
- Detail page uses Tabs component with two tabs: "Detalhes Suspensão" and "Contrato".
- Action buttons (Enviar, Concluir, Arquivar) are disabled UI-only — mutation logic is out of scope.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                      | Reference file                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| Hook with untyped collection | `src/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks.ts`               |
| Detail page with tabs        | `src/features/cs/suspensao-de-contrato/components/suspensao-de-contrato-details.tsx` |

<!-- AGENTS-GENERATED:END golden-samples -->

## When instructions conflict

The nearest `AGENTS.md` wins. See `src/features/cs/AGENTS.md` for CS domain patterns.
