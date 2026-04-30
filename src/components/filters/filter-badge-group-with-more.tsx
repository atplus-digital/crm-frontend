import { useState } from "react";
import { cn } from "#/lib/utils";

export interface BadgeOption<T extends string> {
	value: T;
	label: string;
	colorClass?: string;
	bgClass?: string;
}

interface FilterBadgeGroupWithMoreProps<T extends string> {
	label: string;
	options: readonly BadgeOption<T>[];
	extraOptions?: readonly BadgeOption<T>[];
	value: T[] | undefined;
	onChange: (value: T[] | undefined) => void;
	allLabel?: string;
	moreLabel?: string;
	compact?: boolean;
	disabled?: boolean;
	showAllButton?: boolean;
	className?: string;
}

export function FilterBadgeGroupWithMore<T extends string>({
	label,
	options,
	extraOptions,
	value,
	onChange,
	allLabel = "Todos",
	moreLabel = "+",
	compact = false,
	disabled = false,
	showAllButton = true,
	className,
}: FilterBadgeGroupWithMoreProps<T>) {
	const selectedValues = value ?? [];

	// Extra options that are currently visible (not collapsed in "+" badge)
	const [expandedExtraKeys, setExpandedExtraKeys] = useState<Set<T>>(new Set());

	const hasExtras = extraOptions && extraOptions.length > 0;

	// Extra options that are currently collapsed (not selected and not expanded)
	const collapsedExtraOptions = hasExtras
		? extraOptions.filter(
				(opt) =>
					!selectedValues.includes(opt.value) &&
					!expandedExtraKeys.has(opt.value),
			)
		: [];

	const handleToggle = (optionValue: T) => {
		if (disabled) return;
		if (selectedValues.includes(optionValue)) {
			const newValue = selectedValues.filter((v) => v !== optionValue);
			onChange(showAllButton && newValue.length === 0 ? undefined : newValue);
		} else {
			onChange([...selectedValues, optionValue]);
		}
	};

	// Handle clicking the "+" badge to expand/collapse extras
	const handleToggleExtras = () => {
		if (disabled || !hasExtras) return;
		if (expandedExtraKeys.size > 0) {
			setExpandedExtraKeys(new Set());
		} else {
			setExpandedExtraKeys(new Set(extraOptions.map((opt) => opt.value)));
		}
	};

	// When an expanded extra option is deselected, collapse it
	const handleExpandedOptionChange = (optionValue: T) => {
		if (disabled) return;
		handleToggle(optionValue);
		const willBeSelected = !selectedValues.includes(optionValue);
		if (!willBeSelected) {
			setExpandedExtraKeys((prev) => {
				const next = new Set(prev);
				next.delete(optionValue);
				return next;
			});
		}
	};

	const allOptions = hasExtras ? [...options, ...extraOptions] : options;
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
		<div className={cn("flex flex-col gap-1 w-full min-w-0", className)}>
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
				{options.map((option) => {
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
				{hasExtras &&
					extraOptions
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
