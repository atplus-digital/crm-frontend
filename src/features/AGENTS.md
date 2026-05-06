<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — features

<!-- AGENTS-GENERATED:START overview -->

## Overview

Feature modules by domain; each folder in `src/features/` owns its contracts, services, hooks, and optional UI for a business area.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File           | Purpose                                                                                       |
| -------------- | --------------------------------------------------------------------------------------------- |
| `auth/`        | Authentication feature (client, guards, service, store, types, UI)                            |
| `cs/`          | Customer Success feature (contracts, negotiations, people, domain UI)                         |
| `permissions/` | RBAC feature (permission compute, store, guards, hooks, nav filtering) — lives inside `auth/` |
| `<feature>/`   | New feature folder with its own scoped `AGENTS.md`                                            |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

### Mandatory Folder Structure

Two conventions coexist in this project. New features should follow **Convention A**; CS subdomains follow **Convention B**.

**Convention A** — subfolder-organized (preferred for new features):

```
<feature>/
├── AGENTS.md
├── index.ts                    # Barrel export — public API only
├── components/                 # UI components (React)
│   ├── *.tsx
│   └── *.ts (colocated helpers)
├── hooks/                      # React hooks
│   └── *.ts
├── utils/                      # Pure utility functions, helpers
│   └── *.ts
└── __tests__/                 # Co-located tests
    └── *.test.ts
```

**Convention B** — flat root files (CS subdomains only):

```
<subdomain>/
├── AGENTS.md
├── <subdomain>-types.ts         # Domain types and interfaces
├── <subdomain>-service.ts       # Repository/service calls
├── <subdomain>-hooks.ts         # React Query hooks
├── <subdomain>-table.tsx        # List table composition (if applicable)
├── <subdomain>-filters.tsx      # Filter components (if applicable)
├── components/                 # Detail-specific UI components
│   └── *.tsx
├── <subdomain>-detalhes-tab/   # Detail tab decomposed components (if applicable)
│   └── *.tsx
└── utils/                      # Domain utilities (if applicable)
    └── *.ts
```

**Rules:**

1. New top-level features (e.g., `auth`, `custom-requests`) should use **Convention A** with proper subfolders.
2. CS subdomains (`cs/contratos`, `cs/negociacoes`, `cs/pessoas`, etc.) follow **Convention B** — flat root files with the `*-types.ts` + `*-service.ts` + `*-hooks.ts` trio.
3. In Convention B, subdomain-specific components go in `components/` or tab subfolders (e.g., `*-detalhes-tab/`).
4. `__tests__/` only exist **if needed** — do not create empty folders.
5. Barrel exports (`index.ts`) exist in Convention A features; CS subdomains do **not** have barrel exports (import directly from specific files).

### Import Convention

- **Convention A features**: External modules import from `#/features/<feature>` (barrel only).
- **CS subdomains**: External modules import from specific files (e.g., `#/features/cs/contratos/contratos-service`). No barrel export.
- Internal subfolder imports use `#/features/<feature>/<subfolder>`.
- **Never** deep-import from `#/features/<feature>/components/X` outside the feature itself.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                        | Reference file                                  |
| ------------------------------ | ----------------------------------------------- |
| Feature with components folder | `src/features/cs/contratos/contratos-table.tsx` |
| Feature public API barrel      | `src/features/auth/index.ts`                    |
| Feature guard/store pattern    | `src/features/auth/permissions/guards.ts`       |
| Scoped feature docs            | `src/features/cs/AGENTS.md`                     |

<!-- AGENTS-GENERATED:END golden-samples -->
