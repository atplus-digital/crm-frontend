import type { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

export interface DetailSectionProps {
	title: string;
	description?: string;
	icon?: ReactNode;
	children: ReactNode;
	className?: string;
}

export function DetailSection({
	title,
	description,
	icon,
	children,
	className,
}: DetailSectionProps) {
	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					{icon}
					{title}
				</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
