import { Calendar } from "lucide-react";
import type React from "react";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";

interface FilterDateFieldProps {
	id: string;
	label: string;
	value: string;
	icon?: React.ReactNode;
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
			<Label
				htmlFor={id}
				className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
			>
				{icon}
				{label}
			</Label>
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
