/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_LISTA_CONTA_ITEM_TABLE_NAME = "cnf_lista_conta_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_lista_conta_itemBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_cnf_lista_conta: z.number(),
	id_planejamento: z.number(),
	id_planejamento_analitico: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_lista_conta_itemSchema = cnf_lista_conta_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_lista_conta_itemCreateSchema = cnf_lista_conta_itemSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_lista_conta_itemUpdateSchema =
	cnf_lista_conta_itemCreateSchema.partial();
