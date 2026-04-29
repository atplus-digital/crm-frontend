/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { P10scfhrhkw } from "../other/p10scfhrhkw";
import type { Users } from "../users";

export const T_902CTKE5DHQ_TABLE_NAME = "t_902ctke5dhq";

export interface _902ctke5dhq {
	id: number;
	updatedAt: string;
	createdAt: string;
}

export interface _902ctke5dhqRelations {
	createdBy?: Users | null;
	f_bmu9tsi11d4?: P10scfhrhkw | null;
	updatedBy?: Users | null;
}

export type _902ctke5dhqRelationKey = keyof _902ctke5dhqRelations;
