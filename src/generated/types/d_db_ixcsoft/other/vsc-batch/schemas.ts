/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VSC_BATCH_TABLE_NAME = "vsc_batch";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vsc_batchBaseSchema = z.object({
	id: z.number(),
	batch_descricao: z.string(),
	batch_id: z.number(),
	distribuidor: z.string(),
	id_integracao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vsc_batchSchema = vsc_batchBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vsc_batchCreateSchema = vsc_batchSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vsc_batchUpdateSchema = vsc_batchCreateSchema.partial();
