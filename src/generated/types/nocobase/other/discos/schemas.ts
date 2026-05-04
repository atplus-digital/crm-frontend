/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { discosCapacidadeSchema, discosTipoSchema } from "./labels";

export const T_DISCOS_TABLE_NAME = "t_discos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const discosBaseSchema = z.object({
	id: z.number(),
	f_fk_discos: z.number(),
	f_capacidade: discosCapacidadeSchema,
	f_data_aquisicao: z.string(),
	f_fornecedor: z.string(),
	f_modelo: z.string(),
	f_preco_compra: z.number(),
	f_preco_venda_locacao: z.number(),
	f_SN: z.string(),
	f_tipo: discosTipoSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const discosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const discosSchema = discosBaseSchema.merge(discosRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const discosCreateSchema = discosSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const discosUpdateSchema = discosCreateSchema.partial();
