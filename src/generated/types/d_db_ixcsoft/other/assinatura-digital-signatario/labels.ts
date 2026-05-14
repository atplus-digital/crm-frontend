/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURADIGITALSIGNATARIO_FIELD_LABELS = {
	cpf_cnpj: "cpf_cnpj",
	email: "email",
	id: "id",
	id_assinatura_digital_historico: "id_assinatura_digital_historico",
	id_externo: "id_externo",
	nome: "nome",
	status_assinatura: "status_assinatura",
	tipo_signatario: "tipo_signatario",
	token_signatario: "token_signatario",
	url_assinatura_digital: "url_assinatura_digital",
} as const;

export const ASSINATURADIGITALSIGNATARIO_STATUSASSINATURA_LABELS = {
	P: "P",
	A: "A",
	S: "S",
	C: "C",
} as const;

export const ASSINATURADIGITALSIGNATARIO_TIPOSIGNATARIO_LABELS = {
	RP: "RP",
	RC: "RC",
	TP: "TP",
	TC: "TC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_digital_signatarioStatusAssinaturaSchema = z.enum(
	["P", "A", "S", "C"],
	{
		error: () => ({
			message: "status_assinatura: valores válidos são [P, A, S, C]",
		}),
	},
);

export const assinatura_digital_signatarioTipoSignatarioSchema = z.enum(
	["RP", "RC", "TP", "TC"],
	{
		error: () => ({
			message: "tipo_signatario: valores válidos são [RP, RC, TP, TC]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaDigitalSignatarioStatusAssinatura = z.infer<
	typeof assinatura_digital_signatarioStatusAssinaturaSchema
>;

export type AssinaturaDigitalSignatarioTipoSignatario = z.infer<
	typeof assinatura_digital_signatarioTipoSignatarioSchema
>;
