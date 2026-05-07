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
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { TransferenciaTitularidadeSheet } from "../../../troca-titularidade";
import { TrocaEnderecoSheet } from "./troca-endereco-action/troca-endereco-sheet";

interface ContratoDetalhesActionsProps {
	contrato: ContratoWithCliente;
}

function ContratoDetalhesActions({ contrato }: ContratoDetalhesActionsProps) {
	const [transferSheetOpen, setTransferSheetOpen] = useState(false);
	const [enderecoSheetOpen, setEnderecoSheetOpen] = useState(false);

	const isTransferDisabled =
		contrato.status === "I" ||
		contrato.status === "N" ||
		contrato.status === "D";

	const actions: readonly ActionItem[] = [
		{
			icon: KeyRound,
			label: "Desbloqueio em Confiança",
			popupRequest: {
				identifier: "78d5kny2gwn",
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
			label: "Transferir",
			disabled: isTransferDisabled,
			onClick: () => setTransferSheetOpen(true),
		},
		{ icon: RefreshCw, label: "Renegociar" },
		{
			icon: MapPin,
			label: "Trocar Endereço",
			disabled: isTransferDisabled,
			onClick: () => setEnderecoSheetOpen(true),
		},
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
			<TrocaEnderecoSheet
				contrato={contrato}
				open={enderecoSheetOpen}
				onOpenChange={setEnderecoSheetOpen}
			/>
		</>
	);
}

export { ContratoDetalhesActions };
