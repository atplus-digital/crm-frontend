import { useCallback, useState } from "react";
import { toast } from "sonner";
import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "#/features/custom-requests/hooks/use-custom-requests";
import { useCustomRequest } from "#/features/custom-requests/hooks/use-custom-requests";
import { useMinimumLoading } from "#/hooks/use-minimum-loading";
import { getErrorMessage } from "#/lib/api-errors";
import { createLogger } from "#/lib/logger";
import type { DialogMode } from "./popup-request.types";
import { getSuccessDisplayMessage } from "./popup-request.utils";

const popupLog = createLogger("popup-request");

interface UsePopupRequestOptions<I extends CustomRequestIdentifier> {
	identifier: I;
	payload?: CustomRequestPayload<I>;
	onSuccess?: (data: unknown) => void;
	confirm?: boolean;
	autoCloseOnSuccess?: boolean;
	minimumLoading?: boolean;
}

export function usePopupRequest<I extends CustomRequestIdentifier>({
	identifier,
	payload,
	onSuccess,
	confirm = true,
	autoCloseOnSuccess = false,
	minimumLoading = true,
}: UsePopupRequestOptions<I>) {
	const [isOpen, setIsOpen] = useState(false);
	const [dialogMode, setDialogMode] = useState<DialogMode>("confirm");
	const mutation = useCustomRequest(identifier);

	const closeDialog = useCallback(() => {
		setIsOpen(false);
		setDialogMode("confirm");
		mutation.reset();
	}, [mutation]);

	const executeRequest = useCallback(async () => {
		try {
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
		} catch (error) {
			toast.error(
				getErrorMessage(
					error,
					"Um erro desconhecido ocorreu ao processar a solicitação.",
				),
			);
			throw error;
		}
	}, [autoCloseOnSuccess, closeDialog, mutation, onSuccess, payload]);

	const { state: buttonState, run: runWithMinimumLoading } =
		useMinimumLoading(executeRequest);

	const handleRetry = useCallback(() => {
		void runWithMinimumLoading().catch((error) => {
			popupLog.error("Error executing custom request:", error);
		});
	}, [runWithMinimumLoading]);

	const openDialog = useCallback(() => {
		mutation.reset();
		setDialogMode(confirm ? "confirm" : "result");

		if (!confirm) {
			void runWithMinimumLoading().catch((error) => {
				popupLog.error("Error executing custom request:", error);
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

	const effectiveButtonState = minimumLoading
		? buttonState
		: mutation.isPending
			? "loading"
			: mutation.isSuccess
				? "success"
				: mutation.isError
					? "error"
					: "idle";

	return {
		isOpen,
		dialogMode,
		mutation,
		buttonState: effectiveButtonState,
		openDialog,
		closeDialog,
		handleOpenChange,
		handleRetry,
	};
}
