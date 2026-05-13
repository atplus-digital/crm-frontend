import { CheckCircle, FileSignature, Trash2 } from "lucide-react";
import { useState } from "react";
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
import { Button } from "#/components/ui/button";

interface SuspensaoContratoActionsProps {
	status: number;
	onEnviar: () => void;
	onConcluir: () => void;
	onArquivar: () => void;
	isLoading?: boolean;
}

export function SuspensaoContratoActions({
	status,
	onEnviar,
	onConcluir,
	onArquivar,
	isLoading = false,
}: SuspensaoContratoActionsProps) {
	const [arquivarOpen, setArquivarOpen] = useState(false);
	const statusNum = Number(status);

	return (
		<div className="flex flex-wrap gap-2">
			<Button
				variant="default"
				size="sm"
				disabled={statusNum !== 0 || isLoading}
				onClick={onEnviar}
			>
				<FileSignature className="size-4 mr-2" />
				Enviar para Assinatura
			</Button>
			<Button
				variant="default"
				size="sm"
				disabled={statusNum !== 2 || isLoading}
				onClick={onConcluir}
			>
				<CheckCircle className="size-4 mr-2" />
				Concluir
			</Button>
			<Button
				variant="destructive"
				size="sm"
				disabled={statusNum === 4 || isLoading}
				onClick={() => setArquivarOpen(true)}
			>
				<Trash2 className="size-4 mr-2" />
				Arquivar
			</Button>
			<AlertDialog open={arquivarOpen} onOpenChange={setArquivarOpen}>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Arquivar</AlertDialogTitle>
						<AlertDialogDescription>
							Tem certeza que deseja arquivar essa Suspensão de Contrato?
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancelar</AlertDialogCancel>
						<AlertDialogAction
							onClick={() => {
								onArquivar();
								setArquivarOpen(false);
							}}
						>
							Confirmar
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
