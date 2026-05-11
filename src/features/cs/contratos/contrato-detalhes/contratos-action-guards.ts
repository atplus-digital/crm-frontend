import {
	ContratoStatus,
	type ContratoWithCliente,
	InternetStatus,
} from "../contratos-types";

// ---------------------------------------------------------------------------
// Guard funtions — puras, testáveis, uma por ação
// ---------------------------------------------------------------------------

export function canDesbloquearConfianca(
	contrato: ContratoWithCliente,
): boolean {
	return (
		contrato.status === ContratoStatus.Ativo &&
		contrato.status_internet !== InternetStatus.Ativo
	);
}

export function canTransferir(contrato: ContratoWithCliente): boolean {
	return (
		contrato.status !== "I" &&
		contrato.status !== "N" &&
		contrato.status !== "D"
	);
}

export function canTrocarEndereco(contrato: ContratoWithCliente): boolean {
	return canTransferir(contrato); // mesma regra
}

// ---------------------------------------------------------------------------
// Labels — evita magic strings no resto do código
// ---------------------------------------------------------------------------

export const CONTRATO_ACTION_LABEL = {
	DESBLOQUEIO_CONFIANCA: "Desbloqueio em Confiança",
	NOVA_CONTRATACAO: "Nova Contratação",
	TRANSFERIR: "Transferir",
	RENEGOCIAR: "Renegociar",
	TROCAR_ENDERECO: "Trocar Endereço",
	SUSPENDER: "Suspender",
	RETER: "Reter",
} as const;

// ---------------------------------------------------------------------------
// Centralizador — consulta única, resultado reutilizável
// ---------------------------------------------------------------------------

export function getDisabledContratoActions(
	contrato: ContratoWithCliente,
): Set<string> {
	const disabled = new Set<string>();

	if (!canDesbloquearConfianca(contrato)) {
		disabled.add(CONTRATO_ACTION_LABEL.DESBLOQUEIO_CONFIANCA);
	}
	if (!canTransferir(contrato)) {
		disabled.add(CONTRATO_ACTION_LABEL.TRANSFERIR);
		disabled.add(CONTRATO_ACTION_LABEL.TROCAR_ENDERECO);
	}

	return disabled;
}
