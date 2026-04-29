/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { CabosOpticos } from "../other/cabos-opticos";
import type { Users } from "../users";

export const T_UTILI_CABOS_TABLE_NAME = "t_utili_cabos";

export interface UtiliCabos {
	id: number;
	f_fk_cabos_opticos: number;
	f_comprimento_utilizado: number;
	f_obs_historico: string;
	updatedAt: string;
	createdAt: string;
}

export interface UtiliCabosRelations {
	createdBy?: Users | null;
	f_cabos_opticos?: CabosOpticos | null;
	updatedBy?: Users | null;
}

export type UtiliCabosRelationKey = keyof UtiliCabosRelations;
