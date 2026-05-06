<!-- Managed by agent: keep sections and order; edit content, not structure. Last updated: 2026-05-06 -->

# AGENTS.md — pages

<!-- AGENTS-GENERATED:START overview -->

## Overview

Page composition layer — assembles feature components into full screens with page-level state management. Routes import from here; pages import from features.

<!-- AGENTS-GENERATED:END overview -->

<!-- AGENTS-GENERATED:START filemap -->

## Key Files

| File                 | Purpose                                                               |
| -------------------- | --------------------------------------------------------------------- |
| `auth/`              | Login, reset-password, and reset-password-confirm pages               |
| `cs/`                | Customer Success domain pages (contracts, negotiations, people, etc.) |
| `cs/*/`-detail-tabs/ | Tab components for detail views (lazy-loaded as route children)       |
| `cs/*/`-tabs/        | Tab components for list views (e.g., PF/PJ tabs in pessoas)           |
| `not-found/`         | 404 catch-all page                                                    |
| `profile/`           | User profile settings page                                            |
| `testes/`            | Dev/debug page (not gated behind `isDev`)                             |

<!-- AGENTS-GENERATED:END filemap -->

<!-- AGENTS-GENERATED:START patterns -->

## Patterns

- **Thin composition layer**: Pages compose feature components; no business logic lives here.
- **Tab decomposition**: Detail pages use `-tabs/` subfolders; each tab is a lazy-loaded route child.
- **State orchestration**: URL state, filter coordination, and query integration happen at this layer.
- Pages import from `#/features/*` and `#/components/*`; never from `#/repositories/*` directly.
- Use `PageLayout` from `#/components/page-layout` for consistent header/tabs/content structure.

<!-- AGENTS-GENERATED:END patterns -->

<!-- AGENTS-GENERATED:START anti-patterns -->

## Anti-Patterns

| ❌ Avoid                              | ✅ Use                                       |
| ------------------------------------- | -------------------------------------------- |
| API calls directly in page components | Feature service hooks from `#/features/*`    |
| Business logic in pages               | Keep logic in features; pages compose        |
| Manual Tabs + layout wrappers         | `PageLayout` from `#/components/page-layout` |
| Direct repository imports             | Feature service hooks                        |

<!-- AGENTS-GENERATED:END anti-patterns -->

<!-- AGENTS-GENERATED:START golden-samples -->

## Golden Samples

| Pattern                    | Reference file                                                 |
| -------------------------- | -------------------------------------------------------------- |
| Detail page with tabs      | `src/pages/cs/contratos/contrato-detail.tsx`                   |
| List page composition      | `src/pages/cs/negociacoes/negociacoes.tsx`                     |
| Tab component (lazy child) | `src/pages/cs/negociacoes/negociacao-detail-tabs/detalhes.tsx` |
| Page with PageLayout       | `src/pages/cs/vendas/vendas.tsx`                               |

<!-- AGENTS-GENERATED:END golden-samples -->
