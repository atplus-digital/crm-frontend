/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CATEGORIA_DEPRECIACAO_TABLE_NAME = "categoria_depreciacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const categoria_depreciacaoBaseSchema = z.object({
	id: z.number(),
	forma_depreciacao: z.number(),
	revisar_em: z.number(),
	taxa_depreciacao: z.number(),
	vida_util: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const categoria_depreciacaoSchema = categoria_depreciacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const categoria_depreciacaoCreateSchema =
	categoria_depreciacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const categoria_depreciacaoUpdateSchema =
	categoria_depreciacaoCreateSchema.partial();
