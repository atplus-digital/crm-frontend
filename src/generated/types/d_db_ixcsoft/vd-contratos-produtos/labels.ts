/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VDCONTRATOSPRODUTOS_DESCONTOPROPORCIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDCONTRATOSPRODUTOS_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

export const VDCONTRATOSPRODUTOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const VDCONTRATOSPRODUTOS_TIPODESCONTO_LABELS = {
	V: "V",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const vd_contratos_produtosDescontoProporcionalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "desconto_proporcional: valores válidos são [S, N]",
		}),
	},
);

export const vd_contratos_produtosRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

export const vd_contratos_produtosTipoSchema = z.enum(
	["I", "T", "S", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, SVA, TV, SMP]",
		}),
	},
);

export const vd_contratos_produtosTipoDescontoSchema = z.enum(["V", "P"], {
	error: () => ({ message: "tipo_desconto: valores válidos são [V, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VdContratosProdutosDescontoProporcional = z.infer<
	typeof vd_contratos_produtosDescontoProporcionalSchema
>;

export type VdContratosProdutosRepetir = z.infer<
	typeof vd_contratos_produtosRepetirSchema
>;

export type VdContratosProdutosTipo = z.infer<
	typeof vd_contratos_produtosTipoSchema
>;

export type VdContratosProdutosTipoDesconto = z.infer<
	typeof vd_contratos_produtosTipoDescontoSchema
>;
