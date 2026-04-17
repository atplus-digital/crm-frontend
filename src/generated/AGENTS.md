<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-17 -->

# AGENTS.md — generated

<!-- AGENTS-GENERATED:START overview -->

## Overview

Auto-generated TypeScript types from NocoBase and IXC collection schemas — **single source of truth** for all API data structures.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File | Purpose |
|------|---------|
| `nocobase/` | Generated types from NocoBase collections (`t_pessoas`, `t_empresas`, etc.) |
| `ixc/` | Generated types from IXC ERP collections (`cliente`, `cliente_contrato`, etc.) |
| `nocobase/index.ts` | Barrel export for all NocoBase collection types |
| `ixc/index.ts` | Barrel export for all IXC collection types |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **NEVER** manually redefine interfaces that exist in `src/generated/`
- **ALWAYS** use `type X = GeneratedType` or `Pick<GeneratedType, ...>` when extending
- Repository/service calls **MUST** use generated collection types as input/output boundaries
- Relationship/appends payloads (e.g., `f_nc_cliente`) **MUST** derive from generated interfaces via `Pick`/`Omit`
- If a collection type is missing, update `scripts/generate-types/datasources.config.ts` and regenerate — **do not create manual fallback**
- This folder is **auto-generated** — never edit files here directly

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START commands -->

## Commands

```bash
# Regenerate all types from NocoBase/IXC schemas
pnpm generate-types

# Verify generated types are up-to-date
pnpm typecheck
```

<!-- AGENTS-GENERATED:END commands -->

<!-- AGENTS-GENERATED:START collection-reference -->

## Collection Reference

### NocoBase Collections

| Collection | Generated Type | Import Path |
|------------|---------------|-------------|
| `t_pessoas` | `Pessoas` | `#/generated/nocobase/pessoas` |
| `t_empresas` | `Empresas` | `#/generated/nocobase/empresas` |
| `t_negociacoes` | `Negociacoes` | `#/generated/nocobase/negociacoes` |
| `t_crm_troca_titularidade` | `CrmTrocaTitularidade` | `#/generated/nocobase/crm-troca-titularidade` |
| `t_registros_de_contato` | `RegistrosDeContato` | `#/generated/nocobase/registros-de-contato` |

### IXC Collections

| Collection | Generated Type | Import Path |
|------------|---------------|-------------|
| `cliente` | `Cliente` | `#/generated/ixc/cliente` |
| `cliente_contrato` | `ClienteContrato` | `#/generated/ixc/cliente-contrato` |
| `linha_mvno` | `LinhaMvno` | `#/generated/ixc/linha-mvno` |
| `vd_contratos_produtos` | `VdContratosProdutos` | `#/generated/ixc/vd-contratos-produtos` |
| `fn_areceber` | `FnAreceber` | `#/generated/ixc/fn-areceber` |
| `su_ticket` | `SuTicket` | `#/generated/ixc/su-ticket` |

<!-- AGENTS-GENERATED:END collection-reference -->

<!-- AGENTS-GENERATED:START usage-examples -->

## Usage Examples

### ✅ CORRECT - Use generated type

```typescript
import type { Pessoas } from "#/generated/nocobase/pessoas";

export type PessoaFisica = Pessoas;
```

### ✅ CORRECT - Extend with Pick

```typescript
import type { Pessoas } from "#/generated/nocobase/pessoas";

export type PessoaListItem = Pick<Pessoas, 'id' | 'f_nome' | 'f_email'>;
```

### ❌ WRONG - Manual duplication

```typescript
// NEVER DO THIS
export interface Pessoas {
  id: number;
  f_nome: string;
  // ...
}
```

<!-- AGENTS-GENERATED:END usage-examples -->

<!-- AGENTS-GENERATED:START generation-process -->

## Generation Process

**Config file:** `scripts/generate-types/datasources.config.ts`

**Steps:**
1. Script fetches collection schemas from NocoBase/IXC APIs
2. Extracts field definitions, types, enums, and relations
3. Generates TypeScript interfaces with proper typing
4. Writes to `src/generated/nocobase/` and `src/generated/ixc/`
5. Updates barrel exports in `index.ts` files

**When to regenerate:**
- After adding/modifying collections in NocoBase
- After schema changes (new fields, type changes)
- When TypeScript errors indicate missing collection types

<!-- AGENTS-GENERATED:END generation-process -->

<!-- AGENTS-GENERATED:START troubleshooting -->

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Missing collection type | Add collection to `datasources.config.ts` and run `pnpm generate-types` |
| Type mismatch with API | Regenerate types — collection schema may have changed |
| Import path errors | Use `#/generated/nocobase/*` or `#/generated/ixc/*` aliases |
| Relation types missing | Use `Pick<GeneratedType, 'relationField'>` to extract |

<!-- AGENTS-GENERATED:END troubleshooting -->

## When instructions conflict

The nearest `AGENTS.md` wins. Root `AGENTS.md` takes precedence for type definition rules.
