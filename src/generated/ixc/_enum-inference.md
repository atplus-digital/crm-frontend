# Relatório de Inferência de Enums

> **Data:** 2026-04-20
> **Collections analisadas:** 6

---

## Resumo Geral

- **Total de enums inferidos:** 111
- **Total de campos rejeitados:** 0

---

## Resumo por Collection

| Collection            | Enums | Rejeitados | Status |
| --------------------- | ----- | ---------- | ------ |
| cliente               | 32    | 0          | ✅     |
| cliente_contrato      | 39    | 0          | ✅     |
| fn_areceber           | 22    | 0          | ✅     |
| linha_mvno            | 6     | 0          | ✅     |
| su_ticket             | 8     | 0          | ✅     |
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

| Campo                         | Origem  | Count | Status       | Valores                                               |
| ----------------------------- | ------- | ----- | ------------ | ----------------------------------------------------- |
| acesso_automatico_central     | Adapter | 3     | ✅           | S, N, P                                               |
| alterar_senha_primeiro_acesso | Adapter | 3     | ✅           | S, N, P                                               |
| ativo                         | Adapter | 2     | ✅           | S, N                                                  |
| ativo_serasa                  | Adapter | 2     | ✅           | 1, 2                                                  |
| cadastrado_via_viabilidade    | Adapter | 2     | ✅           | S, N                                                  |
| cob_envia_email               | Adapter | 2     | ✅           | S, N                                                  |
| cob_envia_sms                 | Adapter | 2     | ✅           | S, N                                                  |
| contribuinte_icms             | Adapter | 4     | ✅           | S, N, I, E                                            |
| convert_cliente_forn          | Adapter | 2     | ✅           | S, N                                                  |
| crm                           | Adapter | 2     | ✅           | S, N                                                  |
| desconto_irrf_valor_inferior  | Adapter | 2     | ✅           | S, N                                                  |
| estado_civil                  | Adapter | 4     | ✅           | Casado, Solteiro, Divorciado, ViÃºvo                  |
| filtra_filial                 | Adapter | 2     | ✅           | S, N                                                  |
| grau_satisfacao               | Adapter | 5     | ✅           | 1, 2, 3, 4, 5                                         |
| iss_classificacao_padrao      | Adapter | 5     | ✅           | 00, 01, 02, 03, 99                                    |
| moradia                       | Adapter | 2     | ✅           | P, A                                                  |
| orgao_publico                 | Adapter | 2     | ✅           | S, N                                                  |
| participa_pre_cobranca        | Adapter | 2     | ✅           | S, N                                                  |
| regime_fiscal_col             | Adapter | 2     | ✅           | 48, 49                                                |
| regua_cobranca_considera      | Adapter | 3     | ✅           | S, N, P                                               |
| regua_cobranca_notificacao    | Adapter | 2     | ✅           | S, N                                                  |
| regua_cobranca_wpp            | Adapter | 2     | ✅           | S, N                                                  |
| senha_hotsite_md5             | Adapter | 2     | ✅           | S, N                                                  |
| Sexo                          | Adapter | 5     | ✅           | F, M, NB, O, PNI                                      |
| status_prospeccao             | Adapter | 9     | ⚠️           | C, S, A, N, V, P, AB, SV, SP                          |
| tipo_assinante                | Adapter | 6     | ⚠️           | 1, 2, 3, 4, 5, 6                                      |
| tipo_cliente_scm              | Adapter | 14    | ❓ Avaliar   | 01, 02, 03, 04, 05, 06, 07, 08, 99, 0-13, 0-15, 0-... |
| tipo_documento_identificacao  | Adapter | 27    | ❓ Avaliar   | 11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, NUIT, ... |
| tipo_ente_governamental       | Adapter | 4     | ✅           | 1, 2, 3, 4                                            |
| tipo_localidade               | Adapter | 2     | ✅           | R, U                                                  |
| tipo_pessoa                   | Adapter | 6     | ⚠️ Duplicado | F, J, E, 1, 2, 3                                      |
| tipo_pessoa_titular_conta     | Adapter | 2     | ✅           | F, J                                                  |

---

---

## Collection: cliente_contrato

| Campo                              | Origem  | Count | Status | Valores                                               |
| ---------------------------------- | ------- | ----- | ------ | ----------------------------------------------------- |
| agrupar_financeiro_contrato        | Adapter | 3     | ✅     | S, N, P                                               |
| aplicar_desconto_tempo_bloqueio    | Adapter | 3     | ✅     | S, N, P                                               |
| assinatura_digital                 | Adapter | 3     | ✅     | S, N, P                                               |
| aviso_atraso                       | Adapter | 2     | ✅     | S, N                                                  |
| base_geracao_tipo_doc              | Adapter | 3     | ✅     | OPC, PROD, P                                          |
| bloqueio_automatico                | Adapter | 2     | ✅     | S, N                                                  |
| cc_previsao                        | Adapter | 4     | ✅     | P, N, S, M                                            |
| contrato_recorrencia               | Adapter | 3     | ✅     | PIX, CREDIT, N                                        |
| contrato_suspenso                  | Adapter | 2     | ✅     | S, N                                                  |
| desbloqueio_confianca              | Adapter | 3     | ✅     | S, N, P                                               |
| desbloqueio_confianca_ativo        | Adapter | 2     | ✅     | S, N                                                  |
| document_photo                     | Adapter | 3     | ✅     | S, N, P                                               |
| estrato_social_col                 | Adapter | 6     | ⚠️     | 1, 2, 3, 4, 5, 6                                      |
| gerar_finan_assin_digital_contrato | Adapter | 3     | ✅     | S, N, P                                               |
| imp_bkp                            | Adapter | 2     | ✅     | S, N                                                  |
| imp_carteira                       | Adapter | 2     | ✅     | S, N                                                  |
| imp_importacao                     | Adapter | 2     | ✅     | S, N                                                  |
| imp_realizado                      | Adapter | 2     | ✅     | S, N                                                  |
| imp_rede                           | Adapter | 2     | ✅     | S, N                                                  |
| imp_status                         | Adapter | 2     | ✅     | F, A                                                  |
| imp_treinamento                    | Adapter | 2     | ✅     | S, N                                                  |
| integracao_assinatura_digital      | Adapter | 3     | ✅     | S, N, P                                               |
| isentar_contrato                   | Adapter | 2     | ✅     | S, N                                                  |
| liberacao_bloqueio_manual          | Adapter | 3     | ✅     | S, N, P                                               |
| liberacao_suspensao_parcial        | Adapter | 3     | ✅     | H, D, P                                               |
| motivo_inclusao                    | Adapter | 8     | ⚠️     | I, U, D, M, T, L, N, R                                |
| origem_cancelamento                | Adapter | 2     | ✅     | M, A                                                  |
| renovacao_automatica               | Adapter | 2     | ✅     | S, N                                                  |
| restricao_auto_desbloqueio         | Adapter | 2     | ✅     | S, N                                                  |
| restricao_auto_libera_susp_parcial | Adapter | 2     | ✅     | S, N                                                  |
| selfie_photo                       | Adapter | 3     | ✅     | S, N, P                                               |
| status                             | Adapter | 5     | ✅     | P, A, I, N, D                                         |
| status_internet                    | Adapter | 6     | ⚠️     | A, D, CM, CA, FA, AA                                  |
| status_recorrencia                 | Adapter | 5     | ✅     | AGUARDANDO_APROVACAO, APROVADA, REJEITADA, EXPIRAD... |
| status_velocidade                  | Adapter | 2     | ✅     | N, R                                                  |
| tipo                               | Adapter | 4     | ✅     | I, T, S, SVA                                          |
| tipo_cobranca                      | Adapter | 3     | ✅     | P, I, E                                               |
| tipo_localidade                    | Adapter | 2     | ✅     | R, U                                                  |
| utilizando_auto_libera_susp_parc   | Adapter | 2     | ✅     | S, N                                                  |

---

---

## Collection: fn_areceber

| Campo                            | Origem  | Count | Status       | Valores                                               |
| -------------------------------- | ------- | ----- | ------------ | ----------------------------------------------------- |
| aguardando_confirmacao_pagamento | Adapter | 2     | ✅           | S, N                                                  |
| arquivo_remessa_baixado          | Adapter | 2     | ✅           | S, N                                                  |
| em_cobranca                      | Adapter | 2     | ✅           | S, N                                                  |
| estornado                        | Adapter | 2     | ✅           | S, N                                                  |
| etapa_envio_regua                | Adapter | 11    | ❓ Avaliar   | LP, CV, AC, IP, AP, CAP, NC, RCA, CCA, RCB, RN        |
| forma_recebimento                | Adapter | 2     | ✅           | M, R                                                  |
| impresso                         | Adapter | 2     | ✅           | S, N                                                  |
| libera_periodo                   | Adapter | 2     | ✅           | S, N                                                  |
| motivo_alteracao                 | Adapter | 35    | ⚠️ Duplicado | 08, 15, 16, 17, 03, 04, 05, 06, 07, 09, 10, 11, 12... |
| parcelado_cartao                 | Adapter | 2     | ✅           | S, N                                                  |
| pix_status_recorrente            | Adapter | 6     | ⚠️           | CRIADA, ATIVA, CONCLUIDA, EXPIRADA, REJEITADA, CAN... |
| previsao                         | Adapter | 3     | ✅           | N, S, M                                               |
| recebido_por_recorrencia         | Adapter | 2     | ✅           | S, N                                                  |
| recebido_via_pix                 | Adapter | 2     | ✅           | S, N                                                  |
| status                           | Adapter | 4     | ✅           | A, R, P, C                                            |
| status_cobranca_regua            | Adapter | 2     | ✅           | A, F                                                  |
| tipo_cobranca                    | Adapter | 3     | ✅           | P, I, E                                               |
| tipo_cobranca_pix                | Adapter | 2     | ✅           | COM_VENCIMENTO, IMEDIATA                              |
| tipo_recebimento                 | Adapter | 11    | ❓ Avaliar   | Boleto, Cheque, CartÃ£o, Dinheiro, DepÃ³sito, Gate... |
| titulo_importado                 | Adapter | 2     | ✅           | S, N                                                  |
| titulo_protestado                | Adapter | 2     | ✅           | S, N                                                  |
| titulo_renegociado               | Adapter | 2     | ✅           | S, N                                                  |

---

---

## Collection: linha_mvno

| Campo                | Origem  | Count | Status | Valores                         |
| -------------------- | ------- | ----- | ------ | ------------------------------- |
| api                  | Adapter | 2     | ✅     | A, I                            |
| esim                 | Adapter | 2     | ✅     | S, N                            |
| portabilidade        | Adapter | 2     | ✅     | S, N                            |
| status_linha         | Adapter | 9     | ⚠️     | A, BR, BP, BA, I, BI, BT, C, AA |
| status_portabilidade | Adapter | 4     | ✅     | A, R, CO, CA                    |
| tipo_numero          | Adapter | 7     | ⚠️     | 1, 2, 3, 4, 5, 6, 7             |

---

---

## Collection: su_ticket

| Campo                     | Origem  | Count | Status | Valores        |
| ------------------------- | ------- | ----- | ------ | -------------- |
| id_ticket_origem          | Adapter | 2     | ✅     | I, H           |
| interacao_pendente        | Adapter | 4     | ✅     | E, I, N, A     |
| melhor_horario_reserva    | Adapter | 4     | ✅     | M, T, N, Q     |
| origem_endereco           | Adapter | 4     | ✅     | C, L, CC, M    |
| origem_endereco_estrutura | Adapter | 2     | ✅     | E, M           |
| prioridade                | Adapter | 4     | ✅     | B, M, A, C     |
| su_status                 | Adapter | 5     | ✅     | N, P, EP, S, C |
| tipo                      | Adapter | 2     | ✅     | C, E           |

---

---

## Collection: vd_contratos_produtos

| Campo         | Origem  | Count | Status | Valores               |
| ------------- | ------- | ----- | ------ | --------------------- |
| fixar_ip      | Adapter | 2     | ✅     | 1, 0                  |
| repetir       | Adapter | 2     | ✅     | V, S                  |
| tipo          | Adapter | 6     | ⚠️     | I, T, S, SVA, TV, SMP |
| tipo_desconto | Adapter | 2     | ✅     | V, P                  |

---

---
