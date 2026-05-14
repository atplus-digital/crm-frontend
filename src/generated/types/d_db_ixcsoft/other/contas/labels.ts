/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONTAS_FIELD_LABELS = {
	agencia: "agencia",
	agencia_dv: "agencia_dv",
	anexar_comprovante_cpa_auto: "anexar_comprovante_cpa_auto",
	ativo: "ativo",
	bairro: "bairro",
	cep: "cep",
	cidade: "cidade",
	cnpj: "cnpj",
	cod_banco: "cod_banco",
	complemento: "complemento",
	conta: "conta",
	data_abertura: "data_abertura",
	descricao: "descricao",
	filial_padrao: "filial_padrao",
	id: "id",
	id_centro_custo_rel_centro_custo_categoria_padrao:
		"id_centro_custo_rel_centro_custo_categoria_padrao",
	id_planejamento: "id_planejamento",
	integration_client_id: "integration_client_id",
	integration_client_secret: "integration_client_secret",
	integration_environment: "integration_environment",
	integration_name: "integration_name",
	integration_secret_key: "integration_secret_key",
	intermediary_city_id: "intermediary_city_id",
	intermediary_cnpj: "intermediary_cnpj",
	intermediary_complement: "intermediary_complement",
	intermediary_name: "intermediary_name",
	intermediary_neighborhood: "intermediary_neighborhood",
	intermediary_number: "intermediary_number",
	intermediary_street: "intermediary_street",
	layout_conciliacao: "layout_conciliacao",
	logradouro: "logradouro",
	numero_conta: "numero_conta",
	numero_conta_dv: "numero_conta_dv",
	numero_convenio: "numero_convenio",
	numero_convenio_fornecedor: "numero_convenio_fornecedor",
	numero_cooperativa: "numero_cooperativa",
	numero_residencia: "numero_residencia",
	operacao: "operacao",
	parametro_troca_eletronica: "parametro_troca_eletronica",
	permitir_pag_saldo_negativo: "permitir_pag_saldo_negativo",
	razao_banco: "razao_banco",
	saldo_abertura: "saldo_abertura",
	suframa: "suframa",
	tipo_conta: "tipo_conta",
} as const;

export const CONTAS_ANEXARCOMPROVANTECPAAUTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTAS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTAS_INTEGRATIONENVIRONMENT_LABELS = {
	H: "H",
	P: "P",
} as const;

export const CONTAS_PERMITIRPAGSALDONEGATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONTAS_TIPOCONTA_LABELS = {
	C: "C",
	B: "B",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const contasAnexarComprovanteCpaAutoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "anexar_comprovante_cpa_auto: valores válidos são [S, N]",
	}),
});

export const contasAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const contasIntegrationEnvironmentSchema = z.enum(["H", "P"], {
	error: () => ({
		message: "integration_environment: valores válidos são [H, P]",
	}),
});

export const contasPermitirPagSaldoNegativoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permitir_pag_saldo_negativo: valores válidos são [S, N]",
	}),
});

export const contasTipoContaSchema = z.enum(["C", "B", "D"], {
	error: () => ({ message: "tipo_conta: valores válidos são [C, B, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ContasAnexarComprovanteCpaAuto = z.infer<
	typeof contasAnexarComprovanteCpaAutoSchema
>;

export type ContasAtivo = z.infer<typeof contasAtivoSchema>;

export type ContasIntegrationEnvironment = z.infer<
	typeof contasIntegrationEnvironmentSchema
>;

export type ContasPermitirPagSaldoNegativo = z.infer<
	typeof contasPermitirPagSaldoNegativoSchema
>;

export type ContasTipoConta = z.infer<typeof contasTipoContaSchema>;
