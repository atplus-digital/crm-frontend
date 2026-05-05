# Relatorio de Geracao de Tipos

**Datasource:** ixc

## Status: Relacoes

### 6 collection(oes) com relacoes nao resolvidas

#### cliente

| Campo                    | Target original      |
| ------------------------ | -------------------- |
| `f_cidade_naturalidade`  | `cidade`             |
| `f_estado_nascimento`    | `uf`                 |
| `f_condominio`           | `cliente_condominio` |
| `f_cidade`               | `cidade`             |
| `f_uf`                   | `uf`                 |
| `f_cidade_cob`           | `cidade`             |
| `f_uf_cob`               | `uf`                 |
| `f_conta`                | `contas`             |
| `f_vendedor`             | `vendedor`           |
| `f_perfil`               | `perfis`             |
| `f_segmento`             | `segmentos`          |
| `f_operadora_celular`    | `operadora_celular`  |
| `f_tipo_cliente`         | `tipo_cliente`       |
| `f_responsavel`          | `funcionarios`       |
| `f_candato_tipo`         | `candato_tipo`       |
| `f_concorrente`          | `concorrente`        |
| `f_fornecedor_conversao` | `fornecedor`         |

#### cliente_contrato

| Campo                  | Target original                    |
| ---------------------- | ---------------------------------- |
| `f_tipo_contrato`      | `cliente_contrato_tipo`            |
| `f_modelo`             | `cliente_contrato_modelo`          |
| `f_filial`             | `filial`                           |
| `f_motivo_inclusao`    | `cliente_contrato_motivo_inclusao` |
| `f_indexador_reajuste` | `cliente_contrato_indexadores`     |
| `f_tipo_documento`     | `tipo_documento`                   |
| `f_carteira_cobranca`  | `fn_carteira_cobranca`             |
| `f_vendedor`           | `vendedor`                         |
| `f_moeda`              | `moedas`                           |
| `f_responsavel`        | `funcionarios`                     |
| `f_cond_pag_ativ`      | `condicoes_pagamento`              |
| `f_produto_ativ`       | `produtos`                         |
| `f_tipo_doc_ativ`      | `tipo_documento`                   |
| `f_indicacao_contrato` | `indicacao_contrato`               |

#### linha_mvno

| Campo     | Target original |
| --------- | --------------- |
| `f_plano` | `mvno_planos`   |
| `f_chip`  | `mvno_chips`    |

#### vd_contratos_produtos

| Campo             | Target original          |
| ----------------- | ------------------------ |
| `f_grupo`         | `grupo_produto`          |
| `f_subgrupo`      | `subgrupo_produto`       |
| `f_unidade`       | `unidades`               |
| `f_classificacao` | `classificacao_franquia` |

#### fn_areceber

| Campo                              | Target original                  |
| ---------------------------------- | -------------------------------- |
| `f_conta`                          | `planejamento_analitico`         |
| `f_conta_class_finan_a`            | `planejamento_analitico_finan`   |
| `f_filial`                         | `filial`                         |
| `f_carteira_cobranca`              | `fn_carteira_cobranca`           |
| `f_saida`                          | `fn_apagar`                      |
| `f_sip`                            | `sip`                            |
| `f_renegociacao`                   | `fn_renegociacao`                |
| `f_renegociacao_novo`              | `fn_renegociacao`                |
| `f_lote_geracao_financeiro_fatura` | `lote_geracao_financeiro_fatura` |

#### su_ticket

| Campo           | Target original  |
| --------------- | ---------------- |
| `f_assunto`     | `su_assuntos`    |
| `f_equipe`      | `su_equipes`     |
| `f_responsavel` | `funcionarios`   |
| `f_status`      | `su_status`      |
| `f_prioridade`  | `su_prioridades` |

## Status: Collections Split

### Sem problemas
