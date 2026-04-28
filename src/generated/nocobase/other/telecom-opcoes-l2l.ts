/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TELECOM_OPCOES_L2L_TABLE_NAME = "t_telecom_opcoes_l2l";

export interface TelecomOpcoesL2l {
	id: number;
	f_rmfqnk0k53u: number;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomOpcoesL2lRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;
