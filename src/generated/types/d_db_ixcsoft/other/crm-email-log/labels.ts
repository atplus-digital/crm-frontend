/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMEMAILLOG_FIELD_LABELS = {
	anexos: "anexos",
	assinatura: "assinatura",
	assunto: "assunto",
	cli_nome: "cli_nome",
	data_hora: "data_hora",
	data_hora_cancelamento: "data_hora_cancelamento",
	data_hora_inclusao: "data_hora_inclusao",
	destinatarios: "destinatarios",
	envia_anexo: "envia_anexo",
	id: "id",
	id_cliente: "id_cliente",
	id_contrato: "id_contrato",
	id_email_smtp: "id_email_smtp",
	id_modelo_email: "id_modelo_email",
	id_receber: "id_receber",
	id_responsavel_cancelamento: "id_responsavel_cancelamento",
	id_responsavel_envio: "id_responsavel_envio",
	msg_erro: "msg_erro",
	password: "password",
	smtp_auth: "smtp_auth",
	smtp_host: "smtp_host",
	smtp_port: "smtp_port",
	smtp_secure: "smtp_secure",
	status: "status",
	username: "username",
} as const;

export const CRMEMAILLOG_ASSINATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMEMAILLOG_ENVIAANEXO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMEMAILLOG_STATUS_LABELS = {
	S: "S",
	F: "F",
	C: "C",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_email_logAssinaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "assinatura: valores válidos são [S, N]" }),
});

export const crm_email_logEnviaAnexoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "envia_anexo: valores válidos são [S, N]" }),
});

export const crm_email_logStatusSchema = z.enum(["S", "F", "C", "A"], {
	error: () => ({ message: "status: valores válidos são [S, F, C, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmEmailLogAssinatura = z.infer<
	typeof crm_email_logAssinaturaSchema
>;

export type CrmEmailLogEnviaAnexo = z.infer<
	typeof crm_email_logEnviaAnexoSchema
>;

export type CrmEmailLogStatus = z.infer<typeof crm_email_logStatusSchema>;
