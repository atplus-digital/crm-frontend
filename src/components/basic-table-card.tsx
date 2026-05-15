import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

type BasicTableCardProps = {
	label: string;
	value: string | number;
	className?: string;
	children?: ReactNode;
	onClick?: () => void;
};

export function BasicTableCard({
	label,
	value,
	className,
	children,
	onClick,
}: BasicTableCardProps) {
	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: card container is conditionally interactive when onClick provided
		<div
			className={cn("rounded-lg border bg-card p-3", className)}
			onClick={onClick}
			onKeyDown={
				onClick
					? (e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								onClick();
							}
						}
					: undefined
			}
			role={onClick ? "button" : undefined}
			tabIndex={onClick ? 0 : undefined}
		>
			<p className="text-xs text-muted-foreground">{label}</p>
			{children ?? <p className="text-lg font-semibold">{value}</p>}
		</div>
	);
}
