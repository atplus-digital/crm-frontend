<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-06 -->

# AGENTS.md — generated

<!-- AGENTS-GENERATED:START overview -->

## Overview

Auto-generated TypeScript types from NocoBase and IXC schemas — the single source of truth for all collection interfaces. Do NOT edit manually; regenerate via scripts.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                    | Purpose                                                          |
| --------------------------------------- | ---------------------------------------------------------------- |
| `types/nocobase/`                       | NocoBase collection types (pessoas, empresas, negociacoes, etc.) |
| `types/nocobase/collections.ts`         | Aggregated NocoBase collection registry                          |
| `types/d_db_ixcsoft/`                   | IXC database types (cliente, cliente-contrato, linha-mvno, etc.) |
| `types/d_db_ixcsoft/collections.ts`     | Aggregated IXC collection registry                               |
| `custom-requests/generated-registry.ts` | Generated typed wrappers for custom NocoBase API requests        |
| `custom-requests/nocobase/`             | Split custom request modules for NocoBase                        |
| `custom-requests/d_db_ixcsoft/`         | Split custom request modules for IXC                             |
| `*/generation-report.md`                | Per-database generation audit logs                               |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Each collection directory contains `index.ts` (re-exports), `schemas.ts` (Zod schemas), and `labels.ts` (field display labels).
- All interfaces derive from NocoBase/IXC schema definitions; never redefine them in application code.
- Use `type X = GeneratedType` or `Pick<GeneratedType, ...>` in features/services.
- Repository call boundaries and relation/appends payloads must also use generated types.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                                             | ✅ Use                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------- |
| Manual interface matching NocoBase fields            | `import type { Pessoas } from "#/generated/types/nocobase/pessoas"` |
| `Pick` from hand-written interfaces                  | `Pick<GeneratedType, "field1" \| "field2">`                         |
| Editing files in this directory                      | `pnpm generate-types` to regenerate                                 |
| Committing generated files without running generator | Always regenerate before committing schema changes                  |

<!-- AGENTS-GENERATED:END anti-patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                         | Reference file                                       |
| ------------------------------- | ---------------------------------------------------- |
| Using generated type in service | `src/features/cs/pessoas/pessoas-service.ts`         |
| Pick from generated for appends | `src/features/cs/negociacoes/negociacoes-service.ts` |

<!-- AGENTS-GENERATED:END golden-samples -->
