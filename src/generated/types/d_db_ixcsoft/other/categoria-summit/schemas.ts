/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CATEGORIA_SUMMIT_TABLE_NAME = "categoria_summit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const categoria_summitBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const categoria_summitSchema = categoria_summitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const categoria_summitCreateSchema = categoria_summitSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const categoria_summitUpdateSchema =
	categoria_summitCreateSchema.partial();
