import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "#/components/ui/button";
import { customRequestsRegistry } from "#/generated/custom-requests/generated-registry";
import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "../hooks/use-custom-requests";
import { useCustomRequest } from "../hooks/use-custom-requests";
import type { DialogMode, PopupRequestProps } from "./popup-request.types";
import { getSuccessToastMessage } from "./popup-request.utils";
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
	autoCloseDelay = 1500,
}: PopupRequestProps<I>) {
	const [isOpen, setIsOpen] = useState(false);
	const [dialogMode, setDialogMode] = useState<DialogMode>("confirm");
	const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const mutation = useCustomRequest(identifier);

	const clearAutoCloseTimer = useCallback(() => {
		if (!closeTimerRef.current) {
			return;
		}

		clearTimeout(closeTimerRef.current);
		closeTimerRef.current = null;
	}, []);

	const closeDialog = useCallback(() => {
		clearAutoCloseTimer();
		setIsOpen(false);
		setDialogMode("confirm");
		mutation.reset();
	}, [clearAutoCloseTimer, mutation]);

	// Find registry entry by any identifier (key, name, or qualified name)
	const registryEntry = useMemo(
		() =>
			Object.values(customRequestsRegistry).find(
				(entry) =>
					entry.name === identifier ||
					entry.key === identifier ||
					`${entry.dataSourceKey}.${entry.collection}.${entry.name}` ===
						identifier ||
					`${entry.collection}.${entry.name}` === identifier,
			),
		[identifier],
	);

	const handleExecute = useCallback(() => {
		clearAutoCloseTimer();
		setDialogMode("result");
		mutation.mutate(
			{
				payload: (payload ?? {}) as CustomRequestPayload<I>,
			},
			{
				onSuccess: (result) => {
					onSuccess?.(result);
					if (!autoCloseOnSuccess) {
						return;
					}

					toast.success(getSuccessToastMessage(result));
					closeTimerRef.current = setTimeout(() => {
						closeDialog();
					}, autoCloseDelay);
				},
				onError: (error) => {
					console.error("Error executing custom request:", error);
				},
			},
		);
	}, [
		autoCloseDelay,
		autoCloseOnSuccess,
		clearAutoCloseTimer,
		closeDialog,
		mutation,
		onSuccess,
		payload,
	]);

	const handleOpenChange = useCallback(
		(open: boolean) => {
			if (open) {
				setIsOpen(true);
				mutation.reset();
				setDialogMode(confirm ? "confirm" : "result");
				if (!confirm) {
					handleExecute();
				}
				return;
			}
			closeDialog();
		},
		[closeDialog, confirm, handleExecute, mutation],
	);

	useEffect(() => clearAutoCloseTimer, [clearAutoCloseTimer]);

	return (
		<>
			<Button
				variant={variant}
				size={size}
				onClick={() => handleOpenChange(true)}
			>
				{children}
			</Button>

			<PopupRequestDialog
				isOpen={isOpen}
				dialogMode={dialogMode}
				mutation={mutation}
				identifier={identifier}
				title={title}
				registryEntryName={registryEntry?.name}
				confirmMessage={confirmMessage}
				onOpenChange={handleOpenChange}
				onCancel={closeDialog}
				onRetry={handleExecute}
			/>
		</>
	);
}

export type { PopupRequestProps } from "./popup-request.types";
