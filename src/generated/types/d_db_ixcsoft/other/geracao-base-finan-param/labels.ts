/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOBASEFINANPARAM_INDICARDORDEVOLUCAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOBASEFINANPARAM_PROCESSOJUDICIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOBASEFINANPARAM_RELACAOCOFATURAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOBASEFINANPARAM_TIPOCLIENTESCM_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	99: "99",
} as const;

export const GERACAOBASEFINANPARAM_TIPOPROCESSO_LABELS = {
	0: "0",
	1: "1",
	2: "2",
} as const;

export const GERACAOBASEFINANPARAM_TIPORESSARCIMENTO_LABELS = {
	1: "1",
	2: "2",
	99: "99",
} as const;

export const GERACAOBASEFINANPARAM_TPFATURAMENTONFCOM_LABELS = {
	0: "0",
	1: "1",
	2: "2",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_base_finan_paramIndicardorDevolucaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "indicardor_devolucao: valores válidos são [S, N]",
		}),
	},
);

export const geracao_base_finan_paramProcessoJudicialSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "processo_judicial: valores válidos são [S, N]" }),
	},
);

export const geracao_base_finan_paramRelacaoCofaturamentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "relacao_cofaturamento: valores válidos são [S, N]",
		}),
	},
);

export const geracao_base_finan_paramTipoClienteScmSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08", "99"],
	{
		error: () => ({
			message:
				"tipo_cliente_scm: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 99]",
		}),
	},
);

export const geracao_base_finan_paramTipoProcessoSchema = z.enum(
	["0", "1", "2"],
	{
		error: () => ({ message: "tipo_processo: valores válidos são [0, 1, 2]" }),
	},
);

export const geracao_base_finan_paramTipoRessarcimentoSchema = z.enum(
	["1", "2", "99"],
	{
		error: () => ({
			message: "tipo_ressarcimento: valores válidos são [1, 2, 99]",
		}),
	},
);

export const geracao_base_finan_paramTpFaturamentoNfcomSchema = z.enum(
	["0", "1", "2"],
	{
		error: () => ({
			message: "tp_faturamento_nfcom: valores válidos são [0, 1, 2]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoBaseFinanParamIndicardorDevolucao = z.infer<
	typeof geracao_base_finan_paramIndicardorDevolucaoSchema
>;

export type GeracaoBaseFinanParamProcessoJudicial = z.infer<
	typeof geracao_base_finan_paramProcessoJudicialSchema
>;

export type GeracaoBaseFinanParamRelacaoCofaturamento = z.infer<
	typeof geracao_base_finan_paramRelacaoCofaturamentoSchema
>;

export type GeracaoBaseFinanParamTipoClienteScm = z.infer<
	typeof geracao_base_finan_paramTipoClienteScmSchema
>;

export type GeracaoBaseFinanParamTipoProcesso = z.infer<
	typeof geracao_base_finan_paramTipoProcessoSchema
>;

export type GeracaoBaseFinanParamTipoRessarcimento = z.infer<
	typeof geracao_base_finan_paramTipoRessarcimentoSchema
>;

export type GeracaoBaseFinanParamTpFaturamentoNfcom = z.infer<
	typeof geracao_base_finan_paramTpFaturamentoNfcomSchema
>;
