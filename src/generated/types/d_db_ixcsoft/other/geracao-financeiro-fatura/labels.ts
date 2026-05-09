/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOFINANCEIROFATURA_STATUS_LABELS = {
	N: "N",
	G: "G",
	E: "E",
	I: "I",
} as const;

export const GERACAOFINANCEIROFATURA_TIPOCONTRATO_LABELS = {
	I: "I",
	S: "S",
	T: "T",
	SVA: "SVA",
} as const;

export const GERACAOFINANCEIROFATURA_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_financeiro_faturaStatusSchema = z.enum(
	["N", "G", "E", "I"],
	{
		error: () => ({ message: "status: valores válidos são [N, G, E, I]" }),
	},
);

export const geracao_financeiro_faturaTipoContratoSchema = z.enum(
	["I", "S", "T", "SVA"],
	{
		error: () => ({
			message: "tipo_contrato: valores válidos são [I, S, T, SVA]",
		}),
	},
);

export const geracao_financeiro_faturaTipoPessoaSchema = z.enum(
	["F", "J", "E"],
	{
		error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoFinanceiroFaturaStatus = z.infer<
	typeof geracao_financeiro_faturaStatusSchema
>;

export type GeracaoFinanceiroFaturaTipoContrato = z.infer<
	typeof geracao_financeiro_faturaTipoContratoSchema
>;

export type GeracaoFinanceiroFaturaTipoPessoa = z.infer<
	typeof geracao_financeiro_faturaTipoPessoaSchema
>;
