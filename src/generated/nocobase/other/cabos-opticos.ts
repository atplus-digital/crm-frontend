/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Historico } from "../other/historico";
import type { Users } from "../users";

export const T_CABOS_OPTICOS_TABLE_NAME = "t_cabos_opticos";

export const CABOSOPTICOS_FABRICANTE_LABELS = {
	teste: "teste",
} as const;

export const CABOSOPTICOS_TIPO_LABELS = {
	as80: "AS80",
} as const;

export type CabosOpticosFabricante =
	keyof typeof CABOSOPTICOS_FABRICANTE_LABELS;

export type CabosOpticosTipo = keyof typeof CABOSOPTICOS_TIPO_LABELS;

export interface CabosOpticos {
	id: number;
	f_comprimento: number;
	f_comprimento_estoque: number;
	f_comprimento_utilizado: number;
	f_fabricante: CabosOpticosFabricante;
	f_obs: string;
	f_quantidade_fibras: string;
	f_tipo: CabosOpticosTipo;
	updatedAt: string;
	createdAt: string;
}

export interface CabosOpticosRelations {
	createdBy?: Users | null;
	f_historico?: Historico[];
	updatedBy?: Users | null;
}

export type CabosOpticosRelationKey = keyof CabosOpticosRelations;
