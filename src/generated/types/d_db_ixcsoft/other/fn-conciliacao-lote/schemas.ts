/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	fn_conciliacao_loteAgruparDataConciliarTotaisIguaisSchema,
	fn_conciliacao_loteConciliarDatasDiferentesSchema,
	fn_conciliacao_loteMostrarAgrupadoPorDiaSchema,
	fn_conciliacao_loteStatusSchema,
} from "./labels";

export const FN_CONCILIACAO_LOTE_TABLE_NAME = "fn_conciliacao_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_conciliacao_loteBaseSchema = z.object({
	id: z.number(),
	agrupar_data_conciliar_totais_iguais:
		fn_conciliacao_loteAgruparDataConciliarTotaisIguaisSchema,
	arquivo_ofx: z.string(),
	conciliar_datas_diferentes: fn_conciliacao_loteConciliarDatasDiferentesSchema,
	id_conta: z.number(),
	id_filial: z.number(),
	momento_criacao_lote: z.string(),
	momento_fin_processo_automatico: z.string(),
	momento_fin_processo_manual: z.string(),
	momento_finalizacao_lote: z.string(),
	momento_ini_processo_automatico: z.string(),
	momento_ini_processo_manual: z.string(),
	mostrar_agrupado_por_dia: fn_conciliacao_loteMostrarAgrupadoPorDiaSchema,
	nome_arquivo: z.string(),
	periodo_final: z.string(),
	periodo_inicial: z.string(),
	status: fn_conciliacao_loteStatusSchema,
	tempo_aux_processo_manual: z.string(),
	total_registros_conciliados: z.number(),
	total_registros_nao_conciliados: z.number(),
	valor_total_conciliado: z.number(),
	valor_total_nao_conciliado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_conciliacao_loteSchema = fn_conciliacao_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_conciliacao_loteCreateSchema = fn_conciliacao_loteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_conciliacao_loteUpdateSchema =
	fn_conciliacao_loteCreateSchema.partial();
