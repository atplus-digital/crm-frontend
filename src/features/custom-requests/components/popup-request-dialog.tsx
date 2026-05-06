import type { UseQueryResult } from "@tanstack/react-query";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "#/components/ui/dialog";
import { PopupFooter } from "./popup-footer";
import type { DialogMode } from "./popup-request.types";
import { PopupRequestContent } from "./popup-request-content";

interface PopupRequestDialogProps {
	isOpen: boolean;
	dialogMode: DialogMode;
	mutation: Pick<
		UseQueryResult,
		"isError" | "isSuccess" | "isPending" | "error" | "data"
	>;
	identifier: string;
	title?: string;
	registryEntryName?: string;
	confirmMessage?: string;
	onOpenChange: (open: boolean) => void;
	onCancel: () => void;
	onRetry: () => void;
}

export function PopupRequestDialog({
	isOpen,
	dialogMode,
	mutation,
	identifier,
	title,
	registryEntryName,
	confirmMessage,
	onOpenChange,
	onCancel,
	onRetry,
}: PopupRequestDialogProps) {
	const dialogTitle = title ?? registryEntryName ?? identifier;
	const isLoading = mutation.isPending;

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>{dialogTitle}</DialogTitle>
					<DialogDescription>Requisição: {identifier}</DialogDescription>
				</DialogHeader>
				<div className="min-h-16">
					<PopupRequestContent
						dialogMode={dialogMode}
						confirmMessage={confirmMessage}
						mutation={mutation}
					/>
				</div>
				<PopupFooter
					dialogMode={dialogMode}
					isLoading={isLoading}
					onCancel={onCancel}
					onRetry={onRetry}
				/>
			</DialogContent>
		</Dialog>
	);
}
