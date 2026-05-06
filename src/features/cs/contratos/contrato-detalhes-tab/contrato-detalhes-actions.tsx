import {
	ArrowRightLeft,
	FileWarning,
	MapPin,
	Pause,
	RefreshCw,
} from "lucide-react";
import { type ActionItem, ActionsMenu } from "#/components/actions-menu";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";

interface ContratoDetalhesActionsProps {
	contrato: ContratoWithCliente;
}

function ContratoDetalhesActions({ contrato }: ContratoDetalhesActionsProps) {
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
			popupRequest: {
				identifier: "log-test",
				payload: { $nSelectedRecord: [] },
				title: "Transferir Contrato",
				confirmMessage: "Deseja transferir este contrato para outro cliente?",
				confirm: false,
			},
		},
		{ icon: RefreshCw, label: "Renegociar" },
		{ icon: MapPin, label: "Trocar Endereço" },
		{ icon: Pause, label: "Suspender" },
		{ icon: FileWarning, label: "Reter" },
	];

	return (
		<ActionsMenu
			actions={actions}
			triggerLabel="Mais"
			triggerVariant="outline"
		/>
	);
}

export { ContratoDetalhesActions };
