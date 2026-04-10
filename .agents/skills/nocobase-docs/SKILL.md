---
name: nocobase-docs
description: >-
  Query the NocoBase instance configured in this project's .env files —
  collection schemas, field info, swagger docs, and read-only data exploration.
  Use when: the user asks about the schema or structure of a collection, wants
  to know what fields exist, needs to list or inspect data from the project's
  NocoBase, or is about to make a NocoBase API call and needs the correct URL
  and credentials. Always use this skill before making any NocoBase API call so
  the right URL/token are loaded and read-only rules are enforced.
metadata:
  authors:
    - copilot
  tags:
    - nocobase
    - documentation
    - api
    - schema
    - collections
  version: 3.0.0
user-invocable: true
---

# NocoBase Documentation Skill

## Overview

This skill retrieves up-to-date documentation and schema information from the
NocoBase instance configured in this project, querying the API directly using
the URL and credentials resolved in Step 1.

**This skill is read-only.** Never call `create`, `update`, or `destroy`
endpoints. The purpose is exploration and reference, not data mutation.

---

## Step 1 — Resolver URL e token

Siga esta ordem para cada variável. Pare no primeiro método que funcionar.

### 1a. Variáveis de ambiente

Leia `.env.local` primeiro, depois `.env` como fallback.

| Variável                  | Descrição                                      |
| ------------------------- | ---------------------------------------------- |
| `CRM_NOCOBASE_URL`        | URL base da API (ex: `https://exemplo.com/api`) |
| `CRM_NOCOBASE_TOKEN`      | Token JWT permanente para autenticação          |
| `CRM_NOCOBASE_TIMEOUT_MS` | Timeout em ms (default: `15000`)               |

> Se existir em ambos os arquivos, `.env.local` tem precedência.

### 1b. Perguntar ao usuário (fallback)

Se qualquer uma das variáveis **não for encontrada** no `.env`, pergunte ao
usuário antes de prosseguir:

```
Não encontrei <URL|token> nas variáveis de ambiente (.env.local / .env).
Por favor, informe:
- URL base da API NocoBase (ex: https://meusite.com/api):   [se URL faltando]
- Email (ou username):                                       [se token faltando]
- Senha:                                                     [se token faltando]
```

Se o token estiver faltando, autentique com as credenciais informadas:

```bash
curl -s -X POST "${CRM_NOCOBASE_URL}/auth:signIn" \
  -H "Content-Type: application/json" \
  -d '{"email": "<EMAIL>", "password": "<SENHA>"}'
```

> Se o login for por **username**, use `"username"` no lugar de `"email"`.
> A resposta retorna `{ "data": { "token": "...", "user": {...} } }`.
> Extraia `data.token` e use como bearer. Este token de sessão expira quando
> a sessão encerrar.

---

## Step 2 — Consultar a API (somente leitura)

Todas as requisições devem incluir o header `Authorization: Bearer`:

```bash
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/<endpoint>"
```

### Swagger (OpenAPI Spec)

```bash
# Documentação completa de todas as rotas
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/swagger:get"

# Apenas collections customizadas
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/swagger:get?ns=collections"

# Schema de uma collection específica (com associações)
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/swagger:get?ns=collections/t_pessoas"
```

### Collections

```bash
# Listar todas as collections
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/collections:list?paginate=false"

# Detalhes de uma collection com seus campos
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/collections:get?filterByTk=t_pessoas&appends=fields"
```

### Endpoints de leitura por collection

| Método | Endpoint                            | Descrição                  |
| ------ | ----------------------------------- | -------------------------- |
| `GET`  | `/{collection}:list`                | Lista registros (paginado) |
| `GET`  | `/{collection}:get?filterByTk={id}` | Busca por ID               |
| `GET`  | `/{collection}:count`               | Conta registros            |

> **Somente leitura.** Nunca use `:create`, `:update` ou `:destroy` — esses
> endpoints mutam dados de produção e estão fora do escopo desta skill.

### Parâmetros de query comuns

| Parâmetro  | Tipo       | Descrição                       |
| ---------- | ---------- | ------------------------------- |
| `page`     | `number`   | Página atual (default: 1)       |
| `pageSize` | `number`   | Itens por página                |
| `filter`   | `object`   | Filtros avançados (JSON)        |
| `sort`     | `string[]` | Ordenação (ex: `-id,createdAt`) |
| `fields`   | `string[]` | Campos específicos a retornar   |
| `appends`  | `string[]` | Relações a incluir              |
| `except`   | `string[]` | Campos a excluir                |

---

## Documentação de referência

- `docs/integracao-api-client.md` — Guia completo de integração com a API
- `scripts/generate-types/README.md` — Script de geração de tipos
- `scripts/generate-types/ARCHITECTURE.md` — Arquitetura do gerador
- `src/@types/types.generated.ts` — Tipos TypeScript gerados

## Links externos

- [NocoBase API Documentation](https://docs.nocobase.com/integration/api-doc/)
- [NocoBase Auth SDK](https://docs.nocobase.com/api/sdk/auth)
- [Filter Operators](https://docs.nocobase.com/api/database/operators)
