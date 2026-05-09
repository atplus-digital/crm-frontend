/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SMART_CARD_PANACCESS_TABLE_NAME = "smart_card_panaccess";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smart_card_panaccessBaseSchema = z.object({
	id: z.number(),
	data_validade: z.number(),
	id_integracao: z.number(),
	id_smart_card: z.string(),
	id_usuario_tv: z.number(),
	status: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smart_card_panaccessSchema = smart_card_panaccessBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smart_card_panaccessCreateSchema = smart_card_panaccessSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smart_card_panaccessUpdateSchema =
	smart_card_panaccessCreateSchema.partial();
