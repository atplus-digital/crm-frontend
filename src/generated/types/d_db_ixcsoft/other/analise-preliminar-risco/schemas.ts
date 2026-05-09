/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ANALISE_PRELIMINAR_RISCO_TABLE_NAME = "analise_preliminar_risco";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const analise_preliminar_riscoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_questionario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const analise_preliminar_riscoSchema =
	analise_preliminar_riscoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const analise_preliminar_riscoCreateSchema =
	analise_preliminar_riscoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const analise_preliminar_riscoUpdateSchema =
	analise_preliminar_riscoCreateSchema.partial();
