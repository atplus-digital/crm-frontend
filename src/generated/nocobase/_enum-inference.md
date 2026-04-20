# Relatório de Inferência de Enums - IXC

> **Data:** 2026-04-20
> **Collections analisadas:** 49

---

## Resumo por Collection

| Collection                          | Campos Enum | Status |
| ----------------------------------- | ----------- | ------ |
| f_funcionarios                      | 16          | ✅     |
| t_acessos                           | 1           | ✅     |
| t_aegis                             | 3           | ✅     |
| t_aniversarios                      | 1           | ✅     |
| t_atendimentos_ixc                  | 5           | ✅     |
| t_configuracoes                     | 1           | ✅     |
| t_consultas_pf                      | 1           | ✅     |
| t_consultas_pj                      | 1           | ✅     |
| t_crm_troca_titularidade            | 5           | ✅     |
| t_cupons_desconto                   | 3           | ✅     |
| t_dados_adicionais_cliente_contrato | 2           | ✅     |
| t_datacenter_memorias               | 3           | ✅     |
| t_dc_servidores                     | 2           | ✅     |
| t_demandas_viabilidades             | 3           | ✅     |
| t_discos                            | 2           | ✅     |
| t_empresas                          | 2           | ✅     |
| t_info_arquivos                     | 1           | ✅     |
| t_info_aso                          | 2           | ✅     |
| t_itens_pacotes                     | 2           | ✅     |
| t_lancamentos_ferias                | 1           | ✅     |
| t_linha_corporativa                 | 1           | ✅     |
| t_logs                              | 1           | ✅     |
| t_negociacoes                       | 11          | ✅     |
| t_negociacoes_comentarios           | 2           | ✅     |
| t_negociacoes_itens                 | 2           | ✅     |
| t_oe_qualirun                       | 2           | ✅     |
| t_opcoes_smp                        | 1           | ✅     |
| t_opcoes_stfc                       | 1           | ✅     |
| t_opcoes_stfc_template              | 1           | ✅     |
| t_pacotes                           | 5           | ✅     |
| t_patrimonio                        | 2           | ✅     |
| t_periodos_ferias                   | 1           | ✅     |
| t_pessoas                           | 3           | ✅     |
| t_produtos                          | 2           | ✅     |
| t_qualirun_info_adicionais          | 4           | ✅     |
| t_qualirun_processos                | 4           | ✅     |
| t_recursos_viagem                   | 2           | ✅     |
| t_registros_de_contato              | 3           | ✅     |
| t_servicos                          | 2           | ✅     |
| t_sites                             | 2           | ✅     |
| t_solicitacao_compras               | 6           | ✅     |
| t_suspensao_contrato                | 1           | ✅     |
| t_telecom_colocation_opcoes         | 1           | ✅     |
| t_telecom_interfaces                | 2           | ✅     |
| t_telecom_ips_fixos                 | 1           | ✅     |
| t_telecom_recursos                  | 3           | ✅     |
| t_templates_atendimento_n1          | 15          | ✅     |
| t_troca_endereco                    | 2           | ✅     |
| t_viagem_solicitacao                | 4           | ✅     |

---

## Sumário

- [f_funcionarios](#f-funcionarios)
- [t_acessos](#t-acessos)
- [t_aegis](#t-aegis)
- [t_aniversarios](#t-aniversarios)
- [t_atendimentos_ixc](#t-atendimentos-ixc)
- [t_configuracoes](#t-configuracoes)
- [t_consultas_pf](#t-consultas-pf)
- [t_consultas_pj](#t-consultas-pj)
- [t_crm_troca_titularidade](#t-crm-troca-titularidade)
- [t_cupons_desconto](#t-cupons-desconto)
- [t_dados_adicionais_cliente_contrato](#t-dados-adicionais-cliente-contrato)
- [t_datacenter_memorias](#t-datacenter-memorias)
- [t_dc_servidores](#t-dc-servidores)
- [t_demandas_viabilidades](#t-demandas-viabilidades)
- [t_discos](#t-discos)
- [t_empresas](#t-empresas)
- [t_info_arquivos](#t-info-arquivos)
- [t_info_aso](#t-info-aso)
- [t_itens_pacotes](#t-itens-pacotes)
- [t_lancamentos_ferias](#t-lancamentos-ferias)
- [t_linha_corporativa](#t-linha-corporativa)
- [t_logs](#t-logs)
- [t_negociacoes](#t-negociacoes)
- [t_negociacoes_comentarios](#t-negociacoes-comentarios)
- [t_negociacoes_itens](#t-negociacoes-itens)
- [t_oe_qualirun](#t-oe-qualirun)
- [t_opcoes_smp](#t-opcoes-smp)
- [t_opcoes_stfc](#t-opcoes-stfc)
- [t_opcoes_stfc_template](#t-opcoes-stfc-template)
- [t_pacotes](#t-pacotes)
- [t_patrimonio](#t-patrimonio)
- [t_periodos_ferias](#t-periodos-ferias)
- [t_pessoas](#t-pessoas)
- [t_produtos](#t-produtos)
- [t_qualirun_info_adicionais](#t-qualirun-info-adicionais)
- [t_qualirun_processos](#t-qualirun-processos)
- [t_recursos_viagem](#t-recursos-viagem)
- [t_registros_de_contato](#t-registros-de-contato)
- [t_servicos](#t-servicos)
- [t_sites](#t-sites)
- [t_solicitacao_compras](#t-solicitacao-compras)
- [t_suspensao_contrato](#t-suspensao-contrato)
- [t_telecom_colocation_opcoes](#t-telecom-colocation-opcoes)
- [t_telecom_interfaces](#t-telecom-interfaces)
- [t_telecom_ips_fixos](#t-telecom-ips-fixos)
- [t_telecom_recursos](#t-telecom-recursos)
- [t_templates_atendimento_n1](#t-templates-atendimento-n1)
- [t_troca_endereco](#t-troca-endereco)
- [t_viagem_solicitacao](#t-viagem-solicitacao)

---

## Collection: f_funcionarios

| Campo                     | Count | Status | Valores                                               |
| ------------------------- | ----- | ------ | ----------------------------------------------------- |
| f_ativo                   | 2     | ✅     | Sim, Não                                              |
| f_checklist_admissional   | 10    | ⚠️     | aso-admissional, rg, e-cnh, comprovante-residencia... |
| f_empresa                 | 2     | ✅     | ATPlus, Platon                                        |
| f_epi_calcado             | 10    | ⚠️     | 35, 36, 37, 38, 39, 40, 41, 42, 43, 44                |
| f_escolaridade            | 5     | ✅     | Ensino Médio, Superior, Pós, MBA, Mestrado, Doutor... |
| f_estado_civil            | 6     | ⚠️     | Solteiro, Casado, União Estável, Viúvo, Divorciado... |
| f_genero                  | 2     | ✅     | Masculino, Feminino                                   |
| f_mobilidade              | 2     | ✅     | Vale Transporte (Transul), Mobilidade (Cartão Bene... |
| f_pcd                     | 2     | ✅     | Sim, Não                                              |
| f_reservista              | 2     | ✅     | Sim, Não                                              |
| f_situacao_escolaridade   | 3     | ✅     | Completo, Cursando, Trancado                          |
| f_terceiro                | 2     | ✅     | Sim, Não                                              |
| f_tipo_contrato           | 7     | ⚠️     | CLT, Prestador de Serviços, Estagiário, Jovem Apre... |
| f_unidade                 | 4     | ✅     | Matriz, Loja Centro Lages, Loja Curitibanos, Plato... |
| f_universidade            | 5     | ✅     | IFSC, UNIPLAC, CIEE, UNIFACVEST, Outros               |
| f_vinculo_com_colaborador | 4     | ✅     | Pais, Filho(a) ou Enteado(a), Avós, Conjuge           |

### Detalhes

#### f_ativo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Não   |

#### f_checklist_admissional

- **Valores:** 10
- **Total Registros:** 0
- **Status:** ⚠️

| Valor                            | Label                                                      |
| -------------------------------- | ---------------------------------------------------------- |
| aso-admissional                  | ASO Admissional                                            |
| rg                               | RG                                                         |
| e-cnh                            | e-CNH                                                      |
| comprovante-residencia           | Comprovante de Residência                                  |
| certidao-casamento-uniao-estavel | Certidão de Casamento / União Estável                      |
| e-titulo-eleitoral               | e-Título Eleitoral                                         |
| certificado-de-reservista        | Certificado de Reservista                                  |
| rg-certidao-nascimento-filhos    | RG ou Certidão de Nascimento dos filhos menores de 21 anos |
| nr10-nr35                        | Certificado NR 10 e NR 35 (Opcional)                       |
| termos-responsabilidade          | Termos de Responsabilidade                                 |

#### f_empresa

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor  | Label  |
| ------ | ------ |
| ATPlus | ATPlus |
| Platon | Platon |

#### f_epi_calcado

- **Valores:** 10
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label |
| ----- | ----- |
| 35    | 35    |
| 36    | 36    |
| 37    | 37    |
| 38    | 38    |
| 39    | 39    |
| 40    | 40    |
| 41    | 41    |
| 42    | 42    |
| 43    | 43    |
| 44    | 44    |

#### f_escolaridade

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| Ensino Médio | Ensino Médio |
| Superior     | Superior     |
| Pós, MBA     | Pós, MBA     |
| Mestrado     | Mestrado     |
| Doutorado    | Doutorado    |

#### f_estado_civil

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor         | Label         |
| ------------- | ------------- |
| Solteiro      | Solteiro      |
| Casado        | Casado        |
| União Estável | União Estável |
| Viúvo         | Viúvo         |
| Divorciado    | Divorciado    |
| Separado      | Separado      |

#### f_genero

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| Masculino | Masculino |
| Feminino  | Feminino  |

#### f_mobilidade

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor                          | Label                          |
| ------------------------------ | ------------------------------ |
| Vale Transporte (Transul)      | Vale Transporte (Transul)      |
| Mobilidade (Cartão Benefícios) | Mobilidade (Cartão Benefícios) |

#### f_pcd

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Não   |

#### f_reservista

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Não   |

#### f_situacao_escolaridade

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor    | Label    |
| -------- | -------- |
| Completo | Completo |
| Cursando | Cursando |
| Trancado | Trancado |

#### f_terceiro

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Não   |

#### f_tipo_contrato

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️

| Valor                 | Label                 |
| --------------------- | --------------------- |
| CLT                   | CLT                   |
| Prestador de Serviços | Prestador de Serviços |
| Estagiário            | Estagiário            |
| Jovem Aprendiz        | Jovem Aprendiz        |
| Sócio                 | Sócio                 |
| Temporário            | Temporário            |
| CLT + Comissão        | CLT + Comissão        |

#### f_unidade

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor             | Label             |
| ----------------- | ----------------- |
| Matriz            | Matriz            |
| Loja Centro Lages | Loja Centro Lages |
| Loja Curitibanos  | Loja Curitibanos  |
| Platon            | Platon            |

#### f_universidade

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor      | Label      |
| ---------- | ---------- |
| IFSC       | IFSC       |
| UNIPLAC    | UNIPLAC    |
| CIEE       | CIEE       |
| UNIFACVEST | UNIFACVEST |
| Outros     | Outros     |

#### f_vinculo_com_colaborador

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor                  | Label                  |
| ---------------------- | ---------------------- |
| Pais                   | Pais                   |
| Filho(a) ou Enteado(a) | Filho(a) ou Enteado(a) |
| Avós                   | Avós                   |
| Conjuge                | Conjuge                |

---

---

## Collection: t_acessos

| Campo  | Count | Status | Valores |
| ------ | ----- | ------ | ------- |
| f_tipo | 3     | ✅     | 1, 2, 3 |

### Detalhes

#### f_tipo

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label   |
| ----- | ------- |
| 1     | Ponta A |
| 2     | Ponta B |
| 3     | Entrega |

---

---

## Collection: t_aegis

| Campo                       | Count | Status | Valores        |
| --------------------------- | ----- | ------ | -------------- |
| f_statusdesbloqueioconfiaca | 2     | ✅     | success, error |
| f_statuslogin               | 2     | ✅     | success, error |
| f_statusmac                 | 2     | ✅     | success, error |

### Detalhes

#### f_statusdesbloqueioconfiaca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label                                        |
| ------- | -------------------------------------------- |
| success | Desbloqueio de Confiança Efetuado por 2 Dias |
| error   | Erro ao Realizar Desbloqueio de Confiança    |

#### f_statuslogin

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label                        |
| ------- | ---------------------------- |
| success | Sucesso ao Desconectar Login |
| error   | Erro ao Desconectar Login    |

#### f_statusmac

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label                 |
| ------- | --------------------- |
| success | Sucesso ao Limpar MAC |
| error   | Erro ao Limpar MAC    |

---

---

## Collection: t_aniversarios

| Campo    | Count | Status | Valores                            |
| -------- | ----- | ------ | ---------------------------------- |
| f_status | 4     | ✅     | novo, em-processo, concluido, erro |

### Detalhes

#### f_status

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor       | Label       |
| ----------- | ----------- |
| novo        | Novo        |
| em-processo | Em processo |
| concluido   | Concluído   |
| erro        | Erro        |

---

---

## Collection: t_atendimentos_ixc

| Campo          | Count | Status     | Valores                                               |
| -------------- | ----- | ---------- | ----------------------------------------------------- |
| f_assunto      | 4     | ✅         | 88, 89, 90, 78                                        |
| f_diagnosticos | 26    | ❓ Avaliar | 95, 96, 97, 99, 100, 101, 105, 106, 107, 110, 111,... |
| f_prioridade   | 4     | ✅         | B, N, A, C                                            |
| f_processo     | 4     | ✅         | 33, 36, 34, 40                                        |
| f_tarefas      | 32    | ❓ Avaliar | 158, 159, 160, 164, 382, 412, 305, 306, 307, 311, ... |

### Detalhes

#### f_assunto

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                  |
| ----- | ---------------------- |
| 88    | Reparo                 |
| 89    | Serviço                |
| 90    | Manutenção Preventiva  |
| 78    | Atendimento Financeiro |

#### f_diagnosticos

- **Valores:** 26
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label                                    |
| ----- | ---------------------------------------- |
| 95    | 1000 - Defeito Rede interna do cliente   |
| 96    | 1001 - Defeito no equipamento do cliente |
| 97    | 1002 - Defeito em outra operadora        |
| 99    | 1004 - Falha Massiva                     |
| 100   | 1005 - Encaminhado para agendamento      |
| 101   | 1006 - Encontrado OK                     |
| 105   | 1010 - Configuração ONT/Roteador         |
| 106   | 1011 - SVA - Plataformas                 |
| 107   | 1012 - Outros                            |
| 110   | 1013 - Encaminhado para N2               |
| 111   | 1014 - Reboot na ONT/Roteador            |
| 246   | 1015 - Sem contato com o cliente         |
| 248   | 1016 - Abertura indevida                 |
| 147   | 1017 - Encaminhado para CS               |
| 264   | 1100 - Executado                         |
| 265   | 1101 - Pendência                         |
| 266   | 1102 - Cancelamento                      |
| 255   | 1200 - Defeito Rede interna do cliente   |
| 267   | 1201 - Defeito no equipamento do cliente |
| 268   | 1202 - Defeito em outra operadora        |
| 269   | 1204 - Falha Massiva                     |
| 270   | 1205 - Encaminhado para agendamento      |
| 271   | 1206 - Encontrado OK                     |
| 272   | 1210 - Configuração ONT/Roteador         |
| 273   | 1211 - SVA - Plataformas                 |
| 274   | 1212 - Outros                            |

#### f_prioridade

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label   |
| ----- | ------- |
| B     | Baixa   |
| N     | Normal  |
| A     | Alta    |
| C     | Crítica |

#### f_processo

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                  |
| ----- | ---------------------- |
| 33    | Reparo                 |
| 36    | Serviço                |
| 34    | Manutenção Preventiva  |
| 40    | Atendimento Financeiro |

#### f_tarefas

- **Valores:** 32
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label                                                   |
| ----- | ------------------------------------------------------- |
| 158   | REPARO - Encaminhar O.S para Agendamento                |
| 159   | REPARO - Encaminhar O.S para o Customer Success         |
| 160   | REPARO - Escalona O.S para SN2 - Banda Larga            |
| 164   | REPARO - Escalona O.S para SN2 - Telefonia              |
| 382   | REPARO - Encaminhar O.S para Financeiro                 |
| 412   | REPARO - Escalona O.S para SN2 - MVNO                   |
| 305   | SERVIÇO - Encaminhar O.S para Agendamento               |
| 306   | SERVIÇO - Encaminhar O.S para Customer Success          |
| 307   | SERVIÇO - Escalona O.S para SN2 - Banda Larga           |
| 311   | SERVIÇO - Escalona O.S para SN2 - Telefonia             |
| 393   | SERVIÇO - Encaminhar O.S para Financeiro                |
| 316   | SERVIÇO (2) - Encaminhar O.S para Agendamento           |
| 317   | SERVIÇO (2) - Encaminhar O.S para Customer Success      |
| 320   | SERVIÇO (2) - Escalona O.S para SN2 - Banda Larga       |
| 321   | SERVIÇO (2) - Escalona O.S para SN2 - Telefonia         |
| 395   | SERVIÇO (2) - Encaminhar O.S para Financeiro            |
| 170   | REPARO (2) - Encaminhar O.S para Agendamento            |
| 171   | REPARO (2) - Encaminhar O.S para o Customer Success     |
| 174   | REPARO (2) - Escalona O.S para SN2 - Banda Larga        |
| 175   | REPARO (2) - Escalona O.S para SN2 - Telefonia          |
| 375   | REPARO (2) - Encaminhar O.S para Financeiro             |
| 414   | REPARO (2) - Escalona O.S para SN2 - MVNO               |
| 228   | MANUN. PREV. - Encaminhar O.S para Agendamento          |
| 229   | MANUN. PREV. - Encaminhar O.S para Customer Success     |
| 230   | MANUN. PREV. - Escalona O.S para SN2 - Banda Larga      |
| 234   | MANUN. PREV. - Escalona O.S para SN2 - Telefonia        |
| 384   | MANUN. PREV. - Encaminhar O.S para Financeiro           |
| 240   | MANUN. PREV. (2) - Encaminhar O.S para Agendamento      |
| 241   | MANUN. PREV. (2) - Encaminhar O.S para Customer Success |
| 244   | MANUN. PREV. (2) - Escalona O.S para SN2 - Banda Larga  |
| 245   | MANUN. PREV. (2) - Escalona O.S para SN2 - Telefonia    |
| 386   | MANUN. PREV. (2) - Encaminhar O.S para Financeiro       |

---

---

## Collection: t_configuracoes

| Campo    | Count | Status | Valores                  |
| -------- | ----- | ------ | ------------------------ |
| f_escopo | 4     | ✅     | IXC, GERAL, SPC, ZAPSIGN |

### Detalhes

#### f_escopo

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label     |
| ------- | --------- |
| IXC     | IXCSoft   |
| GERAL   | GERAL     |
| SPC     | SPCBRASIL |
| ZAPSIGN | ZAPSIGN   |

---

---

## Collection: t_consultas_pf

| Campo             | Count | Status | Valores |
| ----------------- | ----- | ------ | ------- |
| f_status_consulta | 3     | ✅     | 1, 2, 9 |

### Detalhes

#### f_status_consulta

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                |
| ----- | -------------------- |
| 1     | Aprovado             |
| 2     | Aprovado com Alertas |
| 9     | Negado               |

---

---

## Collection: t_consultas_pj

| Campo             | Count | Status | Valores |
| ----------------- | ----- | ------ | ------- |
| f_status_consulta | 3     | ✅     | 1, 2, 9 |

### Detalhes

#### f_status_consulta

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                |
| ----- | -------------------- |
| 1     | Aprovado             |
| 2     | Aprovado com Alertas |
| 9     | Negado               |

---

---

## Collection: t_crm_troca_titularidade

| Campo         | Count | Status | Valores                                  |
| ------------- | ----- | ------ | ---------------------------------------- |
| f_complemento | 4     | ✅     | Casa, Apartamento, Condominio, Comercial |
| f_estado      | 1     | ✅     | SC                                       |
| f_status      | 5     | ✅     | 0, 1, 2, 3, 9                            |
| f_substatus   | 7     | ⚠️     | 0, 1, 2, 3, 4, 5, 6                      |
| f_tipo_pessoa | 2     | ✅     | PF, PJ                                   |

### Detalhes

#### f_complemento

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor       | Label       |
| ----------- | ----------- |
| Casa        | Casa        |
| Apartamento | Apartamento |
| Condominio  | Condominio  |
| Comercial   | Comercial   |

#### f_estado

- **Valores:** 1
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| SC    | SC    |

#### f_status

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                 |
| ----- | --------------------- |
| 0     | Novo                  |
| 1     | Aguardando assinatura |
| 2     | Aguardando Auditoria  |
| 3     | Concluído             |
| 9     | Cancelado             |

#### f_substatus

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label                                   |
| ----- | --------------------------------------- |
| 0     | NA                                      |
| 1     | APROVADO - Aguardando inserção no IXC   |
| 2     | APROVADO - Erro na integração com o IXC |
| 3     | APROVADO - Concluído                    |
| 4     | REPROVADO - Divergência de Dados        |
| 5     | REPROVADO - Financeiro em Atraso        |
| 6     | AGUARDANDO - Auditoria                  |

#### f_tipo_pessoa

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label           |
| ----- | --------------- |
| PF    | Pessoa Física   |
| PJ    | Pessoa Jurídica |

---

---

## Collection: t_cupons_desconto

| Campo             | Count | Status | Valores    |
| ----------------- | ----- | ------ | ---------- |
| f_status          | 2     | ✅     | 0, 1       |
| f_tipo            | 4     | ✅     | 1, 2, 3, 4 |
| f_tipo_negociacao | 3     | ✅     | 1, 2, S    |

### Detalhes

#### f_status

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label   |
| ----- | ------- |
| 0     | Inativo |
| 1     | Ativo   |

#### f_tipo

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                                        |
| ----- | -------------------------------------------- |
| 1     | Baseado no Endereço                          |
| 2     | Geral                                        |
| 3     | Upgrade para para contratos abaixo de R$ 100 |
| 4     | Contratação de Segundo Plano                 |

#### f_tipo_negociacao

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label               |
| ----- | ------------------- |
| 1     | Upgrade             |
| 2     | Venda Nova          |
| S     | Segunda Contratação |

---

---

## Collection: t_dados_adicionais_cliente_contrato

| Campo                | Count | Status | Valores                                      |
| -------------------- | ----- | ------ | -------------------------------------------- |
| f_forma_de_pagamento | 3     | ✅     | carne, boleto, recorrencia                   |
| f_perfil_de_uso      | 5     | ✅     | trabalho, estudo, jogos, streaming, pesquisa |

### Detalhes

#### f_forma_de_pagamento

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor       | Label       |
| ----------- | ----------- |
| carne       | Carnê       |
| boleto      | Boleto      |
| recorrencia | Recorrência |

#### f_perfil_de_uso

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label             |
| --------- | ----------------- |
| trabalho  | Trabalho          |
| estudo    | Estudo            |
| jogos     | Jogos             |
| streaming | Streaming         |
| pesquisa  | Pesquisa (Google) |

---

---

## Collection: t_datacenter_memorias

| Campo        | Count | Status | Valores                  |
| ------------ | ----- | ------ | ------------------------ |
| f_capacidade | 7     | ⚠️     | 2, 4, 8, 16, 32, 64, 128 |
| f_status     | 4     | ✅     | 0, 1, 2, 3               |
| f_tipo       | 3     | ✅     | 3, 4, 2                  |

### Detalhes

#### f_capacidade

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label  |
| ----- | ------ |
| 2     | 2 GB   |
| 4     | 4 GB   |
| 8     | 8 GB   |
| 16    | 16 GB  |
| 32    | 32 GB  |
| 64    | 64 GB  |
| 128   | 128 GB |

#### f_status

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                 |
| ----- | --------------------- |
| 0     | Descartado            |
| 1     | Disponivel            |
| 2     | Alocado para Servidor |
| 3     | Manutenção            |

#### f_tipo

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 3     | DDR 3 |
| 4     | DDR 4 |
| 2     | DDR 2 |

---

---

## Collection: t_dc_servidores

| Campo        | Count | Status | Valores       |
| ------------ | ----- | ------ | ------------- |
| f_fabricante | 5     | ✅     | 1, 2, 3, 4, 5 |
| f_status     | 4     | ✅     | 1, 2, 3, 4    |

### Detalhes

#### f_fabricante

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label      |
| ----- | ---------- |
| 1     | DELL       |
| 2     | HPE        |
| 3     | IBM        |
| 4     | Supermicro |
| 5     | Outro      |

#### f_status

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                |
| ----- | -------------------- |
| 1     | Disponivel           |
| 2     | Alocado para Cliente |
| 3     | Manutenção           |
| 4     | Descartado           |

---

---

## Collection: t_demandas_viabilidades

| Campo                | Count | Status | Valores |
| -------------------- | ----- | ------ | ------- |
| f_forma_atendimento  | 2     | ✅     | 1, 2    |
| f_servico_pretendido | 2     | ✅     | 1, 2    |
| f_status             | 3     | ✅     | 1, 2, 3 |

### Detalhes

#### f_forma_atendimento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                     |
| ----- | ------------------------- |
| 1     | Rede Própria              |
| 2     | Ultima Milha de Terceiros |

#### f_servico_pretendido

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label         |
| ----- | ------------- |
| 1     | Link Dedicado |
| 2     | E-Line        |

#### f_status

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label      |
| ----- | ---------- |
| 1     | Aguardando |
| 2     | Viável     |
| 3     | Não Viável |

---

---

## Collection: t_discos

| Campo        | Count | Status     | Valores                               |
| ------------ | ----- | ---------- | ------------------------------------- |
| f_capacidade | 12    | ❓ Avaliar | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
| f_tipo       | 6     | ⚠️         | 1, 2, 3, 4, 5, 6                      |

### Detalhes

#### f_capacidade

- **Valores:** 12
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label   |
| ----- | ------- |
| 1     | 480 GB  |
| 2     | 960 GB  |
| 3     | 240 GB  |
| 4     | 1920 GB |
| 5     | 3840 GB |
| 6     | 7868 GB |
| 7     | 120 GB  |
| 8     | 100 GB  |
| 9     | 500 GB  |
| 10    | 1000 GB |
| 11    | 2000 GB |
| 12    | 4000 GB |

#### f_tipo

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label       |
| ----- | ----------- |
| 1     | SSD SATA    |
| 2     | SSD SAS     |
| 3     | HDD SAS 10k |
| 4     | HDD SAS 15k |
| 5     | HDD NLSAS   |
| 6     | HDD SATA    |

---

---

## Collection: t_empresas

| Campo         | Count | Status | Valores |
| ------------- | ----- | ------ | ------- |
| f_analise_ixc | 2     | ✅     | 0, 1    |
| f_credito     | 3     | ✅     | 1, 2, 9 |

### Detalhes

#### f_analise_ixc

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label          |
| ----- | -------------- |
| 0     | Com Pendências |
| 1     | Sem Pendências |

#### f_credito

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                |
| ----- | -------------------- |
| 1     | Aprovado             |
| 2     | Aprovado com Atenção |
| 9     | Negado               |

---

---

## Collection: t_info_arquivos

| Campo             | Count | Status | Valores  |
| ----------------- | ----- | ------ | -------- |
| f_arquivo_externo | 2     | ✅     | sim, não |

### Detalhes

#### f_arquivo_externo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| sim   | Sim   |
| não   | Não   |

---

---

## Collection: t_info_aso

| Campo        | Count | Status | Valores                                               |
| ------------ | ----- | ------ | ----------------------------------------------------- |
| f_informado  | 2     | ✅     | nao, sim                                              |
| f_tipo_exame | 6     | ⚠️     | exame-admissional, exame-periodico, atestado-medic... |

### Detalhes

#### f_informado

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| nao   | Não   |
| sim   | Sim   |

#### f_tipo_exame

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor             | Label               |
| ----------------- | ------------------- |
| exame-admissional | Exame Admissional   |
| exame-periodico   | Exame Periódico     |
| atestado-medico   | Atestado Médico     |
| retorno-trabalho  | Retorno ao Trabalho |
| mudanca-funcao    | Mudança de Função   |
| outros            | Outros              |

---

---

## Collection: t_itens_pacotes

| Campo          | Count | Status | Valores                       |
| -------------- | ----- | ------ | ----------------------------- |
| f_tipo_ixc     | 6     | ⚠️     | I, SMP, TV, S, T, SVA         |
| f_tipo_produto | 5     | ✅     | SVA, INTERNET, STFC, MVNO, TV |

### Detalhes

#### f_tipo_ixc

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label         |
| ----- | ------------- |
| I     | INTERNET      |
| SMP   | MVNO/SMP      |
| TV    | TV/STREAMING  |
| S     | SERVICO       |
| T     | STFC/TELEFONE |
| SVA   | SVA           |

#### f_tipo_produto

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor    | Label    |
| -------- | -------- |
| SVA      | SVA      |
| INTERNET | INTERNET |
| STFC     | STFC     |
| MVNO     | MVNO     |
| TV       | TV       |

---

---

## Collection: t_lancamentos_ferias

| Campo    | Count | Status | Valores                                               |
| -------- | ----- | ------ | ----------------------------------------------------- |
| f_status | 5     | ✅     | cancelada, planejada, em-andamento, aprovada, conc... |

### Detalhes

#### f_status

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| cancelada    | Cancelada    |
| planejada    | Planejada    |
| em-andamento | Em andamento |
| aprovada     | Aprovada     |
| concluida    | Concluída    |

---

---

## Collection: t_linha_corporativa

| Campo  | Count | Status | Valores |
| ------ | ----- | ------ | ------- |
| f_tipo | 2     | ✅     | 1, 2    |

### Detalhes

#### f_tipo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label            |
| ----- | ---------------- |
| 1     | Chip Corporativo |
| 2     | DID Fixo         |

---

---

## Collection: t_logs

| Campo       | Count | Status | Valores                     |
| ----------- | ----- | ------ | --------------------------- |
| f_log_level | 4     | ✅     | info, warning, alert, error |

### Detalhes

#### f_log_level

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label   |
| ------- | ------- |
| info    | Info    |
| warning | Warning |
| alert   | Alert   |
| error   | Error   |

---

---

## Collection: t_negociacoes

| Campo                  | Count | Status     | Valores                                               |
| ---------------------- | ----- | ---------- | ----------------------------------------------------- |
| f_confissao_divida     | 2     | ✅         | Nao, Sim                                              |
| f_data_vencimento      | 6     | ⚠️         | 1, 5, 10, 15, 20, 25                                  |
| f_endereco_cobranca    | 2     | ✅         | 0, 1                                                  |
| f_endereco_complemento | 4     | ✅         | Casa, Apartamento, Condominio, Comercial              |
| f_fidelidade           | 6     | ⚠️         | 0, 12, 24, 36, 48, 60                                 |
| f_motivo               | 10    | ⚠️         | I, M, D, U, N, R, T, L, S, P                          |
| f_motivo_pontos        | 6     | ⚠️         | cep, endereco, numero, telefone, telefone-adc, ema... |
| f_pontos_atencao       | 7     | ⚠️         | 0, 1, 2, 3, 4, 5, 6                                   |
| f_status               | 6     | ⚠️         | 1, 2, 3, 4, 5, 6                                      |
| f_substatus            | 13    | ❓ Avaliar | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13             |
| f_tipo_pessoa          | 2     | ✅         | PF, PJ                                                |

### Detalhes

#### f_confissao_divida

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Nao   | Nao   |
| Sim   | Sim   |

#### f_data_vencimento

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label  |
| ----- | ------ |
| 1     | Dia 01 |
| 5     | Dia 05 |
| 10    | Dia 10 |
| 15    | Dia 15 |
| 20    | Dia 20 |
| 25    | Dia 25 |

#### f_endereco_cobranca

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | Não   |
| 1     | Sim   |

#### f_endereco_complemento

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor       | Label       |
| ----------- | ----------- |
| Casa        | Casa        |
| Apartamento | Apartamento |
| Condominio  | Condominio  |
| Comercial   | Comercial   |

#### f_fidelidade

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label    |
| ----- | -------- |
| 0     | 0 Meses  |
| 12    | 12 Meses |
| 24    | 24 Meses |
| 36    | 36 Meses |
| 48    | 48 Meses |
| 60    | 60 Meses |

#### f_motivo

- **Valores:** 10
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label                   |
| ----- | ----------------------- |
| I     | Venda Nova              |
| M     | Mudança de Endereço     |
| D     | Downgrade               |
| U     | Upgrade                 |
| N     | Renegociação            |
| R     | Reativação              |
| T     | Mudança de Tecnologia   |
| L     | Mudança de Titularidade |
| S     | Segunda Contratação     |
| P     | Proposta                |

#### f_motivo_pontos

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor        | Label                        |
| ------------ | ---------------------------- |
| cep          | CEP duplicado                |
| endereco     | Endereço duplicado           |
| numero       | Número duplicado             |
| telefone     | Telefone duplicado           |
| telefone-adc | Telefone adicional duplicado |
| email        | E-mail duplicado             |

#### f_pontos_atencao

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label    |
| ----- | -------- |
| 0     | 0 Pontos |
| 1     | 1 Ponto  |
| 2     | 2 Pontos |
| 3     | 3 Pontos |
| 4     | 4 Pontos |
| 5     | 5 Pontos |
| 6     | 6 Pontos |

#### f_status

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label      |
| ----- | ---------- |
| 1     | Novo       |
| 2     | Negociando |
| 3     | Assinatura |
| 4     | Auditoria  |
| 5     | Concluído  |
| 6     | Arquivado  |

#### f_substatus

- **Valores:** 13
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label                                            |
| ----- | ------------------------------------------------ |
| 1     | NA                                               |
| 2     | AGUARDANDO - Assinatura do contrato pelo cliente |
| 3     | AGUARDANDO - Auditoria                           |
| 4     | APROVADO - Aguardando inserção no IXC            |
| 5     | REPROVADO - Divergência de Dados                 |
| 6     | REPROVADO - Fraude                               |
| 7     | REPROVADO - Análise de Crédito                   |
| 8     | APROVADO - Erro na integração com o IXC          |
| 9     | APROVADO - Concluído                             |
| 10    | PERDIDO                                          |
| 11    | APROVADO - Aguardando atualização no IXC         |
| 12    | REPROVADO - Financeiro em Atraso                 |
| 13    | EM STANDBY                                       |

#### f_tipo_pessoa

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label           |
| ----- | --------------- |
| PF    | Pessoa Física   |
| PJ    | Pessoa Jurídica |

---

---

## Collection: t_negociacoes_comentarios

| Campo                    | Count | Status | Valores    |
| ------------------------ | ----- | ------ | ---------- |
| f_insere_atendimento_ixc | 2     | ✅     | 0, 1       |
| f_setor_para_obs         | 4     | ✅     | 1, 2, 3, 4 |

### Detalhes

#### f_insere_atendimento_ixc

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | Não   |
| 1     | Sim   |

#### f_setor_para_obs

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                                     |
| ----- | ----------------------------------------- |
| 1     | Equipe de Campo                           |
| 2     | Suporte Nível 1                           |
| 3     | Suporte Nível 2                           |
| 4     | Telefonia (Ativações e/ou Portabilidades) |

---

---

## Collection: t_negociacoes_itens

| Campo          | Count | Status | Valores                       |
| -------------- | ----- | ------ | ----------------------------- |
| f_relacao      | 2     | ✅     | COMBO, ADICIONAL              |
| f_tipo_produto | 5     | ✅     | SVA, INTERNET, STFC, MVNO, TV |

### Detalhes

#### f_relacao

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| COMBO     | COMBO     |
| ADICIONAL | ADICIONAL |

#### f_tipo_produto

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor    | Label    |
| -------- | -------- |
| SVA      | SVA      |
| INTERNET | INTERNET |
| STFC     | STFC     |
| MVNO     | MVNO     |
| TV       | TV       |

---

---

## Collection: t_oe_qualirun

| Campo          | Count | Status | Valores                              |
| -------------- | ----- | ------ | ------------------------------------ |
| f_procedimento | 1     | ✅     | 17760523-1404-4ff9-b786-15a4b0d7a3e2 |
| f_status       | 4     | ✅     | cancelado, novo, pendente, concluido |

### Detalhes

#### f_procedimento

- **Valores:** 1
- **Total Registros:** 0
- **Status:** ✅

| Valor                                | Label              |
| ------------------------------------ | ------------------ |
| 17760523-1404-4ff9-b786-15a4b0d7a3e2 | Assinatura via GOV |

#### f_status

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| cancelado | Cancelado |
| novo      | Novo      |
| pendente  | Pendente  |
| concluido | Concluído |

---

---

## Collection: t_opcoes_smp

| Campo           | Count | Status | Valores |
| --------------- | ----- | ------ | ------- |
| f_portabilidade | 2     | ✅     | 0, 1    |

### Detalhes

#### f_portabilidade

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | NÃO   |
| 1     | SIM   |

---

---

## Collection: t_opcoes_stfc

| Campo           | Count | Status | Valores  |
| --------------- | ----- | ------ | -------- |
| f_portabilidade | 2     | ✅     | SIM, NAO |

### Detalhes

#### f_portabilidade

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| SIM   | SIM   |
| NAO   | NÃO   |

---

---

## Collection: t_opcoes_stfc_template

| Campo           | Count | Status | Valores |
| --------------- | ----- | ------ | ------- |
| f_portabilidade | 2     | ✅     | 0, 1    |

### Detalhes

#### f_portabilidade

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | NÃO   |
| 1     | SIM   |

---

---

## Collection: t_pacotes

| Campo              | Count | Status | Valores |
| ------------------ | ----- | ------ | ------- |
| f_abre_atendimento | 2     | ✅     | 0, 1    |
| f_pacote_adicional | 2     | ✅     | 0, 1    |
| f_pacote_principal | 2     | ✅     | 0, 1    |
| f_status           | 2     | ✅     | 1, 2    |
| f_vender_para      | 2     | ✅     | PF, PJ  |

### Detalhes

#### f_abre_atendimento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | NAO   |
| 1     | SIM   |

#### f_pacote_adicional

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | NAO   |
| 1     | SIM   |

#### f_pacote_principal

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | NAO   |
| 1     | SIM   |

#### f_status

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label   |
| ----- | ------- |
| 1     | Ativo   |
| 2     | Inativo |

#### f_vender_para

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label           |
| ----- | --------------- |
| PF    | Pessoa Física   |
| PJ    | Pessoa Jurídica |

---

---

## Collection: t_patrimonio

| Campo             | Count | Status | Valores                                               |
| ----------------- | ----- | ------ | ----------------------------------------------------- |
| f_estado_uso      | 3     | ✅     | NOVO, USADO, EM ESTADO DE NOVO, USADO, COM MARCAS ... |
| f_tipo_patrimonio | 1     | ✅     | 1                                                     |

### Detalhes

#### f_estado_uso

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor                    | Label                    |
| ------------------------ | ------------------------ |
| NOVO                     | NOVO                     |
| USADO, EM ESTADO DE NOVO | USADO, EM ESTADO DE NOVO |
| USADO, COM MARCAS DE USO | USADO, COM MARCAS DE USO |

#### f_tipo_patrimonio

- **Valores:** 1
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label       |
| ----- | ----------- |
| 1     | Equipamento |

---

---

## Collection: t_periodos_ferias

| Campo            | Count | Status | Valores                                               |
| ---------------- | ----- | ------ | ----------------------------------------------------- |
| f_status_periodo | 5     | ✅     | cancelada, planejada, em-andamento, aprovada, conc... |

### Detalhes

#### f_status_periodo

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| cancelada    | Cancelada    |
| planejada    | Planejada    |
| em-andamento | Em andamento |
| aprovada     | Aprovada     |
| concluida    | Concluída    |

---

---

## Collection: t_pessoas

| Campo         | Count | Status | Valores                   |
| ------------- | ----- | ------ | ------------------------- |
| f_analise_ixc | 2     | ✅     | 0, 1                      |
| f_credito     | 3     | ✅     | 1, 2, 9                   |
| f_sexo        | 4     | ✅     | M, F, MASCULINO, FEMININO |

### Detalhes

#### f_analise_ixc

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label          |
| ----- | -------------- |
| 0     | Com Pendências |
| 1     | Sem Pendências |

#### f_credito

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                |
| ----- | -------------------- |
| 1     | Aprovado             |
| 2     | Aprovado com Atenção |
| 9     | Negado               |

#### f_sexo

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| M         | MASCULINO |
| F         | FEMININO  |
| MASCULINO | MASCULINO |
| FEMININO  | FEMININO  |

---

---

## Collection: t_produtos

| Campo          | Count | Status | Valores                       |
| -------------- | ----- | ------ | ----------------------------- |
| f_tipo_ixc     | 6     | ⚠️     | I, SMP, TV, S, T, SVA         |
| f_tipo_produto | 5     | ✅     | SVA, INTERNET, STFC, MVNO, TV |

### Detalhes

#### f_tipo_ixc

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label         |
| ----- | ------------- |
| I     | INTERNET      |
| SMP   | SMP/MVNO      |
| TV    | TV/STREAMING  |
| S     | SERVICO       |
| T     | STFC/TELEFONE |
| SVA   | SVA           |

#### f_tipo_produto

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor    | Label    |
| -------- | -------- |
| SVA      | SVA      |
| INTERNET | INTERNET |
| STFC     | STFC     |
| MVNO     | MVNO     |
| TV       | TV       |

---

---

## Collection: t_qualirun_info_adicionais

| Campo                        | Count | Status | Valores                                               |
| ---------------------------- | ----- | ------ | ----------------------------------------------------- |
| f_grau_escolaridade          | 5     | ✅     | Ensino Médio, Superior, Pós, MBA, Mestrado, Doutor... |
| f_situacao_curso             | 3     | ✅     | Trancado, Cursando, Completo                          |
| f_status                     | 3     | ✅     | recusado, aprovado, aguardando                        |
| f_vinculo_contato_emergencia | 4     | ✅     | Pais, Filho(a) ou Enteado(a), Avós, Conjuge           |

### Detalhes

#### f_grau_escolaridade

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| Ensino Médio | Ensino Médio |
| Superior     | Superior     |
| Pós, MBA     | Pós, MBA     |
| Mestrado     | Mestrado     |
| Doutorado    | Doutorado    |

#### f_situacao_curso

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor    | Label    |
| -------- | -------- |
| Trancado | Trancado |
| Cursando | Cursando |
| Completo | Completo |

#### f_status

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor      | Label      |
| ---------- | ---------- |
| recusado   | Recusado   |
| aprovado   | Aprovado   |
| aguardando | Aguardando |

#### f_vinculo_contato_emergencia

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor                  | Label                  |
| ---------------------- | ---------------------- |
| Pais                   | Pais                   |
| Filho(a) ou Enteado(a) | Filho(a) ou Enteado(a) |
| Avós                   | Avós                   |
| Conjuge                | Conjuge                |

---

---

## Collection: t_qualirun_processos

| Campo                      | Count | Status | Valores                                               |
| -------------------------- | ----- | ------ | ----------------------------------------------------- |
| f_detalhes_procedimento    | 2     | ✅     | 1, 2                                                  |
| f_id_procedimento_qualirun | 2     | ✅     | c03f166d-a4d7-42b7-ae73-a4c287e171ac, 0a3d75b4-290... |
| f_procedimento             | 2     | ✅     | complemento-informacoes-documentos, confidencialid... |
| f_status                   | 4     | ✅     | novo, pendente, concluido, cancelado                  |

### Detalhes

#### f_detalhes_procedimento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                                                                                                                                    |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores. |
| 2     | Utilizado para novos colaboradores assinarem os termos de Confidencialidade, LGPD e Uso Voz e Imagem.                                    |

#### f_id_procedimento_qualirun

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor                                | Label                                   |
| ------------------------------------ | --------------------------------------- |
| c03f166d-a4d7-42b7-ae73-a4c287e171ac | Complemento de Informações e Documentos |
| 0a3d75b4-2908-4bc2-85a6-64667ec60477 | Assinatura com Identidade Verificada    |

#### f_procedimento

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor                              | Label                                                         |
| ---------------------------------- | ------------------------------------------------------------- |
| complemento-informacoes-documentos | Complemento de Informações e Documentos                       |
| confidencialidade-lgpd-voz-imagem  | Assinatura de Termos (LGPD, Voz e Imagem e Confidencialidade) |

#### f_status

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| novo      | Novo      |
| pendente  | Pendente  |
| concluido | Concluído |
| cancelado | Cancelado |

---

---

## Collection: t_recursos_viagem

| Campo             | Count | Status | Valores    |
| ----------------- | ----- | ------ | ---------- |
| f_destino_viagem  | 3     | ✅     | 1, 2, 3    |
| f_meio_transporte | 4     | ✅     | 1, 2, 3, 4 |

### Detalhes

#### f_destino_viagem

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label         |
| ----- | ------------- |
| 1     | Curitibanos   |
| 2     | Florianópolis |
| 3     | Florianópolis |

#### f_meio_transporte

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label            |
| ----- | ---------------- |
| 1     | Kwid ATPlus      |
| 2     | Fiorino ATPlus   |
| 3     | Carro Particular |
| 4     | Outro            |

---

---

## Collection: t_registros_de_contato

| Campo          | Count | Status | Valores                            |
| -------------- | ----- | ------ | ---------------------------------- |
| f_categoria    | 3     | ✅     | pos-venda, pre-venda, cancelamento |
| f_nota_tecnico | 6     | ⚠️     | 0, 1, 2, 3, 4, 5                   |
| f_nota_vendas  | 6     | ⚠️     | 0, 1, 2, 3, 4, 5                   |

### Detalhes

#### f_categoria

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| pos-venda    | Pós Venda    |
| pre-venda    | Pré Venda    |
| cancelamento | Cancelamento |

#### f_nota_tecnico

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label   |
| ----- | ------- |
| 0     | N/A     |
| 1     | 1 ★     |
| 2     | 2 ★★    |
| 3     | 3 ★★★   |
| 4     | 4 ★★★★  |
| 5     | 5 ★★★★★ |

#### f_nota_vendas

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label   |
| ----- | ------- |
| 0     | N/A     |
| 1     | 1 ★     |
| 2     | 2 ★★    |
| 3     | 3 ★★★   |
| 4     | 4 ★★★★  |
| 5     | 5 ★★★★★ |

---

---

## Collection: t_servicos

| Campo    | Count | Status | Valores          |
| -------- | ----- | ------ | ---------------- |
| f_status | 3     | ✅     | 0, 1, 2          |
| f_tipo   | 6     | ⚠️     | 1, 2, 3, 4, 5, 6 |

### Detalhes

#### f_status

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label               |
| ----- | ------------------- |
| 0     | Cancelado           |
| 1     | Aguardando Ativação |
| 2     | Ativo               |

#### f_tipo

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label      |
| ----- | ---------- |
| 1     | Link IP    |
| 2     | PTP        |
| 3     | PTMP       |
| 4     | OUTRO      |
| 5     | Lastmile   |
| 6     | Colocation |

---

---

## Collection: t_sites

| Campo    | Count | Status | Valores                               |
| -------- | ----- | ------ | ------------------------------------- |
| f_status | 3     | ✅     | repnmsclnb8, x2lk2z9p2ds, qw3vjvimoae |
| f_tipo   | 3     | ✅     | 1, 2, 3                               |

### Detalhes

#### f_status

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor       | Label      |
| ----------- | ---------- |
| repnmsclnb8 | Planejado  |
| x2lk2z9p2ds | Ativo      |
| qw3vjvimoae | Desativado |

#### f_tipo

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label      |
| ----- | ---------- |
| 1     | ATPLUS     |
| 2     | FORNECEDOR |
| 3     | CLIENTE    |

---

---

## Collection: t_solicitacao_compras

| Campo                 | Count | Status     | Valores                                               |
| --------------------- | ----- | ---------- | ----------------------------------------------------- |
| f_categoria           | 2     | ✅         | Produto, Serviço                                      |
| f_departamento        | 13    | ❓ Avaliar | Almox, Comercial, Financeiro, Infraestrutura, Labo... |
| f_metodo_de_pagamento | 4     | ✅         | Á definir, Pix, Boleto, Cartão                        |
| f_prazo               | 14    | ❓ Avaliar | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14         |
| f_status              | 8     | ⚠️         | Caixa de Entrada, Aprovação da Gestão, Pedido de C... |
| f_tipo                | 2     | ✅         | 1, 2                                                  |

### Detalhes

#### f_categoria

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label   |
| ------- | ------- |
| Produto | Produto |
| Serviço | Serviço |

#### f_departamento

- **Valores:** 13
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor               | Label               |
| ------------------- | ------------------- |
| Almox               | Almox               |
| Comercial           | Comercial           |
| Financeiro          | Financeiro          |
| Infraestrutura      | Infraestrutura      |
| Laboratório Técnico | Laboratório Técnico |
| Marketing           | Marketing           |
| NOC                 | NOC                 |
| Operacional         | Operacional         |
| Platon              | Platon              |
| Processos           | Processos           |
| Projetos            | Projetos            |
| RH                  | RH                  |
| Serviços Gerais     | Serviços Gerais     |

#### f_metodo_de_pagamento

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| Á definir | Á definir |
| Pix       | Pix       |
| Boleto    | Boleto    |
| Cartão    | Cartão    |

#### f_prazo

- **Valores:** 14
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label     |
| ----- | --------- |
| 1     | Á definir |
| 2     | Á vista   |
| 3     | 1x        |
| 4     | 2x        |
| 5     | 3x        |
| 6     | 4x        |
| 7     | 5x        |
| 8     | 6x        |
| 9     | 7x        |
| 10    | 8x        |
| 11    | 9x        |
| 12    | 10x       |
| 13    | 11x       |
| 14    | 12x       |

#### f_status

- **Valores:** 8
- **Total Registros:** 0
- **Status:** ⚠️

| Valor                    | Label                    |
| ------------------------ | ------------------------ |
| Caixa de Entrada         | Caixa de Entrada         |
| Aprovação da Gestão      | Aprovação da Gestão      |
| Pedido de Compra         | Pedido de Compra         |
| Processamento Financeiro | Processamento Financeiro |
| Fila de Entrega          | Fila de Entrega          |
| Concluído                | Concluído                |
| Rejeitado                | Rejeitado                |
| Standby                  | Standby                  |

#### f_tipo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label            |
| ----- | ---------------- |
| 1     | Pedido de Compra |
| 2     | Cotação          |

---

---

## Collection: t_suspensao_contrato

| Campo    | Count | Status | Valores       |
| -------- | ----- | ------ | ------------- |
| f_status | 5     | ✅     | 0, 1, 2, 3, 4 |

### Detalhes

#### f_status

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                 |
| ----- | --------------------- |
| 0     | Nova Solicitação      |
| 1     | Aguardando Assinatura |
| 2     | Assinatura Concluída  |
| 3     | Concluído             |
| 4     | Cancelado             |

---

---

## Collection: t_telecom_colocation_opcoes

| Campo     | Count | Status | Valores                               |
| --------- | ----- | ------ | ------------------------------------- |
| f_energia | 3     | ✅     | 0nqbw68srah, e5b3lklfpq4, mra46p506xo |

### Detalhes

#### f_energia

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor       | Label  |
| ----------- | ------ |
| 0nqbw68srah | AC 220 |
| e5b3lklfpq4 | AC 110 |
| mra46p506xo | DC -48 |

---

---

## Collection: t_telecom_interfaces

| Campo          | Count | Status | Valores             |
| -------------- | ----- | ------ | ------------------- |
| f_configuracao | 3     | ✅     | 1, 2, 3             |
| f_tipo         | 7     | ⚠️     | 1, 3, 2, 4, 5, 6, 7 |

### Detalhes

#### f_configuracao

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label   |
| ----- | ------- |
| 1     | Acesso  |
| 2     | Tronco  |
| 3     | Hibrida |

#### f_tipo

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️

| Valor | Label           |
| ----- | --------------- |
| 1     | SFP             |
| 3     | METALICA        |
| 2     | SFP+            |
| 4     | QSFP            |
| 5     | VLAN            |
| 6     | VPN             |
| 7     | ETH-TRUNK (LAG) |

---

---

## Collection: t_telecom_ips_fixos

| Campo            | Count | Status | Valores |
| ---------------- | ----- | ------ | ------- |
| f_possui_ip_fixo | 2     | ✅     | 0, 1    |

### Detalhes

#### f_possui_ip_fixo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| 0     | Não   |
| 1     | Sim   |

---

---

## Collection: t_telecom_recursos

| Campo        | Count | Status     | Valores                                       |
| ------------ | ----- | ---------- | --------------------------------------------- |
| f_finalidade | 4     | ✅         | 3, 2, 4, 1                                    |
| f_status     | 3     | ✅         | 1, 2, 3                                       |
| f_tipo       | 14    | ❓ Avaliar | 1, 13, 6, 4, 2, 7, 5, 8, 3, 9, 10, 11, 12, 14 |

### Detalhes

#### f_finalidade

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label               |
| ----- | ------------------- |
| 3     | Insumo para Serviço |
| 2     | Serviço             |
| 4     | Facilidade          |
| 1     | Acesso              |

#### f_status

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label      |
| ----- | ---------- |
| 1     | Planejado  |
| 2     | Ativo      |
| 3     | Desativado |

#### f_tipo

- **Valores:** 14
- **Total Registros:** 0
- **Status:** ❓ Avaliar

| Valor | Label                |
| ----- | -------------------- |
| 1     | L2 - PTP             |
| 13    | L3 - PTP             |
| 6     | L2 - P2MP            |
| 4     | L2 - Last Mile       |
| 2     | L3 - Link IP         |
| 7     | L3 - Banda Larga     |
| 5     | L1 - Fibra Apagada   |
| 8     | L1 - Canal DWDM      |
| 3     | Colocation           |
| 9     | VPN                  |
| 10    | Trunk Flex           |
| 11    | Transito IP Internet |
| 12    | Transito IP CDN      |
| 14    | Contrato             |

---

---

## Collection: t_templates_atendimento_n1

| Campo                            | Count | Status | Valores                                               |
| -------------------------------- | ----- | ------ | ----------------------------------------------------- |
| f_acessa_pela_rede_da_atplus     | 2     | ✅     | Sim, Não                                              |
| f_alteracoes                     | 3     | ✅     | Somente o nome, Somente a senha, Nome e senha         |
| f_aplicativo                     | 7     | ⚠️     | Deezer, Watch BR, Paramount+, HBO Max, Via Livros,... |
| f_aplicativo_especifico          | 2     | ✅     | Sim, Não                                              |
| f_apn_preenchida                 | 3     | ✅     | Sim, Não, Não soube dizer                             |
| f_fabricante                     | 6     | ⚠️     | Samsung, Apple, Motorola, Xiomi, Asus, Outro          |
| f_los                            | 2     | ✅     | Sim, Não                                              |
| f_qual_apn_configurada           | 3     | ✅     | eai.br, m2m.arqia.br, internet.br                     |
| f_quantidade_de_dispositivos     | 2     | ✅     | Um dispositivo, Todos os dispositivos                 |
| f_status_do_circuito             | 2     | ✅     | Online, Offline                                       |
| f_telefonia_tipo_de_problema     | 5     | ✅     | Não recebe ligações, Não efetua ligações, Quedas n... |
| f_tipo_de_atendimento            | 9     | ⚠️     | Lentidão, Sem conexão, Site específico, Telefonia,... |
| f_tipo_de_conexao_do_dispositivo | 2     | ✅     | Wi-Fi, Cabo de rede                                   |
| f_tipo_de_problema_mvno          | 3     | ✅     | Não recebe ligações, Não efetua ligações, Dados mó... |
| f_torre_rede                     | 2     | ✅     | Com sinal, Sem sinal                                  |

### Detalhes

#### f_acessa_pela_rede_da_atplus

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Nao   |

#### f_alteracoes

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor           | Label           |
| --------------- | --------------- |
| Somente o nome  | Somente o nome  |
| Somente a senha | Somente a senha |
| Nome e senha    | Nome e senha    |

#### f_aplicativo

- **Valores:** 7
- **Total Registros:** 0
- **Status:** ⚠️

| Valor                | Label                |
| -------------------- | -------------------- |
| Deezer               | Deezer               |
| Watch BR             | Watch BR             |
| Paramount+           | Paramount+           |
| HBO Max              | HBO Max              |
| Via Livros           | Via Livros           |
| Olé TV               | Olé TV               |
| Todos os aplicativos | Todos os aplicativos |

#### f_aplicativo_especifico

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Não   |

#### f_apn_preenchida

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor           | Label           |
| --------------- | --------------- |
| Sim             | Sim             |
| Não             | Não             |
| Não soube dizer | Não soube dizer |

#### f_fabricante

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor    | Label    |
| -------- | -------- |
| Samsung  | Samsung  |
| Apple    | Apple    |
| Motorola | Motorola |
| Xiomi    | Xiomi    |
| Asus     | Asus     |
| Outro    | Outro    |

#### f_los

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label |
| ----- | ----- |
| Sim   | Sim   |
| Não   | Não   |

#### f_qual_apn_configurada

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| eai.br       | eai.br       |
| m2m.arqia.br | m2m.arqia.br |
| internet.br  | internet.br  |

#### f_quantidade_de_dispositivos

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor                 | Label                 |
| --------------------- | --------------------- |
| Um dispositivo        | Um dispositivo        |
| Todos os dispositivos | Todos os dispositivos |

#### f_status_do_circuito

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor   | Label   |
| ------- | ------- |
| Online  | Online  |
| Offline | Offline |

#### f_telefonia_tipo_de_problema

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor                 | Label                 |
| --------------------- | --------------------- |
| Não recebe ligações   | Não recebe ligações   |
| Não efetua ligações   | Não efetua ligações   |
| Quedas nas ligações   | Quedas nas ligações   |
| Chiado / Voz robótica | Chiado / Voz robótica |
| Mudo / Sem tom        | Mudo / Sem tom        |

#### f_tipo_de_atendimento

- **Valores:** 9
- **Total Registros:** 0
- **Status:** ⚠️

| Valor               | Label               |
| ------------------- | ------------------- |
| Lentidão            | Lentidão/Quedas     |
| Sem conexão         | Sem conexão         |
| Site específico     | Site específico     |
| Telefonia           | Telefonia           |
| Abertura de portas  | Abertura de portas  |
| Troca de nome/senha | Troca de nome/senha |
| SVA                 | SVA                 |
| MVNO                | MVNO                |
| Outro               | Outro               |

#### f_tipo_de_conexao_do_dispositivo

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor        | Label        |
| ------------ | ------------ |
| Wi-Fi        | Wi-Fi        |
| Cabo de rede | Cabo de rede |

#### f_tipo_de_problema_mvno

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor                      | Label                      |
| -------------------------- | -------------------------- |
| Não recebe ligações        | Não recebe ligações        |
| Não efetua ligações        | Não efetua ligações        |
| Dados móveis não funcionam | Dados móveis não funcionam |

#### f_torre_rede

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor     | Label     |
| --------- | --------- |
| Com sinal | Com sinal |
| Sem sinal | Sem sinal |

---

---

## Collection: t_troca_endereco

| Campo             | Count | Status | Valores       |
| ----------------- | ----- | ------ | ------------- |
| f_status          | 5     | ✅     | 1, 2, 3, 4, 0 |
| f_taxa_instalacao | 3     | ✅     | 0, 1, 2       |

### Detalhes

#### f_status

- **Valores:** 5
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label                  |
| ----- | ---------------------- |
| 1     | Atendimento Gerado     |
| 2     | Atendimento Concluído  |
| 3     | Atendimento para Campo |
| 4     | Atendimento para CR    |
| 0     | Erro na Integração     |

#### f_taxa_instalacao

- **Valores:** 3
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label               |
| ----- | ------------------- |
| 0     | Não                 |
| 1     | R$ 80,00 à vista    |
| 2     | R$ 80,00 em 2 vezes |

---

---

## Collection: t_viagem_solicitacao

| Campo             | Count | Status | Valores                                               |
| ----------------- | ----- | ------ | ----------------------------------------------------- |
| f_destino_viagem  | 9     | ⚠️     | Bocaina do Sul, Campo Belo do Sul, Capão Alto, Cer... |
| f_diaria          | 2     | ✅     | 5, 10                                                 |
| f_fase            | 4     | ✅     | Caixa de Entrada, Processamento Financeiro, Conclu... |
| f_meio_transporte | 6     | ⚠️     | Kwid ATPlus, Fiorino ATPlus, Fiorino Fhortec, Uno ... |

### Detalhes

#### f_destino_viagem

- **Valores:** 9
- **Total Registros:** 0
- **Status:** ⚠️

| Valor             | Label             |
| ----------------- | ----------------- |
| Bocaina do Sul    | Bocaina do Sul    |
| Campo Belo do Sul | Campo Belo do Sul |
| Capão Alto        | Capão Alto        |
| Cerro Negro       | Cerro Negro       |
| Correia Pinto     | Correia Pinto     |
| Curitibanos       | Curitibanos       |
| Florianópolis     | Florianópolis     |
| Painel            | Painel            |
| Outros            | Outros            |

#### f_diaria

- **Valores:** 2
- **Total Registros:** 0
- **Status:** ✅

| Valor | Label       |
| ----- | ----------- |
| 5     | 8h          |
| 10    | Acima de 8h |

#### f_fase

- **Valores:** 4
- **Total Registros:** 0
- **Status:** ✅

| Valor                    | Label                    |
| ------------------------ | ------------------------ |
| Caixa de Entrada         | Caixa de Entrada         |
| Processamento Financeiro | Processamento Financeiro |
| Concluído                | Concluído                |
| Arquivado                | Arquivado                |

#### f_meio_transporte

- **Valores:** 6
- **Total Registros:** 0
- **Status:** ⚠️

| Valor            | Label            |
| ---------------- | ---------------- |
| Kwid ATPlus      | Kwid ATPlus      |
| Fiorino ATPlus   | Fiorino ATPlus   |
| Fiorino Fhortec  | Fiorino Fhortec  |
| Uno ATPlus       | Uno ATPlus       |
| Carro Particular | Carro Particular |
| Outro            | Outro            |

---

---
