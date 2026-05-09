/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOOL_TABLE_NAME = "radpool";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpoolBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	nome_pool: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpoolSchema = radpoolBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpoolCreateSchema = radpoolSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpoolUpdateSchema = radpoolCreateSchema.partial();
