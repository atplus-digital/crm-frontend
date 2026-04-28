/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { TelecomRacks } from "../other/telecom-racks";
import type { Users } from "../users";

export const T_TELECOM_FILA_TABLE_NAME = "t_telecom_fila";

export interface TelecomFila {
	id: number;
	f_fk_fila: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomFilaRelations {
	createdBy?: Users | null;
	f_fk_fila_rack?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type TelecomFilaRelationKey = keyof TelecomFilaRelations;
