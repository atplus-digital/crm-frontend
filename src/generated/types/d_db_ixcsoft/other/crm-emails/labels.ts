/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMEMAILS_FIELD_LABELS = {
	assinatura: "assinatura",
	assunto: "assunto",
	corpo: "corpo",
	data_hora: "data_hora",
	destinatarios: "destinatarios",
	id: "id",
	id_cliente: "id_cliente",
	id_email_smtp: "id_email_smtp",
	id_modelo_email: "id_modelo_email",
	id_negociacao: "id_negociacao",
	id_responsavel: "id_responsavel",
} as const;

export const CRMEMAILS_ASSINATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_emailsAssinaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "assinatura: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmEmailsAssinatura = z.infer<typeof crm_emailsAssinaturaSchema>;
