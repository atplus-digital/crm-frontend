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
	 * Maps option value → BadgeColor for trigger badge pills.
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

	const getPillClass = (opt: MultiSelectOption<T>) => {
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
