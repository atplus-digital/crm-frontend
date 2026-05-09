/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const WIZARD_PATRIMONIO_ALTERACAO_PRODUTO_TABLE_NAME =
	"wizard_patrimonio_alteracao_produto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wizard_patrimonio_alteracao_produtoBaseSchema = z.object({
	id: z.number(),
	total_patrimonio: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wizard_patrimonio_alteracao_produtoSchema =
	wizard_patrimonio_alteracao_produtoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wizard_patrimonio_alteracao_produtoCreateSchema =
	wizard_patrimonio_alteracao_produtoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wizard_patrimonio_alteracao_produtoUpdateSchema =
	wizard_patrimonio_alteracao_produtoCreateSchema.partial();
