/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	veiculosCaminhaoQtdeEixosSchema,
	veiculosCategoriaVeiculoSchema,
	veiculosCentroCustoRegraRateioSchema,
	veiculosCombustivelTipoSchema,
	veiculosPlacaTipoSchema,
	veiculosStatusSchema,
	veiculosStatusVeiculosSchema,
	veiculosTipoCarroceriaSchema,
	veiculosTipoRodadoSchema,
} from "./labels";

export const VEICULOS_TABLE_NAME = "veiculos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculosBaseSchema = z.object({
	id: z.number(),
	ano_fabricacao: z.number(),
	ano_modelo: z.number(),
	aviso_revisao_dias_antes: z.number(),
	aviso_troca_oleo_dias_antes: z.number(),
	caminhao_qtde_eixos: veiculosCaminhaoQtdeEixosSchema,
	capacidade_kg: z.number(),
	capacidade_m3: z.number(),
	categoria_veiculo: veiculosCategoriaVeiculoSchema,
	centro_custo_regra_rateio: veiculosCentroCustoRegraRateioSchema,
	chassi: z.string(),
	combustivel_tipo: veiculosCombustivelTipoSchema,
	condutor_principal: z.number(),
	cor: z.string(),
	data_aquisicao: z.string(),
	data_proxima_revisao: z.string(),
	data_proxima_troca_oleo: z.string(),
	data_revisao: z.string(),
	data_ultima_troca_oleo: z.string(),
	data_venda: z.string(),
	descricao: z.string(),
	gps_time: z.string(),
	hodometro: z.number(),
	id_centro_custo_categoria_filtro: z.number(),
	id_centro_custo_criterio_rateio: z.number(),
	id_centro_custo_rel_centro_custo_categoria_padrao: z.number(),
	id_filial: z.number(),
	intervalo_dias_entre_revisoes: z.number(),
	lastupdate: z.string(),
	latitude: z.number(),
	longitude: z.number(),
	numero_crv: z.string(),
	observacao: z.string(),
	oleo: z.number(),
	placa: z.string(),
	placa_anterior: z.string(),
	placa_tipo: veiculosPlacaTipoSchema,
	reastreador: z.string(),
	renavam: z.string(),
	status: veiculosStatusSchema,
	status_veiculos: veiculosStatusVeiculosSchema,
	tara: z.number(),
	tipo_carroceria: veiculosTipoCarroceriaSchema,
	tipo_rodado: veiculosTipoRodadoSchema,
	uf_veiculo: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculosSchema = veiculosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculosCreateSchema = veiculosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculosUpdateSchema = veiculosCreateSchema.partial();
