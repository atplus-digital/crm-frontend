# Relatório de Inferência de Enums

> **Data:** 2026-04-20
> **Collections analisadas:** 6

---

## Resumo por Collection

| Collection            | Campos Enum | Status |
| --------------------- | ----------- | ------ |
| cliente               | 59          | ✅     |
| cliente_contrato      | 53          | ✅     |
| fn_areceber           | 27          | ✅     |
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

| Campo                         | Origem        | Total Registros | Count | Status | Valores                                               |
| ----------------------------- | ------------- | --------------- | ----- | ------ | ----------------------------------------------------- |
| acesso_automatico_central     | 🧠 Inferência | 0               | 2     | ✅     | P, S                                                  |
| alterar_senha_primeiro_acesso | 🧠 Inferência | 0               | 2     | ✅     | N, P                                                  |
| antigo_acesso_central         | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| ativo                         | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| atualizar_cadastro_galaxPay   | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| aviso_atraso                  | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| bairro_cob                    | 🧠 Inferência | 0               | 3     | ✅     | Conta Dinheiro, Guarujá, Vila Nova                    |
| cadastrado_no_galaxPay        | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| cep_cob                       | 🧠 Inferência | 0               | 3     | ✅     | 88503-210, 88520-100, 88521-020                       |
| cli_desconta_iss_retido_total | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| cob_envia_email               | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| cob_envia_sms                 | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| cofins_retem                  | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| complemento_cob               | 🧠 Inferência | 0               | 1     | ✅     | CASA                                                  |
| cond_pagamento                | 🧠 Inferência | 0               | 2     | ✅     | 0, 1                                                  |
| contato                       | 🧠 Inferência | 0               | 4     | ✅     | (49) 99912-6600 - Osmar Duarte Branco, 29505623968... |
| contribuinte_icms             | 🧠 Inferência | 0               | 3     | ✅     | I, N, S                                               |
| convert_cliente_forn          | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| crm                           | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| csll_retem                    | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| data_hash_redefinir_senha     | 🧠 Inferência | 0               | 4     | ✅     | 2022-02-13 21:09:39, 2022-04-30 18:40:27, 2022-06-... |
| desconto_irrf_valor_inferior  | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| endereco_cob                  | 🧠 Inferência | 0               | 3     | ✅     | Avenida Segundo Batalhão Rodoviário, Rua João da S... |
| estado_civil                  | 🧠 Inferência | 0               | 3     | ✅     | Casado, Divorciado, Solteiro                          |
| filial_id                     | 🧠 Inferência | 0               | 1     | ✅     | 1                                                     |
| filtra_filial                 | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| grau_satisfacao               | 🧠 Inferência | 0               | 3     | ✅     | 3, 4, 5                                               |
| hash_redefinir_senha          | 🧠 Inferência | 0               | 3     | ✅     | 2cddcfdf3e2b1292698984122b758245, b66fbb2dd0c2ff76... |
| hotsite_acesso                | 🧠 Inferência | 0               | 2     | ✅     | 0, 2                                                  |
| id_tipo_cliente               | 🧠 Inferência | 0               | 2     | ✅     | 0, 2                                                  |
| inss_retem                    | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| irrf_retem                    | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| iss_classificacao             | 🧠 Inferência | 0               | 1     | ✅     | 99                                                    |
| iss_classificacao_padrao      | 🧠 Inferência | 0               | 1     | ✅     | 99                                                    |
| moradia                       | 🧠 Inferência | 0               | 2     | ✅     | A, P                                                  |
| nacionalidade                 | 🧠 Inferência | 0               | 1     | ✅     | Brasileiro                                            |
| num_dias_cob                  | 🧠 Inferência | 0               | 2     | ✅     | 0, 1                                                  |
| orgao_publico                 | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| participa_cobranca            | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| participa_pre_cobranca        | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| permite_armazenar_cartoes     | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| pis_retem                     | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| primeiro_acesso_central       | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| rede_ativacao                 | 🧠 Inferência | 0               | 1     | ✅     | P                                                     |
| regua_cobranca_considera      | 🧠 Inferência | 0               | 1     | ✅     | P                                                     |
| regua_cobranca_notificacao    | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| regua_cobranca_wpp            | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| rg_orgao_emissor              | 🧠 Inferência | 0               | 3     | ✅     | DICRJ, SsP, SSP                                       |
| senha_hotsite_md5             | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| Sexo                          | 🧠 Inferência | 0               | 2     | ✅     | F, M                                                  |
| status_internet               | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| status_prospeccao             | 🧠 Inferência | 0               | 1     | ✅     | C                                                     |
| tipo_assinante                | 🧠 Inferência | 0               | 2     | ✅     | 1, 3                                                  |
| tipo_cliente_scm              | 🧠 Inferência | 0               | 2     | ✅     | 01, 03                                                |
| tipo_documento_identificacao  | 🧠 Inferência | 0               | 1     | ✅     | 13                                                    |
| tipo_localidade               | 🧠 Inferência | 0               | 1     | ✅     | U                                                     |
| tipo_pessoa                   | 🧠 Inferência | 0               | 2     | ✅     | F, J                                                  |
| tipo_pessoa_titular_conta     | 🧠 Inferência | 0               | 1     | ✅     | F                                                     |
| uf_cob                        | 🧠 Inferência | 0               | 2     | ✅     | 0, 2                                                  |

---

---

## Collection: cliente_contrato

| Campo                                  | Origem        | Total Registros | Count | Status | Valores                      |
| -------------------------------------- | ------------- | --------------- | ----- | ------ | ---------------------------- |
| agrupar_financeiro_contrato            | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| alerta_contrato                        | 🧠 Inferência | 0               | 3     | ✅     | cliente vai pagar            |
| mais um dos valores ate 29/02...       |
| aplica_desconto_tempo_bloqueio         | 🧠 Inferência | 0               | 1     | ✅     | S                            |
| aplicar_desconto_tempo_bloqueio        | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| assinatura_digital                     | 🧠 Inferência | 0               | 2     | ✅     | N, P                         |
| ativo_summit                           | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| aviso_atraso                           | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| base_geracao_tipo_doc                  | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| bloqueio_automatico                    | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| cc_previsao                            | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| contrato_suspenso                      | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| credit_card_recorrente_bandeira_cartao | 🧠 Inferência | 0               | 3     | ✅     | mastercard, MasterCard, Visa |
| credit_card_recorrente_carteira_antiga | 🧠 Inferência | 0               | 2     | ✅     | 1, 5                         |
| desbloqueio_confianca                  | 🧠 Inferência | 0               | 2     | ✅     | N, P                         |
| desbloqueio_confianca_ativo            | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| descricao_aux_plano_venda              | 🧠 Inferência | 0               | 1     | ✅     | PERMUTA                      |
| document_photo                         | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| endereco_padrao_cliente                | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| fidelidade                             | 🧠 Inferência | 0               | 2     | ✅     | 12, 24                       |
| financeiro_migrado                     | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| gerar_finan_assin_digital_contrato     | 🧠 Inferência | 0               | 2     | ✅     | N, P                         |
| id_filial                              | 🧠 Inferência | 0               | 1     | ✅     | 1                            |
| id_modelo                              | 🧠 Inferência | 0               | 1     | ✅     | 5                            |
| id_motivo_inclusao                     | 🧠 Inferência | 0               | 5     | ✅     | 1, 2, 3, 5, 7                |
| id_tipo_documento                      | 🧠 Inferência | 0               | 1     | ✅     | 501                          |
| imp_bkp                                | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| imp_carteira                           | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| imp_importacao                         | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| imp_rede                               | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| imp_treinamento                        | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| integracao_assinatura_digital          | 🧠 Inferência | 0               | 2     | ✅     | N, P                         |
| isentar_contrato                       | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| liberacao_bloqueio_manual              | 🧠 Inferência | 0               | 2     | ✅     | P, S                         |
| liberacao_suspensao_parcial            | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| motivo_inclusao                        | 🧠 Inferência | 0               | 5     | ✅     | D, I, N, T, U                |
| obs                                    | 🧠 Inferência | 0               | 1     | ✅     | cancelado via banco de dados |
| origem_cancelamento                    | 🧠 Inferência | 0               | 1     | ✅     | M                            |
| portabilidade_summit                   | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| renovacao_automatica                   | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| restricao_auto_desbloqueio             | 🧠 Inferência | 0               | 2     | ✅     | N, S                         |
| restricao_auto_libera_susp_parcial     | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| selfie_photo                           | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| situacao_financeira_contrato           | 🧠 Inferência | 0               | 1     | ✅     | R                            |
| status                                 | 🧠 Inferência | 0               | 3     | ✅     | A, I, P                      |
| status_internet                        | 🧠 Inferência | 0               | 5     | ✅     | A, AA, CA, D, FA             |
| status_velocidade                      | 🧠 Inferência | 0               | 2     | ✅     | N, R                         |
| tipo                                   | 🧠 Inferência | 0               | 1     | ✅     | I                            |
| tipo_cobranca                          | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| tipo_doc_opc3                          | 🧠 Inferência | 0               | 2     | ✅     | 0, 13                        |
| tipo_localidade                        | 🧠 Inferência | 0               | 1     | ✅     | U                            |
| tipo_produtos_plano                    | 🧠 Inferência | 0               | 1     | ✅     | P                            |
| updated_responsible_seller             | 🧠 Inferência | 0               | 1     | ✅     | N                            |
| utilizando_auto_libera_susp_parc       | 🧠 Inferência | 0               | 1     | ✅     | N                            |

---

---

## Collection: fn_areceber

| Campo                            | Origem        | Total Registros | Count | Status | Valores                                               |
| -------------------------------- | ------------- | --------------- | ----- | ------ | ----------------------------------------------------- |
| aguardando_confirmacao_pagamento | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| caixa                            | 🧠 Inferência | 0               | 3     | ✅     | 0, 13, 6                                              |
| cancelamento_id_operador         | 🧠 Inferência | 0               | 1     | ✅     | 70                                                    |
| em_processamento                 | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| enviado_remessa_baixa            | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| estornado                        | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| filial_id                        | 🧠 Inferência | 0               | 1     | ✅     | 1                                                     |
| id_carteira_cobranca             | 🧠 Inferência | 0               | 3     | ✅     | 0, 4, 5                                               |
| id_mot_cancelamento              | 🧠 Inferência | 0               | 1     | ✅     | 1                                                     |
| id_remessa                       | 🧠 Inferência | 0               | 2     | ✅     | 0, 2                                                  |
| id_saida                         | 🧠 Inferência | 0               | 1     | ✅     | -25                                                   |
| impresso                         | 🧠 Inferência | 0               | 2     | ✅     | N, S                                                  |
| libera_periodo                   | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| liberado                         | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| lote                             | 🧠 Inferência | 0               | 2     | ✅     | -3, 1                                                 |
| parcela_proporcional             | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| parcelado_cartao                 | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| previsao                         | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| recebido_via_pix                 | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| status                           | 🧠 Inferência | 0               | 2     | ✅     | C, R                                                  |
| status_cobranca                  | 🧠 Inferência | 0               | 1     | ✅     | F                                                     |
| tarifa_gateway_lancada           | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| tipo_cobranca                    | 🧠 Inferência | 0               | 1     | ✅     | I                                                     |
| tipo_recebimento                 | 🧠 Inferência | 0               | 1     | ✅     | Boleto                                                |
| titulo_importado                 | 🧠 Inferência | 0               | 1     | ✅     | S                                                     |
| titulo_protestado                | 🧠 Inferência | 0               | 1     | ✅     | N                                                     |
| ultima_atualizacao               | 🧠 Inferência | 0               | 4     | ✅     | 2021-12-28T12:59:30.000Z, 2025-11-21T18:53:48.000Z... |

---

---

## Collection: linha_mvno

| Campo           | Origem        | Total Registros | Count | Status | Valores                 |
| --------------- | ------------- | --------------- | ----- | ------ | ----------------------- |
| api             | 🧠 Inferência | 0               | 2     | ✅     | A, I                    |
| ddd_telefone    | 🧠 Inferência | 0               | 6     | ⚠️     | 24, 41, 44, 47, 48, 49  |
| dia_recorrencia | 🧠 Inferência | 0               | 7     | ⚠️     | 0, 1, 10, 15, 20, 25, 5 |
| esim            | 🧠 Inferência | 0               | 2     | ✅     | N, S                    |
| id_integracao   | 🧠 Inferência | 0               | 2     | ✅     | 1, 2                    |
| portabilidade   | 🧠 Inferência | 0               | 2     | ✅     | N, S                    |

---

---

## Collection: su_ticket

| Campo                  | Origem        | Total Registros | Count | Status | Valores             |
| ---------------------- | ------------- | --------------- | ----- | ------ | ------------------- |
| id_filial              | 🧠 Inferência | 0               | 1     | ✅     | 1                   |
| id_su_diagnostico      | 🧠 Inferência | 0               | 4     | ✅     | 0, 1, 10, 13        |
| id_ticket_origem       | 🧠 Inferência | 0               | 2     | ✅     | H, I                |
| id_ticket_setor        | 🧠 Inferência | 0               | 7     | ⚠️     | 1, 2, 3, 4, 5, 7, 8 |
| interacao_pendente     | 🧠 Inferência | 0               | 4     | ✅     | A, E, I, N          |
| melhor_horario_agenda  | 🧠 Inferência | 0               | 1     | ✅     | Q                   |
| melhor_horario_reserva | 🧠 Inferência | 0               | 3     | ✅     | M, Q, T             |
| mensagens_nao_lida_sup | 🧠 Inferência | 0               | 2     | ✅     | 0, 1                |
| origem_cadastro        | 🧠 Inferência | 0               | 1     | ✅     | P                   |
| origem_endereco        | 🧠 Inferência | 0               | 4     | ✅     | C, CC, L, M         |
| prioridade             | 🧠 Inferência | 0               | 3     | ✅     | A, C, M             |
| status                 | 🧠 Inferência | 0               | 3     | ✅     | C, F, OSAG          |
| su_status              | 🧠 Inferência | 0               | 1     | ✅     | S                   |
| tipo                   | 🧠 Inferência | 0               | 1     | ✅     | C                   |

---

---

## Collection: vd_contratos_produtos

| Campo         | Origem        | Total Registros | Count | Status | Valores       |
| ------------- | ------------- | --------------- | ----- | ------ | ------------- |
| qtde          | 🧠 Inferência | 0               | 2     | ✅     | 1, 3          |
| repetir       | 🧠 Inferência | 0               | 1     | ✅     | V             |
| tipo          | 🧠 Inferência | 0               | 4     | ✅     | I, S, SVA, TV |
| tipo_desconto | 🧠 Inferência | 0               | 1     | ✅     | V             |

---

---
