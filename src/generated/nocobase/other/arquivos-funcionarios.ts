/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { InfoArquivos } from "../other/info-arquivos";
import type { Users } from "../users";

export const T_ARQUIVOS_FUNCIONARIOS_TABLE_NAME = "t_arquivos_funcionarios";

export interface ArquivosFuncionarios {
	id: number;
	f_fk_funcionarios: number;
	f_fk_info_arquivos: number;
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

export interface ArquivosFuncionariosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	f_info_arquivos?: InfoArquivos | null;
	storage?: unknown | null;
	updatedBy?: Users | null;
}

export type ArquivosFuncionariosRelationKey =
	keyof ArquivosFuncionariosRelations;
