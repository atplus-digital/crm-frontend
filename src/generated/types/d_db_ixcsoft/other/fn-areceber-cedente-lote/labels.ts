/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERCEDENTELOTE_FIELD_LABELS = {
	arquivo_retorno: "arquivo_retorno",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_modelo_retorno_bancario: "id_modelo_retorno_bancario",
	media_segundos_titulo: "media_segundos_titulo",
	momento_fin_processo: "momento_fin_processo",
	momento_ini_processo: "momento_ini_processo",
	status: "status",
	tipo_retorno: "tipo_retorno",
	total_divergencias_valor: "total_divergencias_valor",
	total_erros_processamento: "total_erros_processamento",
	total_registros_lidos: "total_registros_lidos",
	total_titulos_processados: "total_titulos_processados",
	total_valor_baixado: "total_valor_baixado",
} as const;

export const FNARECEBERCEDENTELOTE_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	E: "E",
} as const;

export const FNARECEBERCEDENTELOTE_TIPORETORNO_LABELS = {
	D: "D",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_cedente_loteStatusSchema = z.enum(
	["A", "P", "F", "E"],
	{
		error: () => ({ message: "status: valores válidos são [A, P, F, E]" }),
	},
);

export const fn_areceber_cedente_loteTipoRetornoSchema = z.enum(["D", "B"], {
	error: () => ({ message: "tipo_retorno: valores válidos são [D, B]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberCedenteLoteStatus = z.infer<
	typeof fn_areceber_cedente_loteStatusSchema
>;

export type FnAreceberCedenteLoteTipoRetorno = z.infer<
	typeof fn_areceber_cedente_loteTipoRetornoSchema
>;
