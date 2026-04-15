<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-14 -->

# AGENTS.md — custom-requests

<!-- AGENTS-GENERATED:START overview -->

## Overview

Custom Requests module — dynamic request configuration, validation schemas, and service layer for managing custom API requests.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File          | Purpose                                                  |
| ------------- | -------------------------------------------------------- |
| `index.ts`    | Barrel export — registry, schemas, service, hooks, types |
| `registry.ts` | Registry pattern for custom request configurations       |
| `schemas.ts`  | Zod schemas for custom request validation                |
| `types.ts`    | TypeScript interfaces and error classes                  |
| `service.ts`  | Service layer for CRUD operations on custom requests     |
| `hooks.ts`    | React hooks for custom requests functionality            |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Export only through `index.ts`; external modules should not import sub-files directly.
- Service methods throw "Not implemented" errors until logic is added.
- Use Zod schemas for all request validation — types inferred via `z.infer`.
- Hooks follow React conventions — to be implemented with proper state management.
<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern               | Reference file                 |
| --------------------- | ------------------------------ |
| Barrel import usage   | `src/features/auth/index.ts`   |
| Service layer pattern | `src/features/auth/service.ts` |
| Zod schema pattern    | `src/features/auth/types.ts`   |

<!-- AGENTS-GENERATED:END golden-samples -->
