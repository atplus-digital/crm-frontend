/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGARRETORNOLOTE_FIELD_LABELS = {
	arquivo_retorno: "arquivo_retorno",
	data_hora_processamento: "data_hora_processamento",
	id: "id",
	id_contas: "id_contas",
	media_segundos_titulo: "media_segundos_titulo",
	momento_fin_processo: "momento_fin_processo",
	momento_ini_processo: "momento_ini_processo",
	status: "status",
	total_erros_processamento: "total_erros_processamento",
	total_registros_lidos: "total_registros_lidos",
	total_titulos: "total_titulos",
	total_valor_baixado: "total_valor_baixado",
} as const;

export const FNAPAGARRETORNOLOTE_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagar_retorno_loteStatusSchema = z.enum(["A", "P", "F", "E"], {
	error: () => ({ message: "status: valores válidos são [A, P, F, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarRetornoLoteStatus = z.infer<
	typeof fn_apagar_retorno_loteStatusSchema
>;
