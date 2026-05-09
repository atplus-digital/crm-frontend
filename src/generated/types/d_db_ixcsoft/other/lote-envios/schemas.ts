/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { lote_enviosOrigemEnvioSchema } from "./labels";

export const LOTE_ENVIOS_TABLE_NAME = "lote_envios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lote_enviosBaseSchema = z.object({
	id: z.number(),
	assunto_email: z.string(),
	criado_em: z.string(),
	descricao: z.string(),
	df_elemento_id: z.number(),
	gateway_omnichannel_id: z.string(),
	id_funcionario: z.number(),
	omnichannel_template_id: z.string(),
	origem_envio: lote_enviosOrigemEnvioSchema,
	reenviado: z.number(),
	sms_id: z.number(),
	smtp_id: z.number(),
	template_email: z.string(),
	template_sms: z.string(),
	template_whatsapp: z.string(),
	total_envios: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lote_enviosSchema = lote_enviosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lote_enviosCreateSchema = lote_enviosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lote_enviosUpdateSchema = lote_enviosCreateSchema.partial();
