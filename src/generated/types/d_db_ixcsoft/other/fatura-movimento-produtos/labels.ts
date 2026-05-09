/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FATURAMOVIMENTOPRODUTOS_ESTOQUE_LABELS = {
	S: "S",
	N: "N",
	L: "L",
} as const;

export const FATURAMOVIMENTOPRODUTOS_TIPO_LABELS = {
	E: "E",
	S: "S",
	I: "I",
} as const;

export const FATURAMOVIMENTOPRODUTOS_TIPOFISCALPLANO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	M: "M",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fatura_movimento_produtosEstoqueSchema = z.enum(["S", "N", "L"], {
	error: () => ({ message: "estoque: valores válidos são [S, N, L]" }),
});

export const fatura_movimento_produtosTipoSchema = z.enum(["E", "S", "I"], {
	error: () => ({ message: "tipo: valores válidos são [E, S, I]" }),
});

export const fatura_movimento_produtosTipoFiscalPlanoSchema = z.enum(
	["I", "T", "S", "M", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message:
				"tipo_fiscal_plano: valores válidos são [I, T, S, M, SVA, TV, SMP]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FaturaMovimentoProdutosEstoque = z.infer<
	typeof fatura_movimento_produtosEstoqueSchema
>;

export type FaturaMovimentoProdutosTipo = z.infer<
	typeof fatura_movimento_produtosTipoSchema
>;

export type FaturaMovimentoProdutosTipoFiscalPlano = z.infer<
	typeof fatura_movimento_produtosTipoFiscalPlanoSchema
>;
