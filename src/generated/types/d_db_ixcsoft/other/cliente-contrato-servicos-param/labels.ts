/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOSERVICOSPARAM_FIELD_LABELS = {
	acao_tipo: "acao_tipo",
	cidade: "cidade",
	data: "data",
	data_validade: "data_validade",
	descricao: "descricao",
	id: "id",
	id_produto: "id_produto",
	id_unidade: "id_unidade",
	percentual: "percentual",
	repetir: "repetir",
	repetir_qtde: "repetir_qtde",
	tipo: "tipo",
	tipo_da: "tipo_da",
	tipo_desconto: "tipo_desconto",
	uf: "uf",
	valor: "valor",
} as const;

export const CLIENTECONTRATOSERVICOSPARAM_ACAOTIPO_LABELS = {
	N: "N",
	A: "A",
} as const;

export const CLIENTECONTRATOSERVICOSPARAM_REPETIR_LABELS = {
	V: "V",
	S: "S",
} as const;

export const CLIENTECONTRATOSERVICOSPARAM_TIPO_LABELS = {
	V: "V",
	P: "P",
} as const;

export const CLIENTECONTRATOSERVICOSPARAM_TIPODA_LABELS = {
	D: "D",
	A: "A",
} as const;

export const CLIENTECONTRATOSERVICOSPARAM_TIPODESCONTO_LABELS = {
	N: "N",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_servicos_paramAcaoTipoSchema = z.enum(
	["N", "A"],
	{
		error: () => ({ message: "acao_tipo: valores válidos são [N, A]" }),
	},
);

export const cliente_contrato_servicos_paramRepetirSchema = z.enum(["V", "S"], {
	error: () => ({ message: "repetir: valores válidos são [V, S]" }),
});

export const cliente_contrato_servicos_paramTipoSchema = z.enum(["V", "P"], {
	error: () => ({ message: "tipo: valores válidos são [V, P]" }),
});

export const cliente_contrato_servicos_paramTipoDaSchema = z.enum(["D", "A"], {
	error: () => ({ message: "tipo_da: valores válidos são [D, A]" }),
});

export const cliente_contrato_servicos_paramTipoDescontoSchema = z.enum(
	["N", "A"],
	{
		error: () => ({ message: "tipo_desconto: valores válidos são [N, A]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoServicosParamAcaoTipo = z.infer<
	typeof cliente_contrato_servicos_paramAcaoTipoSchema
>;

export type ClienteContratoServicosParamRepetir = z.infer<
	typeof cliente_contrato_servicos_paramRepetirSchema
>;

export type ClienteContratoServicosParamTipo = z.infer<
	typeof cliente_contrato_servicos_paramTipoSchema
>;

export type ClienteContratoServicosParamTipoDa = z.infer<
	typeof cliente_contrato_servicos_paramTipoDaSchema
>;

export type ClienteContratoServicosParamTipoDesconto = z.infer<
	typeof cliente_contrato_servicos_paramTipoDescontoSchema
>;
