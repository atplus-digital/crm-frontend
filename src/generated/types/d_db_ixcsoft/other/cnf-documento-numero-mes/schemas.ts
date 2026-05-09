/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_DOCUMENTO_NUMERO_MES_TABLE_NAME = "cnf_documento_numero_mes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_documento_numero_mesBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	contador: z.number(),
	id_cnf_documento_numero: z.number(),
	mes: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_documento_numero_mesSchema =
	cnf_documento_numero_mesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_documento_numero_mesCreateSchema =
	cnf_documento_numero_mesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_documento_numero_mesUpdateSchema =
	cnf_documento_numero_mesCreateSchema.partial();
