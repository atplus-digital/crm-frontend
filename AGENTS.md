<!-- FOR AI AGENTS - Human readability is a side effect, not a goal -->
<!-- Managed by agent: keep sections and order; edit content, not structure -->
<!-- Last updated: 2026-04-27 | Last verified: 2026-04-27 -->

# AGENTS.md — CRM AT+

**Project:** CRM AT+ — Customer Relationship Management system powered by NocoBase
**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, React Router v7, NocoBase SDK
**Precedence:** the **closest `AGENTS.md`** to the files you're changing wins. Root holds global defaults only.

## Commands

<!-- AGENTS-GENERATED:START commands -->

| Task                     | Command                                     | ~Time |
| ------------------------ | ------------------------------------------- | ----- |
| Dev server               | `pnpm dev`                                  | —     |
| Typecheck                | `pnpm typecheck` ou `pnpm dlx tsc --noEmit` | ~15s  |
| Lint + Format            | `pnpm biome:fix`                            | ~5s   |
| Test                     | `pnpm test`                                 | ~30s  |
| Build                    | `pnpm build`                                | ~30s  |
| Preview build            | `pnpm preview`                              | —     |
| Generate types           | `pnpm generate-types`                       | ~10s  |
| Check unused code        | `pnpm knip`                                 | ~10s  |
| Generate custom requests | `pnpm generate-custom-requests`             | ~15s  |

<!-- AGENTS-GENERATED:END commands -->

> If commands fail, verify against Makefile/package.json/composer.json or ask user to update.

## Workflow

1. **Before coding**: Read nearest `AGENTS.md` + check Golden Samples for the area you're touching
2. **After each change**: Run the smallest relevant check (lint → typecheck → single test)
3. **Before committing**: Run full test suite if changes affect >2 files or touch shared code
4. **Before claiming done**: Run verification and **show output as evidence** — never say "try again" or "should work now" without proof

## File Map

<!-- AGENTS-GENERATED:START filemap -->

```
scripts/         → automation scripts
src/             → application source code
public/          → public static files
docs/            → documentation
```

<!-- AGENTS-GENERATED:END filemap -->

## Generated Types (Single Source of Truth)

> **⚠️ CRITICAL:** All TypeScript types for NocoBase/IXC collections MUST come from `src/generated/`

| Collection                          | Generated Type         | Import Path                                   |
| ----------------------------------- | ---------------------- | --------------------------------------------- |
| NocoBase `t_pessoas`                | `Pessoas`              | `#/generated/nocobase/pessoas`                |
| NocoBase `t_empresas`               | `Empresas`             | `#/generated/nocobase/empresas`               |
| NocoBase `t_negociacoes`            | `Negociacoes`          | `#/generated/nocobase/negociacoes`            |
| NocoBase `t_crm_troca_titularidade` | `CrmTrocaTitularidade` | `#/generated/nocobase/crm-troca-titularidade` |
| NocoBase `t_registros_de_contato`   | `RegistrosDeContato`   | `#/generated/nocobase/registros-de-contato`   |
| IXC `cliente`                       | `Cliente`              | `#/generated/ixc/cliente`                     |
| IXC `cliente_contrato`              | `ClienteContrato`      | `#/generated/ixc/cliente-contrato`            |
| IXC `linha_mvno`                    | `LinhaMvno`            | `#/generated/ixc/linha-mvno`                  |
| IXC `vd_contratos_produtos`         | `VdContratosProdutos`  | `#/generated/ixc/vd-contratos-produtos`       |
| IXC `fn_areceber`                   | `FnAreceber`           | `#/generated/ixc/fn-areceber`                 |
| IXC `su_ticket`                     | `SuTicket`             | `#/generated/ixc/su-ticket`                   |

**Rules:**

1. **NEVER** manually redefine interfaces that exist in `src/generated/`
2. **ALWAYS** use `type X = GeneratedType` or `Pick<GeneratedType, ...>` instead
3. Run `pnpm generate-types` after any schema change in NocoBase/IXC
4. Domain-specific enums (status, substatus) CAN be manual
5. UI-specific types (e.g., `PessoaFisicaListItem`) CAN be custom
6. Repository/service calls MUST use generated collection types as input/output boundaries; map to UI types only after repository response
7. Relation/appends payloads (e.g., `f_nc_cliente`) MUST be typed from generated interfaces too (via `Pick<GeneratedType, ...>`), never hand-written interfaces

**Example:**

```typescript
// ✅ CORRECT - use generated type
import type { Pessoas } from "#/generated/nocobase/pessoas";
export type PessoaFisica = Pessoas;

// ❌ WRONG - manual duplication
export interface PessoaFisica {
  id: number;
  f_nome: string;
  // ...
}
```

<!-- AGENTS-GENERATED:START golden-samples -->

| For                 | Reference                                          | Key patterns                                             |
| ------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| Route (protected)   | `src/routes/dashboard/index.tsx`                   | `requireAuth` in `loader`, `Component` export            |
| Route (public auth) | `src/routes/auth/login/index.tsx`                  | `requireGuest` in `loader`, `Component` export           |
| Router config       | `src/routes/router.tsx`                            | `createBrowserRouter`, lazy route imports, nested routes |
| Auth module         | `src/features/auth/index.ts`                       | barrel export pattern                                    |
| Error handling      | `src/components/error-boundary.tsx`                | React Error Boundary pattern with user-friendly UI       |
| Component structure | `src/features/auth/components/profile-details.tsx` | Separate business logic from presentation in dashboard   |
| Hierarchical nav    | `src/layout/app-sidebar/sidebar-navigation.tsx`    | NavItem children property enables collapsible submenus   |

<!-- AGENTS-GENERATED:END golden-samples -->

## Heuristics (quick decisions)

<!-- AGENTS-GENERATED:START heuristics -->

| When                          | Do                                                                     |
| ----------------------------- | ---------------------------------------------------------------------- |
| Adding env var                | Add to `.env.example` first, then validate in `src/env.ts`             |
| Merging PRs                   | Squash and merge                                                       |
| Adding dependency             | Ask first - we minimize deps                                           |
| Unsure about pattern          | Check Golden Samples above or `src/AGENTS.md`                          |
| File naming                   | Use `kebab-case.tsx` for components/routes                             |
| Import paths                  | Prefer `#/` alias over relative paths                                  |
| Table with pagination         | Use `DataTableContainer` component                                     |
| Filter for NocoBase/IXC       | Use `filter-builder.ts` helpers                                        |
| Pagination state              | Use `usePagination` hook                                               |
| Date formatting               | Use `formatDatePtBR()` from utils                                      |
| Currency formatting           | Use `formatCurrency()` from utils                                      |
| **Type definitions**          | **ALWAYS import from `src/generated/` - NEVER redefine**               |
| **Tailwind arbitrary values** | **ALWAYS use canonical classes** (e.g., `min-w-20` not `min-w-[80px]`) |

<!-- AGENTS-GENERATED:END heuristics -->

## Repository Settings

<!-- AGENTS-GENERATED:START repo-settings -->

- **Default branch:** `main`
- **Merge strategy:** squash and merge
<!-- AGENTS-GENERATED:END repo-settings -->

<!-- AGENTS-GENERATED:START ci-rules -->

## CI/Quality Gates

> Platform: github-actions

### Version Matrix

- Node 24
<!-- AGENTS-GENERATED:END ci-rules -->

## Boundaries

### Always Do

- Run pre-commit checks before committing
- Add tests for new code paths
- Use conventional commit format: `type(scope): subject`
- **Show test output as evidence before claiming work is complete** — never say "try again" or "should work now" without proof
- For upstream dependency fixes: run **full** test suite, not just affected tests
- Use TypeScript strict mode with proper type annotations

### Ask First

- Adding new dependencies
- Modifying CI/CD configuration
- Changing public API signatures
- Running full e2e test suites
- Repo-wide refactoring or rewrites

### Never Do

- Commit secrets, credentials, or sensitive data
- Modify vendor/, node_modules/, or generated files
- Push diretamente na branch main/master
- Delete migration files or schema changes
- Commit package-lock.json without package.json changes
- **Manually redefine types that exist in `src/generated/`**
- Use any type without justification
- Use barrel exports (`index.ts`) when:
  - Directory exports only **1 item** used outside the folder
  - Components are **sub-components** (internal implementation details)
  - Hooks/utils are used **only internally** within the directory

## Contributing (for AI agents)

- **Comprehension**: Understand the problem before submitting code. Read the linked issue, understand _why_ the change is needed, not just _what_ to change.
- **Context**: Every PR must explain the trade-offs considered and link to the issue it addresses. Disclose AI assistance if the project requires it.
- **Continuity**: Respond to review feedback. Drive-by PRs without follow-up will be closed.

<!-- AGENTS-GENERATED:START module-boundaries -->

<!-- AGENTS-GENERATED:END module-boundaries -->

## Codebase State

<!-- AGENTS-GENERATED:START codebase-state -->

<!-- AGENTS-GENERATED:END codebase-state -->

## Scoped AGENTS.md (MUST read when working in these directories)

<!-- AGENTS-GENERATED:START scope-index -->

- `./src/AGENTS.md` — Frontend application (TypeScript/React)
- `./src/components/AGENTS.md` — Shared UI building blocks and app-level reusable components
- `./src/components/filters/AGENTS.md` — Shared filter primitives (field controls, layout, and actions)
- `./src/components/page-layout/AGENTS.md` — Reusable page layout with header/tab composition primitives
- `./src/components/table/AGENTS.md` — Shared TanStack-based table primitives and controller context
- `./src/components/ui/AGENTS.md` — shadcn/ui component reference and customization guide
- `./src/layout/AGENTS.md` — Authenticated app shell layout and navigation composition
- `./src/features/AGENTS.md` — Cross-feature conventions and folder structure for domain modules
- `./src/features/auth/AGENTS.md` — Authentication module
- `./src/features/auth/permissions/AGENTS.md` — Permissions, actions/snippets and navigation guards
- `./src/features/cs/AGENTS.md` — Customer Success domain (contratos, negociações, pessoas)
- `./src/features/cs/components/detail-skeleton/AGENTS.md` — Shared skeletons for CS detail sections and cards
- `./src/features/cs/contratos/AGENTS.md` — Contratos subdomain (IXC contracts list/detail and contract UI)
- `./src/features/cs/kanban-dashboard/AGENTS.md` — Kanban Dashboard subdomain (unified TT/TE/SC/NEG board)
- `./src/features/cs/negociacoes/AGENTS.md` — Negociações subdomain (kanban/list, filters, export and detail tabs)
- `./src/features/cs/negociacoes/negociacoes-filters/AGENTS.md` — Negociações filter components and filter bar
- `./src/features/cs/pessoas/AGENTS.md` — Pessoas subdomain (PF/PJ list, types, service, columns)
- `./src/features/cs/suspensao-de-contrato/AGENTS.md` — Suspensão de Contrato subdomain (list/detail, filters, status lifecycle)
- `./src/features/cs/troca-de-endereco/AGENTS.md` — Troca de Endereço subdomain (list/detail, hooks, and filters)
- `./src/features/cs/troca-titularidade/AGENTS.md` — Troca de Titularidade subdomain (ZapSign, status workflow, audit trail)
- `./src/features/cs/vendas/AGENTS.md` — Vendas subdomain (sellers lookup, list columns, and filters)
- `./src/features/custom-requests/AGENTS.md` — Custom request registry/services/hooks
- `./src/generated/AGENTS.md` — Auto-generated TypeScript types from NocoBase/IXC schemas
- `./src/hooks/AGENTS.md` — Shared cross-feature hooks
- `./src/lib/AGENTS.md` — Pure utilities and formatting/filter/logging helpers
- `./src/repositories/AGENTS.md` — NocoBase/IXC data access layer
- `./src/routes/AGENTS.md` — React Router v7 route definitions and guard patterns
- `./scripts/AGENTS.md` — Automation scripts for development workflow
- `./scripts/generators/AGENTS.md` — Code generation framework (Listr2 CLI, shared lib, pipelines)
- `./scripts/generators/src/AGENTS.md` — Shared library layer (logger, atomic-writer, workspace-locker)
- `./scripts/generators/src/pipelines/generate-types/AGENTS.md` — Type generation pipeline (NocoBase + IXC schemas)
- `./scripts/generators/src/pipelines/generate-custom-requests/AGENTS.md` — Custom request registry pipeline
- `./.github/workflows/AGENTS.md` — GitHub Actions workflows and CI/CD automation
<!-- AGENTS-GENERATED:END scope-index -->

> **Agents**: When you read or edit files in a listed directory, you **must** load its AGENTS.md first. It contains directory-specific conventions that override this root file.

## Skill Mappings — load when working in these areas

<!-- intent-skills:start -->

- { task: "Creating or updating feature AGENTS.md files", load: ".agents/skills/feature-agents-md/SKILL.md" }
- { task: "IXC API integration, endpoints, authentication", load: ".agents/skills/ixc-docs/SKILL.md" }
- { task: "NocoBase collections, API, schema exploration", load: ".agents/skills/nocobase-docs/SKILL.md" }
- { task: "Tailwind CSS v4 + shadcn/ui setup, theming, dark mode", load: ".agents/skills/tailwind-v4-shadcn/SKILL.md" }
- { task: "Adding, fixing, or debugging shadcn/ui components", load: ".agents/skills/shadcn/SKILL.md" }
- { task: "Creating or updating root AGENTS.md or project rules", load: ".agents/skills/agent-rules/SKILL.md" }
- { task: "Copying, mirroring, or reverse-engineering CRM/NocoBase pages", load: ".agents/skills/crm-page-crawl/SKILL.md" }
- { task: "Looking up API docs, library references, or technical documentation", load: ".agents/skills/find-docs/SKILL.md" }
- { task: "Creating or formatting markdown tables", load: ".agents/skills/markdown-tables/SKILL.md" }
- { task: "Browser testing, automation, form testing, or screenshots", load: ".agents/skills/playwright-skill/SKILL.md" }
- { task: "Researching React APIs, understanding React behavior or caveats", load: ".agents/skills/react-expert/SKILL.md" }
- { task: "Implementing React hooks, patterns, performance, or TypeScript best practices", load: ".agents/skills/react-patterns/SKILL.md" }
<!-- intent-skills:end -->

## When instructions conflict

The nearest `AGENTS.md` wins. Explicit user prompts override files.

- For TypeScript/JavaScript patterns, follow Biome config (`biome.json`)
