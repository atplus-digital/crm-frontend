import { Calendar, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { cn } from "#/lib/utils";

// ---------------------------------------------------------------------------
// FilterSelectField — label + single/multi select with "Todos" option
// ---------------------------------------------------------------------------

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

export type FilterSelectFieldProps<T extends string> =
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
				<label
					htmlFor={id}
					className="text-xs font-medium text-muted-foreground"
				>
					{label}
				</label>
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
			<label htmlFor={id} className="text-xs font-medium text-muted-foreground">
				{label}
			</label>
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

// ---------------------------------------------------------------------------
// FilterInputField — label + text input
// ---------------------------------------------------------------------------

export interface FilterInputFieldProps {
	id: string;
	label: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
}

export function FilterInputField({
	id,
	label,
	placeholder,
	value,
	onChange,
}: FilterInputFieldProps) {
	return (
		<div className="space-y-2">
			<label htmlFor={id} className="text-xs font-medium text-muted-foreground">
				{label}
			</label>
			<Input
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="h-8"
			/>
		</div>
	);
}

// ---------------------------------------------------------------------------
// FilterDateField — label (with calendar icon) + date input
// ---------------------------------------------------------------------------

export interface FilterDateFieldProps {
	id: string;
	label: string;
	value: string;
	icon?: ReactNode;
	onChange: (value: string) => void;
}

export function FilterDateField({
	id,
	label,
	value,
	icon = <Calendar className="size-3.5" aria-hidden="true" />,
	onChange,
}: FilterDateFieldProps) {
	return (
		<div className="space-y-2">
			<label
				htmlFor={id}
				className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
			>
				{icon}
				{label}
			</label>
			<Input
				id={id}
				type="date"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="h-8"
			/>
		</div>
	);
}
