/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { PeriodosFerias } from "../other/periodos-ferias";
import type { Users } from "../users";

export const T_LANCAMENTOS_FERIAS_TABLE_NAME = "t_lancamentos_ferias";

export const LANCAMENTOSFERIAS_STATUS_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	EmAndamento: "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

export type LancamentosFeriasStatus =
	keyof typeof LANCAMENTOSFERIAS_STATUS_LABELS;

export interface LancamentosFerias {
	id: number;
	f_fk_periodos_ferias: number;
	f_data_retorno: string;
	f_data_saida: string;
	f_dias_gozados: number;
	f_dias_vendidos: number;
	f_observacoes: string;
	f_status: LancamentosFeriasStatus;
	updatedAt: string;
	createdAt: string;
}

export interface LancamentosFeriasRelations {
	createdBy?: Users | null;
	f_periodos_ferias?: PeriodosFerias | null;
	updatedBy?: Users | null;
}

export type LancamentosFeriasRelationKey = keyof LancamentosFeriasRelations;
