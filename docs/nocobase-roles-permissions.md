# NocoBase Roles, Routes e Permissões - CRM AT+

**Última atualização:** 2026-04-14
**Fonte:** API NocoBase (crm.atplus.cloud/api)

---

## 📋 Visão Geral

Este documento descreve todas as roles configuradas no NocoBase, suas permissões de ações, snippets de acesso, e rotas de menu (desktop e mobile) disponíveis para cada role.

---

## 🎯 Resumo das Roles

| Nome da Role                     | Título                                | Ações Padrão                                                     | Snippets                | Menu Mobile | Menu Admin | Default | Descrição                |
| -------------------------------- | ------------------------------------- | ---------------------------------------------------------------- | ----------------------- | ----------- | ---------- | ------- | ------------------------ |
| `admin`                          | {{t("Admin")}}                        | create, view, update, destroy, export, importXlsx, templatePrint | app, pm, pm.*, ui.*     | ✅           | ✅          | ❌       | Administrador do sistema |
| `member`                         | {{t("Member")}}                       | view                                                             | !pm, !pm.*, !ui.*       | ✅           | ✅          | ❌       | Membro básico            |
| `root`                           | {{t("Root")}}                         | (null)                                                           | pm, pm.*, ui.*          | ❌           | ✅          | ❌       | Root (oculta)            |
| `r_0xplxuwrlo8`                  | CRM - Customer Success                | view, export, create, update, templatePrint                      | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Customer Success         |
| `r_9k6j17miadb`                  | CRM - Contas a Receber                | view                                                             | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Contas a Receber         |
| `r_aegis`                        | CRM - SN1 Aegis                       | view, update, create, destroy                                    | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Aegis                    |
| `r_aihjjoy63as`                  | Gerente Comercial - Elaine            | view, create, export, update, templatePrint, destroy             | !pm, !pm.*, !ui.*       | ✅           | ❌          | ❌       | Gerente Comercial        |
| `r_c_externo`                    | Comercial Externo                     | create, view, update, templatePrint:own, export                  | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Comercial Externo        |
| `r_compras_admin`                | Processos - admin - Compras/Viagem    | create, view, update, export                                     | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Admin Compras            |
| `r_compras_solicitante`          | Processos - user - Compras/Viagem     | create, view, update:own                                         | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Solicitante Compras      |
| `r_compras_solicitante_fernanda` | Processos - Fernanda - Compras/Viagem | update:own, view, create                                         | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Fernanda Compras         |
| `r_divulgador`                   | Divulgador - user                     | create, view, update                                             | !pm, !pm.*, !ui.*       | ❌           | ❌          | ✅       | Divulgador (default)     |
| `r_fhortec_vendas`               | Fhortec Vendas                        | create, view, update, templatePrint, export:own                  | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Fhortec Vendas           |
| `r_indicador`                    | CRM - Indicador                       | (null)                                                           | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Indicador                |
| `r_jader`                        | Gerente de Operações - Jader          | create, view, update, destroy, export, importXlsx, templatePrint | !app, !pm, !pm.*, ui.*  | ❌           | ❌          | ❌       | Gerente Operações        |
| `r_marketing`                    | Marketing                             | view, create, update, export                                     | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Marketing                |
| `r_ppd0hci8y15`                  | CRM - Vendedor                        | create, view, update, templatePrint, export                      | !app, !pm, !pm.*, !ui.* | ✅           | ❌          | ❌       | Vendedor                 |
| `r_projetos_user`                | Projetos - User                       | create, view, update:own, templatePrint                          | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Projetos User            |
| `r_rh_roberta`                   | RH - Roberta                          | create, view, update, export, templatePrint, importXlsx, destroy | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | RH                       |
| `r_telecom`                      | CRM \| Telecom - SN2                  | view                                                             | !pm, !pm.*, !ui.*       | ❌           | ❌          | ❌       | Telecom SN2              |
| `r_telecom_natan`                | CRM \| Telecom - SN2 - Admin          | create, view, update, export, destroy                            | !app, !pm, pm.*, ui.*   | ❌           | ❌          | ❌       | Telecom Admin            |

---

## 🖥️ Desktop Routes (Menu UI Schemas) por Role

### admin / member

Ambas as roles compartilham o mesmo menu desktop completo:

```
🖥️ Administração (Menu.SubMenu, icon: settingoutlined)
🖥️ Negociações (Menu.Item, icon: fireoutlined, x-index: 1)
🖥️ Comercial (Menu.SubMenu, icon: usergroupaddoutlined)
🖥️ Comercial (Menu.SubMenu, hidden: true)
🖥️ Temp (Menu.Item)
🖥️ Pessoas (Menu.Item, icon: smileoutlined)
🖥️ Pacotes (Menu.Item)
🖥️ Opções de Produtos (Menu.Item, x-index: 2)
🖥️ Consultas SPC (Menu.Item, icon: checkcircleoutlined)
🖥️ Relatórios (Menu.SubMenu, icon: aligncenteroutlined)
🖥️ Produtos (Menu.Item)
🖥️ Vendas (Menu.Item, x-index: 3)
```

### r_ppd0hci8y15 (CRM - Vendedor)

Menu limitado para vendedores:

```
🖥️ Negociações (Menu.Item, icon: fireoutlined, x-index: 1)
🖥️ Comercial (Menu.SubMenu, icon: usergroupaddoutlined)
🖥️ Comercial (Menu.SubMenu, hidden: true)
🖥️ Pessoas (Menu.Item, icon: smileoutlined)
```

### r_c_externo (Comercial Externo)

```
❌ Sem desktop routes configuradas
```

### r_telecom (CRM | Telecom - SN2)

```
❌ Sem desktop routes configuradas
```

---

## 📱 Mobile Routes por Role

### admin / member

Mesmas rotas mobile:

```
📱 Vendas (page, sort: 1, schemaUid: lk7gfxcjho1)
   └─ Unnamed (tabs, hidden: true, sort: 2, schemaUid: ld7yka1phge)
📱 Pessoas (page, sort: 5, enableTabs: true, schemaUid: b5cv4em42yn)
   ├─ Pessoas Físicas (tabs, sort: 1, schemaUid: 5w0612m4gog)
   └─ Pessoas Jurídicas (tabs, sort: 2, schemaUid: r1vhs72dwe4)
📱 Demandas (page, sort: 6, schemaUid: 8c8vu1vhtfc)
   └─ (tabs, hidden: true, sort: 1, schemaUid: 8m76k5us78l)
```

### r_ppd0hci8y15 (CRM - Vendedor)

```
📱 Vendas (page, sort: 1, schemaUid: lk7gfxcjho1)
   └─ Unnamed (tabs, hidden: true, sort: 2, schemaUid: ld7yka1phge)
📱 Pessoas (page, sort: 5, enableTabs: true, schemaUid: b5cv4em42yn)
   ├─ Pessoas Físicas (tabs, sort: 1, schemaUid: 5w0612m4gog)
   └─ Pessoas Jurídicas (tabs, sort: 2, schemaUid: r1vhs72dwe4)
📱 Demandas (page, sort: 6, schemaUid: 8c8vu1vhtfc)
   └─ (tabs, hidden: true, sort: 1, schemaUid: 8m76k5us78l)
```

### r_c_externo (Comercial Externo) / r_telecom (CRM | Telecom - SN2)

```
❌ Sem mobile routes configuradas
```

---

## 🔑 Legenda de Permissões

### Ações

| Ação            | Descrição                           |
| --------------- | ----------------------------------- |
| `create`        | Criar registros                     |
| `view`          | Visualizar registros                |
| `update`        | Atualizar registros                 |
| `update:own`    | Atualizar apenas registros próprios |
| `destroy`       | Excluir registros                   |
| `export`        | Exportar dados                      |
| `export:own`    | Exportar apenas dados próprios      |
| `importXlsx`    | Importar planilhas Excel            |
| `templatePrint` | Imprimir templates                  |

### Snippets

| Snippet | Descrição                                   |
| ------- | ------------------------------------------- |
| `app`   | Acesso ao aplicativo principal              |
| `pm`    | Plugin Manager                              |
| `pm.*`  | Todos os sub-itens do Plugin Manager        |
| `ui.*`  | Configurações de UI                         |
| `!pm`   | Nega acesso ao Plugin Manager               |
| `!pm.*` | Nega acesso aos sub-itens do Plugin Manager |
| `!ui.*` | Nega acesso às configurações de UI          |
| `!app`  | Nega acesso ao aplicativo principal         |

### Flags de Menu

| Flag                 | Descrição                                      |
| -------------------- | ---------------------------------------------- |
| `allowNewMenu`       | Permite criar novos itens de menu desktop      |
| `allowNewMobileMenu` | Permite criar novos itens de menu mobile       |
| `allowConfigure`     | Permite configurar ACL/permissões (admin-like) |
| `default`            | Role atribuída por padrão a novos usuários     |

---

## 📊 Collections do Sistema

O sistema possui **160+ collections** cadastradas. Principais categorias:

### Telecom
- `t_telecom_contratos` - Telecom Contratos
- `t_telecom_recursos` - Telecom Recursos
- `t_telecom_anexos` - Telecom Anexos
- `t_telecom_ips_fixos` - Telecom IPs Fixos
- `t_telecom_racks` - Telecom Racks
- `t_telecom_salas` - Telecom Salas
- `t_telecom_interfaces` - Telecom Interfaces
- `t_telecom_fila` - Telecom Fila

### CRM/Vendas
- `t_negociacoes` - Negociações
- `t_negociacoes_itens` - Itens da Negociação
- `t_negociacoes_comentarios` - Comentários Negociações
- `t_anexos_negociacoes` - Anexos Negociações

### Funcionários/RH
- `f_funcionarios` - Funcionários
- `t_cargos` - Cargos
- `t_departamentos` - Departamentos
- `t_setor` - Setor
- `t_asos` - Atestado de Saúde Ocupacional
- `t_info_aso` - Informação do ASO
- `t_foto_funcionarios` - Foto
- `t_arquivos_funcionarios` - Arquivos Funcionários

### Compras
- `t_solicitacao_compras` - Solicitação de Compras
- `t_compras_fornecedores` - Compras Fornecedores
- `t_compras_produtos` - Compras Produtos
- `t_comentarios_compras` - Comentários de Compras

### Contratos
- `t_contratos` - Contratos
- `t_contratos_ixc` - Contratos IXC
- `t_contrato_ixc_itens` - Itens Contrato IXC

### Produtos/Serviços
- `t_produtos` - Produtos
- `t_pacotes` - Pacotes
- `t_itens_pacotes` - Itens dos Pacotes

### Datacenter
- `t_dc_servidores` - Servidores
- `t_equipamentos` - Equipamentos
- `t_sites` - Sites
- `t_vlan_tags` - Tags de Vlan

### Qualidade
- `t_oe_qualirun` - OE - QualiRun
- `t_qualirun_info_adicionais` - QualiRun - Informações Adicionais
- `t_qualirun_assinatura_gov` - Arquivos QualiRun - Assinatura GOV

---

## 🔍 Como Consultar Permissões via API

### Listar todas as roles

```bash
curl -X GET "https://crm.atplus.cloud/api/roles:list" \
  -H "Authorization: Bearer <token>"
```

### Obter detalhes de uma role específica (com menus)

```bash
curl -X POST "https://crm.atplus.cloud/api/roles:get?filterByTk=admin&appends=menuUiSchemas,mobileRoutes,resources" \
  -H "Authorization: Bearer <token>"
```

### Endpoints relacionados

| Endpoint                   | Método | Descrição                                               |
| -------------------------- | ------ | ------------------------------------------------------- |
| `roles:list`               | GET    | Lista todas as roles                                    |
| `roles:get`                | POST   | Obtém detalhes de uma role (suporta appends)            |
| `roles/resources`          | GET    | Resources/collections de uma role (requer autenticação) |
| `roles/desktop:list`       | GET    | Desktop routes (retorna null)                           |
| `roles/mobileRoutes:list`  | GET    | Mobile routes (retorna null)                            |
| `roles/menuUiSchemas:list` | GET    | Menu UI schemas (retorna null)                          |

---

## 📝 Observações Importantes

1. **`allowNewMenu`**: Controla se a role pode criar novos itens de menu
   - Apenas `admin` e `member` têm esta permissão habilitada
   - `r_ppd0hci8y15` (Vendedor) tem `allowNewMobileMenu: true` mas `allowNewMenu: null/false`

2. **Snippets de Negação**: A maioria das roles usa `!pm`, `!pm.*`, `!ui.*` para negar acesso ao Plugin Manager e configurações UI

3. **Vendedor (`r_ppd0hci8y15`)**:
   - Tem `!app` nos snippets (nega acesso ao app principal)
   - Mas ainda assim tem menu limitado: Negociações, Comercial, Pessoas

4. **Roles sem menu**: Comercial Externo e Telecom não têm nenhum menu configurado - acesso provavelmente apenas via links diretos ou API

5. **Estrutura Hierárquica**:
   - **Desktop**: Menu.SubMenu (pais) → Menu.Item (filhos)
   - **Mobile**: page (topo) → tabs (sub-itens)

6. **Resources por Collection**: O endpoint `roles/resources` que retornaria as collections específicas e permissões por collection está bloqueado para acesso read-only. É necessário autenticação direta com token válido.

---

## 🛠️ Integração no Frontend

O frontend usa o módulo de permissões em `src/features/permissions/` para:

- Armazenar roles do usuário no `permissionsStore` (TanStack Store)
- Filtrar navegação por snippets e ações via `filterNavByPermissions()`
- Hooks React: `useCan()`, `useHasSnippet()`, `useCanEdit()`, `useIsAdmin()`

### Exemplo de uso no código:

```typescript
import { useHasSnippet, useCan } from '#/features/permissions';

function MyComponent() {
  const canViewReports = useHasSnippet('ui.reports');
  const canEdit = useCan('update');

  if (!canViewReports) return null;

  return <ReportsDashboard canEdit={canEdit} />;
}
```

---

**Documento gerado automaticamente a partir da API do NocoBase.**
Para atualizar, execute as chamadas API listadas acima e atualize este arquivo.
