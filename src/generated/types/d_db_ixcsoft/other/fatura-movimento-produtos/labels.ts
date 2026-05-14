/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FATURAMOVIMENTOPRODUTOS_FIELD_LABELS = {
	data: "data",
	data_cotacao_diaria: "data_cotacao_diaria",
	descricao: "descricao",
	estoque: "estoque",
	filial_id: "filial_id",
	id: "id",
	id_almox: "id_almox",
	id_cliente_contrato_servicos: "id_cliente_contrato_servicos",
	id_contrato: "id_contrato",
	id_fatura: "id_fatura",
	id_produto: "id_produto",
	id_tipo_documento: "id_tipo_documento",
	id_unidade: "id_unidade",
	id_vd_contratos_produtos: "id_vd_contratos_produtos",
	moeda_simbolo: "moeda_simbolo",
	qtde: "qtde",
	tipo: "tipo",
	tipo_fiscal_plano: "tipo_fiscal_plano",
	unidade_sigla: "unidade_sigla",
	vacrescimo: "vacrescimo",
	valor_ate_vencimento: "valor_ate_vencimento",
	valor_cotacao_diaria: "valor_cotacao_diaria",
	valor_moeda_original: "valor_moeda_original",
	valor_total: "valor_total",
	valor_unitario: "valor_unitario",
	vdesconto: "vdesconto",
} as const;

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
