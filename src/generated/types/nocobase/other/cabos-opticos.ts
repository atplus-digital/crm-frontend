/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Historico } from "../other/historico";
import type { UtiliCabos } from "../other/utili-cabos";
import type { Users } from "../users";

export const T_CABOS_OPTICOS_TABLE_NAME = "t_cabos_opticos";

export interface CabosOpticos {
	id: number;
	f_comprimento: number;
	f_comprimento_estoque: number;
	f_comprimento_utilizado: number;
	f_fabricante: string;
	f_id_cabo: string;
	f_obs: string;
	f_quantidade_fibras: string;
	f_tipo: string;
	updatedAt: string;
	createdAt: string;
}

export interface CabosOpticosRelations {
	createdBy?: Users | null;
	f_historico?: Historico[];
	f_utilizacao_cabos?: UtiliCabos[];
	updatedBy?: Users | null;
}

export type CabosOpticosRelationKey = keyof CabosOpticosRelations;
