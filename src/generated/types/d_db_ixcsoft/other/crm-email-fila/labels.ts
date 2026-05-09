/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMEMAILFILA_ENVIAANEXO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMEMAILFILA_ENVIADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMEMAILFILA_PULARENVIO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_email_filaEnviaAnexoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "envia_anexo: valores válidos são [S, N]" }),
});

export const crm_email_filaEnviadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "enviado: valores válidos são [S, N]" }),
});

export const crm_email_filaPularEnvioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pular_envio: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmEmailFilaEnviaAnexo = z.infer<
	typeof crm_email_filaEnviaAnexoSchema
>;

export type CrmEmailFilaEnviado = z.infer<typeof crm_email_filaEnviadoSchema>;

export type CrmEmailFilaPularEnvio = z.infer<
	typeof crm_email_filaPularEnvioSchema
>;
