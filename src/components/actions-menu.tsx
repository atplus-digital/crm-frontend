import type { LucideIcon } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";

export type ActionItem = {
	icon: LucideIcon;
	label: string;
	onClick?: () => void;
	disabled?: boolean;
	variant?: "default" | "destructive";
};

interface ActionsMenuProps {
	actions: readonly ActionItem[];
	triggerLabel?: string;
	triggerVariant?:
		| "default"
		| "outline"
		| "secondary"
		| "ghost"
		| "destructive"
		| "link";
	align?: "start" | "center" | "end";
	className?: string;
}

export function ActionsMenu({
	actions,
	triggerLabel = "Ações",
	triggerVariant = "default",
	align = "end",
	className,
}: ActionsMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={triggerVariant} size="sm" className={className}>
					<MoreHorizontal className="size-4" />
					<span className="hidden sm:inline">{triggerLabel}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align={align} className="w-48">
				{actions.map((action) => (
					<DropdownMenuItem
						key={action.label}
						onClick={action.onClick}
						disabled={action.disabled}
						className={
							action.variant === "destructive"
								? "text-destructive focus:text-destructive"
								: undefined
						}
					>
						<action.icon className="size-4" />
						{action.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
