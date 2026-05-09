/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const GERACAOLOTE_BASEGERACAOPORTIPODOC_LABELS = {
	OPC: "OPC",
	PROD: "PROD",
	P: "P",
} as const;

export const GERACAOLOTE_COMUNICACAOUNICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_CONSULTARSEPARADAMENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_DATAGERACAO_LABELS = {
	V: "V",
	R: "R",
} as const;

export const GERACAOLOTE_GERARNFBOLETORECPARCIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFCONTRATOCANC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFPRECONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFPROPAVULSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_GERARNFRECEBIDOSANTERIORES_LABELS = {
	S: "S",
	N: "N",
} as const;

export const GERACAOLOTE_TIPOCLIENTESCM_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	99: "99",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const geracao_loteBaseGeracaoPorTipoDocSchema = z.enum(
	["OPC", "PROD", "P"],
	{
		error: () => ({
			message: "base_geracao_por_tipo_doc: valores válidos são [OPC, PROD, P]",
		}),
	},
);

export const geracao_loteComunicacaoUnicaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comunicacao_unica: valores válidos são [S, N]" }),
});

export const geracao_loteConsultarSeparadamenteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "consultar_separadamente: valores válidos são [S, N]",
	}),
});

export const geracao_loteDataGeracaoSchema = z.enum(["V", "R"], {
	error: () => ({ message: "data_geracao: valores válidos são [V, R]" }),
});

export const geracao_loteGerarNfBoletoRecParcialSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_boleto_rec_parcial: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfContratoCancSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_contrato_canc: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfPreContratoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_pre_contrato: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfPropAvulsoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_prop_avulso: valores válidos são [S, N]",
	}),
});

export const geracao_loteGerarNfRecebidosAnterioresSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "gerar_nf_recebidos_anteriores: valores válidos são [S, N]",
	}),
});

export const geracao_loteTipoClienteScmSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07", "08", "99"],
	{
		error: () => ({
			message:
				"tipo_cliente_scm: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 99]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type GeracaoLoteBaseGeracaoPorTipoDoc = z.infer<
	typeof geracao_loteBaseGeracaoPorTipoDocSchema
>;

export type GeracaoLoteComunicacaoUnica = z.infer<
	typeof geracao_loteComunicacaoUnicaSchema
>;

export type GeracaoLoteConsultarSeparadamente = z.infer<
	typeof geracao_loteConsultarSeparadamenteSchema
>;

export type GeracaoLoteDataGeracao = z.infer<
	typeof geracao_loteDataGeracaoSchema
>;

export type GeracaoLoteGerarNfBoletoRecParcial = z.infer<
	typeof geracao_loteGerarNfBoletoRecParcialSchema
>;

export type GeracaoLoteGerarNfContratoCanc = z.infer<
	typeof geracao_loteGerarNfContratoCancSchema
>;

export type GeracaoLoteGerarNfPreContrato = z.infer<
	typeof geracao_loteGerarNfPreContratoSchema
>;

export type GeracaoLoteGerarNfPropAvulso = z.infer<
	typeof geracao_loteGerarNfPropAvulsoSchema
>;

export type GeracaoLoteGerarNfRecebidosAnteriores = z.infer<
	typeof geracao_loteGerarNfRecebidosAnterioresSchema
>;

export type GeracaoLoteTipoClienteScm = z.infer<
	typeof geracao_loteTipoClienteScmSchema
>;
