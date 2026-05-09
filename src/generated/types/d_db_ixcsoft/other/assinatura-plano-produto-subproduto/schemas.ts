/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { assinatura_plano_produto_subprodutoAtivoSchema } from "./labels";

export const ASSINATURA_PLANO_PRODUTO_SUBPRODUTO_TABLE_NAME =
	"assinatura_plano_produto_subproduto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_plano_produto_subprodutoBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_plano_produto_subprodutoAtivoSchema,
	create_time: z.string(),
	id_assinatura_plano_produto: z.number(),
	id_produto: z.number(),
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_plano_produto_subprodutoSchema =
	assinatura_plano_produto_subprodutoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_plano_produto_subprodutoCreateSchema =
	assinatura_plano_produto_subprodutoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_plano_produto_subprodutoUpdateSchema =
	assinatura_plano_produto_subprodutoCreateSchema.partial();
