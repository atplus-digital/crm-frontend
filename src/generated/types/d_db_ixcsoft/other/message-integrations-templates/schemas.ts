/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	message_integrations_templatesDirectSendSchema,
	message_integrations_templatesStorageSchema,
	message_integrations_templatesTypeSchema,
} from "./labels";

export const MESSAGE_INTEGRATIONS_TEMPLATES_TABLE_NAME =
	"message_integrations_templates";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const message_integrations_templatesBaseSchema = z.object({
	id: z.number(),
	actions: z.string(),
	config: z.string(),
	description: z.string(),
	direct_send: message_integrations_templatesDirectSendSchema,
	id_produto_fn: z.number(),
	integration: z.string(),
	name: z.string(),
	storage: message_integrations_templatesStorageSchema,
	tables: z.string(),
	type: message_integrations_templatesTypeSchema,
	updated_at: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const message_integrations_templatesSchema =
	message_integrations_templatesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const message_integrations_templatesCreateSchema =
	message_integrations_templatesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const message_integrations_templatesUpdateSchema =
	message_integrations_templatesCreateSchema.partial();
