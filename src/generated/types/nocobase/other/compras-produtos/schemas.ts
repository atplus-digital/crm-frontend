/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_COMPRAS_PRODUTOS_TABLE_NAME = "t_compras_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const compras_produtosBaseSchema = z.object({
	id: z.number(),
	f_834gi7nhict: z.number(),
	f_link_produto: z.string(),
	f_produto: z.string(),
	f_quantidade: z.number(),
	f_sub_total: z.string(),
	f_valor_uni: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const compras_produtosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_fk_produtos_solicitacao_compra: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const compras_produtosSchema = compras_produtosBaseSchema.merge(
	compras_produtosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const compras_produtosCreateSchema = compras_produtosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_fk_produtos_solicitacao_compra: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const compras_produtosUpdateSchema =
	compras_produtosCreateSchema.partial();
