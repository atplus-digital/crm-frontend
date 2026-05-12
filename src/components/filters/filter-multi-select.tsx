import { ChevronDown } from "lucide-react";
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

export interface MultiSelectOption<T extends string> {
	value: T;
	label: string;
}

export interface FilterMultiSelectProps<T extends string> {
	id: string;
	label: string;
	placeholder?: string;
	options: readonly MultiSelectOption<T>[];
	value: T[];
	onChange: (value: T[]) => void;
	allLabel?: string;
	showAllOption?: boolean;
	badgeTrigger?: boolean;
	badgeColorClass?: (value: T) => string;
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
	badgeColorClass,
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
							<div className="flex flex-wrap gap-1">
								{selectedOptions.map((opt) => (
									<span
										key={opt.value}
										className={cn(
											"inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
											badgeColorClass?.(opt.value) ??
												"bg-primary/10 text-primary",
										)}
									>
										{opt.label}
									</span>
								))}
							</div>
						) : (
							<span className="truncate">{triggerLabel}</span>
						)}
						<ChevronDown
							className={cn(
								"size-4 shrink-0 text-muted-foreground",
								badgeTrigger && selectedOptions.length > 0 && "ml-auto",
							)}
							aria-hidden="true"
						/>
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
