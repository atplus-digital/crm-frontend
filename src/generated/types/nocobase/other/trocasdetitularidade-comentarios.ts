/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_TROCASDETITULARIDADE_COMENTARIOS_TABLE_NAME =
	"t_trocasdetitularidade_comentarios";

export interface TrocasdetitularidadeComentarios {
	id: number;
	f_comentario: string;
	f_comentario_troca_de_titularidade: number;
	updatedAt: string;
	createdAt: string;
}

export interface TrocasdetitularidadeComentariosRelations {
	createdBy?: Users | null;
	updatedBy?: Users | null;
}

export type TrocasdetitularidadeComentariosRelationKey =
	keyof TrocasdetitularidadeComentariosRelations;
