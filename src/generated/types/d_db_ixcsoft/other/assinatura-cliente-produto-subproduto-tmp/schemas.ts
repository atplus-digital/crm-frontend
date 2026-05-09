/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { assinatura_cliente_produto_subproduto_tmpAtivoSchema } from "./labels";

export const ASSINATURA_CLIENTE_PRODUTO_SUBPRODUTO_TMP_TABLE_NAME =
	"assinatura_cliente_produto_subproduto_tmp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_cliente_produto_subproduto_tmpBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_cliente_produto_subproduto_tmpAtivoSchema,
	create_time: z.string(),
	id_assinatura_cliente_produto: z.number(),
	id_produto: z.number(),
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_cliente_produto_subproduto_tmpSchema =
	assinatura_cliente_produto_subproduto_tmpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_cliente_produto_subproduto_tmpCreateSchema =
	assinatura_cliente_produto_subproduto_tmpSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_cliente_produto_subproduto_tmpUpdateSchema =
	assinatura_cliente_produto_subproduto_tmpCreateSchema.partial();
