/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_CFOP_ENTRADA_TABLE_NAME = "cnf_cfop_entrada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_cfop_entradaBaseSchema = z.object({
	id: z.number(),
	cnf_cfop_destino: z.number(),
	cnf_cfop_origem: z.number(),
	id_cnf_classificacao_fiscal: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_cfop_entradaSchema = cnf_cfop_entradaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_cfop_entradaCreateSchema = cnf_cfop_entradaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_cfop_entradaUpdateSchema =
	cnf_cfop_entradaCreateSchema.partial();
