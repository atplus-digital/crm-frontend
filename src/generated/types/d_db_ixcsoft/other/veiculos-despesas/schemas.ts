/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	veiculos_despesasCentroCustoRegraRateioSchema,
	veiculos_despesasClassificacaoInfracaoSchema,
	veiculos_despesasGerarContasApagarSchema,
} from "./labels";

export const VEICULOS_DESPESAS_TABLE_NAME = "veiculos_despesas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_despesasBaseSchema = z.object({
	id: z.number(),
	centro_custo_regra_rateio: veiculos_despesasCentroCustoRegraRateioSchema,
	classificacao_infracao: veiculos_despesasClassificacaoInfracaoSchema,
	data: z.string(),
	descricao: z.string(),
	gerar_contas_apagar: veiculos_despesasGerarContasApagarSchema,
	id_apagar: z.number(),
	id_centro_custo_categoria_filtro: z.number(),
	id_centro_custo_criterio_rateio: z.number(),
	id_centro_custo_rel_centro_custo_categoria_padrao: z.number(),
	id_condutor: z.number(),
	id_filial: z.number(),
	id_veiculo: z.number(),
	kilometragem: z.number(),
	observacao: z.string(),
	quantidade_litros: z.number(),
	valor: z.number(),
	valor_litro: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_despesasSchema = veiculos_despesasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_despesasCreateSchema = veiculos_despesasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_despesasUpdateSchema =
	veiculos_despesasCreateSchema.partial();
