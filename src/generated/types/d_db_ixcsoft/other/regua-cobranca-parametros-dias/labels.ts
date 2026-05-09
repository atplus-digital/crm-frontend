/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCAPARAMETROSDIAS_ABRIROS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAPARAMETROSDIAS_ANEXARTITULO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAPARAMETROSDIAS_ENVIACARTA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAPARAMETROSDIAS_ETAPACOBRANCA_LABELS = {
	LP: "LP",
	CV: "CV",
	AC: "AC",
	IP: "IP",
	AP: "AP",
	CAP: "CAP",
	NC: "NC",
	RCA: "RCA",
	CCA: "CCA",
	RCB: "RCB",
	RN: "RN",
} as const;

export const REGUACOBRANCAPARAMETROSDIAS_TIPOENVIO_LABELS = {
	S: "S",
	E: "E",
	W: "W",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_parametros_diasAbrirOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "abrir_os: valores válidos são [S, N]" }),
});

export const regua_cobranca_parametros_diasAnexarTituloSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "anexar_titulo: valores válidos são [S, N]" }),
	},
);

export const regua_cobranca_parametros_diasEnviaCartaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "envia_carta: valores válidos são [S, N]" }),
	},
);

export const regua_cobranca_parametros_diasEtapaCobrancaSchema = z.enum(
	["LP", "CV", "AC", "IP", "AP", "CAP", "NC", "RCA", "CCA", "RCB", "RN"],
	{
		error: () => ({
			message:
				"etapa_cobranca: valores válidos são [LP, CV, AC, IP, AP, CAP, NC, RCA, CCA, RCB, RN]",
		}),
	},
);

export const regua_cobranca_parametros_diasTipoEnvioSchema = z.enum(
	["S", "E", "W", "N"],
	{
		error: () => ({ message: "tipo_envio: valores válidos são [S, E, W, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaParametrosDiasAbrirOs = z.infer<
	typeof regua_cobranca_parametros_diasAbrirOsSchema
>;

export type ReguaCobrancaParametrosDiasAnexarTitulo = z.infer<
	typeof regua_cobranca_parametros_diasAnexarTituloSchema
>;

export type ReguaCobrancaParametrosDiasEnviaCarta = z.infer<
	typeof regua_cobranca_parametros_diasEnviaCartaSchema
>;

export type ReguaCobrancaParametrosDiasEtapaCobranca = z.infer<
	typeof regua_cobranca_parametros_diasEtapaCobrancaSchema
>;

export type ReguaCobrancaParametrosDiasTipoEnvio = z.infer<
	typeof regua_cobranca_parametros_diasTipoEnvioSchema
>;
