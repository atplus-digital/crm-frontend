# Vendas Status Cards Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove the single "Lista" tab from /cs/vendas and add clickable "Suas Vendas por Status" cards that filter the table by the logged-in user's sales.

**Architecture:** Extend `StatusSummaryCards` with click/active props, rewrite `VendasPage` to render cards + list inline (no tabs), and redirect the `/cs/vendas/lista` child route.

**Tech Stack:** React 19, TypeScript, TanStack Query, TanStack Store (authStore), shadcn/ui

---

## File Structure

| File                                      | Action | Responsibility                                         |
| ----------------------------------------- | ------ | ------------------------------------------------------ |
| `src/components/status-summary-cards.tsx` | Modify | Add `onClick` + `activeKey` props, active card styling |
| `src/pages/cs/vendas/vendas.tsx`          | Modify | Remove tabs, add status cards + list inline            |
| `src/routes/cs/vendas/lista.tsx`          | Modify | Redirect to `/cs/vendas`                               |

No new files created — existing components reused.

---

### Task 1: Extend StatusSummaryCards with click and active state

**Files:**

- Modify: `src/components/status-summary-cards.tsx`

- [ ] **Step 1: Add `onClick` and `activeKey` props to the interface**

Replace the `StatusSummaryCardsProps` interface:

```typescript
interface StatusSummaryCardsProps<T> {
  items: T[];
  getKey: (item: T) => string;
  getLabel: (key: string) => string;
  getVariant?: (key: string) => BadgeVariant;
  /** Callback when a card is clicked; receives the card's key */
  onClick?: (key: string) => void;
  /** Key of the currently active card (for highlight styling) */
  activeKey?: string | null;
}
```

- [ ] **Step 2: Accept and use the new props in the component function**

Update the component signature and render:

```typescript
export function StatusSummaryCards<T>({
	items,
	getKey,
	getLabel,
	getVariant,
	onClick,
	activeKey,
}: StatusSummaryCardsProps<T>) {
	const statusCounts: Record<string, { count: number; variant: BadgeVariant }> =
		{};

	for (const item of items) {
		const key = getKey(item);
		if (!statusCounts[key]) {
			statusCounts[key] = {
				count: 0,
				variant: getVariant?.(key) ?? "secondary",
			};
		}
		statusCounts[key].count++;
	}

	const entries = Object.entries(statusCounts);
	if (entries.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-4">
			{entries.map(([key, info]) => {
				const isActive = key === activeKey;
				return (
					<BasicTableCard
						key={key}
						label={getLabel(key)}
						value={info.count}
						className={cn(
							"cursor-pointer transition-colors",
							isActive && "border-primary bg-primary/5 ring-1 ring-primary/30",
						)}
						onClick={onClick ? () => onClick(key) : undefined}
					>
						<div className="flex items-center gap-2">
							<p className="text-lg font-semibold">{info.count}</p>
							<Badge variant={info.variant} className="size-2 rounded-full p-0" />
						</div>
					</BasicTableCard>
				);
			})}
		</div>
	);
}
```

- [ ] **Step 3: Add `cn` import and `onClick` prop to BasicTableCard**

Add the `cn` import at the top of `status-summary-cards.tsx`:

```typescript
import { cn } from "#/lib/utils";
```

Update `src/components/basic-table-card.tsx` to accept an `onClick` prop:

```typescript
type BasicTableCardProps = {
	label: string;
	value: string | number;
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
};

export function BasicTableCard({
	label,
	value,
	className,
	children,
	onClick,
}: BasicTableCardProps) {
	return (
		<div className={cn("rounded-lg border bg-card p-3", className)} onClick={onClick} role={onClick ? "button" : undefined} tabIndex={onClick ? 0 : undefined}>
			<p className="text-xs text-muted-foreground">{label}</p>
			{children ?? <p className="text-lg font-semibold">{value}</p>}
		</div>
	);
}
```

- [ ] **Step 4: Run typecheck**

Run: `pnpm typecheck`
Expected: PASS (no type errors)

- [ ] **Step 5: Commit**

```bash
git add src/components/status-summary-cards.tsx src/components/basic-table-card.tsx
git commit -m "feat(components): add onClick and activeKey to StatusSummaryCards"
```

---

### Task 2: Rewrite VendasPage — remove tabs, add status cards, inline list

**Files:**

- Modify: `src/pages/cs/vendas/vendas.tsx`

- [ ] **Step 1: Rewrite the entire VendasPage component**

Replace the full content of `src/pages/cs/vendas/vendas.tsx` with:

```typescript
import { useStore } from "@tanstack/react-store";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { StatusSummaryCards } from "#/components/status-summary-cards";
import { Button } from "#/components/ui/button";
import { authStore } from "#/features/auth";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import {
	NEGOCIACAO_STATUS_LABELS,
	type NegociacaoFilters,
	type NegociacaoStatus,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

/** Status values to show in cards (excludes "6" = Arquivado) */
const CARD_STATUSES: NegociacaoStatus[] = ["1", "2", "3", "4", "5"];

const DEFAULT_FILTERS: NegociacaoFilters = {};

export function VendasPage() {
	const user = useStore(authStore, (state) => state.user);
	const [activeStatus, setActiveStatus] = useState<NegociacaoStatus | null>(
		null,
	);

	const { filters, handleFilterChange } = useListPage<NegociacaoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultPageSize: 100,
		defaultSort: ["-createdAt"],
		syncSortToUrl: false,
	});
	const { data: vendedores } = useVendedores();

	// Cards query — current user's sales, no status filter
	const { data: cardsData } = useNegociacoes({
		page: 1,
		pageSize: 999,
		filters: normalizeNegociacaoFilters({
			vendedorId: user?.id,
		}),
	});
	const cardsItems = cardsData?.data ?? [];

	// Table query — all filters + active status from card
	const apiFilters = normalizeNegociacaoFilters({
		...filters,
		vendedorId: user?.id,
		...(activeStatus ? { status: activeStatus } : {}),
	});

	const { data, error, refetch } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters: apiFilters,
	});

	const negociacoes = data?.data ?? [];

	const handleExport = () => {
		const csv = exportNegociacoesToCsv(negociacoes);
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `vendas-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
		toast.success(`CSV exportado: ${negociacoes.length} vendas`);
	};

	const handleStatusClick = (key: string) => {
		setActiveStatus((prev) =>
			prev === key ? null : (key as NegociacaoStatus),
		);
	};

	return (
		<PageLayout
			title="Vendas"
			subtitle="Gerencie suas negociações de vendas"
			sideElement={
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Venda
				</Button>
			}
		>
			<div className="space-y-4">
				<StatusSummaryCards
					items={cardsItems.filter((n) =>
						CARD_STATUSES.includes(String(n.f_status) as NegociacaoStatus),
					)}
					getKey={(n) => String(n.f_status)}
					getLabel={(key) => NEGOCIACAO_STATUS_LABELS[key as NegociacaoStatus] ?? key}
					onClick={handleStatusClick}
					activeKey={activeStatus}
				/>

				<VendasFilters
					filters={filters}
					onFilter={handleFilterChange}
					vendedores={vendedores}
				/>

				{error ? (
					<InlineErrorAlert>
						Erro ao carregar vendas: {getErrorMessage(error)}
					</InlineErrorAlert>
				) : (
					<NegociacoesList
						negociacoes={negociacoes}
						totalCount={data?.meta?.total ?? 0}
						pageSize={data?.meta?.pageSize ?? 15}
						onRefresh={() => refetch()}
						onExport={handleExport}
					/>
				)}
			</div>
		</PageLayout>
	);
}
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`
Expected: PASS

Fix any type issues — common fix: if `NEGOCIACAO_STATUS_LABELS` is exported as `NEGOCIACOES_STATUS_LABELS` from the barrel, adjust the import name. The re-export in `negociacoes-types.ts` line 27 is `NEGOCIACOES_STATUS_LABELS as NEGOCIACAO_STATUS_LABELS`, so use `NEGOCIACAO_STATUS_LABELS`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/cs/vendas/vendas.tsx
git commit -m "feat(vendas): remove tab, add status cards with click-to-filter"
```

---

### Task 3: Redirect /cs/vendas/lista to /cs/vendas

**Files:**

- Modify: `src/routes/cs/vendas/lista.tsx`

- [ ] **Step 1: Replace the Component with a redirect**

Replace the full content of `src/routes/cs/vendas/lista.tsx` with:

```typescript
import { Navigate } from "react-router";
import { routePaths } from "#/routes/route-paths";

export function Component() {
	return <Navigate to={routePaths.cs_vendas} replace />;
}
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`
Expected: PASS

- [ ] **Step 3: Commit**

```bash
git add src/routes/cs/vendas/lista.tsx
git commit -m "fix(vendas): redirect /cs/vendas/lista to /cs/vendas"
```

---

### Task 4: Final verification

- [ ] **Step 1: Run full typecheck**

Run: `pnpm typecheck`
Expected: PASS

- [ ] **Step 2: Run lint**

Run: `pnpm biome:fix`
Expected: No errors (auto-fix any formatting issues)

- [ ] **Step 3: Run build**

Run: `pnpm build`
Expected: PASS — no build errors

- [ ] **Step 4: Manual browser test**

1. Navigate to `/cs/vendas`
2. Verify: no tab bar, only the content
3. Verify: 5 status cards visible (Novos, Negociando, Assinatura, Auditoria, Concluído)
4. Click "Assinatura" card → table filters to show only status=3 items
5. Click "Assinatura" again → filter removed, all items shown
6. Navigate to `/cs/vendas/lista` → redirects to `/cs/vendas`
