/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const QUALIRUNPROCESSOS_DETALHESPROCEDIMENTO_LABELS = {
	1: "Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores.",
	2: "Utilizado para novos colaboradores assinarem os termos padrões (Confidencialidade, LGPD e Uso Voz/Imagem) e outros que se enquadram conforme dados do contrato.",
} as const;

export const QUALIRUNPROCESSOS_IDPROCEDIMENTOQUALIRUN_LABELS = {
	"c03f166d-a4d7-42b7-ae73-a4c287e171ac":
		"Complemento de Informações e Documentos",
	"0a3d75b4-2908-4bc2-85a6-64667ec60477":
		"Assinatura com Identidade Verificada",
} as const;

export const QUALIRUNPROCESSOS_PROCEDIMENTO_LABELS = {
	"complemento-informacoes-documentos":
		"Complemento de Informações e Documentos",
	"confidencialidade-lgpd-voz-imagem":
		"Assinatura de Termos (LGPD, Voz e Imagem e Confidencialidade)",
} as const;

export const QUALIRUNPROCESSOS_STATUS_LABELS = {
	novo: "Novo",
	pendente: "Pendente",
	concluido: "Concluído",
	cancelado: "Cancelado",
	erroapi: "Erro na API",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const qualirun_processosDetalhesProcedimentoSchema = z.enum(["1", "2"], {
	error: () => ({
		message:
			"detalhes_procedimento: valores válidos são [Utilizado para novos colaboradores preencherem os dados e a documentação de admissão, que serão utilizados no CRM, aba de Colaboradores., Utilizado para novos colaboradores assinarem os termos padrões (Confidencialidade, LGPD e Uso Voz/Imagem) e outros que se enquadram conforme dados do contrato.]",
	}),
});

export const qualirun_processosIdProcedimentoQualirunSchema = z.enum(
	[
		"c03f166d-a4d7-42b7-ae73-a4c287e171ac",
		"0a3d75b4-2908-4bc2-85a6-64667ec60477",
	],
	{
		error: () => ({
			message:
				"id_procedimento_qualirun: valores válidos são [Complemento de Informações e Documentos, Assinatura com Identidade Verificada]",
		}),
	},
);

export const qualirun_processosProcedimentoSchema = z.enum(
	["complemento-informacoes-documentos", "confidencialidade-lgpd-voz-imagem"],
	{
		error: () => ({
			message:
				"procedimento: valores válidos são [Complemento de Informações e Documentos, Assinatura de Termos (LGPD, Voz e Imagem e Confidencialidade)]",
		}),
	},
);

export const qualirun_processosStatusSchema = z.enum(
	["novo", "pendente", "concluido", "cancelado", "erroapi"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Novo, Pendente, Concluído, Cancelado, Erro na API]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type QualirunProcessosDetalhesProcedimento = z.infer<
	typeof qualirun_processosDetalhesProcedimentoSchema
>;

export type QualirunProcessosIdProcedimentoQualirun = z.infer<
	typeof qualirun_processosIdProcedimentoQualirunSchema
>;

export type QualirunProcessosProcedimento = z.infer<
	typeof qualirun_processosProcedimentoSchema
>;

export type QualirunProcessosStatus = z.infer<
	typeof qualirun_processosStatusSchema
>;
