/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_cliente_produtoAtivoSchema,
	assinatura_cliente_produtoStatusSchema,
} from "./labels";

export const ASSINATURA_CLIENTE_PRODUTO_TABLE_NAME =
	"assinatura_cliente_produto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_cliente_produtoBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_cliente_produtoAtivoSchema,
	create_time: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	id_assinatura_cliente: z.number(),
	id_produto: z.number(),
	id_tipo_documento: z.number(),
	obs: z.string(),
	quantidade: z.number(),
	status: assinatura_cliente_produtoStatusSchema,
	update_time: z.string(),
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_cliente_produtoSchema =
	assinatura_cliente_produtoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_cliente_produtoCreateSchema =
	assinatura_cliente_produtoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_cliente_produtoUpdateSchema =
	assinatura_cliente_produtoCreateSchema.partial();
