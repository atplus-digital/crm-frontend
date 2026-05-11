import {
	ArrowRightLeft,
	FileWarning,
	KeyRound,
	MapPin,
	Pause,
	RefreshCw,
} from "lucide-react";
import { useState } from "react";
import { type ActionItem, ActionsMenu } from "#/components/actions-menu";
import {
	CONTRATO_ACTION_LABEL,
	getDisabledContratoActions,
} from "#/features/cs/contratos/contrato-detalhes/contratos-action-guards";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { TransferenciaTitularidadeSheet } from "../../../troca-titularidade";
import { TrocaEnderecoSheet } from "./troca-endereco-sheet";

interface ContratoDetalhesActionsProps {
	contrato: ContratoWithCliente;
}

function ContratoDetalhesActions({ contrato }: ContratoDetalhesActionsProps) {
	const [transferSheetOpen, setTransferSheetOpen] = useState(false);
	const [enderecoSheetOpen, setEnderecoSheetOpen] = useState(false);

	const disabledActions = getDisabledContratoActions(contrato);

	const actions: readonly ActionItem[] = [
		{
			icon: KeyRound,
			label: CONTRATO_ACTION_LABEL.DESBLOQUEIO_CONFIANCA,
			disabled: disabledActions.has(
				CONTRATO_ACTION_LABEL.DESBLOQUEIO_CONFIANCA,
			),
			popupRequest: {
				identifier: "desbloqueio-confianca",
				payload: { currentRecord: { id: contrato.id } },
				title: "Desbloqueio em Confiança",
				confirmMessage:
					"Deseja realizar o desbloqueio em confiança para este contrato?",
			},
		},
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
			label: CONTRATO_ACTION_LABEL.TRANSFERIR,
			disabled: disabledActions.has(CONTRATO_ACTION_LABEL.TRANSFERIR),
			onClick: () => setTransferSheetOpen(true),
		},
		{ icon: RefreshCw, label: CONTRATO_ACTION_LABEL.RENEGOCIAR },
		{
			icon: MapPin,
			label: CONTRATO_ACTION_LABEL.TROCAR_ENDERECO,
			disabled: disabledActions.has(CONTRATO_ACTION_LABEL.TROCAR_ENDERECO),
			onClick: () => setEnderecoSheetOpen(true),
		},
		{ icon: Pause, label: CONTRATO_ACTION_LABEL.SUSPENDER },
		{ icon: FileWarning, label: CONTRATO_ACTION_LABEL.RETER },
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
			<TrocaEnderecoSheet
				contrato={contrato}
				open={enderecoSheetOpen}
				onOpenChange={setEnderecoSheetOpen}
			/>
		</>
	);
}

export { ContratoDetalhesActions };
