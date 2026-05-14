/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FORNECEDOR_FIELD_LABELS = {
	ativo: "ativo",
	bairro: "bairro",
	celular: "celular",
	cep: "cep",
	cidade: "cidade",
	cli_desconta_iss_retido_total: "cli_desconta_iss_retido_total",
	cofins_retem: "cofins_retem",
	contribuinte_icms: "contribuinte_icms",
	cpf_cnpj: "cpf_cnpj",
	csll_retem: "csll_retem",
	data: "data",
	data_nascimento: "data_nascimento",
	desconto_irrf_valor_inferior: "desconto_irrf_valor_inferior",
	despesa_tipo: "despesa_tipo",
	duplicata: "duplicata",
	email: "email",
	endereco: "endereco",
	fantasia: "fantasia",
	id: "id",
	id_cliente_conversao: "id_cliente_conversao",
	id_conta: "id_conta",
	id_operadora_celular: "id_operadora_celular",
	ie_identidade: "ie_identidade",
	inss_retem: "inss_retem",
	irrf_retem: "irrf_retem",
	iss_classificacao_padrao: "iss_classificacao_padrao",
	lote: "lote",
	nomecidade: "nomecidade",
	numero: "numero",
	obs: "obs",
	paiz: "paiz",
	pis_retem: "pis_retem",
	pix_celular: "pix_celular",
	pix_cpf_cnpj: "pix_cpf_cnpj",
	razao: "razao",
	referencia: "referencia",
	regime_fiscal_col: "regime_fiscal_col",
	representante: "representante",
	rg_orgao_emissor: "rg_orgao_emissor",
	siglauf: "siglauf",
	site: "site",
	telefone: "telefone",
	telefone_representante: "telefone_representante",
	tipo: "tipo",
	tipo_documento_identificacao_col: "tipo_documento_identificacao_col",
	tipo_pessoa: "tipo_pessoa",
	tipo_plano_id: "tipo_plano_id",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const FORNECEDOR_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_CLIDESCONTAISSRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_COFINSRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_CONTRIBUINTEICMS_LABELS = {
	S: "S",
	N: "N",
	I: "I",
} as const;

export const FORNECEDOR_CSLLRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_DESCONTOIRRFVALORINFERIOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_INSSRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_IRRFRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_PISRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FORNECEDOR_REGIMEFISCALCOL_LABELS = {
	48: "48",
	49: "49",
} as const;

export const FORNECEDOR_TIPODOCUMENTOIDENTIFICACAOCOL_LABELS = {
	11: "11",
	12: "12",
	13: "13",
	21: "21",
	22: "22",
	31: "31",
	41: "41",
	42: "42",
	47: "47",
	50: "50",
	91: "91",
	CI: "CI",
	RUC: "RUC",
	NUIT: "NUIT",
} as const;

export const FORNECEDOR_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fornecedorAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const fornecedorCliDescontaIssRetidoTotalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cli_desconta_iss_retido_total: valores válidos são [S, N]",
	}),
});

export const fornecedorCofinsRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cofins_retem: valores válidos são [S, N]" }),
});

export const fornecedorContribuinteIcmsSchema = z.enum(["S", "N", "I"], {
	error: () => ({
		message: "contribuinte_icms: valores válidos são [S, N, I]",
	}),
});

export const fornecedorCsllRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "csll_retem: valores válidos são [S, N]" }),
});

export const fornecedorDescontoIrrfValorInferiorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "desconto_irrf_valor_inferior: valores válidos são [S, N]",
	}),
});

export const fornecedorInssRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inss_retem: valores válidos são [S, N]" }),
});

export const fornecedorIrrfRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "irrf_retem: valores válidos são [S, N]" }),
});

export const fornecedorPisRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pis_retem: valores válidos são [S, N]" }),
});

export const fornecedorRegimeFiscalColSchema = z.enum(["48", "49"], {
	error: () => ({ message: "regime_fiscal_col: valores válidos são [48, 49]" }),
});

export const fornecedorTipoDocumentoIdentificacaoColSchema = z.enum(
	[
		"11",
		"12",
		"13",
		"21",
		"22",
		"31",
		"41",
		"42",
		"47",
		"50",
		"91",
		"CI",
		"RUC",
		"NUIT",
	],
	{
		error: () => ({
			message:
				"tipo_documento_identificacao_col: valores válidos são [11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, CI, RUC, NUIT]",
		}),
	},
);

export const fornecedorTipoPessoaSchema = z.enum(["F", "J", "E"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FornecedorAtivo = z.infer<typeof fornecedorAtivoSchema>;

export type FornecedorCliDescontaIssRetidoTotal = z.infer<
	typeof fornecedorCliDescontaIssRetidoTotalSchema
>;

export type FornecedorCofinsRetem = z.infer<typeof fornecedorCofinsRetemSchema>;

export type FornecedorContribuinteIcms = z.infer<
	typeof fornecedorContribuinteIcmsSchema
>;

export type FornecedorCsllRetem = z.infer<typeof fornecedorCsllRetemSchema>;

export type FornecedorDescontoIrrfValorInferior = z.infer<
	typeof fornecedorDescontoIrrfValorInferiorSchema
>;

export type FornecedorInssRetem = z.infer<typeof fornecedorInssRetemSchema>;

export type FornecedorIrrfRetem = z.infer<typeof fornecedorIrrfRetemSchema>;

export type FornecedorPisRetem = z.infer<typeof fornecedorPisRetemSchema>;

export type FornecedorRegimeFiscalCol = z.infer<
	typeof fornecedorRegimeFiscalColSchema
>;

export type FornecedorTipoDocumentoIdentificacaoCol = z.infer<
	typeof fornecedorTipoDocumentoIdentificacaoColSchema
>;

export type FornecedorTipoPessoa = z.infer<typeof fornecedorTipoPessoaSchema>;
