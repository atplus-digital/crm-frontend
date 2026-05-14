/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOLOTEASSINATURAS_FIELD_LABELS = {
	data_emissao_nf_geracao: "data_emissao_nf_geracao",
	descricao_filtro: "descricao_filtro",
	filtro_forma_rec_financeiro: "filtro_forma_rec_financeiro",
	filtro_id_assinatura_final: "filtro_id_assinatura_final",
	filtro_id_assinatura_inicial: "filtro_id_assinatura_inicial",
	filtro_id_filial: "filtro_id_filial",
	filtro_mes_ano_referencia_nf: "filtro_mes_ano_referencia_nf",
	filtro_status_financeiro: "filtro_status_financeiro",
	filtro_tipo_pessoa: "filtro_tipo_pessoa",
	filtro_venc_final_financeiro: "filtro_venc_final_financeiro",
	filtro_venc_inicial_financeiro: "filtro_venc_inicial_financeiro",
	id: "id",
	media_segundos_nota: "media_segundos_nota",
	modelo_nf_geracao: "modelo_nf_geracao",
	momento_fin_geracao: "momento_fin_geracao",
	momento_ini_geracao: "momento_ini_geracao",
	status: "status",
	total_erros_ultima_geracao: "total_erros_ultima_geracao",
	total_notas_geradas: "total_notas_geradas",
	total_valor_gerado: "total_valor_gerado",
} as const;

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
