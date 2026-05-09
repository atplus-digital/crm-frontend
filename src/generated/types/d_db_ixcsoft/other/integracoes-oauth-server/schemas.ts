/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTEGRACOES_OAUTH_SERVER_TABLE_NAME = "integracoes_oauth_server";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoes_oauth_serverBaseSchema = z.object({
	id: z.number(),
	active: z.number(),
	client_id: z.string(),
	client_secret: z.string(),
	description: z.string(),
	redirect_uri: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoes_oauth_serverSchema =
	integracoes_oauth_serverBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoes_oauth_serverCreateSchema =
	integracoes_oauth_serverSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoes_oauth_serverUpdateSchema =
	integracoes_oauth_serverCreateSchema.partial();
