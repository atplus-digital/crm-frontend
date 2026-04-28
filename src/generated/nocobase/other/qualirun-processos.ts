/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { FFuncionarios } from "../other/funcionarios";
import type { Users } from "../users";

export const T_QUALIRUN_PROCESSOS_TABLE_NAME = "t_qualirun_processos";

export const QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS = {
	"1": "Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores.",
	"2": "Utilizado para novos colaboradores assinarem os termos padrões (Confidencialidade, LGPD e Uso Voz/Imagem) e outros que se enquadram conforme dados do contrato.",
} as const;

export const QUALIRUNPROCESSOS_IDPROCEDIMENTOQUALIRUN_LABELS = {
	C03f166dA4d742b7Ae73A4c287e171ac: "Complemento de Informações e Documentos",
	Value0a3d75b429084bc285a664667ec60477: "Assinatura com Identidade Verificada",
} as const;

export const QUALIRUNPROCESSOS_PROCEDIMENTO_LABELS = {
	ComplementoInformacoesDocumentos: "Complemento de Informações e Documentos",
	ConfidencialidadeLgpdVozImagem:
		"Assinatura de Termos (LGPD, Voz e Imagem e Confidencialidade)",
} as const;

export const QUALIRUNPROCESSOS_STATUS_LABELS = {
	novo: "Novo",
	pendente: "Pendente",
	concluido: "Concluído",
	cancelado: "Cancelado",
	erroapi: "Erro na API",
} as const;

export type QualirunProcessosDetalhesProcedimento =
	keyof typeof QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS;

export type QualirunProcessosIdProcedimentoQualirun =
	keyof typeof QUALIRUNPROCESSOS_IDPROCEDIMENTOQUALIRUN_LABELS;

export type QualirunProcessosProcedimento =
	keyof typeof QUALIRUNPROCESSOS_PROCEDIMENTO_LABELS;

export type QualirunProcessosStatus =
	keyof typeof QUALIRUNPROCESSOS_STATUS_LABELS;

export interface QualirunProcessos {
	id: number;
	f_fk_funcionarios: number;
	f_detalhes_procedimento: QualirunProcessosDetalhesProcedimento;
	f_id_externo: string;
	f_id_procedimento_qualirun: QualirunProcessosIdProcedimentoQualirun;
	f_link_externo: string;
	f_procedimento: QualirunProcessosProcedimento;
	f_status: QualirunProcessosStatus;
	updatedAt: string;
	createdAt: string;
}

export interface QualirunProcessosRelations {
	createdBy?: Users | null;
	f_funcionarios?: FFuncionarios | null;
	updatedBy?: Users | null;
}

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;
