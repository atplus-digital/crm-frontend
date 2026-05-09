/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PROSPECCAO_ANOTACOES_TABLE_NAME = "prospeccao_anotacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const prospeccao_anotacoesBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const prospeccao_anotacoesSchema = prospeccao_anotacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const prospeccao_anotacoesCreateSchema = prospeccao_anotacoesSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const prospeccao_anotacoesUpdateSchema =
	prospeccao_anotacoesCreateSchema.partial();
