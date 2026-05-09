/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PERCURSO_MDFE_TABLE_NAME = "percurso_mdfe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const percurso_mdfeBaseSchema = z.object({
	id: z.number(),
	id_mdfe: z.number(),
	id_uf: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const percurso_mdfeSchema = percurso_mdfeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const percurso_mdfeCreateSchema = percurso_mdfeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const percurso_mdfeUpdateSchema = percurso_mdfeCreateSchema.partial();
