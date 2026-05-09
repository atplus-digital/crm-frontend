/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_GRADE_CTB_ITEM_TABLE_NAME = "cnf_grade_ctb_item";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_grade_ctb_itemBaseSchema = z.object({
	id: z.number(),
	conta_credito: z.string(),
	conta_debito: z.string(),
	historico: z.string(),
	id_cnf_grade_ctb: z.number(),
	tipo_lanc: z.string(),
	valor_credito: z.string(),
	valor_debito: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_grade_ctb_itemSchema = cnf_grade_ctb_itemBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_grade_ctb_itemCreateSchema = cnf_grade_ctb_itemSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_grade_ctb_itemUpdateSchema =
	cnf_grade_ctb_itemCreateSchema.partial();
