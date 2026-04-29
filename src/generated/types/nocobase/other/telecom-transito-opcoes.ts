/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TELECOM_TRANSITO_OPCOES_TABLE_NAME = "t_telecom_transito_opcoes";

export interface TelecomTransitoOpcoes {
	id: number;
	f_1eu8gjcf9js: number;
	f_ips: string;
	f_velocidade: string;
	updatedAt: string;
	createdAt: string;
}

export interface TelecomTransitoOpcoesRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TelecomTransitoOpcoesRelationKey =
	keyof TelecomTransitoOpcoesRelations;
