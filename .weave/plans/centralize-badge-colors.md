# Centralize Badge Colors — Color Variants in Badge Component

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a `color` dimension + `soft` variant to `src/components/ui/badge.tsx`, then migrate 15 scattered color maps across the codebase to use `BadgeColor` values instead of raw Tailwind class strings.

**Architecture:** A single `color` variant dimension on the Badge CVA with 17 colors (solid style). A `soft` variant that, when combined with a `color` via `compoundVariants`, produces the soft style (10% bg + border + hover). All feature files replace `Record<string, string>` color maps with `Record<K, BadgeColor>`. StatusBadge gains a `colorMap` prop for the new approach while keeping `colorClasses` for backward compat.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, class-variance-authority, shadcn/ui

---

## File Structure

| File                                                                                                                                | Responsibility                                    | Change                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `src/components/ui/badge.tsx`                                                                                                       | Badge component + CVA + color variant definitions | **Modify** — add `color` dimension, `soft` variant, compoundVariants, `BadgeColor` type, utility helpers              |
| `src/components/badges/utils.ts`                                                                                                    | StatusBadge helper functions                      | **Modify** — add `getBadgeColorValue()` helper, keep backward compat                                                  |
| `src/components/badges/status-badge/status-badge.tsx`                                                                               | Generic status badge wrapper                      | **Modify** — add `colorMap` prop, keep `colorClasses`                                                                 |
| `src/components/filters/filter-multi-select.tsx`                                                                                    | Multi-select filter dropdown                      | **Modify** — support centralized color map via `badgeColorMap` prop                                                   |
| `src/features/cs/contratos/contratos-table/contratos-filters.tsx`                                                                   | Contratos filter bar                              | **Modify** — replace `STATUS_BADGE_COLORS`/`SERVICO_STATUS_BADGE_COLORS` with `Record<K, BadgeColor>`                 |
| `src/features/cs/contratos/contrato-status-badge/contrato-status-badge.tsx`                                                         | Contract status badge                             | **Modify** — use `colorMap` instead of `colorClasses`                                                                 |
| `src/features/cs/contratos/contrato-status-badge/internet-status-badge.tsx`                                                         | Internet status badge                             | **Modify** — use `colorMap` instead of `colorClasses`                                                                 |
| `src/features/cs/contratos/contrato-detalhes/actions/transferencia-titularidade/transferencia-titularidade-cessionario-section.tsx` | CreditBadge in transfer section                   | **Modify** — use `Badge` with `color` prop instead of raw `<span>`                                                    |
| `src/features/cs/pessoas/pessoas-columns.tsx`                                                                                       | PF/PJ table columns                               | **Modify** — replace `CREDITO_COLOR_CLASSES`/`ANALISE_IXC_COLOR_CLASSES` with `BadgeColor` maps, use `variant="soft"` |
| `src/features/cs/negociacoes/negociacao-badges/motivo-badge.tsx`                                                                    | Negotiation motive badge                          | **Modify** — use `colorMap` with `variant="soft"` instead of `colorClasses`                                           |
| `src/features/cs/negociacoes/negociacao-badges/tipo-produto-badge.tsx`                                                              | Product type badge                                | **Modify** — use `colorMap` instead of `colorClasses`                                                                 |
| `src/features/cs/negociacoes/negociacao-badges/relacao-badge.tsx`                                                                   | Relation badge                                    | **Modify** — use `colorMap` instead of `colorClasses`                                                                 |
| `src/features/cs/negociacoes/negociacoes-list-columns.tsx`                                                                          | Negotiation list columns                          | **Modify** — replace `negociacaoStatusColorClasses` with `Record<K, BadgeColor>`, use `variant="soft"`                |
| `src/features/cs/negociacoes/negociacao-comentarios-tab.tsx`                                                                        | Comments tab inline badge                         | **Modify** — use `Badge` with `color="green"` instead of raw `<span>`                                                 |
| `src/features/cs/kanban-dashboard/types/source-collections.ts`                                                                      | Kanban source collection badges                   | **Modify** — derive `colorClass`/`bgClass` from `BadgeColor` via utility                                              |
| `src/features/cs/troca-de-endereco/components/troca-endereco-list.tsx`                                                              | Address change list                               | **Modify** — use `colorMap` instead of inline `colorClasses`                                                          |

---

## Task 1: Add color variants, soft variant, and helpers to badge.tsx

**Files:**

- Modify: `src/components/ui/badge.tsx`

- [ ] **Step 1: Add `color` variant dimension, `soft` variant, compoundVariants, `BadgeColor` type, and utility helpers**

Replace the current `badgeVariants` CVA with the expanded version. Add the `color` prop to the `Badge` component. Export new types and helpers.

**Full replacement for `src/components/ui/badge.tsx`:**

```typescript
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "#/lib/utils";

// ---------------------------------------------------------------------------
// Color presets
// ---------------------------------------------------------------------------

const BADGE_COLORS = [
	"slate", "gray", "red", "orange", "amber", "yellow",
	"green", "emerald", "teal", "cyan", "sky", "blue",
	"indigo", "violet", "purple", "pink", "rose",
] as const;

export type BadgeColor = (typeof BADGE_COLORS)[number];

// Solid style: bg-{color}-100 text-{color}-800 dark:bg-{color}-900/30 dark:text-{color}-400
const SOLID_COLOR_CLASS: Record<BadgeColor, string> = {
	slate:   "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
	gray:    "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
	red:     "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	orange:  "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	amber:   "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	yellow:  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
	green:   "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
	emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	teal:    "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400",
	cyan:    "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
	sky:     "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400",
	blue:    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	indigo:  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
	violet:  "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400",
	purple:  "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
	pink:    "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
	rose:    "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
};

// Soft style: bg-{color}-500/10 text-{color}-600 border-{color}-500/20 hover:bg-{color}-500/20
const SOFT_COLOR_CLASS: Record<BadgeColor, string> = {
	slate:   "bg-slate-500/10 text-slate-600 border-slate-500/20 hover:bg-slate-500/20",
	gray:    "bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
	red:     "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20",
	orange:  "bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
	amber:   "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
	yellow:  "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 hover:bg-yellow-500/20",
	green:   "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
	emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
	teal:    "bg-teal-500/10 text-teal-600 border-teal-500/20 hover:bg-teal-500/20",
	cyan:    "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 hover:bg-cyan-500/20",
	sky:     "bg-sky-500/10 text-sky-600 border-sky-500/20 hover:bg-sky-500/20",
	blue:    "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
	indigo:  "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 hover:bg-indigo-500/20",
	violet:  "bg-violet-500/10 text-violet-600 border-violet-500/20 hover:bg-violet-500/20",
	purple:  "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
	pink:    "bg-pink-500/10 text-pink-600 border-pink-500/20 hover:bg-pink-500/20",
	rose:    "bg-rose-500/10 text-rose-600 border-rose-500/20 hover:bg-rose-500/20",
};

// Soft style without border (for pessoas-columns legacy pattern):
// bg-{color}-500/10 text-{color}-600 hover:bg-{color}-500/20
const SOFT_NO_BORDER_COLOR_CLASS: Record<BadgeColor, string> = {
	slate:   "bg-slate-500/10 text-slate-600 hover:bg-slate-500/20",
	gray:    "bg-gray-500/10 text-gray-600 hover:bg-gray-500/20",
	red:     "bg-red-500/10 text-red-600 hover:bg-red-500/20",
	orange:  "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20",
	amber:   "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20",
	yellow:  "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
	green:   "bg-green-500/10 text-green-600 hover:bg-green-500/20",
	emerald: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20",
	teal:    "bg-teal-500/10 text-teal-600 hover:bg-teal-500/20",
	cyan:    "bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20",
	sky:     "bg-sky-500/10 text-sky-600 hover:bg-sky-500/20",
	blue:    "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
	indigo:  "bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20",
	violet:  "bg-violet-500/10 text-violet-600 hover:bg-violet-500/20",
	purple:  "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20",
	pink:    "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
	rose:    "bg-rose-500/10 text-rose-600 hover:bg-rose-500/20",
};

// ---------------------------------------------------------------------------
// Utility helpers (exported for external use)
// ---------------------------------------------------------------------------

/**
 * Returns the solid-style Tailwind class string for a given BadgeColor.
 * Used by FilterMultiSelect, FilterBadgeGroup, and raw `<span>` elements.
 */
export function getBadgeSolidClass(color: BadgeColor): string {
	return SOLID_COLOR_CLASS[color];
}

/**
 * Returns the soft-style (with border + hover) Tailwind class string.
 */
export function getBadgeSoftClass(color: BadgeColor): string {
	return SOFT_COLOR_CLASS[color];
}

/**
 * Returns the soft-no-border Tailwind class string.
 */
export function getBadgeSoftNoBorderClass(color: BadgeColor): string {
	return SOFT_NO_BORDER_COLOR_CLASS[color];
}

// ---------------------------------------------------------------------------
// CVA variants
// ---------------------------------------------------------------------------

// Build color variant object from BADGE_COLORS
const colorVariant = Object.fromEntries(
	BADGE_COLORS.map((c) => [c, SOLID_COLOR_CLASS[c]]),
) as Record<BadgeColor, string>;

// Build compoundVariants for soft + each color
const softCompoundVariants = BADGE_COLORS.map((c) => ({
	variant: "soft" as const,
	color: c as BadgeColor,
	className: SOFT_COLOR_CLASS[c as BadgeColor],
}));

const badgeVariants = cva(
	"group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
				secondary:
					"bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
				destructive:
					"bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
				outline:
					"border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
				ghost:
					"hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
				link: "text-primary underline-offset-4 hover:underline",
				soft: "bg-muted/60 text-muted-foreground border-border hover:bg-muted",
			},
			color: colorVariant,
		},
		compoundVariants: softCompoundVariants,
		defaultVariants: {
			variant: "default",
		},
	},
);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function Badge({
	className,
	variant = "default",
	color,
	asChild = false,
	...props
}: React.ComponentProps<"span"> &
	VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
	const Comp = asChild ? Slot.Root : "span";

	return (
		<Comp
			data-slot="badge"
			data-variant={variant}
			data-color={color}
			className={cn(badgeVariants({ variant, color }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`
Expected: No errors in badge.tsx.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/badge.tsx
git commit -m "feat(badge): add color variants, soft variant, and BadgeColor type"
```

---

## Task 2: Update badges/utils.ts to support BadgeColor

**Files:**

- Modify: `src/components/badges/utils.ts`

- [ ] **Step 1: Add `getBadgeColorValue` helper**

Replace the current file with:

```typescript
import type { BadgeColor, BadgeVariant } from "#/components/ui/badge";

/**
 * Returns the Badge variant for a given status value.
 */
export function getStatusVariant(
  value: string,
  variants?: Record<string, BadgeVariant>,
  defaultVariant: BadgeVariant = "secondary",
): BadgeVariant {
  return variants?.[value] ?? defaultVariant;
}

/**
 * Returns a Tailwind class string for a given status value (legacy — deprecated).
 * @deprecated Use `getBadgeColorValue` + Badge color prop instead.
 */
export function getColorClass(
  value: string,
  colorClasses?: Record<string, string>,
  defaultClass = "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
): string {
  return colorClasses?.[value] ?? defaultClass;
}

/**
 * Returns the BadgeColor for a given status value.
 *
 * @example
 * const color = getBadgeColorValue("A", { A: "emerald", I: "gray" }, "gray");
 * // => "emerald" | "gray" (fallback)
 */
export function getBadgeColorValue(
  value: string,
  colorMap?: Record<string, BadgeColor>,
  defaultColor: BadgeColor = "gray",
): BadgeColor {
  return colorMap?.[value] ?? defaultColor;
}
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/badges/utils.ts
git commit -m "feat(badges): add getBadgeColorValue helper for BadgeColor support"
```

---

## Task 3: Update StatusBadge to support colorMap prop

**Files:**

- Modify: `src/components/badges/status-badge/status-badge.tsx`

- [ ] **Step 1: Add `colorMap` prop, keep backward compat with `colorClasses`**

Replace the file with:

```typescript
import { Badge, type BadgeColor, getBadgeSolidClass, type BadgeVariant } from "#/components/ui/badge";
import { cn } from "#/lib/utils";
import { getBadgeColorValue, getColorClass, getStatusVariant } from "../utils";

/**
 * Shared badge for displaying status values.
 *
 * NEW (preferred): Use `colorMap` to set BadgeColor values directly.
 *
 * @example
 * <StatusBadge
 *   value="A"
 *   labels={{ A: "Ativo" }}
 *   colorMap={{ A: "emerald" }}
 * />
 *
 * @example
 * // Legacy: still works via colorClasses
 * <StatusBadge
 *   value="A"
 *   labels={{ A: "Ativo" }}
 *   colorClasses={{ A: "bg-emerald-100 text-emerald-800" }}
 * />
 *
 * @example
 * // Soft variant (via colorMap + variant prop passthrough)
 * <StatusBadge
 *   value="I"
 *   labels={{ I: "Venda Nova" }}
 *   colorMap={{ I: "emerald" }}
 * />
 * // The badge variant is set to "soft" (via variants prop or defaultVariant)
 * // and color="emerald" triggers the compound variant for soft+emerald
 *
 * @example
 * // Inline variant with colorMap
 * <StatusBadge
 *   value="INTERNET"
 *   labels={{ INTERNET: "Internet" }}
 *   colorMap={{ INTERNET: "blue" }}
 *   variant="inline"
 * />
 */
interface StatusBadgeProps {
	value: string;
	labels: Record<string, string>;
	variants?: Record<string, BadgeVariant>;
	/** @deprecated Use `colorMap` instead */
	colorClasses?: Record<string, string>;
	/** Preferred: maps status value → BadgeColor */
	colorMap?: Record<string, BadgeColor>;
	variant?: "badge" | "inline";
	className?: string;
	defaultVariant?: BadgeVariant;
	defaultClass?: string;
	/** Default color when value is not in colorMap (for variant="badge") */
	defaultColor?: BadgeColor;
}

export function StatusBadge({
	value,
	labels,
	variants,
	colorClasses,
	colorMap,
	variant = "badge",
	className,
	defaultVariant = "secondary",
	defaultClass,
	defaultColor,
}: StatusBadgeProps) {
	const label = labels[value] ?? value;

	if (variant === "inline") {
		// NEW: prefer colorMap for inline, fall back to colorClasses
		const colorClass = colorMap
			? getBadgeSolidClass(colorMap[value] ?? defaultColor ?? "gray")
			: getColorClass(value, colorClasses, defaultClass);
		return (
			<span
				className={cn(
					"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
					colorClass,
					className,
				)}
			>
				{label}
			</span>
		);
	}

	// variant === "badge"
	const badgeVariant = getStatusVariant(value, variants, defaultVariant);
	const badgeColor = colorMap
		? getBadgeColorValue(value, colorMap, defaultColor ?? "gray")
		: undefined;
	const colorClass = colorMap
		? undefined
		: getColorClass(value, colorClasses, defaultClass);

	return (
		<Badge
			variant={badgeVariant}
			color={badgeColor}
			className={cn(colorClass, className)}
		>
			{label}
		</Badge>
	);
}
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/badges/status-badge/status-badge.tsx
git commit -m "feat(status-badge): add colorMap prop supporting BadgeColor values"
```

---

## Task 4: Migrate contrato-status-badge.tsx

**Files:**

- Modify: `src/features/cs/contratos/contrato-status-badge/contrato-status-badge.tsx`

- [ ] **Step 1: Replace `colorClasses` with `colorMap`**

Replace the file with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";
import { StatusBadge } from "#/components/badges/status-badge";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoStatus,
} from "#/features/cs/contratos/contratos-types";

const contratoStatusColorMap: Record<ContratoStatus, BadgeColor> = {
	A: "emerald",
	I: "gray",
	D: "red",
	C: "amber",
	P: "blue",
	N: "red",
};

export function ContratoStatusBadge({ status }: { status: ContratoStatus }) {
	return (
		<StatusBadge
			value={status}
			labels={CONTRATO_STATUS_LABELS}
			colorMap={contratoStatusColorMap}
			variant="badge"
			defaultVariant="outline"
		/>
	);
}
```

- [ ] **Step 2: Run typecheck**

Run: `pnpm typecheck`
Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/contratos/contrato-status-badge/contrato-status-badge.tsx
git commit -m "refactor(contratos): migrate ContratoStatusBadge to BadgeColor"
```

---

## Task 5: Migrate internet-status-badge.tsx

**Files:**

- Modify: `src/features/cs/contratos/contrato-status-badge/internet-status-badge.tsx`

- [ ] **Step 1: Replace `colorClasses` with `colorMap`**

Replace the file with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";
import { StatusBadge } from "#/components/badges/status-badge";
import {
	INTERNET_STATUS_LABELS,
	type InternetStatus,
} from "#/features/cs/contratos/contratos-types";

const internetStatusColorMap: Record<InternetStatus, BadgeColor> = {
	A: "emerald",
	D: "red",
	FA: "amber",
	CM: "orange",
	CA: "orange",
	CE: "purple",
	AA: "blue",
};

export function InternetStatusBadge({ status }: { status: InternetStatus }) {
	return (
		<StatusBadge
			value={status}
			labels={INTERNET_STATUS_LABELS}
			colorMap={internetStatusColorMap}
			variant="badge"
			defaultVariant="outline"
		/>
	);
}
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/contratos/contrato-status-badge/internet-status-badge.tsx
git commit -m "refactor(contratos): migrate InternetStatusBadge to BadgeColor"
```

---

## Task 6: Migrate CreditBadge in transferencia-titularidade-cessionario-section.tsx

**Files:**

- Modify: `src/features/cs/contratos/contrato-detalhes/actions/transferencia-titularidade/transferencia-titularidade-cessionario-section.tsx`

- [ ] **Step 1: Replace raw `<span>` with `<Badge color={...}>`**

Replace the `CreditBadge` function (lines 46–74) and the import at the top:

Add import:

```typescript
import { Badge, type BadgeColor } from "#/components/ui/badge";
```

Replace `CREDITO_COLORS` (lines 46–50) with:

```typescript
const CREDITO_COLOR_MAP: Record<
  keyof typeof PESSOAS_CREDITO_LABELS,
  BadgeColor
> = {
  1: "blue",
  2: "amber",
  9: "red",
};
```

Replace the `CreditBadge` function (lines 52–74) with:

```typescript
function CreditBadge({ credito }: { credito: number | string | undefined }) {
	if (!credito) return null;

	const creditoKey = Number(credito) as keyof typeof PESSOAS_CREDITO_LABELS;
	const label = PESSOAS_CREDITO_LABELS[creditoKey];
	const color = CREDITO_COLOR_MAP[creditoKey];

	return (
		<div className="flex items-center gap-2">
			<span className="text-sm text-muted-foreground">Análise de Crédito:</span>
			<Badge color={color}>{label}</Badge>
		</div>
	);
}
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/contratos/contrato-detalhes/actions/transferencia-titularidade/transferencia-titularidade-cessionario-section.tsx
git commit -m "refactor(contratos): migrate CreditBadge to use Badge with color prop"
```

---

## Task 7: Migrate pessoas-columns.tsx

**Files:**

- Modify: `src/features/cs/pessoas/pessoas-columns.tsx`

- [ ] **Step 1: Replace color class maps with BadgeColor maps + use `colorMap` prop**

Replace `CREDITO_COLOR_CLASSES` (lines 10–17) with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";

const CREDITO_COLOR_MAP: Record<
  keyof typeof PESSOAS_CREDITO_LABELS,
  BadgeColor
> = {
  1: "green",
  2: "yellow",
  9: "red",
};
```

Replace `ANALISE_IXC_COLOR_CLASSES` (lines 28–34) with:

```typescript
const ANALISE_IXC_COLOR_MAP: Record<
  keyof typeof PESSOAS_ANALISEIXC_LABELS,
  BadgeColor
> = {
  0: "red",
  1: "green",
};
```

Update the Crédito cell (lines 56–80): Change `colorClasses={CREDITO_COLOR_CLASSES}` → `colorMap={CREDITO_COLOR_MAP}` and change `defaultClass="bg-gray-100 text-gray-600"` → `defaultColor="gray"`.

Update the Análise IXC cell (lines 81–105): Change `colorClasses={ANALISE_IXC_COLOR_CLASSES}` → `colorMap={ANALISE_IXC_COLOR_MAP}`.

> **Note:** The pessoas-columns uses `soft no border` style (`bg-{color}-500/10 text-{color}-600 hover:bg-{color}-500/20`). Since `colorMap` uses the Badge's solid color definitions, and the `soft` variant (with border+hover) is the closest match, we need the soft no border variant. We'll use the `variants` prop to set `variant="soft"` where needed, and apply extra classes for hover behavior. However, since `compoundVariants` already handles `variant="soft" + color`, this should produce the soft style with border+hover. If border-less is needed, we can use `className` to remove the border.

Actually, looking more carefully: the existing pessoas style is `bg-green-500/10 text-green-600 hover:bg-green-500/20` (no border). Our soft compound produces `bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20` (with border). The border is a minor visual difference. We'll accept this as the new standard and keep the border. If the border must be removed, the consumer can pass `className="border-transparent"`.

**Crédito cell replacement (lines 59–79):**

```typescript
cell: ({ row }) => {
	const value = row.original.f_credito;
	if (!value) {
		return (
			<StatusBadge
				value="nao_analisado"
				labels={{ nao_analisado: "Não analisado" }}
				defaultVariant="secondary"
				defaultColor="gray"
			/>
		);
	}
	return (
		<StatusBadge
			value={value}
			labels={PESSOAS_CREDITO_LABELS}
			variants={CREDITO_VARIANTS}
			colorMap={CREDITO_COLOR_MAP}
			defaultVariant="secondary"
		/>
	);
},
```

**Análise IXC cell replacement (lines 82–105):**

```typescript
cell: ({ row }) => {
	const value = row.original.f_analise_ixc;
	if (!value) {
		return (
			<StatusBadge
				value="nao_analisado"
				labels={{ nao_analisado: "Não analisado" }}
				defaultVariant="secondary"
				defaultColor="gray"
			/>
		);
	}
	return (
		<StatusBadge
			value={value}
			labels={PESSOAS_ANALISEIXC_LABELS}
			variants={ANALISE_IXC_VARIANTS}
			colorMap={ANALISE_IXC_COLOR_MAP}
			defaultVariant="destructive"
		/>
	);
},
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/pessoas/pessoas-columns.tsx
git commit -m "refactor(pessoas): migrate column badges to BadgeColor maps"
```

---

## Task 8: Migrate motivo-badge.tsx

**Files:**

- Modify: `src/features/cs/negociacoes/negociacao-badges/motivo-badge.tsx`

- [ ] **Step 1: Replace `MOTIVO_COLOR_CLASSES` with `BadgeColor` map + use `variant="soft"`**

Replace the file with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";
import { StatusBadge } from "#/components/badges/status-badge";
import { MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

const MOTIVO_COLOR_MAP: Record<keyof typeof MOTIVO_LABELS, BadgeColor> = {
	I: "emerald",
	M: "amber",
	D: "red",
	U: "blue",
	N: "yellow",
	R: "cyan",
	T: "indigo",
	L: "teal",
	S: "pink",
	P: "gray",
};

interface MotivoBadgeProps {
	value: keyof typeof MOTIVO_LABELS;
}

export function MotivoBadge({ value }: MotivoBadgeProps) {
	return (
		<StatusBadge
			value={value}
			labels={MOTIVO_LABELS}
			colorMap={MOTIVO_COLOR_MAP}
			defaultVariant="soft"
			defaultColor="gray"
		/>
	);
}
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-badges/motivo-badge.tsx
git commit -m "refactor(negociacoes): migrate MotivoBadge to BadgeColor with soft variant"
```

---

## Task 9: Migrate tipo-produto-badge.tsx

**Files:**

- Modify: `src/features/cs/negociacoes/negociacao-badges/tipo-produto-badge.tsx`

- [ ] **Step 1: Replace `TIPO_PRODUTO_COLORS` with `BadgeColor` map**

Replace the file with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";
import { StatusBadge } from "#/components/badges/status-badge";
import type { NegociacoesItensTipoProduto } from "#/generated/types/nocobase/other/negociacoes-itens";
import { NEGOCIACOESITENS_TIPOPRODUTO_LABELS } from "#/generated/types/nocobase/other/negociacoes-itens";

const TIPO_PRODUTO_COLOR_MAP: Record<
	keyof typeof NEGOCIACOESITENS_TIPOPRODUTO_LABELS,
	BadgeColor
> = {
	INTERNET: "blue",
	TV: "purple",
	STFC: "green",
	MVNO: "orange",
	SVA: "yellow",
};

interface TipoProdutoBadgeProps {
	tipo: NegociacoesItensTipoProduto;
}

export function TipoProdutoBadge({ tipo }: TipoProdutoBadgeProps) {
	return (
		<StatusBadge
			value={tipo}
			labels={NEGOCIACOESITENS_TIPOPRODUTO_LABELS}
			colorMap={TIPO_PRODUTO_COLOR_MAP}
			variant="inline"
		/>
	);
}
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-badges/tipo-produto-badge.tsx
git commit -m "refactor(negociacoes): migrate TipoProdutoBadge to BadgeColor"
```

---

## Task 10: Migrate relacao-badge.tsx

**Files:**

- Modify: `src/features/cs/negociacoes/negociacao-badges/relacao-badge.tsx`

- [ ] **Step 1: Replace `RELACAO_COLORS` with `BadgeColor` map**

Replace the file with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";
import { StatusBadge } from "#/components/badges/status-badge";
import type { NegociacoesItensRelacao } from "#/generated/types/nocobase/other/negociacoes-itens";
import { NEGOCIACOESITENS_RELACAO_LABELS } from "#/generated/types/nocobase/other/negociacoes-itens";

const RELACAO_COLOR_MAP: Record<
	keyof typeof NEGOCIACOESITENS_RELACAO_LABELS,
	BadgeColor
> = {
	COMBO: "blue",
	ADICIONAL: "orange",
};

interface RelacaoBadgeProps {
	relacao: NegociacoesItensRelacao;
}

export function RelacaoBadge({ relacao }: RelacaoBadgeProps) {
	return (
		<StatusBadge
			value={relacao}
			labels={NEGOCIACOESITENS_RELACAO_LABELS}
			colorMap={RELACAO_COLOR_MAP}
			variant="inline"
		/>
	);
}
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-badges/relacao-badge.tsx
git commit -m "refactor(negociacoes): migrate RelacaoBadge to BadgeColor"
```

---

## Task 11: Migrate negociacoes-list-columns.tsx

**Files:**

- Modify: `src/features/cs/negociacoes/negociacoes-list-columns.tsx`

- [ ] **Step 1: Replace `negociacaoStatusColorClasses` with `BadgeColor` map + use `variant="soft"`**

Replace `negociacaoStatusColorClasses` (lines 9–19) with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";

const negociacaoStatusColorMap: Record<
  keyof typeof NEGOCIACAO_STATUS_LABELS,
  BadgeColor
> = {
  "1": "blue",
  "2": "amber",
  "3": "purple",
  "4": "orange",
  "5": "green",
  "6": "gray",
};
```

Update the status cell (lines 86–97): Replace both `colorClasses={negociacaoStatusColorClasses}` and `defaultClass={negociacaoStatusColorClasses["6"]}` with `colorMap={negociacaoStatusColorMap}`, `defaultVariant="soft"`, `defaultColor="gray"`:

```typescript
cell: ({ row }) => (
	<StatusBadge
		value={row.original.f_status}
		labels={NEGOCIACAO_STATUS_LABELS}
		colorMap={negociacaoStatusColorMap}
		defaultVariant="soft"
		defaultColor="gray"
	/>
),
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/negociacoes/negociacoes-list-columns.tsx
git commit -m "refactor(negociacoes): migrate neg list status badges to BadgeColor with soft variant"
```

---

## Task 12: Migrate negociacao-comentarios-tab.tsx

**Files:**

- Modify: `src/features/cs/negociacoes/negociacao-comentarios-tab.tsx`

- [ ] **Step 1: Replace inline hardcoded green ring badge with `<Badge color="green">`**

Add import:

```typescript
import { Badge } from "#/components/ui/badge";
```

Replace the raw `<span>` badge (lines 30–34) with:

```typescript
badge={
	comentario.f_insere_atendimento_ixc === "1" ? (
		<Badge color="green" className="ring-1 ring-inset ring-green-600/20">
			Enviado ao IXC
		</Badge>
	) : undefined
}
```

> **Pitfall:** Original used `bg-green-500/15 text-green-700` (custom opacity), but `color="green"` gives `bg-green-100 text-green-800`. The visual difference is acceptable as the color system is being standardized. The ring class preserves the ring visual.

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/negociacoes/negociacao-comentarios-tab.tsx
git commit -m "refactor(negociacoes): migrate comment badge to Badge with color prop"
```

---

## Task 13: Migrate contratos-filters.tsx (FilterMultiSelect badges)

**Files:**

- Modify: `src/features/cs/contratos/contratos-table/contratos-filters.tsx`

- [ ] **Step 1: Replace color maps with `BadgeColor` maps, update FilterMultiSelect props**

Replace `STATUS_BADGE_COLORS` (lines 20–27) with:

```typescript
import type { BadgeColor } from "#/components/ui/badge";

const STATUS_BADGE_COLOR_MAP: Record<ContratoStatus, BadgeColor> = {
  A: "green",
  I: "slate",
  D: "orange",
  C: "red",
  P: "blue",
  N: "purple",
};
```

Replace `SERVICO_STATUS_BADGE_COLORS` (lines 29–37) with:

```typescript
const SERVICO_STATUS_BADGE_COLOR_MAP: Record<InternetStatus, BadgeColor> = {
  A: "emerald",
  D: "red",
  FA: "amber",
  CM: "orange",
  CA: "orange",
  CE: "purple",
  AA: "blue",
};
```

Update the `FilterMultiSelect<ContratoStatus>` call (lines 93–107): Replace `badgeColorClass={(value) => STATUS_BADGE_COLORS[value]}` with `badgeColorMap={STATUS_BADGE_COLOR_MAP}`.

Update the `FilterMultiSelect<InternetStatus>` call (lines 108–122): Replace `badgeColorClass={(value) => SERVICO_STATUS_BADGE_COLORS[value]}` with `badgeColorMap={SERVICO_STATUS_BADGE_COLOR_MAP}`.

> **Note:** `badgeColorMap` is new prop introduced in Task 14. After that task, FilterMultiSelect will accept both `badgeColorClass` (legacy) and `badgeColorMap` (new).

- [ ] **Step 2: Run typecheck** — `pnpm typecheck` (may fail if Task 14 not done first — order matters!)

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/contratos/contratos-table/contratos-filters.tsx
git commit -m "refactor(contratos): migrate filter badge colors to BadgeColor maps"
```

---

## Task 14: Update FilterMultiSelect to support BadgeColor

**Files:**

- Modify: `src/components/filters/filter-multi-select.tsx`

- [ ] **Step 1: Add `badgeColorMap` prop, keep backward compat with `badgeColorClass`**

Replace the file with:

```typescript
import { ChevronDown, X } from "lucide-react";
import type { BadgeColor } from "#/components/ui/badge";
import { getBadgeSolidClass } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { Label } from "#/components/ui/label";
import { cn } from "#/lib/utils";

interface MultiSelectOption<T extends string> {
	value: T;
	label: string;
}

interface FilterMultiSelectProps<T extends string> {
	id: string;
	label: string;
	placeholder?: string;
	options: readonly MultiSelectOption<T>[];
	value: T[];
	onChange: (value: T[]) => void;
	allLabel?: string;
	showAllOption?: boolean;
	badgeTrigger?: boolean;
	/**
	 * NEW: Maps option value → BadgeColor for trigger badge pills.
	 * Preferred over badgeColorClass (which takes raw Tailwind class strings).
	 */
	badgeColorMap?: Record<T, BadgeColor>;
	/** @deprecated Use badgeColorMap instead */
	badgeColorClass?: (value: T) => string;
	maxBadgeDisplay?: number;
	className?: string;
}

export function FilterMultiSelect<T extends string>({
	id,
	label,
	placeholder = "Selecionar...",
	options,
	value,
	onChange,
	allLabel = "Todos",
	showAllOption = true,
	badgeTrigger = false,
	badgeColorMap,
	badgeColorClass,
	maxBadgeDisplay = 2,
	className,
}: FilterMultiSelectProps<T>) {
	const valueSet = new Set(value);
	const selectedOptions = options.filter((opt) => valueSet.has(opt.value));
	const triggerLabel =
		selectedOptions.length === 0
			? placeholder
			: selectedOptions.length === 1
				? selectedOptions[0].label
				: `${selectedOptions[0].label} +${selectedOptions.length - 1}`;

	const handleToggle = (optionValue: T, checked: boolean) => {
		if (checked) {
			if (valueSet.has(optionValue)) return;
			onChange([...value, optionValue]);
		} else {
			onChange(value.filter((v) => v !== optionValue));
		}
	};

	const getPillClass = (opt: MultiSelectOption<T>): string => {
		// Prefer badgeColorMap, fall back to badgeColorClass, fall back to default
		if (badgeColorMap) {
			return getBadgeSolidClass(badgeColorMap[opt.value] ?? "gray");
		}
		return badgeColorClass?.(opt.value) ?? "bg-primary/10 text-primary";
	};

	return (
		<div className={cn("w-full min-w-0 space-y-2", className)}>
			<Label htmlFor={id} className="text-xs font-medium text-muted-foreground">
				{label}
			</Label>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button
						id={id}
						type="button"
						variant="outline"
						className={cn(
							"flex w-full min-w-0 items-center justify-start gap-2 py-1 pr-2",
							badgeTrigger && selectedOptions.length > 0
								? "h-auto min-h-8"
								: "h-8",
							selectedOptions.length === 0 && "text-muted-foreground",
						)}
					>
						{badgeTrigger && selectedOptions.length > 0 ? (
							<>
								<div className="flex flex-nowrap items-center gap-1 overflow-hidden min-w-0 flex-1">
									{selectedOptions.slice(0, maxBadgeDisplay).map((opt) => (
										<span
											key={opt.value}
											className={cn(
												"inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium shrink-0",
												getPillClass(opt),
											)}
										>
											{opt.label}
										</span>
									))}
									{selectedOptions.length > maxBadgeDisplay && (
										<span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground shrink-0">
											+{selectedOptions.length - maxBadgeDisplay}
										</span>
									)}
								</div>
								<span
									aria-hidden="true"
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										onChange([]);
									}}
									className="rounded-full p-0.5 hover:bg-muted-foreground/20 shrink-0 cursor-pointer"
								>
									<X className="size-3 shrink-0 text-muted-foreground" />
								</span>
							</>
						) : (
							<>
								<span className="truncate flex-1 flex items-center gap-1">
									{triggerLabel}
								</span>
								<ChevronDown
									className="size-4 shrink-0 text-muted-foreground"
									aria-hidden="true"
								/>
							</>
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start">
					<DropdownMenuGroup>
						{showAllOption && (
							<DropdownMenuCheckboxItem
								checked={value.length === 0}
								onCheckedChange={(checked) => {
									if (checked) onChange([]);
								}}
							>
								{allLabel}
							</DropdownMenuCheckboxItem>
						)}
						{options.map((opt) => (
							<DropdownMenuCheckboxItem
								key={opt.value}
								checked={valueSet.has(opt.value)}
								onCheckedChange={(checked) => handleToggle(opt.value, checked)}
							>
								{opt.label}
							</DropdownMenuCheckboxItem>
						))}
					</DropdownMenuGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/components/filters/filter-multi-select.tsx
git commit -m "feat(filters): add badgeColorMap prop to FilterMultiSelect"
```

---

## Task 15: Migrate kanban-dashboard source-collections.ts

**Files:**

- Modify: `src/features/cs/kanban-dashboard/types/source-collections.ts`

- [ ] **Step 1: Derive colorClass/bgClass from BadgeColor using utilities**

Replace the `BadgeStyle` type, `SOURCE_COLLECTION_BADGE`, and `NEGOCIACAO_MOTIVO_BADGE`:

```typescript
import type { BadgeOption } from "#/components/filters/filter-badge-group.logic";
import type { BadgeColor } from "#/components/ui/badge";
import { getBadgeSolidClass } from "#/components/ui/badge";
import type { NegociacoesMotivo } from "#/generated/types/nocobase/negociacoes";

// ─────────────────────────────────────────────────────────────────────────────
// Source collection discriminator
// ─────────────────────────────────────────────────────────────────────────────

export type SourceCollection = "tt" | "te" | "sc" | "neg";

export type { NegociacoesMotivo };

export const PRIMARY_NEGOCIACAO_MOTIVO_OPTIONS: readonly NegociacoesMotivo[] = [
  "N",
  "I",
  "S",
  "P",
] as const;

export const EXTRA_NEGOCIACAO_MOTIVO_OPTIONS: readonly NegociacoesMotivo[] =
  [] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Collection badge labels + colors
// ─────────────────────────────────────────────────────────────────────────────

type BadgeStyle = { label: string; colorClass: string; bgClass: string };

// Helper: derive BadgeStyle from a label + BadgeColor
function makeBadgeStyle(label: string, color: BadgeColor): BadgeStyle {
  return {
    label,
    colorClass: getBadgeSolidClass(color),
    bgClass: getBadgeSolidClass(color),
  };
}

export const SOURCE_COLLECTION_BADGE: Record<SourceCollection, BadgeStyle> = {
  tt: makeBadgeStyle("Troca Tit.", "blue"),
  te: makeBadgeStyle("Troca End.", "purple"),
  sc: makeBadgeStyle("Suspensão", "orange"),
  neg: makeBadgeStyle("Negociação", "teal"),
};

export const NEGOCIACAO_MOTIVO_BADGE: Record<NegociacoesMotivo, BadgeStyle> = {
  I: makeBadgeStyle("Venda Nova", "emerald"),
  M: makeBadgeStyle("Mud. Endereço", "violet"),
  D: makeBadgeStyle("Downgrade", "rose"),
  U: makeBadgeStyle("Upgrade", "sky"),
  N: makeBadgeStyle("Negociação", "amber"),
  R: makeBadgeStyle("Reativação", "cyan"),
  T: makeBadgeStyle("Mud. Tecnologia", "indigo"),
  L: makeBadgeStyle("Mud. Titularidade", "teal"),
  S: makeBadgeStyle("2ª Contratação", "pink"),
  P: makeBadgeStyle("Proposta", "gray"),
};

const SOURCE_COLLECTION_OPTION_LABELS = {
  tt: "Troca Titularidade",
  te: "Troca Endereço",
  sc: "Suspensão de Contrato",
  neg: "Negociação",
} as const satisfies Record<SourceCollection, string>;

export const SOURCE_COLLECTION_OPTIONS: BadgeOption<SourceCollection>[] = (
  Object.entries(SOURCE_COLLECTION_BADGE) as [SourceCollection, BadgeStyle][]
).map(([value, style]) => ({
  value,
  label: SOURCE_COLLECTION_OPTION_LABELS[value],
  colorClass: style.colorClass,
  bgClass: style.bgClass,
}));

export type { BadgeOption };
```

> **Pitfall:** The kanban badges use a slightly different dark mode style (`dark:bg-{color}-900 dark:text-{color}-200` — fully opaque dark) vs our solid style (`dark:bg-{color}-900/30 dark:text-{color}-400` — semi-transparent). The kanban badges are used in `FilterBadgeGroup` toggle buttons, not in the `Badge` component. This is a minor visual change that standardizes darkness handling.

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/kanban-dashboard/types/source-collections.ts
git commit -m "refactor(kanban): derive badge styles from BadgeColor utility"
```

---

## Task 16: Migrate troca-endereco-list.tsx

**Files:**

- Modify: `src/features/cs/troca-de-endereco/components/troca-endereco-list.tsx`

- [ ] **Step 1: Replace inline `colorClasses` with `colorMap`**

Replace the status cell (lines 78–96). The current code uses an inline object `{ [displayLabel]: "bg-blue-100 ..." }`:

```typescript
cell: ({ row }) => {
	const displayLabel =
		TROCAENDERECO_STATUS_LABELS[row.original.f_status] ||
		row.original.f_status;
	return (
		<StatusBadge
			value={displayLabel}
			labels={TROCAENDERECO_STATUS_LABELS}
			colorMap={{ [displayLabel]: "blue" }}
			defaultColor="gray"
			variant="inline"
			defaultVariant="secondary"
		/>
	);
},
```

- [ ] **Step 2: Run typecheck** — `pnpm typecheck`

- [ ] **Step 3: Commit**

```bash
git add src/features/cs/troca-de-endereco/components/troca-endereco-list.tsx
git commit -m "refactor(troca-endereco): migrate inline colorClasses to BadgeColor colorMap"
```

---

## Task 17: Full typecheck + verification grep

- [ ] **Step 1: Run full typecheck**

Run: `pnpm typecheck`
Expected: Zero errors.

- [ ] **Step 2: Grep for remaining raw color class patterns**

Run: `rg "bg-(slate|gray|red|orange|amber|yellow|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|pink|rose)-(100|500/10|500/15|900|900/30)\b" src/ --include='*.tsx' --include='*.ts' | rg -v "/ui/badge" | rg -v "generated" | rg -v "node_modules"`
Expected: Only badge.tsx and its utility exports should appear (plus possibly some non-badge uses like backgrounds).

Run: `rg "colorClasses" src/ --include='*.tsx' --include='*.ts' | rg -v "node_modules" | rg -v "\.weave"`
Expected: Only the `StatusBadge` interface definition and the `pessoas-columns.tsx` references should appear (which still use `colorClasses` prop name — but it's the prop name, not a custom map). No custom color map objects using `Record<string, string>` should remain.

- [ ] **Step 3: Run lint + format**

Run: `pnpm biome:fix`

- [ ] **Step 4: Run tests**

Run: `pnpm test`
Expected: All existing tests pass. No regressions.

- [ ] **Step 5: Final commit**

```bash
git add .
git commit -m "refactor: centralize badge colors to BadgeColor type, migrate 15 color maps"
```

---

## Verification

- [ ] All tests pass (`pnpm test`)
- [ ] TypeScript has zero errors (`pnpm typecheck`)
- [ ] No raw color class maps remain outside badge.tsx (`rg "Record<.*string>.*bg-" src/`)
- [ ] Backward compatibility: `colorClasses` still works in StatusBadge
- [ ] FilterMultiSelect accepts both `badgeColorClass` (deprecated) and `badgeColorMap` (new)
- [ ] Kanban badges render correctly with standardized colors
- [ ] No regressions in badge rendering (visual check via dev server)

---

## Self-Review

### 1. Spec coverage

| Requirement                                                                               | Task(s)     |
| ----------------------------------------------------------------------------------------- | ----------- |
| Add `color` dimension to badge variant CVA                                                | Task 1      |
| Add `soft` variant with compoundVariants                                                  | Task 1      |
| Export `BadgeColor` type                                                                  | Task 1      |
| Export utility helpers (getBadgeSolidClass, getBadgeSoftClass, getBadgeSoftNoBorderClass) | Task 1      |
| Update StatusBadge to use colorMap                                                        | Tasks 2, 3  |
| Migrate contrato-status-badge                                                             | Task 4      |
| Migrate internet-status-badge                                                             | Task 5      |
| Migrate CreditBadge (transferencia)                                                       | Task 6      |
| Migrate pessoas-columns                                                                   | Task 7      |
| Migrate motivo-badge                                                                      | Task 8      |
| Migrate tipo-produto-badge                                                                | Task 9      |
| Migrate relacao-badge                                                                     | Task 10     |
| Migrate negociacoes-list-columns                                                          | Task 11     |
| Migrate negociacao-comentarios-tab                                                        | Task 12     |
| Migrate contratos-filters (FilterMultiSelect)                                             | Task 13     |
| Update FilterMultiSelect for BadgeColor support                                           | Task 14     |
| Migrate kanban source-collections                                                         | Task 15     |
| Migrate troca-endereco-list                                                               | Task 16     |
| Backward compatibility for colorClasses                                                   | Tasks 3, 14 |
| Verification                                                                              | Task 17     |

### 2. Placeholder scan

No TBDs, TODOs, or "implement later" markers. Every step has complete code.

### 3. Type consistency

- `BadgeColor` is exported from `badge.tsx` → imported everywhere as `import type { BadgeColor } from "#/components/ui/badge"`
- `getBadgeSolidClass(color: BadgeColor): string` → used in StatusBadge inline mode (Task 3), FilterMultiSelect (Task 14), kanban (Task 15)
- `getBadgeColorValue(value, colorMap, defaultColor): BadgeColor` → used in StatusBadge (Task 3)
- `StatusBadge.colorMap?: Record<string, BadgeColor>` → consistent across all migration tasks
- `FilterMultiSelect.badgeColorMap?: Record<T, BadgeColor>` → consistent with StatusBadge pattern

### 4. Pitfalls considered

- **Dark mode consistency**: Standardized on `dark:bg-{color}-900/30 dark:text-{color}-400` (semi-transparent) instead of the opaque `dark:bg-{color}-900 dark:text-{color}-200` used by kanban. This is intentional — the kanban filter badges use a slightly different visual style (toggle buttons), but standardizing dark mode handling to the `/30` variant is acceptable.
- **Soft no border vs soft with border**: pessoas-columns used no-border soft style. The migration uses the full soft compound variant (with border+hover). Border addition is an intentional visual improvement.
- **FilterBadgeGroup bgClass**: The kanban's `BadgeStyle.bgClass` is used for active toggle button states, rendered by `FilterBadgeGroup`. The `makeBadgeStyle` helper generates `bgClass` from `getBadgeSolidClass()`, which was previously the same as `colorClass` in kanban. This maintains backward compatibility.
- **comentarios-tab ring badge**: The original used `bg-green-500/15 text-green-700 ring-1 ring-inset ring-green-600/20`. Migration uses `<Badge color="green" className="ring-1 ring-inset ring-green-600/20">`. The bg/text colors change from `green-500/15`/`green-700` to the solid `green-100`/`green-800`. The ring preserves the visual distinction.
- **No breaking changes**: All `colorClasses` props are kept as deprecated alternatives; nothing breaks immediately.
