/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWESTOQUEPRODUTOSALMOXFILIAL_ALMOXATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWESTOQUEPRODUTOSALMOXFILIAL_PRODUTOATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWESTOQUEPRODUTOSALMOXFILIAL_PRODUTOCONTROLAESTOQUE_LABELS = {
	N: "N",
	S: "S",
	L: "L",
} as const;

export const VIEWESTOQUEPRODUTOSALMOXFILIAL_PRODUTOTIPO_LABELS = {
	C: "C",
	S: "S",
	F: "F",
	M: "M",
	P: "P",
	O: "O",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_estoque_produtos_almox_filialAlmoxAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "almox_ativo: valores válidos são [S, N]" }),
	},
);

export const view_estoque_produtos_almox_filialProdutoAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "produto_ativo: valores válidos são [S, N]" }),
	},
);

export const view_estoque_produtos_almox_filialProdutoControlaEstoqueSchema =
	z.enum(["N", "S", "L"], {
		error: () => ({
			message: "produto_controla_estoque: valores válidos são [N, S, L]",
		}),
	});

export const view_estoque_produtos_almox_filialProdutoTipoSchema = z.enum(
	["C", "S", "F", "M", "P", "O"],
	{
		error: () => ({
			message: "produto_tipo: valores válidos são [C, S, F, M, P, O]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewEstoqueProdutosAlmoxFilialAlmoxAtivo = z.infer<
	typeof view_estoque_produtos_almox_filialAlmoxAtivoSchema
>;

export type ViewEstoqueProdutosAlmoxFilialProdutoAtivo = z.infer<
	typeof view_estoque_produtos_almox_filialProdutoAtivoSchema
>;

export type ViewEstoqueProdutosAlmoxFilialProdutoControlaEstoque = z.infer<
	typeof view_estoque_produtos_almox_filialProdutoControlaEstoqueSchema
>;

export type ViewEstoqueProdutosAlmoxFilialProdutoTipo = z.infer<
	typeof view_estoque_produtos_almox_filialProdutoTipoSchema
>;
