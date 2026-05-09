/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pv_grupo_monitoramentoEnviarNotificacaoAppSchema } from "./labels";

export const PV_GRUPO_MONITORAMENTO_TABLE_NAME = "pv_grupo_monitoramento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_grupo_monitoramentoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	email_destino: z.string(),
	email_smtp: z.number(),
	enviar_notificacao_app: pv_grupo_monitoramentoEnviarNotificacaoAppSchema,
	id_crm_sms_offline: z.number(),
	id_crm_telegram_offline: z.number(),
	limite_icmp_bom: z.number(),
	limite_icmp_otimo: z.number(),
	limite_icmp_regular: z.number(),
	limite_icmp_ruim: z.number(),
	max_requesicoes: z.number(),
	max_tamanho_historico: z.number(),
	qtde_pacotes_envio: z.number(),
	segundos_execucao: z.number(),
	tam_pacote: z.string(),
	tel_celular_resp: z.string(),
	telegram_chat_id_resp: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_grupo_monitoramentoSchema = pv_grupo_monitoramentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_grupo_monitoramentoCreateSchema =
	pv_grupo_monitoramentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_grupo_monitoramentoUpdateSchema =
	pv_grupo_monitoramentoCreateSchema.partial();
