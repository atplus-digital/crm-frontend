/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOSERVICOSALT_INCLUIDOPORPRORATA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATOSERVICOSALT_ORIGEM_LABELS = {
	A: "A",
	M: "M",
} as const;

export const CLIENTECONTRATOSERVICOSALT_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

export const CLIENTECONTRATOSERVICOSALT_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	M: "M",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const CLIENTECONTRATOSERVICOSALT_TIPOACRESDESC_LABELS = {
	A: "A",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_servicos_altIncluidoPorProrataSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "incluido_por_prorata: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contrato_servicos_altOrigemSchema = z.enum(["A", "M"], {
	error: () => ({ message: "origem: valores válidos são [A, M]" }),
});

export const cliente_contrato_servicos_altRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

export const cliente_contrato_servicos_altTipoSchema = z.enum(
	["I", "T", "S", "M", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, M, SVA, TV, SMP]",
		}),
	},
);

export const cliente_contrato_servicos_altTipoAcresDescSchema = z.enum(
	["A", "D"],
	{
		error: () => ({ message: "tipo_acres_desc: valores válidos são [A, D]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoServicosAltIncluidoPorProrata = z.infer<
	typeof cliente_contrato_servicos_altIncluidoPorProrataSchema
>;

export type ClienteContratoServicosAltOrigem = z.infer<
	typeof cliente_contrato_servicos_altOrigemSchema
>;

export type ClienteContratoServicosAltRepetir = z.infer<
	typeof cliente_contrato_servicos_altRepetirSchema
>;

export type ClienteContratoServicosAltTipo = z.infer<
	typeof cliente_contrato_servicos_altTipoSchema
>;

export type ClienteContratoServicosAltTipoAcresDesc = z.infer<
	typeof cliente_contrato_servicos_altTipoAcresDescSchema
>;
