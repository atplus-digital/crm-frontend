/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { requisicao_material_itemStatusSchema } from "./labels";

export const REQUISICAO_MATERIAL_ITEM_TABLE_NAME = "requisicao_material_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_material_itemBaseSchema = z.object({
	id: z.number(),
	almoxarifados_vinculados: z.string(),
	data_cancelamento: z.string(),
	descricao: z.string(),
	id_mot_cancelamento: z.number(),
	id_produto: z.number(),
	id_requisicao: z.number(),
	id_usuario: z.number(),
	id_usuario_cancelamento: z.number(),
	qtde: z.number(),
	qtde_cancelada: z.number(),
	qtde_saldo: z.number(),
	saldo_almox_solicitante: z.number(),
	status: requisicao_material_itemStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_material_itemSchema =
	requisicao_material_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_material_itemCreateSchema =
	requisicao_material_itemSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_material_itemUpdateSchema =
	requisicao_material_itemCreateSchema.partial();
