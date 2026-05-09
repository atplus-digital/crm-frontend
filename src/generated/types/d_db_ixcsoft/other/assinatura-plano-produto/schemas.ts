/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { assinatura_plano_produtoAtivoSchema } from "./labels";

export const ASSINATURA_PLANO_PRODUTO_TABLE_NAME = "assinatura_plano_produto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_plano_produtoBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_plano_produtoAtivoSchema,
	create_time: z.string(),
	descricao: z.string(),
	id_assinatura_plano: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	obs: z.string(),
	quantidade: z.number(),
	update_time: z.string(),
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_plano_produtoSchema =
	assinatura_plano_produtoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_plano_produtoCreateSchema =
	assinatura_plano_produtoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_plano_produtoUpdateSchema =
	assinatura_plano_produtoCreateSchema.partial();
