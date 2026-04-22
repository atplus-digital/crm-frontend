<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-22 -->

# AGENTS.md — cs/troca-titularidade

<!-- AGENTS-GENERATED:START overview -->

## Overview

Ownership transfer feature — manages contract titularidade change requests between clients (cedente → cessionário) with ZapSign integration, status/substatus workflow, and full audit trail.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                        | Purpose                                      |
| ------------------------------------------- | -------------------------------------------- |
| `index.ts`                                  | Barrel export for hooks and types            |
| `troca-titularidade-hooks.ts`               | React Query hooks for list/detail operations |
| `components/troca-titularidade-list.tsx`    | Paginated list with status filtering         |
| `components/troca-titularidade-details.tsx` | Detail page with all transfer sections       |

<!-- AGENTS-GENERATED:END filemap -->

## Collection

**NocoBase:** `t_crm_troca_titularidade`

**Key fields:**

- `f_status` / `f_substatus` — workflow status
- `f_cedente` / `f_cedente_documento` — cedente name + document
- `f_cessionario` / `f_cessionario_documento` — cessionário name + document
- `f_id_contrato` — associated contract ID
- `f_link_assinatura_cedente` / `f_link_assinatura_cessionario` — ZapSign links
- `f_endereco`, `f_numero`, `f_bairro`, `f_cidade`, `f_estado`, `f_cep` — address
- `f_anexos[]` — attachments relation
- `f_comentarios[]` — comments relation
- `f_pessoa_pf` / `f_pessoa_pj` — person relations (optional)
- `f_vendedor` — responsible seller

**Relations:** `f_anexos`, `f_comentarios`, `f_pessoa_pf`, `f_pessoa_pj`, `f_vendedor`

<!-- AGENTS-GENERATED:START status -->

## Status Values

| Value | Label                 |
| ----- | --------------------- |
| `0`   | Novo                  |
| `1`   | Aguardando assinatura |
| `2`   | Aguardando Auditoria  |
| `3`   | Concluído             |
| `9`   | Cancelado             |

## Substatus Values

| Value | Label                                   |
| ----- | --------------------------------------- |
| `0`   | NA                                      |
| `1`   | APROVADO — Aguardando inserção no IXC   |
| `2`   | APROVADO — Erro na integração com o IXC |
| `3`   | APROVADO — Concluído                    |
| `4`   | REPROVADO — Divergência de Dados        |
| `5`   | REPROVADO — Financeiro em Atraso        |
| `6`   | AGUARDANDO — Auditoria                  |

<!-- AGENTS-GENERATED:END status -->

## Routes

| Path                         | Page        |
| ---------------------------- | ----------- |
| `/troca-de-titularidade`     | List page   |
| `/troca-de-titularidade/:id` | Detail page |

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- List page uses `DataTableWithPagination` with status/substatus filter predicates.
- Detail page renders sections: Dados da Transferência, Cedente, Cessionário, Endereço, Contrato, Anexos, Comentários.
- ZapSign links (`f_link_assinatura_cedente`, `f_link_assinatura_cessionario`) render as external links.
- All repository calls use `nocobaseRepository` with generated types from `#/generated/nocobase/crm-troca-titularidade`.

<!-- AGENTS-GENERATED:END patterns -->

## When instructions conflict

The nearest `AGENTS.md` wins. See `src/features/cs/AGENTS.md` for domain patterns.
