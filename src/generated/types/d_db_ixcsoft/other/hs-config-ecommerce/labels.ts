/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSCONFIGECOMMERCE_FIELD_LABELS = {
	id: "id",
	img_gra_corte: "img_gra_corte",
	img_gra_tam: "img_gra_tam",
	img_med_corte: "img_med_corte",
	img_med_tam: "img_med_tam",
	img_peq_corte: "img_peq_corte",
	img_peq_tam: "img_peq_tam",
	img_preenchimento: "img_preenchimento",
	mostra_parcelamento: "mostra_parcelamento",
	mostra_valor: "mostra_valor",
	orcamento_email: "orcamento_email",
	pedido_carteira_cobranca: "pedido_carteira_cobranca",
	pedido_dias_cancelar: "pedido_dias_cancelar",
	pedido_documento: "pedido_documento",
	pedido_documento_venda: "pedido_documento_venda",
	pedido_vencimento: "pedido_vencimento",
	pedido_vendedor: "pedido_vendedor",
	produtos_controle_estoque: "produtos_controle_estoque",
	produtos_mostra: "produtos_mostra",
	produtos_ordem: "produtos_ordem",
	produtos_pagina: "produtos_pagina",
	tabela_padrao: "tabela_padrao",
	tipo_ecommerce: "tipo_ecommerce",
} as const;

export const HSCONFIGECOMMERCE_IMGGRACORTE_LABELS = {
	crop: "crop",
	preenchimento: "preenchimento",
	proporcional: "proporcional",
} as const;

export const HSCONFIGECOMMERCE_IMGMEDCORTE_LABELS = {
	crop: "crop",
	preenchimento: "preenchimento",
	proporcional: "proporcional",
} as const;

export const HSCONFIGECOMMERCE_IMGPEQCORTE_LABELS = {
	crop: "crop",
	preenchimento: "preenchimento",
	proporcional: "proporcional",
} as const;

export const HSCONFIGECOMMERCE_MOSTRAPARCELAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const HSCONFIGECOMMERCE_MOSTRAVALOR_LABELS = {
	S: "S",
	N: "N",
	2: "2",
	3: "3",
} as const;

export const HSCONFIGECOMMERCE_PRODUTOSCONTROLEESTOQUE_LABELS = {
	M: "M",
	O: "O",
	T: "T",
} as const;

export const HSCONFIGECOMMERCE_PRODUTOSMOSTRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const HSCONFIGECOMMERCE_TIPOECOMMERCE_LABELS = {
	V: "V",
	OS: "OS",
	OC: "OC",
	D: "D",
	P: "P",
	SV: "SV",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_config_ecommerceImgGraCorteSchema = z.enum(
	["crop", "preenchimento", "proporcional"],
	{
		error: () => ({
			message:
				"img_gra_corte: valores válidos são [crop, preenchimento, proporcional]",
		}),
	},
);

export const hs_config_ecommerceImgMedCorteSchema = z.enum(
	["crop", "preenchimento", "proporcional"],
	{
		error: () => ({
			message:
				"img_med_corte: valores válidos são [crop, preenchimento, proporcional]",
		}),
	},
);

export const hs_config_ecommerceImgPeqCorteSchema = z.enum(
	["crop", "preenchimento", "proporcional"],
	{
		error: () => ({
			message:
				"img_peq_corte: valores válidos são [crop, preenchimento, proporcional]",
		}),
	},
);

export const hs_config_ecommerceMostraParcelamentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "mostra_parcelamento: valores válidos são [S, N]" }),
});

export const hs_config_ecommerceMostraValorSchema = z.enum(
	["S", "N", "2", "3"],
	{
		error: () => ({
			message: "mostra_valor: valores válidos são [S, N, 2, 3]",
		}),
	},
);

export const hs_config_ecommerceProdutosControleEstoqueSchema = z.enum(
	["M", "O", "T"],
	{
		error: () => ({
			message: "produtos_controle_estoque: valores válidos são [M, O, T]",
		}),
	},
);

export const hs_config_ecommerceProdutosMostraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "produtos_mostra: valores válidos são [S, N]" }),
});

export const hs_config_ecommerceTipoEcommerceSchema = z.enum(
	["V", "OS", "OC", "D", "P", "SV"],
	{
		error: () => ({
			message: "tipo_ecommerce: valores válidos são [V, OS, OC, D, P, SV]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsConfigEcommerceImgGraCorte = z.infer<
	typeof hs_config_ecommerceImgGraCorteSchema
>;

export type HsConfigEcommerceImgMedCorte = z.infer<
	typeof hs_config_ecommerceImgMedCorteSchema
>;

export type HsConfigEcommerceImgPeqCorte = z.infer<
	typeof hs_config_ecommerceImgPeqCorteSchema
>;

export type HsConfigEcommerceMostraParcelamento = z.infer<
	typeof hs_config_ecommerceMostraParcelamentoSchema
>;

export type HsConfigEcommerceMostraValor = z.infer<
	typeof hs_config_ecommerceMostraValorSchema
>;

export type HsConfigEcommerceProdutosControleEstoque = z.infer<
	typeof hs_config_ecommerceProdutosControleEstoqueSchema
>;

export type HsConfigEcommerceProdutosMostra = z.infer<
	typeof hs_config_ecommerceProdutosMostraSchema
>;

export type HsConfigEcommerceTipoEcommerce = z.infer<
	typeof hs_config_ecommerceTipoEcommerceSchema
>;
