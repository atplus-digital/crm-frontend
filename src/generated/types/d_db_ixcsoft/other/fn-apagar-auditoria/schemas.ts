/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_apagar_auditoriaStatusSchema,
	fn_apagar_auditoriaTipoSchema,
} from "./labels";

export const FN_APAGAR_AUDITORIA_TABLE_NAME = "fn_apagar_auditoria";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_apagar_auditoriaBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	id_fn_apagar: z.number(),
	motivo: z.string(),
	operador: z.number(),
	status: fn_apagar_auditoriaStatusSchema,
	tipo: fn_apagar_auditoriaTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_apagar_auditoriaSchema = fn_apagar_auditoriaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_apagar_auditoriaCreateSchema = fn_apagar_auditoriaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_apagar_auditoriaUpdateSchema =
	fn_apagar_auditoriaCreateSchema.partial();
