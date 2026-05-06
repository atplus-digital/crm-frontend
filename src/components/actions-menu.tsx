import type { LucideIcon } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import {
	getStateClasses,
	getStateIcon,
} from "#/components/async-button/async-button-styles";
import { Button } from "#/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "#/components/ui/dropdown-menu";
import { PopupRequestDialog } from "#/features/custom-requests/components/popup-request/popup-request-dialog";
import { usePopupRequest } from "#/features/custom-requests/components/popup-request/use-popup-request";
import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "#/features/custom-requests/hooks/use-custom-requests";
import { cn } from "#/lib/utils";

export type PopupRequestAction<
	I extends CustomRequestIdentifier = CustomRequestIdentifier,
> = {
	identifier: I;
	payload?: CustomRequestPayload<I>;
	onSuccess?: (data: unknown) => void;
	title?: string;
	confirm?: boolean;
	confirmMessage?: string;
	autoCloseOnSuccess?: boolean;
};

export type ActionItem<
	I extends CustomRequestIdentifier = CustomRequestIdentifier,
> =
	| {
			icon: LucideIcon;
			label: string;
			onClick?: () => void;
			disabled?: boolean;
			variant?: "default" | "destructive";
			popupRequest?: PopupRequestAction<I>;
	  }
	| {
			icon: LucideIcon;
			label: string;
			onClick?: () => void;
			disabled?: boolean;
			variant?: "default" | "destructive";
			popupRequest?: never;
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

/**
 * Renders a DropdownMenuItem that opens a PopupRequestDialog.
 * Uses `onSelect` with `preventDefault()` to prevent the dropdown from
 * closing, since the dialog renders via Radix Portal and is independent
 * of the dropdown's DOM tree. The dropdown closes when the dialog closes.
 */
function PopupRequestActionItem<
	I extends CustomRequestIdentifier = CustomRequestIdentifier,
>({
	icon: Icon,
	label,
	disabled,
	variant,
	popupRequest,
	onDialogClose,
}: {
	popupRequest: PopupRequestAction<I>;
	onDialogClose: () => void;
} & Pick<ActionItem<I>, "icon" | "label" | "disabled" | "variant">) {
	const {
		isOpen,
		dialogMode,
		mutation,
		openDialog,
		closeDialog,
		handleOpenChange,
		handleRetry,
		buttonState,
	} = usePopupRequest({
		identifier: popupRequest.identifier,
		payload: popupRequest.payload,
		onSuccess: popupRequest.onSuccess,
		confirm: popupRequest.confirm,
		autoCloseOnSuccess: popupRequest.autoCloseOnSuccess,
		minimumLoading: true,
	});

	const StateIcon = getStateIcon(buttonState);

	return (
		<>
			<DropdownMenuItem
				onSelect={(e) => {
					e.preventDefault(); // prevent dropdown from closing
					openDialog();
				}}
				disabled={disabled || buttonState === "loading"}
				className={cn(
					variant === "destructive"
						? "text-destructive focus:text-destructive"
						: undefined,
					getStateClasses(buttonState),
				)}
			>
				{StateIcon ? (
					<StateIcon
						className={cn(
							"size-4 shrink-0",
							buttonState === "loading" && "animate-spin",
						)}
					/>
				) : (
					<Icon className="size-4" />
				)}
				{label}
			</DropdownMenuItem>
			<PopupRequestDialog
				isOpen={isOpen}
				dialogMode={dialogMode}
				mutation={mutation}
				identifier={popupRequest.identifier}
				title={popupRequest.title}
				confirmMessage={popupRequest.confirmMessage}
				onOpenChange={(open) => {
					handleOpenChange(open);
					if (!open) {
						onDialogClose(); // close dropdown when dialog closes
					}
				}}
				onCancel={closeDialog}
				onRetry={handleRetry}
			/>
		</>
	);
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
