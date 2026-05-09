/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MESSAGEINTEGRATIONSTEMPLATES_DIRECTSEND_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MESSAGEINTEGRATIONSTEMPLATES_STORAGE_LABELS = {
	db: "db",
	memcached: "memcached",
	redis: "redis",
} as const;

export const MESSAGEINTEGRATIONSTEMPLATES_TYPE_LABELS = {
	rabbit_mq: "rabbit_mq",
	http: "http",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const message_integrations_templatesDirectSendSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "direct_send: valores válidos são [S, N]" }),
	},
);

export const message_integrations_templatesStorageSchema = z.enum(
	["db", "memcached", "redis"],
	{
		error: () => ({
			message: "storage: valores válidos são [db, memcached, redis]",
		}),
	},
);

export const message_integrations_templatesTypeSchema = z.enum(
	["rabbit_mq", "http"],
	{
		error: () => ({ message: "type: valores válidos são [rabbit_mq, http]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MessageIntegrationsTemplatesDirectSend = z.infer<
	typeof message_integrations_templatesDirectSendSchema
>;

export type MessageIntegrationsTemplatesStorage = z.infer<
	typeof message_integrations_templatesStorageSchema
>;

export type MessageIntegrationsTemplatesType = z.infer<
	typeof message_integrations_templatesTypeSchema
>;
