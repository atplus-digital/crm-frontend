/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	faturaGeraEstoqueSchema,
	faturaIsentoSchema,
	faturaParcelaProporcionalGeradaSuspensaoSchema,
	faturaPrevisaoSchema,
	faturaStatusSchema,
	faturaTipoCobrancaSchema,
} from "./labels";

export const FATURA_TABLE_NAME = "fatura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const faturaBaseSchema = z.object({
	id: z.number(),
	avalista_1: z.number(),
	avalista_2: z.number(),
	cancelamento_obs: z.string(),
	comissao_perc_recebimento: z.number(),
	data_bloqueio: z.string(),
	data_cancelamento: z.string(),
	data_desbloqueio: z.string(),
	data_emissao: z.string(),
	data_final_cobranca: z.string(),
	data_inicial_cobranca: z.string(),
	data_previsao_aviso: z.string(),
	data_previsao_bloqueio: z.string(),
	data_saida: z.string(),
	data_vencimento: z.string(),
	dias_proporcionais: z.number(),
	filial_id: z.number(),
	gera_estoque: faturaGeraEstoqueSchema,
	id_carteira_cobranca: z.number(),
	id_cfop: z.number(),
	id_cliente: z.number(),
	id_comissionado: z.number(),
	id_condicao_pagamento: z.number(),
	id_contrato: z.number(),
	id_lote_geracao_fatura: z.number(),
	id_lote_geracao_financeiro: z.number(),
	id_receber: z.number(),
	id_saida: z.number(),
	id_tipo_documento: z.number(),
	id_transportadora: z.number(),
	infCpl: z.string(),
	isento: faturaIsentoSchema,
	mes_referencia: z.string(),
	modalidade_frete: z.number(),
	pacrescimo: z.number(),
	parcela_proporcional_gerada_suspensao:
		faturaParcelaProporcionalGeradaSuspensaoSchema,
	pcomissao: z.number(),
	pdesconto: z.number(),
	placas: z.string(),
	previsao: faturaPrevisaoSchema,
	serie: z.string(),
	status: faturaStatusSchema,
	tipo_cobranca: faturaTipoCobrancaSchema,
	total_dias_periodo: z.number(),
	ultima_atualizacao: z.string(),
	vacrescimo: z.number(),
	valor_total: z.number(),
	vdesconto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const faturaSchema = faturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const faturaCreateSchema = faturaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const faturaUpdateSchema = faturaCreateSchema.partial();
