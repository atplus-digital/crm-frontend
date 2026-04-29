import { CheckCircle, FileSignature, Trash2 } from "lucide-react";
import type { ActionItem } from "#/components/actions-menu";
import { ActionsMenu } from "#/components/actions-menu";

const SUSPENSAO_ACTIONS: readonly ActionItem[] = [
	{ icon: FileSignature, label: "Enviar para Assinatura", disabled: true },
	{ icon: CheckCircle, label: "Concluir", disabled: true },
	{ icon: Trash2, label: "Arquivar", disabled: true, variant: "destructive" },
];

export function SuspensaoContratoActions() {
	return <ActionsMenu actions={SUSPENSAO_ACTIONS} triggerLabel="Ações" />;
}
