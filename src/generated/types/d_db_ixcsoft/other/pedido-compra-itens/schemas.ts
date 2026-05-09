/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	pedido_compra_itensStatusSchema,
	pedido_compra_itensTipoSchema,
} from "./labels";

export const PEDIDO_COMPRA_ITENS_TABLE_NAME = "pedido_compra_itens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pedido_compra_itensBaseSchema = z.object({
	id: z.number(),
	descricao_alt: z.string(),
	filial_id: z.number(),
	id_entrada: z.number(),
	id_pedido_compra: z.number(),
	id_produto: z.number(),
	id_unidade: z.number(),
	observacao: z.string(),
	quantidade: z.number(),
	status: pedido_compra_itensStatusSchema,
	tipo: pedido_compra_itensTipoSchema,
	unidade_sigla: z.string(),
	valor_total: z.number(),
	valor_unitario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pedido_compra_itensSchema = pedido_compra_itensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pedido_compra_itensCreateSchema = pedido_compra_itensSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pedido_compra_itensUpdateSchema =
	pedido_compra_itensCreateSchema.partial();
