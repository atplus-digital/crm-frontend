/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOFNARECEBER_FIELD_LABELS = {
	apartamento: "apartamento",
	arquivo_remessa_baixado: "arquivo_remessa_baixado",
	bairro: "bairro",
	baixa_automatica: "baixa_automatica",
	caixa: "caixa",
	cep: "cep",
	cidade: "cidade",
	condominio: "condominio",
	contrato: "contrato",
	creation_date: "creation_date",
	creation_user: "creation_user",
	data_cancelamento_final: "data_cancelamento_final",
	data_cancelamento_inicial: "data_cancelamento_inicial",
	data_cancelamento_periodo: "data_cancelamento_periodo",
	data_emissao_final: "data_emissao_final",
	data_emissao_inicial: "data_emissao_inicial",
	data_emissao_periodo: "data_emissao_periodo",
	data_pagamento_final: "data_pagamento_final",
	data_pagamento_inicial: "data_pagamento_inicial",
	data_ultima_impres: "data_ultima_impres",
	data_vencimento_final: "data_vencimento_final",
	data_vencimento_inicial: "data_vencimento_inicial",
	data_vencimento_periodo: "data_vencimento_periodo",
	endereco: "endereco",
	enviado_remessa_baixa: "enviado_remessa_baixa",
	estorno_recebimento: "estorno_recebimento",
	filial_id: "filial_id",
	forma_recebimento: "forma_recebimento",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cliente: "id_cliente",
	id_condominio: "id_condominio",
	id_conta: "id_conta",
	id_filial_cadastro_cliente: "id_filial_cadastro_cliente",
	id_lote_geracao_financeiro_fatura: "id_lote_geracao_financeiro_fatura",
	id_mot_cancelamento: "id_mot_cancelamento",
	id_remessa: "id_remessa",
	id_remessa_baixa: "id_remessa_baixa",
	id_renegociacao: "id_renegociacao",
	id_saida: "id_saida",
	id_tipo_cliente: "id_tipo_cliente",
	impresso: "impresso",
	impresso_por: "impresso_por",
	libera_periodo: "libera_periodo",
	liberado: "liberado",
	lote: "lote",
	nome: "nome",
	pagamento_data_periodo: "pagamento_data_periodo",
	pagamento_valor: "pagamento_valor",
	pagamento_valor_condicao: "pagamento_valor_condicao",
	parcela_proporcional: "parcela_proporcional",
	parcelado_cartao: "parcelado_cartao",
	pix_id_carteira_cobranca: "pix_id_carteira_cobranca",
	previsao: "previsao",
	recebido_via_pix: "recebido_via_pix",
	relatorio: "relatorio",
	status: "status",
	status_cobranca: "status_cobranca",
	tipo_cobranca: "tipo_cobranca",
	tipo_data_cancelamento: "tipo_data_cancelamento",
	tipo_data_emissao: "tipo_data_emissao",
	tipo_data_pagamento: "tipo_data_pagamento",
	tipo_data_vencimento: "tipo_data_vencimento",
	tipo_recebimento: "tipo_recebimento",
	tipo_renegociacao: "tipo_renegociacao",
	titulo_protestado: "titulo_protestado",
	type_of_person: "type_of_person",
	valor: "valor",
	valor_aberto: "valor_aberto",
	valor_aberto_condicao: "valor_aberto_condicao",
	valor_cancelado: "valor_cancelado",
	valor_cancelado_condicao: "valor_cancelado_condicao",
	valor_condicao: "valor_condicao",
} as const;

export const RELATORIOFNARECEBER_ARQUIVOREMESSABAIXADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_BAIXAAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_CONTRATO_LABELS = {
	TODOS: "TODOS",
	RECORRENTE: "RECORRENTE",
	AVULSO: "AVULSO",
	AVULSO_E_RECORRENTE: "AVULSO_E_RECORRENTE",
	SEM_CONTRATO: "SEM_CONTRATO",
} as const;

export const RELATORIOFNARECEBER_ENVIADOREMESSABAIXA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_ESTORNORECEBIMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_FORMARECEBIMENTO_LABELS = {
	M: "M",
	R: "R",
} as const;

export const RELATORIOFNARECEBER_IMPRESSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_LIBERAPERIODO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RELATORIOFNARECEBER_LIBERADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RELATORIOFNARECEBER_PARCELAPROPORCIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_PARCELADOCARTAO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RELATORIOFNARECEBER_PREVISAO_LABELS = {
	N: "N",
	S: "S",
	M: "M",
} as const;

export const RELATORIOFNARECEBER_RECEBIDOVIAPIX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_STATUS_LABELS = {
	A: "A",
	R: "R",
	P: "P",
	C: "C",
} as const;

export const RELATORIOFNARECEBER_TIPOCOBRANCA_LABELS = {
	I: "I",
	E: "E",
} as const;

export const RELATORIOFNARECEBER_TIPODATACANCELAMENTO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPODATAEMISSAO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPODATAPAGAMENTO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPODATAVENCIMENTO_LABELS = {
	F: "F",
	P: "P",
} as const;

export const RELATORIOFNARECEBER_TIPORECEBIMENTO_LABELS = {
	Boleto: "Boleto",
	Cheque: "Cheque",
	Cartão: "Cartão",
	Dinheiro: "Dinheiro",
	Depósito: "Depósito",
	Gateway: "Gateway",
	Débito: "Débito",
	Fatura: "Fatura",
	ArrecadacaoRecebimento: "ArrecadacaoRecebimento",
	Transferencia: "Transferencia",
	Pix: "Pix",
} as const;

export const RELATORIOFNARECEBER_TIPORENEGOCIACAO_LABELS = {
	R: "R",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_TITULOPROTESTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOFNARECEBER_TYPEOFPERSON_LABELS = {
	P: "P",
	J: "J",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_fn_areceberArquivoRemessaBaixadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "arquivo_remessa_baixado: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberBaixaAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "baixa_automatica: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberContratoSchema = z.enum(
	["TODOS", "RECORRENTE", "AVULSO", "AVULSO_E_RECORRENTE", "SEM_CONTRATO"],
	{
		error: () => ({
			message:
				"contrato: valores válidos são [TODOS, RECORRENTE, AVULSO, AVULSO_E_RECORRENTE, SEM_CONTRATO]",
		}),
	},
);

export const relatorio_fn_areceberEnviadoRemessaBaixaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "enviado_remessa_baixa: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberEstornoRecebimentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "estorno_recebimento: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberFormaRecebimentoSchema = z.enum(["M", "R"], {
	error: () => ({ message: "forma_recebimento: valores válidos são [M, R]" }),
});

export const relatorio_fn_areceberImpressoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "impresso: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberLiberaPeriodoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "libera_periodo: valores válidos são [N, S]" }),
});

export const relatorio_fn_areceberLiberadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "liberado: valores válidos são [N, S]" }),
});

export const relatorio_fn_areceberParcelaProporcionalSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "parcela_proporcional: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_fn_areceberParceladoCartaoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "parcelado_cartao: valores válidos são [N, S]" }),
});

export const relatorio_fn_areceberPrevisaoSchema = z.enum(["N", "S", "M"], {
	error: () => ({ message: "previsao: valores válidos são [N, S, M]" }),
});

export const relatorio_fn_areceberRecebidoViaPixSchema = z.enum(["S", "N"], {
	error: () => ({ message: "recebido_via_pix: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberStatusSchema = z.enum(["A", "R", "P", "C"], {
	error: () => ({ message: "status: valores válidos são [A, R, P, C]" }),
});

export const relatorio_fn_areceberTipoCobrancaSchema = z.enum(["I", "E"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [I, E]" }),
});

export const relatorio_fn_areceberTipoDataCancelamentoSchema = z.enum(
	["F", "P"],
	{
		error: () => ({
			message: "tipo_data_cancelamento: valores válidos são [F, P]",
		}),
	},
);

export const relatorio_fn_areceberTipoDataEmissaoSchema = z.enum(["F", "P"], {
	error: () => ({ message: "tipo_data_emissao: valores válidos são [F, P]" }),
});

export const relatorio_fn_areceberTipoDataPagamentoSchema = z.enum(["F", "P"], {
	error: () => ({ message: "tipo_data_pagamento: valores válidos são [F, P]" }),
});

export const relatorio_fn_areceberTipoDataVencimentoSchema = z.enum(
	["F", "P"],
	{
		error: () => ({
			message: "tipo_data_vencimento: valores válidos são [F, P]",
		}),
	},
);

export const relatorio_fn_areceberTipoRecebimentoSchema = z.enum(
	[
		"Boleto",
		"Cheque",
		"Cartão",
		"Dinheiro",
		"Depósito",
		"Gateway",
		"Débito",
		"Fatura",
		"ArrecadacaoRecebimento",
		"Transferencia",
		"Pix",
	],
	{
		error: () => ({
			message:
				"tipo_recebimento: valores válidos são [Boleto, Cheque, Cartão, Dinheiro, Depósito, Gateway, Débito, Fatura, ArrecadacaoRecebimento, Transferencia, Pix]",
		}),
	},
);

export const relatorio_fn_areceberTipoRenegociacaoSchema = z.enum(["R", "N"], {
	error: () => ({ message: "tipo_renegociacao: valores válidos são [R, N]" }),
});

export const relatorio_fn_areceberTituloProtestadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "titulo_protestado: valores válidos são [S, N]" }),
});

export const relatorio_fn_areceberTypeOfPersonSchema = z.enum(["P", "J", "E"], {
	error: () => ({ message: "type_of_person: valores válidos são [P, J, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioFnAreceberArquivoRemessaBaixado = z.infer<
	typeof relatorio_fn_areceberArquivoRemessaBaixadoSchema
>;

export type RelatorioFnAreceberBaixaAutomatica = z.infer<
	typeof relatorio_fn_areceberBaixaAutomaticaSchema
>;

export type RelatorioFnAreceberContrato = z.infer<
	typeof relatorio_fn_areceberContratoSchema
>;

export type RelatorioFnAreceberEnviadoRemessaBaixa = z.infer<
	typeof relatorio_fn_areceberEnviadoRemessaBaixaSchema
>;

export type RelatorioFnAreceberEstornoRecebimento = z.infer<
	typeof relatorio_fn_areceberEstornoRecebimentoSchema
>;

export type RelatorioFnAreceberFormaRecebimento = z.infer<
	typeof relatorio_fn_areceberFormaRecebimentoSchema
>;

export type RelatorioFnAreceberImpresso = z.infer<
	typeof relatorio_fn_areceberImpressoSchema
>;

export type RelatorioFnAreceberLiberaPeriodo = z.infer<
	typeof relatorio_fn_areceberLiberaPeriodoSchema
>;

export type RelatorioFnAreceberLiberado = z.infer<
	typeof relatorio_fn_areceberLiberadoSchema
>;

export type RelatorioFnAreceberParcelaProporcional = z.infer<
	typeof relatorio_fn_areceberParcelaProporcionalSchema
>;

export type RelatorioFnAreceberParceladoCartao = z.infer<
	typeof relatorio_fn_areceberParceladoCartaoSchema
>;

export type RelatorioFnAreceberPrevisao = z.infer<
	typeof relatorio_fn_areceberPrevisaoSchema
>;

export type RelatorioFnAreceberRecebidoViaPix = z.infer<
	typeof relatorio_fn_areceberRecebidoViaPixSchema
>;

export type RelatorioFnAreceberStatus = z.infer<
	typeof relatorio_fn_areceberStatusSchema
>;

export type RelatorioFnAreceberTipoCobranca = z.infer<
	typeof relatorio_fn_areceberTipoCobrancaSchema
>;

export type RelatorioFnAreceberTipoDataCancelamento = z.infer<
	typeof relatorio_fn_areceberTipoDataCancelamentoSchema
>;

export type RelatorioFnAreceberTipoDataEmissao = z.infer<
	typeof relatorio_fn_areceberTipoDataEmissaoSchema
>;

export type RelatorioFnAreceberTipoDataPagamento = z.infer<
	typeof relatorio_fn_areceberTipoDataPagamentoSchema
>;

export type RelatorioFnAreceberTipoDataVencimento = z.infer<
	typeof relatorio_fn_areceberTipoDataVencimentoSchema
>;

export type RelatorioFnAreceberTipoRecebimento = z.infer<
	typeof relatorio_fn_areceberTipoRecebimentoSchema
>;

export type RelatorioFnAreceberTipoRenegociacao = z.infer<
	typeof relatorio_fn_areceberTipoRenegociacaoSchema
>;

export type RelatorioFnAreceberTituloProtestado = z.infer<
	typeof relatorio_fn_areceberTituloProtestadoSchema
>;

export type RelatorioFnAreceberTypeOfPerson = z.infer<
	typeof relatorio_fn_areceberTypeOfPersonSchema
>;
