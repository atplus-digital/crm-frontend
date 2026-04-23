# Relatório Comparativo: Comercial vs CS — Negociações

> Gerado em: 2026-04-23
> Fonte: Crawl do NocoBase Admin + análise do código React (`src/features/cs/`)

---

## 1. Visão Geral

O menu **CRM** no NocoBase Admin (`/admin/qa4b3t1kpn1`) se divide em duas seções principais:

| Seção         | Admin URL            | Coleção Principal                    | Propósito                                                                 |
| ------------- | -------------------- | ------------------------------------ | ------------------------------------------------------------------------- |
| **Comercial** | `/admin/cwxhgdgv4ik` | `t_negociacoes`                      | Pipeline de vendas — novas vendas, upgrades, downgrades, reativações      |
| **CS**        | `/admin/yuxh11j8f6y` | `t_negociacoes` + coleções dedicadas | Renegociação, transferência de titularidade, suspensão, troca de endereço |

**Conceito-chave**: Ambas as seções operam sobre o mesmo ecossistema de dados, mas com **coleções distintas** e **campos com sobreposição parcial**.

---

## 2. Estrutura de Coleções

### 2.1 Comercial — `t_negociacoes` (Negociações)

Coleção central do pipeline comercial. **70+ campos** cobrindo identificação, cliente, endereço, valores financeiros, pacote/serviços, assinatura digital e pontos de atenção.

**Motivos de Negociação (f_motivo):**

| Código | Label                   | Uso                   |
| ------ | ----------------------- | --------------------- |
| `I`    | Venda Nova              | Comercial (principal) |
| `M`    | Mudança de Endereço     | CS / Comercial        |
| `D`    | Downgrade               | Comercial             |
| `U`    | Upgrade                 | Comercial             |
| `N`    | Renegociação            | CS (principal)        |
| `R`    | Reativação              | Comercial / CS        |
| `T`    | Mudança de Tecnologia   | Comercial             |
| `L`    | Mudança de Titularidade | CS                    |
| `S`    | Segunda Contratação     | Comercial             |
| `P`    | Proposta                | Comercial             |

**Status (f_status):**

| Valor | Label      | Fluxo              |
| ----- | ---------- | ------------------ |
| `1`   | Novo       | Início             |
| `2`   | Negociando | Em andamento       |
| `3`   | Assinatura | Assinatura digital |
| `4`   | Auditoria  | Revisão            |
| `5`   | Concluído  | Finalizado         |
| `6`   | Arquivado  | Encerrado          |

**Substatus (f_substatus):** 13 variações (APROVADO/REPROVADO com motivos específicos)

---

### 2.2 CS — 4 Coleções Dedicadas

#### A. Renegociações — `t_negociacoes` (mesma coleção, filtro diferente)

O CS usa a **mesma coleção `t_negociacoes`** mas com filtros distintos:

- `f_motivo = N` (Renegociação), `M` (Mudança Endereço), `L` (Mudança Titularidade), `R` (Reativação)
- Foco em valores devedores, multas, parcelamento

#### B. Transferência de Titularidade — `t_crm_troca_titularidade`

Coleção **completamente separada** com estrutura de **cedente → cessionário**.

**Campos (22 campos):**

| Campo                                                                 | Tipo   | Descrição                                                                         |
| --------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| `f_cedente`                                                           | string | Nome do cedente (quem transfere)                                                  |
| `f_cedente_documento`                                                 | string | CPF/CNPJ do cedente                                                               |
| `f_cedente_email`                                                     | string | Email do cedente                                                                  |
| `f_cedente_telefone`                                                  | string | Telefone do cedente                                                               |
| `f_cedente_responsavel_legal`                                         | string | Responsável legal do cedente                                                      |
| `f_cessionario`                                                       | string | Nome do cessionário (quem recebe)                                                 |
| `f_cessionario_documento`                                             | string | CPF/CNPJ do cessionário                                                           |
| `f_cessionario_email`                                                 | string | Email do cessionário                                                              |
| `f_cessionario_telefone`                                              | string | Telefone do cessionário                                                           |
| `f_cessionario_responsavel`                                           | string | Responsável do cessionário                                                        |
| `f_link_assinatura_cedente`                                           | string | ZapSign link do cedente                                                           |
| `f_link_assinatura_cessionario`                                       | string | ZapSign link do cessionário                                                       |
| `f_id_contrato`                                                       | string | Contrato vinculado                                                                |
| `f_endereco`, `f_numero`, `f_bairro`, `f_cidade`, `f_estado`, `f_cep` | string | Endereço                                                                          |
| `f_complemento`                                                       | enum   | Casa/Apartamento/Condomínio/Comercial                                             |
| `f_status`                                                            | enum   | 0=Novo, 1=Aguardando assinatura, 2=Aguardando Auditoria, 3=Concluído, 9=Cancelado |
| `f_substatus`                                                         | enum   | 7 variações (APROVADO/REPROVADO)                                                  |
| `f_estado`                                                            | enum   | SC                                                                                |
| `f_tipo_pessoa`                                                       | enum   | PF/PJ                                                                             |
| `f_ordenacao`                                                         | number | Ordenação                                                                         |
| `f_fk_negociacao_vendedor`                                            | FK     | Vendedor responsável                                                              |

**Relações:** `f_pessoa_pf`, `f_pessoa_pj`, `f_vendedor`, `f_trocadetitularidade_contrato`, `f_anexos`, `f_comentarios`

**Status exclusivo:** Não compartilha status com `t_negociacoes` — tem seu próprio ciclo de vida.

---

#### C. Suspensão de Contrato — `t_suspensao_contrato`

Coleção dedicada para solicitações de suspensão.

**Campos (13 campos):**

| Campo                | Tipo   | Descrição                                                                                     |
| -------------------- | ------ | --------------------------------------------------------------------------------------------- |
| `f_titulo`           | string | Nome do cliente                                                                               |
| `f_cpf`              | string | CPF/CNPJ                                                                                      |
| `f_email`            | string | Email para ZapSign                                                                            |
| `f_telefone`         | string | Telefone para contato                                                                         |
| `f_id_contrato`      | string | Contrato IXC                                                                                  |
| `f_dias_suspensao`   | string | Duração da suspensão                                                                          |
| `f_inicio_suspensao` | string | Data início                                                                                   |
| `f_final_suspensao`  | string | Data fim                                                                                      |
| `f_link_assinatura`  | string | ZapSign verification link                                                                     |
| `f_status`           | enum   | 1=Nova Solicitação, 2=Aguardando Assinatura, 3=Assinatura Concluída, 4=Concluído, 5=Cancelado |
| `f_fk_pessoas`       | FK     | Pessoa Física                                                                                 |
| `f_fk_pessoas_pj`    | FK     | Pessoa Jurídica                                                                               |
| `f_fk_responsavel`   | FK     | Responsável                                                                                   |

**Relações:** `f_comentarios`, `f_contratos`, `f_pessoas`, `f_pessoas_pj`, `f_responsavel`

---

#### D. Troca de Endereço — `t_troca_endereco`

Coleção dedicada para mudanças de endereço.

**Campos (15 campos):**

| Campo                    | Tipo   | Descrição                                                          |
| ------------------------ | ------ | ------------------------------------------------------------------ |
| `f_cliente`              | string | Nome do cliente                                                    |
| `f_telefone_contato`     | string | Telefone de contato                                                |
| `f_id_contrato`          | string | Contrato IXC                                                       |
| `f_id_atendimento`       | string | ID do atendimento                                                  |
| `f_cep`                  | string | CEP                                                                |
| `f_endereco`             | string | Logradouro                                                         |
| `f_endereco_numero`      | string | Número                                                             |
| `f_endereco_complemento` | string | Complemento                                                        |
| `f_bairro`               | string | Bairro                                                             |
| `f_endereco_cidade`      | string | Cidade                                                             |
| `f_endereco_estado`      | string | Estado                                                             |
| `f_endereco_referencia`  | string | Ponto de referência                                                |
| `f_taxa_instalacao`      | enum   | 0=Não, 1=R$80 à vista, 2=R$80 em 2x                                |
| `f_status`               | enum   | 1=Atendimento Gerado, 2=Concluído, 3=Para Campo, 4=Para CR, 0=Erro |
| `f_obs`                  | string | Observações                                                        |

**Relações:** `createdBy`, `updatedBy` (sem relações complexas)

---

## 3. Comparativo Direto: Campos por Seção

### 3.1 Campos Exclusivos do Comercial (em `t_negociacoes`)

Estes campos existem em `t_negociacoes` mas **não têm equivalente** nas coleções CS:

| Campo                                                      | Descrição                         |
| ---------------------------------------------------------- | --------------------------------- |
| `f_valor_mensal`                                           | Valor mensal da negociação        |
| `f_valor_mensal_antigo`                                    | Valor mensal anterior             |
| `f_valor_mensal_sem_desconto`                              | Valor sem desconto                |
| `f_valor_instalacao`                                       | Custo de instalação               |
| `f_valor_devedor`                                          | Valor total devido                |
| `f_valor_devedor_total`                                    | Total devedor (auto-calculado)    |
| `f_valor_da_parcela`                                       | Valor da parcela (auto-calculado) |
| `f_multa_juros`                                            | Multa e juros                     |
| `f_entrada_saldo_devedor`                                  | Entrada/saldo devedor             |
| `f_parcelas_mensais`                                       | Número de parcelas                |
| `f_valor_beneficios`                                       | Valor de benefícios               |
| `f_Incremento`                                             | Incremento (auto)                 |
| `f_valor_multa_mes_faltante`                               | Multa mês faltante                |
| `f_scm`, `f_smp`, `f_stfc`, `f_sva`                        | Serviços (Mbps/quantidade)        |
| `f_pacote` (relação)                                       | Pacote principal                  |
| `f_pacotes_adicionais` (relação)                           | Pacotes adicionais                |
| `f_fidelidade`                                             | Período de fidelidade             |
| `f_data_vencimento`                                        | Dia de vencimento                 |
| `f_cupom_desconto` (relação)                               | Cupom de desconto                 |
| `f_vendedor` (relação)                                     | Vendedor responsável              |
| `f_zapsign`, `f_assinatura_gov`                            | Assinatura digital                |
| `f_pontos_atencao`                                         | Pontos de atenção                 |
| `f_confissao_divida`                                       | Confissão de dívida               |
| `f_motivo_pontos`                                          | Motivos dos pontos                |
| `f_endereco_cobranca` (completo)                           | Endereço de cobrança separado     |
| `f_nome_razao`, `f_nome_fantasia`, `f_cpf_cnpj`, `f_rg_ie` | Dados completos PJ                |
| `f_tipo_pessoa`                                            | PF ou PJ                          |
| `f_ordenacao`                                              | Ordenação no pipeline             |

### 3.2 Campos Exclusivos do CS (nas coleções dedicadas)

Estes campos existem **apenas** nas coleções CS e não em `t_negociacoes`:

| Campo                                                         | Coleção            | Descrição               |
| ------------------------------------------------------------- | ------------------ | ----------------------- |
| `f_cedente` / `f_cessionario`                                 | troca_titularidade | Par cedente-cessionário |
| `f_cedente_documento` / `f_cessionario_documento`             | troca_titularidade | Documentos das partes   |
| `f_cedente_email` / `f_cessionario_email`                     | troca_titularidade | Emails das partes       |
| `f_cedente_telefone` / `f_cessionario_telefone`               | troca_titularidade | Telefones das partes    |
| `f_cedente_responsavel_legal`                                 | troca_titularidade | Resp. legal cedente     |
| `f_cessionario_responsavel`                                   | troca_titularidade | Responsável cessionário |
| `f_link_assinatura_cedente` / `f_link_assinatura_cessionario` | troca_titularidade | ZapSign por parte       |
| `f_dias_suspensao`                                            | suspensao_contrato | Duração da suspensão    |
| `f_inicio_suspensao` / `f_final_suspensao`                    | suspensao_contrato | Período de suspensão    |
| `f_taxa_instalacao`                                           | troca_endereco     | Taxa de instalação      |
| `f_id_atendimento`                                            | troca_endereco     | ID atendimento          |
| `f_obs`                                                       | troca_endereco     | Observações             |

### 3.3 Campos Compartilhados (Sobreposição)

Campos que aparecem em **ambas** as seções (com nomes similares ou idênticos):

| Campo       | Comercial (`t_negociacoes`)                                                                                                                         | CS (coleções dedicadas)                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Endereço    | `f_endereco`, `f_endereco_numero`, `f_bairro`, `f_endereco_cidade`, `f_endereco_estado`, `f_cep`, `f_endereco_complemento`, `f_endereco_referencia` | `f_endereco`, `f_numero`, `f_bairro`, `f_cidade`, `f_estado`, `f_cep`, `f_complemento` (troca titularidade) / `f_endereco_*` (troca endereço) |
| Contrato    | `f_contrato_ixc` / `f_fk_contrato_ixc`                                                                                                              | `f_id_contrato` (todas)                                                                                                                       |
| Vendedor    | `f_fk_negociacao_vendedor`                                                                                                                          | `f_fk_negociacao_vendedor` (troca titularidade)                                                                                               |
| Status      | `f_status` (1-6)                                                                                                                                    | `f_status` (valores diferentes por coleção)                                                                                                   |
| Pessoa      | `f_fk_pessoa_negociacao`, `f_fk_pessoa_pj_negociacao`                                                                                               | `f_fk_pessoa_negociacao`, `f_fk_pessoa_pj_negociacao` (troca titularidade) / `f_fk_pessoas`, `f_fk_pessoas_pj` (suspensão)                    |
| Assinatura  | `f_link_assinatura`, `f_zapsign`, `f_assinatura_gov`                                                                                                | `f_link_assinatura` (suspensão/troca titularidade)                                                                                            |
| Comentários | `f_comentarios` (relação)                                                                                                                           | `f_comentarios` (relação)                                                                                                                     |
| Anexos      | `f_anexos` (relação)                                                                                                                                | `f_anexos` (troca titularidade)                                                                                                               |

---

## 4. Comparativo: Filtros Disponíveis

### 4.1 Comercial — Filtros da Lista/Kanban

Os filtros do Comercial (`negociacoes-filters/`) cobrem:

| Categoria         | Filtros                                                                                |
| ----------------- | -------------------------------------------------------------------------------------- |
| Identificação     | Título, Contrato IXC, Motivo, Status, Substatus                                        |
| Tipo de Pessoa    | Tipo (PF/PJ), CPF/CNPJ, Nome Fantasia, Nome/Razão                                      |
| Contato           | Telefone 1, Telefone 2, Email Cobrança                                                 |
| Endereço          | CEP, Bairro, Cidade, Estado                                                            |
| Pacote/Serviços   | Pacote, SCM, SMP, STFC, SVA                                                            |
| Valores           | Valor Mensal, Valor Devedor (range), Multa/Juros (range), Parcelas Mensais, Fidelidade |
| Vendedor          | Vendedor ID                                                                            |
| Período           | Criado em (início/fim)                                                                 |
| Pontos de Atenção | Pontos de Atenção                                                                      |
| Assinatura        | ZapSign, Assinatura Gov                                                                |
| Contrato          | Contrato ID                                                                            |

**Total: 28+ campos filtráveis**

### 4.2 CS — Filtros por Sub-seção

| Sub-seção             | Filtros                                                                      | Total |
| --------------------- | ---------------------------------------------------------------------------- | ----- |
| Renegociações         | Status, Substatus, Título, CPF/CNPJ, Criado em (início/fim)                  | 6     |
| Troca Titularidade    | Status, Substatus, Estado, Cidade, Contrato, Cedente, Cessionário, Criado em | 8     |
| Suspensão de Contrato | Status, Título, Criado por, Datas                                            | 4     |
| Troca de Endereço     | _(não há módulo React dedicado — usa NocoBase admin diretamente)_            | —     |

**Total CS: 18 filtros combinados** (menos granularidade que Comercial)

---

## 5. Comparativo: Visuais / Views

### 5.1 Comercial

| View            | Componente                 | Descrição                                                                                                                                                                                        |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Kanban**      | `NegociacoesKanban`        | Board por status (6 colunas), cards com título, pessoa, motivo, valor                                                                                                                            |
| **Lista**       | `NegociacoesList`          | Tabela com 14 colunas (Criado em, Título, PF, PJ, Telefone, Motivo, Valor Mensal, Valor Devedor, Total Devedor, Status, Substatus, Atualizado, Vendedor, Acessar)                                |
| **Detalhe**     | `NegociacaoDetalhesTab`    | 11 cards: Identificação, Dados do Cliente, Contato, Endereço Instalação, Endereço Cobrança, Valores Financeiros, Pacote/Serviços, Cupom/Vendedor, Pontos de Atenção, Assinatura Digital, Sistema |
| **Itens**       | `NegociacaoItensTab`       | Tabela de produtos negociados                                                                                                                                                                    |
| **Anexos**      | `NegociacaoAnexosTab`      | Arquivos anexados                                                                                                                                                                                |
| **Comentários** | `NegociacaoComentariosTab` | Histórico de comentários                                                                                                                                                                         |

### 5.2 CS

| Sub-seção          | View                   | Descrição                                                                                                                                |
| ------------------ | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Renegociações      | Lista + Popup          | Tabela similar ao Comercial, popup de detalhes com tabs                                                                                  |
| Troca Titularidade | Lista + Detalhe        | Tabela 8 colunas, detalhe com 7 seções (Identificação, Cedente, Cessionário, Endereço, Assinaturas, Relacionamentos, Anexos/Comentários) |
| Suspensão          | Lista + Detalhe (tabs) | Tabela 8 colunas, detalhe com 2 tabs (Detalhes Suspensão, Contrato)                                                                      |
| Troca Endereço     | _(NocoBase admin)_     | CRUD direto no admin do NocoBase                                                                                                         |

---

## 6. Diferenças Estruturais Significativas

### 6.1 Modelagem de Dados

| Aspecto                 | Comercial                                                               | CS                                                                                                           |
| ----------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Coleção principal**   | `t_negociacoes` (70+ campos)                                            | 3 coleções dedicadas + `t_negociacoes` filtrada                                                              |
| **Complexidade**        | Alta — modelo rico com valores, serviços, endereços duplos              | Variável — troca_endereco é simples (15 campos), troca_titularidade é complexo (22 campos com partes duplas) |
| **Relações**            | 13 relações (vendedor, pacote, itens, anexos, comentários, cupom, etc.) | 2-7 relações por coleção                                                                                     |
| **Endereços**           | 2 endereços completos (instalação + cobrança)                           | 1 endereço por registro                                                                                      |
| **Valores financeiros** | 12+ campos de valores                                                   | 0 campos de valores (suspensão/troca) / indireto via contrato                                                |

### 6.2 Workflow de Status

| Aspecto              | Comercial                                                              | CS                                                  |
| -------------------- | ---------------------------------------------------------------------- | --------------------------------------------------- |
| **Status primários** | 6 (Novo → Negociando → Assinatura → Auditoria → Concluído → Arquivado) | 3-5 por coleção                                     |
| **Substatus**        | 13 substatus com APROVADO/REPROVADO detalhado                          | 6-7 substatus por coleção                           |
| **Fluxo**            | Pipeline de vendas linear                                              | Fluxos independentes por tipo de operação           |
| **Motivo**           | 10 motivos (I, M, D, U, N, R, T, L, S, P)                              | Sem motivo — o tipo de coleção já define a operação |

### 6.3 Integração ZapSign

| Aspecto            | Comercial                                                                                                        | CS                                                                                                              |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Uso**            | `f_zapsign`, `f_assinatura_gov`, `f_link_assinatura`, `f_responsavel_assinatura`, `f_cpf_responsavel_assinatura` | `f_link_assinatura` (suspensão) ou `f_link_assinatura_cedente` + `f_link_assinatura_cessionario` (titularidade) |
| **Complexidade**   | Alta — 5 campos dedicados                                                                                        | Média — 1-2 links por registro                                                                                  |
| **Assinatura Gov** | Sim (`f_assinatura_gov`)                                                                                         | Não                                                                                                             |

---

## 7. Resumo de Diferenças

| Dimensão                | Comercial                               | CS                                               |
| ----------------------- | --------------------------------------- | ------------------------------------------------ |
| **Coleções**            | 1 (`t_negociacoes`)                     | 4 (`t_negociacoes` filtrada + 3 dedicadas)       |
| **Campos totais**       | 70+ em uma coleção                      | 50 distribuídos em 3 coleções                    |
| **Filtros**             | 28+ campos filtráveis                   | 18 filtros combinados                            |
| **Views**               | Kanban + Lista + 6 tabs de detalhe      | Lista + Detalhe (tabs variáveis)                 |
| **Valores financeiros** | 12+ campos                              | 0 (delegado ao contrato IXC)                     |
| **Serviços/Pacotes**    | SCM, SMP, STFC, SVA, Pacote, Fidelidade | Nenhum                                           |
| **Endereços**           | Instalação + Cobrança (2 completos)     | 1 por registro                                   |
| **Partes envolvidas**   | 1 cliente (PF ou PJ)                    | 2 partes (cedente + cessionário) em titularidade |
| **Motivos**             | 10 motivos de negociação                | N/A (tipo definido pela coleção)                 |
| **Kanban**              | Sim (por status)                        | Não                                              |
| **ZapSign**             | 5 campos                                | 1-2 campos                                       |
| **Itens negociados**    | Tab dedicada com produtos               | Não existe                                       |
| **Pontos de atenção**   | Sim (6 pontos + motivos)                | Não existe                                       |
| **Exportação CSV**      | Sim                                     | Não (no frontend React)                          |

---

## 8. Conclusão

**Comercial** é o módulo de **aquisição e pipeline** — focado em converter leads em contratos, com rich data de valores, serviços, descontos e vendedor. Usa um único modelo rico (`t_negociacoes`) com visualização kanban para acompanhamento do pipeline.

**CS** é o módulo de **pós-venda e operações** — focado em mudanças contratuais (titularidade, suspensão, endereço). Divide-se em coleções especializadas, cada uma com o modelo mínimo necessário para sua operação. Não lida com valores financeiros — isso permanece no contrato IXC.

A separação reflete um padrão claro: **Comercial = aquisição complexa**, **CS = operações especializadas**.
