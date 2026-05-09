/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VEICULOS_CAMINHAOQTDEEIXOS_LABELS = {
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	7: "7",
	9: "9",
} as const;

export const VEICULOS_CATEGORIAVEICULO_LABELS = {
	MOTO: "MOTO",
	CARRO: "CARRO",
	CAMINHAO: "CAMINHAO",
} as const;

export const VEICULOS_CENTROCUSTOREGRARATEIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const VEICULOS_COMBUSTIVELTIPO_LABELS = {
	GAS: "GAS",
	ALCOOL: "ALCOOL",
	GASOLINA: "GASOLINA",
	DIESEL: "DIESEL",
	ELETRICO: "ELETRICO",
	HIBRIDO: "HIBRIDO",
} as const;

export const VEICULOS_PLACATIPO_LABELS = {
	PADRAO: "PADRAO",
	MERCOSUL: "MERCOSUL",
} as const;

export const VEICULOS_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const VEICULOS_STATUSVEICULOS_LABELS = {
	on: "on",
	off: "off",
} as const;

export const VEICULOS_TIPOCARROCERIA_LABELS = {
	"00": "00",
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
} as const;

export const VEICULOS_TIPORODADO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const veiculosCaminhaoQtdeEixosSchema = z.enum(
	["2", "3", "4", "5", "7", "9"],
	{
		error: () => ({
			message: "caminhao_qtde_eixos: valores válidos são [2, 3, 4, 5, 7, 9]",
		}),
	},
);

export const veiculosCategoriaVeiculoSchema = z.enum(
	["MOTO", "CARRO", "CAMINHAO"],
	{
		error: () => ({
			message: "categoria_veiculo: valores válidos são [MOTO, CARRO, CAMINHAO]",
		}),
	},
);

export const veiculosCentroCustoRegraRateioSchema = z.enum(["CE", "CR"], {
	error: () => ({
		message: "centro_custo_regra_rateio: valores válidos são [CE, CR]",
	}),
});

export const veiculosCombustivelTipoSchema = z.enum(
	["GAS", "ALCOOL", "GASOLINA", "DIESEL", "ELETRICO", "HIBRIDO"],
	{
		error: () => ({
			message:
				"combustivel_tipo: valores válidos são [GAS, ALCOOL, GASOLINA, DIESEL, ELETRICO, HIBRIDO]",
		}),
	},
);

export const veiculosPlacaTipoSchema = z.enum(["PADRAO", "MERCOSUL"], {
	error: () => ({
		message: "placa_tipo: valores válidos são [PADRAO, MERCOSUL]",
	}),
});

export const veiculosStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const veiculosStatusVeiculosSchema = z.enum(["on", "off"], {
	error: () => ({ message: "status_veiculos: valores válidos são [on, off]" }),
});

export const veiculosTipoCarroceriaSchema = z.enum(
	["00", "01", "02", "03", "04", "05"],
	{
		error: () => ({
			message: "tipo_carroceria: valores válidos são [00, 01, 02, 03, 04, 05]",
		}),
	},
);

export const veiculosTipoRodadoSchema = z.enum(
	["01", "02", "03", "04", "05", "06"],
	{
		error: () => ({
			message: "tipo_rodado: valores válidos são [01, 02, 03, 04, 05, 06]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VeiculosCaminhaoQtdeEixos = z.infer<
	typeof veiculosCaminhaoQtdeEixosSchema
>;

export type VeiculosCategoriaVeiculo = z.infer<
	typeof veiculosCategoriaVeiculoSchema
>;

export type VeiculosCentroCustoRegraRateio = z.infer<
	typeof veiculosCentroCustoRegraRateioSchema
>;

export type VeiculosCombustivelTipo = z.infer<
	typeof veiculosCombustivelTipoSchema
>;

export type VeiculosPlacaTipo = z.infer<typeof veiculosPlacaTipoSchema>;

export type VeiculosStatus = z.infer<typeof veiculosStatusSchema>;

export type VeiculosStatusVeiculos = z.infer<
	typeof veiculosStatusVeiculosSchema
>;

export type VeiculosTipoCarroceria = z.infer<
	typeof veiculosTipoCarroceriaSchema
>;

export type VeiculosTipoRodado = z.infer<typeof veiculosTipoRodadoSchema>;
