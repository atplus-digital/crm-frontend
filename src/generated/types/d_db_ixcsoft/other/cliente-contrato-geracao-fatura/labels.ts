/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOGERACAOFATURA_STATUS_LABELS = {
	N: "N",
	G: "G",
	E: "E",
	I: "I",
} as const;

export const CLIENTECONTRATOGERACAOFATURA_TIPOCONTRATO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
} as const;

export const CLIENTECONTRATOGERACAOFATURA_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_geracao_faturaStatusSchema = z.enum(
	["N", "G", "E", "I"],
	{
		error: () => ({ message: "status: valores válidos são [N, G, E, I]" }),
	},
);

export const cliente_contrato_geracao_faturaTipoContratoSchema = z.enum(
	["I", "T", "S", "SVA"],
	{
		error: () => ({
			message: "tipo_contrato: valores válidos são [I, T, S, SVA]",
		}),
	},
);

export const cliente_contrato_geracao_faturaTipoPessoaSchema = z.enum(
	["F", "J", "E"],
	{
		error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoGeracaoFaturaStatus = z.infer<
	typeof cliente_contrato_geracao_faturaStatusSchema
>;

export type ClienteContratoGeracaoFaturaTipoContrato = z.infer<
	typeof cliente_contrato_geracao_faturaTipoContratoSchema
>;

export type ClienteContratoGeracaoFaturaTipoPessoa = z.infer<
	typeof cliente_contrato_geracao_faturaTipoPessoaSchema
>;
