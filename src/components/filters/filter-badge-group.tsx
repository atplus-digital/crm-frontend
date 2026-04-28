import { cn } from "#/lib/utils";

export interface BadgeOption<T extends string> {
	value: T;
	label: string;
	colorClass?: string;
	bgClass?: string;
}

interface FilterBadgeGroupProps<T extends string> {
	label: string;
	options: readonly BadgeOption<T>[];
	value: T[] | undefined;
	onChange: (value: T[] | undefined) => void;
	allLabel?: string;
	compact?: boolean;
}

export function FilterBadgeGroup<T extends string>({
	label,
	options,
	value,
	onChange,
	allLabel = "Todos",
	compact = false,
}: FilterBadgeGroupProps<T>) {
	const selectedValues = value ?? [];

	const handleToggle = (optionValue: T) => {
		if (selectedValues.includes(optionValue)) {
			// Remove if already selected
			const newValue = selectedValues.filter((v) => v !== optionValue);
			onChange(newValue.length > 0 ? newValue : undefined);
		} else {
			// Add to selection
			onChange([...selectedValues, optionValue]);
		}
	};

	const isAllSelected =
		selectedValues.length === 0 || selectedValues.length === options.length;

	const handleSelectAll = () => {
		onChange(undefined); // undefined means all selected
	};

	const badgeClass = compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm";

	return (
		<div className="space-y-1 w-full min-w-0">
			<span className="text-sm font-medium text-muted-foreground">{label}</span>
			<div className="flex flex-nowrap items-center gap-1.5 overflow-x-auto md:flex-wrap">
				{/* "All" badge */}
				<button
					type="button"
					onClick={handleSelectAll}
					className={cn(
						"inline-flex items-center rounded-full font-medium transition-colors border",
						badgeClass,
						isAllSelected
							? "bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
							: "bg-muted text-muted-foreground hover:bg-muted/80 border-border",
					)}
				>
					{allLabel}
				</button>

				{/* Individual options */}
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
			</div>
		</div>
	);
}
