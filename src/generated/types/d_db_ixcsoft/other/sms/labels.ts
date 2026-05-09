/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SMS_NUMFIXO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SMS_REMOVERCARACTERESESPECIAIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SMS_UTILIZASHORTCODE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const SMS_UTIZARNOVAAPI_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const smsNumFixoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "num_fixo: valores válidos são [S, N]" }),
});

export const smsRemoverCaracteresEspeciaisSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "remover_caracteres_especiais: valores válidos são [S, N]",
	}),
});

export const smsUtilizaShortcodeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "utiliza_shortcode: valores válidos são [S, N]" }),
});

export const smsUtizarNovaApiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "utizar_nova_api: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SmsNumFixo = z.infer<typeof smsNumFixoSchema>;

export type SmsRemoverCaracteresEspeciais = z.infer<
	typeof smsRemoverCaracteresEspeciaisSchema
>;

export type SmsUtilizaShortcode = z.infer<typeof smsUtilizaShortcodeSchema>;

export type SmsUtizarNovaApi = z.infer<typeof smsUtizarNovaApiSchema>;
