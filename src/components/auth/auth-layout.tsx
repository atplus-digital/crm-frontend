import type { ReactNode } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";

interface GuestLayoutProps {
	title: string;
	description?: string;
	children: ReactNode;
}

export function GuestLayout({
	title,
	description,
	children,
}: GuestLayoutProps) {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl font-bold">{title}</CardTitle>
					{description && <CardDescription>{description}</CardDescription>}
				</CardHeader>
				<CardContent>{children}</CardContent>
			</Card>
		</div>
	);
}
