/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OMNICHANNELMESSAGEQUEUE_FIELD_LABELS = {
	dados_envio: "dados_envio",
	data_inclusao: "data_inclusao",
	id: "id",
	id_cliente: "id_cliente",
	id_gateway_omnichannel: "id_gateway_omnichannel",
	id_template: "id_template",
	message: "message",
	regua_cobranca_envios_id: "regua_cobranca_envios_id",
	status: "status",
} as const;

export const OMNICHANNELMESSAGEQUEUE_STATUS_LABELS = {
	A: "A",
	S: "S",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const omnichannel_message_queueStatusSchema = z.enum(["A", "S", "F"], {
	error: () => ({ message: "status: valores válidos são [A, S, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OmnichannelMessageQueueStatus = z.infer<
	typeof omnichannel_message_queueStatusSchema
>;
