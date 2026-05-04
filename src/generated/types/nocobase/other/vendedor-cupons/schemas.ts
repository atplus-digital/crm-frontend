/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VENDEDOR_CUPONS_TABLE_NAME = "vendedor_cupons";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vendedor_cuponsBaseSchema = z.object({
	f_fk_vendedor_cupom_1: z.number(),
	f_fk_vendedor_cupom_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vendedor_cuponsSchema = vendedor_cuponsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vendedor_cuponsCreateSchema = vendedor_cuponsSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vendedor_cuponsUpdateSchema =
	vendedor_cuponsCreateSchema.partial();
