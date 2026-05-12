import type { LucideIcon } from "lucide-react";
import {
	getStateClasses,
	getStateIcon,
} from "#/components/async-button/async-button-styles";
import { DropdownMenuItem } from "#/components/ui/dropdown-menu";
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

/**
 * Renders a DropdownMenuItem that opens a PopupRequestDialog.
 * Uses `onSelect` with `preventDefault()` to prevent the dropdown from
 * closing, since the dialog renders via Radix Portal and is independent
 * of the dropdown's DOM tree. The dropdown closes when the dialog closes.
 */
export function PopupRequestActionItem<
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
					e.preventDefault();
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
						onDialogClose();
					}
				}}
				onCancel={closeDialog}
				onRetry={handleRetry}
			/>
		</>
	);
}
