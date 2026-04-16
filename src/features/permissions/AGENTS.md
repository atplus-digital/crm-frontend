<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — permissions

<!-- AGENTS-GENERATED:START overview -->

## Overview

Permissions/RBAC module — role normalization, effective actions/snippets calculation, store state, route guards, and permission-aware hooks/navigation filtering.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File            | Purpose                                                                           |
| --------------- | --------------------------------------------------------------------------------- |
| `index.ts`      | Public barrel export for compute/guards/hooks/store/types/nav helpers             |
| `types.ts`      | Zod schemas and types for permission roles and permission state                   |
| `compute.ts`    | `mergeActions()` and `mergeSnippets()` normalization logic                        |
| `store.ts`      | TanStack Store and state updaters (`setPermissionsFromRoles`, `resetPermissions`) |
| `guards.ts`     | Runtime guards (`requireAction`, `requireSnippet`)                                |
| `hooks.ts`      | UI hooks (`useCan`, `useHasSnippet`, `useCanEdit`, `useRoleNames`, `useIsAdmin`)  |
| `nav-config.ts` | Navigation config contract + permission-based nav filtering                       |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Update permission state only through `setPermissionsFromRoles()` and `resetPermissions()`.
- Keep action/snippet wildcard and deny (`!`) resolution centralized in `compute.ts`.
- UI and route checks should consume exported hooks/guards; avoid direct ad-hoc string checks in components.
- External modules import from `#/features/permissions`, never from sub-files.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                           | Reference file                        |
| --------------------------------- | ------------------------------------- |
| Permission merge rules            | `src/features/permissions/compute.ts` |
| Hook-based permission checks      | `src/features/permissions/hooks.ts`   |
| Guard-based enforcement           | `src/features/permissions/guards.ts`  |
| Auth integration with permissions | `src/features/auth/service.ts`        |

<!-- AGENTS-GENERATED:END golden-samples -->
