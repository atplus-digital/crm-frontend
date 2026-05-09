/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOLOTEASSINATURAS_FILTROFORMARECFINANCEIRO_LABELS = {
	A: "A",
	C: "C",
	B: "B",
} as const;

export const GERACAOLOTEASSINATURAS_FILTROSTATUSFINANCEIRO_LABELS = {
	T: "T",
	R: "R",
	A: "A",
} as const;

export const GERACAOLOTEASSINATURAS_FILTROTIPOPESSOA_LABELS = {
	T: "T",
	E: "E",
	F: "F",
	J: "J",
} as const;

export const GERACAOLOTEASSINATURAS_MODELONFGERACAO_LABELS = {
	T: "T",
	SER: "SER",
	SCM: "SCM",
} as const;

export const GERACAOLOTEASSINATURAS_STATUS_LABELS = {
	NG: "NG",
	G: "G",
	C: "C",
	LE: "LE",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_lote_assinaturasFiltroFormaRecFinanceiroSchema = z.enum(
	["A", "C", "B"],
	{
		error: () => ({
			message: "filtro_forma_rec_financeiro: valores válidos são [A, C, B]",
		}),
	},
);

export const geracao_lote_assinaturasFiltroStatusFinanceiroSchema = z.enum(
	["T", "R", "A"],
	{
		error: () => ({
			message: "filtro_status_financeiro: valores válidos são [T, R, A]",
		}),
	},
);

export const geracao_lote_assinaturasFiltroTipoPessoaSchema = z.enum(
	["T", "E", "F", "J"],
	{
		error: () => ({
			message: "filtro_tipo_pessoa: valores válidos são [T, E, F, J]",
		}),
	},
);

export const geracao_lote_assinaturasModeloNfGeracaoSchema = z.enum(
	["T", "SER", "SCM"],
	{
		error: () => ({
			message: "modelo_nf_geracao: valores válidos são [T, SER, SCM]",
		}),
	},
);

export const geracao_lote_assinaturasStatusSchema = z.enum(
	["NG", "G", "C", "LE", "P"],
	{
		error: () => ({ message: "status: valores válidos são [NG, G, C, LE, P]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoLoteAssinaturasFiltroFormaRecFinanceiro = z.infer<
	typeof geracao_lote_assinaturasFiltroFormaRecFinanceiroSchema
>;

export type GeracaoLoteAssinaturasFiltroStatusFinanceiro = z.infer<
	typeof geracao_lote_assinaturasFiltroStatusFinanceiroSchema
>;

export type GeracaoLoteAssinaturasFiltroTipoPessoa = z.infer<
	typeof geracao_lote_assinaturasFiltroTipoPessoaSchema
>;

export type GeracaoLoteAssinaturasModeloNfGeracao = z.infer<
	typeof geracao_lote_assinaturasModeloNfGeracaoSchema
>;

export type GeracaoLoteAssinaturasStatus = z.infer<
	typeof geracao_lote_assinaturasStatusSchema
>;
