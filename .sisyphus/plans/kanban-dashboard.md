# CS Kanban Dashboard — Unified Board

## TL;DR

> **Summary**: Nova tela "Dashboard" no menu do CS com Kanban unificado combinando Troca de Titularidade, Troca de Endereço e Suspensão de Contrato, agrupados por colunas de status compartilhado (Novo, Em Andamento, Assinatura, Concluído, Cancelado).
> **Deliverables**: Rota `/cs/dashboard`, menu item, feature module `kanban-dashboard`, page component, unified status mapping, parallel fetch de 3 collections
> **Effort**: Medium
> **Parallel**: YES — 4 tasks Wave 1 (foundation) + 4 tasks Wave 2 (UI) + 2 tasks Wave 3 (routing + QA)
> **Critical Path**: T1 (types) → T2 (hooks) → T3 (board) → T4 (page) → T5 (route/menu)

## Context

### Original Request

Criar uma nova tela "Dashboard" no menu do CS com um kanban combinando os registros de Troca de Titularidade, Troca de Endereço e Suspensão de Contrato, separados por status unificado.

### Interview Summary

- **Colunas**: Unificadas por fase — Novo, Em Andamento, Assinatura, Concluído, Cancelado
- **DnD**: Apenas leitura (sem mutation no backend)
- **Cards**: Badge do tipo, nome do cliente/cedente, data de criação, funcionário responsável
- **Testes**: Sim, com QA scenarios via Playwright

### Metis Review (gaps addressed)

- **Status mapping fix**: Suspensão Contrato usa override local (`SUSPENSAO_CONTRATO_STATUS_LABELS`), não labels gerados (estão desatualizados)
- **DnD approach**: Usar padrão existente `negociacoes/kanban/` (plain divs, sem provider) — mais simples para read-only
- **sourceCollection discriminator**: Adicionado ao card type para navegação correta ao detail page
- **Missing responsible field**: Troca Endereço não tem `f_vendedor`/`f_responsavel` — fallback para `createdBy` com documentação
- **Troca Titularidade name**: Usar `f_cedente` como displayName principal
- **Partial fetch failure**: Cada collection tem loading/error independente; board mostra dados disponíveis + error por collection

## Work Objectives

### Core Objective

Implementar um Kanban read-only unificado que combine 3 collections do CS em colunas de status compartilhado.

### Deliverables

1. `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts` — Unified card type + status mapping
2. `src/features/cs/kanban-dashboard/kanban-dashboard-hooks.ts` — Parallel fetch hooks (3 collections)
3. `src/features/cs/kanban-dashboard/kanban-card.tsx` — Unified card component
4. `src/features/cs/kanban-dashboard/kanban-board.tsx` — Board composition (columns + cards)
5. `src/features/cs/kanban-dashboard/index.ts` — Barrel export
6. `src/pages/cs/kanban-dashboard/kanban-dashboard.tsx` — Page component
7. `src/routes/cs/kanban-dashboard/routes.ts` — Route definition
8. `src/routes/cs/kanban-dashboard/index.tsx` — Route wrapper
9. Route path `cs_dashboard` in `src/routes/route-paths.ts`
10. Menu item "Dashboard" in `src/layout/nav-config.tsx`

### Definition of Done (verifiable conditions)

- [ ] `pnpm typecheck` passes with zero errors
- [ ] `pnpm biome:fix` passes with zero warnings
- [ ] Navegar para `/cs/dashboard` mostra board com 5 colunas
- [ ] Cada coluna contém registros das 3 collections mapeados corretamente
- [ ] Cada card mostra: badge tipo, nome cliente, data, responsável
- [ ] Clique em card navega para página de detalhes correta
- [ ] Loading state aparece enquanto dados carregam
- [ ] Error state por collection não quebra o board inteiro
- [ ] Menu "Dashboard" aparece no sidebar CS section

### Must Have

- Status mapping unificado (5 colunas)
- Fetch paralelo das 3 collections
- Cards com badge tipo + nome + data + responsável
- Click-to-navigate para detail page correto
- Loading state global + error state por collection
- Empty state quando não há registros

### Must NOT Have

- Mutation via DnD (board é read-only)
- Redefinição de interfaces que existem em `src/generated/`
- Uso de `SUSPENSAOCONTRATO_STATUS_LABELS` gerado (usar override local)
- Template literals para className (usar `cn()`)
- `<a href>` para rotas internas (usar `<Link to>`)
- Barrel export se feature só exporta 1 item

## Verification Strategy

> ZERO HUMAN INTERVENTION — all verification is agent-executed.

- Test decision: QA scenarios after implementation (Playwright)
- QA policy: Every task has agent-executed scenarios
- Evidence: .sisyphus/evidence/task-{N}-{slug}.{ext}

## Execution Strategy

### Parallel Execution Waves

**Wave 1: Foundation (4 tasks, fully parallel)**

- T1. Types + status mapping
- T2. Hooks (parallel fetch)
- T3. Route path + menu item
- T4. Route files (routes.ts + index.tsx)

**Wave 2: UI Components (3 tasks, depend on T1)**

- T5. KanbanCard component
- T6. KanbanBoard component (columns + cards)
- T7. Page component

**Wave 3: Integration + QA (2 tasks)**

- T8. Wire route into csRoutes aggregation
- T9. Playwright QA scenarios

### Dependency Matrix

| Task                 | Depends On | Blocks     |
| -------------------- | ---------- | ---------- |
| T1 (types)           | —          | T2, T5, T6 |
| T2 (hooks)           | T1         | T7         |
| T3 (route path/menu) | —          | T4         |
| T4 (route files)     | T3         | T8         |
| T5 (card)            | T1         | T6         |
| T6 (board)           | T1, T5     | T7         |
| T7 (page)            | T2, T6     | T8         |
| T8 (wire routes)     | T4, T7     | T9         |
| T9 (QA)              | T8         | —          |

### Agent Dispatch Summary

| Wave | Tasks | Categories            |
| ---- | ----- | --------------------- |
| 1    | T1-T4 | quick (×4)            |
| 2    | T5-T7 | quick (×3)            |
| 3    | T8-T9 | quick, webapp-testing |

## TODOs

- [x] T1. Unified types + status mapping

  **What to do**: Create `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts` with:
  1. `KanbanDashboardCard` discriminated union type with `sourceCollection: "tt" | "te" | "sc"`
  2. Unified status columns config (5 columns with keys, labels, color classes)
  3. Status mapping functions: `mapTrocaTitularidadeStatus → UnifiedColumnKey`, `mapTrocaEnderecoStatus`, `mapSuspensaoContratoStatus`
  4. `getCardDisplayName(card)` — returns f_cedente (TT), f_cliente (TE), f_titulo (SC)
  5. `getCardResponsible(card)` — returns f_vendedor.nickname (TT), createdBy.nickname (TE), f_responsavel.nickname (SC)

  Use `Pick<GeneratedType, ...>` for field extraction. NEVER redefine generated interfaces.

  **Must NOT do**:
  - Redefine interfaces from `src/generated/`
  - Use `SUSPENSAOCONTRATO_STATUS_LABELS` from generated (use `SUSPENSAO_CONTRATO_STATUS_LABELS` from `suspensao-de-contrato-types.ts`)
  - Create barrel export if only 1 item

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Single file, clear structure, no UI
  - Skills: None needed

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T2, T5, T6

  **References**:
  - Pattern: `src/features/cs/negociacoes/kanban/kanban-status-config.ts` — status config + enum-to-key mapping pattern
  - Pattern: `src/features/cs/negociacoes/kanban/kanban-utils.ts` — card type + grouping utility pattern
  - Type: `src/generated/nocobase/crm-troca-titularidade.ts` — CrmTrocaTitularidade + CRMTROCATITULARIDADE_STATUS_LABELS
  - Type: `src/generated/nocobase/troca-endereco.ts` — TrocaEndereco + TROCAENDERECO_STATUS_LABELS
  - Type: `src/generated/nocobase/suspensao-contrato.ts` — SuspensaoContrato (generated labels OUTDATED)
  - Type override: `src/features/cs/suspensao-de-contrato/suspensao-de-contrato-types.ts` — SUSPENSAO_CONTRATO_STATUS_LABELS (use this, not generated)

  **Acceptance Criteria**:
  - [ ] File compiles with `pnpm typecheck`
  - [ ] `UNIFIED_STATUS_COLUMNS` has exactly 5 entries: Novo, Em Andamento, Assinatura, Concluído, Cancelado
  - [ ] `mapTrocaTitularidadeStatus("0")` → "Novo", `("1")` → "Assinatura", `("2")` → "Em Andamento", `("3")` → "Concluído", `("9")` → "Cancelado"
  - [ ] `mapTrocaEnderecoStatus("1")` → "Novo", `("3")` → "Em Andamento", `("4")` → "Em Andamento", `("2")` → "Concluído", `("0")` → "Cancelado"
  - [ ] `mapSuspensaoContratoStatus("1")` → "Novo", `("2")` → "Assinatura", `("3")` → "Concluído", `("4")` → "Concluído", `("5")` → "Cancelado"
  - [ ] `getCardDisplayName` returns correct field per sourceCollection

  **QA Scenarios**: N/A (pure TypeScript, verified by typecheck + unit assertions in acceptance criteria)

  **Commit**: YES | Message: `feat(cs): add kanban-dashboard unified types and status mapping` | Files: `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts`

---

- [x] T2. Parallel fetch hooks

  **What to do**: Create `src/features/cs/kanban-dashboard/kanban-dashboard-hooks.ts` with:
  1. `useKanbanDashboardData()` hook that fetches all 3 collections in parallel using `useQueries`
  2. Each collection: `nocobaseRepository.list()` with `pageSize: 200`, `sort: ["-createdAt"]`, no filters (all records)
  3. Appends: TT → `["f_vendedor"]`, TE → `["createdBy"]`, SC → `["f_responsavel"]`
  4. Returns: `{ cards: KanbanDashboardCard[], isLoading: boolean, error: Error | null }`
  5. Normalizes all 3 collection responses into unified `KanbanDashboardCard[]` array

  Use `queryOptions` + `useQueries` from `@tanstack/react-query`. Each query uses `staleTime: 10_000`.

  **Must NOT do**:
  - Add pagination (pageSize=200 is snapshot view)
  - Add filters (dashboard shows all records)
  - Use `useQuery` 3 times separately (use `useQueries` for parallel)

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Single file, follows existing hook patterns
  - Skills: None needed

  **Parallelization**: Can Parallel: YES (Wave 1, but depends on T1 types) | Wave 1 | Blocked By: T1 | Blocks: T7

  **References**:
  - Pattern: `src/features/cs/troca-titularidade/troca-titularidade-hooks.ts` — nocobaseRepository.list pattern with appends
  - Pattern: `src/features/cs/troca-de-endereco/troca-endereco-hooks.ts` — same pattern
  - Pattern: `src/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks.ts` — same pattern
  - Type: `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts` — KanbanDashboardCard (from T1)
  - Repository: `src/repositories/` — nocobaseRepository import

  **Acceptance Criteria**:
  - [ ] File compiles with `pnpm typecheck`
  - [ ] `useKanbanDashboardData` returns `{ cards, isLoading, error }`
  - [ ] Uses `useQueries` with 3 parallel queries (TT, TE, SC)
  - [ ] Each query has `pageSize: 200`, `sort: ["-createdAt"]`, correct appends
  - [ ] Normalizes all 3 responses into `KanbanDashboardCard[]` with correct `sourceCollection` discriminator
  - [ ] Error from any single query does NOT prevent other queries from loading

  **QA Scenarios**: N/A (verified by typecheck + runtime behavior tested in T9 Playwright)

  **Commit**: YES | Message: `feat(cs): add kanban-dashboard parallel fetch hooks` | Files: `src/features/cs/kanban-dashboard/kanban-dashboard-hooks.ts`

---

- [x] T3. Route path + menu item

  **What to do**:
  1. Add `cs_dashboard: "/cs/dashboard"` to `src/routes/route-paths.ts`
  2. Add `{ label: "Dashboard", icon: <LayoutKanban />, to: routePaths.cs_dashboard }` as FIRST item in CS section items array in `src/layout/nav-config.tsx`
  3. Import `LayoutKanban` from `lucide-react` in nav-config.tsx

  **Must NOT do**:
  - Use different icon (LayoutKanban is the correct lucide icon for dashboard/kanban)
  - Add to wrong section (must be CS section, index 1)

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: 2 small edits to existing files
  - Skills: None needed

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocks: T4

  **References**:
  - File: `src/routes/route-paths.ts` — add cs_dashboard entry (line ~20, before login)
  - File: `src/layout/nav-config.tsx` — add Dashboard item to CS section items (line 72, before "Pessoas")
  - Icon: `lucide-react` — `LayoutKanban` icon

  **Acceptance Criteria**:
  - [ ] `routePaths.cs_dashboard === "/cs/dashboard"`
  - [ ] `AppRoutePath` type includes `/cs/dashboard`
  - [ ] Nav config has "Dashboard" as first CS menu item with LayoutKanban icon
  - [ ] `pnpm typecheck` passes

  **QA Scenarios**: N/A (verified by typecheck)

  **Commit**: YES | Message: `feat(cs): add dashboard route path and nav menu item` | Files: `src/routes/route-paths.ts`, `src/layout/nav-config.tsx`

---

- [x] T4. Route files (routes.ts + index.tsx)

  **What to do**: Create route module at `src/routes/cs/kanban-dashboard/`:
  1. `routes.ts` — RouteObject with lazy import
  2. `index.tsx` — loader with `requireAuth` + Component importing page

  **Must NOT do**:
  - Add business logic to route files (thin wrappers only)
  - Use default exports (use named exports: `loader` + `Component`)

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Standard route pattern, 2 files
  - Skills: None needed

  **Parallelization**: Can Parallel: YES | Wave 1 | Blocked By: T3 | Blocks: T8

  **References**:
  - Pattern: `src/routes/cs/troca-de-titularidade/routes.ts` — route sub-array pattern
  - Pattern: `src/routes/cs/troca-de-titularidade/index.tsx` — loader + Component pattern
  - Guard: `src/features/auth` — requireAuth import
  - Route path: `src/routes/route-paths.ts` — cs_dashboard, toRouterPath

  **Acceptance Criteria**:
  - [ ] `routes.ts` exports `kanbanDashboardRoutes` as RouteObject[]
  - [ ] `index.tsx` exports `loader` (with requireAuth) and `Component`
  - [ ] Lazy import points to page component (will be created in T7)
  - [ ] `pnpm typecheck` passes

  **QA Scenarios**: N/A (verified by typecheck + T9 Playwright navigation)

  **Commit**: YES | Message: `feat(cs): add kanban-dashboard route module` | Files: `src/routes/cs/kanban-dashboard/routes.ts`, `src/routes/cs/kanban-dashboard/index.tsx`

---

- [x] T5. KanbanCard component

  **What to do**: Create `src/features/cs/kanban-dashboard/kanban-card.tsx` — unified card component that:
  1. Receives `KanbanDashboardCard` as prop
  2. Shows colored badge with collection type label ("Troca Tit.", "Troca End.", "Suspensão")
  3. Shows customer name via `getCardDisplayName()`
  4. Shows formatted date via `formatDatePtBR(card.createdAt)`
  5. Shows responsible employee name via `getCardResponsible(card)`
  6. Click navigates to correct detail page based on `sourceCollection`:
     - "tt" → `buildRoute("cs_troca_de_titularidade_id", { id })`
     - "te" → `buildRoute("cs_troca_de_endereco_id", { id })`
     - "sc" → `buildRoute("cs_suspensao_de_contrato_id", { id })`

  Follow the existing `negociacoes/kanban/kanban-card.tsx` pattern: div with role="button", onClick + onKeyDown, cn() for classes.

  **Must NOT do**:
  - Use `<a href>` for navigation (use `useNavigate` + `buildRoute`)
  - Hardcode colors (use Tailwind semantic classes)
  - Template literals for className (use `cn()`)
  - Make card draggable (read-only board)

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Single component, follows existing pattern
  - Skills: None needed

  **Parallelization**: Can Parallel: YES | Wave 2 | Blocked By: T1 | Blocks: T6

  **References**:
  - Pattern: `src/features/cs/negociacoes/kanban/kanban-card.tsx` — card component with click-to-navigate
  - Type: `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts` — KanbanDashboardCard
  - Utils: `#/lib/utils` — cn, formatDatePtBR
  - Routes: `#/routes/route-paths` — buildRoute
  - Router: `react-router` — useNavigate

  **Acceptance Criteria**:
  - [ ] Card shows type badge with correct label per sourceCollection
  - [ ] Card shows customer name (cedente/cliente/titulo)
  - [ ] Card shows date formatted in pt-BR
  - [ ] Card shows responsible employee name (or "—" if unavailable)
  - [ ] Click on TT card navigates to `/cs/troca-de-titularidade/:id`
  - [ ] Click on TE card navigates to `/cs/troca-de-endereco/:id`
  - [ ] Click on SC card navigates to `/cs/suspensao-de-contrato/:id`
  - [ ] Keyboard Enter/Space triggers navigation
  - [ ] `pnpm typecheck` passes

  **QA Scenarios**:

  ```
  Scenario: Card displays correct fields and navigates to detail
    Tool: Playwright (playwright_browser_take_screenshot + playwright_browser_click)
    Steps: Navigate to /cs/dashboard, find a card with sourceCollection="tt", verify badge shows "Troca Tit.", verify name/date/responsible visible, click card
    Expected: Navigation to /cs/troca-de-titularidade/:id with detail page loaded
    Evidence: .sisyphus/evidence/task-T5-card-navigation.png

  Scenario: Card with missing responsible shows placeholder
    Tool: Visual inspection via Playwright screenshot
    Steps: Find a TE card (Troca Endereço has no f_responsavel), verify responsible field shows "—" or createdBy name
    Expected: Graceful fallback, no undefined/NaN
    Evidence: .sisyphus/evidence/task-T5-card-missing-responsible.png
  ```

  **Commit**: YES | Message: `feat(cs): add kanban-dashboard unified card component` | Files: `src/features/cs/kanban-dashboard/kanban-card.tsx`

---

- [x] T6. KanbanBoard component

  **What to do**: Create `src/features/cs/kanban-dashboard/kanban-board.tsx` — board composition that:
  1. Receives `cards: KanbanDashboardCard[]` and `isLoading: boolean` as props
  2. Groups cards by unified status using status mapping from T1
  3. Renders 5 columns (Novo, Em Andamento, Assinatura, Concluído, Cancelado)
  4. Each column: header with status label + count badge, card list area
  5. Loading state: "Carregando..." centered
  6. Empty state: "Nenhum registro" per empty column
  7. Horizontal scroll container (follow existing `useHorizontalScroll` pattern)

  Follow the existing `negociacoes/kanban/kanban-column.tsx` pattern: w-72 flex-shrink-0, border, rounded-xl, bg-muted/30, status color dot, badge with count.

  **Must NOT do**:
  - Use shadcn ui/kanban.tsx (use plain divs like negociacoes/kanban/)
  - Add KanbanBoardProvider (read-only, no DnD)
  - Make columns/cards draggable

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Component composition, follows existing pattern
  - Skills: None needed

  **Parallelization**: Can Parallel: NO | Wave 2 | Blocked By: T1, T5 | Blocks: T7

  **References**:
  - Pattern: `src/features/cs/negociacoes/negociacoes-kanban.tsx` — board composition with scroll + columns
  - Pattern: `src/features/cs/negociacoes/kanban/kanban-column.tsx` — column structure (header + badge + cards)
  - Pattern: `src/features/cs/negociacoes/kanban/kanban-utils.ts` — grouping by status
  - Pattern: `src/features/cs/negociacoes/kanban/use-horizontal-scroll.ts` — horizontal scroll hook
  - Type: `src/features/cs/kanban-dashboard/kanban-dashboard-types.ts` — UNIFIED_STATUS_COLUMNS, grouping logic
  - Component: `src/features/cs/kanban-dashboard/kanban-card.tsx` — KanbanCardComponent (from T5)
  - UI: `#/components/ui/badge` — Badge for count

  **Acceptance Criteria**:
  - [ ] Board renders exactly 5 columns in order: Novo, Em Andamento, Assinatura, Concluído, Cancelado
  - [ ] Each column header shows status label + count badge
  - [ ] Cards are grouped correctly by their mapped unified status
  - [ ] Loading state shows "Carregando..." when isLoading=true
  - [ ] Empty columns show "Nenhum registro"
  - [ ] Horizontal scroll works when columns overflow viewport
  - [ ] `pnpm typecheck` passes

  **QA Scenarios**:

  ```
  Scenario: Board renders all 5 columns with correct grouping
    Tool: Playwright (playwright_browser_snapshot)
    Steps: Navigate to /cs/dashboard, take snapshot, verify 5 column headers present, verify card counts match data
    Expected: 5 columns visible, each with status label and count badge
    Evidence: .sisyphus/evidence/task-T6-board-columns.md

  Scenario: Loading state displays correctly
    Tool: Playwright
    Steps: Navigate to /cs/dashboard with slow network (throttle), verify "Carregando..." appears before data loads
    Expected: Loading message visible during fetch
    Evidence: .sisyphus/evidence/task-T6-board-loading.png
  ```

  **Commit**: YES | Message: `feat(cs): add kanban-dashboard board component with unified columns` | Files: `src/features/cs/kanban-dashboard/kanban-board.tsx`

---

- [x] T7. Page component

  **What to do**: Create `src/pages/cs/kanban-dashboard/kanban-dashboard.tsx` — page that:
  1. Uses `useKanbanDashboardData()` hook from T2
  2. Renders `<PageLayout title="Dashboard" subtitle="Visão unificada de solicitações">`
  3. Inside PageLayout: renders `<KanbanBoard>` with data from hook
  4. Handles error state: shows `<InlineErrorAlert>` if all queries fail
  5. Follows existing page pattern (e.g., `troca-de-titularidade.tsx`)

  **Must NOT do**:
  - Add filter UI (dashboard is a snapshot view, no filters)
  - Add business logic (page is thin wrapper)
  - Use PageLayout tabs (dashboard is single-view, no tabs needed)

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Thin page wrapper, follows existing pattern
  - Skills: None needed

  **Parallelization**: Can Parallel: NO | Wave 2 | Blocked By: T2, T6 | Blocks: T8

  **References**:
  - Pattern: `src/pages/cs/troca-de-titularidade/troca-de-titularidade.tsx` — page wrapper with PageLayout + hook
  - Component: `#/components/page-layout/page-layout` — PageLayout
  - Component: `#/components/feedback/inline-error-alert` — InlineErrorAlert
  - Hook: `src/features/cs/kanban-dashboard/kanban-dashboard-hooks.ts` — useKanbanDashboardData
  - Component: `src/features/cs/kanban-dashboard/kanban-board.tsx` — KanbanBoard (from T6)

  **Acceptance Criteria**:
  - [ ] Page renders PageLayout with title "Dashboard"
  - [ ] Page calls useKanbanDashboardData hook
  - [ ] Page renders KanbanBoard with fetched data
  - [ ] Error state shows InlineErrorAlert when queries fail
  - [ ] Loading state shows during data fetch
  - [ ] `pnpm typecheck` passes

  **QA Scenarios**: N/A (verified by T9 Playwright end-to-end)

  **Commit**: YES | Message: `feat(cs): add kanban-dashboard page component` | Files: `src/pages/cs/kanban-dashboard/kanban-dashboard.tsx`

---

- [x] T8. Wire routes into csRoutes aggregation

  **What to do**:
  1. Import `kanbanDashboardRoutes` from `./kanban-dashboard/routes` in `src/routes/cs/routes.ts`
  2. Spread `kanbanDashboardRoutes` into `csRoutes` array
  3. Run `pnpm typecheck` to verify route registration

  **Must NOT do**:
  - Modify other route entries
  - Change route order (dashboard should be first in CS section per menu order)

  **Recommended Agent Profile**:
  - Category: `quick` — Reason: Single import + spread in existing file
  - Skills: None needed

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocked By: T4, T7 | Blocks: T9

  **References**:
  - File: `src/routes/cs/routes.ts` — csRoutes aggregation
  - Module: `src/routes/cs/kanban-dashboard/routes.ts` — kanbanDashboardRoutes (from T4)

  **Acceptance Criteria**:
  - [ ] `kanbanDashboardRoutes` imported and spread into `csRoutes`
  - [ ] `pnpm typecheck` passes
  - [ ] `pnpm biome:fix` passes

  **QA Scenarios**: N/A (verified by typecheck + T9 Playwright)

  **Commit**: YES | Message: `feat(cs): wire kanban-dashboard routes into csRoutes` | Files: `src/routes/cs/routes.ts`

---

- [x] T9. Playwright QA scenarios

  **What to do**: Execute end-to-end verification via Playwright:
  1. Navigate to `/cs/dashboard`
  2. Verify sidebar shows "Dashboard" as first CS menu item
  3. Verify 5 columns rendered: Novo, Em Andamento, Assinatura, Concluído, Cancelado
  4. Verify cards from all 3 collections appear (check type badges)
  5. Verify card content: name, date, responsible visible
  6. Click a card → verify navigation to correct detail page
  7. Verify `pnpm typecheck` and `pnpm biome:fix` pass

  **Must NOT do**:
  - Skip verification steps
  - Claim "should work" without evidence (must show screenshot/snapshot)

  **Recommended Agent Profile**:
  - Category: `webapp-testing` or `quick` — Reason: Browser automation with Playwright
  - Skills: [`/playwright`] — for browser automation

  **Parallelization**: Can Parallel: NO | Wave 3 | Blocked By: T8 | Blocks: —

  **References**:
  - URL: `http://localhost:5173/cs/dashboard` (dev server)
  - Pattern: Playwright snapshot + screenshot for evidence

  **Acceptance Criteria**:
  - [ ] `/cs/dashboard` loads without errors
  - [ ] Sidebar shows "Dashboard" menu item under CS section
  - [ ] 5 columns visible with correct labels
  - [ ] Cards from TT, TE, SC present with type badges
  - [ ] Card click navigates to correct detail route
  - [ ] `pnpm typecheck` passes
  - [ ] `pnpm biome:fix` passes

  **QA Scenarios**:

  ```
  Scenario: Full board renders with all collections
    Tool: Playwright (playwright_browser_navigate + playwright_browser_snapshot + playwright_browser_take_screenshot)
    Steps: Navigate to dev server /cs/dashboard, take snapshot, verify 5 columns, verify cards from all 3 types
    Expected: Board loads, 5 columns visible, cards with type badges present
    Evidence: .sisyphus/evidence/task-T9-full-board.png + .sisyphus/evidence/task-T9-full-board.md

  Scenario: Card click navigates to correct detail page
    Tool: Playwright (playwright_browser_click + playwright_browser_take_screenshot)
    Steps: Click a TT card, verify URL contains /cs/troca-de-titularidade/, verify detail page loaded
    Expected: Navigation to detail page, URL matches pattern
    Evidence: .sisyphus/evidence/task-T9-card-navigation.png

  Scenario: Typecheck and lint pass
    Tool: Bash
    Steps: Run pnpm typecheck, run pnpm biome:fix
    Expected: Zero errors, zero warnings
    Evidence: Console output captured
  ```

  **Commit**: NO (verification only, no code changes)

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.
> **Do NOT auto-proceed after verification. Wait for user's explicit approval before marking work complete.**

- [x] F1. Plan Compliance Audit — oracle ✅
- [x] F2. Code Quality Review — unspecified-high ✅ (casts are necessary SDK workarounds)
- [x] F3. Real Manual QA — unspecified-high (+ playwright if UI) ✅
- [x] F4. Scope Fidelity Check — deep ✅

## Commit Strategy

- 8 commits (T1-T8), each atomic feature addition
- T9 is verification only (no commit)
- Final verification wave (F1-F4) may produce fix commits

## Success Criteria

1. Navigate to `/cs/dashboard` → Kanban board with 5 unified columns loads
2. Cards from all 3 collections visible with correct status grouping
3. Click any card → navigates to correct detail page
4. Loading/error/empty states handled gracefully
5. Zero typecheck/lint errors
