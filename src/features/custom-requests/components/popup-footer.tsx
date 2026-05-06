import { Button } from "#/components/ui/button";
import { DialogClose, DialogFooter } from "#/components/ui/dialog";
import type { DialogMode } from "./popup-request.types";

interface PopupFooterProps {
	dialogMode: DialogMode;
	isLoading: boolean;
	onCancel: () => void;
	onRetry: () => void;
}

export function PopupFooter({
	dialogMode,
	isLoading,
	onCancel,
	onRetry,
}: PopupFooterProps) {
	if (dialogMode === "confirm") {
		return (
			<DialogFooter showCloseButton={false}>
				<Button variant="outline" onClick={onCancel}>
					Cancelar
				</Button>
				<Button onClick={onRetry} disabled={isLoading}>
					Confirmar
				</Button>
			</DialogFooter>
		);
	}

	if (isLoading || dialogMode === "result") {
		return null;
	}

	return (
		<DialogFooter showCloseButton={false}>
			<DialogClose asChild>
				<Button type="button">Fechar</Button>
			</DialogClose>
		</DialogFooter>
	);
}
