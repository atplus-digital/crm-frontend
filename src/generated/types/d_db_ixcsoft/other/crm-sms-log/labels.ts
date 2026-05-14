/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMSMSLOG_FIELD_LABELS = {
	assunto: "assunto",
	cliente_razao: "cliente_razao",
	data_hora: "data_hora",
	gateway: "gateway",
	id: "id",
	id_cliente: "id_cliente",
	id_mensagem: "id_mensagem",
	id_responsavel_envio: "id_responsavel_envio",
	status: "status",
	telefone_celular: "telefone_celular",
} as const;

export const CRMSMSLOG_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_sms_logStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmSmsLogStatus = z.infer<typeof crm_sms_logStatusSchema>;
