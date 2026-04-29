/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FotoAniversario } from "../other/foto-aniversario";
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_ANIVERSARIOS_TABLE_NAME = "t_aniversarios";

export const ANIVERSARIOS_STATUS_LABELS = {
	novo: "Novo",
	EmProcesso: "Em processo",
	concluido: "Concluído",
	erro: "Erro",
} as const;

export type AniversariosStatus = keyof typeof ANIVERSARIOS_STATUS_LABELS;

export interface Aniversarios {
	id: number;
	f_fk_funcionarios: number;
	f_data_execucao: string;
	f_dia_mes: string;
	f_status: AniversariosStatus;
	updatedAt: string;
	createdAt: string;
}

export interface AniversariosRelations {
	createdBy?: Users | null;
	f_foto_aniversario?: FotoAniversario | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type AniversariosRelationKey = keyof AniversariosRelations;
