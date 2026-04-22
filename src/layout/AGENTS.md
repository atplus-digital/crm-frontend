<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-04-16 -->

# AGENTS.md — layout

<!-- AGENTS-GENERATED:START overview -->

## Overview

Application shell layout — shared header, sidebar, and dashboard frame used by authenticated routes.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                                 | Purpose                                                                      |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| `dashboard-layout.tsx`               | Wraps authenticated content with sidebar provider, app header, and main area |
| `app-header.tsx`                     | Header shell with sidebar trigger and top-level section navigation           |
| `app-sidebar/app-sidebar.tsx`        | Sidebar composition with branding, navigation, and user footer menu          |
| `app-sidebar/sidebar-navigation.tsx` | Renders sidebar items for the active top-level section                       |
| `app-sidebar/sidebar-header.tsx`     | Sidebar brand/header link back into the app                                  |
| `app-sidebar/sidebar-user-menu.tsx`  | User avatar dropdown and sign-out entry                                      |
| `app-sidebar/use-user-initials.ts`   | Derives initials and display fallback for the sidebar user menu              |
| `app-sidebar/index.ts`               | Local re-exports for layout sidebar building blocks                          |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- Keep app-shell navigation declarative: header and sidebar must derive from `#/features/permissions/nav-config`.
- Layout components stay presentational; auth and permission state should be read via exported stores/hooks, not ad-hoc local logic.
- Sidebar item active state must support nested detail routes via shared path-matching helpers instead of exact pathname checks.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                           | Reference file                                  |
| --------------------------------- | ----------------------------------------------- |
| Shell composition                 | `src/layout/dashboard-layout.tsx`               |
| Section-driven sidebar navigation | `src/layout/app-sidebar/sidebar-navigation.tsx` |
| Header + shared top navigation    | `src/layout/app-header.tsx`                     |

<!-- AGENTS-GENERATED:END golden-samples -->
