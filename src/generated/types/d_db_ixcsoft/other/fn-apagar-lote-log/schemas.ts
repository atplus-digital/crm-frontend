/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_apagar_lote_logTipoSchema } from "./labels";

export const FN_APAGAR_LOTE_LOG_TABLE_NAME = "fn_apagar_lote_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_lote_logBaseSchema = z.object({
	id: z.number(),
	id_fn_apagar_lote: z.number(),
	mensagem: z.string(),
	tipo: fn_apagar_lote_logTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_lote_logSchema = fn_apagar_lote_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_lote_logCreateSchema = fn_apagar_lote_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_lote_logUpdateSchema =
	fn_apagar_lote_logCreateSchema.partial();
