/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_COMENTARIOS_COMPRAS_TABLE_NAME = "t_comentarios_compras";

export interface ComentariosCompras {
	id: number;
	f_comentarios: string;
	f_comentarios_compras: number;
	updatedAt: string;
	createdAt: string;
}

export interface ComentariosComprasRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type ComentariosComprasRelationKey = keyof ComentariosComprasRelations;
