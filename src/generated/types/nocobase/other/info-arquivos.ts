/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { ArquivosFuncionarios } from "../other/arquivos-funcionarios";
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_INFO_ARQUIVOS_TABLE_NAME = "t_info_arquivos";

export const INFOARQUIVOS_ARQUIVOEXTERNO_LABELS = {
	sim: "Sim",
	Nao: "Não",
} as const;

export type InfoArquivosArquivoExterno =
	keyof typeof INFOARQUIVOS_ARQUIVOEXTERNO_LABELS;

export interface InfoArquivos {
	id: number;
	f_fk_funcionarios: number;
	f_arquivo_externo: InfoArquivosArquivoExterno;
	f_titulo: string;
	updatedAt: string;
	createdAt: string;
}

export interface InfoArquivosRelations {
	createdBy?: Users | null;
	f_arquivos?: ArquivosFuncionarios | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoArquivosRelationKey = keyof InfoArquivosRelations;
