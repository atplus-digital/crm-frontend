/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_CUSTO_SUMMIT_TABLE_NAME = "centro_custo_summit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_summitBaseSchema = z.object({
	id: z.number(),
	valor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_summitSchema = centro_custo_summitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_summitCreateSchema = centro_custo_summitSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_summitUpdateSchema =
	centro_custo_summitCreateSchema.partial();
