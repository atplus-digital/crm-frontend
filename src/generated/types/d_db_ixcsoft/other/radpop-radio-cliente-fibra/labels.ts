/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIOCLIENTEFIBRA_ENDERECOPADRAOCLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_ONUCOMPARTILHADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_ONUREDENEUTRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_POSICAOINCONSISTENTE_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_RADPOPESTRUTURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_STATUSAUTORIZADO_LABELS = {
	NA: "NA",
	A: "A",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_STATUSPOTENCIA_LABELS = {
	regular: "regular",
	irregular: "irregular",
	indefinido: "indefinido",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_TIPOOPERACAO_LABELS = {
	B: "B",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radio_cliente_fibraEnderecoPadraoClienteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "endereco_padrao_cliente: valores válidos são [S, N]",
		}),
	},
);

export const radpop_radio_cliente_fibraOnuCompartilhadaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "onu_compartilhada: valores válidos são [S, N]" }),
	},
);

export const radpop_radio_cliente_fibraOnuRedeNeutraSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "onu_rede_neutra: valores válidos são [S, N]" }),
	},
);

export const radpop_radio_cliente_fibraPosicaoInconsistenteSchema = z.enum(
	["N", "S"],
	{
		error: () => ({
			message: "posicao_inconsistente: valores válidos são [N, S]",
		}),
	},
);

export const radpop_radio_cliente_fibraRadpopEstruturaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "radpop_estrutura: valores válidos são [S, N]" }),
	},
);

export const radpop_radio_cliente_fibraStatusAutorizadoSchema = z.enum(
	["NA", "A"],
	{
		error: () => ({
			message: "status_autorizado: valores válidos são [NA, A]",
		}),
	},
);

export const radpop_radio_cliente_fibraStatusPotenciaSchema = z.enum(
	["regular", "irregular", "indefinido"],
	{
		error: () => ({
			message:
				"status_potencia: valores válidos são [regular, irregular, indefinido]",
		}),
	},
);

export const radpop_radio_cliente_fibraTipoOperacaoSchema = z.enum(["B", "R"], {
	error: () => ({ message: "tipo_operacao: valores válidos são [B, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioClienteFibraEnderecoPadraoCliente = z.infer<
	typeof radpop_radio_cliente_fibraEnderecoPadraoClienteSchema
>;

export type RadpopRadioClienteFibraOnuCompartilhada = z.infer<
	typeof radpop_radio_cliente_fibraOnuCompartilhadaSchema
>;

export type RadpopRadioClienteFibraOnuRedeNeutra = z.infer<
	typeof radpop_radio_cliente_fibraOnuRedeNeutraSchema
>;

export type RadpopRadioClienteFibraPosicaoInconsistente = z.infer<
	typeof radpop_radio_cliente_fibraPosicaoInconsistenteSchema
>;

export type RadpopRadioClienteFibraRadpopEstrutura = z.infer<
	typeof radpop_radio_cliente_fibraRadpopEstruturaSchema
>;

export type RadpopRadioClienteFibraStatusAutorizado = z.infer<
	typeof radpop_radio_cliente_fibraStatusAutorizadoSchema
>;

export type RadpopRadioClienteFibraStatusPotencia = z.infer<
	typeof radpop_radio_cliente_fibraStatusPotenciaSchema
>;

export type RadpopRadioClienteFibraTipoOperacao = z.infer<
	typeof radpop_radio_cliente_fibraTipoOperacaoSchema
>;
