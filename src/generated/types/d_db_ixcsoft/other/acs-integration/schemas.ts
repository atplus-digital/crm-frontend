/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { acs_integrationDeleteOnSyncSchema } from "./labels";

export const ACS_INTEGRATION_TABLE_NAME = "acs_integration";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const acs_integrationBaseSchema = z.object({
	id: z.number(),
	api_token: z.string(),
	client_id: z.string(),
	client_secret: z.string(),
	delete_on_sync: acs_integrationDeleteOnSyncSchema,
	expire_api_token: z.string(),
	host: z.string(),
	name: z.string(),
	private_key: z.string(),
	public_key: z.string(),
	secret: z.string(),
	type: z.string(),
	user: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const acs_integrationSchema = acs_integrationBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const acs_integrationCreateSchema = acs_integrationSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const acs_integrationUpdateSchema =
	acs_integrationCreateSchema.partial();
