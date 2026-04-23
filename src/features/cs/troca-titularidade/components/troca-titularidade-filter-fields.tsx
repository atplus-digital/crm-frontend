import { Calendar } from "lucide-react";
import type { ReactNode } from "react";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";

export interface FilterSelectFieldProps<T extends string> {
	id: string;
	label: string;
	value: T | "all";
	placeholder: string;
	options: readonly { value: T; label: string }[];
	onChange: (value: T | undefined) => void;
}

export function FilterSelectField<T extends string>({
	id,
	label,
	value,
	placeholder,
	options,
	onChange,
}: FilterSelectFieldProps<T>) {
	return (
		<div className="space-y-2">
			<label htmlFor={id} className="text-xs font-medium text-muted-foreground">
				{label}
			</label>
			<Select
				value={value}
				onValueChange={(v) => onChange(v === "all" ? undefined : (v as T))}
			>
				<SelectTrigger id={id} className="h-8">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">Todos</SelectItem>
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

export interface FilterDateFieldProps {
	id: string;
	label: ReactNode;
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
