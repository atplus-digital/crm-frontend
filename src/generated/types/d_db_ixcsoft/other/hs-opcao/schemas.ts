/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_OPCAO_TABLE_NAME = "hs_opcao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_opcaoBaseSchema = z.object({
	id: z.number(),
	id_enquete: z.number(),
	opcao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_opcaoSchema = hs_opcaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_opcaoCreateSchema = hs_opcaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_opcaoUpdateSchema = hs_opcaoCreateSchema.partial();
