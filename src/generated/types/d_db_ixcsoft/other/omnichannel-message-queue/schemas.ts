/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { omnichannel_message_queueStatusSchema } from "./labels";

export const OMNICHANNEL_MESSAGE_QUEUE_TABLE_NAME = "omnichannel_message_queue";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const omnichannel_message_queueBaseSchema = z.object({
	id: z.number(),
	dados_envio: z.string(),
	data_inclusao: z.string(),
	id_cliente: z.number(),
	id_gateway_omnichannel: z.number(),
	id_template: z.number(),
	message: z.string(),
	regua_cobranca_envios_id: z.number(),
	status: omnichannel_message_queueStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const omnichannel_message_queueSchema =
	omnichannel_message_queueBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const omnichannel_message_queueCreateSchema =
	omnichannel_message_queueSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const omnichannel_message_queueUpdateSchema =
	omnichannel_message_queueCreateSchema.partial();
