/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_HISTORICO_TABLE_NAME =
	"cliente_contrato_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_historicoBaseSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	data: z.string(),
	historico: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	operador: z.number(),
	request_body: z.string(),
	response_body: z.string(),
	tipo: z.string(),
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_historicoSchema =
	cliente_contrato_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_historicoCreateSchema =
	cliente_contrato_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_historicoUpdateSchema =
	cliente_contrato_historicoCreateSchema.partial();
