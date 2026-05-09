/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_enquetePublicadoSchema } from "./labels";

export const HS_ENQUETE_TABLE_NAME = "hs_enquete";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_enqueteBaseSchema = z.object({
	id: z.number(),
	atraso: z.number(),
	publicado: hs_enquetePublicadoSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_enqueteSchema = hs_enqueteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_enqueteCreateSchema = hs_enqueteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_enqueteUpdateSchema = hs_enqueteCreateSchema.partial();
