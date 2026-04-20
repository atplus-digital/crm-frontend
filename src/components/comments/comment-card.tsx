import { CalendarIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import { getInitials } from "#/lib/utils";

interface CommentCardProps {
	authorName: string;
	avatarFallback?: string;
	timestamp: string; // already formatted
	children: ReactNode;
	badge?: ReactNode; // optional badge, e.g., "Enviado ao IXC"
	className?: string;
}

export function CommentCard({
	authorName,
	avatarFallback,
	timestamp,
	children,
	badge,
	className,
}: CommentCardProps) {
	const initials = avatarFallback || getInitials(authorName);

	return (
		<Card className={className}>
			<CardHeader className="flex flex-row items-start gap-3 space-y-0 p-4 pb-2">
				<Avatar size="default">
					<AvatarFallback>{initials}</AvatarFallback>
				</Avatar>
				<div className="flex flex-col gap-1 flex-1">
					<div className="flex items-center gap-2">
						<span className="font-medium text-sm">{authorName}</span>
						<div className="flex items-center gap-1 text-xs text-muted-foreground">
							<CalendarIcon className="h-3 w-3" />
							<span>{timestamp}</span>
						</div>
					</div>
					{badge && <div className="mt-1">{badge}</div>}
				</div>
			</CardHeader>
			<CardContent className="pb-4 pt-0">
				<p className="text-sm text-card-foreground whitespace-pre-wrap">
					{children}
				</p>
			</CardContent>
		</Card>
	);
}
