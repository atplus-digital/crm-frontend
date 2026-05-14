/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PVGRUPOMONITORAMENTO_FIELD_LABELS = {
	descricao: "descricao",
	email_destino: "email_destino",
	email_smtp: "email_smtp",
	enviar_notificacao_app: "enviar_notificacao_app",
	id: "id",
	id_crm_sms_offline: "id_crm_sms_offline",
	id_crm_telegram_offline: "id_crm_telegram_offline",
	limite_icmp_bom: "limite_icmp_bom",
	limite_icmp_otimo: "limite_icmp_otimo",
	limite_icmp_regular: "limite_icmp_regular",
	limite_icmp_ruim: "limite_icmp_ruim",
	max_requesicoes: "max_requesicoes",
	max_tamanho_historico: "max_tamanho_historico",
	qtde_pacotes_envio: "qtde_pacotes_envio",
	segundos_execucao: "segundos_execucao",
	tam_pacote: "tam_pacote",
	tel_celular_resp: "tel_celular_resp",
	telegram_chat_id_resp: "telegram_chat_id_resp",
} as const;

export const PVGRUPOMONITORAMENTO_ENVIARNOTIFICACAOAPP_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pv_grupo_monitoramentoEnviarNotificacaoAppSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviar_notificacao_app: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PvGrupoMonitoramentoEnviarNotificacaoApp = z.infer<
	typeof pv_grupo_monitoramentoEnviarNotificacaoAppSchema
>;
