<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-14 -->

# AGENTS.md — repositories

<!-- AGENTS-GENERATED:START overview -->
## Overview
Repositórios de dados — camada de acesso a dados externos (NocoBase, IXCSoft) com type safety baseado em collections geradas, logging estruturado e tratamento de erros padronizado.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File                     | Purpose                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `index.ts`               | Barrel export — repositórios (`nocobaseRepository`, `ixcRepository`) e tipos                                                    |
| `nocobase-repository.ts` | `NocoBaseRepository` + `TypedNocoBaseClient` (interno) — wrappers de alto nível para operações NocoBase com collections tipadas |
| `ixc-repository.ts`      | `IxcRepository` — operações IXCSoft via NocoBase com header `X-Data-Source: d_db_ixcsoft`                                       |
| `types.ts`               | Tipos compartilhados: `ApiRequestConfig`, `ListParams`, `PaginatedResponse`, `NocoBaseClient`                                   |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Import de `#/features/repositories` — não importar de sub-arquivos diretamente
- Repositórios são singletons exportados: `nocobaseRepository`, `ixcRepository`
- Serviços de domínio usam repositórios, não clients diretamente
- Logging estruturado via `createLogger("repositories:...")`
- Type safety com collections geradas: `CollectionMap[T]` e `CollectionRelationsMap[T]` garantem que apenas collections e relações válidas sejam usadas
- `TypedNocoBaseClient` previne uso de collections/relações inexistentes em tempo de compilação
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START api-reference -->
## Main Functions & API

### NocoBaseRepository

| Method                            | Purpose                                           | Example                                                                                |
| --------------------------------- | ------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request<T>(config)`              | Requisição direta ao NocoBase                     | `nocobaseRepository.request<{data: T}>({url: "users:list", method: "GET"})`            |
| `list<T>(collection, params)`     | Listar registros com paginação e relações tipadas | `nocobaseRepository.list<Users>("users", {page: 1, pageSize: 20, appends: ["roles"]})` |
| `get<T>(collection, id, options)` | Buscar por ID com relações opcionais              | `nocobaseRepository.get<Users>("users", 123, {appends: ["departments"]})`              |
| `create<T>(collection, data)`     | Criar registro                                    | `nocobaseRepository.create<Users>("users", {email: "..."})`                            |
| `update<T>(collection, id, data)` | Atualizar registro                                | `nocobaseRepository.update("users", 123, {phone: "..."})`                              |
| `delete(collection, id)`          | Remover registro                                  | `nocobaseRepository.delete("users", 123)`                                              |
| `count(collection, params)`       | Contar registros com filtro opcional              | `nocobaseRepository.count("users", {filter: {status: "active"}})`                      |
| `signIn(credentials)`             | Autenticação                                      | `nocobaseRepository.signIn({email, password})`                                         |
| `signOut()`                       | Logout                                            | `nocobaseRepository.signOut()`                                                         |
| `checkAuth<T>()`                  | Verificar token via `auth:check`                  | `nocobaseRepository.checkAuth<AuthUser>()`                                             |
| `clearToken()`                    | Limpar token do client                            | `nocobaseRepository.clearToken()`                                                      |

**Type safety:** Os métodos `list`, `get`, `create`, `update`, `delete` e `count` usam `CollectionMap[T]` e `CollectionRelationsMap[T]` — apenas collections e relações que existem no schema gerado são permitidas.

### IxcRepository

| Method                      | Purpose                                                             | Example                                                                   |
| --------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `request<T>(config)`        | Requisição ao IXC (header `X-Data-Source` aplicado automaticamente) | `ixcRepository.request({url: "cliente_contrato:list", method: "GET"})`    |
| `list<T>(endpoint, params)` | Listar do IXC com paginação                                         | `ixcRepository.list<Contrato>("cliente_contrato", {page: 1})`             |
| `get<T>(endpoint, id)`      | Buscar por ID (retorna primeiro resultado)                          | `ixcRepository.get<Contrato>("cliente_contrato", 123)`                    |
| `getContratos<T>(params)`   | Listar contratos com filtros pré-buildados                          | `ixcRepository.getContratos({filters: {cpfCnpj: "123...", status: "A"}})` |

**Filtros do `getContratos`:**
- `cpfCnpj`: Busca parcial em `f_nc_cliente.cnpj_cpf`
- `nome`: Busca parcial em `f_nc_cliente.razao`
- `status`: Filtro exato em `status`
- `contratoId`: Filtro exato em `id`

### Shared Types

```typescript
interface ApiRequestConfig {
  url: string;
  method?: string;
  params?: Record<string, unknown>;
  data?: unknown;
  headers?: Record<string, string>;
}

interface ListParams {
  page?: number;
  pageSize?: number;
  sort?: string[];
  filter?: Record<string, unknown> | string;
  appends?: string[];
}

interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total?: number;
    totalPage?: number;
    page?: number;
    pageSize?: number;
    filterCount?: number;
    print?: number;
    [key: string]: unknown;
  };
}

// NocoBaseClient é um type alias para APIClient do SDK
type NocoBaseClient = APIClient;
```
<!-- AGENTS-GENERATED:END api-reference -->

<!-- AGENTS-GENERATED:START usage-examples -->
## Usage Examples

### Listar dados com paginação e relações
```typescript
import { nocobaseRepository } from "#/features/repositories";
import type { Users } from "#/@types/generated/crm/collections";

const response = await nocobaseRepository.list<Users>("users", {
  page: 1,
  pageSize: 20,
  filter: { status: { $eq: "active" } },
  appends: ["roles"], // Type-safe: apenas relações que existem na collection
});

// response.data: Users[]
// response.meta.total: número total de registros
```

### Criar/atualizar registro
```typescript
import { nocobaseRepository } from "#/features/repositories";
import type { Users } from "#/@types/generated/crm/collections";

const user = await nocobaseRepository.create<Users>("users", {
  email: "user@example.com",
  nickname: "User",
});

await nocobaseRepository.update("users", user.id, { phone: "123456789" });
```

### Buscar com relações incluídas
```typescript
import { nocobaseRepository } from "#/features/repositories";

const user = await nocobaseRepository.get<Users>("users", 123, {
  appends: ["departments", "roles"],
  fields: ["id", "email", "nickname"], // campos específicos
});
```

### Contar registros com filtro
```typescript
import { nocobaseRepository } from "#/features/repositories";

const { count } = await nocobaseRepository.count("users", {
  filter: { status: { $eq: "active" } },
});
```

### IXC com filtros complexos
```typescript
import { ixcRepository } from "#/features/repositories";

const contratos = await ixcRepository.getContratos<ContratoWithCliente>({
  page: 1,
  pageSize: 20,
  filters: {
    cpfCnpj: "12345678900",
    status: "A",
  },
});
```

### Requisição direta com config customizada
```typescript
import { ixcRepository } from "#/features/repositories";

const data = await ixcRepository.request<MyType>({
  url: "custom:endpoint",
  method: "POST",
  data: { custom: "payload" },
  headers: { "X-Custom-Header": "value" },
});
```
<!-- AGENTS-GENERATED:END usage-examples -->

<!-- AGENTS-GENERATED:START architecture -->
## Architecture Notes

### Por que repositórios?
- **Separação de responsabilidades**: Serviços não dependem de clients diretamente
- **Type safety com collections geradas**: `CollectionMap[T]` e `CollectionRelationsMap[T]` previnem erro de digitação em nomes de collections e relações
- **Logging centralizado**: Todas as requisições são logadas automaticamente via `createLogger("repositories:...")`
- **Tratamento de erros**: Padrão consistente em todo o código
- **Testabilidade**: Repositórios podem ser mockados em testes
- **IXC integration transparente**: Header `X-Data-Source` aplicado automaticamente

### Arquitetura interna

```
┌─────────────────────────────────────┐
│     Service Layer (seu código)      │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│  NocoBaseRepository / IxcRepository │
│  - Logging                          │
│  - Error handling                   │
│  - Type-safe wrappers               │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     TypedNocoBaseClient             │
│  - Validação de collections         │
│  - Validação de relações            │
│  - Request builder                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     NocoBase APIClient (SDK)        │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│     NocoBase Backend / IXCSoft      │
```

### Quando usar
- ✅ Acessar dados do NocoBase ou IXCSoft
- ✅ Operações CRUD em collections
- ✅ Requisições customizadas com headers específicos
- ❌ Estado global (use `authStore`, `permissionsStore`)
- ❌ Regras de negócio (use `service.ts` do módulo)
- ❌ Autenticação direta (use `authService` ou `nocobaseRepository.signIn()`)
<!-- AGENTS-GENERATED:END architecture -->

<!-- AGENTS-GENERATED:START testing -->
## Testing

### Mock de repositórios (module-level)
```typescript
import { vi } from "vitest";
import { nocobaseRepository } from "#/features/repositories";
import type { Users } from "#/@types/generated/crm/collections";

vi.mock("#/features/repositories", () => ({
  nocobaseRepository: {
    list: vi.fn().mockResolvedValue({
      data: [{ id: 1, email: "test@example.com" }] as Users[],
      meta: { total: 1, page: 1, pageSize: 20 },
    }),
    get: vi.fn().mockResolvedValue({ id: 1, email: "test@example.com" } as Users),
    create: vi.fn().mockResolvedValue({ id: 1 } as Users),
    update: vi.fn().mockResolvedValue({ id: 1 } as Users),
    delete: vi.fn().mockResolvedValue(undefined),
    count: vi.fn().mockResolvedValue({ count: 1 }),
  },
}));
```

### Mock com `vi.spyOn()` (recomendado)
```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";
import { ixcRepository } from "#/features/repositories";
import { fetchContratos } from "./contratos-service";

describe("contratos-service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch contratos with filters", async () => {
    vi.spyOn(ixcRepository, "list").mockResolvedValue({
      data: [{ id: 1, contrato: "test" }],
      meta: { total: 1, page: 1, pageSize: 20 },
    });

    const result = await fetchContratos({
      filters: { status: "A" },
    });

    expect(result.data).toHaveLength(1);
    expect(ixcRepository.list).toHaveBeenCalledWith(
      "cliente_contrato",
      expect.objectContaining({
        filter: { status: { $eq: "A" } },
      }),
    );
  });
});
```

<!-- AGENTS-GENERATED:END testing -->

<!-- AGENTS-GENERATED:START help -->
## When stuck
- **Type errors com collections**: Verificar `src/@types/generated/crm/collections.ts` para collections e relações disponíveis
- **Tipos de retorno**: Usar `CollectionMap[CollectionName]` para obter o tipo correto da collection
- **Logging**: Rodar `pnpm dev` e inspecione console com filtro `repositories:` para debug de requisições
- **Operações NocoBase não documentadas**: Usar `nocobaseRepository.request()` para acesso direto à API
- **IXCSoft endpoints**: Consultar documentação IXC ou usar `nocobaseRepository.request()` para explorar endpoints
- **Erros de compilação em appends**: Verificar se a relação existe em `CollectionRelationsMap[T]`
<!-- AGENTS-GENERATED:END help -->
