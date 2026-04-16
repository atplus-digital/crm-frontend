<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — src

<!-- AGENTS-GENERATED:START overview -->

## Overview

Frontend application layer for CRM AT+ — React 19 + TypeScript + React Router v7 with NocoBase-backed modules in `src/features/` and shared infrastructure in `components`, `hooks`, `lib`, and `repositories`.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                | Purpose                                               |
| ----------------------------------- | ----------------------------------------------------- |
| `src/index.tsx`                     | SPA entrypoint that mounts React                      |
| `src/app.tsx`                       | Root app wrapper and `Outlet` composition             |
| `src/env.ts`                        | Runtime validation for `VITE_*` environment variables |
| `src/routes/router.tsx`             | Central route tree using `createBrowserRouter()`      |
| `src/components/query-provider.tsx` | TanStack Query provider wiring                        |
| `src/styles.css`                    | Global styles and Tailwind imports                    |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Route modules export `loader` (when needed) and `Component`; protected routes call `requireAuth()` in `loader`.
- Public auth routes call `requireGuest()` in `loader` to avoid showing login/reset screens for authenticated users.
- Prefer imports via `#/` alias; avoid deep relative paths across modules.
- Keep business logic in `src/features/` services/hooks and keep UI composition in pages/components.
- For paginated tables, use `DataTableWithPagination` and `usePagination` instead of custom pagination state.
- Use `buildFilter()` helpers from `#/lib/filter-builder` for NocoBase/IXC filters.
- **Always use `<Link to="...">` from `react-router` for internal navigation.** Never use `<a href="...">` for routes that exist in the app — it causes full-page reloads and breaks SPA behavior. Only use `<a>` for external links (off-site URLs).

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                   | Reference file                         |
| ------------------------- | -------------------------------------- |
| Router configuration      | `src/routes/router.tsx`                |
| Protected route loader    | `src/routes/dashboard.tsx`             |
| Public auth route loader  | `src/routes/auth/login.tsx`            |
| Auth module barrel export | `src/features/auth/index.ts`           |
| Shared repository usage   | `src/features/cs/contratos-service.ts` |

<!-- AGENTS-GENERATED:END golden-samples -->

## Scoped AGENTS.md (MUST read when working in these directories)

<!-- AGENTS-GENERATED:START scope-index -->

- `./src/components/AGENTS.md` — Shared UI building blocks and app-level reusable components
- `./src/components/layout/AGENTS.md` — Authenticated app shell layout and navigation composition
- `./src/features/AGENTS.md` — Cross-feature conventions and folder structure for domain modules
- `./src/features/auth/AGENTS.md` — Authentication module
- `./src/features/cs/AGENTS.md` — Customer Success domain (contratos, negociações, pessoas)
- `./src/features/custom-requests/AGENTS.md` — Custom request registry/services/hooks
- `./src/features/permissions/AGENTS.md` — Permissions, actions/snippets and navigation guards
- `./src/hooks/AGENTS.md` — Shared cross-feature hooks
- `./src/lib/AGENTS.md` — Pure utilities and formatting/filter/logging helpers
- `./src/repositories/AGENTS.md` — NocoBase/IXC data access layer

<!-- AGENTS-GENERATED:END scope-index -->

## When instructions conflict

The nearest `AGENTS.md` wins.
