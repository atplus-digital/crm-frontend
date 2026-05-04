/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NEGOCIACOESITENS_RELACAO_LABELS = {
	COMBO: "COMBO",
	ADICIONAL: "ADICIONAL",
} as const;

export const NEGOCIACOESITENS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const negociacoes_itensRelacaoSchema = z.enum(["COMBO", "ADICIONAL"], {
	error: () => ({ message: "relacao: valores válidos são [COMBO, ADICIONAL]" }),
});

export const negociacoes_itensTipoProdutoSchema = z.enum(
	["SVA", "INTERNET", "STFC", "MVNO", "TV"],
	{
		error: () => ({
			message:
				"tipo_produto: valores válidos são [SVA, INTERNET, STFC, MVNO, TV]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NegociacoesItensRelacao = z.infer<
	typeof negociacoes_itensRelacaoSchema
>;

export type NegociacoesItensTipoProduto = z.infer<
	typeof negociacoes_itensTipoProdutoSchema
>;
