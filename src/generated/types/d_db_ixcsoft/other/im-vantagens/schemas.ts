/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IM_VANTAGENS_TABLE_NAME = "im_vantagens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_vantagensBaseSchema = z.object({
	id: z.number(),
	vantagem: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_vantagensSchema = im_vantagensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_vantagensCreateSchema = im_vantagensSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_vantagensUpdateSchema = im_vantagensCreateSchema.partial();
