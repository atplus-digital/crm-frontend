/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PORTA_SBC_SUMMIT_TABLE_NAME = "porta_sbc_summit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const porta_sbc_summitBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	porta: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const porta_sbc_summitSchema = porta_sbc_summitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const porta_sbc_summitCreateSchema = porta_sbc_summitSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const porta_sbc_summitUpdateSchema =
	porta_sbc_summitCreateSchema.partial();
