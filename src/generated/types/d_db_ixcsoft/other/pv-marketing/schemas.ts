/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pv_marketingTipoMsgSchema } from "./labels";

export const PV_MARKETING_TABLE_NAME = "pv_marketing";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_marketingBaseSchema = z.object({
	id: z.number(),
	cliente_envia: z.number(),
	texto: z.string(),
	tipo_msg: pv_marketingTipoMsgSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_marketingSchema = pv_marketingBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_marketingCreateSchema = pv_marketingSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_marketingUpdateSchema = pv_marketingCreateSchema.partial();
