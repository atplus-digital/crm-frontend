/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { UsersBase } from "./users";

export interface ContratosBase {
	createdAt: string;
	createdBy: UsersBase | null;
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
	storage: Record<string, unknown>;
	storageId: number;
	title: string;
	updatedAt: string;
	updatedBy: UsersBase | null;
	url: string;
}

export type ContratosRelations = Record<string, never>;

export type ContratosRelationKey = keyof ContratosRelations;
