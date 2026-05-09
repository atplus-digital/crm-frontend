/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CNF_TRATAMENTO_TRIBUTARIO_TABLE_NAME = "cnf_tratamento_tributario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_tratamento_tributarioBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_tratamento_tributarioSchema =
	cnf_tratamento_tributarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_tratamento_tributarioCreateSchema =
	cnf_tratamento_tributarioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_tratamento_tributarioUpdateSchema =
	cnf_tratamento_tributarioCreateSchema.partial();
