---
name: nocobase-docs
description: >-
  Access NocoBase API documentation, collection schemas, and endpoints for the
  CRM ATPlus instance. Use when: the user asks about NocoBase features, API
  endpoints, collection fields, relationships, or how to query/manipulate data
  in NocoBase; user mentions "nocobase", "NocoBase API", "collection",
  "swagger", or needs to look up NocoBase documentation or schema info.
metadata:
  authors:
    - copilot
  tags:
    - nocobase
    - documentation
    - api
    - schema
    - collections
  version: 2.0.0
user-invocable: true
---

# NocoBase Documentation Skill

## Overview

This skill retrieves up-to-date documentation and schema information from the
CRM ATPlus NocoBase instance (crm.atplus.cloud) by querying the API directly
using credentials from environment files.

## Variables (from `.env.local` then `.env`)

As variáveis são procuradas **nesta ordem**:

1. **`.env.local`** — Variáveis específicas do ambiente local (prioridade)
2. **`.env`** — Variáveis com valores padrão ou fallback

| Variable                  | Descrição                                            |
| ------------------------- | ---------------------------------------------------- |
| `CRM_NOCOBASE_URL`        | URL base da API (ex: `https://crm.atplus.cloud/api`) |
| `CRM_NOCOBASE_TOKEN`      | Token permanente JWT para autenticação (read-only)   |
| `CRM_NOCOBASE_TIMEOUT_MS` | Timeout das requisições em ms (default: 15000)       |

> **Importante**: As variáveis são validadas em `src/env.ts` via T3Env + Zod.
> O script de geração de tipos usa as mesmas vars. Se uma variável existir
> em ambos os arquivos, `.env.local` tem precedência.

## Workflow

1. **Verificar variáveis de ambiente** — Buscar `CRM_NOCOBASE_URL` e
   `CRM_NOCOBASE_TOKEN` primeiro em `.env.local`, depois em `.env` como fallback.
2. **Usar curl com autenticação** — Incluir `Authorization: Bearer` header.
3. **Consultar a documentação relevante** — Swagger, collections ou campos.

## Autenticação

Todas as requisições exigem o header Bearer:

```bash
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/<endpoint>"
```

## Endpoints Principais

### Swagger (OpenAPI Spec)

Retorna a especificação OpenAPI/Swagger completa de todas as rotas:

```bash
# Documentação completa
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/swagger:get"

# Documentação de collections customizadas
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/swagger:get?ns=collections"

# Schema de uma collection específica (e suas associações)
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/swagger:get?ns=collections/t_pessoas"
```

### Collections (Listar todas)

```bash
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/collections:list?paginate=false"
```

### Collection específica (com campos)

```bash
curl -s -H "Authorization: Bearer $CRM_NOCOBASE_TOKEN" \
  "${CRM_NOCOBASE_URL}/collections:get?filterByTk=t_pessoas&appends=fields"
```

### CRUD padrão por collection

| Método | Endpoint                                | Descrição                  |
| ------ | --------------------------------------- | -------------------------- |
| `GET`  | `/{collection}:list`                    | Lista registros (paginado) |
| `GET`  | `/{collection}:get?filterByTk={id}`     | Busca por ID               |
| `POST` | `/{collection}:create`                  | Cria registro              |
| `POST` | `/{collection}:update?filterByTk={id}`  | Atualiza registro          |
| `POST` | `/{collection}:destroy?filterByTk={id}` | Remove registro            |

> **Nota**: Todos os métodos de escrita (`create`, `update`, `destroy`) usam `POST`.
> O token atual tem **permissão de escrita** (role `admin`). Use com cautela em automações.

### Parâmetros de Query Comuns

| Parâmetro  | Tipo       | Descrição                       |
| ---------- | ---------- | ------------------------------- |
| `page`     | `number`   | Página atual (default: 1)       |
| `pageSize` | `number`   | Itens por página                |
| `filter`   | `object`   | Filtros avançados (JSON)        |
| `sort`     | `string[]` | Ordenação (ex: `-id,createdAt`) |
| `fields`   | `string[]` | Campos específicos a retornar   |
| `appends`  | `string[]` | Relações a incluir              |
| `except`   | `string[]` | Campos a excluir                |

## Documentação de Referência

- `docs/integracao-api-client.md` — Guia completo de integração com a API
- `scripts/generate-types/README.md` — Documentação do script de geração de tipos
- `scripts/generate-types/ARCHITECTURE.md` — Arquitetura do gerador de tipos
- `src/@types/types.generated.ts` — Tipos agregados gerados

## Notas

- O token atual tem **role `admin`** com permissão de escrita — endpoints create/update/destroy
  funcionam normalmente. Evite operações de escrita acidentais em automações.
- A URL base **não** deve ter barra final (`/`).
- O projeto usa `@nocobase/sdk` como client HTTP na aplicação (ver `src/env.ts`).
- O script `pnpm generate-types` usa as mesmas credenciais para gerar tipos TypeScript.
- Consulte sempre a documentação em `docs/` antes de implementar novas integrações.

## References

- [NocoBase API Documentation](https://docs.nocobase.com/integration/api-doc/)
- [NocoBase Documentation](https://docs.nocobase.com/api)
