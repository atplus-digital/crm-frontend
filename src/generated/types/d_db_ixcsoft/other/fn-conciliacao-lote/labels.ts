/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNCONCILIACAOLOTE_FIELD_LABELS = {
	agrupar_data_conciliar_totais_iguais: "agrupar_data_conciliar_totais_iguais",
	arquivo_ofx: "arquivo_ofx",
	conciliar_datas_diferentes: "conciliar_datas_diferentes",
	id: "id",
	id_conta: "id_conta",
	id_filial: "id_filial",
	momento_criacao_lote: "momento_criacao_lote",
	momento_fin_processo_automatico: "momento_fin_processo_automatico",
	momento_fin_processo_manual: "momento_fin_processo_manual",
	momento_finalizacao_lote: "momento_finalizacao_lote",
	momento_ini_processo_automatico: "momento_ini_processo_automatico",
	momento_ini_processo_manual: "momento_ini_processo_manual",
	mostrar_agrupado_por_dia: "mostrar_agrupado_por_dia",
	nome_arquivo: "nome_arquivo",
	periodo_final: "periodo_final",
	periodo_inicial: "periodo_inicial",
	status: "status",
	tempo_aux_processo_manual: "tempo_aux_processo_manual",
	total_registros_conciliados: "total_registros_conciliados",
	total_registros_nao_conciliados: "total_registros_nao_conciliados",
	valor_total_conciliado: "valor_total_conciliado",
	valor_total_nao_conciliado: "valor_total_nao_conciliado",
} as const;

export const FNCONCILIACAOLOTE_AGRUPARDATACONCILIARTOTAISIGUAIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCONCILIACAOLOTE_CONCILIARDATASDIFERENTES_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNCONCILIACAOLOTE_MOSTRARAGRUPADOPORDIA_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNCONCILIACAOLOTE_STATUS_LABELS = {
	A: "A",
	F: "F",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_conciliacao_loteAgruparDataConciliarTotaisIguaisSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"agrupar_data_conciliar_totais_iguais: valores válidos são [S, N]",
		}),
	},
);

export const fn_conciliacao_loteConciliarDatasDiferentesSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "conciliar_datas_diferentes: valores válidos são [S, N]",
		}),
	},
);

export const fn_conciliacao_loteMostrarAgrupadoPorDiaSchema = z.enum(
	["N", "S"],
	{
		error: () => ({
			message: "mostrar_agrupado_por_dia: valores válidos são [N, S]",
		}),
	},
);

export const fn_conciliacao_loteStatusSchema = z.enum(["A", "F", "E"], {
	error: () => ({ message: "status: valores válidos são [A, F, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnConciliacaoLoteAgruparDataConciliarTotaisIguais = z.infer<
	typeof fn_conciliacao_loteAgruparDataConciliarTotaisIguaisSchema
>;

export type FnConciliacaoLoteConciliarDatasDiferentes = z.infer<
	typeof fn_conciliacao_loteConciliarDatasDiferentesSchema
>;

export type FnConciliacaoLoteMostrarAgrupadoPorDia = z.infer<
	typeof fn_conciliacao_loteMostrarAgrupadoPorDiaSchema
>;

export type FnConciliacaoLoteStatus = z.infer<
	typeof fn_conciliacao_loteStatusSchema
>;
