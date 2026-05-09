/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_CATEGORIA_DEPRECIACAO_TABLE_NAME =
	"patrimonio_categoria_depreciacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_categoria_depreciacaoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	forma_depreciacao: z.number(),
	taxa_depreciacao: z.number(),
	vida_util: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_categoria_depreciacaoSchema =
	patrimonio_categoria_depreciacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_categoria_depreciacaoCreateSchema =
	patrimonio_categoria_depreciacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_categoria_depreciacaoUpdateSchema =
	patrimonio_categoria_depreciacaoCreateSchema.partial();
