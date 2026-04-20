# AGENTS.md — Troca de Titularidade

**Domain:** Customer Success (CS) - Gerenciamento de Transferência de Titularidade

## Overview

Funcionalidade de Transferência de Titularidade para permitir a mudança de titularidade de contratos entre clientes. Permite o acompanhamento completo do processo de transferência com status, documentos e histórico.

## File Map

| File                                            | Purpose                                              |
| ----------------------------------------------- | ---------------------------------------------------- |
| `components/troca-titularidade-details.tsx`     | Página de detalhes com todas as informações da troca |
| `components/troca-titularidade-list.tsx`        | Lista de solicitações de troca de titularidade       |
| `components/troca-titularidade-attachments.tsx` | Exibição de anexos da troca                          |
| `components/troca-titularidade-comments.tsx`    | Exibição de comentários da troca                     |
| `troca-titularidade-hooks.ts`                   | Hooks para operações de dados                        |
| `index.ts`                                      | Barrel export dos componentes públicos               |

## Collection Schema

- **Collection:** `t_crm_troca_titularidade`
- **Primary Keys:** `id`, `f_status`, `f_substatus`
- **Key Fields:**
  - `f_cedente` / `f_cedente_documento` - Dados do cedente
  - `f_cessionario` / `f_cessionario_documento` - Dados do cessionário
  - `f_id_contrato` - ID do contrato associado
  - `f_link_assinatura_cedente` / `f_link_assinatura_cessionario` - Links ZapSign
  - `f_endereco`, `f_numero`, `f_bairro`, `f_cidade`, `f_estado`, `f_cep` - Endereço

## Key Enums

### Status Options

- `Value0` (Novo)
- `Value1` (Aguardando assinatura)
- `Value2` (Aguardando Auditoria)
- `Value3` (Concluído)
- `Value9` (Cancelado)

### Substatus Options

- `Value0` (NA)
- `Value1` (APROVADO - Aguardando inserção no IXC)
- `Value2` (APROVADO - Erro na integração com o IXC)
- `Value3` (APROVADO - Concluído)
- `Value4` (REPROVADO - Divergência de Dados)
- `Value5` (REPROVADO - Financeiro em Atraso)
- `Value6` (AGUARDANDO - Auditoria)

## Relations

- `f_anexos[]` - Anexos da troca de titularidade
- `f_comentarios[]` - Comentários registrados
- `f_pessoa_pf` - Pessoa física associada (opcional)
- `f_pessoa_pj` - Pessoa jurídica associada (opcional)
- `f_vendedor` - Usuário vendedor responsável

## UI Components

### Detail Sections

1. **Dados da Transferência** - ID, Status, Substatus, datas
2. **Cedente** - Informações do cedente com link de assinatura
3. **Cessionário** - Informações do cessionário com link de assinatura
4. **Endereço** - Localização completa
5. **Contrato** - ID do contrato associado
6. **Anexos** - Documentos com links para download
7. **Comentários** - Histórico de observações

## Routes

- **List:** `/troca-titularidade` - Lista de todas as transferências
- **Detail:** `/troca-titularidade/:id` - Detalhes de transferência específica

## Dependencies

- **Repository:** `#/repositories/nocobase-repository.ts`
- **Types:** `#/generated/nocobase/crm-troca-titularidade.ts`
- **Components:** `#/components/ui/*`, `#/components/detail/*`
