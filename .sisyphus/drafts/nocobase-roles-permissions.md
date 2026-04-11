# Draft: NocoBase Roles & Permissions para UI

## Validação do Banco (via /nocobase-docs skill + API direta)

### ✅ Endpoints validados (funcionam com token admin)
- `auth:check` → retorna user COM roles completos (strategy, snippets, allowConfigure, etc.)
- `roles:list` → 22 roles no sistema
- `roles:get?filterByTk=NAME` → detalhes de 1 role
- `roles/{roleName}/collections:list` → 112 collections por role (todas usingConfig: strategy)
- `availableActions:list` → 7 ações: create, view, update, destroy, export, importXlsx, templatePrint
- `desktopRoutes:list` → 184 rotas/menus no sistema
- `collections:list?paginate=false&fields=name,title&filter={"name":{"$eq":"roles"}}` → retorna a collection roles

### ✅ Dados validados do auth:check (user gustavo.carbonera)
- Retorna `roles[]` completo com: name, title, strategy.actions, snippets, allowConfigure, allowNewMenu, hidden, default
- Cada role tem `rolesUsers` (pivot table data)
- User tem 3 roles: admin, member, r_ppd0hci8y15 (CRM - Vendedor)

### ✅ Modelo de Permissões do NocoBase
- **strategy.actions**: ações globais permitidas (create, view, update, destroy, export, importXlsx, templatePrint)
  - Ações com escopo: `update:own`, `templatePrint:own`, `export:own` (só próprios registros)
- **snippets**: controla acesso a ÁREAS do app (não collections)
  - Positivos: `app`, `pm`, `pm.*`, `ui.*` (pode acessar)
  - Negativos: `!pm`, `!pm.*`, `!ui.*` (NÃO pode acessar)
  - Mix: `!app` + `pm.*` = não acessa app geral mas pode acessar pm
- **usingConfig**: todos os roles usam `strategy` (não `resourceAction`)
  - Isso significa: NÃO há permissões granulares por collection separadas
  - O role aplica as mesmas actions globalmente para todas as collections
  - A API já bloqueia o acesso por role automaticamente

### ✅ Roles existentes (22 total)
- admin: all actions, all snippets
- member: view only, !pm, !ui
- r_0xplxuwrlo8 (CRM - Customer Success): view, export, create, update, templatePrint
- r_9k6j17miadb (CRM - Contas a Receber): view only
- r_aegis (CRM - SN1 Aegis): view, update, create, destroy
- r_aihjjoy63as (Gerente Comercial - Elaine): all except importXlsx
- r_c_externo (Comercial Externo): create, view, update, templatePrint:own, export
- r_compras_admin (Processos - admin - Compras/Viagem): create, view, update, export
- r_compras_solicitante (Processos - user - Compras/Viagem): create, view, update:own
- r_dc_user (Datacenter - user): view, update, export, importXlsx, templatePrint, create
- r_demandas (Demandas - user): create, view, update
- r_demandas_gestor (Demandas - Gestores): create, view, update, templatePrint
- r_divulgador (Divulgador - user): create, view, update (DEFAULT role!)
- r_fhortec_vendas (Fhortec Vendas): create, view, update, templatePrint, export:own
- r_indicador (CRM - Indicador): NO actions (empty array)
- r_jader (Gerente de Operações - Jader): all actions, !app, !pm, pm.*, ui.*
- r_marketing (Marketing): view, create, update, export
- r_ppd0hci8y15 (CRM - Vendedor): create, view, update, templatePrint, export
- r_projetos_user (Projetos - User): create, view, update:own, templatePrint
- r_rh_roberta (RH - Roberta): all except importXlsx
- r_telecom (CRM | Telecom - SN2): view only
- r_telecom_natan (CRM | Telecom - SN2 - Admin): create, view, update, export, destroy
- root: no actions, pm, pm.*, ui.* (hidden: true)

### ❌ Endpoints que NÃO funcionam ou requerem permissões especiais
- `roles:check` → 404/vazio
- `rolesUischemas:list` → "No permissions"
- `roles/{name}:appends=rolesUischemas` → "Association not found"
- `rolesCollections:list` → não existe

### 🔍 Descoberta chave: rolesUischemas
- Dentro de `desktopRoutes:list`, cada menu tem `rolesUischemas` embutido
- Isso é como o NocoBase controla quais menus cada role vê
- Mas o endpoint direto não está acessível pela API
- **Solução**: não precisamos disso — podemos mapear menus no frontend e usar strategy/snippets para controle de visibilidade

## Requisitos (confirmados pelo usuário)
- Manter NocoBase gerenciando permissões (fonte de verdade)
- API já controla o que é permitido para cada usuário
- Precisa de permissões de VISUALIZAÇÃO da UI para cada role
- NÃO quer criar permissão por permissão manualmente

## Decisões Técnicas
- Usar `auth:check` como fonte de roles (já retorna tudo)
- Computar permissões efetivas no frontend (union de múltiplos roles)
- Hooks: useCan(action), useHasSnippet(snippet)
- Componente <Can> para UI declarativa
- Route guards via beforeLoad checando snippets
- Permissões por collection: não necessário para UI (all strategy, API já bloqueia)

## Perguntas Abertas
- Como mapear menus/desktopRoutes do NocoBase para as rotas do frontend?
  - Opção A: Mapeamento manual (route config com allowedSnippets)
  - Opção B: Buscar desktopRoutes da API e mapear dinamicamente
  - Opção C: Híbrido — definição no código mas validação via snippets