/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VEICULOSDESPESAS_FIELD_LABELS = {
	centro_custo_regra_rateio: "centro_custo_regra_rateio",
	classificacao_infracao: "classificacao_infracao",
	data: "data",
	descricao: "descricao",
	gerar_contas_apagar: "gerar_contas_apagar",
	id: "id",
	id_apagar: "id_apagar",
	id_centro_custo_categoria_filtro: "id_centro_custo_categoria_filtro",
	id_centro_custo_criterio_rateio: "id_centro_custo_criterio_rateio",
	id_centro_custo_rel_centro_custo_categoria_padrao:
		"id_centro_custo_rel_centro_custo_categoria_padrao",
	id_condutor: "id_condutor",
	id_filial: "id_filial",
	id_veiculo: "id_veiculo",
	kilometragem: "kilometragem",
	observacao: "observacao",
	quantidade_litros: "quantidade_litros",
	valor: "valor",
	valor_litro: "valor_litro",
} as const;

export const VEICULOSDESPESAS_CENTROCUSTOREGRARATEIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const VEICULOSDESPESAS_CLASSIFICACAOINFRACAO_LABELS = {
	L: "L",
	M: "M",
	G: "G",
	GR: "GR",
} as const;

export const VEICULOSDESPESAS_GERARCONTASAPAGAR_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const veiculos_despesasCentroCustoRegraRateioSchema = z.enum(
	["CE", "CR"],
	{
		error: () => ({
			message: "centro_custo_regra_rateio: valores válidos são [CE, CR]",
		}),
	},
);

export const veiculos_despesasClassificacaoInfracaoSchema = z.enum(
	["L", "M", "G", "GR"],
	{
		error: () => ({
			message: "classificacao_infracao: valores válidos são [L, M, G, GR]",
		}),
	},
);

export const veiculos_despesasGerarContasApagarSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gerar_contas_apagar: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VeiculosDespesasCentroCustoRegraRateio = z.infer<
	typeof veiculos_despesasCentroCustoRegraRateioSchema
>;

export type VeiculosDespesasClassificacaoInfracao = z.infer<
	typeof veiculos_despesasClassificacaoInfracaoSchema
>;

export type VeiculosDespesasGerarContasApagar = z.infer<
	typeof veiculos_despesasGerarContasApagarSchema
>;
