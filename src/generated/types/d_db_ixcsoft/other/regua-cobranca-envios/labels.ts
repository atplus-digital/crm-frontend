/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCAENVIOS_FIELD_LABELS = {
	crm_email_log_id: "crm_email_log_id",
	data_hora: "data_hora",
	etapa_cobranca: "etapa_cobranca",
	gateway: "gateway",
	id: "id",
	id_lote: "id_lote",
	motivo_falha: "motivo_falha",
	os: "os",
	reenviada: "reenviada",
	regua_cobranca_cobranca_id: "regua_cobranca_cobranca_id",
	regua_cobranca_parametros_dias: "regua_cobranca_parametros_dias",
	status: "status",
	tipo_envio: "tipo_envio",
	tipo_execucao: "tipo_execucao",
	titulo_anexo: "titulo_anexo",
} as const;

export const REGUACOBRANCAENVIOS_ETAPACOBRANCA_LABELS = {
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

export const REGUACOBRANCAENVIOS_GATEWAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAENVIOS_OS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAENVIOS_REENVIADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const REGUACOBRANCAENVIOS_STATUS_LABELS = {
	E: "E",
	F: "F",
	A: "A",
} as const;

export const REGUACOBRANCAENVIOS_TIPOENVIO_LABELS = {
	S: "S",
	E: "E",
	W: "W",
	N: "N",
	C: "C",
} as const;

export const REGUACOBRANCAENVIOS_TIPOEXECUCAO_LABELS = {
	M: "M",
	A: "A",
} as const;

export const REGUACOBRANCAENVIOS_TITULOANEXO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_enviosEtapaCobrancaSchema = z.enum(
	["LP", "CV", "AC", "IP", "AP", "CAP", "NC", "RCA", "CCA", "RCB", "RN"],
	{
		error: () => ({
			message:
				"etapa_cobranca: valores válidos são [LP, CV, AC, IP, AP, CAP, NC, RCA, CCA, RCB, RN]",
		}),
	},
);

export const regua_cobranca_enviosGatewaySchema = z.enum(["S", "N"], {
	error: () => ({ message: "gateway: valores válidos são [S, N]" }),
});

export const regua_cobranca_enviosOsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "os: valores válidos são [S, N]" }),
});

export const regua_cobranca_enviosReenviadaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "reenviada: valores válidos são [S, N]" }),
});

export const regua_cobranca_enviosStatusSchema = z.enum(["E", "F", "A"], {
	error: () => ({ message: "status: valores válidos são [E, F, A]" }),
});

export const regua_cobranca_enviosTipoEnvioSchema = z.enum(
	["S", "E", "W", "N", "C"],
	{
		error: () => ({
			message: "tipo_envio: valores válidos são [S, E, W, N, C]",
		}),
	},
);

export const regua_cobranca_enviosTipoExecucaoSchema = z.enum(["M", "A"], {
	error: () => ({ message: "tipo_execucao: valores válidos são [M, A]" }),
});

export const regua_cobranca_enviosTituloAnexoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "titulo_anexo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaEnviosEtapaCobranca = z.infer<
	typeof regua_cobranca_enviosEtapaCobrancaSchema
>;

export type ReguaCobrancaEnviosGateway = z.infer<
	typeof regua_cobranca_enviosGatewaySchema
>;

export type ReguaCobrancaEnviosOs = z.infer<
	typeof regua_cobranca_enviosOsSchema
>;

export type ReguaCobrancaEnviosReenviada = z.infer<
	typeof regua_cobranca_enviosReenviadaSchema
>;

export type ReguaCobrancaEnviosStatus = z.infer<
	typeof regua_cobranca_enviosStatusSchema
>;

export type ReguaCobrancaEnviosTipoEnvio = z.infer<
	typeof regua_cobranca_enviosTipoEnvioSchema
>;

export type ReguaCobrancaEnviosTipoExecucao = z.infer<
	typeof regua_cobranca_enviosTipoExecucaoSchema
>;

export type ReguaCobrancaEnviosTituloAnexo = z.infer<
	typeof regua_cobranca_enviosTituloAnexoSchema
>;
