/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DADOSBANCARIOS_FIELD_LABELS = {
	agencia_dv: "agencia_dv",
	banco: "banco",
	camara_centralizadora: "camara_centralizadora",
	cnpj_cpf: "cnpj_cpf",
	cod_agencia: "cod_agencia",
	cod_banco: "cod_banco",
	cod_conta: "cod_conta",
	cod_tipo_operacao: "cod_tipo_operacao",
	conta_principal: "conta_principal",
	id: "id",
	id_fornecedor: "id_fornecedor",
	id_vendedor: "id_vendedor",
	meio_pagamento_preferencial: "meio_pagamento_preferencial",
	numero_conta_dv: "numero_conta_dv",
	pix_aleatorio: "pix_aleatorio",
	pix_celular: "pix_celular",
	pix_cpf_cnpj: "pix_cpf_cnpj",
	pix_email: "pix_email",
	tipo_conta: "tipo_conta",
	tipo_pessoa: "tipo_pessoa",
	tipo_pix_preferencial: "tipo_pix_preferencial",
	tipo_recebimento: "tipo_recebimento",
	titular: "titular",
} as const;

export const DADOSBANCARIOS_CONTAPRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DADOSBANCARIOS_MEIOPAGAMENTOPREFERENCIAL_LABELS = {
	BOLETO: "BOLETO",
	DEBITO_EM_CONTA: "DEBITO_EM_CONTA",
	TRANSFERENCIA: "TRANSFERENCIA",
	PIX: "PIX",
	OUTROS: "OUTROS",
} as const;

export const DADOSBANCARIOS_TIPOCONTA_LABELS = {
	C: "C",
	P: "P",
} as const;

export const DADOSBANCARIOS_TIPOPESSOA_LABELS = {
	F: "F",
	J: "J",
} as const;

export const DADOSBANCARIOS_TIPOPIXPREFERENCIAL_LABELS = {
	CPF_CNPJ: "CPF_CNPJ",
	CELULAR: "CELULAR",
	EMAIL: "EMAIL",
	ALEATORIO: "ALEATORIO",
} as const;

export const DADOSBANCARIOS_TIPORECEBIMENTO_LABELS = {
	C: "C",
	B: "B",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const dados_bancariosContaPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "conta_principal: valores válidos são [S, N]" }),
});

export const dados_bancariosMeioPagamentoPreferencialSchema = z.enum(
	["BOLETO", "DEBITO_EM_CONTA", "TRANSFERENCIA", "PIX", "OUTROS"],
	{
		error: () => ({
			message:
				"meio_pagamento_preferencial: valores válidos são [BOLETO, DEBITO_EM_CONTA, TRANSFERENCIA, PIX, OUTROS]",
		}),
	},
);

export const dados_bancariosTipoContaSchema = z.enum(["C", "P"], {
	error: () => ({ message: "tipo_conta: valores válidos são [C, P]" }),
});

export const dados_bancariosTipoPessoaSchema = z.enum(["F", "J"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [F, J]" }),
});

export const dados_bancariosTipoPixPreferencialSchema = z.enum(
	["CPF_CNPJ", "CELULAR", "EMAIL", "ALEATORIO"],
	{
		error: () => ({
			message:
				"tipo_pix_preferencial: valores válidos são [CPF_CNPJ, CELULAR, EMAIL, ALEATORIO]",
		}),
	},
);

export const dados_bancariosTipoRecebimentoSchema = z.enum(["C", "B", "D"], {
	error: () => ({ message: "tipo_recebimento: valores válidos são [C, B, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DadosBancariosContaPrincipal = z.infer<
	typeof dados_bancariosContaPrincipalSchema
>;

export type DadosBancariosMeioPagamentoPreferencial = z.infer<
	typeof dados_bancariosMeioPagamentoPreferencialSchema
>;

export type DadosBancariosTipoConta = z.infer<
	typeof dados_bancariosTipoContaSchema
>;

export type DadosBancariosTipoPessoa = z.infer<
	typeof dados_bancariosTipoPessoaSchema
>;

export type DadosBancariosTipoPixPreferencial = z.infer<
	typeof dados_bancariosTipoPixPreferencialSchema
>;

export type DadosBancariosTipoRecebimento = z.infer<
	typeof dados_bancariosTipoRecebimentoSchema
>;
