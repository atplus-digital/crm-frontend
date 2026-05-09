/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cnf_grade_ctbAtivoSchema } from "./labels";

export const CNF_GRADE_CTB_TABLE_NAME = "cnf_grade_ctb";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_grade_ctbBaseSchema = z.object({
	id: z.number(),
	ativo: cnf_grade_ctbAtivoSchema,
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_grade_ctbSchema = cnf_grade_ctbBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_grade_ctbCreateSchema = cnf_grade_ctbSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_grade_ctbUpdateSchema = cnf_grade_ctbCreateSchema.partial();
