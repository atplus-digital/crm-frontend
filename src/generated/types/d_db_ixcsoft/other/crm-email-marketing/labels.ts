/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMEMAILMARKETING_FIELD_LABELS = {
	assunto: "assunto",
	conteudo: "conteudo",
	descricao: "descricao",
	form_variaveis: "form_variaveis",
	id: "id",
	id_email_smtp: "id_email_smtp",
	marketing: "marketing",
} as const;

export const CRMEMAILMARKETING_MARKETING_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_email_marketingMarketingSchema = z.enum(["S", "N"], {
	error: () => ({ message: "marketing: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmEmailMarketingMarketing = z.infer<
	typeof crm_email_marketingMarketingSchema
>;
