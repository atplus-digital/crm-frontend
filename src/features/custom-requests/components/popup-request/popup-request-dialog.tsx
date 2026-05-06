import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "#/components/ui/dialog";
import { PopupFooter } from "./popup-footer";
import type { DialogMode, PopupMutationState } from "./popup-request.types";
import { PopupRequestContent } from "./popup-request-content";

interface PopupRequestDialogProps {
	isOpen: boolean;
	dialogMode: DialogMode;
	mutation: PopupMutationState;
	identifier: string;
	title?: string;
	confirmMessage?: string;
	onOpenChange: (open: boolean) => void;
	onCancel: () => void;
	onRetry: () => void;
	disabled?: boolean;
}

export function PopupRequestDialog({
	isOpen,
	dialogMode,
	mutation,
	identifier,
	title,
	confirmMessage,
	onOpenChange,
	onCancel,
	onRetry,
	disabled,
}: PopupRequestDialogProps) {
	const dialogTitle = title ?? "Confirmar Envio";
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
					disabled={disabled}
				/>
			</DialogContent>
		</Dialog>
	);
}
