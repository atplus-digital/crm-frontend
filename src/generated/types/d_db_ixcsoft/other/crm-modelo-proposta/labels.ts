/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMMODELOPROPOSTA_FIELD_LABELS = {
	aceite_digital: "aceite_digital",
	assunto: "assunto",
	ativo: "ativo",
	cor_botoes: "cor_botoes",
	id: "id",
	logotipo: "logotipo",
	titulo: "titulo",
	vencer_no_aceite: "vencer_no_aceite",
} as const;

export const CRMMODELOPROPOSTA_ACEITEDIGITAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMMODELOPROPOSTA_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CRMMODELOPROPOSTA_VENCERNOACEITE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_modelo_propostaAceiteDigitalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aceite_digital: valores válidos são [S, N]" }),
});

export const crm_modelo_propostaAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const crm_modelo_propostaVencerNoAceiteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "vencer_no_aceite: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmModeloPropostaAceiteDigital = z.infer<
	typeof crm_modelo_propostaAceiteDigitalSchema
>;

export type CrmModeloPropostaAtivo = z.infer<
	typeof crm_modelo_propostaAtivoSchema
>;

export type CrmModeloPropostaVencerNoAceite = z.infer<
	typeof crm_modelo_propostaVencerNoAceiteSchema
>;
