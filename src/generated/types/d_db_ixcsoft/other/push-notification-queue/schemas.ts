/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PUSH_NOTIFICATION_QUEUE_TABLE_NAME = "push_notification_queue";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const push_notification_queueBaseSchema = z.object({
	id: z.number(),
	data_criacao: z.string(),
	data_envio: z.string(),
	id_cliente: z.number(),
	mensagem: z.string(),
	regua_cobranca_envios_id: z.number(),
	retorno_envio_push: z.string(),
	status: z.string(),
	tipo_notificacao: z.string(),
	titulo: z.string(),
	token_firebase: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const push_notification_queueSchema = push_notification_queueBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const push_notification_queueCreateSchema =
	push_notification_queueSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const push_notification_queueUpdateSchema =
	push_notification_queueCreateSchema.partial();
