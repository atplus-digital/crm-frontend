/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { CabosOpticos } from "../other/cabos-opticos";
import type { Users } from "../users";

export const T_HISTORICO_TABLE_NAME = "t_historico";

export interface Historico {
	id: number;
	f_fk_cabos_opticos: number;
	f_comprimento_estoque_anterior: number;
	f_comprimento_estoque_atual: number;
	f_comprimento_utilizado: number;
	f_solicitante: string;
	updatedAt: string;
	createdAt: string;
}

export interface HistoricoRelations {
	createdBy?: Users | null;
	f_cabos_opticos?: CabosOpticos | null;
	updatedBy?: Users | null;
}

export type HistoricoRelationKey = keyof HistoricoRelations;
