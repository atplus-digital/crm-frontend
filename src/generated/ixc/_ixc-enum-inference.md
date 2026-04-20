# Relatório de Inferência de Enums - IXC

> **Data:** 2026-04-20
> **Collections analisadas:** 6

---

## Resumo por Collection

| Collection            | Campos Enum | Status |
| --------------------- | ----------- | ------ |
| cliente               | 76          | ✅     |
| cliente_contrato      | 73          | ✅     |
| fn_areceber           | 43          | ✅     |
| linha_mvno            | 11          | ✅     |
| su_ticket             | 21          | ✅     |
| vd_contratos_produtos | 8           | ✅     |

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
| acesso_automatico_central     | 2             | ✅ Aprovado | S, N                                                  |
| alterar_senha_primeiro_acesso | 2             | ✅ Aprovado | N, P                                                  |
| antigo_acesso_central         | 1             | ✅ Aprovado | N                                                     |
| ativo                         | 14            | ❓ Avaliar  | 01, 02, 03, 04, 05, 06, 07, 08, 99, 0-13, 0-15, 0-... |
| atualizar_cadastro_galaxPay   | 2             | ✅ Aprovado | N, S                                                  |
| aviso_atraso                  | 1             | ✅ Aprovado | S                                                     |
| bairro_cob                    | 3             | ✅ Aprovado | Conta Dinheiro, Guarujá, Vila Nova                    |
| cadastrado_no_galaxPay        | 2             | ✅ Aprovado | N, S                                                  |
| cep_cob                       | 3             | ✅ Aprovado | 88503-210, 88520-100, 88521-020                       |
| cli_desconta_iss_retido_total | 1             | ✅ Aprovado | N                                                     |
| cnpj_cpf                      | 4             | ✅ Aprovado | S, N, I, E                                            |
| cnpj_cpf_titular_conta        | 3             | ✅ Aprovado | S, N, P                                               |
| cob_envia_email               | 1             | ✅ Aprovado | S                                                     |
| cob_envia_sms                 | 1             | ✅ Aprovado | S                                                     |
| cofins_retem                  | 1             | ✅ Aprovado | N                                                     |
| complemento_cob               | 1             | ✅ Aprovado | CASA                                                  |
| cond_pagamento                | 2             | ✅ Aprovado | 0, 1                                                  |
| contribuinte_icms             | 3             | ✅ Aprovado | I, N, S                                               |
| convert_cliente_forn          | 5             | ✅ Aprovado | 1, 2, 3, 4, 5                                         |
| crm                           | 1             | ✅ Aprovado | N                                                     |
| csll_retem                    | 2             | ✅ Aprovado | S, N                                                  |
| data_cadastro                 | 2             | ✅ Aprovado | S, N                                                  |
| data_hash_redefinir_senha     | 4             | ✅ Aprovado | 2022-02-13 21:09:39, 2022-04-30 18:40:27, 2022-06-... |
| deb_conta                     | 2             | ✅ Aprovado | F, J                                                  |
| desconto_irrf_valor_inferior  | 2             | ✅ Aprovado | N, S                                                  |
| emp_remuneracao               | 5             | ✅ Aprovado | 00, 01, 02, 03, 99                                    |
| endereco_cob                  | 3             | ✅ Aprovado | Avenida Segundo Batalhão Rodoviário, Rua João da S... |
| estado_civil                  | 3             | ✅ Aprovado | Casado, Divorciado, Solteiro                          |
| estado_nascimento             | 5             | ✅ Aprovado | F, M, NB, O, PNI                                      |
| filial_id                     | 1             | ✅ Aprovado | 1                                                     |
| filtra_filial                 | 1             | ✅ Aprovado | S                                                     |
| grau_satisfacao               | 3             | ✅ Aprovado | 3, 4, 5                                               |
| hash_redefinir_senha          | 3             | ✅ Aprovado | 2cddcfdf3e2b1292698984122b758245, b66fbb2dd0c2ff76... |
| hotsite_acesso                | 2             | ✅ Aprovado | 0, 2                                                  |
| hotsite_email                 | 3             | ✅ Aprovado | S, N, P                                               |
| id                            | 2             | ✅ Aprovado | S, N                                                  |
| id_tipo_cliente               | 2             | ✅ Aprovado | 0, 2                                                  |
| idx                           | 2             | ✅ Aprovado | 1, 2                                                  |
| indicado_por                  | 9             | ⚠️ Revisar  | C, S, A, N, V, P, AB, SV, SP                          |
| inscricao_municipal           | 6             | ⚠️ Revisar  | 1, 2, 3, 4, 5, 6                                      |
| inss_retem                    | 1             | ✅ Aprovado | N                                                     |
| irrf_retem                    | 1             | ✅ Aprovado | N                                                     |
| moradia                       | 2             | ✅ Aprovado | A, P                                                  |
| nacionalidade                 | 1             | ✅ Aprovado | Brasileiro                                            |
| nome_contador                 | 2             | ✅ Aprovado | S, N                                                  |
| nome_social                   | 27            | ❓ Avaliar  | 11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, NUIT, ... |
| num_dias_cob                  | 2             | ✅ Aprovado | S, N                                                  |
| orgao_publico                 | 1             | ✅ Aprovado | N                                                     |
| pais                          | 2             | ✅ Aprovado | 48, 49                                                |
| participa_cobranca            | 2             | ✅ Aprovado | S, N                                                  |
| participa_pre_cobranca        | 2             | ✅ Aprovado | S, N                                                  |
| permite_armazenar_cartoes     | 1             | ✅ Aprovado | N                                                     |
| pis_retem                     | 1             | ✅ Aprovado | N                                                     |
| primeiro_acesso_central       | 2             | ✅ Aprovado | N, S                                                  |
| rede_ativacao                 | 1             | ✅ Aprovado | P                                                     |
| referencia                    | 2             | ✅ Aprovado | R, U                                                  |
| regua_cobranca_considera      | 2             | ✅ Aprovado | S, N                                                  |
| regua_cobranca_notificacao    | 1             | ✅ Aprovado | S                                                     |
| regua_cobranca_wpp            | 1             | ✅ Aprovado | S                                                     |
| responsavel                   | 2             | ✅ Aprovado | S, N                                                  |
| rg_orgao_emissor              | 3             | ✅ Aprovado | DICRJ, SsP, SSP                                       |
| senha                         | 3             | ✅ Aprovado | S, N, P                                               |
| senha_hotsite_md5             | 2             | ✅ Aprovado | S, N                                                  |
| Sexo                          | 4             | ✅ Aprovado | Casado, Solteiro, Divorciado, ViÃºvo                  |
| status_internet               | 1             | ✅ Aprovado | N                                                     |
| status_prospeccao             | 1             | ✅ Aprovado | C                                                     |
| tipo_assinante                | 2             | ✅ Aprovado | S, N                                                  |
| tipo_cliente_scm              | 4             | ✅ Aprovado | 1, 2, 3, 4                                            |
| tipo_documento_identificacao  | 1             | ✅ Aprovado | 13                                                    |
| tipo_ente_governamental       | 6             | ⚠️ Revisar  | F, J, E, 1, 2, 3                                      |
| tipo_localidade               | 1             | ✅ Aprovado | U                                                     |
| tipo_pessoa                   | 2             | ✅ Aprovado | F, J                                                  |
| tipo_pessoa_titular_conta     | 1             | ✅ Aprovado | F                                                     |
| uf                            | 2             | ✅ Aprovado | P, A                                                  |
| uf_cob                        | 2             | ✅ Aprovado | 0, 2                                                  |
| ultima_atualizacao            | 2             | ✅ Aprovado | S, N                                                  |

### Detalhes

#### acesso_automatico_central

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

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

- **Valores:** 14
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor   | Label                                                                                                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01      | 01 - Comercial                                                                                                                                                                                           |
| 02      | 02 - Industrial                                                                                                                                                                                          |
| 03      | 03 - Residencial/Pessoa Física                                                                                                                                                                           |
| 04      | 04 - Produtor Rural                                                                                                                                                                                      |
| 05      | 05 - Órgão da administração pública estadual direta e suas fundações e autarquias, quando mantidas pelo poder público estadual e regidas por normas de direito público, termos do Convênio ICMS 107/95   |
| 06      | 06 - Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto incidente sobre a cessão dos meios de rede do prestador do serviço ao usuário final, termos do Convênio ICMS 17/13 |
| 07      | 07 - Missões Diplomáticas, Repartições Consulares e Organismos Internacionais, nos termos do Convênio ICMS 158/94                                                                                        |
| 08      | 08 - Igrejas e Templos de qualquer natureza                                                                                                                                                              |
| 99      | 99 - Outros não especificados anteriormente                                                                                                                                                              |
| 0-13    | 0-13 - Grande contribuinte                                                                                                                                                                               |
| 0-15    | 0-15 - Auto retentor                                                                                                                                                                                     |
| 0-23    | 0-23 - Agente de retenção IVA                                                                                                                                                                            |
| 0-47    | 0-47 - Regime simples de tributação                                                                                                                                                                      |
| R-99-PN | R-99-PN - Não aplica - Outros                                                                                                                                                                            |

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

#### cnpj_cpf

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| S     | Sim      |
| N     | Não      |
| I     | Isento   |
| E     | Excluido |

#### cnpj_cpf_titular_conta

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

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

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label                    |
| ----- | ------------------------ |
| 1     | Nada satisfeito          |
| 2     | Pouco satisfeito         |
| 3     | Satisfeito               |
| 4     | Muito satisfeito         |
| 5     | Completamente satisfeito |

#### crm

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### csll_retem

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### data_cadastro

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
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

#### deb_conta

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| F     | Física   |
| J     | Jurídica |

#### desconto_irrf_valor_inferior

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### emp_remuneracao

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label           |
| ----- | --------------- |
| 00    | 00 - Normal     |
| 01    | 01 - Retido     |
| 02    | 02 - Substituta |
| 03    | 03 - Isento     |
| 99    | 99 - Padrão     |

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

#### estado_nascimento

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label             |
| ----- | ----------------- |
| F     | Feminino          |
| M     | Masculino         |
| NB    | Não binário       |
| O     | Outro             |
| PNI   | Prefiro não dizer |

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

#### hotsite_email

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### id

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### id_tipo_cliente

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### idx

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Sim   |
| 2     | Não   |

#### indicado_por

- **Valores:** 9
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label                |
| ----- | -------------------- |
| C     | Novo                 |
| S     | Sondagem             |
| A     | Apresentando         |
| N     | Negociando           |
| V     | Vencemos             |
| P     | Perdemos             |
| AB    | Abortamos            |
| SV    | Sem viabilidade      |
| SP    | Sem porta disponível |

#### inscricao_municipal

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label                     |
| ----- | ------------------------- |
| 1     | Comercial/Industrial      |
| 2     | Poder Público             |
| 3     | Residencial/Pessoa física |
| 4     | Público                   |
| 5     | Semi-Público              |
| 6     | Outros                    |

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

#### nome_contador

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### nome_social

- **Valores:** 27
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor  | Label                                                  |
| ------ | ------------------------------------------------------ |
| 11     | Registro civil                                         |
| 12     | Tarjeta de identidad                                   |
| 13     | Cédula de ciudadanía                                   |
| 21     | Tarjeta de extranjería                                 |
| 22     | Cédula de extranjería                                  |
| 31     | NIT                                                    |
| 41     | Pasaporte                                              |
| 42     | Documento de identificación extranjero                 |
| 47     | PEP                                                    |
| 50     | NIT de otro país                                       |
| 91     | NUIP                                                   |
| NUIT   | NUIT                                                   |
| RUC    | Registro Único de Contribuyentes                       |
| CI     | Cédula de identidad                                    |
| 4      | Cartão de Residência                                   |
| 5      | Innominado                                             |
| 6      | Cartão de Isenção de Imposto Diplomático               |
| 9      | Outro                                                  |
| CUIT   | CUIT                                                   |
| CIBOL  | Carnet de Identidad                                    |
| RUT    | Rol Único Tributario                                   |
| TIN    | Tax Identification Number                              |
| RIF    | Registro de Información Fiscal (RIF)                   |
| DNI    | Documento Nacional de Indentidad                       |
| NIR    | Número de sécurité sociale                             |
| SIREN  | Système d'Identification du Répertoire des Entreprises |
| RUTURU | Registro Único de Tributario                           |

#### num_dias_cob

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### orgao_publico

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### pais

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label                 |
| ----- | --------------------- |
| 48    | Responsable de IVA    |
| 49    | No responsable de IVA |

#### participa_cobranca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### participa_pre_cobranca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

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

#### referencia

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label       |
| ----- | ----------- |
| R     | Zona rural  |
| U     | Zona urbana |

#### regua_cobranca_considera

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

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

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### rg_orgao_emissor

- **Valores:** 3
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| DICRJ | Dicrj |
| SsP   | Ssp   |
| SSP   | SSP   |

#### senha

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### senha_hotsite_md5

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### Sexo

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor      | Label      |
| ---------- | ---------- |
| Casado     | Casado     |
| Solteiro   | Solteiro   |
| Divorciado | Divorciado |
| ViÃºvo     | Viúvo      |

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
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### tipo_cliente_scm

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label            |
| ----- | ---------------- |
| 1     | União            |
| 2     | Estado           |
| 3     | Distrito Federal |
| 4     | Município        |

#### tipo_documento_identificacao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| 13    | Código 13 |

#### tipo_ente_governamental

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label       |
| ----- | ----------- |
| F     | Física      |
| J     | Jurídica    |
| E     | Estrangeiro |
| 1     | Juridica    |
| 2     | Natural     |
| 3     | Estrangeiro |

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

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| P     | Própria |
| A     | Alugada |

#### uf_cob

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### ultima_atualizacao

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

---

---

## Collection: cliente_contrato

| Campo                                  | Cardinalidade | Status      | Valores                                               |
| -------------------------------------- | ------------- | ----------- | ----------------------------------------------------- |
| agrupar_financeiro_contrato            | 1             | ✅ Aprovado | P                                                     |
| alerta_contrato                        | 3             | ✅ Aprovado | cliente vai pagar                                     |
| mais um dos valores ate 29/02...       |
| aplica_desconto_tempo_bloqueio         | 1             | ✅ Aprovado | S                                                     |
| aplicar_desconto_tempo_bloqueio        | 3             | ✅ Aprovado | PIX, CREDIT, N                                        |
| assinatura_digital                     | 3             | ✅ Aprovado | S, N, P                                               |
| ativo_summit                           | 1             | ✅ Aprovado | N                                                     |
| aviso_atraso                           | 3             | ✅ Aprovado | S, N, P                                               |
| base_geracao_tipo_doc                  | 1             | ✅ Aprovado | P                                                     |
| bloqueio_automatico                    | 2             | ✅ Aprovado | S, N                                                  |
| cc_previsao                            | 1             | ✅ Aprovado | P                                                     |
| com_entrada                            | 2             | ✅ Aprovado | S, N                                                  |
| comissao                               | 3             | ✅ Aprovado | P, I, E                                               |
| contato_assinatura_digital             | 3             | ✅ Aprovado | S, N, P                                               |
| contrato_suspenso                      | 1             | ✅ Aprovado | N                                                     |
| credit_card_recorrente_bandeira_cartao | 3             | ✅ Aprovado | mastercard, MasterCard, Visa                          |
| credit_card_recorrente_carteira_antiga | 2             | ✅ Aprovado | 1, 5                                                  |
| credit_card_recorrente_token           | 5             | ✅ Aprovado | AGUARDANDO_APROVACAO, APROVADA, REJEITADA, EXPIRAD... |
| data_renovacao                         | 5             | ✅ Aprovado | P, A, I, N, D                                         |
| desbloqueio_confianca                  | 2             | ✅ Aprovado | S, N                                                  |
| desbloqueio_confianca_ativo            | 2             | ✅ Aprovado | N, S                                                  |
| descricao_aux_plano_venda              | 1             | ✅ Aprovado | PERMUTA                                               |
| document_photo                         | 1             | ✅ Aprovado | P                                                     |
| email_assinatura_digital               | 3             | ✅ Aprovado | S, N, P                                               |
| endereco_padrao_cliente                | 2             | ✅ Aprovado | N, S                                                  |
| fidelidade                             | 2             | ✅ Aprovado | 12, 24                                                |
| financeiro_migrado                     | 1             | ✅ Aprovado | N                                                     |
| gerar_finan_assin_digital_contrato     | 3             | ✅ Aprovado | S, N, P                                               |
| id                                     | 6             | ⚠️ Revisar  | 1, 2, 3, 4, 5, 6                                      |
| id_contrato_principal                  | 3             | ✅ Aprovado | S, N, P                                               |
| id_filial                              | 1             | ✅ Aprovado | 1                                                     |
| id_modelo                              | 3             | ✅ Aprovado | S, N, P                                               |
| id_motivo_inclusao                     | 5             | ✅ Aprovado | 1, 2, 3, 5, 7                                         |
| id_tipo_contrato                       | 3             | ✅ Aprovado | S, N, P                                               |
| ids_contratos_recorrencia              | 3             | ✅ Aprovado | OPC, PROD, P                                          |
| imp_bkp                                | 1             | ✅ Aprovado | N                                                     |
| imp_carteira                           | 2             | ✅ Aprovado | S, N                                                  |
| imp_importacao                         | 2             | ✅ Aprovado | S, N                                                  |
| imp_inicial                            | 2             | ✅ Aprovado | S, N                                                  |
| imp_obs                                | 2             | ✅ Aprovado | F, A                                                  |
| imp_realizado                          | 2             | ✅ Aprovado | S, N                                                  |
| imp_rede                               | 1             | ✅ Aprovado | N                                                     |
| imp_treinamento                        | 2             | ✅ Aprovado | S, N                                                  |
| indicacao_contrato_id                  | 2             | ✅ Aprovado | S, N                                                  |
| integracao_assinatura_digital          | 2             | ✅ Aprovado | N, P                                                  |
| isentar_contrato                       | 2             | ✅ Aprovado | N, S                                                  |
| liberacao_bloqueio_manual              | 2             | ✅ Aprovado | P, S                                                  |
| liberacao_suspensao_parcial            | 2             | ✅ Aprovado | S, N                                                  |
| longitude                              | 2             | ✅ Aprovado | R, U                                                  |
| moeda                                  | 4             | ✅ Aprovado | P, N, S, M                                            |
| motivo_inclusao                        | 5             | ✅ Aprovado | D, I, N, T, U                                         |
| nao_avisar_ate                         | 2             | ✅ Aprovado | S, N                                                  |
| nao_susp_parc_ate                      | 2             | ✅ Aprovado | S, N                                                  |
| obs                                    | 3             | ✅ Aprovado | H, D, P                                               |
| obs_contrato                           | 2             | ✅ Aprovado | S, N                                                  |
| origem_cancelamento                    | 1             | ✅ Aprovado | M                                                     |
| pago_ate_data                          | 6             | ⚠️ Revisar  | A, D, CM, CA, FA, AA                                  |
| portabilidade_summit                   | 1             | ✅ Aprovado | N                                                     |
| renovacao_automatica                   | 3             | ✅ Aprovado | S, N, P                                               |
| restricao_auto_desbloqueio             | 2             | ✅ Aprovado | N, S                                                  |
| restricao_auto_libera_susp_parcial     | 2             | ✅ Aprovado | S, N                                                  |
| selfie_photo                           | 1             | ✅ Aprovado | P                                                     |
| situacao_financeira_contrato           | 1             | ✅ Aprovado | R                                                     |
| status                                 | 2             | ✅ Aprovado | N, R                                                  |
| status_internet                        | 5             | ✅ Aprovado | A, AA, CA, D, FA                                      |
| status_velocidade                      | 8             | ⚠️ Revisar  | I, U, D, M, T, L, N, R                                |
| tempo_permanencia                      | 2             | ✅ Aprovado | M, A                                                  |
| tipo                                   | 1             | ✅ Aprovado | I                                                     |
| tipo_cobranca                          | 2             | ✅ Aprovado | S, N                                                  |
| tipo_doc_opc3                          | 2             | ✅ Aprovado | 0, 13                                                 |
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

#### aplica_desconto_tempo_bloqueio

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### aplicar_desconto_tempo_bloqueio

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor  | Label                 |
| ------ | --------------------- |
| PIX    | Pix automático        |
| CREDIT | Cartão de crédito     |
| N      | Sem recorrência ativa |

#### assinatura_digital

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### ativo_summit

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### aviso_atraso

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| S     | Habilitado   |
| N     | Desabilitado |
| P     | Padrão       |

#### base_geracao_tipo_doc

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### bloqueio_automatico

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### cc_previsao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| P     | P     |

#### com_entrada

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### comissao

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label               |
| ----- | ------------------- |
| P     | Configuração padrão |
| I     | Impresso            |
| E     | E-mail              |

#### contato_assinatura_digital

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

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

#### credit_card_recorrente_token

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor                | Label                |
| -------------------- | -------------------- |
| AGUARDANDO_APROVACAO | Aguardando aprovação |
| APROVADA             | Aprovada             |
| REJEITADA            | Rejeitada            |
| EXPIRADA             | Expirada             |
| CANCELADA            | Cancelada            |

#### data_renovacao

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| P     | Pré-contrato |
| A     | Ativo        |
| I     | Inativo      |
| N     | Negativado   |
| D     | Desistiu     |

#### desbloqueio_confianca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

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

#### email_assinatura_digital

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

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

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### id

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label |
| ----- | ----- |
| 1     | 1     |
| 2     | 2     |
| 3     | 3     |
| 4     | 4     |
| 5     | 5     |
| 6     | 6     |

#### id_contrato_principal

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### id_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_modelo

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

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

#### id_tipo_contrato

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### ids_contratos_recorrencia

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label                            |
| ----- | -------------------------------- |
| OPC   | Documento opcional do contrato   |
| PROD  | Documento do produto do contrato |
| P     | Padrão                           |

#### imp_bkp

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_carteira

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| S     | Realizado    |
| N     | Em Andamento |

#### imp_importacao

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| S     | Realizada    |
| N     | Em Andamento |

#### imp_inicial

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| S     | Realizada    |
| N     | Em Andamento |

#### imp_obs

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| F     | Finalizada   |
| A     | Em Andamento |

#### imp_realizado

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| S     | Realizada    |
| N     | Em Andamento |

#### imp_rede

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### imp_treinamento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| S     | Realizado    |
| N     | Em Andamento |

#### indicacao_contrato_id

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
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

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### longitude

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label       |
| ----- | ----------- |
| R     | Zona Rural  |
| U     | Zona Urbana |

#### moeda

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label                            |
| ----- | -------------------------------- |
| P     | Configuração padrão (Parâmetros) |
| N     | Competência (Previsão não)       |
| S     | Caixa (Previsão sim)             |
| M     | Manual                           |

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

#### nao_avisar_ate

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### nao_susp_parc_ate

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### obs

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| H     | Habilitado   |
| D     | Desabilitado |
| P     | Padrão       |

#### obs_contrato

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### origem_cancelamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| M     | M     |

#### pago_ate_data

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label                 |
| ----- | --------------------- |
| A     | Ativo                 |
| D     | Desativado            |
| CM    | Bloqueio Manual       |
| CA    | Bloqueio Automático   |
| FA    | Financeiro em atraso  |
| AA    | Aguardando Assinatura |

#### portabilidade_summit

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### renovacao_automatica

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label  |
| ----- | ------ |
| S     | Sim    |
| N     | Não    |
| P     | Padrão |

#### restricao_auto_desbloqueio

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### restricao_auto_libera_susp_parcial

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
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

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| N     | Normal   |
| R     | Reduzida |

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

- **Valores:** 8
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label                   |
| ----- | ----------------------- |
| I     | Instalação              |
| U     | Upgrade                 |
| D     | Downgrade               |
| M     | Mudança de Endereço     |
| T     | Mudança de Tecnologia   |
| L     | Mudança de titularidade |
| N     | Negociação              |
| R     | Reativação              |

#### tempo_permanencia

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label      |
| ----- | ---------- |
| M     | Manual     |
| A     | Automático |

#### tipo

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| I     | Inativo |

#### tipo_cobranca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

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
| bandeira_pagamento               | 2             | ✅ Aprovado | S, N                                                  |
| caixa                            | 3             | ✅ Aprovado | 0, 13, 6                                              |
| data_cancelamento                | 2             | ✅ Aprovado | S, N                                                  |
| data_inicial                     | 4             | ✅ Aprovado | A, R, P, C                                            |
| data_vencimento                  | 3             | ✅ Aprovado | N, S, M                                               |
| em_processamento                 | 1             | ✅ Aprovado | N                                                     |
| enviado_remessa_baixa            | 1             | ✅ Aprovado | N                                                     |
| estornado                        | 1             | ✅ Aprovado | N                                                     |
| filial_id                        | 1             | ✅ Aprovado | 1                                                     |
| id_carteira_cobranca             | 3             | ✅ Aprovado | 0, 4, 5                                               |
| id_cobranca_regua                | 11            | ❓ Avaliar  | LP, CV, AC, IP, AP, CAP, NC, RCA, CCA, RCB, RN        |
| id_lote_cobranca_regua           | 2             | ✅ Aprovado | A, F                                                  |
| id_mot_cancelamento              | 1             | ✅ Aprovado | 1                                                     |
| id_nota_gerada                   | 2             | ✅ Aprovado | S, N                                                  |
| id_nota_gerada_opc3              | 2             | ✅ Aprovado | S, N                                                  |
| id_remessa                       | 2             | ✅ Aprovado | 0, 2                                                  |
| id_renegociacao                  | 2             | ✅ Aprovado | M, R                                                  |
| id_saida                         | 1             | ✅ Aprovado | -25                                                   |
| impresso                         | 2             | ✅ Aprovado | N, S                                                  |
| libera_periodo                   | 1             | ✅ Aprovado | N                                                     |
| liberado                         | 1             | ✅ Aprovado | S                                                     |
| linha_digitavel                  | 35            | ❓ Avaliar  | 08, 15, 16, 17, 03, 04, 05, 06, 07, 09, 10, 11, 12... |
| lote                             | 2             | ✅ Aprovado | -3, 1                                                 |
| nparcela                         | 3             | ✅ Aprovado | P, I, E                                               |
| origem_importacao                | 2             | ✅ Aprovado | S, N                                                  |
| parcela_proporcional             | 1             | ✅ Aprovado | N                                                     |
| parcelado_cartao                 | 2             | ✅ Aprovado | S, N                                                  |
| pix_txid                         | 2             | ✅ Aprovado | COM_VENCIMENTO, IMEDIATA                              |
| previsao                         | 1             | ✅ Aprovado | S                                                     |
| recebido_via_pix                 | 2             | ✅ Aprovado | S, N                                                  |
| status                           | 2             | ✅ Aprovado | C, R                                                  |
| status_cobranca                  | 2             | ✅ Aprovado | S, N                                                  |
| status_cobranca_regua            | 2             | ✅ Aprovado | S, N                                                  |
| tarifa_gateway_lancada           | 1             | ✅ Aprovado | N                                                     |
| tentativa_pix_recorrente         | 2             | ✅ Aprovado | S, N                                                  |
| tipo_cobranca                    | 2             | ✅ Aprovado | S, N                                                  |
| tipo_cobranca_pix                | 6             | ⚠️ Revisar  | CRIADA, ATIVA, CONCLUIDA, EXPIRADA, REJEITADA, CAN... |
| tipo_recebimento                 | 1             | ✅ Aprovado | Boleto                                                |
| titulo_importado                 | 2             | ✅ Aprovado | S, N                                                  |
| titulo_protestado                | 1             | ✅ Aprovado | N                                                     |
| ultima_atualizacao               | 4             | ✅ Aprovado | 2021-12-28T12:59:30.000Z, 2025-11-21T18:53:48.000Z... |
| valor                            | 11            | ❓ Avaliar  | Boleto, Cheque, CartÃ£o, Dinheiro, DepÃ³sito, Gate... |

### Detalhes

#### aguardando_confirmacao_pagamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### bandeira_pagamento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
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

#### data_cancelamento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### data_inicial

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| A     | A receber |
| R     | Recebido  |
| P     | Parcial   |
| C     | Cancelado |

#### data_vencimento

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label                      |
| ----- | -------------------------- |
| N     | Competência (Previsão NÃO) |
| S     | Caixa (Previsão SIM)       |
| M     | Manual                     |

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

#### id_cobranca_regua

- **Valores:** 11
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label                            |
| ----- | -------------------------------- |
| LP    | Lembrete de pagamento            |
| CV    | No vencimento                    |
| AC    | Aviso de cobrança                |
| IP    | Informativo de pendência         |
| AP    | Agendar pagamento                |
| CAP   | Cobrança automática e presencial |
| NC    | Negativar clientes               |
| RCA   | Recebimento de contas a receber  |
| CCA   | Cancelamento de contas a receber |
| RCB   | Renegociação de contas a receber |
| RN    | Remover negativações             |

#### id_lote_cobranca_regua

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label      |
| ----- | ---------- |
| A     | Aberta     |
| F     | Finalizada |

#### id_mot_cancelamento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_nota_gerada

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### id_nota_gerada_opc3

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### id_remessa

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 0     | Inativo  |
| 2     | Código 2 |

#### id_renegociacao

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label                    |
| ----- | ------------------------ |
| M     | Recebido de forma manual |
| R     | Recebido automaticamente |

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

- **Valores:** 35
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label                                                  |
| ----- | ------------------------------------------------------ |
| 08    | Cancelamento de Desconto                               |
| 15    | Dispensar Cobrança de Multa                            |
| 16    | Alteração do Valor de Desconto                         |
| 17    | Não conceder Desconto                                  |
| 03    | Protesto para Fins Falimentares                        |
| 04    | Concessão de Abatimento                                |
| 05    | Cancelamento de Abatimento                             |
| 06    | Alteração de Vencimento                                |
| 07    | Concessão de Desconto                                  |
| 09    | Protestar                                              |
| 10    | Sustar Protesto e Baixar Título                        |
| 11    | Sustar Protesto e Manter em Carteira                   |
| 12    | Alteração de Juros de Mora                             |
| 13    | Dispensar Cobrança de Juros de Mora                    |
| 14    | Alteração de Valor/Percentual de Multa                 |
| 18    | Alteração do Valor de Abatimento                       |
| 19    | Prazo Limite de Recebimento ? Alterar                  |
| 20    | Prazo Limite de Recebimento ? Dispensar                |
| 21    | Alterar número do título dado pelo beneficiario        |
| 22    | Alterar número do título dado pelo beneficiario        |
| 23    | Alterar dados do Pagador                               |
| 24    | Alterar dados do Sacador/Avalista                      |
| 30    | Recusa da Alegação do Pagador                          |
| 31    | Alteração de Outros Dados                              |
| 33    | Alteração dos Dados do Rateio de Crédito               |
| 34    | Pedido de Cancelamento dos Dados do Rateio de Crédito  |
| 35    | Pedido de Desagendamento do Débito Automático          |
| 40    | Alteração de Carteira                                  |
| 41    | Cancelar protesto                                      |
| 42    | Alteração de Espécie de Título                         |
| 43    | Transferência de carteira/modalidade de cobrança       |
| 44    | Alteração de contrato de cobrança                      |
| 45    | Negativação Sem Protesto                               |
| 46    | Solicitação de Baixa de Título Negativado Sem Protesto |
| 49    | Alteração de dados extras multa                        |

#### lote

- **Valores:** 2
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| -3    | 3     |
| 1     | Ativo |

#### nparcela

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| P     | Padrão   |
| I     | Impresso |
| E     | E-mail   |

#### origem_importacao

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### parcela_proporcional

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### parcelado_cartao

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### pix_txid

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor          | Label          |
| -------------- | -------------- |
| COM_VENCIMENTO | Com vencimento |
| IMEDIATA       | Imediata       |

#### previsao

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |

#### recebido_via_pix

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
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

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### status_cobranca_regua

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | SIm   |
| N     | Não   |

#### tarifa_gateway_lancada

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |

#### tentativa_pix_recorrente

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### tipo_cobranca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### tipo_cobranca_pix

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor     | Label     |
| --------- | --------- |
| CRIADA    | Criado    |
| ATIVA     | Ativo     |
| CONCLUIDA | Concluído |
| EXPIRADA  | Expirado  |
| REJEITADA | Rejeitado |
| CANCELADA | Cancelado |

#### tipo_recebimento

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor  | Label  |
| ------ | ------ |
| Boleto | Boleto |

#### titulo_importado

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

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

#### valor

- **Valores:** 11
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor                  | Label                   |
| ---------------------- | ----------------------- |
| Boleto                 | Boleto                  |
| Cheque                 | Cheque                  |
| CartÃ£o                | Cartão de crédito       |
| Dinheiro               | Dinheiro                |
| DepÃ³sito              | Depósito                |
| Gateway                | Gateway                 |
| DÃ©bito                | Débito em conta         |
| Fatura                 | Fatura                  |
| ArrecadacaoRecebimento | Arrecadação/Recebimento |
| Transferencia          | Transferência           |
| Pix                    | Pix                     |

---

---

## Collection: linha_mvno

| Campo               | Cardinalidade | Status      | Valores                         |
| ------------------- | ------------- | ----------- | ------------------------------- |
| api                 | 2             | ✅ Aprovado | A, I                            |
| ddd_telefone        | 6             | ⚠️ Revisar  | 24, 41, 44, 47, 48, 49          |
| dia_recorrencia     | 7             | ⚠️ Revisar  | 0, 1, 10, 15, 20, 25, 5         |
| esim                | 2             | ✅ Aprovado | S, N                            |
| id                  | 2             | ✅ Aprovado | A, I                            |
| id_integracao       | 2             | ✅ Aprovado | 1, 2                            |
| id_linha_integracao | 9             | ⚠️ Revisar  | A, BR, BP, BA, I, BI, BT, C, AA |
| portabilidade       | 2             | ✅ Aprovado | N, S                            |
| profile_mvno        | 2             | ✅ Aprovado | S, N                            |
| simcard             | 7             | ⚠️ Revisar  | 1, 2, 3, 4, 5, 6, 7             |
| token_validacao     | 4             | ✅ Aprovado | A, R, CO, CA                    |

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
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### id

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label           |
| ----- | --------------- |
| A     | Na API e no IXC |
| I     | Apenas no IXC   |

#### id_integracao

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| 1     | Ativo    |
| 2     | Código 2 |

#### id_linha_integracao

- **Valores:** 9
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label                 |
| ----- | --------------------- |
| A     | Ativo                 |
| BR    | Bloqueio roubo        |
| BP    | Bloqueio perda        |
| BA    | Bloqueio parcial      |
| I     | Inativo               |
| BI    | Bloqueio uso indevido |
| BT    | Bloqueio total        |
| C     | Cancelada             |
| AA    | Aguardando ativação   |

#### portabilidade

- **Valores:** 2
- **Total Registros:** 372
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| N     | Não   |
| S     | Sim   |

#### profile_mvno

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| S     | Sim   |
| N     | Não   |

#### simcard

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label        |
| ----- | ------------ |
| 1     | Normal       |
| 2     | Gold         |
| 3     | DID Móvel    |
| 4     | M2M          |
| 5     | M2M Especial |
| 6     | Teste        |
| 7     | QA           |

#### token_validacao

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label      |
| ----- | ---------- |
| A     | Aguardando |
| R     | Recusado   |
| CO    | Concluído  |
| CA    | Cancelado  |

---

---

## Collection: su_ticket

| Campo                  | Cardinalidade | Status      | Valores             |
| ---------------------- | ------------- | ----------- | ------------------- |
| data_criacao           | 4             | ✅ Aprovado | B, M, A, C          |
| data_reservada         | 2             | ✅ Aprovado | I, H                |
| id                     | 2             | ✅ Aprovado | C, E                |
| id_assunto             | 4             | ✅ Aprovado | C, L, CC, M         |
| id_filial              | 1             | ✅ Aprovado | 1                   |
| id_resposta            | 4             | ✅ Aprovado | E, I, N, A          |
| id_su_diagnostico      | 4             | ✅ Aprovado | 0, 1, 10, 13        |
| id_ticket_origem       | 2             | ✅ Aprovado | H, I                |
| id_ticket_setor        | 7             | ⚠️ Revisar  | 1, 2, 3, 4, 5, 7, 8 |
| interacao_pendente     | 4             | ✅ Aprovado | A, E, I, N          |
| melhor_horario_agenda  | 1             | ✅ Aprovado | Q                   |
| melhor_horario_reserva | 3             | ✅ Aprovado | M, Q, T             |
| mensagens_nao_lida_sup | 2             | ✅ Aprovado | 0, 1                |
| menssagem              | 5             | ✅ Aprovado | N, P, EP, S, C      |
| origem_cadastro        | 1             | ✅ Aprovado | P                   |
| origem_endereco        | 4             | ✅ Aprovado | C, CC, L, M         |
| prioridade             | 4             | ✅ Aprovado | M, T, N, Q          |
| status                 | 3             | ✅ Aprovado | C, F, OSAG          |
| su_status              | 1             | ✅ Aprovado | S                   |
| tipo                   | 1             | ✅ Aprovado | C                   |
| titulo                 | 2             | ✅ Aprovado | E, M                |

### Detalhes

#### data_criacao

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| B     | Baixa   |
| M     | Normal  |
| A     | Alta    |
| C     | Crítica |

#### data_reservada

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| I     | Interna |
| H     | Hotsite |

#### id

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label             |
| ----- | ----------------- |
| C     | Cliente           |
| E     | Estrutura própria |

#### id_assunto

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| C     | Cliente  |
| L     | Login    |
| CC    | Contrato |
| M     | Manual   |

#### id_filial

- **Valores:** 1
- **Total Registros:** 1000
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Ativo |

#### id_resposta

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label   |
| ----- | ------- |
| E     | Externa |
| I     | Interna |
| N     | Nenhuma |
| A     | Ambos   |

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

#### menssagem

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label        |
| ----- | ------------ |
| N     | Novo         |
| P     | Pendente     |
| EP    | Em progresso |
| S     | Solucionado  |
| C     | Cancelado    |

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

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label    |
| ----- | -------- |
| M     | Manhã    |
| T     | Tarde    |
| N     | Noite    |
| Q     | Qualquer |

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

#### titulo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label     |
| ----- | --------- |
| E     | Estrutura |
| M     | Manual    |

---

---

## Collection: vd_contratos_produtos

| Campo                   | Cardinalidade | Status      | Valores               |
| ----------------------- | ------------- | ----------- | --------------------- |
| descricao_plano_valor_1 | 2             | ✅ Aprovado | 1, 0                  |
| id                      | 6             | ⚠️ Revisar  | I, T, S, SVA, TV, SMP |
| obs                     | 2             | ✅ Aprovado | V, P                  |
| qtde                    | 2             | ✅ Aprovado | 1, 3                  |
| repetir                 | 1             | ✅ Aprovado | V                     |
| tipo                    | 4             | ✅ Aprovado | I, S, SVA, TV         |
| tipo_desconto           | 1             | ✅ Aprovado | V                     |
| valor_ate_vencimento    | 2             | ✅ Aprovado | V, S                  |

### Detalhes

#### descricao_plano_valor_1

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label |
| ----- | ----- |
| 1     | Sim   |
| 0     | Não   |

#### id

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️ Revisar

| Valor | Label                |
| ----- | -------------------- |
| I     | Internet             |
| T     | Telefonia            |
| S     | Serviços             |
| SVA   | SVA                  |
| TV    | TV                   |
| SMP   | MVNO/Telefonia Móvel |

#### obs

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label      |
| ----- | ---------- |
| V     | Valor      |
| P     | Percentual |

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

#### valor_ate_vencimento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅ Aprovado

| Valor | Label      |
| ----- | ---------- |
| V     | Quantidade |
| S     | Sempre     |

---

---
