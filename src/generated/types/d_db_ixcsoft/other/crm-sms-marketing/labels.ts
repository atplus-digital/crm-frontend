/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMSMSMARKETING_FIELD_LABELS = {
	descricao: "descricao",
	form_variaveis: "form_variaveis",
	gateway_sms: "gateway_sms",
	id: "id",
	intervalo_tempo_sms: "intervalo_tempo_sms",
	marketing: "marketing",
	mensagem: "mensagem",
	prioridade: "prioridade",
	remetente: "remetente",
} as const;

export const CRMSMSMARKETING_MARKETING_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_sms_marketingMarketingSchema = z.enum(["S", "N"], {
	error: () => ({ message: "marketing: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmSmsMarketingMarketing = z.infer<
	typeof crm_sms_marketingMarketingSchema
>;
