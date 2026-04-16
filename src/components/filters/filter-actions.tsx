import { Search, X } from "lucide-react";
import type { ComponentProps } from "react";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

interface FilterActionsProps {
	onApply?: () => void;
	onClear: () => void;
	canClear?: boolean;
	applyLabel?: string;
	clearLabel?: string;
	className?: string;
	applyVariant?: ComponentProps<typeof Button>["variant"];
	clearVariant?: ComponentProps<typeof Button>["variant"];
	size?: ComponentProps<typeof Button>["size"];
}

export function FilterActions({
	onApply,
	onClear,
	canClear = true,
	applyLabel = "Filtrar",
	clearLabel = "Limpar",
	className,
	applyVariant = "default",
	clearVariant = "outline",
	size = "sm",
}: FilterActionsProps) {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Button variant={applyVariant} size={size} onClick={onApply}>
				<Search className="size-4" />
				{applyLabel}
			</Button>
			<Button
				variant={clearVariant}
				size={size}
				onClick={onClear}
				disabled={!canClear}
			>
				<X className="size-4" />
				{clearLabel}
			</Button>
		</div>
	);
}
