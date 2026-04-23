<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — custom-requests

<!-- AGENTS-GENERATED:START overview -->

## Overview

Custom Requests module — typed registry + Zod validation for dynamic `customRequests:send/<key>` calls, with service wrappers and React Query hooks.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                | Purpose                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------- |
| `index.ts`                          | Barrel export for registry, schemas, service, hooks, errors, and types                |
| `registry.ts`                       | Canonical map of custom request keys/config/options (core - kept at root)             |
| `schemas.ts`                        | Payload schemas and inferred payload union for each request key (registry-bound)      |
| `types.ts`                          | Shared types for keys, collections, payload mapping, and service contracts            |
| `hooks/hooks.ts`                    | React Query hooks for listing requests and sending mutations                          |
| `utils/errors.ts`                   | Domain errors and Zod-to-Portuguese message mapping                                   |
| `utils/service.ts`                  | `sendCustomRequest()` + helpers (`getRequestsByCollection`, `getCustomRequestConfig`) |
| `__tests__/custom-requests.test.ts` | Baseline test scaffold for this module                                                |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- External modules import from `#/features/custom-requests`; avoid sub-file imports.
- Request payload validation must happen via registry-bound Zod schemas before API calls.
- API calls go through `nocobaseRepository.request()` with endpoint `customRequests:send/<key>`.
- Error translation for UI messages should use `mapZodErrorToPortuguese()` and module error classes.
- React Query hooks in `hooks.ts` are thin wrappers around service/registry logic.
- `useCustomRequests()` is intentionally placeholder and currently throws `Not implemented`.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                     | Reference file                                  |
| --------------------------- | ----------------------------------------------- |
| Registry + schema binding   | `src/features/custom-requests/registry.ts`      |
| Typed request execution     | `src/features/custom-requests/utils/service.ts` |
| Mutation/query hook wrapper | `src/features/custom-requests/hooks/hooks.ts`   |
| Validation error mapping    | `src/features/custom-requests/utils/errors.ts`  |

<!-- AGENTS-GENERATED:END golden-samples -->
