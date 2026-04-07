/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { UsersBase } from "./users";

export interface ContratosBase {
	createdAt: string;
	extname: string;
	f_fk_negociacao_contrato: number;
	f_fk_suspensao: number;
	filename: string;
	id: number;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	storageId: number;
	title: string;
	updatedAt: string;
	url: string;
}

export interface ContratosRelations {
	createdBy?: UsersBase | null;
	storage?: unknown | null;
	updatedBy?: UsersBase | null;
}

export type ContratosRelationKey = keyof ContratosRelations;
