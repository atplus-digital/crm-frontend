/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRIORIDADE_TABLE_NAME = "prioridade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const prioridadeBaseSchema = z.object({
	id: z.number(),
	prioridade: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const prioridadeSchema = prioridadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const prioridadeCreateSchema = prioridadeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const prioridadeUpdateSchema = prioridadeCreateSchema.partial();
