/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_INUTILIZADO_ITEM_TABLE_NAME =
	"patrimonio_inutilizado_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_inutilizado_itemBaseSchema = z.object({
	id: z.number(),
	id_inutilizado: z.number(),
	id_patrimonio: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_inutilizado_itemSchema =
	patrimonio_inutilizado_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_inutilizado_itemCreateSchema =
	patrimonio_inutilizado_itemSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_inutilizado_itemUpdateSchema =
	patrimonio_inutilizado_itemCreateSchema.partial();
