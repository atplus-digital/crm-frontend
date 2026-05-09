/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGUACOBRANCACOBRANCASLOGS_ACAO_LABELS = {
	AN: "AN",
	LD: "LD",
	VP: "VP",
	NC: "NC",
	RN: "RN",
} as const;

export const REGUACOBRANCACOBRANCASLOGS_STATUS_LABELS = {
	S: "S",
	F: "F",
	A: "A",
} as const;

export const REGUACOBRANCACOBRANCASLOGS_TIPOEXECUCAO_LABELS = {
	M: "M",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const regua_cobranca_cobrancas_logsAcaoSchema = z.enum(
	["AN", "LD", "VP", "NC", "RN"],
	{
		error: () => ({
			message: "acao: valores válidos são [AN, LD, VP, NC, RN]",
		}),
	},
);

export const regua_cobranca_cobrancas_logsStatusSchema = z.enum(
	["S", "F", "A"],
	{
		error: () => ({ message: "status: valores válidos são [S, F, A]" }),
	},
);

export const regua_cobranca_cobrancas_logsTipoExecucaoSchema = z.enum(
	["M", "A"],
	{
		error: () => ({ message: "tipo_execucao: valores válidos são [M, A]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ReguaCobrancaCobrancasLogsAcao = z.infer<
	typeof regua_cobranca_cobrancas_logsAcaoSchema
>;

export type ReguaCobrancaCobrancasLogsStatus = z.infer<
	typeof regua_cobranca_cobrancas_logsStatusSchema
>;

export type ReguaCobrancaCobrancasLogsTipoExecucao = z.infer<
	typeof regua_cobranca_cobrancas_logsTipoExecucaoSchema
>;
