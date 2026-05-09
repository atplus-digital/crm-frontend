/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INMAP_ANALYTICS_TABLE_NAME = "inmap_analytics";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inmap_analyticsBaseSchema = z.object({
	id: z.number(),
	contador: z.number(),
	origem: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inmap_analyticsSchema = inmap_analyticsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inmap_analyticsCreateSchema = inmap_analyticsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inmap_analyticsUpdateSchema =
	inmap_analyticsCreateSchema.partial();
