/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_PUBLICIDADE_TABLE_NAME = "hs_publicidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_publicidadeBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_publicidadeSchema = hs_publicidadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_publicidadeCreateSchema = hs_publicidadeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_publicidadeUpdateSchema = hs_publicidadeCreateSchema.partial();
