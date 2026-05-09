/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	message_integrationsDirectSendSchema,
	message_integrationsStatusSchema,
	message_integrationsStorageSchema,
	message_integrationsTypeSchema,
} from "./labels";

export const MESSAGE_INTEGRATIONS_TABLE_NAME = "message_integrations";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const message_integrationsBaseSchema = z.object({
	id: z.number(),
	actions: z.string(),
	config: z.string(),
	created_at: z.string(),
	description: z.string(),
	direct_send: message_integrationsDirectSendSchema,
	hash: z.string(),
	name: z.string(),
	status: message_integrationsStatusSchema,
	storage: message_integrationsStorageSchema,
	tables: z.string(),
	template: z.number(),
	type: message_integrationsTypeSchema,
	updated_at: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const message_integrationsSchema = message_integrationsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const message_integrationsCreateSchema = message_integrationsSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const message_integrationsUpdateSchema =
	message_integrationsCreateSchema.partial();
