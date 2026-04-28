/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { LancamentosFerias } from "../other/lancamentos-ferias";
import type { Users } from "../users";

export const T_PERIODOS_FERIAS_TABLE_NAME = "t_periodos_ferias";

export const PERIODOSFERIAS_STATUSPERIODO_LABELS = {
	cancelada: "Cancelada",
	planejada: "Planejada",
	EmAndamento: "Em andamento",
	aprovada: "Aprovada",
	concluida: "Concluída",
} as const;

export type PeriodosFeriasStatusPeriodo =
	keyof typeof PERIODOSFERIAS_STATUSPERIODO_LABELS;

export interface PeriodosFerias {
	id: number;
	f_fk_funcionarios: number;
	f_dias_direito: number;
	f_periodo_aquisitivo_fim: string;
	f_periodo_aquisitivo_inicio: string;
	f_periodo_concessivo_fim: string;
	f_periodo_concessivo_inicio: string;
	f_status_periodo: PeriodosFeriasStatusPeriodo;
	updatedAt: string;
	createdAt: string;
}

export interface PeriodosFeriasRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_lancamentos_ferias?: LancamentosFerias[];
	updatedBy?: Users | null;
}

export type PeriodosFeriasRelationKey = keyof PeriodosFeriasRelations;
