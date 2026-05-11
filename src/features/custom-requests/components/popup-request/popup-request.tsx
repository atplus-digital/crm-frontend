import {
	getStateClasses,
	getStateIcon,
} from "#/components/async-button/async-button-styles";
import { Button } from "#/components/ui/button";
import type { CustomRequestIdentifier } from "#/features/custom-requests/hooks/use-custom-requests";
import { cn } from "#/lib/utils";
import type { PopupRequestProps } from "./popup-request.types";
import { PopupRequestDialog } from "./popup-request-dialog";
import { usePopupRequest } from "./use-popup-request";

export function PopupRequest<I extends CustomRequestIdentifier>({
	identifier,
	children,
	payload,
	onSuccess,
	title,
	confirm = true,
	confirmMessage,
	variant = "default",
	size = "default",
	autoCloseOnSuccess = false,
	redirectTo,
}: PopupRequestProps<I>) {
	const {
		isOpen,
		dialogMode,
		mutation,
		buttonState,
		openDialog,
		closeDialog,
		handleOpenChange,
		handleRetry,
	} = usePopupRequest({
		identifier,
		payload,
		onSuccess,
		confirm,
		autoCloseOnSuccess,
		redirectTo,
	});

	const StateIcon = getStateIcon(buttonState);
	const stateClasses = getStateClasses(buttonState);
	const isLoading = buttonState === "loading";

	return (
		<>
			<Button
				variant={variant}
				size={size}
				onClick={openDialog}
				disabled={isLoading}
				aria-busy={isLoading}
				className={stateClasses || undefined}
			>
				{StateIcon ? (
					<StateIcon
						className={cn("size-4 shrink-0", isLoading && "animate-spin")}
						aria-hidden="true"
					/>
				) : null}
				{children}
			</Button>

			<PopupRequestDialog
				isOpen={isOpen}
				dialogMode={dialogMode}
				mutation={mutation}
				identifier={identifier}
				title={title}
				confirmMessage={confirmMessage}
				onOpenChange={handleOpenChange}
				onCancel={closeDialog}
				onRetry={handleRetry}
			/>
		</>
	);
}

export type { PopupRequestProps } from "./popup-request.types";
