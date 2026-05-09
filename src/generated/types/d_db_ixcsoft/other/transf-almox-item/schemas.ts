/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TRANSF_ALMOX_ITEM_TABLE_NAME = "transf_almox_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transf_almox_itemBaseSchema = z.object({
	id: z.number(),
	deleted_at: z.string(),
	fator_conversao: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_requisicao_material_item: z.number(),
	id_transf_almox: z.number(),
	id_unidade: z.number(),
	qtde: z.number(),
	unidade_sigla: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transf_almox_itemSchema = transf_almox_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transf_almox_itemCreateSchema = transf_almox_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transf_almox_itemUpdateSchema =
	transf_almox_itemCreateSchema.partial();
