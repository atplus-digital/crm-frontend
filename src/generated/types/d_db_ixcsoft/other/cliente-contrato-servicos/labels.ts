/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOSERVICOS_INCLUIDOPORPRORATA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOSERVICOS_ORIGEM_LABELS = {
	A: "A",
	M: "M",
} as const;

export const CLIENTECONTRATOSERVICOS_ORIGEMMOVIMENTO_LABELS = {
	S: "S",
	P: "P",
} as const;

export const CLIENTECONTRATOSERVICOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

export const CLIENTECONTRATOSERVICOS_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const CLIENTECONTRATOSERVICOS_STATUSNF21_LABELS = {
	A: "A",
	I: "I",
} as const;

export const CLIENTECONTRATOSERVICOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	M: "M",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const CLIENTECONTRATOSERVICOS_TIPOACRESDESC_LABELS = {
	A: "A",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_servicosIncluidoPorProrataSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "incluido_por_prorata: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contrato_servicosOrigemSchema = z.enum(["A", "M"], {
	error: () => ({ message: "origem: valores válidos são [A, M]" }),
});

export const cliente_contrato_servicosOrigemMovimentoSchema = z.enum(
	["S", "P"],
	{
		error: () => ({ message: "origem_movimento: valores válidos são [S, P]" }),
	},
);

export const cliente_contrato_servicosRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

export const cliente_contrato_servicosStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const cliente_contrato_servicosStatusNf21Schema = z.enum(["A", "I"], {
	error: () => ({ message: "status_nf21: valores válidos são [A, I]" }),
});

export const cliente_contrato_servicosTipoSchema = z.enum(
	["I", "T", "S", "M", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, M, SVA, TV, SMP]",
		}),
	},
);

export const cliente_contrato_servicosTipoAcresDescSchema = z.enum(["A", "D"], {
	error: () => ({ message: "tipo_acres_desc: valores válidos são [A, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoServicosIncluidoPorProrata = z.infer<
	typeof cliente_contrato_servicosIncluidoPorProrataSchema
>;

export type ClienteContratoServicosOrigem = z.infer<
	typeof cliente_contrato_servicosOrigemSchema
>;

export type ClienteContratoServicosOrigemMovimento = z.infer<
	typeof cliente_contrato_servicosOrigemMovimentoSchema
>;

export type ClienteContratoServicosRepetir = z.infer<
	typeof cliente_contrato_servicosRepetirSchema
>;

export type ClienteContratoServicosStatus = z.infer<
	typeof cliente_contrato_servicosStatusSchema
>;

export type ClienteContratoServicosStatusNf21 = z.infer<
	typeof cliente_contrato_servicosStatusNf21Schema
>;

export type ClienteContratoServicosTipo = z.infer<
	typeof cliente_contrato_servicosTipoSchema
>;

export type ClienteContratoServicosTipoAcresDesc = z.infer<
	typeof cliente_contrato_servicosTipoAcresDescSchema
>;
