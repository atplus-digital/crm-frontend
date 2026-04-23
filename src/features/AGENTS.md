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

### Mandatory Folder Structure

Every feature **must** conform to this structure. Only create subfolders that are actually needed.

```
<feature>/
├── AGENTS.md
├── index.ts                    # Barrel export — public API only
├── components/                 # UI components (React) — ONLY if present
│   ├── *.tsx
│   └── *.ts (colocated helpers)
├── hooks/                      # React hooks — ONLY if present
│   └── *.ts
├── utils/                      # Pure utility functions, helpers — ONLY if present
│   └── *.ts
└── __tests__/                 # Co-located tests — ONLY if present
    └── *.test.ts
```

**Rules:**

1. **No files at feature root** except `AGENTS.md` and `index.ts`.
2. All `.ts`/`.tsx` files with business logic, types, services, stores, guards, schemas, or hooks **must** live inside the appropriate subfolder.
3. **Never** mix different concerns at feature root (e.g., `service.ts` + `hooks.ts` + `types.ts` all at root is forbidden).
4. `components/`, `hooks/`, `utils/`, and `__tests__/` only exist **if needed** — do not create empty folders.
5. For nested subdomains (e.g., `cs/contratos/`, `cs/negociacoes/`), the same rules apply recursively.

### Import Convention

- External modules import from `#/features/<feature>` (barrel only).
- Internal subfolder imports use `#/features/<feature>/<subfolder>`.
- **Never** deep-import from `#/features/<feature>/components/X` outside the feature itself.

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
