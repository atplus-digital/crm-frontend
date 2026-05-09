/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_carteira_cobranca_logAmbienteSchema,
	fn_carteira_cobranca_logStatusSchema,
} from "./labels";

export const FN_CARTEIRA_COBRANCA_LOG_TABLE_NAME = "fn_carteira_cobranca_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_carteira_cobranca_logBaseSchema = z.object({
	id: z.number(),
	ambiente: fn_carteira_cobranca_logAmbienteSchema,
	created_at: z.string(),
	id_carteira_cobranca: z.number(),
	log: z.string(),
	metodo_http: z.string(),
	request_body: z.string(),
	request_headers: z.string(),
	response_body: z.string(),
	response_http_status: z.string(),
	status: fn_carteira_cobranca_logStatusSchema,
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_carteira_cobranca_logSchema =
	fn_carteira_cobranca_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_carteira_cobranca_logCreateSchema =
	fn_carteira_cobranca_logSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_carteira_cobranca_logUpdateSchema =
	fn_carteira_cobranca_logCreateSchema.partial();
