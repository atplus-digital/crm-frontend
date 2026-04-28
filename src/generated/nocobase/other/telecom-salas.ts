/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { TelecomRacks } from "../other/telecom-racks";
import type { Users } from "../users";

export const T_TELECOM_SALAS_TABLE_NAME = "t_telecom_salas";

export interface TelecomSalas {
	id: number;
	f_fk_salas: number;
	f_nome: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomSalasRelations {
	createdBy?: Users | null;
	f_fk_sala_racks?: TelecomRacks[];
	updatedBy?: Users | null;
}

export type TelecomSalasRelationKey = keyof TelecomSalasRelations;
