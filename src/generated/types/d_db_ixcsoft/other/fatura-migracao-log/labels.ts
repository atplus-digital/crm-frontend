/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FATURAMIGRACAOLOG_FIELD_LABELS = {
	data_migracao: "data_migracao",
	descricao: "descricao",
	fn_areceber_id: "fn_areceber_id",
	fn_areceber_id_contrato: "fn_areceber_id_contrato",
	fn_areceber_numero_parcela_recorrente:
		"fn_areceber_numero_parcela_recorrente",
	fn_areceber_status: "fn_areceber_status",
	id: "id",
	id_fatura_gerada: "id_fatura_gerada",
	type_error: "type_error",
	vd_saida_id: "vd_saida_id",
} as const;

export const FATURAMIGRACAOLOG_FNARECEBERSTATUS_LABELS = {
	A: "A",
	R: "R",
	P: "P",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fatura_migracao_logFnAreceberStatusSchema = z.enum(
	["A", "R", "P", "C"],
	{
		error: () => ({
			message: "fn_areceber_status: valores válidos são [A, R, P, C]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FaturaMigracaoLogFnAreceberStatus = z.infer<
	typeof fatura_migracao_logFnAreceberStatusSchema
>;
