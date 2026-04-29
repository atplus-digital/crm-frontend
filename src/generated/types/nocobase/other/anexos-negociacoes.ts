/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Users } from "../users";

export const T_ANEXOS_NEGOCIACOES_TABLE_NAME = "t_anexos_negociacoes";

export interface AnexosNegociacoes {
	id: number;
	extname: string;
	f_anexos_fk: number;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface AnexosNegociacoesRelations {
	createdBy?: Users | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type AnexosNegociacoesRelationKey = keyof AnexosNegociacoesRelations;
