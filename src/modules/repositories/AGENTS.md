<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-13 -->

# AGENTS.md — repositories

<!-- AGENTS-GENERATED:START overview -->
## Overview
Repositórios de dados — camada de acesso a dados externos (NocoBase, IXCSoft) com type safety, logging estruturado e tratamento de erros padronizado.
<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->
## Key Files
| File                      | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| `index.ts`                | Barrel export — repositórios e tipos                                    |
| `nocobase-repository.ts`  | `NocoBaseRepository` — wrappers para operações NocoBase                 |
| `ixc-repository.ts`       | `IxcRepository` — operações IXCSoft com header `X-Data-Source`          |
| `types.ts`                | Tipos compartilhados: `ApiRequestConfig`, `ListParams`, `PaginatedResponse` |
<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->
## Patterns
- Import de `#/modules/repositories` — não importar de sub-arquivos diretamente
- Repositórios são singletons exportados: `nocobaseRepository`, `ixcRepository`
- Serviços de domínio usam repositórios, não clients diretamente
- Logging estruturado via `createLogger("repositories:...")`
- Type safety em todas as operações — evitar `any` ou type narrowing excessivo
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START api-reference -->
## Main Functions & API

### NocoBaseRepository

| Method | Purpose | Example |
|--------|---------|---------|
| `request<T>(config)` | Requisição direta ao NocoBase | `nocobaseRepository.request<{data: T}>({url: "users:list", method: "GET"})` |
| `list<T>(collection, params)` | Listar registros com paginação | `nocobaseRepository.list<User>("users", {page: 1, pageSize: 20})` |
| `get<T>(collection, id)` | Buscar por ID | `nocobaseRepository.get<User>("users", 123)` |
| `create<T>(collection, data)` | Criar registro | `nocobaseRepository.create<User>("users", {email: "..."})` |
| `update<T>(collection, id, data)` | Atualizar registro | `nocobaseRepository.update("users", 123, {email: "..."})` |
| `delete(collection, id)` | Remover registro | `nocobaseRepository.delete("users", 123)` |
| `signIn(credentials)` | Autenticação | `nocobaseRepository.signIn({email, password})` |
| `signOut()` | Logout | `nocobaseRepository.signOut()` |
| `checkAuth<T>()` | Verificar token | `nocobaseRepository.checkAuth<AuthUser>()` |
| `clearToken()` | Limpar token | `nocobaseRepository.clearToken()` |

### IxcRepository

| Method | Purpose | Example |
|--------|---------|---------|
| `request<T>(config)` | Requisição ao IXC (header aplicado automaticamente) | `ixcRepository.request({url: "cliente_contrato:list", method: "GET"})` |
| `list<T>(endpoint, params)` | Listar do IXC com paginação | `ixcRepository.list<Contrato>("cliente_contrato", {page: 1})` |
| `get<T>(endpoint, id)` | Buscar por ID | `ixcRepository.get<Contrato>("cliente_contrato", 123)` |
| `getContratos<T>(params)` | Listar contratos com filtros | `ixcRepository.getContratos({filters: {cpfCnpj: "123..."}})` |

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
    [key: string]: unknown;
  };
}
```
<!-- AGENTS-GENERATED:END api-reference -->

<!-- AGENTS-GENERATED:START usage-examples -->
## Usage Examples

### Listar dados com paginação
```typescript
import { nocobaseRepository } from "#/modules/repositories";

const response = await nocobaseRepository.list<User>("users", {
  page: 1,
  pageSize: 20,
  filter: { status: { $eq: "active" } },
  appends: ["roles"],
});
```

### Criar/atualizar registro
```typescript
import { nocobaseRepository } from "#/modules/repositories";

const user = await nocobaseRepository.create<User>("users", {
  email: "user@example.com",
  nickname: "User",
});

await nocobaseRepository.update("users", user.id, { phone: "123456789" });
```

### IXC com filtros complexos
```typescript
import { ixcRepository } from "#/modules/repositories";

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
import { ixcRepository } from "#/modules/repositories";

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
- **Type safety**: Wrappers tipados para operações comuns
- **Logging centralizado**: Todas as requisições são logadas automaticamente
- **Tratamento de erros**: Padrão consistente em todo o código
- **Testabilidade**: Repositórios podem ser mockados em testes

### Quando usar
- ✅ Acessar dados do NocoBase ou IXCSoft
- ✅ Operações CRUD em coleções
- ✅ Requisições customizadas com headers específicos
- ❌ Estado global (use `authStore`, `permissionsStore`)
- ❌ Regras de negócio (use `service.ts` do módulo)
<!-- AGENTS-GENERATED:END architecture -->

<!-- AGENTS-GENERATED:START testing -->
## Testing

### Mock de repositórios
```typescript
import { vi } from "vitest";
import { nocobaseRepository } from "#/modules/repositories";

vi.mock("#/modules/repositories", () => ({
  nocobaseRepository: {
    list: vi.fn().mockResolvedValue({ data: [], meta: {} }),
    get: vi.fn().mockResolvedValue({ id: 1, email: "test@example.com" }),
  },
}));
```

### Teste de service usando repositório
```typescript
import { describe, it, expect, vi } from "vitest";
import { fetchContratos } from "./contratos-service";
import { ixcRepository } from "#/modules/repositories";

describe("contratos-service", () => {
  it("should fetch contratos with filters", async () => {
    vi.spyOn(ixcRepository, "list").mockResolvedValue({
      data: [{ id: 1, contrato: "test" }],
      meta: { total: 1 },
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
- Verificar tipos em `src/modules/repositories/types.ts`
- Logging: rods `pnpm dev` e inspecione console com filtro `repositories:`
- Para operações NocoBase não documentadas, use `nocobaseRepository.request()` direto
- IXCSoft: consultar documentação IXC para endpoints disponíveis
<!-- AGENTS-GENERATED:END help -->
