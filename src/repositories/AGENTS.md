<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — repositories

<!-- AGENTS-GENERATED:START overview -->

## Overview

Data-access layer for NocoBase and IXC — typed repository wrappers with centralized logging, normalization, and shared request contracts.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                     | Purpose                                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `index.ts`               | Public barrel export for repositories and shared request/pagination types                             |
| `nocobase-repository.ts` | `NocoBaseRepository` and internal `TypedNocoBaseClient` for typed collection CRUD/auth calls          |
| `ixc-repository.ts`      | `IxcRepository` with IXC datasource header and IXC response normalization                             |
| `types.ts`               | Shared repository contracts (`ApiRequestConfig`, `ListParams`, `PaginatedResponse`, `NocoBaseClient`) |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Import repositories from `#/repositories`; avoid deep imports from individual files in external modules.
- Domain services call repositories, not SDK clients directly.
- Use `createLogger("repositories:...")` in repository code paths.
- IXC calls must include `X-Data-Source: d_db_ixcsoft` (handled in `IxcRepository`).
- Typed collection methods in `NocoBaseRepository` should remain the default for CRUD on generated collections.
- Repository call boundaries MUST be typed with `src/generated/**` interfaces; avoid manual collection interfaces in services.
- If a needed collection type is missing, update `scripts/generate-types/datasources.config.ts` and run `pnpm generate-types` before creating any manual fallback.
- Appended relation objects returned by repositories must also derive from generated types (`Pick`/`Omit`), not hand-written interfaces.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START api-reference -->

## Main Functions & API

### NocoBaseRepository

| Method                         | Purpose                                               |
| ------------------------------ | ----------------------------------------------------- |
| `request<T>(config)`           | Low-level request passthrough for custom endpoints    |
| `list(collection, params)`     | Typed paginated list with filter/sort/appends support |
| `get(collection, id, options)` | Typed single-record fetch                             |
| `create(collection, data)`     | Typed record create                                   |
| `update(collection, id, data)` | Typed record update                                   |
| `delete(collection, id)`       | Record deletion                                       |
| `count(collection, params)`    | Count helper with optional filter                     |
| `signIn(credentials)`          | Authentication endpoint wrapper                       |
| `signOut()`                    | Logout endpoint wrapper                               |
| `checkAuth<T>()`               | Auth check wrapper                                    |
| `clearToken()`                 | Clears SDK auth token                                 |

### IxcRepository

| Method                      | Purpose                                       |
| --------------------------- | --------------------------------------------- |
| `request<T>(config)`        | IXC request with datasource header injection  |
| `list<T>(endpoint, params)` | IXC paginated listing with normalized meta    |
| `get<T>(endpoint, id)`      | First-record by ID lookup on `:list` endpoint |
| `getContratos<T>(params)`   | Contract list helper with common IXC filters  |

<!-- AGENTS-GENERATED:END api-reference -->

<!-- AGENTS-GENERATED:START usage-examples -->

## Usage Examples

```typescript
import { ixcRepository, nocobaseRepository } from "#/repositories";

const users = await nocobaseRepository.list("users", {
  page: 1,
  pageSize: 20,
  appends: ["roles"],
});

const contratos = await ixcRepository.getContratos({
  page: 1,
  pageSize: 20,
  filters: { status: "A" },
});
```

<!-- AGENTS-GENERATED:END usage-examples -->

<!-- AGENTS-GENERATED:START architecture -->

## Architecture Notes

- Repository classes isolate transport-level concerns (headers, pagination normalization, raw request signatures).
- Service layer keeps business rules and composes repositories, while repositories stay focused on IO.
- `TypedNocoBaseClient` protects collection/relation names at compile time for generated schema usage.

<!-- AGENTS-GENERATED:END architecture -->

<!-- AGENTS-GENERATED:START testing -->

## Testing

```typescript
import { vi } from "vitest";
import { nocobaseRepository } from "#/repositories";

vi.spyOn(nocobaseRepository, "list").mockResolvedValue({
  data: [],
  meta: { total: 0, page: 1, pageSize: 20 },
});
```

Prefer `vi.spyOn()` on singleton exports (`nocobaseRepository`, `ixcRepository`) in service tests.

<!-- AGENTS-GENERATED:END testing -->

<!-- AGENTS-GENERATED:START help -->

## When stuck

- Check generated collection typings in `src/generated/nocobase/collections.ts` when CRUD types fail.
- Use `request<T>()` for unsupported/custom endpoints, then move to typed methods when stable.
- Trace repository logs with prefix `repositories:` during local debugging.

<!-- AGENTS-GENERATED:END help -->
