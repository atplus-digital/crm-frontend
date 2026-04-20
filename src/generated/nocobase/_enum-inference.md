# Relatório de Inferência de Enums

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

| Campo                     | Origem | Count | Status | Valores                                               |
| ------------------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_ativo                   | API    | 2     | ✅     | Sim, Não                                              |
| f_checklist_admissional   | API    | 10    | ⚠️     | aso-admissional, rg, e-cnh, comprovante-residencia... |
| f_empresa                 | API    | 2     | ✅     | ATPlus, Platon                                        |
| f_epi_calcado             | API    | 10    | ⚠️     | 35, 36, 37, 38, 39, 40, 41, 42, 43, 44                |
| f_escolaridade            | API    | 5     | ✅     | Ensino Médio, Superior, Pós, MBA, Mestrado, Doutor... |
| f_estado_civil            | API    | 6     | ⚠️     | Solteiro, Casado, União Estável, Viúvo, Divorciado... |
| f_genero                  | API    | 2     | ✅     | Masculino, Feminino                                   |
| f_mobilidade              | API    | 2     | ✅     | Vale Transporte (Transul), Mobilidade (Cartão Bene... |
| f_pcd                     | API    | 2     | ✅     | Sim, Não                                              |
| f_reservista              | API    | 2     | ✅     | Sim, Não                                              |
| f_situacao_escolaridade   | API    | 3     | ✅     | Completo, Cursando, Trancado                          |
| f_terceiro                | API    | 2     | ✅     | Sim, Não                                              |
| f_tipo_contrato           | API    | 7     | ⚠️     | CLT, Prestador de Serviços, Estagiário, Jovem Apre... |
| f_unidade                 | API    | 4     | ✅     | Matriz, Loja Centro Lages, Loja Curitibanos, Plato... |
| f_universidade            | API    | 5     | ✅     | IFSC, UNIPLAC, CIEE, UNIFACVEST, Outros               |
| f_vinculo_com_colaborador | API    | 4     | ✅     | Pais, Filho(a) ou Enteado(a), Avós, Conjuge           |

---

---

## Collection: t_acessos

| Campo  | Origem | Count | Status | Valores |
| ------ | ------ | ----- | ------ | ------- |
| f_tipo | API    | 3     | ✅     | 1, 2, 3 |

---

---

## Collection: t_aegis

| Campo                       | Origem | Count | Status | Valores        |
| --------------------------- | ------ | ----- | ------ | -------------- |
| f_statusdesbloqueioconfiaca | API    | 2     | ✅     | success, error |
| f_statuslogin               | API    | 2     | ✅     | success, error |
| f_statusmac                 | API    | 2     | ✅     | success, error |

---

---

## Collection: t_aniversarios

| Campo    | Origem | Count | Status | Valores                            |
| -------- | ------ | ----- | ------ | ---------------------------------- |
| f_status | API    | 4     | ✅     | novo, em-processo, concluido, erro |

---

---

## Collection: t_atendimentos_ixc

| Campo          | Origem | Count | Status     | Valores                                               |
| -------------- | ------ | ----- | ---------- | ----------------------------------------------------- |
| f_assunto      | API    | 4     | ✅         | 88, 89, 90, 78                                        |
| f_diagnosticos | API    | 26    | ❓ Avaliar | 95, 96, 97, 99, 100, 101, 105, 106, 107, 110, 111,... |
| f_prioridade   | API    | 4     | ✅         | B, N, A, C                                            |
| f_processo     | API    | 4     | ✅         | 33, 36, 34, 40                                        |
| f_tarefas      | API    | 32    | ❓ Avaliar | 158, 159, 160, 164, 382, 412, 305, 306, 307, 311, ... |

---

---

## Collection: t_configuracoes

| Campo    | Origem | Count | Status | Valores                  |
| -------- | ------ | ----- | ------ | ------------------------ |
| f_escopo | API    | 4     | ✅     | IXC, GERAL, SPC, ZAPSIGN |

---

---

## Collection: t_consultas_pf

| Campo             | Origem | Count | Status | Valores |
| ----------------- | ------ | ----- | ------ | ------- |
| f_status_consulta | API    | 3     | ✅     | 1, 2, 9 |

---

---

## Collection: t_consultas_pj

| Campo             | Origem | Count | Status | Valores |
| ----------------- | ------ | ----- | ------ | ------- |
| f_status_consulta | API    | 3     | ✅     | 1, 2, 9 |

---

---

## Collection: t_crm_troca_titularidade

| Campo         | Origem | Count | Status | Valores                                  |
| ------------- | ------ | ----- | ------ | ---------------------------------------- |
| f_complemento | API    | 4     | ✅     | Casa, Apartamento, Condominio, Comercial |
| f_estado      | API    | 1     | ✅     | SC                                       |
| f_status      | API    | 5     | ✅     | 0, 1, 2, 3, 9                            |
| f_substatus   | API    | 7     | ⚠️     | 0, 1, 2, 3, 4, 5, 6                      |
| f_tipo_pessoa | API    | 2     | ✅     | PF, PJ                                   |

---

---

## Collection: t_cupons_desconto

| Campo             | Origem | Count | Status | Valores    |
| ----------------- | ------ | ----- | ------ | ---------- |
| f_status          | API    | 2     | ✅     | 0, 1       |
| f_tipo            | API    | 4     | ✅     | 1, 2, 3, 4 |
| f_tipo_negociacao | API    | 3     | ✅     | 1, 2, S    |

---

---

## Collection: t_dados_adicionais_cliente_contrato

| Campo                | Origem | Count | Status | Valores                                      |
| -------------------- | ------ | ----- | ------ | -------------------------------------------- |
| f_forma_de_pagamento | API    | 3     | ✅     | carne, boleto, recorrencia                   |
| f_perfil_de_uso      | API    | 5     | ✅     | trabalho, estudo, jogos, streaming, pesquisa |

---

---

## Collection: t_datacenter_memorias

| Campo        | Origem | Count | Status | Valores                  |
| ------------ | ------ | ----- | ------ | ------------------------ |
| f_capacidade | API    | 7     | ⚠️     | 2, 4, 8, 16, 32, 64, 128 |
| f_status     | API    | 4     | ✅     | 0, 1, 2, 3               |
| f_tipo       | API    | 3     | ✅     | 3, 4, 2                  |

---

---

## Collection: t_dc_servidores

| Campo        | Origem | Count | Status | Valores       |
| ------------ | ------ | ----- | ------ | ------------- |
| f_fabricante | API    | 5     | ✅     | 1, 2, 3, 4, 5 |
| f_status     | API    | 4     | ✅     | 1, 2, 3, 4    |

---

---

## Collection: t_demandas_viabilidades

| Campo                | Origem | Count | Status | Valores |
| -------------------- | ------ | ----- | ------ | ------- |
| f_forma_atendimento  | API    | 2     | ✅     | 1, 2    |
| f_servico_pretendido | API    | 2     | ✅     | 1, 2    |
| f_status             | API    | 3     | ✅     | 1, 2, 3 |

---

---

## Collection: t_discos

| Campo        | Origem | Count | Status     | Valores                               |
| ------------ | ------ | ----- | ---------- | ------------------------------------- |
| f_capacidade | API    | 12    | ❓ Avaliar | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 |
| f_tipo       | API    | 6     | ⚠️         | 1, 2, 3, 4, 5, 6                      |

---

---

## Collection: t_empresas

| Campo         | Origem | Count | Status | Valores |
| ------------- | ------ | ----- | ------ | ------- |
| f_analise_ixc | API    | 2     | ✅     | 0, 1    |
| f_credito     | API    | 3     | ✅     | 1, 2, 9 |

---

---

## Collection: t_info_arquivos

| Campo             | Origem | Count | Status | Valores  |
| ----------------- | ------ | ----- | ------ | -------- |
| f_arquivo_externo | API    | 2     | ✅     | sim, não |

---

---

## Collection: t_info_aso

| Campo        | Origem | Count | Status | Valores                                               |
| ------------ | ------ | ----- | ------ | ----------------------------------------------------- |
| f_informado  | API    | 2     | ✅     | nao, sim                                              |
| f_tipo_exame | API    | 6     | ⚠️     | exame-admissional, exame-periodico, atestado-medic... |

---

---

## Collection: t_itens_pacotes

| Campo          | Origem | Count | Status | Valores                       |
| -------------- | ------ | ----- | ------ | ----------------------------- |
| f_tipo_ixc     | API    | 6     | ⚠️     | I, SMP, TV, S, T, SVA         |
| f_tipo_produto | API    | 5     | ✅     | SVA, INTERNET, STFC, MVNO, TV |

---

---

## Collection: t_lancamentos_ferias

| Campo    | Origem | Count | Status | Valores                                               |
| -------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_status | API    | 5     | ✅     | cancelada, planejada, em-andamento, aprovada, conc... |

---

---

## Collection: t_linha_corporativa

| Campo  | Origem | Count | Status | Valores |
| ------ | ------ | ----- | ------ | ------- |
| f_tipo | API    | 2     | ✅     | 1, 2    |

---

---

## Collection: t_logs

| Campo       | Origem | Count | Status | Valores                     |
| ----------- | ------ | ----- | ------ | --------------------------- |
| f_log_level | API    | 4     | ✅     | info, warning, alert, error |

---

---

## Collection: t_negociacoes

| Campo                  | Origem | Count | Status     | Valores                                               |
| ---------------------- | ------ | ----- | ---------- | ----------------------------------------------------- |
| f_confissao_divida     | API    | 2     | ✅         | Nao, Sim                                              |
| f_data_vencimento      | API    | 6     | ⚠️         | 1, 5, 10, 15, 20, 25                                  |
| f_endereco_cobranca    | API    | 2     | ✅         | 0, 1                                                  |
| f_endereco_complemento | API    | 4     | ✅         | Casa, Apartamento, Condominio, Comercial              |
| f_fidelidade           | API    | 6     | ⚠️         | 0, 12, 24, 36, 48, 60                                 |
| f_motivo               | API    | 10    | ⚠️         | I, M, D, U, N, R, T, L, S, P                          |
| f_motivo_pontos        | API    | 6     | ⚠️         | cep, endereco, numero, telefone, telefone-adc, ema... |
| f_pontos_atencao       | API    | 7     | ⚠️         | 0, 1, 2, 3, 4, 5, 6                                   |
| f_status               | API    | 6     | ⚠️         | 1, 2, 3, 4, 5, 6                                      |
| f_substatus            | API    | 13    | ❓ Avaliar | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13             |
| f_tipo_pessoa          | API    | 2     | ✅         | PF, PJ                                                |

---

---

## Collection: t_negociacoes_comentarios

| Campo                    | Origem | Count | Status | Valores    |
| ------------------------ | ------ | ----- | ------ | ---------- |
| f_insere_atendimento_ixc | API    | 2     | ✅     | 0, 1       |
| f_setor_para_obs         | API    | 4     | ✅     | 1, 2, 3, 4 |

---

---

## Collection: t_negociacoes_itens

| Campo          | Origem | Count | Status | Valores                       |
| -------------- | ------ | ----- | ------ | ----------------------------- |
| f_relacao      | API    | 2     | ✅     | COMBO, ADICIONAL              |
| f_tipo_produto | API    | 5     | ✅     | SVA, INTERNET, STFC, MVNO, TV |

---

---

## Collection: t_oe_qualirun

| Campo          | Origem | Count | Status | Valores                              |
| -------------- | ------ | ----- | ------ | ------------------------------------ |
| f_procedimento | API    | 1     | ✅     | 17760523-1404-4ff9-b786-15a4b0d7a3e2 |
| f_status       | API    | 4     | ✅     | cancelado, novo, pendente, concluido |

---

---

## Collection: t_opcoes_smp

| Campo           | Origem | Count | Status | Valores |
| --------------- | ------ | ----- | ------ | ------- |
| f_portabilidade | API    | 2     | ✅     | 0, 1    |

---

---

## Collection: t_opcoes_stfc

| Campo           | Origem | Count | Status | Valores  |
| --------------- | ------ | ----- | ------ | -------- |
| f_portabilidade | API    | 2     | ✅     | SIM, NAO |

---

---

## Collection: t_opcoes_stfc_template

| Campo           | Origem | Count | Status | Valores |
| --------------- | ------ | ----- | ------ | ------- |
| f_portabilidade | API    | 2     | ✅     | 0, 1    |

---

---

## Collection: t_pacotes

| Campo              | Origem | Count | Status | Valores |
| ------------------ | ------ | ----- | ------ | ------- |
| f_abre_atendimento | API    | 2     | ✅     | 0, 1    |
| f_pacote_adicional | API    | 2     | ✅     | 0, 1    |
| f_pacote_principal | API    | 2     | ✅     | 0, 1    |
| f_status           | API    | 2     | ✅     | 1, 2    |
| f_vender_para      | API    | 2     | ✅     | PF, PJ  |

---

---

## Collection: t_patrimonio

| Campo             | Origem | Count | Status | Valores                                               |
| ----------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_estado_uso      | API    | 3     | ✅     | NOVO, USADO, EM ESTADO DE NOVO, USADO, COM MARCAS ... |
| f_tipo_patrimonio | API    | 1     | ✅     | 1                                                     |

---

---

## Collection: t_periodos_ferias

| Campo            | Origem | Count | Status | Valores                                               |
| ---------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_status_periodo | API    | 5     | ✅     | cancelada, planejada, em-andamento, aprovada, conc... |

---

---

## Collection: t_pessoas

| Campo         | Origem | Count | Status       | Valores                   |
| ------------- | ------ | ----- | ------------ | ------------------------- |
| f_analise_ixc | API    | 2     | ✅           | 0, 1                      |
| f_credito     | API    | 3     | ✅           | 1, 2, 9                   |
| f_sexo        | API    | 4     | ⚠️ Duplicado | M, F, MASCULINO, FEMININO |

---

---

## Collection: t_produtos

| Campo          | Origem | Count | Status | Valores                       |
| -------------- | ------ | ----- | ------ | ----------------------------- |
| f_tipo_ixc     | API    | 6     | ⚠️     | I, SMP, TV, S, T, SVA         |
| f_tipo_produto | API    | 5     | ✅     | SVA, INTERNET, STFC, MVNO, TV |

---

---

## Collection: t_qualirun_info_adicionais

| Campo                        | Origem | Count | Status | Valores                                               |
| ---------------------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_grau_escolaridade          | API    | 5     | ✅     | Ensino Médio, Superior, Pós, MBA, Mestrado, Doutor... |
| f_situacao_curso             | API    | 3     | ✅     | Trancado, Cursando, Completo                          |
| f_status                     | API    | 3     | ✅     | recusado, aprovado, aguardando                        |
| f_vinculo_contato_emergencia | API    | 4     | ✅     | Pais, Filho(a) ou Enteado(a), Avós, Conjuge           |

---

---

## Collection: t_qualirun_processos

| Campo                      | Origem | Count | Status | Valores                                               |
| -------------------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_detalhes_procedimento    | API    | 2     | ✅     | 1, 2                                                  |
| f_id_procedimento_qualirun | API    | 2     | ✅     | c03f166d-a4d7-42b7-ae73-a4c287e171ac, 0a3d75b4-290... |
| f_procedimento             | API    | 2     | ✅     | complemento-informacoes-documentos, confidencialid... |
| f_status                   | API    | 4     | ✅     | novo, pendente, concluido, cancelado                  |

---

---

## Collection: t_recursos_viagem

| Campo             | Origem | Count | Status       | Valores    |
| ----------------- | ------ | ----- | ------------ | ---------- |
| f_destino_viagem  | API    | 3     | ⚠️ Duplicado | 1, 2, 3    |
| f_meio_transporte | API    | 4     | ✅           | 1, 2, 3, 4 |

---

---

## Collection: t_registros_de_contato

| Campo          | Origem | Count | Status | Valores                            |
| -------------- | ------ | ----- | ------ | ---------------------------------- |
| f_categoria    | API    | 3     | ✅     | pos-venda, pre-venda, cancelamento |
| f_nota_tecnico | API    | 6     | ⚠️     | 0, 1, 2, 3, 4, 5                   |
| f_nota_vendas  | API    | 6     | ⚠️     | 0, 1, 2, 3, 4, 5                   |

---

---

## Collection: t_servicos

| Campo    | Origem | Count | Status | Valores          |
| -------- | ------ | ----- | ------ | ---------------- |
| f_status | API    | 3     | ✅     | 0, 1, 2          |
| f_tipo   | API    | 6     | ⚠️     | 1, 2, 3, 4, 5, 6 |

---

---

## Collection: t_sites

| Campo    | Origem | Count | Status | Valores                               |
| -------- | ------ | ----- | ------ | ------------------------------------- |
| f_status | API    | 3     | ✅     | repnmsclnb8, x2lk2z9p2ds, qw3vjvimoae |
| f_tipo   | API    | 3     | ✅     | 1, 2, 3                               |

---

---

## Collection: t_solicitacao_compras

| Campo                 | Origem | Count | Status     | Valores                                               |
| --------------------- | ------ | ----- | ---------- | ----------------------------------------------------- |
| f_categoria           | API    | 2     | ✅         | Produto, Serviço                                      |
| f_departamento        | API    | 13    | ❓ Avaliar | Almox, Comercial, Financeiro, Infraestrutura, Labo... |
| f_metodo_de_pagamento | API    | 4     | ✅         | Á definir, Pix, Boleto, Cartão                        |
| f_prazo               | API    | 14    | ❓ Avaliar | 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14         |
| f_status              | API    | 8     | ⚠️         | Caixa de Entrada, Aprovação da Gestão, Pedido de C... |
| f_tipo                | API    | 2     | ✅         | 1, 2                                                  |

---

---

## Collection: t_suspensao_contrato

| Campo    | Origem | Count | Status | Valores       |
| -------- | ------ | ----- | ------ | ------------- |
| f_status | API    | 5     | ✅     | 0, 1, 2, 3, 4 |

---

---

## Collection: t_telecom_colocation_opcoes

| Campo     | Origem | Count | Status | Valores                               |
| --------- | ------ | ----- | ------ | ------------------------------------- |
| f_energia | API    | 3     | ✅     | 0nqbw68srah, e5b3lklfpq4, mra46p506xo |

---

---

## Collection: t_telecom_interfaces

| Campo          | Origem | Count | Status | Valores             |
| -------------- | ------ | ----- | ------ | ------------------- |
| f_configuracao | API    | 3     | ✅     | 1, 2, 3             |
| f_tipo         | API    | 7     | ⚠️     | 1, 3, 2, 4, 5, 6, 7 |

---

---

## Collection: t_telecom_ips_fixos

| Campo            | Origem | Count | Status | Valores |
| ---------------- | ------ | ----- | ------ | ------- |
| f_possui_ip_fixo | API    | 2     | ✅     | 0, 1    |

---

---

## Collection: t_telecom_recursos

| Campo        | Origem | Count | Status     | Valores                                       |
| ------------ | ------ | ----- | ---------- | --------------------------------------------- |
| f_finalidade | API    | 4     | ✅         | 3, 2, 4, 1                                    |
| f_status     | API    | 3     | ✅         | 1, 2, 3                                       |
| f_tipo       | API    | 14    | ❓ Avaliar | 1, 13, 6, 4, 2, 7, 5, 8, 3, 9, 10, 11, 12, 14 |

---

---

## Collection: t_templates_atendimento_n1

| Campo                            | Origem | Count | Status | Valores                                               |
| -------------------------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_acessa_pela_rede_da_atplus     | API    | 2     | ✅     | Sim, Não                                              |
| f_alteracoes                     | API    | 3     | ✅     | Somente o nome, Somente a senha, Nome e senha         |
| f_aplicativo                     | API    | 7     | ⚠️     | Deezer, Watch BR, Paramount+, HBO Max, Via Livros,... |
| f_aplicativo_especifico          | API    | 2     | ✅     | Sim, Não                                              |
| f_apn_preenchida                 | API    | 3     | ✅     | Sim, Não, Não soube dizer                             |
| f_fabricante                     | API    | 6     | ⚠️     | Samsung, Apple, Motorola, Xiomi, Asus, Outro          |
| f_los                            | API    | 2     | ✅     | Sim, Não                                              |
| f_qual_apn_configurada           | API    | 3     | ✅     | eai.br, m2m.arqia.br, internet.br                     |
| f_quantidade_de_dispositivos     | API    | 2     | ✅     | Um dispositivo, Todos os dispositivos                 |
| f_status_do_circuito             | API    | 2     | ✅     | Online, Offline                                       |
| f_telefonia_tipo_de_problema     | API    | 5     | ✅     | Não recebe ligações, Não efetua ligações, Quedas n... |
| f_tipo_de_atendimento            | API    | 9     | ⚠️     | Lentidão, Sem conexão, Site específico, Telefonia,... |
| f_tipo_de_conexao_do_dispositivo | API    | 2     | ✅     | Wi-Fi, Cabo de rede                                   |
| f_tipo_de_problema_mvno          | API    | 3     | ✅     | Não recebe ligações, Não efetua ligações, Dados mó... |
| f_torre_rede                     | API    | 2     | ✅     | Com sinal, Sem sinal                                  |

---

---

## Collection: t_troca_endereco

| Campo             | Origem | Count | Status | Valores       |
| ----------------- | ------ | ----- | ------ | ------------- |
| f_status          | API    | 5     | ✅     | 1, 2, 3, 4, 0 |
| f_taxa_instalacao | API    | 3     | ✅     | 0, 1, 2       |

---

---

## Collection: t_viagem_solicitacao

| Campo             | Origem | Count | Status | Valores                                               |
| ----------------- | ------ | ----- | ------ | ----------------------------------------------------- |
| f_destino_viagem  | API    | 9     | ⚠️     | Bocaina do Sul, Campo Belo do Sul, Capão Alto, Cer... |
| f_diaria          | API    | 2     | ✅     | 5, 10                                                 |
| f_fase            | API    | 4     | ✅     | Caixa de Entrada, Processamento Financeiro, Conclu... |
| f_meio_transporte | API    | 6     | ⚠️     | Kwid ATPlus, Fiorino ATPlus, Fiorino Fhortec, Uno ... |

---

---
