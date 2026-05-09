/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SIP_CONF_TABLE_NAME = "sip_conf";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sip_confBaseSchema = z.object({
	id: z.number(),
	cat_metric: z.number(),
	category: z.string(),
	commented: z.number(),
	filename: z.string(),
	var_metric: z.number(),
	var_name: z.string(),
	var_val: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sip_confSchema = sip_confBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sip_confCreateSchema = sip_confSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sip_confUpdateSchema = sip_confCreateSchema.partial();
