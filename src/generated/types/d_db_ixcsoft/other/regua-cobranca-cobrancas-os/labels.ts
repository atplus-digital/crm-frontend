/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCACOBRANCASOS_FIELD_LABELS = {
	etapa_cobranca: "etapa_cobranca",
	id: "id",
	motivo_falha: "motivo_falha",
	parametro_dias_id: "parametro_dias_id",
	regua_cobranca_cobrancas_id: "regua_cobranca_cobrancas_id",
	regua_cobranca_lote_id: "regua_cobranca_lote_id",
	status: "status",
	su_oss_chamado_id: "su_oss_chamado_id",
} as const;

export const REGUACOBRANCACOBRANCASOS_ETAPACOBRANCA_LABELS = {
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

export const REGUACOBRANCACOBRANCASOS_STATUS_LABELS = {
	S: "S",
	F: "F",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_cobrancas_osEtapaCobrancaSchema = z.enum(
	["LP", "CV", "AC", "IP", "AP", "CAP", "NC", "RCA", "CCA", "RCB", "RN"],
	{
		error: () => ({
			message:
				"etapa_cobranca: valores válidos são [LP, CV, AC, IP, AP, CAP, NC, RCA, CCA, RCB, RN]",
		}),
	},
);

export const regua_cobranca_cobrancas_osStatusSchema = z.enum(["S", "F", "A"], {
	error: () => ({ message: "status: valores válidos são [S, F, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaCobrancasOsEtapaCobranca = z.infer<
	typeof regua_cobranca_cobrancas_osEtapaCobrancaSchema
>;

export type ReguaCobrancaCobrancasOsStatus = z.infer<
	typeof regua_cobranca_cobrancas_osStatusSchema
>;
