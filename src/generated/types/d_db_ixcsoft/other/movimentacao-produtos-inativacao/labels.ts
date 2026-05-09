/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MOVIMENTACAOPRODUTOSINATIVACAO_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

export const MOVIMENTACAOPRODUTOSINATIVACAO_TIPOMOVIMENTACAO_LABELS = {
	E: "E",
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const movimentacao_produtos_inativacaoTipoSchema = z.enum(
	["I", "T", "S", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, SVA, TV, SMP]",
		}),
	},
);

export const movimentacao_produtos_inativacaoTipoMovimentacaoSchema = z.enum(
	["E", "A", "I"],
	{
		error: () => ({
			message: "tipo_movimentacao: valores válidos são [E, A, I]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MovimentacaoProdutosInativacaoTipo = z.infer<
	typeof movimentacao_produtos_inativacaoTipoSchema
>;

export type MovimentacaoProdutosInativacaoTipoMovimentacao = z.infer<
	typeof movimentacao_produtos_inativacaoTipoMovimentacaoSchema
>;
