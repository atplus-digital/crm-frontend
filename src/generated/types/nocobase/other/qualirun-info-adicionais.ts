/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_QUALIRUN_INFO_ADICIONAIS_TABLE_NAME =
	"t_qualirun_info_adicionais";

export const QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS = {
	EnsinoMedio: "Ensino Médio",
	Superior: "Superior",
	PosMba: "Pós, MBA",
	Mestrado: "Mestrado",
	Doutorado: "Doutorado",
} as const;

export const QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS = {
	Trancado: "Trancado",
	Cursando: "Cursando",
	Completo: "Completo",
} as const;

export const QUALIRUNINFOADICIONAIS_STATUS_LABELS = {
	recusado: "Recusado",
	aprovado: "Aprovado",
	aguardando: "Aguardando",
} as const;

export const QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS = {
	Pais: "Pais",
	FilhoAOuEnteadoA: "Filho(a) ou Enteado(a)",
	Avos: "Avós",
	Conjuge: "Conjuge",
} as const;

export type QualirunInfoAdicionaisGrauEscolaridade =
	keyof typeof QUALIRUNINFOADICIONAIS_GRAUESCOLARIDADE_LABELS;

export type QualirunInfoAdicionaisSituacaoCurso =
	keyof typeof QUALIRUNINFOADICIONAIS_SITUACAOCURSO_LABELS;

export type QualirunInfoAdicionaisStatus =
	keyof typeof QUALIRUNINFOADICIONAIS_STATUS_LABELS;

export type QualirunInfoAdicionaisVinculoContatoEmergencia =
	keyof typeof QUALIRUNINFOADICIONAIS_VINCULOCONTATOEMERGENCIA_LABELS;

export interface QualirunInfoAdicionais {
	id: number;
	f_fk_funcionarios: number;
	f_2fxykekjpk2: string;
	f_contato_emergencia: string;
	f_curso: string;
	f_grau_escolaridade: QualirunInfoAdicionaisGrauEscolaridade;
	f_id_externo: string;
	f_parentesco_cpf: string;
	f_parentesco_nome: string;
	f_parentesco_vinculo: string;
	f_situacao_curso: QualirunInfoAdicionaisSituacaoCurso;
	f_sqt1x7ndy5j: string;
	f_status: QualirunInfoAdicionaisStatus;
	f_telefone_contato_emergencia: string;
	f_tkxxh3xi2zw: string;
	f_vinculo_contato_emergencia: QualirunInfoAdicionaisVinculoContatoEmergencia;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunInfoAdicionaisRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunInfoAdicionaisRelationKey =
	keyof QualirunInfoAdicionaisRelations;
