/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ASSINATURA_NOTIFICACAO_GRUPO_PARAMETROS_TABLE_NAME =
	"assinatura_notificacao_grupo_parametros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_notificacao_grupo_parametrosBaseSchema = z.object({
	id: z.number(),
	create_time: z.string(),
	descricao: z.string(),
	frequencia_dias_notificar: z.string(),
	id_assinatura_notificacao_grupo: z.number(),
	id_email_smtp: z.number(),
	id_gateway_sms: z.number(),
	id_notificacao_push: z.number(),
	tipo_evento: z.string(),
	upadte_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_notificacao_grupo_parametrosSchema =
	assinatura_notificacao_grupo_parametrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_notificacao_grupo_parametrosCreateSchema =
	assinatura_notificacao_grupo_parametrosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_notificacao_grupo_parametrosUpdateSchema =
	assinatura_notificacao_grupo_parametrosCreateSchema.partial();
