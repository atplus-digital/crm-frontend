# Relatório de Inferência de Enums - IXC

> **Data:** 2026-04-17
> **Collections analisadas:** 6

---

## Resumo por Collection

| Collection            | Campos Enum | Status |
| --------------------- | ----------- | ------ |
| cliente               | 99          | ✅     |
| cliente_contrato      | 104         | ✅     |
| fn_areceber           | 42          | ✅     |
| linha_mvno            | 11          | ✅     |
| su_ticket             | 22          | ✅     |
| vd_contratos_produtos | 13          | ✅     |

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
| ativo_serasa                  | 1             | ✅ Aprovado | 0                                                     |
| atualizar_cadastro_galaxPay   | 2             | ✅ Aprovado | N, S                                                  |
| aviso_atraso                  | 1             | ✅ Aprovado | S                                                     |
| bairro_cob                    | 3             | ✅ Aprovado | Conta Dinheiro, Guarujá, Vila Nova                    |
| cadastrado_no_galaxPay        | 2             | ✅ Aprovado | N, S                                                  |
| cep_cob                       | 3             | ✅ Aprovado | 88503-210, 88520-100, 88521-020                       |
| cidade_cob                    | 2             | ✅ Aprovado | 0, 4450                                               |
| cidade_naturalidade           | 1             | ✅ Aprovado | 0                                                     |
| cli_desconta_iss_retido_total | 1             | ✅ Aprovado | N                                                     |
| cob_envia_email               | 1             | ✅ Aprovado | S                                                     |
| cob_envia_sms                 | 1             | ✅ Aprovado | S                                                     |
| codigo_operacao               | 1             | ✅ Aprovado | 0                                                     |
| cofins_retem                  | 1             | ✅ Aprovado | N                                                     |
| complemento_cob               | 1             | ✅ Aprovado | CASA                                                  |
| cond_pagamento                | 2             | ✅ Aprovado | 0, 1                                                  |
| contato                       | 4             | ✅ Aprovado | (49) 99912-6600 - Osmar Duarte Branco, 29505623968... |
| contribuinte_icms             | 3             | ✅ Aprovado | I, N, S                                               |
| convert_cliente_forn          | 1             | ✅ Aprovado | N                                                     |
| crm                           | 1             | ✅ Aprovado | N                                                     |
| crm_data_abortamos            | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_apresentando         | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_negociando           | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_novo                 | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_perdemos             | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_sem_porta_disponivel | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_sem_viabilidade      | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_sondagem             | 1             | ✅ Aprovado | 0000-00-00                                            |
| crm_data_vencemos             | 1             | ✅ Aprovado | 0000-00-00                                            |
| csll_retem                    | 1             | ✅ Aprovado | N                                                     |
| data                          | 1             | ✅ Aprovado | 2021-11-29                                            |
| data_hash_redefinir_senha     | 4             | ✅ Aprovado | 2022-02-13 21:09:39, 2022-04-30 18:40:27, 2022-06-... |
| data_nascimento_conjuge       | 1             | ✅ Aprovado | 0000-00-00                                            |
| desconto_irrf_valor_inferior  | 2             | ✅ Aprovado | N, S                                                  |
| emp_cidade                    | 1             | ✅ Aprovado | 0                                                     |
| emp_data_admissao             | 1             | ✅ Aprovado | 0000-00-00                                            |
| emp_remuneracao               | 1             | ✅ Aprovado | 0.00                                                  |
| endereco_cob                  | 3             | ✅ Aprovado | Avenida Segundo Batalhão Rodoviário, Rua João da S... |
| estado_civil                  | 3             | ✅ Aprovado | Casado, Divorciado, Solteiro                          |
| filial_id                     | 1             | ✅ Aprovado | 1                                                     |
| filtra_filial                 | 1             | ✅ Aprovado | S                                                     |
| grau_satisfacao               | 3             | ✅ Aprovado | 3, 4, 5                                               |
| hash_redefinir_senha          | 3             | ✅ Aprovado | 2cddcfdf3e2b1292698984122b758245, b66fbb2dd0c2ff76... |
| hotsite_acesso                | 2             | ✅ Aprovado | 0, 2                                                  |
| id_campanha                   | 1             | ✅ Aprovado | 0                                                     |
| id_candato_tipo               | 1             | ✅ Aprovado | 0                                                     |
| id_concorrente                | 1             | ✅ Aprovado | 0                                                     |
| id_condominio                 | 1             | ✅ Aprovado | 0                                                     |
| id_fornecedor_conversao       | 1             | ✅ Aprovado | 0                                                     |
| id_operadora_celular          | 1             | ✅ Aprovado | 0                                                     |
| id_perfil                     | 1             | ✅ Aprovado | 0                                                     |
| id_segmento                   | 1             | ✅ Aprovado | 0                                                     |
| id_tipo_cliente               | 2             | ✅ Aprovado | 0, 2                                                  |
| id_vendedor                   | 1             | ✅ Aprovado | 0                                                     |
| idx                           | 1             | ✅ Aprovado | 0                                                     |
| indicado_por                  | 1             | ✅ Aprovado | 0                                                     |
| inss_retem                    | 1             | ✅ Aprovado | N                                                     |
| irrf_retem                    | 1             | ✅ Aprovado | N                                                     |
| iss_classificacao             | 1             | ✅ Aprovado | 99                                                    |
| iss_classificacao_padrao      | 1             | ✅ Aprovado | 99                                                    |
| moradia                       | 2             | ✅ Aprovado | A, P                                                  |
| nacionalidade                 | 1             | ✅ Aprovado | Brasileiro                                            |
| nascimento_mae                | 1             | ✅ Aprovado | 0000-00-00                                            |
| nascimento_pai                | 1             | ✅ Aprovado | 0000-00-00                                            |
| num_dias_cob                  | 2             | ✅ Aprovado | 0, 1                                                  |
| numero_cob                    | 3             | ✅ Aprovado | 198, 251, 526                                         |
| orgao_publico                 | 1             | ✅ Aprovado | N                                                     |
| participa_cobranca            | 2             | ✅ Aprovado | N, S                                                  |
| participa_pre_cobranca        | 1             | ✅ Aprovado | S                                                     |
| percentual_reducao            | 1             | ✅ Aprovado | 0.0000                                                |
| permite_armazenar_cartoes     | 1             | ✅ Aprovado | N                                                     |
| pipe_id_organizacao           | 1             | ✅ Aprovado | 0                                                     |
| pis_retem                     | 1             | ✅ Aprovado | N                                                     |
| primeiro_acesso_central       | 2             | ✅ Aprovado | N, S                                                  |
| profissao                     | 12            | ❓ Avaliar  | Aposentado, Armador, Dentista, Desempregada no mom... |
| prospeccao_ultimo_contato     | 7             | ⚠️ Revisar  | 2022-08-24, 2023-03-14, 2023-04-03, 2023-04-04, 20... |
| quantidade_dependentes        | 1             | ✅ Aprovado | 0                                                     |
| rede_ativacao                 | 1             | ✅ Aprovado | P                                                     |
| regua_cobranca_considera      | 1             | ✅ Aprovado | P                                                     |
| regua_cobranca_notificacao    | 1             | ✅ Aprovado | S                                                     |
| regua_cobranca_wpp            | 1             | ✅ Aprovado | S                                                     |
| responsavel                   | 1             | ✅ Aprovado | 0                                                     |
| rg_orgao_emissor              | 3             | ✅ Aprovado | DICRJ, SsP, SSP                                       |
| senha_hotsite_md5             | 2             | ✅ Aprovado | N, S                                                  |
| Sexo                          | 2             | ✅ Aprovado | F, M                                                  |
| status_internet               | 1             | ✅ Aprovado | N                                                     |
| status_prospeccao             | 1             | ✅ Aprovado | C                                                     |
| tabela_preco                  | 1             | ✅ Aprovado | 0                                                     |
| tipo_assinante                | 2             | ✅ Aprovado | 1, 3                                                  |
| tipo_cliente_scm              | 2             | ✅ Aprovado | 01, 03                                                |
| tipo_documento_identificacao  | 1             | ✅ Aprovado | 13                                                    |
| tipo_localidade               | 1             | ✅ Aprovado | U                                                     |
| tipo_pessoa                   | 2             | ✅ Aprovado | F, J                                                  |
| tipo_pessoa_titular_conta     | 1             | ✅ Aprovado | F                                                     |
| uf                            | 9             | ⚠️ Revisar  | 1, 10, 12, 13, 2, 24, 25, 3, 4                        |
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

#### ativo_serasa

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### cidade_cob

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 4450  | 4450    |

#### cidade_naturalidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### codigo_operacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### contato

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor                                 | Label                               |
| ------------------------------------- | ----------------------------------- |
| (49) 99912-6600 - Osmar Duarte Branco | (49) 99912 6600 Osmar Duarte Branco |
| 29505623968                           | 29505623968                         |
| 49999854349                           | 49999854349                         |
| estagiosead@unifacvest.edu.br         | Estagiosead@unifacvest.edu.br       |

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

#### crm_data_abortamos

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_apresentando

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_negociando

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_novo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_perdemos

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_sem_porta_disponivel

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_sem_viabilidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_sondagem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### crm_data_vencemos

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### csll_retem

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### data

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 2021-11-29 | 2021 11 29 |

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

#### data_nascimento_conjuge

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### desconto_irrf_valor_inferior

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### emp_cidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### emp_data_admissao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### emp_remuneracao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

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

#### id_campanha

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_candato_tipo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_concorrente

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_condominio

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_fornecedor_conversao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_operadora_celular

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_perfil

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_segmento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_tipo_cliente

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### id_vendedor

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### idx

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### indicado_por

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### iss_classificacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 99    | Código 99 |

#### iss_classificacao_padrao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 99    | Código 99 |

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

#### nascimento_mae

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### nascimento_pai

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### num_dias_cob

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 1     | Ativo   |

#### numero_cob

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 198   | 198   |
| 251   | 251   |
| 526   | 526   |

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

#### percentual_reducao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor  | Label  |
| ------ | ------ |
| 0.0000 | 0.0000 |

#### permite_armazenar_cartoes

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### pipe_id_organizacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### profissao

- **Valores:** 12
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor                    | Label                    |
| ------------------------ | ------------------------ |
| Aposentado               | Aposentado               |
| Armador                  | Armador                  |
| Dentista                 | Dentista                 |
| Desempregada no momento  | Desempregada No Momento  |
| Empresário               | Empresário               |
| Operador de empilhadeira | Operador De Empilhadeira |
| Operadora de transmissão | Operadora De Transmissão |
| Professora               | Professora               |
| Serviços Gerais          | Serviços Gerais          |
| Servidor Público         | Servidor Público         |
| Vendedor                 | Vendedor                 |
| Vendedora                | Vendedora                |

#### prospeccao_ultimo_contato

- **Valores:** 7
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor      | Label      |
| ---------- | ---------- |
| 2022-08-24 | 2022 08 24 |
| 2023-03-14 | 2023 03 14 |
| 2023-04-03 | 2023 04 03 |
| 2023-04-04 | 2023 04 04 |
| 2023-05-02 | 2023 05 02 |
| 2023-08-04 | 2023 08 04 |
| 2024-12-23 | 2024 12 23 |

#### quantidade_dependentes

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### responsavel

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### tabela_preco

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### uf

- **Valores:** 9
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label     |
| ----- | --------- |
| 1     | Ativo     |
| 10    | Código 10 |
| 12    | Código 12 |
| 13    | Código 13 |
| 2     | Código 2  |
| 24    | Código 24 |
| 25    | Código 25 |
| 3     | Código 3  |
| 4     | Código 4  |

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

| Campo                                  | Cardinalidade | Status      | Valores                                               |
| -------------------------------------- | ------------- | ----------- | ----------------------------------------------------- |
| agrupar_financeiro_contrato            | 1             | ✅ Aprovado | P                                                     |
| alerta_contrato                        | 3             | ✅ Aprovado | cliente vai pagar                                     |
| mais um dos valores ate 29/02...       |
| apartamento                            | 1             | ✅ Aprovado | 0                                                     |
| aplica_desconto_tempo_bloqueio         | 1             | ✅ Aprovado | S                                                     |
| aplicar_desconto_tempo_bloqueio        | 1             | ✅ Aprovado | P                                                     |
| assinatura_digital                     | 2             | ✅ Aprovado | N, P                                                  |
| ativacao_valor_parcela                 | 1             | ✅ Aprovado | 0.00                                                  |
| ativo_summit                           | 1             | ✅ Aprovado | N                                                     |
| avalista_1                             | 1             | ✅ Aprovado | 0                                                     |
| avalista_2                             | 1             | ✅ Aprovado | 0                                                     |
| aviso_atraso                           | 2             | ✅ Aprovado | N, S                                                  |
| base_geracao_tipo_doc                  | 1             | ✅ Aprovado | P                                                     |
| bloqueio_automatico                    | 2             | ✅ Aprovado | N, S                                                  |
| cc_previsao                            | 1             | ✅ Aprovado | P                                                     |
| cidade                                 | 4             | ✅ Aprovado | 0, 4397, 4450, 4589                                   |
| comissao                               | 1             | ✅ Aprovado | 0.00                                                  |
| contrato_suspenso                      | 1             | ✅ Aprovado | N                                                     |
| credit_card_recorrente_bandeira_cartao | 3             | ✅ Aprovado | mastercard, MasterCard, Visa                          |
| credit_card_recorrente_carteira_antiga | 2             | ✅ Aprovado | 1, 5                                                  |
| credit_card_recorrente_dv_cartao       | 6             | ⚠️ Revisar  | 036, 327, 348, 377, 433, 721                          |
| credit_card_recorrente_token           | 6             | ⚠️ Revisar  | 1190, 1429, 1660, 2064, 771, 868                      |
| data_assinatura                        | 1             | ✅ Aprovado | 0000-00-00                                            |
| data_cadastro_sistema                  | 1             | ✅ Aprovado | 0000-00-00                                            |
| data_desistencia                       | 1             | ✅ Aprovado | 0000-00-00                                            |
| data_final_suspensao                   | 1             | ✅ Aprovado | 0000-00-00                                            |
| data_negativacao                       | 2             | ✅ Aprovado | 0000-00-00, 2022-01-10                                |
| data_retomada_contrato                 | 1             | ✅ Aprovado | 0000-00-00                                            |
| desbloqueio_confianca                  | 2             | ✅ Aprovado | N, P                                                  |
| desbloqueio_confianca_ativo            | 2             | ✅ Aprovado | N, S                                                  |
| desconto_fidelidade                    | 1             | ✅ Aprovado | 0.00                                                  |
| descricao_aux_plano_venda              | 1             | ✅ Aprovado | PERMUTA                                               |
| document_photo                         | 1             | ✅ Aprovado | P                                                     |
| dt_ult_bloq_manual                     | 7             | ⚠️ Revisar  | 0000-00-00, 2022-01-05, 2022-03-18, 2022-05-03, 20... |
| dt_ult_desbloq_auto                    | 1             | ✅ Aprovado | 0000-00-00                                            |
| dt_ult_desbloq_manual                  | 1             | ✅ Aprovado | 0000-00-00                                            |
| dt_ult_desiste                         | 1             | ✅ Aprovado | 0000-00-00                                            |
| dt_ult_liberacao_susp_parc             | 1             | ✅ Aprovado | 0000-00-00                                            |
| dt_utl_negativacao                     | 1             | ✅ Aprovado | 0000-00-00                                            |
| endereco_padrao_cliente                | 2             | ✅ Aprovado | N, S                                                  |
| fidelidade                             | 2             | ✅ Aprovado | 12, 24                                                |
| financeiro_migrado                     | 1             | ✅ Aprovado | N                                                     |
| gerar_finan_assin_digital_contrato     | 2             | ✅ Aprovado | N, P                                                  |
| id_carteira_cobranca                   | 9             | ⚠️ Revisar  | 1, 11, 14, 2, 3, 4, 5, 6, 9                           |
| id_cond_pag_ativ                       | 1             | ✅ Aprovado | 0                                                     |
| id_condominio                          | 1             | ✅ Aprovado | 0                                                     |
| id_contrato_principal                  | 1             | ✅ Aprovado | 0                                                     |
| id_filial                              | 1             | ✅ Aprovado | 1                                                     |
| id_indexador_reajuste                  | 1             | ✅ Aprovado | 0                                                     |
| id_instalador                          | 1             | ✅ Aprovado | 0                                                     |
| id_modelo                              | 1             | ✅ Aprovado | 5                                                     |
| id_motivo_inclusao                     | 5             | ✅ Aprovado | 1, 2, 3, 5, 7                                         |
| id_motivo_negativacao                  | 1             | ✅ Aprovado | 0                                                     |
| id_produto_ativ                        | 1             | ✅ Aprovado | 0                                                     |
| id_responsavel                         | 1             | ✅ Aprovado | 0                                                     |
| id_responsavel_cancelamento            | 12            | ❓ Avaliar  | 0, 108, 109, 11, 110, 146, 18, 52, 68, 80, 89, 96     |
| id_responsavel_desistencia             | 1             | ✅ Aprovado | 0                                                     |
| id_responsavel_negativacao             | 1             | ✅ Aprovado | 0                                                     |
| id_tipo_contrato                       | 15            | ❓ Avaliar  | 1, 10, 12, 15, 2, 20, 25, 30, 32, 35, 37, 38, 40, ... |
| id_tipo_doc_ativ                       | 1             | ✅ Aprovado | 0                                                     |
| id_tipo_documento                      | 1             | ✅ Aprovado | 501                                                   |
| id_vendedor_ativ                       | 1             | ✅ Aprovado | 0                                                     |
| ids_contratos_recorrencia              | 2             | ✅ Aprovado | 1898, 2896                                            |
| imp_bkp                                | 1             | ✅ Aprovado | N                                                     |
| imp_carteira                           | 1             | ✅ Aprovado | N                                                     |
| imp_final                              | 1             | ✅ Aprovado | 0000-00-00                                            |
| imp_importacao                         | 1             | ✅ Aprovado | N                                                     |
| imp_inicial                            | 1             | ✅ Aprovado | 0000-00-00                                            |
| imp_rede                               | 1             | ✅ Aprovado | N                                                     |
| imp_treinamento                        | 1             | ✅ Aprovado | N                                                     |
| indicacao_contrato_id                  | 1             | ✅ Aprovado | 0                                                     |
| integracao_assinatura_digital          | 2             | ✅ Aprovado | N, P                                                  |
| isentar_contrato                       | 2             | ✅ Aprovado | N, S                                                  |
| liberacao_bloqueio_manual              | 2             | ✅ Aprovado | P, S                                                  |
| liberacao_suspensao_parcial            | 1             | ✅ Aprovado | P                                                     |
| motivo_adicional                       | 1             | ✅ Aprovado | 0                                                     |
| motivo_cancelamento                    | 14            | ❓ Avaliar  | 0, 1, 12, 15, 17, 18, 2, 20, 23, 28, 3, 6, 7, 8       |
| motivo_desistencia                     | 1             | ✅ Aprovado | 0                                                     |
| motivo_inclusao                        | 5             | ✅ Aprovado | D, I, N, T, U                                         |
| num_parcelas_atraso                    | 1             | ✅ Aprovado | 0                                                     |
| obs                                    | 1             | ✅ Aprovado | cancelado via banco de dados                          |
| origem_cancelamento                    | 1             | ✅ Aprovado | M                                                     |
| portabilidade_summit                   | 1             | ✅ Aprovado | N                                                     |
| renovacao_automatica                   | 2             | ✅ Aprovado | N, S                                                  |
| restricao_auto_desbloqueio             | 2             | ✅ Aprovado | N, S                                                  |
| restricao_auto_libera_susp_parcial     | 1             | ✅ Aprovado | N                                                     |
| selfie_photo                           | 1             | ✅ Aprovado | P                                                     |
| situacao_financeira_contrato           | 1             | ✅ Aprovado | R                                                     |
| status                                 | 3             | ✅ Aprovado | A, I, P                                               |
| status_internet                        | 5             | ✅ Aprovado | A, AA, CA, D, FA                                      |
| status_velocidade                      | 2             | ✅ Aprovado | N, R                                                  |
| taxa_improdutiva                       | 1             | ✅ Aprovado | 0.000                                                 |
| taxa_instalacao                        | 1             | ✅ Aprovado | 0.00                                                  |
| tempo_permanencia                      | 14            | ❓ Avaliar  | 0.0, 45.7, 58.1, 60.2, 73.7, 74.5, 77.0, 78.0, 79.... |
| testemunha_assinatura_digital          | 1             | ✅ Aprovado | 0                                                     |
| tipo                                   | 1             | ✅ Aprovado | I                                                     |
| tipo_cobranca                          | 1             | ✅ Aprovado | P                                                     |
| tipo_doc_opc                           | 7             | ⚠️ Revisar  | 0, 512, 622, 623, 624, 632, 633                       |
| tipo_doc_opc2                          | 2             | ✅ Aprovado | 0, 900                                                |
| tipo_doc_opc3                          | 2             | ✅ Aprovado | 0, 13                                                 |
| tipo_doc_opc4                          | 2             | ✅ Aprovado | 0, 512                                                |
| tipo_localidade                        | 1             | ✅ Aprovado | U                                                     |
| tipo_produtos_plano                    | 1             | ✅ Aprovado | P                                                     |
| updated_responsible_seller             | 1             | ✅ Aprovado | N                                                     |
| utilizando_auto_libera_susp_parc       | 1             | ✅ Aprovado | N                                                     |

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

#### apartamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### ativacao_valor_parcela

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### ativo_summit

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### avalista_1

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### avalista_2

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### cidade

- **Valores:** 4
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 4397  | 4397    |
| 4450  | 4450    |
| 4589  | 4589    |

#### comissao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

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

#### credit_card_recorrente_dv_cartao

- **Valores:** 6
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label |
| ----- | ----- |
| 036   | 036   |
| 327   | 327   |
| 348   | 348   |
| 377   | 377   |
| 433   | 433   |
| 721   | 721   |

#### credit_card_recorrente_token

- **Valores:** 6
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label |
| ----- | ----- |
| 1190  | 1190  |
| 1429  | 1429  |
| 1660  | 1660  |
| 2064  | 2064  |
| 771   | 771   |
| 868   | 868   |

#### data_assinatura

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### data_cadastro_sistema

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### data_desistencia

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### data_final_suspensao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### data_negativacao

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |
| 2022-01-10 | 2022 01 10 |

#### data_retomada_contrato

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

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

#### desconto_fidelidade

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

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

#### dt_ult_bloq_manual

- **Valores:** 7
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |
| 2022-01-05 | 2022 01 05 |
| 2022-03-18 | 2022 03 18 |
| 2022-05-03 | 2022 05 03 |
| 2022-06-28 | 2022 06 28 |
| 2025-10-03 | 2025 10 03 |
| 2026-01-05 | 2026 01 05 |

#### dt_ult_desbloq_auto

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### dt_ult_desbloq_manual

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### dt_ult_desiste

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### dt_ult_liberacao_susp_parc

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### dt_utl_negativacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

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

#### id_carteira_cobranca

- **Valores:** 9
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label     |
| ----- | --------- |
| 1     | Ativo     |
| 11    | Código 11 |
| 14    | Código 14 |
| 2     | Código 2  |
| 3     | Código 3  |
| 4     | Código 4  |
| 5     | Código 5  |
| 6     | Código 6  |
| 9     | Código 9  |

#### id_cond_pag_ativ

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_condominio

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_contrato_principal

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_indexador_reajuste

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_instalador

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### id_motivo_negativacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_produto_ativ

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_responsavel

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_responsavel_cancelamento

- **Valores:** 12
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 108   | 108       |
| 109   | 109       |
| 11    | Código 11 |
| 110   | 110       |
| 146   | 146       |
| 18    | Código 18 |
| 52    | Código 52 |
| 68    | Código 68 |
| 80    | Código 80 |
| 89    | Código 89 |
| 96    | Código 96 |

#### id_responsavel_desistencia

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_responsavel_negativacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_tipo_contrato

- **Valores:** 15
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 1     | Ativo     |
| 10    | Código 10 |
| 12    | Código 12 |
| 15    | Código 15 |
| 2     | Código 2  |
| 20    | Código 20 |
| 25    | Código 25 |
| 30    | Código 30 |
| 32    | Código 32 |
| 35    | Código 35 |
| 37    | Código 37 |
| 38    | Código 38 |
| 40    | Código 40 |
| 5     | Código 5  |
| 8     | Código 8  |

#### id_tipo_doc_ativ

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_tipo_documento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 501   | 501   |

#### id_vendedor_ativ

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### ids_contratos_recorrencia

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1898  | 1898  |
| 2896  | 2896  |

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

#### imp_final

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### imp_importacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_inicial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

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

#### indicacao_contrato_id

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### motivo_adicional

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### motivo_cancelamento

- **Valores:** 14
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 1     | Ativo     |
| 12    | Código 12 |
| 15    | Código 15 |
| 17    | Código 17 |
| 18    | Código 18 |
| 2     | Código 2  |
| 20    | Código 20 |
| 23    | Código 23 |
| 28    | Código 28 |
| 3     | Código 3  |
| 6     | Código 6  |
| 7     | Código 7  |
| 8     | Código 8  |

#### motivo_desistencia

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### num_parcelas_atraso

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### taxa_improdutiva

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.000 | 0.000 |

#### taxa_instalacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### tempo_permanencia

- **Valores:** 14
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label |
| ----- | ----- |
| 0.0   | 0.0   |
| 45.7  | 45.7  |
| 58.1  | 58.1  |
| 60.2  | 60.2  |
| 73.7  | 73.7  |
| 74.5  | 74.5  |
| 77.0  | 77.0  |
| 78.0  | 78.0  |
| 79.9  | 79.9  |
| 86.6  | 86.6  |
| 88.1  | 88.1  |
| 88.4  | 88.4  |
| 90.1  | 90.1  |
| 96.3  | 96.3  |

#### testemunha_assinatura_digital

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### tipo_doc_opc

- **Valores:** 7
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 512   | 512     |
| 622   | 622     |
| 623   | 623     |
| 624   | 624     |
| 632   | 632     |
| 633   | 633     |

#### tipo_doc_opc2

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 900   | 900     |

#### tipo_doc_opc3

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 13    | Código 13 |

#### tipo_doc_opc4

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 512   | 512     |

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
| cancelamento_id_operador         | 1             | ✅ Aprovado | 70                                                    |
| data_cancelamento                | 1             | ✅ Aprovado | 2026-03-02                                            |
| data_final                       | 1             | ✅ Aprovado | 0000-00-00                                            |
| data_inicial                     | 1             | ✅ Aprovado | 0000-00-00                                            |
| duplicata                        | 2             | ✅ Aprovado | 371, 8953                                             |
| em_processamento                 | 1             | ✅ Aprovado | N                                                     |
| enviado_remessa_baixa            | 1             | ✅ Aprovado | N                                                     |
| estornado                        | 1             | ✅ Aprovado | N                                                     |
| filial_id                        | 1             | ✅ Aprovado | 1                                                     |
| id_assinatura_cliente            | 1             | ✅ Aprovado | 0                                                     |
| id_carteira_cobranca             | 3             | ✅ Aprovado | 0, 4, 5                                               |
| id_cobranca                      | 1             | ✅ Aprovado | 3601                                                  |
| id_conta                         | 2             | ✅ Aprovado | 0, 174                                                |
| id_contrato                      | 1             | ✅ Aprovado | 0                                                     |
| id_mot_cancelamento              | 1             | ✅ Aprovado | 1                                                     |
| id_nota_gerada                   | 1             | ✅ Aprovado | 0                                                     |
| id_remessa                       | 2             | ✅ Aprovado | 0, 2                                                  |
| id_saida                         | 1             | ✅ Aprovado | -25                                                   |
| impresso                         | 2             | ✅ Aprovado | N, S                                                  |
| libera_periodo                   | 1             | ✅ Aprovado | N                                                     |
| liberado                         | 1             | ✅ Aprovado | S                                                     |
| linha_digitavel                  | 3             | ✅ Aprovado | 75691325120101258900600001060011769430000008999, 7... |
| lote                             | 2             | ✅ Aprovado | -3, 1                                                 |
| nparcela                         | 1             | ✅ Aprovado | 0                                                     |
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
| valor_aberto                     | 1             | ✅ Aprovado | 0.00                                                  |
| valor_cancelado                  | 2             | ✅ Aprovado | 0.00, 99.90                                           |
| valor_juros_multa                | 1             | ✅ Aprovado | 0.00                                                  |
| valor_total_com_juros            | 1             | ✅ Aprovado | 0.00                                                  |

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

#### cancelamento_id_operador

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 70    | Código 70 |

#### data_cancelamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 2026-03-02 | 2026 03 02 |

#### data_final

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### data_inicial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

#### duplicata

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 371   | 371   |
| 8953  | 8953  |

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

#### id_assinatura_cliente

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_carteira_cobranca

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 4     | Código 4 |
| 5     | Código 5 |

#### id_cobranca

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 3601  | 3601  |

#### id_conta

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 174   | 174     |

#### id_contrato

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_mot_cancelamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_nota_gerada

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### linha_digitavel

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor                                           | Label                                           |
| ----------------------------------------------- | ----------------------------------------------- |
| 75691325120101258900600001060011769430000008999 | 75691325120101258900600001060011769430000008999 |
| 75691325120101258900600001380013870350000008999 | 75691325120101258900600001380013870350000008999 |
| 75691325120101258900604054050010772470000009990 | 75691325120101258900604054050010772470000009990 |

#### lote

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| -3    | 3     |
| 1     | Ativo |

#### nparcela

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### valor_aberto

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### valor_cancelado

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |
| 99.90 | 99.90 |

#### valor_juros_multa

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### valor_total_com_juros

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

---

---

## Collection: linha_mvno

| Campo                         | Cardinalidade | Status      | Valores                                               |
| ----------------------------- | ------------- | ----------- | ----------------------------------------------------- |
| api                           | 2             | ✅ Aprovado | A, I                                                  |
| data_agendamento              | 1             | ✅ Aprovado | 0000-00-00                                            |
| ddd_telefone                  | 6             | ⚠️ Revisar  | 24, 41, 44, 47, 48, 49                                |
| dia_recorrencia               | 7             | ⚠️ Revisar  | 0, 1, 10, 15, 20, 25, 5                               |
| esim                          | 2             | ✅ Aprovado | N, S                                                  |
| id_assinatura_cliente         | 1             | ✅ Aprovado | 0                                                     |
| id_assinatura_cliente_produto | 1             | ✅ Aprovado | 0                                                     |
| id_integracao                 | 2             | ✅ Aprovado | 1, 2                                                  |
| id_prod_ixc_mvno              | 16            | ❓ Avaliar  | 0, 1, 10, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6, 7, 8,... |
| link_esim                     | 13            | ❓ Avaliar  | LPA:1$datorabrazil.validspereachdpplus.com$3NY4OAF... |
| portabilidade                 | 2             | ✅ Aprovado | N, S                                                  |

### Detalhes

#### api

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| A     | Ativo   |
| I     | Inativo |

#### data_agendamento

- **Valores:** 1
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| 0000-00-00 | 0000 00 00 |

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

#### id_assinatura_cliente

- **Valores:** 1
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_assinatura_cliente_produto

- **Valores:** 1
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_integracao

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 2     | Código 2 |

#### id_prod_ixc_mvno

- **Valores:** 16
- **Total Registros:** 372
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 1     | Ativo     |
| 10    | Código 10 |
| 11    | Código 11 |
| 12    | Código 12 |
| 13    | Código 13 |
| 14    | Código 14 |
| 15    | Código 15 |
| 2     | Código 2  |
| 3     | Código 3  |
| 4     | Código 4  |
| 5     | Código 5  |
| 6     | Código 6  |
| 7     | Código 7  |
| 8     | Código 8  |
| 9     | Código 9  |

#### link_esim

- **Valores:** 13
- **Total Registros:** 372
- **Status:** ❓ Avaliar

| Valor                                                                                                       | Label                                                                                                       |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| LPA:1$datorabrazil.validspereachdpplus.com$3NY4OAFYJPAN1XDQB8RZYHGUJU3B3674OAY5RHIWP8Q6UYZ0BD7LMEJ8S50JEDF9 | Lpa:1$datorabrazil.validspereachdpplus.com$3ny4oafyjpan1xdqb8rzyhguju3b3674oay5rhiwp8q6uyz0bd7lmej8s50jedf9 |
| LPA:1$datorabrazil.validspereachdpplus.com$7P-LNKBHJXKN1R7SQ-ECQ1O6ANOP0-7H5AVL8UMRG2KV7O9TTQTRVHRMJ5RO3I37 | Lpa:1$datorabrazil.validspereachdpplus.com$7p Lnkbhjxkn1r7sq Ecq1o6anop0 7h5avl8umrg2kv7o9ttqtrvhrmj5ro3i37 |
| LPA:1$datorabrazil.validspereachdpplus.com$7PPUEWGT1ZUQCSRETKK5Z4BUX716KRWGK1GNKVZJ5P86ZJUO0CW49O6AWR8EPFGK | Lpa:1$datorabrazil.validspereachdpplus.com$7ppuewgt1zuqcsretkk5z4bux716krwgk1gnkvzj5p86zjuo0cw49o6awr8epfgk |
| LPA:1$datorabrazil.validspereachdpplus.com$EW5EFATMW1AN2A-C-IA37ZOK0Z5ZTP2H6-OP4Y2-O9SCVI0I8TP88CI8HIL65SGL | Lpa:1$datorabrazil.validspereachdpplus.com$ew5efatmw1an2a C Ia37zok0z5ztp2h6 Op4y2 O9scvi0i8tp88ci8hil65sgl |
| LPA:1$datorabrazil.validspereachdpplus.com$G2J1GC9PS1VSV47EVJCR8A75SA4SM7JZ0LCMC-J0G7N03OJVRM34R-HYOF8MFU1H | Lpa:1$datorabrazil.validspereachdpplus.com$g2j1gc9ps1vsv47evjcr8a75sa4sm7jz0lcmc J0g7n03ojvrm34r Hyof8mfu1h |
| LPA:1$datorabrazil.validspereachdpplus.com$HGO-WGGQJYSOE567HOTPGSQVA1WV9M5UH8J05OOVK5FMQKU6N7OYNJ-5URMB91PN | Lpa:1$datorabrazil.validspereachdpplus.com$hgo Wggqjysoe567hotpgsqva1wv9m5uh8j05oovk5fmqku6n7oynj 5urmb91pn |
| LPA:1$datorabrazil.validspereachdpplus.com$JLIGIE6DVEEO57VIBIFN7ZA7QPRF9BR-Y9EEWCHWT8WY88--US9Z9P9A1ZOM9N3N | Lpa:1$datorabrazil.validspereachdpplus.com$jligie6dveeo57vibifn7za7qprf9br Y9eewchwt8wy88 Us9z9p9a1zom9n3n  |
| LPA:1$datorabrazil.validspereachdpplus.com$KC727TERUN7WT5HY6CMRE8Q5TOIBOC8F-7337B938OZ0RBVQON6L94IIL1MQB7WW | Lpa:1$datorabrazil.validspereachdpplus.com$kc727terun7wt5hy6cmre8q5toiboc8f 7337b938oz0rbvqon6l94iil1mqb7ww |
| LPA:1$datorabrazil.validspereachdpplus.com$M4JNNW2O2V2DYQ0FI-9P2MRI8JBQ4RLM8KJ316DKSKL31JV5NZXTLNR-4IOV6TSP | Lpa:1$datorabrazil.validspereachdpplus.com$m4jnnw2o2v2dyq0fi 9p2mri8jbq4rlm8kj316dkskl31jv5nzxtlnr 4iov6tsp |
| LPA:1$datorabrazil.validspereachdpplus.com$MFQSPY3S79FSSVWT2IGXB8DR6JUXYWFQIIGKZQR2SUE3VXQD35M81FA3C35AY69Z | Lpa:1$datorabrazil.validspereachdpplus.com$mfqspy3s79fssvwt2igxb8dr6juxywfqiigkzqr2sue3vxqd35m81fa3c35ay69z |
| LPA:1$datorabrazil.validspereachdpplus.com$QF8-VBCYMMMI6HFN0F9QBPCWXU1BM8OE3TS40GDXFB6ICIYUTCGCQ2TWW3YOZQM5 | Lpa:1$datorabrazil.validspereachdpplus.com$qf8 Vbcymmmi6hfn0f9qbpcwxu1bm8oe3ts40gdxfb6iciyutcgcq2tww3yozqm5 |
| LPA:1$datorabrazil.validspereachdpplus.com$UT5UOXE6DHEBJGZ5P2ZNAZY9IFGX-7C89FGKMRX26UZCPZ0RIMGW2UE01OZ-UYTL | Lpa:1$datorabrazil.validspereachdpplus.com$ut5uoxe6dhebjgz5p2znazy9ifgx 7c89fgkmrx26uzcpz0rimgw2ue01oz UYTL |
| LPA:1$datorabrazil.validspereachdpplus.com$V7ZB7FK2QSVGY7HI8SK-KS851NVIH7EX8QJMMWAYLF9U61TZ25B0G3JMQAK7WST3 | Lpa:1$datorabrazil.validspereachdpplus.com$v7zb7fk2qsvgy7hi8sk Ks851nvih7ex8qjmmwaylf9u61tz25b0g3jmqak7wst3 |

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

| Campo                     | Cardinalidade | Status      | Valores                                               |
| ------------------------- | ------------- | ----------- | ----------------------------------------------------- |
| id_canal_atendimento      | 1             | ✅ Aprovado | 0                                                     |
| id_circuito               | 1             | ✅ Aprovado | 0                                                     |
| id_evento_status_processo | 1             | ✅ Aprovado | 0                                                     |
| id_filial                 | 1             | ✅ Aprovado | 1                                                     |
| id_responsavel_tecnico    | 11            | ❓ Avaliar  | 0, 1, 10, 14, 20, 3, 34, 35, 4, 52, 7                 |
| id_resposta               | 1             | ✅ Aprovado | 0                                                     |
| id_su_diagnostico         | 4             | ✅ Aprovado | 0, 1, 10, 13                                          |
| id_ticket_origem          | 2             | ✅ Aprovado | H, I                                                  |
| id_ticket_setor           | 7             | ⚠️ Revisar  | 1, 2, 3, 4, 5, 7, 8                                   |
| id_usuarios               | 19            | ❓ Avaliar  | 0, 1, 10, 11, 12, 18, 19, 20, 28, 29, 3, 31, 33, 3... |
| id_wfl_processo           | 12            | ❓ Avaliar  | 0, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9                 |
| interacao_pendente        | 4             | ✅ Aprovado | A, E, I, N                                            |
| melhor_horario_agenda     | 1             | ✅ Aprovado | Q                                                     |
| melhor_horario_reserva    | 3             | ✅ Aprovado | M, Q, T                                               |
| mensagens_nao_lida_cli    | 10            | ⚠️ Revisar  | 0, 1, 2, 3, 4, 5, 6, 7, 8, 9                          |
| mensagens_nao_lida_sup    | 2             | ✅ Aprovado | 0, 1                                                  |
| origem_cadastro           | 1             | ✅ Aprovado | P                                                     |
| origem_endereco           | 4             | ✅ Aprovado | C, CC, L, M                                           |
| prioridade                | 3             | ✅ Aprovado | A, C, M                                               |
| status                    | 3             | ✅ Aprovado | C, F, OSAG                                            |
| su_status                 | 1             | ✅ Aprovado | S                                                     |
| tipo                      | 1             | ✅ Aprovado | C                                                     |

### Detalhes

#### id_canal_atendimento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_circuito

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_evento_status_processo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_responsavel_tecnico

- **Valores:** 11
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 1     | Ativo     |
| 10    | Código 10 |
| 14    | Código 14 |
| 20    | Código 20 |
| 3     | Código 3  |
| 34    | Código 34 |
| 35    | Código 35 |
| 4     | Código 4  |
| 52    | Código 52 |
| 7     | Código 7  |

#### id_resposta

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### id_usuarios

- **Valores:** 19
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 1     | Ativo     |
| 10    | Código 10 |
| 11    | Código 11 |
| 12    | Código 12 |
| 18    | Código 18 |
| 19    | Código 19 |
| 20    | Código 20 |
| 28    | Código 28 |
| 29    | Código 29 |
| 3     | Código 3  |
| 31    | Código 31 |
| 33    | Código 33 |
| 34    | Código 34 |
| 39    | Código 39 |
| 4     | Código 4  |
| 5     | Código 5  |
| 6     | Código 6  |
| 7     | Código 7  |

#### id_wfl_processo

- **Valores:** 12
- **Total Registros:** 1000
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 0     | Inativo   |
| 11    | Código 11 |
| 12    | Código 12 |
| 13    | Código 13 |
| 2     | Código 2  |
| 3     | Código 3  |
| 4     | Código 4  |
| 5     | Código 5  |
| 6     | Código 6  |
| 7     | Código 7  |
| 8     | Código 8  |
| 9     | Código 9  |

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

#### mensagens_nao_lida_cli

- **Valores:** 10
- **Total Registros:** 1000
- **Status:** ⚠️ Revisar

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 1     | Ativo    |
| 2     | Código 2 |
| 3     | Código 3 |
| 4     | Código 4 |
| 5     | Código 5 |
| 6     | Código 6 |
| 7     | Código 7 |
| 8     | Código 8 |
| 9     | Código 9 |

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

| Campo                            | Cardinalidade | Status      | Valores       |
| -------------------------------- | ------------- | ----------- | ------------- |
| desconto_percentual              | 1             | ✅ Aprovado | 0.00          |
| descricao_plano_valor_1          | 1             | ✅ Aprovado | 0.00          |
| descricao_plano_valor_2          | 1             | ✅ Aprovado | 0.00          |
| fixar_ip                         | 1             | ✅ Aprovado | 0             |
| id_contrato_produto_plano        | 1             | ✅ Aprovado | 0             |
| id_tipo_documento                | 1             | ✅ Aprovado | 0             |
| qtde                             | 2             | ✅ Aprovado | 1, 3          |
| qtde_repeticoes_desconto_produto | 1             | ✅ Aprovado | 0             |
| repetir                          | 1             | ✅ Aprovado | V             |
| tipo                             | 4             | ✅ Aprovado | I, S, SVA, TV |
| tipo_desconto                    | 1             | ✅ Aprovado | V             |
| valor_ate_vencimento             | 1             | ✅ Aprovado | 0.00          |
| valor_desconto_produto           | 1             | ✅ Aprovado | 0.00          |

### Detalhes

#### desconto_percentual

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### descricao_plano_valor_1

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### descricao_plano_valor_2

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### fixar_ip

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_contrato_produto_plano

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### id_tipo_documento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

#### qtde

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 3     | Código 3 |

#### qtde_repeticoes_desconto_produto

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |

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

#### valor_ate_vencimento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

#### valor_desconto_produto

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 0.00  | 0.00  |

---

---
