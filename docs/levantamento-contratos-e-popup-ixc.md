---
title: Levantamento Consolidado - Contratos e Popup Acessar (IXC)
description: Consolidação de conteúdo, endpoints e mapeamento IXC das páginas de contratos e popup de contrato
---

**Data da consolidação:** 2026-04-16
**Arquivos mesclados:**

- `docs/levantamento-contratos-e-popup-ixc.md`
- `docs/contratos-popup-acessar-handoff.md`

**URLs analisadas:**

- `https://crm.atplus.cloud/admin/o0jxrw90eha`
- `https://crm.atplus.cloud/admin/o0jxrw90eha/popups/dsoy560gw28/filterbytk/23826`

**Metodologia:**

- automação de navegador autenticada
- espera de carregamento: `7s` após abrir cada página e `5s` após trocar abas
- inspeção de requests de API
- inspeção de schema do popup
- validação de tabelas na wiki oficial IXC

---

## Status Geral

Conteúdo levantado com boa cobertura para:

- tabela principal de contratos
- popup de visualização do contrato, incluindo todas as abas
- endpoints principais usados por seção
- correspondência das tabelas IXC mais evidentes

Persistem algumas lacunas pontuais listadas na seção `Lacunas de Levantamento`.
O fluxo `Visualizar O.S.` foi revalidado em 2026-04-16 e a lacuna correspondente foi fechada.

---

## Identificação do Popup

Schema identificado:

- `x-uid`: `dsoy560gw28`
- título da ação: `Acessar`
- tipo: `Action.Link`
- `openMode`: `page`
- `dataSource`: `d_db_ixcsoft`
- collection base: `cliente_contrato`

---

## Tela de Contratos (`/admin/o0jxrw90eha`)

### Filtros visíveis

- `CPF / CNPJ`
- `Nome / Razão Social`
- `Status do Contrato`
- `ID do Contrato`

### Tabela principal

- título: `Contratos encontrados no IXC`
- colunas:
  - `Ações`
  - `ID Cliente`
  - `ID Contrato`
  - `Ultima Atualização`
  - `Status Contrato`
  - `Status Serviço`
  - `Cliente`
  - `CPF / CNPJ`
  - `Descrição do Contrato`
- estado observado: `Não há dados`

---

## Popup de Contrato (`/popups/dsoy560gw28/filterbytk/23826`)

### Abas visíveis

- `Detalhes`
- `Móvel`
- `Negociações`
- `Atendimentos IXC`
- `Registros`

### Aba `Detalhes`

Conteúdo:

- ações:
  - `Desbloqueio em Confiança`
  - `Nova Contratação`
  - `Transferir Titularidade`
  - `Abrir Renegociação`
  - `Troca de Endereço`
  - `Suspensão de Contrato`
  - `Retenção Contratual`
- blocos:
  - `Dados do Cliente`
  - `Dados do Contrato`
  - `Dados do Endereço`
  - `Informações Adicionais`
  - `Produtos Vinculados ao Contrato`
  - `Últimas Faturas geradas para este contrato`
- colunas de produtos: `Descrição`, `Valor`, `Quantidade`
- colunas de faturas: `Status`, `Valor`, `Data de Vencimento`, `Data de Pagamento`

### Aba `Móvel`

- descrição: `Linhas móveis que este contrato possuí.`
- colunas: `DDD`, `Número`, `ID Contrato`, `Dia Recorrencia`, `Portabilidade`, `SIMCARD`

### Aba `Negociações`

- blocos:
  - `Troca de Titularidade`
  - `Renovações`
  - `Contratos associados a esse cliente`
- colunas:
  - titularidade: `Ações`, `Cedente`, `Documento Cedente`, `Cessionário`,
    `Documento Cessionário`, `Status`, `Contrato`
  - renovações: `Ações`, `Título`, `Valor Mensal`, `Criado em`, `Vendedor`,
    `Status`, `Contrato`, `Itens Negociação`
  - contratos associados: `ID`, `Endereço`, `Numero`, `Criado em`, `Contrato`,
    `Status Negociação`, `Motivo da Negociação`, `Valor Mensal`, `Itens Negociação`

### Aba `Atendimentos IXC`

- filtros: `ID Atendimento`, `Assunto`, `Descrição`
- ações da aba: `Filtro`, `Reiniciar`, `Atualizar`
- colunas: `ID`, `Ações`, `Status`, `Assunto`, `Descrição Atendimento`, `Criado em`, `Última Alteração`
- ação de linha: `Visualizar O.S.`

### Aba `Registros`

- ação: `Adicionar novo`
- colunas: `Categoria`, `Motivo do Contato`, `Nota Vendas`, `Nota Técnico`,
  `Há Pendência?`, `Criado em`, `Criado por`

---

## Requests Capturados por Aba

### Base da tela/popup

- `GET /api/cliente_contrato:get?filterByTk=23826`
- `GET /api/cliente_contrato:get?filterByTk=23826&appends[]=f_nc_cliente`
- `GET /api/vd_contratos_produtos:list?...id_contrato=23826|id_vd_contrato=2305`
- `GET /api/fn_areceber:list?...id_contrato=23826`
- `GET /api/t_dados_adicionais_cliente_contrato:list?...f_id_cliente_contrato=23826`
- `GET /api/customVariables:get?filter[name]=w2q178852nd`
- `GET /api/customVariables:parse?name=w2q178852nd`
- `GET /api/customVariables:list?filter[declaredAt]=qmc8uwdsen3`

### Aba `Móvel`

- `GET /api/linha_mvno:list?...id_contrato=23826`

### Aba `Negociações`

- `GET /api/cliente_contrato/23826/f_nc_cliente:get`
- `GET /api/t_crm_troca_titularidade:list?...f_id_contrato=23826`
- `GET /api/t_negociacoes:list?...f_contrato_ixc=23826`
- `GET /api/t_negociacoes:list?...f_status=5 + endereço/número/nome`

### Aba `Atendimentos IXC`

- `GET /api/su_ticket:list?...id_contrato=23826`

### Ação `Visualizar O.S.` (aba `Atendimentos IXC`)

- popup aberto no fluxo: `/popups/aot6x1szs2a/filterbytk/76200`
- request principal do popup:
  - `GET /api/su_oss_chamado:list?...id_ticket=76200`
- request adicional observado durante abertura do popup:
  - `GET /api/su_ticket:list?...filter={}`

### Aba `Registros`

- `GET /api/t_registros_de_contato:list?...f_fk_id_contrato=23826`

---

## Collections Encontradas no Schema

- `cliente_contrato`
- `linha_mvno`
- `su_oss_chamado`
- `su_ticket`
- `t_crm_troca_titularidade`
- `t_dados_adicionais_cliente_contrato`
- `t_demandas`
- `t_negociacoes`
- `t_registros_de_contato`
- `t_suspensao_contrato`
- `t_troca_endereco`
- `vd_contratos_produtos`

---

## Campos Relevantes Observados

### `cliente_contrato`

- `id`, `contrato`, `status`, `status_internet`
- `data_ativacao`, `data_expiracao`, `data_cancelamento`, `data_negativacao`
- `fidelidade`, `num_parcelas_atraso`
- `endereco`, `numero`, `bairro`, `cidade`, `cep`

### `cliente`

- `razao`, `cnpj_cpf`
- `endereco`, `numero`, `bairro`, `cidade`, `cep`

### `vd_contratos_produtos`

- `descricao`, `valor_unit`, `qtde`

### `fn_areceber` (via tabela exibida)

- `Status`, `Valor`, `Data de Vencimento`, `Data de Pagamento`

### `linha_mvno`

- `ddd_telefone`, `numero_telefone`, `id_contrato`
- `dia_recorrencia`, `portabilidade`, `simcard`

### `su_ticket`

- `id`, `titulo`, `menssagem`, `su_status`
- `data_criacao`, `data_ultima_alteracao`

### `su_oss_chamado`

- `status`, `mensagem`, `data_abertura`, `ultima_atualizacao`

---

## Mapeamento IXC por Seção

### Seções com tabela IXC clara

- listagem de contratos: `cliente_contrato`
- detalhes do contrato: `cliente_contrato`
- produtos vinculados: `vd_contratos_produtos` (correlação com família `vd_contratos`)
- últimas faturas: `fn_areceber`
- móvel: `linha_mvno`
- atendimentos ixc: `su_ticket`

### Seções híbridas ou internas

- negociações usa `cliente_contrato` para vínculo, mas os dados centrais vêm de
  `t_crm_troca_titularidade` e `t_negociacoes` (internas CRM/NocoBase)
- registros vem de `t_registros_de_contato` (interna CRM/NocoBase)
- informações adicionais vem de `t_dados_adicionais_cliente_contrato` (interna CRM/NocoBase)

---

## Evidência de Tabelas IXC (Wiki Oficial)

Confirmações encontradas na wiki:

- `cliente_contrato`:
  - `https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=cliente_contrato`
- `fn_areceber`:
  - `https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=fn_areceber`
- `su_ticket`:
  - `https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=su_ticket`
- `su_oss_chamado`:
  - `https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=su_oss_chamado`
- `linha_mvno`:
  - `https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=linha_mvno`

Item correlato (não encontrado como formulário explícito na árvore):

- `vd_contratos_produtos`:
  - referência indireta por família de vendas em
    `https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=vd_contratos`

---

## Lacunas de Levantamento

Pontos que ainda faltam para completar 100% da documentação:

1. `vd_contratos_produtos`:
   - não foi localizado um `form=vd_contratos_produtos` explícito na wiki;
     apenas correlação por endpoint usado no CRM e família `vd_contratos`.
2. listagem principal de contratos:
   - estava sem linhas no momento da coleta, então faltou validar requests de ação por linha na grade principal.

---

## Evidências Salvas

- screenshot da inspeção inicial:
  - `.agents/skills/dev-browser/tmp/crm-popup-auth.png`
- json bruto da coleta automatizada:
  - `/tmp/contratos_popup_levantamento.json`
- json da revalidação de abas:
  - `/tmp/contratos_popup_recheck_tabs_20260416.json`
- json da revalidação da ação `Visualizar O.S.`:
  - `/tmp/contratos_popup_visualizar_os_click_anchor_20260416.json`
- screenshot após abrir popup de O.S.:
  - `.agents/skills/dev-browser/tmp/crm-popup-visualizar-os-anchor-click.png`

---

## Links de Referência

- CRM listagem: <https://crm.atplus.cloud/admin/o0jxrw90eha>
- CRM popup: <https://crm.atplus.cloud/admin/o0jxrw90eha/popups/dsoy560gw28/filterbytk/23826>
- IXC Wiki índice: <https://wikiapiprovedor.ixcsoft.com.br/>
- IXC `cliente_contrato`: <https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=cliente_contrato>
- IXC `fn_areceber`: <https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=fn_areceber>
- IXC `su_ticket`: <https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=su_ticket>
- IXC `su_oss_chamado`: <https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=su_oss_chamado>
- IXC `linha_mvno`: <https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=linha_mvno>
- IXC `vd_contratos`: <https://wikiapiprovedor.ixcsoft.com.br/formulario.php?form=vd_contratos>
