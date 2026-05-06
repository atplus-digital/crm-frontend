import { useCallback, useState } from "react";
import { toast } from "sonner";
import {
	getStateClasses,
	getStateIcon,
} from "#/components/async-button/async-button-styles";
import { Button } from "#/components/ui/button";
import { useMinimumLoading } from "#/hooks/use-minimum-loading";
import { cn } from "#/lib/utils";
import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "../../hooks/use-custom-requests";
import { useCustomRequest } from "../../hooks/use-custom-requests";
import type { DialogMode, PopupRequestProps } from "./popup-request.types";
import { getSuccessDisplayMessage } from "./popup-request.utils";
import { PopupRequestDialog } from "./popup-request-dialog";

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
}: PopupRequestProps<I>) {
	const [isOpen, setIsOpen] = useState(false);
	const [dialogMode, setDialogMode] = useState<DialogMode>("confirm");
	const mutation = useCustomRequest(identifier);

	const closeDialog = useCallback(() => {
		setIsOpen(false);
		setDialogMode("confirm");
		mutation.reset();
	}, [mutation]);

	const executeRequest = useCallback(async () => {
		setDialogMode("result");
		const result = await mutation.mutateAsync({
			payload: (payload ?? {}) as CustomRequestPayload<I>,
		});
		onSuccess?.(result);
		toast.success(getSuccessDisplayMessage(result));
		if (autoCloseOnSuccess) {
			closeDialog();
		}
		return result;
	}, [autoCloseOnSuccess, closeDialog, mutation, onSuccess, payload]);

	const { state: buttonState, run: runWithMinimumLoading } =
		useMinimumLoading(executeRequest);

	const handleExecute = useCallback(() => {
		void runWithMinimumLoading().catch((error) => {
			console.error("Error executing custom request:", error);
		});
	}, [runWithMinimumLoading]);

	const openDialog = useCallback(() => {
		mutation.reset();
		setDialogMode(confirm ? "confirm" : "result");

		if (!confirm) {
			void runWithMinimumLoading().catch((error) => {
				console.error("Error executing custom request:", error);
			});
		} else {
			setIsOpen(true);
		}
	}, [confirm, mutation, runWithMinimumLoading]);

	const handleOpenChange = useCallback(
		(open: boolean) => {
			if (!open) {
				closeDialog();
			}
		},
		[closeDialog],
	);

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
				onRetry={handleExecute}
			/>
		</>
	);
}

export type { PopupRequestProps } from "./popup-request.types";
