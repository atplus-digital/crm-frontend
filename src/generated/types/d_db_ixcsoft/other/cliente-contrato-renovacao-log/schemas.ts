/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_RENOVACAO_LOG_TABLE_NAME =
	"cliente_contrato_renovacao_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_renovacao_logBaseSchema = z.object({
	id: z.number(),
	data_expiracao: z.string(),
	data_expiracao_nova: z.string(),
	data_renovacao: z.string(),
	data_renovacao_nova: z.string(),
	fidelidade: z.number(),
	id_contrato: z.number(),
	id_operador: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_renovacao_logSchema =
	cliente_contrato_renovacao_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_renovacao_logCreateSchema =
	cliente_contrato_renovacao_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_renovacao_logUpdateSchema =
	cliente_contrato_renovacao_logCreateSchema.partial();
