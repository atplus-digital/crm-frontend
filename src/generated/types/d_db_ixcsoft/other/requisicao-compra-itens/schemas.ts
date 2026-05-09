/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REQUISICAO_COMPRA_ITENS_TABLE_NAME = "requisicao_compra_itens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_compra_itensBaseSchema = z.object({
	id: z.number(),
	descricao_produto: z.string(),
	filial_id: z.number(),
	id_pedido: z.number(),
	id_produto: z.number(),
	id_requisicao: z.number(),
	id_requisicao_material_item: z.number(),
	id_unidade: z.number(),
	qtde: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_compra_itensSchema = requisicao_compra_itensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_compra_itensCreateSchema =
	requisicao_compra_itensSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_compra_itensUpdateSchema =
	requisicao_compra_itensCreateSchema.partial();
