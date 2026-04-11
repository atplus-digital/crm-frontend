---
name: nocobase-docs
description: >-
  Query the NocoBase instance configured in this project's .env files —
  collection schemas, field info, swagger docs, and read-only data exploration.
  Use when: the user asks about the schema or structure of a collection, wants
  to know what fields exist, needs to list or inspect data from the project's
  NocoBase, or is about to make a NocoBase API call and needs the correct URL
  and credentials. Always use this skill before making any NocoBase API call so
  the right URL/token are loaded and read-only rules are enforced. This skill
  enforces a strict read-only policy via a TypeScript client script — never call
  the NocoBase API directly with curl or fetch.
metadata:
  authors:
    - copilot
  tags:
    - nocobase
    - documentation
    - api
    - schema
    - collections
  version: 4.0.0
user-invocable: true
---

# NocoBase Documentation Skill

## Overview

This skill retrieves up-to-date documentation and schema information from the
NocoBase instance configured in this project. It uses a **read-only TypeScript
client script** that enforces access restrictions and logs every request for
auditing.

**This skill is strictly read-only.** All API calls must go through the
bundled script — it blocks write operations (`:create`, `:update`, `:destroy`)
and logs every request to stderr in structured JSON format.

---

## Step 1 — Chamar a API (obrigatório via script)

**Never call the NocoBase API directly with `curl`, `fetch`, or any HTTP client.**
Always use the bundled TypeScript client script — it enforces read-only access
and logs all requests.

### Primeiro uso — instalar dependências

Antes de rodar o script pela primeira vez, instale as dependências:

```bash
cd .agents/skills/nocobase-docs/scripts && pnpm install
```

Se `node_modules` não existir na pasta `scripts/`, o script falhará com erro
de módulo não encontrado. Sempre execute `pnpm install` antes de usar.

### Script location

```
.agents/skills/nocobase-docs/scripts/nocobase-client.ts
```

### Run with `npx tsx`

```bash
npx tsx .agents/skills/nocobase-docs/scripts/nocobase-client.ts <command> [args...]
```

### Commands

| Command | Description | Example |
|---------|-------------|---------|
| `swagger` | Fetch swagger/OpenAPI spec | `swagger --ns=collections` |
| `collections` | List all collections or get one | `collections --name=t_pessoas` |
| `list <collection>` | List records (paginated) | `list t_pessoas --page=1 --pageSize=20` |
| `get <collection> <id>` | Get record by ID | `get t_pessoas 42` |
| `count <collection>` | Count records | `count t_pessoas` |
| `raw <endpoint>` | Raw GET to any read-only endpoint | `raw "swagger:get?ns=collections"` |
| `help` | Show usage help | `help` |

### Query parameters (for list/get/count)

| Parameter | Example | Description |
|-----------|---------|-------------|
| `--page=N` | `--page=1` | Page number |
| `--pageSize=N` | `--pageSize=20` | Items per page |
| `--sort=<field>` | `--sort=-id` | Sort (prefix `-` for desc) |
| `--fields=<list>` | `--fields=id,name` | Fields to return |
| `--appends=<list>` | `--appends=createdBy` | Relations to include |
| `--except=<list>` | `--except=password` | Fields to exclude |
| `--filter=<json>` | `--filter='{"id":{"$eq":1}}'` | Advanced filters |

### Swagger-specific

| Parameter | Example | Description |
|-----------|---------|-------------|
| `--ns=<namespace>` | `--ns=collections` | Swagger namespace filter |
| `--ns=<ns>/<col>` | `--ns=collections/t_pessoas` | Specific collection schema |

### Collections-specific

| Parameter | Example | Description |
|-----------|---------|-------------|
| `--name=<name>` | `--name=t_pessoas` | Get a specific collection with fields |

---

## Step 2 — Entendendo o output

The script outputs JSON to stdout. Request logs go to stderr (structured JSON
+ human-readable), so you can pipe stdout to files or parse it programmatically
without log noise.

### Log format (stderr)

Every request produces two log entries: one at start (`status: "pending"`)
and one at completion (`status: "success"` or `status: "error"`).

```json
{
  "timestamp": "2026-04-10T12:00:00.000Z",
  "method": "GET",
  "endpoint": "t_pessoas:list",
  "fullUrl": "https://crm.example.com/api/t_pessoas:list?page=1&pageSize=20",
  "status": "success",
  "statusCode": 200,
  "durationMs": 150
}
```

### Read-only enforcement

If you attempt a write operation, the script blocks it immediately:

```
BLOCKED: Endpoint "t_pessoas:create" is not read-only.
Only GET actions (list, get, count, swagger, collections) are permitted.
```

---

## Step 3 — Configuração de ambiente

The script automatically loads credentials from `.env.local` or `.env` in this
order:

1. `.agents/skills/nocobase-docs/.env.local` (skill-local, takes precedence)
2. `.env.local` in the current working directory
3. `.env` in the current working directory

If no credentials are found in any env file, **ask the user** before proceeding:

```
Não encontrei as credenciais do NocoBase nos arquivos .env.
Por favor, informe:
- URL base da API NocoBase (ex: https://meusite.com/api):
- Token JWT de autenticação:
```

Then create `.agents/skills/nocobase-docs/.env.local` with the provided values
so future invocations work without asking again.

| Variable | Description | Example |
|----------|-------------|---------|
| `CRM_NOCOBASE_URL` | Base API URL | `https://crm.atplus.cloud/api` |
| `CRM_NOCOBASE_TOKEN` | JWT token for auth | `eyJhbGci...` |
| `CRM_NOCOBASE_TIMEOUT_MS` | Request timeout in ms (default: 15000) | `15000` |

If credentials are missing and the user hasn't provided them, the script will
exit with instructions on how to configure them.

---

## NocoBase API Reference (read-only endpoints)

These are the endpoints the script permits, following the NocoBase swagger
convention (`/{resource}:{action}`):

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `swagger:get` | Full OpenAPI spec |
| `GET` | `swagger:get?ns=<namespace>` | Filtered spec |
| `GET` | `collections:list` | List all collections |
| `GET` | `collections:get?filterByTk=<name>` | Collection with fields |
| `GET` | `/{collection}:list` | List records (paginated) |
| `GET` | `/{collection}:get?filterByTk={id}` | Get record by ID |
| `GET` | `/{collection}:count` | Count records |

**Blocked actions:** `:create`, `:update`, `:destroy`, and any other
mutation endpoints.

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