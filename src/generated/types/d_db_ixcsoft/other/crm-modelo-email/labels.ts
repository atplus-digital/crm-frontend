/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMMODELOEMAIL_FIELD_LABELS = {
	aceite_digital: "aceite_digital",
	assunto: "assunto",
	ativo: "ativo",
	cor_botoes: "cor_botoes",
	id: "id",
	logotipo: "logotipo",
	titulo: "titulo",
	vencer_no_aceite: "vencer_no_aceite",
	whatsapp_destinatario: "whatsapp_destinatario",
} as const;

export const CRMMODELOEMAIL_ACEITEDIGITAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMMODELOEMAIL_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMMODELOEMAIL_VENCERNOACEITE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_modelo_emailAceiteDigitalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aceite_digital: valores válidos são [S, N]" }),
});

export const crm_modelo_emailAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const crm_modelo_emailVencerNoAceiteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "vencer_no_aceite: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmModeloEmailAceiteDigital = z.infer<
	typeof crm_modelo_emailAceiteDigitalSchema
>;

export type CrmModeloEmailAtivo = z.infer<typeof crm_modelo_emailAtivoSchema>;

export type CrmModeloEmailVencerNoAceite = z.infer<
	typeof crm_modelo_emailVencerNoAceiteSchema
>;
