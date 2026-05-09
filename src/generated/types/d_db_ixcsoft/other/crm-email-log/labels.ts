/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
