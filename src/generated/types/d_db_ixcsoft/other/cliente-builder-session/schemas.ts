/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_BUILDER_SESSION_TABLE_NAME = "cliente_builder_session";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_builder_sessionBaseSchema = z.object({
	id: z.number(),
	apk_content: z.string(),
	data_inicio: z.string(),
	data_termino: z.string(),
	hash: z.string(),
	id_cliente: z.number(),
	log: z.string(),
	plataforma: z.string(),
	status: z.string(),
	versao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_builder_sessionSchema = cliente_builder_sessionBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_builder_sessionCreateSchema =
	cliente_builder_sessionSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_builder_sessionUpdateSchema =
	cliente_builder_sessionCreateSchema.partial();
