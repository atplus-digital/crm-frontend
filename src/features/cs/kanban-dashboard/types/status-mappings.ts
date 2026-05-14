import type { CrmTrocaTitularidadeStatus } from "#/generated/types/nocobase/crm-troca-titularidade";
import type { NegociacoesStatus } from "#/generated/types/nocobase/negociacoes";
import type { SuspensaoContratoStatus } from "#/generated/types/nocobase/suspensao-contrato";
import type { TrocaEnderecoStatus } from "#/generated/types/nocobase/troca-endereco";
import type { UnifiedStatusKey } from "./status-columns";

// ─────────────────────────────────────────────────────────────────────────────
// Status mapping functions (source status → unified column)
// ─────────────────────────────────────────────────────────────────────────────

export function mapTrocaTitularidadeStatus(
	status: CrmTrocaTitularidadeStatus,
): UnifiedStatusKey {
	const mapping = {
		"0": "Novo",
		"1": "Assinatura",
		"2": "Em Andamento",
		"3": "Concluido",
		"9": "Cancelado",
		"20": "Aguardando assinatura teste",
	} as Record<string, UnifiedStatusKey>;
	return mapping[status] ?? "Novo";
}

export function mapTrocaEnderecoStatus(
	status: TrocaEnderecoStatus,
): UnifiedStatusKey {
	const mapping: Record<TrocaEnderecoStatus, UnifiedStatusKey> = {
		"1": "Novo",
		"3": "Em Andamento",
		"4": "Em Andamento",
		"2": "Concluido",
		"0": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

export function mapSuspensaoContratoStatus(
	status: SuspensaoContratoStatus,
): UnifiedStatusKey {
	const mapping: Record<SuspensaoContratoStatus, UnifiedStatusKey> = {
		"0": "Novo",
		"1": "Assinatura",
		"2": "Assinatura",
		"3": "Concluido",
		"4": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}

export function mapNegociacaoStatus(
	status: NegociacoesStatus,
): UnifiedStatusKey {
	const mapping: Record<NegociacoesStatus, UnifiedStatusKey> = {
		"1": "Novo",
		"2": "Em Andamento",
		"3": "Assinatura",
		"4": "Assinatura",
		"5": "Concluido",
		"6": "Cancelado",
	};
	return mapping[status] ?? "Novo";
}
