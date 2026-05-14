/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ESTOQUEPRODUTOSALMOXFILIAL_FIELD_LABELS = {
	almox_ativo: "almox_ativo",
	almox_descricao: "almox_descricao",
	create_time: "create_time",
	id: "id",
	id_almox: "id_almox",
	id_filial: "id_filial",
	id_produto: "id_produto",
	produto_ativo: "produto_ativo",
	produto_controla_estoque: "produto_controla_estoque",
	produto_descricao: "produto_descricao",
	produto_id_class_fiscal: "produto_id_class_fiscal",
	produto_pcomissao: "produto_pcomissao",
	produto_preco_base: "produto_preco_base",
	produto_tipo: "produto_tipo",
	produto_unidade: "produto_unidade",
	saldo: "saldo",
	update_time: "update_time",
} as const;

export const ESTOQUEPRODUTOSALMOXFILIAL_ALMOXATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ESTOQUEPRODUTOSALMOXFILIAL_PRODUTOATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ESTOQUEPRODUTOSALMOXFILIAL_PRODUTOCONTROLAESTOQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ESTOQUEPRODUTOSALMOXFILIAL_PRODUTOTIPO_LABELS = {
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
export const estoque_produtos_almox_filialAlmoxAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "almox_ativo: valores válidos são [S, N]" }),
	},
);

export const estoque_produtos_almox_filialProdutoAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "produto_ativo: valores válidos são [S, N]" }),
	},
);

export const estoque_produtos_almox_filialProdutoControlaEstoqueSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "produto_controla_estoque: valores válidos são [S, N]",
		}),
	},
);

export const estoque_produtos_almox_filialProdutoTipoSchema = z.enum(
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
export type EstoqueProdutosAlmoxFilialAlmoxAtivo = z.infer<
	typeof estoque_produtos_almox_filialAlmoxAtivoSchema
>;

export type EstoqueProdutosAlmoxFilialProdutoAtivo = z.infer<
	typeof estoque_produtos_almox_filialProdutoAtivoSchema
>;

export type EstoqueProdutosAlmoxFilialProdutoControlaEstoque = z.infer<
	typeof estoque_produtos_almox_filialProdutoControlaEstoqueSchema
>;

export type EstoqueProdutosAlmoxFilialProdutoTipo = z.infer<
	typeof estoque_produtos_almox_filialProdutoTipoSchema
>;
