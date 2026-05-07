import {
	ArrowRightLeft,
	FileWarning,
	MapPin,
	Pause,
	RefreshCw,
} from "lucide-react";
import { useState } from "react";
import { type ActionItem, ActionsMenu } from "#/components/actions-menu";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { TransferenciaTitularidadeSheet } from "../../../troca-titularidade";

interface ContratoDetalhesActionsProps {
	contrato: ContratoWithCliente;
}

function ContratoDetalhesActions({ contrato }: ContratoDetalhesActionsProps) {
	const [transferSheetOpen, setTransferSheetOpen] = useState(false);

	const isTransferDisabled =
		contrato.status === "I" ||
		contrato.status === "N" ||
		contrato.status === "D";

	const actions: readonly ActionItem[] = [
		{
			icon: RefreshCw,
			label: "Nova Contratação",
			popupRequest: {
				identifier: "segunda-contratacao",
				payload: { currentRecord: { id: contrato.id } },
				title: "Nova Contratação",
				confirmMessage:
					"Deseja iniciar uma nova contratação para este cliente?",
			},
		},
		{
			icon: ArrowRightLeft,
			label: "Transferir",
			disabled: isTransferDisabled,
			onClick: () => setTransferSheetOpen(true),
		},
		{ icon: RefreshCw, label: "Renegociar" },
		{ icon: MapPin, label: "Trocar Endereço" },
		{ icon: Pause, label: "Suspender" },
		{ icon: FileWarning, label: "Reter" },
	];

	return (
		<>
			<ActionsMenu
				actions={actions}
				triggerLabel="Mais"
				triggerVariant="outline"
			/>
			<TransferenciaTitularidadeSheet
				contrato={contrato}
				open={transferSheetOpen}
				onOpenChange={setTransferSheetOpen}
			/>
		</>
	);
}

export { ContratoDetalhesActions };
