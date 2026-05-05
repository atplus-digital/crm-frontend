# Relatorio de Geracao de Tipos

**Datasource:** nocobase

## Status: Relacoes

### 12 collection(oes) com relacoes nao resolvidas

#### roles

| Campo           | Target original             |
| --------------- | --------------------------- |
| `menuUiSchemas` | `uiSchemas`                 |
| `mobileRoutes`  | `mobileRoutes`              |
| `resources`     | `dataSourcesRolesResources` |

#### t_anexos_negociacoes

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_anexos_troca_titularidade

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_arquivos_funcionarios

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_asos

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_contratos

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_foto_aniversario

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_foto_funcionarios

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_qualirun_assinatura_gov

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_solicitacao_compras

| Campo      | Target original |
| ---------- | --------------- |
| `f_anexos` | `attachments`   |

#### t_telecom_anexos

| Campo     | Target original |
| --------- | --------------- |
| `storage` | `storages`      |

#### t_viagem_solicitacao

| Campo      | Target original |
| ---------- | --------------- |
| `f_anexos` | `attachments`   |

## Status: Collections Split

### 109 collection(oes) nao splitada(s)

| Collection                            |
| ------------------------------------- |
| `colaboradores_do_setor`              |
| `colaboradores_x_setor`               |
| `departments`                         |
| `eventos_demanda`                     |
| `f_contatos`                          |
| `f_fk_origem_tipos`                   |
| `f_funcionarios`                      |
| `f_recursos_filho`                    |
| `interfaces_equipamentos`             |
| `links_indicadores_usuarios`          |
| `origem_x_tipos`                      |
| `roles`                               |
| `t_3advfk0gv0z`                       |
| `t_902ctke5dhq`                       |
| `t_acessos`                           |
| `t_aegis`                             |
| `t_anexos_negociacoes`                |
| `t_anexos_troca_titularidade`         |
| `t_aniversarios`                      |
| `t_arquivos_funcionarios`             |
| `t_asos`                              |
| `t_atendimentos_ixc`                  |
| `t_auditoria_automatica`              |
| `t_cabos_opticos`                     |
| `t_cargos`                            |
| `t_comentario_viagem`                 |
| `t_comentarios_compras`               |
| `t_compras_fornecedores`              |
| `t_compras_produtos`                  |
| `t_configuracoes`                     |
| `t_consultas_pf`                      |
| `t_consultas_pj`                      |
| `t_contrato_ixc_itens`                |
| `t_contratos`                         |
| `t_contratos_ixc`                     |
| `t_cupons_desconto`                   |
| `t_dados_adicionais_cliente_contrato` |
| `t_datacenter_memorias`               |
| `t_dc_servidores`                     |
| `t_demandas_viabilidades`             |
| `t_departamentos`                     |
| `t_discos`                            |
| `t_equipamentos`                      |
| `t_equipamentos_em_predios`           |
| `t_facilidade`                        |
| `t_fornecedores_telecom`              |
| `t_foto_aniversario`                  |
| `t_foto_funcionarios`                 |
| `t_historico`                         |
| `t_ij93gv1hx9m`                       |
| `t_info_arquivos`                     |
| `t_info_aso`                          |
| `t_itens_pacotes`                     |
| `t_lancamentos_ferias`                |
| `t_linha_corporativa`                 |
| `t_logs`                              |
| `t_logs_cargos`                       |
| `t_muu3vsavv3h`                       |
| `t_na4eifobesz`                       |
| `t_negociacoes_comentarios`           |
| `t_negociacoes_itens`                 |
| `t_nukww9tmq83`                       |
| `t_oe_qualirun`                       |
| `t_opcoes_smp`                        |
| `t_opcoes_smp_template`               |
| `t_opcoes_stfc`                       |
| `t_opcoes_stfc_template`              |
| `t_p10scfhrhkw`                       |
| `t_pacotes`                           |
| `t_parentesco`                        |
| `t_patrimonio`                        |
| `t_periodos_ferias`                   |
| `t_produtos`                          |
| `t_qualirun_assinatura_gov`           |
| `t_qualirun_info_adicionais`          |
| `t_qualirun_processos`                |
| `t_recursos_viagem`                   |
| `t_rguxtr9p91d`                       |
| `t_servicos`                          |
| `t_servicos_x_servicos`               |
| `t_setor`                             |
| `t_sistemas_acessos`                  |
| `t_sites`                             |
| `t_siurxeb1juy`                       |
| `t_solicitacao_compras`               |
| `t_tabela_geral`                      |
| `t_telecom_anexos`                    |
| `t_telecom_colocation_opcoes`         |
| `t_telecom_contratos`                 |
| `t_telecom_fila`                      |
| `t_telecom_interfaces`                |
| `t_telecom_ips_fixos`                 |
| `t_telecom_opcoes_l2l`                |
| `t_telecom_racks`                     |
| `t_telecom_recursos`                  |
| `t_telecom_salas`                     |
| `t_telecom_transito_opcoes`           |
| `t_templates_atendimento_n1`          |
| `t_trocasdetitularidade_comentarios`  |
| `t_turnos`                            |
| `t_utili_cabos`                       |
| `t_viagem_solicitacao`                |
| `t_vlan_tags`                         |
| `t_ynltolqbwj1`                       |
| `t_zapsign`                           |
| `templates_x_ordens_de_servico`       |
| `tipo_x_templates`                    |
| `vendedor_cupons`                     |
| `vw_mermaid_por_servico`              |

```ts
// Cole este array no splitCollections:
[
  "colaboradores_do_setor",
  "colaboradores_x_setor",
  "departments",
  "eventos_demanda",
  "f_contatos",
  "f_fk_origem_tipos",
  "f_funcionarios",
  "f_recursos_filho",
  "interfaces_equipamentos",
  "links_indicadores_usuarios",
  "origem_x_tipos",
  "roles",
  "t_3advfk0gv0z",
  "t_902ctke5dhq",
  "t_acessos",
  "t_aegis",
  "t_anexos_negociacoes",
  "t_anexos_troca_titularidade",
  "t_aniversarios",
  "t_arquivos_funcionarios",
  "t_asos",
  "t_atendimentos_ixc",
  "t_auditoria_automatica",
  "t_cabos_opticos",
  "t_cargos",
  "t_comentario_viagem",
  "t_comentarios_compras",
  "t_compras_fornecedores",
  "t_compras_produtos",
  "t_configuracoes",
  "t_consultas_pf",
  "t_consultas_pj",
  "t_contrato_ixc_itens",
  "t_contratos",
  "t_contratos_ixc",
  "t_cupons_desconto",
  "t_dados_adicionais_cliente_contrato",
  "t_datacenter_memorias",
  "t_dc_servidores",
  "t_demandas_viabilidades",
  "t_departamentos",
  "t_discos",
  "t_equipamentos",
  "t_equipamentos_em_predios",
  "t_facilidade",
  "t_fornecedores_telecom",
  "t_foto_aniversario",
  "t_foto_funcionarios",
  "t_historico",
  "t_ij93gv1hx9m",
  "t_info_arquivos",
  "t_info_aso",
  "t_itens_pacotes",
  "t_lancamentos_ferias",
  "t_linha_corporativa",
  "t_logs",
  "t_logs_cargos",
  "t_muu3vsavv3h",
  "t_na4eifobesz",
  "t_negociacoes_comentarios",
  "t_negociacoes_itens",
  "t_nukww9tmq83",
  "t_oe_qualirun",
  "t_opcoes_smp",
  "t_opcoes_smp_template",
  "t_opcoes_stfc",
  "t_opcoes_stfc_template",
  "t_p10scfhrhkw",
  "t_pacotes",
  "t_parentesco",
  "t_patrimonio",
  "t_periodos_ferias",
  "t_produtos",
  "t_qualirun_assinatura_gov",
  "t_qualirun_info_adicionais",
  "t_qualirun_processos",
  "t_recursos_viagem",
  "t_rguxtr9p91d",
  "t_servicos",
  "t_servicos_x_servicos",
  "t_setor",
  "t_sistemas_acessos",
  "t_sites",
  "t_siurxeb1juy",
  "t_solicitacao_compras",
  "t_tabela_geral",
  "t_telecom_anexos",
  "t_telecom_colocation_opcoes",
  "t_telecom_contratos",
  "t_telecom_fila",
  "t_telecom_interfaces",
  "t_telecom_ips_fixos",
  "t_telecom_opcoes_l2l",
  "t_telecom_racks",
  "t_telecom_recursos",
  "t_telecom_salas",
  "t_telecom_transito_opcoes",
  "t_templates_atendimento_n1",
  "t_trocasdetitularidade_comentarios",
  "t_turnos",
  "t_utili_cabos",
  "t_viagem_solicitacao",
  "t_vlan_tags",
  "t_ynltolqbwj1",
  "t_zapsign",
  "templates_x_ordens_de_servico",
  "tipo_x_templates",
  "vendedor_cupons",
  "vw_mermaid_por_servico",
];
```
