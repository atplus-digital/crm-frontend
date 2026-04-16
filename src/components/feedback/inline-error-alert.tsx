import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

interface InlineErrorAlertProps {
	children: ReactNode;
	className?: string;
}

export function InlineErrorAlert({
	children,
	className,
}: InlineErrorAlertProps) {
	return (
		<div
			role="alert"
			className={cn(
				"rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive",
				className,
			)}
		>
			{children}
		</div>
	);
}
