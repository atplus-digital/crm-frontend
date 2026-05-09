/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LICENCA_SUMMIT_TABLE_NAME = "licenca_summit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const licenca_summitBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	sigla: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const licenca_summitSchema = licenca_summitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const licenca_summitCreateSchema = licenca_summitSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const licenca_summitUpdateSchema = licenca_summitCreateSchema.partial();
