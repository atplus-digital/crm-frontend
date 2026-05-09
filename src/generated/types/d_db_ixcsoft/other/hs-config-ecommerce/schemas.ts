/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	hs_config_ecommerceImgGraCorteSchema,
	hs_config_ecommerceImgMedCorteSchema,
	hs_config_ecommerceImgPeqCorteSchema,
	hs_config_ecommerceMostraParcelamentoSchema,
	hs_config_ecommerceMostraValorSchema,
	hs_config_ecommerceProdutosControleEstoqueSchema,
	hs_config_ecommerceProdutosMostraSchema,
	hs_config_ecommerceTipoEcommerceSchema,
} from "./labels";

export const HS_CONFIG_ECOMMERCE_TABLE_NAME = "hs_config_ecommerce";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_config_ecommerceBaseSchema = z.object({
	id: z.number(),
	img_gra_corte: hs_config_ecommerceImgGraCorteSchema,
	img_gra_tam: z.number(),
	img_med_corte: hs_config_ecommerceImgMedCorteSchema,
	img_med_tam: z.number(),
	img_peq_corte: hs_config_ecommerceImgPeqCorteSchema,
	img_peq_tam: z.number(),
	img_preenchimento: z.string(),
	mostra_parcelamento: hs_config_ecommerceMostraParcelamentoSchema,
	mostra_valor: hs_config_ecommerceMostraValorSchema,
	orcamento_email: z.string(),
	pedido_carteira_cobranca: z.number(),
	pedido_dias_cancelar: z.number(),
	pedido_documento: z.number(),
	pedido_documento_venda: z.number(),
	pedido_vencimento: z.number(),
	pedido_vendedor: z.number(),
	produtos_controle_estoque: hs_config_ecommerceProdutosControleEstoqueSchema,
	produtos_mostra: hs_config_ecommerceProdutosMostraSchema,
	produtos_ordem: z.string(),
	produtos_pagina: z.number(),
	tabela_padrao: z.number(),
	tipo_ecommerce: hs_config_ecommerceTipoEcommerceSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_config_ecommerceSchema = hs_config_ecommerceBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_config_ecommerceCreateSchema = hs_config_ecommerceSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_config_ecommerceUpdateSchema =
	hs_config_ecommerceCreateSchema.partial();
