import { useState } from "react";
import { cn } from "#/lib/utils";
import type { BadgeOption } from "./filter-badge-group";

interface FilterBadgeGroupWithMoreProps<T extends string> {
	label: string;
	primaryOptions: readonly BadgeOption<T>[];
	extraOptions: readonly BadgeOption<T>[];
	value: T[] | undefined;
	onChange: (value: T[] | undefined) => void;
	allLabel?: string;
	moreLabel?: string;
	compact?: boolean;
	disabled?: boolean;
	showAllButton?: boolean;
}

export function FilterBadgeGroupWithMore<T extends string>({
	label,
	primaryOptions,
	extraOptions,
	value,
	onChange,
	allLabel = "Todos",
	moreLabel = "+",
	compact = false,
	disabled = false,
	showAllButton = true,
}: FilterBadgeGroupWithMoreProps<T>) {
	const selectedValues = value ?? [];

	// Extra options that are currently visible (not collapsed in "+" badge)
	const [expandedExtraKeys, setExpandedExtraKeys] = useState<Set<T>>(new Set());

	// Check which extra options are selected
	const collapsedExtraOptions = extraOptions.filter(
		(opt) => !selectedValues.includes(opt.value),
	);

	const handleToggle = (optionValue: T) => {
		if (disabled) return;
		if (selectedValues.includes(optionValue)) {
			// Remove if already selected
			const newValue = selectedValues.filter((v) => v !== optionValue);
			// When showAllButton is false, we never use undefined - always return array
			onChange(showAllButton && newValue.length === 0 ? undefined : newValue);
		} else {
			// Add to selection
			onChange([...selectedValues, optionValue]);
		}
	};

	// Handle clicking the "+" badge to expand/collapse extras
	const handleToggleExtras = () => {
		if (disabled) return;
		if (expandedExtraKeys.size > 0) {
			// Collapse all expanded extras
			setExpandedExtraKeys(new Set());
		} else {
			// Expand all extras that have been explicitly shown before
			// If no extras have been expanded, show all
			setExpandedExtraKeys(new Set(extraOptions.map((opt) => opt.value)));
		}
	};

	// When an expanded extra option is deselected, collapse it
	const handleExpandedOptionChange = (optionValue: T) => {
		if (disabled) return;
		handleToggle(optionValue);
		// After toggling, check if this option is still selected
		// If not, collapse it
		const willBeSelected = !selectedValues.includes(optionValue);
		if (!willBeSelected) {
			setExpandedExtraKeys((prev) => {
				const next = new Set(prev);
				next.delete(optionValue);
				return next;
			});
		}
	};

	// Check if "all" are selected
	const allOptions = [...primaryOptions, ...extraOptions];
	const isAllSelected =
		selectedValues.length === 0 || selectedValues.length === allOptions.length;

	const badgeClass = compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";
	const badgeClassSm = compact
		? "px-1.5 py-0.5 text-xs"
		: "px-2 py-0.5 text-sm";

	const disabledClass = disabled
		? "opacity-50 cursor-not-allowed pointer-events-none"
		: "";

	return (
		<div className="space-y-1 w-full min-w-0">
			<span className="text-sm font-medium text-muted-foreground">{label}</span>
			<div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto md:flex-wrap">
				{showAllButton && (
					<button
						type="button"
						onClick={() => {
							if (disabled) return;
							onChange(undefined);
						}}
						className={cn(
							"inline-flex items-center rounded-full font-medium transition-colors border",
							badgeClass,
							disabledClass,
							isAllSelected
								? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
								: "bg-muted text-muted-foreground hover:bg-muted/80 border-border",
						)}
					>
						{allLabel}
					</button>
				)}

				{/* Primary options */}
				{primaryOptions.map((option) => {
					const isSelected = selectedValues.includes(option.value);
					return (
						<button
							type="button"
							key={option.value}
							onClick={() => handleToggle(option.value)}
							className={cn(
								"inline-flex items-center rounded-full font-medium transition-colors border",
								badgeClass,
								disabledClass,
								isSelected
									? (option.bgClass ??
											"bg-primary text-primary-foreground hover:bg-primary/90 border-primary")
									: "bg-muted text-muted-foreground hover:bg-muted/80 border-border",
							)}
						>
							{option.label}
						</button>
					);
				})}

				{/* Expanded extra options */}
				{extraOptions
					.filter((opt) => expandedExtraKeys.has(opt.value))
					.map((option) => {
						const isSelected = selectedValues.includes(option.value);
						return (
							<button
								type="button"
								key={option.value}
								onClick={() => handleExpandedOptionChange(option.value)}
								className={cn(
									"inline-flex items-center rounded-full font-medium transition-colors border",
									badgeClass,
									disabledClass,
									isSelected
										? (option.bgClass ??
												"bg-primary text-primary-foreground hover:bg-primary/90 border-primary")
										: "bg-muted text-muted-foreground hover:bg-muted/80 border-border",
								)}
							>
								{option.label}
							</button>
						);
					})}

				{/* "+" badge for collapsed extras */}
				{collapsedExtraOptions.length > 0 && (
					<button
						type="button"
						onClick={handleToggleExtras}
						className={cn(
							"inline-flex items-center rounded-full font-medium transition-colors border border-dashed",
							badgeClassSm,
							disabledClass,
							"bg-muted text-muted-foreground hover:bg-muted/80 border-border",
						)}
					>
						{moreLabel}
					</button>
				)}
			</div>
		</div>
	);
}
