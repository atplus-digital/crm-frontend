/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SMS_FIELD_LABELS = {
	adicionar_fila: "adicionar_fila",
	aggregate_id: "aggregate_id",
	api: "api",
	api_id: "api_id",
	api_id_shortcode: "api_id_shortcode",
	descricao: "descricao",
	id: "id",
	inferface: "inferface",
	interface_mk: "interface_mk",
	ip: "ip",
	max_caracteres: "max_caracteres",
	num_fixo: "num_fixo",
	porta_chip_goip: "porta_chip_goip",
	porta_mk: "porta_mk",
	remover_caracteres_especiais: "remover_caracteres_especiais",
	rota_saida: "rota_saida",
	senha: "senha",
	tipo: "tipo",
	token: "token",
	url: "url",
	usuario: "usuario",
	utiliza_shortcode: "utiliza_shortcode",
	utizar_nova_api: "utizar_nova_api",
	versao: "versao",
	webservice_version: "webservice_version",
} as const;

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
