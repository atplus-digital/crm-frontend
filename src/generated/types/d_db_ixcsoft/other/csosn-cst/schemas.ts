/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CSOSN_CST_TABLE_NAME = "csosn_cst";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const csosn_cstBaseSchema = z.object({
	id: z.number(),
	csosn: z.string(),
	cst: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const csosn_cstSchema = csosn_cstBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const csosn_cstCreateSchema = csosn_cstSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const csosn_cstUpdateSchema = csosn_cstCreateSchema.partial();
