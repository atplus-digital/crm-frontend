/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fatura_migracao_logFnAreceberStatusSchema } from "./labels";

export const FATURA_MIGRACAO_LOG_TABLE_NAME = "fatura_migracao_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fatura_migracao_logBaseSchema = z.object({
	id: z.number(),
	data_migracao: z.string(),
	descricao: z.string(),
	fn_areceber_id: z.number(),
	fn_areceber_id_contrato: z.number(),
	fn_areceber_numero_parcela_recorrente: z.number(),
	fn_areceber_status: fatura_migracao_logFnAreceberStatusSchema,
	id_fatura_gerada: z.number(),
	type_error: z.string(),
	vd_saida_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fatura_migracao_logSchema = fatura_migracao_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fatura_migracao_logCreateSchema = fatura_migracao_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fatura_migracao_logUpdateSchema =
	fatura_migracao_logCreateSchema.partial();
