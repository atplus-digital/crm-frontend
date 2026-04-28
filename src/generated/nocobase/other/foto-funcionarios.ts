/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_FOTO_FUNCIONARIOS_TABLE_NAME = "t_foto_funcionarios";

export interface FotoFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	extname: string;
	filename: string;
	meta: Record<string, unknown>;
	mimetype: string;
	path: string;
	preview: string;
	size: number;
	title: string;
	url: string;
	updatedAt: string;
	createdAt: string;
}

export interface FotoFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type FotoFuncionariosRelationKey = keyof FotoFuncionariosRelations;
