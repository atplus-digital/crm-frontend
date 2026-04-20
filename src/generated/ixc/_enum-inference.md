# Relatório de Inferência de Enums

> **Data:** 2026-04-20
> **Collections analisadas:** 6

---

## Resumo Geral

- **Total de enums inferidos:** 133
- **Total de campos rejeitados:** 0

---

## Resumo por Collection

| Collection            | Enums | Rejeitados | Status |
| --------------------- | ----- | ---------- | ------ |
| cliente               | 50    | 0          | ✅     |
| cliente_contrato      | 46    | 0          | ✅     |
| fn_areceber           | 21    | 0          | ✅     |
| linha_mvno            | 3     | 0          | ✅     |
| su_ticket             | 9     | 0          | ✅     |
| vd_contratos_produtos | 4     | 0          | ✅     |

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

| Campo                         | Origem     | Count | Status | Valores                      |
| ----------------------------- | ---------- | ----- | ------ | ---------------------------- |
| acesso_automatico_central     | Inferência | 2     | ✅     | P, S                         |
| alterar_senha_primeiro_acesso | Inferência | 2     | ✅     | N, P                         |
| antigo_acesso_central         | Inferência | 1     | ✅     | N                            |
| ativo                         | Inferência | 2     | ✅     | N, S                         |
| atualizar_cadastro_galaxPay   | Inferência | 2     | ✅     | N, S                         |
| aviso_atraso                  | Inferência | 1     | ✅     | S                            |
| cadastrado_no_galaxPay        | Inferência | 2     | ✅     | N, S                         |
| cli_desconta_iss_retido_total | Inferência | 1     | ✅     | N                            |
| cob_envia_sms                 | Inferência | 1     | ✅     | S                            |
| cofins_retem                  | Inferência | 1     | ✅     | N                            |
| complemento_cob               | Inferência | 1     | ✅     | CASA                         |
| cond_pagamento                | Inferência | 2     | ✅     | 0, 1                         |
| contribuinte_icms             | Inferência | 3     | ✅     | I, N, S                      |
| convert_cliente_forn          | Inferência | 1     | ✅     | N                            |
| crm                           | Inferência | 1     | ✅     | N                            |
| csll_retem                    | Inferência | 1     | ✅     | N                            |
| desconto_irrf_valor_inferior  | Inferência | 2     | ✅     | N, S                         |
| estado_civil                  | Inferência | 3     | ✅     | Casado, Divorciado, Solteiro |
| filtra_filial                 | Inferência | 1     | ✅     | S                            |
| grau_satisfacao               | Inferência | 3     | ✅     | 3, 4, 5                      |
| hotsite_acesso                | Inferência | 2     | ✅     | 0, 2                         |
| inss_retem                    | Inferência | 1     | ✅     | N                            |
| irrf_retem                    | Inferência | 1     | ✅     | N                            |
| iss_classificacao             | Inferência | 1     | ✅     | 99                           |
| iss_classificacao_padrao      | Inferência | 1     | ✅     | 99                           |
| moradia                       | Inferência | 2     | ✅     | A, P                         |
| nacionalidade                 | Inferência | 1     | ✅     | Brasileiro                   |
| num_dias_cob                  | Inferência | 2     | ✅     | 0, 1                         |
| orgao_publico                 | Inferência | 1     | ✅     | N                            |
| participa_cobranca            | Inferência | 2     | ✅     | N, S                         |
| participa_pre_cobranca        | Inferência | 1     | ✅     | S                            |
| permite_armazenar_cartoes     | Inferência | 1     | ✅     | N                            |
| pis_retem                     | Inferência | 1     | ✅     | N                            |
| primeiro_acesso_central       | Inferência | 2     | ✅     | N, S                         |
| rede_ativacao                 | Inferência | 1     | ✅     | P                            |
| regua_cobranca_considera      | Inferência | 1     | ✅     | P                            |
| regua_cobranca_notificacao    | Inferência | 1     | ✅     | S                            |
| regua_cobranca_wpp            | Inferência | 1     | ✅     | S                            |
| rg_orgao_emissor              | Inferência | 3     | ✅     | DICRJ, SsP, SSP              |
| senha_hotsite_md5             | Inferência | 2     | ✅     | N, S                         |
| Sexo                          | Inferência | 2     | ✅     | F, M                         |
| status_internet               | Inferência | 1     | ✅     | N                            |
| status_prospeccao             | Inferência | 1     | ✅     | C                            |
| tipo_assinante                | Inferência | 2     | ✅     | 1, 3                         |
| tipo_cliente_scm              | Inferência | 2     | ✅     | 01, 03                       |
| tipo_documento_identificacao  | Inferência | 1     | ✅     | 13                           |
| tipo_localidade               | Inferência | 1     | ✅     | U                            |
| tipo_pessoa                   | Inferência | 2     | ✅     | F, J                         |
| tipo_pessoa_titular_conta     | Inferência | 1     | ✅     | F                            |
| uf_cob                        | Inferência | 2     | ✅     | 0, 2                         |

---

---

## Collection: cliente_contrato

| Campo                                  | Origem     | Count | Status       | Valores                      |
| -------------------------------------- | ---------- | ----- | ------------ | ---------------------------- |
| agrupar_financeiro_contrato            | Inferência | 1     | ✅           | P                            |
| alerta_contrato                        | Inferência | 3     | ✅           | cliente vai pagar            |
| mais um dos valores ate 29/02...       |
| aplica_desconto_tempo_bloqueio         | Inferência | 1     | ✅           | S                            |
| aplicar_desconto_tempo_bloqueio        | Inferência | 1     | ✅           | P                            |
| assinatura_digital                     | Inferência | 2     | ✅           | N, P                         |
| ativo_summit                           | Inferência | 1     | ✅           | N                            |
| aviso_atraso                           | Inferência | 2     | ✅           | N, S                         |
| base_geracao_tipo_doc                  | Inferência | 1     | ✅           | P                            |
| bloqueio_automatico                    | Inferência | 2     | ✅           | N, S                         |
| cc_previsao                            | Inferência | 1     | ✅           | P                            |
| contrato_suspenso                      | Inferência | 1     | ✅           | N                            |
| credit_card_recorrente_bandeira_cartao | Inferência | 3     | ⚠️ Duplicado | mastercard, MasterCard, Visa |
| credit_card_recorrente_carteira_antiga | Inferência | 2     | ✅           | 1, 5                         |
| desbloqueio_confianca                  | Inferência | 2     | ✅           | N, P                         |
| desbloqueio_confianca_ativo            | Inferência | 2     | ✅           | N, S                         |
| descricao_aux_plano_venda              | Inferência | 1     | ✅           | PERMUTA                      |
| document_photo                         | Inferência | 1     | ✅           | P                            |
| fidelidade                             | Inferência | 2     | ✅           | 12, 24                       |
| financeiro_migrado                     | Inferência | 1     | ✅           | N                            |
| gerar_finan_assin_digital_contrato     | Inferência | 2     | ✅           | N, P                         |
| imp_bkp                                | Inferência | 1     | ✅           | N                            |
| imp_carteira                           | Inferência | 1     | ✅           | N                            |
| imp_importacao                         | Inferência | 1     | ✅           | N                            |
| imp_rede                               | Inferência | 1     | ✅           | N                            |
| imp_treinamento                        | Inferência | 1     | ✅           | N                            |
| integracao_assinatura_digital          | Inferência | 2     | ✅           | N, P                         |
| isentar_contrato                       | Inferência | 2     | ✅           | N, S                         |
| liberacao_bloqueio_manual              | Inferência | 2     | ✅           | P, S                         |
| liberacao_suspensao_parcial            | Inferência | 1     | ✅           | P                            |
| obs                                    | Inferência | 1     | ✅           | cancelado via banco de dados |
| origem_cancelamento                    | Inferência | 1     | ✅           | M                            |
| portabilidade_summit                   | Inferência | 1     | ✅           | N                            |
| renovacao_automatica                   | Inferência | 2     | ✅           | N, S                         |
| restricao_auto_desbloqueio             | Inferência | 2     | ✅           | N, S                         |
| restricao_auto_libera_susp_parcial     | Inferência | 1     | ✅           | N                            |
| selfie_photo                           | Inferência | 1     | ✅           | P                            |
| situacao_financeira_contrato           | Inferência | 1     | ✅           | R                            |
| status                                 | Inferência | 3     | ✅           | A, I, P                      |
| status_velocidade                      | Inferência | 2     | ✅           | N, R                         |
| tipo                                   | Inferência | 1     | ✅           | I                            |
| tipo_cobranca                          | Inferência | 1     | ✅           | P                            |
| tipo_doc_opc3                          | Inferência | 2     | ✅           | 0, 13                        |
| tipo_localidade                        | Inferência | 1     | ✅           | U                            |
| tipo_produtos_plano                    | Inferência | 1     | ✅           | P                            |
| updated_responsible_seller             | Inferência | 1     | ✅           | N                            |
| utilizando_auto_libera_susp_parc       | Inferência | 1     | ✅           | N                            |

---

---

## Collection: fn_areceber

| Campo                            | Origem     | Count | Status | Valores  |
| -------------------------------- | ---------- | ----- | ------ | -------- |
| aguardando_confirmacao_pagamento | Inferência | 1     | ✅     | N        |
| caixa                            | Inferência | 3     | ✅     | 0, 13, 6 |
| cancelamento_id_operador         | Inferência | 1     | ✅     | 70       |
| em_processamento                 | Inferência | 1     | ✅     | N        |
| enviado_remessa_baixa            | Inferência | 1     | ✅     | N        |
| estornado                        | Inferência | 1     | ✅     | N        |
| impresso                         | Inferência | 2     | ✅     | N, S     |
| libera_periodo                   | Inferência | 1     | ✅     | N        |
| liberado                         | Inferência | 1     | ✅     | S        |
| lote                             | Inferência | 2     | ✅     | -3, 1    |
| parcela_proporcional             | Inferência | 1     | ✅     | N        |
| parcelado_cartao                 | Inferência | 1     | ✅     | N        |
| previsao                         | Inferência | 1     | ✅     | S        |
| recebido_via_pix                 | Inferência | 1     | ✅     | N        |
| status                           | Inferência | 2     | ✅     | C, R     |
| status_cobranca                  | Inferência | 1     | ✅     | F        |
| tarifa_gateway_lancada           | Inferência | 1     | ✅     | N        |
| tipo_cobranca                    | Inferência | 1     | ✅     | I        |
| tipo_recebimento                 | Inferência | 1     | ✅     | Boleto   |
| titulo_importado                 | Inferência | 1     | ✅     | S        |
| titulo_protestado                | Inferência | 1     | ✅     | N        |

---

---

## Collection: linha_mvno

| Campo         | Origem     | Count | Status | Valores |
| ------------- | ---------- | ----- | ------ | ------- |
| api           | Inferência | 2     | ✅     | A, I    |
| esim          | Inferência | 2     | ✅     | N, S    |
| portabilidade | Inferência | 2     | ✅     | N, S    |

---

---

## Collection: su_ticket

| Campo                  | Origem     | Count | Status | Valores    |
| ---------------------- | ---------- | ----- | ------ | ---------- |
| interacao_pendente     | Inferência | 4     | ✅     | A, E, I, N |
| melhor_horario_agenda  | Inferência | 1     | ✅     | Q          |
| melhor_horario_reserva | Inferência | 3     | ✅     | M, Q, T    |
| mensagens_nao_lida_sup | Inferência | 2     | ✅     | 0, 1       |
| origem_cadastro        | Inferência | 1     | ✅     | P          |
| prioridade             | Inferência | 3     | ✅     | A, C, M    |
| status                 | Inferência | 3     | ✅     | C, F, OSAG |
| su_status              | Inferência | 1     | ✅     | S          |
| tipo                   | Inferência | 1     | ✅     | C          |

---

---

## Collection: vd_contratos_produtos

| Campo         | Origem     | Count | Status | Valores       |
| ------------- | ---------- | ----- | ------ | ------------- |
| qtde          | Inferência | 2     | ✅     | 1, 3          |
| repetir       | Inferência | 1     | ✅     | V             |
| tipo          | Inferência | 4     | ✅     | I, S, SVA, TV |
| tipo_desconto | Inferência | 1     | ✅     | V             |

---

---
