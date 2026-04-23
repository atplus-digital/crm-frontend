import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

interface FilterLayoutProps {
	children: ReactNode;
	actions?: ReactNode;
	className?: string;
	fieldsClassName?: string;
}

export function FilterLayout({
	children,
	actions,
	className,
	fieldsClassName,
}: FilterLayoutProps) {
	return (
		<div className={cn("space-y-4", className)}>
			<div
				className={cn(
					"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					fieldsClassName,
				)}
			>
				{children}
			</div>
			{actions}
		</div>
	);
}
