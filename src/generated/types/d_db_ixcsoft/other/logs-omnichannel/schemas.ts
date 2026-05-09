/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOGS_OMNICHANNEL_TABLE_NAME = "logs_omnichannel";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_omnichannelBaseSchema = z.object({
	id: z.number(),
	contato: z.string(),
	data_envio: z.string(),
	data_inclusao: z.string(),
	fn_areceber_id: z.number(),
	id_cliente: z.number(),
	id_msg_queue_omnichannel: z.number(),
	id_template: z.number(),
	mensagem: z.string(),
	status: z.string(),
	tipo_comunicacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_omnichannelSchema = logs_omnichannelBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_omnichannelCreateSchema = logs_omnichannelSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_omnichannelUpdateSchema =
	logs_omnichannelCreateSchema.partial();
