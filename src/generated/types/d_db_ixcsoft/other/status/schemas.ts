/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const STATUS_TABLE_NAME = "status";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const statusBaseSchema = z.object({
	id: z.number(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const statusSchema = statusBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const statusCreateSchema = statusSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const statusUpdateSchema = statusCreateSchema.partial();
