import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "#/lib/utils";

// ---------------------------------------------------------------------------
// Color presets
// ---------------------------------------------------------------------------

export const BADGE_COLORS = [
	"slate",
	"gray",
	"red",
	"orange",
	"amber",
	"yellow",
	"green",
	"emerald",
	"teal",
	"cyan",
	"sky",
	"blue",
	"indigo",
	"violet",
	"purple",
	"pink",
	"rose",
] as const;

export type BadgeColor = (typeof BADGE_COLORS)[number];

// Solid style: bg-{color}-100 text-{color}-800 dark:bg-{color}-900/30 dark:text-{color}-400
const SOLID_COLOR_CLASS: Record<BadgeColor, string> = {
	slate: "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
	gray: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400",
	red: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	orange:
		"bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	yellow:
		"bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
	green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
	emerald:
		"bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	teal: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400",
	cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
	sky: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400",
	blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	indigo:
		"bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
	violet:
		"bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400",
	purple:
		"bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
	pink: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
	rose: "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400",
};

// Soft style: bg-{color}-500/10 text-{color}-600 border-{color}-500/20 hover:bg-{color}-500/20
const SOFT_COLOR_CLASS: Record<BadgeColor, string> = {
	slate:
		"bg-slate-500/10 text-slate-600 border-slate-500/20 hover:bg-slate-500/20",
	gray: "bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
	red: "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20",
	orange:
		"bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
	amber:
		"bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
	yellow:
		"bg-yellow-500/10 text-yellow-600 border-yellow-500/20 hover:bg-yellow-500/20",
	green:
		"bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
	emerald:
		"bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20",
	teal: "bg-teal-500/10 text-teal-600 border-teal-500/20 hover:bg-teal-500/20",
	cyan: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 hover:bg-cyan-500/20",
	sky: "bg-sky-500/10 text-sky-600 border-sky-500/20 hover:bg-sky-500/20",
	blue: "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
	indigo:
		"bg-indigo-500/10 text-indigo-600 border-indigo-500/20 hover:bg-indigo-500/20",
	violet:
		"bg-violet-500/10 text-violet-600 border-violet-500/20 hover:bg-violet-500/20",
	purple:
		"bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
	pink: "bg-pink-500/10 text-pink-600 border-pink-500/20 hover:bg-pink-500/20",
	rose: "bg-rose-500/10 text-rose-600 border-rose-500/20 hover:bg-rose-500/20",
};

// Soft style without border:
// bg-{color}-500/10 text-{color}-600 hover:bg-{color}-500/20
const SOFT_NO_BORDER_COLOR_CLASS: Record<BadgeColor, string> = {
	slate: "bg-slate-500/10 text-slate-600 hover:bg-slate-500/20",
	gray: "bg-gray-500/10 text-gray-600 hover:bg-gray-500/20",
	red: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
	orange: "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20",
	amber: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20",
	yellow: "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
	green: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
	emerald: "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20",
	teal: "bg-teal-500/10 text-teal-600 hover:bg-teal-500/20",
	cyan: "bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20",
	sky: "bg-sky-500/10 text-sky-600 hover:bg-sky-500/20",
	blue: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
	indigo: "bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20",
	violet: "bg-violet-500/10 text-violet-600 hover:bg-violet-500/20",
	purple: "bg-purple-500/10 text-purple-600 hover:bg-purple-500/20",
	pink: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20",
	rose: "bg-rose-500/10 text-rose-600 hover:bg-rose-500/20",
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
