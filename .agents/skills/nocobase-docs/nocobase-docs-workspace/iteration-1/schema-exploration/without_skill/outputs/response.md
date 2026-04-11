# NocoBase Schema Exploration

## Task
What collections exist in our NocoBase instance and what fields does the `t_pessoas` collection have?

---

## Commands Run

### 1. List all collections
```bash
curl -s -X GET "https://crm.atplus.cloud/api/collections:list?paginate=false" \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Accept: application/json"
```

### 2. Get t_pessoas collection schema via Swagger
```bash
curl -s -X GET "https://crm.atplus.cloud/api/swagger:get?ns=collections%2Ft_pessoas" \
  -H "Authorization: Bearer <TOKEN>" \
  -H "Accept: application/json"
```

---

## Collections Found

The NocoBase instance contains **116 collections**. Here are all of them (non-hidden, visible collections only):

| # | Collection Name | Title |
|---|----------------|-------|
| 1 | t_negociacoes_comentarios | Comentários Negociações |
| 2 | f_contatos | Telecom Contatos |
| 3 | t_suspensao_contrato | Suspensão de Contrato |
| 4 | t_empresas | Pessoas (PJ) |
| 5 | t_compras_produtos | Compras Produtos |
| 6 | t_telecom_recursos | Telecom Recursos |
| 7 | t_periodos_ferias | Períodos de Férias |
| 8 | t_equipamentos | Equipamentos |
| 9 | vw_mermaid_por_servico | vw_mermaid_por_servico |
| 10 | **t_pessoas** | **Pessoas (PF)** |
| 11 | t_dc_servidores | Servidores |
| 12 | t_dados_adicionais_cliente_contrato | Dados Adicionais Cliente (Contrato) |
| 13 | t_telecom_transito_opcoes | Opções Transito IP |
| 14 | t_telecom_contratos | Telecom Contratos |
| 15 | t_negociacoes | Negociações |
| 16 | t_opcoes_smp_template | Opções SMP Template |
| 17 | t_discos | Discos |
| 18 | t_info_arquivos | Informação dos Arquivos (Funcionários) |
| 19 | t_arquivos_funcionarios | Arquivos Funcionários |
| 20 | t_contratos | Contratos |
| 21 | t_comentarios_compras | Comentários de Compras |
| 22 | t_linha_corporativa | Linha Corporativa (Funcionários) |
| 23 | t_produtos | Produtos |
| 24 | t_atendimentos_ixc | Atendimentos IXC |
| 25 | t_telecom_interfaces | Telecom Interfaces |
| 26 | t_comentario_viagem | Comentários de Viagem |
| 27 | t_opcoes_stfc | Opções STFC |
| 28 | t_sistemas_acessos | Sistemas / Acessos |
| 29 | t_pacotes | Pacotes |
| 30 | t_trocasdetitularidade_comentarios | Comentários Trocas de Titularidade |
| 31 | t_telecom_anexos | Telecom Anexos |
| 32 | t_contratos_ixc | Contratos IXC |
| 33 | t_acessos | Telecom - Acessos |
| 34 | t_aegis | Área Aegis |
| 35 | t_opcoes_smp | Opções SMP |
| 36 | t_logs_cargos | LOGs Cargos (Funcionários) |
| 37 | t_anexos_negociacoes | Anexos Negociações |
| 38 | t_facilidade | Telecom Facilidades |
| 39 | t_parentesco | Parentesco |
| 40 | t_equipamentos_em_predios | Equipamentos em Prédios |
| 41 | t_consultas_pf | Consultas de Credito PF |
| 42 | t_telecom_colocation_opcoes | Opções Colocation |
| 43 | t_cupons_desconto | Cupons de Desconto |
| 44 | t_lancamentos_ferias | Lançamentos de Férias |
| 45 | t_contrato_ixc_itens | Itens Contrato IXC |
| 46 | t_zapsign | ZapSign |
| 47 | t_tabela_geral | Tabela Geral |
| 48 | t_troca_endereco | Troca de Endereço |
| 49 | t_telecom_opcoes_l2l | Opções L2L |
| 50 | t_info_aso | Informação do Atestado de Saúde Ocupacional (Funcionários) |
| 51 | f_funcionarios | Funcionários |
| 52 | t_templates_atendimento_n1 | Templates Atendimento N1 |
| 53 | t_demandas_viabilidades | Demandas - Viabilidades |
| 54 | users | Users |
| 55 | t_cargos | Cargos (Funcionários) |
| 56 | t_telecom_ips_fixos | Telecom IPs Fixos |
| 57 | t_asos | Atestado de Saúde Ocupacional (Funcionários) |
| 58 | t_vlan_tags | Tags de Vlan |
| 59 | t_comentarios_suspensao_de_contrato | Comentários Suspensão de Contrato |
| 60 | t_recursos_viagem | Recursos de Viagem |
| 61 | t_negociacoes_itens | Itens da Negociação |
| 62 | departments | Departments |
| 63 | t_compras_fornecedores | Compras Fornecedores |
| 64 | t_patrimonio | Patrimônio Funcionários |
| 65 | t_telecom_racks | Telecom Racks |
| 66 | t_logs | Logs |
| 67 | t_turnos | Turnos (Funcionários) |
| 68 | t_opcoes_stfc_template | Opções STFC Template |
| 69 | t_telecom_fila | Telecom Fila |
| 70 | t_solicitacao_compras | Solicitação de Compras |
| 71 | t_departamentos | Departamentos (Funcionários) |
| 72 | t_crm_troca_titularidade | Troca de Titularidade |
| 73 | t_foto_funcionarios | Foto |
| 74 | t_viagem_solicitacao | Solicitação de Viagem |
| 75 | t_configuracoes | Configurações do Sistema |
| 76 | t_sites | Sites |
| 77 | t_setor | Setor |
| 78 | t_itens_pacotes | Itens dos Pacotes |
| 79 | roles | Roles |
| 80 | t_qualirun_assinatura_gov | Arquivos QualiRun - Assinatura GOV |
| 81 | t_fornecedores_telecom | Empresas Telecom |
| 82 | t_qualirun_info_adicionais | QualiRun - Informações Adicionais |
| 83 | t_datacenter_memorias | Memorias |
| 84 | t_telecom_salas | Telecom Salas |
| 85 | t_auditoria_automatica | Auditoria Automática |
| 86 | t_anexos_troca_titularidade | Anexos Troca de Titularidade |
| 87 | t_servicos | Telecom Serviços |
| 88 | t_registros_de_contato | Contratos - Registros de Contato |
| 89 | t_qualirun_processos | QualiRun - Processos |

Plus additional hidden/junction tables (through tables and internal collections).

---

## t_pessoas Collection Fields

The `t_pessoas` collection (title: **"Pessoas (PF)"**) represents **Pessoas Físicas** (physical persons / individuals).

### Fields

| Field Name | Type | Format | Description |
|------------|------|--------|-------------|
| `id` | integer | int64 | Primary key |
| `f_nome` | string | - | Name |
| `f_cpf` | string | - | CPF number (Brazilian individual taxpayer registry) |
| `f_data_nascimento` | string | - | Date of birth |
| `f_sexo` | string | - | Gender/Sex |
| `f_credito` | string | - | Credit information |
| `f_analise_ixc` | string | - | IXC analysis |
| `f_vky78cvjtdw` | integer | int64 | Unknown field (internal) |
| `createdAt` | string | date-time | Creation timestamp |
| `updatedAt` | string | date-time | Last update timestamp |
| `createdById` | integer | int64 | ID of user who created the record |
| `updatedById` | integer | int64 | ID of user who last updated the record |

### API Endpoints for t_pessoas

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/t_pessoas:list` | List all records (supports pagination, filtering, sorting) |
| GET | `/t_pessoas:get` | Get a single record by ID |
| POST | `/t_pessoas:create` | Create a new record |
| POST | `/t_pessoas:update` | Update a record |
| POST | `/t_pessoas:destroy` | Delete a record |

---

## Output Summary

- **Total Collections**: 116
- **t_pessoas** represents **Pessoas Físicas (PF)** - physical persons
- **t_pessoas** has **12 fields** (including system fields like `id`, `createdAt`, `updatedAt`, `createdById`, `updatedById`)
- **Custom/person-specific fields**: `f_nome`, `f_cpf`, `f_data_nascimento`, `f_sexo`, `f_credito`, `f_analise_ixc`, `f_vky78cvjtdw`

---

*Generated: 2026-04-10*
