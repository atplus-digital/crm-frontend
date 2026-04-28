/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Asos } from "../other/asos";
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_INFO_ASO_TABLE_NAME = "t_info_aso";

export const INFOASO_INFORMADO_LABELS = {
	nao: "Não",
	sim: "Sim",
} as const;

export const INFOASO_TIPOEXAME_LABELS = {
	ExameAdmissional: "Exame Admissional",
	ExamePeriodico: "Exame Periódico",
	AtestadoMedico: "Atestado Médico",
	RetornoTrabalho: "Retorno ao Trabalho",
	MudancaFuncao: "Mudança de Função",
	outros: "Outros",
} as const;

export type InfoAsoInformado = keyof typeof INFOASO_INFORMADO_LABELS;

export type InfoAsoTipoExame = keyof typeof INFOASO_TIPOEXAME_LABELS;

export interface InfoAso {
	id: number;
	f_fk_funcionarios: number;
	f_apto: boolean;
	f_data_exame: string;
	f_data_prox_exame: string;
	f_dias_afastamento: string;
	f_informado: InfoAsoInformado;
	f_obs: string;
	f_tipo_exame: InfoAsoTipoExame;
	updatedAt: string;
	createdAt: string;
}

export interface InfoAsoRelations {
	createdBy?: Users | null;
	f_aso?: Asos | null;
	f_funcionarios_2?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type InfoAsoRelationKey = keyof InfoAsoRelations;
