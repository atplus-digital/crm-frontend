import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

interface MetricItemProps {
	icon: ReactNode;
	label: string;
	value: string | number | null | undefined;
	fallback?: string;
	iconClassName?: string;
	valueClassName?: string;
}

export function MetricItem({
	icon,
	label,
	value,
	fallback = "—",
	iconClassName,
	valueClassName,
}: MetricItemProps) {
	return (
		<div className="flex items-center gap-2.5">
			<div
				className={cn(
					"flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10",
					iconClassName,
				)}
			>
				{icon}
			</div>
			<div className="min-w-0 flex-1">
				<p className="text-xs font-medium text-muted-foreground">{label}</p>
				<p className={cn("truncate text-sm font-semibold", valueClassName)}>
					{value ?? fallback}
				</p>
			</div>
		</div>
	);
}
