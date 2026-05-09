/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cnf_lista_contaAtivoSchema } from "./labels";

export const CNF_LISTA_CONTA_TABLE_NAME = "cnf_lista_conta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cnf_lista_contaBaseSchema = z.object({
	id: z.number(),
	ativo: cnf_lista_contaAtivoSchema,
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cnf_lista_contaSchema = cnf_lista_contaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cnf_lista_contaCreateSchema = cnf_lista_contaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cnf_lista_contaUpdateSchema =
	cnf_lista_contaCreateSchema.partial();
