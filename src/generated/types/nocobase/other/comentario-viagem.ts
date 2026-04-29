/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_COMENTARIO_VIAGEM_TABLE_NAME = "t_comentario_viagem";

export interface ComentarioViagem {
	id: number;
	f_comentario: string;
	f_comentario_viagem: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComentarioViagemRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentarioViagemRelationKey = keyof ComentarioViagemRelations;
