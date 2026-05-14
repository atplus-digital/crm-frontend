/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MESSAGEINTEGRATIONS_FIELD_LABELS = {
	actions: "actions",
	config: "config",
	created_at: "created_at",
	description: "description",
	direct_send: "direct_send",
	hash: "hash",
	id: "id",
	name: "name",
	status: "status",
	storage: "storage",
	tables: "tables",
	template: "template",
	type: "type",
	updated_at: "updated_at",
} as const;

export const MESSAGEINTEGRATIONS_DIRECTSEND_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MESSAGEINTEGRATIONS_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const MESSAGEINTEGRATIONS_STORAGE_LABELS = {
	db: "db",
	memcached: "memcached",
	redis: "redis",
} as const;

export const MESSAGEINTEGRATIONS_TYPE_LABELS = {
	rabbit_mq: "rabbit_mq",
	apache_kafka: "apache_kafka",
	http: "http",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const message_integrationsDirectSendSchema = z.enum(["S", "N"], {
	error: () => ({ message: "direct_send: valores válidos são [S, N]" }),
});

export const message_integrationsStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const message_integrationsStorageSchema = z.enum(
	["db", "memcached", "redis"],
	{
		error: () => ({
			message: "storage: valores válidos são [db, memcached, redis]",
		}),
	},
);

export const message_integrationsTypeSchema = z.enum(
	["rabbit_mq", "apache_kafka", "http"],
	{
		error: () => ({
			message: "type: valores válidos são [rabbit_mq, apache_kafka, http]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MessageIntegrationsDirectSend = z.infer<
	typeof message_integrationsDirectSendSchema
>;

export type MessageIntegrationsStatus = z.infer<
	typeof message_integrationsStatusSchema
>;

export type MessageIntegrationsStorage = z.infer<
	typeof message_integrationsStorageSchema
>;

export type MessageIntegrationsType = z.infer<
	typeof message_integrationsTypeSchema
>;
