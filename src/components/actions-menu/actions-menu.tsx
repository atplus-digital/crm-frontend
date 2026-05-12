import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import {
	type ActionItem,
	PopupRequestActionItem,
} from "./actions-menu.actions";

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
	const [dropdownOpen, setDropdownOpen] = useState(false);

	return (
		<DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant={triggerVariant} size="sm" className={className}>
					<MoreHorizontal className="size-4" />
					<span className="hidden sm:inline">{triggerLabel}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align={align} className="w-48">
				{actions.map((action) =>
					action.popupRequest ? (
						<PopupRequestActionItem
							key={action.label}
							icon={action.icon}
							label={action.label}
							disabled={action.disabled}
							variant={action.variant}
							popupRequest={action.popupRequest}
							onDialogClose={() => setDropdownOpen(false)}
						/>
					) : (
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
					),
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export type { ActionItem, PopupRequestAction } from "./actions-menu.actions";
