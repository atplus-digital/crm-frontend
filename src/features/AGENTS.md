<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — features

<!-- AGENTS-GENERATED:START overview -->

## Overview

Feature modules by domain; each folder in `src/features/` owns its contracts, services, hooks, and optional UI for a business area.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File               | Purpose                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `auth/`            | Authentication feature (client, guards, service, store, types, UI)                            |
| `cs/`              | Customer Success feature (contracts, negotiations, people, domain UI)                         |
| `custom-requests/` | Typed custom request registry/service/hooks for dynamic backend actions                       |
| `permissions/`     | RBAC feature (permission compute, store, guards, hooks, nav filtering) — lives inside `auth/` |
| `<feature>/`       | New feature folder with its own scoped `AGENTS.md`                                            |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Each feature must have a scoped `AGENTS.md` and should expose its public API through `index.ts`.
- Keep domain logic at feature root (`types.ts`, `service.ts`, `schemas.ts`, `store.ts`, `guards.ts`) and move files by concern into subfolders.
- `components/` is optional, but when a feature has UI components they must live in `components/`.
- `hooks/` is optional, but when a feature has React hooks they must live in `hooks/` (avoid mixing hook files at feature root in new code).
- Recommended optional folders as complexity grows: `services/`, `types/`, `schemas/`, `utils/`, and `__tests__/`.
- External imports should use `#/features/<feature>`; avoid deep imports from sub-files.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                        | Reference file                                  |
| ------------------------------ | ----------------------------------------------- |
| Feature with components folder | `src/features/cs/contratos/contratos-table.tsx` |
| Feature public API barrel      | `src/features/auth/index.ts`                    |
| Feature hook wrapper           | `src/features/custom-requests/hooks.ts`         |
| Feature guard/store pattern    | `src/features/auth/permissions/guards.ts`       |
| Scoped feature docs            | `src/features/cs/AGENTS.md`                     |

<!-- AGENTS-GENERATED:END golden-samples -->
