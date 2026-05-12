import { cn } from "#/lib/utils";
import {
	type BadgeOption,
	useBadgeGroupLogic,
} from "./filter-badge-group.logic";

// Re-export for backwards compatibility
export type { BadgeOption } from "./filter-badge-group.logic";

interface FilterBadgeGroupProps<T extends string> {
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
	/**
	 * When true, badges appear visually active when no selection is made,
	 * indicating all options are included by default.
	 */
	allActive?: boolean;
	className?: string;
}

export function FilterBadgeGroup<T extends string>({
	label,
	options,
	extraOptions,
	value,
	onChange,
	allActive = false,
	allLabel = "Todos",
	moreLabel = "+",
	compact = false,
	disabled = false,
	showAllButton = true,
	className,
}: FilterBadgeGroupProps<T>) {
	const {
		expandedExtraKeys,
		hasExtras,
		collapsedExtraOptions,
		handleToggle,
		handleToggleExtras,
		handleExpandedOptionChange,
		isBadgeActive,
		isAllSelected,
	} = useBadgeGroupLogic({
		options,
		extraOptions,
		value,
		onChange,
		allActive,
		disabled,
		showAllButton,
	});

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
			<div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto md:flex-wrap my-auto">
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

				{options.map((option) => {
					const isSelected = isBadgeActive(option.value);
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

				{hasExtras &&
					extraOptions!
						.filter((opt) => expandedExtraKeys.has(opt.value))
						.map((option) => {
							const isSelected = isBadgeActive(option.value);
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
