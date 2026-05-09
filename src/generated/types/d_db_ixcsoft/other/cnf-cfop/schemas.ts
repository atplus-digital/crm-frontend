/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_CFOP_TABLE_NAME = "cnf_cfop";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_cfopBaseSchema = z.object({
	id: z.number(),
	aliq_estadual: z.number(),
	aliq_federal: z.number(),
	descricao: z.string(),
	nat_operacao: z.number(),
	texto_completo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_cfopSchema = cnf_cfopBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_cfopCreateSchema = cnf_cfopSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_cfopUpdateSchema = cnf_cfopCreateSchema.partial();
