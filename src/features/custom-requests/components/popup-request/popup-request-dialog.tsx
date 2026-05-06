import {
	Dialog,
	DialogContent,
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
	const isSuccess = mutation.isSuccess && mutation.data != null;
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					{isSuccess ? (
						<DialogTitle>Sucesso</DialogTitle>
					) : (
						<DialogTitle>{dialogTitle}</DialogTitle>
					)}
				</DialogHeader>
				<div className="min-h-16">
					<PopupRequestContent
						identifier={identifier}
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
