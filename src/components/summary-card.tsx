import type { ReactNode } from "react";
import { EntityAvatar } from "#/components/entity-avatar";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { cn } from "#/lib/utils";

interface SummaryCardProps {
	title: string;
	subtitle?: string;
	avatarName: string;
	headerActions?: ReactNode;
	children: ReactNode;
	className?: string;
}

export function SummaryCard({
	title,
	subtitle,
	avatarName,
	headerActions,
	children,
	className,
}: SummaryCardProps) {
	return (
		<Card className={cn("border-border/50 bg-muted/30 pb-0", className)}>
			<CardHeader>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<EntityAvatar name={avatarName} />
						<div>
							<h1 className="text-xl font-bold tracking-tight">{title}</h1>
							{subtitle && (
								<p className="text-sm font-bold text-muted-foreground">
									{subtitle}
								</p>
							)}
						</div>
					</div>
					{headerActions && (
						<div className="flex flex-wrap items-center gap-2">
							{headerActions}
						</div>
					)}
				</div>
			</CardHeader>
			<CardContent className="border-t bg-background/70 py-4">
				{children}
			</CardContent>
		</Card>
	);
}
