# Relatório de Inferência de Enums - IXC

> **Data:** 2026-04-20
> **Collections analisadas:** 6

---

## Resumo por Collection

| Collection            | Campos Enum | Status |
| --------------------- | ----------- | ------ |
| cliente               | 56          | ✅     |
| cliente_contrato      | 52          | ✅     |
| fn_areceber           | 26          | ✅     |
| linha_mvno            | 6           | ✅     |
| su_ticket             | 14          | ✅     |
| vd_contratos_produtos | 4           | ✅     |

---

## Sumário

- [cliente](#cliente)
- [cliente_contrato](#cliente-contrato)
- [fn_areceber](#fn-areceber)
- [linha_mvno](#linha-mvno)
- [su_ticket](#su-ticket)
- [vd_contratos_produtos](#vd-contratos-produtos)

---

## Collection: cliente

| Campo                         | Cardinalidade | Status      | Valores                                               |
| ----------------------------- | ------------- | ----------- | ----------------------------------------------------- |
| acesso_automatico_central     | 2             | ✅ Aprovado | P, S                                                  |
| alterar_senha_primeiro_acesso | 2             | ✅ Aprovado | N, P                                                  |
| antigo_acesso_central         | 1             | ✅ Aprovado | N                                                     |
| ativo                         | 2             | ✅ Aprovado | N, S                                                  |
| atualizar_cadastro_galaxPay   | 2             | ✅ Aprovado | N, S                                                  |
| aviso_atraso                  | 1             | ✅ Aprovado | S                                                     |
| bairro_cob                    | 3             | ✅ Aprovado | Conta Dinheiro, Guarujá, Vila Nova                    |
| cadastrado_no_galaxPay        | 2             | ✅ Aprovado | N, S                                                  |
| cep_cob                       | 3             | ✅ Aprovado | 88503-210, 88520-100, 88521-020                       |
| cli_desconta_iss_retido_total | 1             | ✅ Aprovado | N                                                     |
| cob_envia_email               | 1             | ✅ Aprovado | S                                                     |
| cob_envia_sms                 | 1             | ✅ Aprovado | S                                                     |
| cofins_retem                  | 1             | ✅ Aprovado | N                                                     |
| complemento_cob               | 1             | ✅ Aprovado | CASA                                                  |
| cond_pagamento                | 2             | ✅ Aprovado | 0, 1                                                  |
| contribuinte_icms             | 3             | ✅ Aprovado | I, N, S                                               |
| convert_cliente_forn          | 1             | ✅ Aprovado | N                                                     |
| crm                           | 1             | ✅ Aprovado | N                                                     |
| csll_retem                    | 1             | ✅ Aprovado | N                                                     |
| data_hash_redefinir_senha     | 4             | ✅ Aprovado | 2022-02-13 21:09:39, 2022-04-30 18:40:27, 2022-06-... |
| desconto_irrf_valor_inferior  | 2             | ✅ Aprovado | N, S                                                  |
| endereco_cob                  | 3             | ✅ Aprovado | Avenida Segundo Batalhão Rodoviário, Rua João da S... |
| estado_civil                  | 3             | ✅ Aprovado | Casado, Divorciado, Solteiro                          |
| filial_id                     | 1             | ✅ Aprovado | 1                                                     |
| filtra_filial                 | 1             | ✅ Aprovado | S                                                     |
| grau_satisfacao               | 3             | ✅ Aprovado | 3, 4, 5                                               |
| hash_redefinir_senha          | 3             | ✅ Aprovado | 2cddcfdf3e2b1292698984122b758245, b66fbb2dd0c2ff76... |
| hotsite_acesso                | 2             | ✅ Aprovado | 0, 2                                                  |
| id_tipo_cliente               | 2             | ✅ Aprovado | 0, 2                                                  |
| inss_retem                    | 1             | ✅ Aprovado | N                                                     |
| irrf_retem                    | 1             | ✅ Aprovado | N                                                     |
| moradia                       | 2             | ✅ Aprovado | A, P                                                  |
| nacionalidade                 | 1             | ✅ Aprovado | Brasileiro                                            |
| num_dias_cob                  | 2             | ✅ Aprovado | 0, 1                                                  |
| orgao_publico                 | 1             | ✅ Aprovado | N                                                     |
| participa_cobranca            | 2             | ✅ Aprovado | N, S                                                  |
| participa_pre_cobranca        | 1             | ✅ Aprovado | S                                                     |
| permite_armazenar_cartoes     | 1             | ✅ Aprovado | N                                                     |
| pis_retem                     | 1             | ✅ Aprovado | N                                                     |
| primeiro_acesso_central       | 2             | ✅ Aprovado | N, S                                                  |
| rede_ativacao                 | 1             | ✅ Aprovado | P                                                     |
| regua_cobranca_considera      | 1             | ✅ Aprovado | P                                                     |
| regua_cobranca_notificacao    | 1             | ✅ Aprovado | S                                                     |
| regua_cobranca_wpp            | 1             | ✅ Aprovado | S                                                     |
| rg_orgao_emissor              | 3             | ✅ Aprovado | DICRJ, SsP, SSP                                       |
| senha_hotsite_md5             | 2             | ✅ Aprovado | N, S                                                  |
| Sexo                          | 2             | ✅ Aprovado | F, M                                                  |
| status_internet               | 1             | ✅ Aprovado | N                                                     |
| status_prospeccao             | 1             | ✅ Aprovado | C                                                     |
| tipo_assinante                | 2             | ✅ Aprovado | 1, 3                                                  |
| tipo_cliente_scm              | 2             | ✅ Aprovado | 01, 03                                                |
| tipo_documento_identificacao  | 1             | ✅ Aprovado | 13                                                    |
| tipo_localidade               | 1             | ✅ Aprovado | U                                                     |
| tipo_pessoa                   | 2             | ✅ Aprovado | F, J                                                  |
| tipo_pessoa_titular_conta     | 1             | ✅ Aprovado | F                                                     |
| uf_cob                        | 2             | ✅ Aprovado | 0, 2                                                  |

### Detalhes

#### acesso_automatico_central

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |
| S     | Sim   |

#### alterar_senha_primeiro_acesso

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| P     | P     |

#### antigo_acesso_central

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### ativo

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### atualizar_cadastro_galaxPay

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### aviso_atraso

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### bairro_cob

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor          | Label          |
| -------------- | -------------- |
| Conta Dinheiro | Conta Dinheiro |
| Guarujá        | Guarujá        |
| Vila Nova      | Vila Nova      |

#### cadastrado_no_galaxPay

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### cep_cob

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor     | Label     |
| --------- | --------- |
| 88503-210 | 88503 210 |
| 88520-100 | 88520 100 |
| 88521-020 | 88521 020 |

#### cli_desconta_iss_retido_total

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### cob_envia_email

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### cob_envia_sms

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### cofins_retem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### complemento_cob

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| CASA  | CASA  |

#### cond_pagamento

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 1     | Ativo   |

#### contribuinte_icms

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| I     | Inativo |
| N     | Não     |
| S     | Sim     |

#### convert_cliente_forn

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### crm

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### csll_retem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### data_hash_redefinir_senha

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor               | Label               |
| ------------------- | ------------------- |
| 2022-02-13 21:09:39 | 2022 02 13 21:09:39 |
| 2022-04-30 18:40:27 | 2022 04 30 18:40:27 |
| 2022-06-09 21:45:42 | 2022 06 09 21:45:42 |
| Invalid date        | Invalid Date        |

#### desconto_irrf_valor_inferior

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### endereco_cob

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor                               | Label                               |
| ----------------------------------- | ----------------------------------- |
| Avenida Segundo Batalhão Rodoviário | Avenida Segundo Batalhão Rodoviário |
| Rua João da Silva Ramos             | Rua João Da Silva Ramos             |
| Rua Tomé de Souza                   | Rua Tomé De Souza                   |

#### estado_civil

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| Casado     | Casado     |
| Divorciado | Divorciado |
| Solteiro   | Solteiro   |

#### filial_id

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### filtra_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### grau_satisfacao

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 3     | Código 3 |
| 4     | Código 4 |
| 5     | Código 5 |

#### hash_redefinir_senha

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor                            | Label                            |
| -------------------------------- | -------------------------------- |
| 2cddcfdf3e2b1292698984122b758245 | 2cddcfdf3e2b1292698984122b758245 |
| b66fbb2dd0c2ff76f8e9165f7a448dfb | B66fbb2dd0c2ff76f8e9165f7a448dfb |
| e9b8b8e9d41ecb186ad4ac53e246fbad | E9b8b8e9d41ecb186ad4ac53e246fbad |

#### hotsite_acesso

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### id_tipo_cliente

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### inss_retem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### irrf_retem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### moradia

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| A     | Ativo |
| P     | P     |

#### nacionalidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| Brasileiro | Brasileiro |

#### num_dias_cob

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 1     | Ativo   |

#### orgao_publico

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### participa_cobranca

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### participa_pre_cobranca

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### permite_armazenar_cartoes

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### pis_retem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### primeiro_acesso_central

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### rede_ativacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### regua_cobranca_considera

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### regua_cobranca_notificacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### regua_cobranca_wpp

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### rg_orgao_emissor

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| DICRJ | Dicrj |
| SsP   | Ssp   |
| SSP   | SSP   |

#### senha_hotsite_md5

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### Sexo

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| F     | F     |
| M     | M     |

#### status_internet

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### status_prospeccao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| C     | C     |

#### tipo_assinante

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 3     | Código 3 |

#### tipo_cliente_scm

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 01    | Código 01 |
| 03    | Código 03 |

#### tipo_documento_identificacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 13    | Código 13 |

#### tipo_localidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| U     | U     |

#### tipo_pessoa

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| F     | F     |
| J     | J     |

#### tipo_pessoa_titular_conta

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| F     | F     |

#### uf_cob

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

---

---

## Collection: cliente_contrato

| Campo                                  | Cardinalidade | Status      | Valores                      |
| -------------------------------------- | ------------- | ----------- | ---------------------------- |
| agrupar_financeiro_contrato            | 1             | ✅ Aprovado | P                            |
| alerta_contrato                        | 3             | ✅ Aprovado | cliente vai pagar            |
| mais um dos valores ate 29/02...       |
| aplica_desconto_tempo_bloqueio         | 1             | ✅ Aprovado | S                            |
| aplicar_desconto_tempo_bloqueio        | 1             | ✅ Aprovado | P                            |
| assinatura_digital                     | 2             | ✅ Aprovado | N, P                         |
| ativo_summit                           | 1             | ✅ Aprovado | N                            |
| aviso_atraso                           | 2             | ✅ Aprovado | N, S                         |
| base_geracao_tipo_doc                  | 1             | ✅ Aprovado | P                            |
| bloqueio_automatico                    | 2             | ✅ Aprovado | N, S                         |
| cc_previsao                            | 1             | ✅ Aprovado | P                            |
| contrato_suspenso                      | 1             | ✅ Aprovado | N                            |
| credit_card_recorrente_bandeira_cartao | 3             | ✅ Aprovado | mastercard, MasterCard, Visa |
| credit_card_recorrente_carteira_antiga | 2             | ✅ Aprovado | 1, 5                         |
| desbloqueio_confianca                  | 2             | ✅ Aprovado | N, P                         |
| desbloqueio_confianca_ativo            | 2             | ✅ Aprovado | N, S                         |
| descricao_aux_plano_venda              | 1             | ✅ Aprovado | PERMUTA                      |
| document_photo                         | 1             | ✅ Aprovado | P                            |
| endereco_padrao_cliente                | 2             | ✅ Aprovado | N, S                         |
| fidelidade                             | 2             | ✅ Aprovado | 12, 24                       |
| financeiro_migrado                     | 1             | ✅ Aprovado | N                            |
| gerar_finan_assin_digital_contrato     | 2             | ✅ Aprovado | N, P                         |
| id_filial                              | 1             | ✅ Aprovado | 1                            |
| id_modelo                              | 1             | ✅ Aprovado | 5                            |
| id_motivo_inclusao                     | 5             | ✅ Aprovado | 1, 2, 3, 5, 7                |
| imp_bkp                                | 1             | ✅ Aprovado | N                            |
| imp_carteira                           | 1             | ✅ Aprovado | N                            |
| imp_importacao                         | 1             | ✅ Aprovado | N                            |
| imp_rede                               | 1             | ✅ Aprovado | N                            |
| imp_treinamento                        | 1             | ✅ Aprovado | N                            |
| integracao_assinatura_digital          | 2             | ✅ Aprovado | N, P                         |
| isentar_contrato                       | 2             | ✅ Aprovado | N, S                         |
| liberacao_bloqueio_manual              | 2             | ✅ Aprovado | P, S                         |
| liberacao_suspensao_parcial            | 1             | ✅ Aprovado | P                            |
| motivo_inclusao                        | 5             | ✅ Aprovado | D, I, N, T, U                |
| obs                                    | 1             | ✅ Aprovado | cancelado via banco de dados |
| origem_cancelamento                    | 1             | ✅ Aprovado | M                            |
| portabilidade_summit                   | 1             | ✅ Aprovado | N                            |
| renovacao_automatica                   | 2             | ✅ Aprovado | N, S                         |
| restricao_auto_desbloqueio             | 2             | ✅ Aprovado | N, S                         |
| restricao_auto_libera_susp_parcial     | 1             | ✅ Aprovado | N                            |
| selfie_photo                           | 1             | ✅ Aprovado | P                            |
| situacao_financeira_contrato           | 1             | ✅ Aprovado | R                            |
| status                                 | 3             | ✅ Aprovado | A, I, P                      |
| status_internet                        | 5             | ✅ Aprovado | A, AA, CA, D, FA             |
| status_velocidade                      | 2             | ✅ Aprovado | N, R                         |
| tipo                                   | 1             | ✅ Aprovado | I                            |
| tipo_cobranca                          | 1             | ✅ Aprovado | P                            |
| tipo_doc_opc3                          | 2             | ✅ Aprovado | 0, 13                        |
| tipo_localidade                        | 1             | ✅ Aprovado | U                            |
| tipo_produtos_plano                    | 1             | ✅ Aprovado | P                            |
| updated_responsible_seller             | 1             | ✅ Aprovado | N                            |
| utilizando_auto_libera_susp_parc       | 1             | ✅ Aprovado | N                            |

### Detalhes

#### agrupar_financeiro_contrato

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### alerta_contrato

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |

| cliente vai pagar
mais um dos valores ate 29/02 | Cliente Vai Pagar Mais Um Dos Valores Ate 29/02 |
| POSSUI PONTO EXTRA FAST (100 MEGA) | Possui Ponto Extra FAST (100 Mega) |
| vai pagar em 29/11 | Vai Pagar Em 29/11 |

#### aplica_desconto_tempo_bloqueio

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### aplicar_desconto_tempo_bloqueio

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### assinatura_digital

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| P     | P     |

#### ativo_summit

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### aviso_atraso

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### base_geracao_tipo_doc

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### bloqueio_automatico

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### cc_previsao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### contrato_suspenso

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### credit_card_recorrente_bandeira_cartao

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| mastercard | Mastercard |
| MasterCard | Mastercard |
| Visa       | Visa       |

#### credit_card_recorrente_carteira_antiga

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 5     | Código 5 |

#### desbloqueio_confianca

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| P     | P     |

#### desbloqueio_confianca_ativo

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### descricao_aux_plano_venda

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor   | Label   |
| ------- | ------- |
| PERMUTA | Permuta |

#### document_photo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### endereco_padrao_cliente

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### fidelidade

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 12    | Código 12 |
| 24    | Código 24 |

#### financeiro_migrado

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### gerar_finan_assin_digital_contrato

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| P     | P     |

#### id_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_modelo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 5     | Código 5 |

#### id_motivo_inclusao

- **Valores:** 5
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 2     | Código 2 |
| 3     | Código 3 |
| 5     | Código 5 |
| 7     | Código 7 |

#### imp_bkp

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_carteira

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_importacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_rede

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_treinamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### integracao_assinatura_digital

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| P     | P     |

#### isentar_contrato

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### liberacao_bloqueio_manual

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |
| S     | Sim   |

#### liberacao_suspensao_parcial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### motivo_inclusao

- **Valores:** 5
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| D     | D       |
| I     | Inativo |
| N     | Não     |
| T     | T       |
| U     | U       |

#### obs

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor                        | Label                        |
| ---------------------------- | ---------------------------- |
| cancelado via banco de dados | Cancelado Via Banco De Dados |

#### origem_cancelamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| M     | M     |

#### portabilidade_summit

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### renovacao_automatica

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### restricao_auto_desbloqueio

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### restricao_auto_libera_susp_parcial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### selfie_photo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### situacao_financeira_contrato

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| R     | R     |

#### status

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| A     | Ativo   |
| I     | Inativo |
| P     | P       |

#### status_internet

- **Valores:** 5
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| A     | Ativo |
| AA    | AA    |
| CA    | CA    |
| D     | D     |
| FA    | FA    |

#### status_velocidade

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| R     | R     |

#### tipo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| I     | Inativo |

#### tipo_cobranca

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### tipo_doc_opc3

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 13    | Código 13 |

#### tipo_localidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| U     | U     |

#### tipo_produtos_plano

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### updated_responsible_seller

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### utilizando_auto_libera_susp_parc

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

---

---

## Collection: fn_areceber

| Campo                            | Cardinalidade | Status      | Valores                                               |
| -------------------------------- | ------------- | ----------- | ----------------------------------------------------- |
| aguardando_confirmacao_pagamento | 1             | ✅ Aprovado | N                                                     |
| caixa                            | 3             | ✅ Aprovado | 0, 13, 6                                              |
| em_processamento                 | 1             | ✅ Aprovado | N                                                     |
| enviado_remessa_baixa            | 1             | ✅ Aprovado | N                                                     |
| estornado                        | 1             | ✅ Aprovado | N                                                     |
| filial_id                        | 1             | ✅ Aprovado | 1                                                     |
| id_carteira_cobranca             | 3             | ✅ Aprovado | 0, 4, 5                                               |
| id_mot_cancelamento              | 1             | ✅ Aprovado | 1                                                     |
| id_remessa                       | 2             | ✅ Aprovado | 0, 2                                                  |
| id_saida                         | 1             | ✅ Aprovado | -25                                                   |
| impresso                         | 2             | ✅ Aprovado | N, S                                                  |
| libera_periodo                   | 1             | ✅ Aprovado | N                                                     |
| liberado                         | 1             | ✅ Aprovado | S                                                     |
| lote                             | 2             | ✅ Aprovado | -3, 1                                                 |
| parcela_proporcional             | 1             | ✅ Aprovado | N                                                     |
| parcelado_cartao                 | 1             | ✅ Aprovado | N                                                     |
| previsao                         | 1             | ✅ Aprovado | S                                                     |
| recebido_via_pix                 | 1             | ✅ Aprovado | N                                                     |
| status                           | 2             | ✅ Aprovado | C, R                                                  |
| status_cobranca                  | 1             | ✅ Aprovado | F                                                     |
| tarifa_gateway_lancada           | 1             | ✅ Aprovado | N                                                     |
| tipo_cobranca                    | 1             | ✅ Aprovado | I                                                     |
| tipo_recebimento                 | 1             | ✅ Aprovado | Boleto                                                |
| titulo_importado                 | 1             | ✅ Aprovado | S                                                     |
| titulo_protestado                | 1             | ✅ Aprovado | N                                                     |
| ultima_atualizacao               | 4             | ✅ Aprovado | 2021-12-28T12:59:30.000Z, 2025-11-21T18:53:48.000Z... |

### Detalhes

#### aguardando_confirmacao_pagamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### caixa

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 13    | Código 13 |
| 6     | Código 6  |

#### em_processamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### enviado_remessa_baixa

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### estornado

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### filial_id

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_carteira_cobranca

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 4     | Código 4 |
| 5     | Código 5 |

#### id_mot_cancelamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_remessa

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### id_saida

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| -25   | 25    |

#### impresso

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### libera_periodo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### liberado

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### lote

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| -3    | 3     |
| 1     | Ativo |

#### parcela_proporcional

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### parcelado_cartao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### previsao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### recebido_via_pix

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### status

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| C     | C     |
| R     | R     |

#### status_cobranca

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| F     | F     |

#### tarifa_gateway_lancada

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### tipo_cobranca

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| I     | Inativo |

#### tipo_recebimento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor  | Label  |
| ------ | ------ |
| Boleto | Boleto |

#### titulo_importado

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### titulo_protestado

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### ultima_atualizacao

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor                    | Label                    |
| ------------------------ | ------------------------ |
| 2021-12-28T12:59:30.000Z | 2021 12 28t12:59:30.000z |
| 2025-11-21T18:53:48.000Z | 2025 11 21t18:53:48.000z |
| 2025-11-21T18:54:19.000Z | 2025 11 21t18:54:19.000z |
| 2026-03-03T12:30:05.000Z | 2026 03 03t12:30:05.000z |

---

---

## Collection: linha_mvno

| Campo           | Cardinalidade | Status      | Valores                 |
| --------------- | ------------- | ----------- | ----------------------- |
| api             | 2             | ✅ Aprovado | A, I                    |
| ddd_telefone    | 6             | ⚠️ Revisar  | 24, 41, 44, 47, 48, 49  |
| dia_recorrencia | 7             | ⚠️ Revisar  | 0, 1, 10, 15, 20, 25, 5 |
| esim            | 2             | ✅ Aprovado | N, S                    |
| id_integracao   | 2             | ✅ Aprovado | 1, 2                    |
| portabilidade   | 2             | ✅ Aprovado | N, S                    |

### Detalhes

#### api

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| A     | Ativo   |
| I     | Inativo |

#### ddd_telefone

- **Valores:** 6
- **Total Registros:** 372
- **Status:** ⚠️ Revisar

| Valor | Label     |
| ----- | --------- |
| 24    | Código 24 |
| 41    | Código 41 |
| 44    | Código 44 |
| 47    | Código 47 |
| 48    | Código 48 |
| 49    | Código 49 |

#### dia_recorrencia

- **Valores:** 7
- **Total Registros:** 372
- **Status:** ⚠️ Revisar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 1     | Ativo     |
| 10    | Código 10 |
| 15    | Código 15 |
| 20    | Código 20 |
| 25    | Código 25 |
| 5     | Código 5  |

#### esim

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### id_integracao

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 2     | Código 2 |

#### portabilidade

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

---

---

## Collection: su_ticket

| Campo                  | Cardinalidade | Status      | Valores             |
| ---------------------- | ------------- | ----------- | ------------------- |
| id_filial              | 1             | ✅ Aprovado | 1                   |
| id_su_diagnostico      | 4             | ✅ Aprovado | 0, 1, 10, 13        |
| id_ticket_origem       | 2             | ✅ Aprovado | H, I                |
| id_ticket_setor        | 7             | ⚠️ Revisar  | 1, 2, 3, 4, 5, 7, 8 |
| interacao_pendente     | 4             | ✅ Aprovado | A, E, I, N          |
| melhor_horario_agenda  | 1             | ✅ Aprovado | Q                   |
| melhor_horario_reserva | 3             | ✅ Aprovado | M, Q, T             |
| mensagens_nao_lida_sup | 2             | ✅ Aprovado | 0, 1                |
| origem_cadastro        | 1             | ✅ Aprovado | P                   |
| origem_endereco        | 4             | ✅ Aprovado | C, CC, L, M         |
| prioridade             | 3             | ✅ Aprovado | A, C, M             |
| status                 | 3             | ✅ Aprovado | C, F, OSAG          |
| su_status              | 1             | ✅ Aprovado | S                   |
| tipo                   | 1             | ✅ Aprovado | C                   |

### Detalhes

#### id_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_su_diagnostico

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 1     | Ativo     |
| 10    | Código 10 |
| 13    | Código 13 |

#### id_ticket_origem

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| H     | H       |
| I     | Inativo |

#### id_ticket_setor

- **Valores:** 7
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 2     | Código 2 |
| 3     | Código 3 |
| 4     | Código 4 |
| 5     | Código 5 |
| 7     | Código 7 |
| 8     | Código 8 |

#### interacao_pendente

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| A     | Ativo   |
| E     | E       |
| I     | Inativo |
| N     | Não     |

#### melhor_horario_agenda

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| Q     | Q     |

#### melhor_horario_reserva

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| M     | M     |
| Q     | Q     |
| T     | T     |

#### mensagens_nao_lida_sup

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 1     | Ativo   |

#### origem_cadastro

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### origem_endereco

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| C     | C     |
| CC    | CC    |
| L     | L     |
| M     | M     |

#### prioridade

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| A     | Ativo |
| C     | C     |
| M     | M     |

#### status

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| C     | C     |
| F     | F     |
| OSAG  | OSAG  |

#### su_status

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### tipo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| C     | C     |

---

---

## Collection: vd_contratos_produtos

| Campo         | Cardinalidade | Status      | Valores       |
| ------------- | ------------- | ----------- | ------------- |
| qtde          | 2             | ✅ Aprovado | 1, 3          |
| repetir       | 1             | ✅ Aprovado | V             |
| tipo          | 4             | ✅ Aprovado | I, S, SVA, TV |
| tipo_desconto | 1             | ✅ Aprovado | V             |

### Detalhes

#### qtde

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 3     | Código 3 |

#### repetir

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| V     | V     |

#### tipo

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| I     | Inativo |
| S     | Sim     |
| SVA   | SVA     |
| TV    | TV      |

#### tipo_desconto

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| V     | V     |

---

---
