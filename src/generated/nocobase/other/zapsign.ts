/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_ZAPSIGN_TABLE_NAME = "t_zapsign";

export interface Zapsign {
	id: number;
	f_data_de_encerramento: string;
	f_nome_do_plano: string;
	f_numero_de_creditos: string;
	f_periodo: string;
	f_status: string;
	updatedAt: string;
	createdAt: string;
}

export interface ZapsignRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ZapsignRelationKey = keyof ZapsignRelations;
