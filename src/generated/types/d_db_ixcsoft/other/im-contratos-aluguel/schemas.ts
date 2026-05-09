/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	im_contratos_aluguelFinalidadeSchema,
	im_contratos_aluguelFinanceiroAutomaticoSchema,
	im_contratos_aluguelReajusteAutoSchema,
	im_contratos_aluguelStatusSchema,
	im_contratos_aluguelTipoCobrancaSchema,
} from "./labels";

export const IM_CONTRATOS_ALUGUEL_TABLE_NAME = "im_contratos_aluguel";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const im_contratos_aluguelBaseSchema = z.object({
	id: z.number(),
	carteira_cobranca: z.number(),
	comissao: z.number(),
	condicao_pagamento: z.number(),
	data: z.string(),
	data_alteracao_valor: z.string(),
	data_base_financeiro: z.string(),
	dia_vencimento: z.number(),
	fidelidade: z.number(),
	finalidade: im_contratos_aluguelFinalidadeSchema,
	financeiro_automatico: im_contratos_aluguelFinanceiroAutomaticoSchema,
	id_cliente: z.number(),
	id_fiador: z.number(),
	id_filial: z.number(),
	id_imovel: z.number(),
	id_modelo_impressao: z.number(),
	id_representante: z.number(),
	reajuste_auto: im_contratos_aluguelReajusteAutoSchema,
	reajuste_perc: z.number(),
	status: im_contratos_aluguelStatusSchema,
	tipo_cobranca: im_contratos_aluguelTipoCobrancaSchema,
	tipo_doc: z.number(),
	valor: z.number(),
	valor_abatimento: z.number(),
	valor_atualizado: z.number(),
	vendedor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const im_contratos_aluguelSchema = im_contratos_aluguelBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const im_contratos_aluguelCreateSchema = im_contratos_aluguelSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const im_contratos_aluguelUpdateSchema =
	im_contratos_aluguelCreateSchema.partial();
