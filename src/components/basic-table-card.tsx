import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

export type BasicTableCardProps = {
	label: string;
	value: string | number;
	className?: string;
	children?: ReactNode;
};

export function BasicTableCard({
	label,
	value,
	className,
	children,
}: BasicTableCardProps) {
	return (
		<div className={cn("rounded-lg border bg-card p-3", className)}>
			<p className="text-xs text-muted-foreground">{label}</p>
			{children ?? <p className="text-lg font-semibold">{value}</p>}
		</div>
	);
}
