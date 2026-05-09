/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRAL_LOGIN_LOG_TABLE_NAME = "central_login_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const central_login_logBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	ip: z.string(),
	log: z.string(),
	tipo_login: z.string(),
	user: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const central_login_logSchema = central_login_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const central_login_logCreateSchema = central_login_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const central_login_logUpdateSchema =
	central_login_logCreateSchema.partial();
