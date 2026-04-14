---
title: Custom Requests API - CRM AT+
description: Documentação da coleção customRequests do NocoBase e estrutura dos webhooks customizados
---

**Última atualização:** 2026-04-14  
**Fonte:** API NocoBase (crm.atplus.cloud/api)  
**Plugin:** `@nocobase/plugin-action-custom-request`

---

## Visão Geral

A coleção `customRequests` armazena **webhooks customizados** que permitem enviar requisições HTTP para serviços externos (n8n, AT Plus RH, etc.). Cada registro representa uma configuração de integração que pode ser disparada manualmente ou via workflow.

**Total de registros:** 164 custom requests

---

## Estrutura da Coleção

### Definição Schema (TypeScript)

```typescript
// Fonte: nocobase/packages/plugins/@nocobase/plugin-action-custom-request/src/server/collections/customRequest.ts
defineCollection({
  dumpRules: 'required',
  name: 'customRequests',
  autoGenId: false,
  migrationRules: ['overwrite', 'schema-only'],
  fields: [
    {
      type: 'uid',
      name: 'key',           // UUID como primaryKey (ex: "37yaihkravc")
      primaryKey: true,
    },
    {
      type: 'belongsToMany',
      name: 'roles',         // Relacionamento N:N com roles
      onDelete: 'CASCADE',
      through: 'customRequestsRoles',
      target: 'roles',
      foreignKey: 'customRequestKey',
      otherKey: 'roleName',
      sourceKey: 'key',
      targetKey: 'name',
    },
    {
      type: 'json',
      name: 'options',       // Toda a configuração do request vai aqui
    },
  ],
});
```

### Campos

| Campo      | Tipo          | Descrição                                      |
| ---------- | ------------- | ---------------------------------------------- |
| `key`      | `uid`         | Identificador único (primaryKey, ex: `37yaihkravc`) |
| `roles`    | `belongsToMany` | Relacionamento N:N com roles (tabela `customRequestsRoles`) |
| `options`  | `json`        | Configuração completa do webhook                |
| `createdAt` | `datetime`   | Data de criação                                |
| `updatedAt` | `datetime`   | Data de atualização                            |

---

## Estrutura do Campo `options`

O campo `options` é um JSON que contém toda a configuração do webhook.

| Campo          | Tipo                    | Descrição                                              |
| -------------- | ----------------------- | ------------------------------------------------------ |
| `method`       | `string`                | Método HTTP: `GET`, `POST`, `PUT`, `DELETE`            |
| `url`          | `string`                | URL do webhook (pode usar templates `{{variable}}`)   |
| `headers`      | `array<{name, value}>` | Headers HTTP customizados                               |
| `params`       | `array<{name, value}>` | Query parameters (para GET)                             |
| `data`         | `any`                   | Body do request (POST/PUT). Objeto ou string JSON com templates |
| `timeout`      | `number`                | Timeout em milissegundos                               |
| `collectionName` | `string`              | Nome da coleção que "dispara" o request               |
| `dataSourceKey` | `string`              | Fonte de dados (`main`, `d_db_ixcsoft`, etc.)         |
| `responseType` | `string`                | `json` ou `stream`                                     |

---

## Relacionamento com Roles

A tabela intermediária `customRequestsRoles` faz o link N:N entre `customRequests` e `roles`.

| Campo               | Tipo     | Descrição                         |
| ------------------- | -------- | --------------------------------- |
| `customRequestKey`  | `string` | FK para `customRequests.key`       |
| `roleName`          | `string` | FK para `roles.name`               |

Isso permite controlar **qual role pode disparar** cada custom request.

---

## Variáveis de Contexto (Templates)

O NocoBase suporta **template substitution** com `{{}}` nos campos `url`, `headers`, `params` e `data`. As variáveis disponíveis são:

| Variável              | Descrição                                           |
| --------------------- | --------------------------------------------------- |
| `currentRecord`       | Registro atual (com todos os campos da coleção)      |
| `currentUser`         | Usuário logado (id, nome, email, etc.)              |
| `currentTime`         | Timestamp ISO atual                                 |
| `$nToken`             | Bearer token de autenticação                        |
| `$nForm`              | Dados do formulário                                 |
| `$nSelectedRecord`    | Registros selecionados na tabela                    |
| `$env`                | Variáveis de ambiente configuradas no NocoBase      |
| `$nSelectedRecord`     | Registros selecionados na tabela                    |

### Exemplo de template

```json
{
  "data": {
    "id_contrato": "{{currentRecord.id}}",
    "id_vendedor": "{{currentUser.f_id_vendedor_ixc}}"
  }
}
```

---

## Endpoints da API

| Método | Endpoint                        | Descrição                              |
| ------- | ------------------------------- | -------------------------------------- |
| `GET`  | `/customRequests:list`           | Lista todos os custom requests (paginado) |
| `GET`  | `/customRequests:get`            | Retorna um registro pelo `filterByTk`  |
| `POST` | `/customRequests:create`         | Cria novo custom request               |
| `POST` | `/customRequests:update`         | Atualiza custom request existente       |
| `POST` | `/customRequests:destroy`        | Remove custom request                  |
| `POST` | `/customRequests:send/{key}`     | **Dispara** o custom request           |

---

## Como Funciona o `send`

O action `send` (implementado em `send.ts`) é o que realmente **executa** o custom request:

1. Busca o registro pelo `key` (ex: `37yaihkravc`)
2. Extrai `options.url`, `options.method`, `headers`, `params`, `data`
3. Prepara variáveis de contexto (`currentRecord`, `currentUser`, etc.)
4. Faz template substitution com `{{}}` nos campos
5. Executa o request HTTP via axios
6. Retorna a resposta

### Lógica de Permissão

O `send` verifica se o usuário tem permissão:

```typescript
// Root role tem todas as permissões
if (ctx.state.currentRole !== 'root') {
  const crRepo = ctx.db.getRepository('uiButtonSchemasRoles');
  const hasRoles = await crRepo.find({ filter: { uid: filterByTk } });
  if (hasRoles.length) {
    if (!hasRoles.some((item) => ctx.state.currentRoles.includes(item.roleName))) {
      return ctx.throw(403, 'custom request no permission');
    }
  }
}
```

---

## Exemplos de Registros Ativos

| Key           | Collection            | URL do Webhook                                  | Método |
| ------------- | --------------------- | ----------------------------------------------- | ------ |
| `37yaihkravc` | `cliente_contrato`    | `n8n.atplus.cloud/webhook/0860593c-...`         | POST   |
| `0j7f9fuzuo7` | `t_qualirun_info_adicionais` | `atplus-rh-n8n-rh.tvs9na.easypanel.host/...` | POST   |
| `23btjo9ohrr` | `cliente_contrato`    | `n8n.atplus.cloud/webhook/5d9eccc3-...`         | POST   |
| `h32vk2yid08` | `t_negociacoes`       | `n8n.atplus.cloud/webhook/b2b40644-...`         | POST   |
| `yep1cjhq0zp` | `f_funcionarios`      | `atplus-rh-n8n-rh.tvs9na.easypanel.host/...`   | POST   |

### Exemplo completo de `options`

```json
{
  "method": "POST",
  "headers": [
    { "name": "Content-Type", "value": "application/json" }
  ],
  "params": [],
  "responseType": "json",
  "data": {
    "id_contrato": "{{currentRecord.id}}",
    "id_vendedor": "{{currentUser.f_id_vendedor_ixc}}"
  },
  "url": "https://n8n.atplus.cloud/webhook/0860593c-859a-4427-9e7e-437b19bed46b",
  "timeout": 15000,
  "collectionName": "cliente_contrato",
  "dataSourceKey": "d_db_ixcsoft"
}
```

---

## Como Consultar via API

### Listar todos os custom requests

```bash
curl -X GET "https://crm.atplus.cloud/api/customRequests:list" \
  -H "Authorization: Bearer <token>"
```

### Listar com paginação e ordenação

```bash
curl -X GET "https://crm.atplus.cloud/api/customRequests:list?page=1&pageSize=20&sort=-createdAt" \
  -H "Authorization: Bearer <token>"
```

### Obter um custom request específico

```bash
curl -X POST "https://crm.atplus.cloud/api/customRequests:get" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"filterByTk": "37yaihkravc"}'
```

### Filtrar por collectionName

```bash
curl -X GET "https://crm.atplus.cloud/api/customRequests:list?filter=%7B%22options.collectionName%22%3A%7B%22%24eq%22%3A%22cliente_contrato%22%7D%7D" \
  -H "Authorization: Bearer <token>"
```

---

## Integrações Comuns

O CRM AT+ utiliza custom requests principalmente para:

- **n8n Workflows:** Disparo de automações via webhooks n8n
- **AT Plus RH:** Integração com sistema de Recursos Humanos
- **IXCSoft:** Sincronização com sistema IXC (mikrotik,Radius)
- **QualiRun:** Processos de qualidade e certificação

---

## Referências

- [NocoBase Custom Request Plugin](https://docs.nocobase.com/plugins/@nocobase/plugin-action-custom-request/)
- [NocoBase Custom Request Action](https://docs.nocobase.com/interface-builder/actions/types/custom-request)
- [NocoBase Handbook - Custom Request](https://docs.nocobase.com/handbook/action-custom-request)

---

**Documento gerado automaticamente a partir do código fonte do NocoBase e análise da API.**
