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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { cn } from "#/lib/utils";

interface FilterSelectFieldBaseProps<T extends string> {
	id: string;
	label: string;
	placeholder: string;
	options: readonly { value: T; label: string }[];
	allLabel?: string;
}

interface FilterSelectFieldSingleProps<T extends string>
	extends FilterSelectFieldBaseProps<T> {
	multiple?: false;
	value: T | "all";
	onChange: (value: T | undefined) => void;
}

interface FilterSelectFieldMultipleProps<T extends string>
	extends FilterSelectFieldBaseProps<T> {
	multiple: true;
	value: readonly T[];
	onChange: (value: T[]) => void;
}

type FilterSelectFieldProps<T extends string> =
	| FilterSelectFieldSingleProps<T>
	| FilterSelectFieldMultipleProps<T>;

export function FilterSelectField<T extends string>({
	id,
	label,
	placeholder,
	options,
	allLabel = "Todos",
	...props
}: FilterSelectFieldProps<T>) {
	if (props.multiple) {
		const selectedValues = props.value;
		const selectedValuesSet = new Set(selectedValues);
		const selectedLabels = options
			.filter((opt) => selectedValuesSet.has(opt.value))
			.map((opt) => opt.label);
		const triggerLabel =
			selectedLabels.length === 0
				? placeholder
				: selectedLabels.length === 1
					? selectedLabels[0]
					: `${selectedLabels[0]} +${selectedLabels.length - 1}`;

		return (
			<div className="w-full min-w-0 space-y-2">
				<Label
					htmlFor={id}
					className="text-xs font-medium text-muted-foreground"
				>
					{label}
				</Label>
				<DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<Button
							id={id}
							type="button"
							variant="outline"
							className={cn(
								"h-8 w-full justify-between px-2.5 text-sm font-normal",
								selectedLabels.length === 0 && "text-muted-foreground",
							)}
						>
							<span className="truncate">{triggerLabel}</span>
							<ChevronDown
								className="size-4 shrink-0 text-muted-foreground"
								aria-hidden="true"
							/>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start">
						<DropdownMenuGroup>
							<DropdownMenuCheckboxItem
								checked={selectedValues.length === 0}
								onCheckedChange={(checked) => {
									if (checked === true) {
										props.onChange([]);
									}
								}}
							>
								{allLabel}
							</DropdownMenuCheckboxItem>
							{options.map((opt) => (
								<DropdownMenuCheckboxItem
									key={opt.value}
									checked={selectedValuesSet.has(opt.value)}
									onCheckedChange={(checked) => {
										if (checked === true) {
											if (selectedValuesSet.has(opt.value)) {
												return;
											}
											props.onChange([...selectedValues, opt.value]);
											return;
										}

										props.onChange(
											selectedValues.filter((value) => value !== opt.value),
										);
									}}
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

	const { value, onChange } = props;

	return (
		<div className="w-full min-w-0 space-y-2">
			<Label htmlFor={id} className="text-xs font-medium text-muted-foreground">
				{label}
			</Label>
			<Select
				value={value}
				onValueChange={(v) => onChange(v === "all" ? undefined : (v as T))}
			>
				<SelectTrigger id={id} className="h-8 w-full min-w-0">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">{allLabel}</SelectItem>
					{options.map((opt) => (
						<SelectItem key={opt.value} value={opt.value}>
							{opt.label}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
