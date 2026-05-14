import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "#/components/ui/alert-dialog";

// ============================================================================
// Props
// ============================================================================

interface SheetDiscardGuardProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onConfirm: () => void;
	onCancel: () => void;
	title?: string;
	description?: string;
}

// ============================================================================
// Component
// ============================================================================

export function SheetDiscardGuard({
	open,
	onOpenChange,
	onConfirm,
	onCancel,
	title = "Descartar alterações?",
	description = "Você tem alterações não salvas. Deseja sair sem salvar?",
}: SheetDiscardGuardProps) {
	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent size="sm">
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel onClick={onCancel}>Cancelar</AlertDialogCancel>
					<AlertDialogAction onClick={onConfirm}>Descartar</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
