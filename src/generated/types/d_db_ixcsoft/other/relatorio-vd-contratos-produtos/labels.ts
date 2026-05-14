/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOVDCONTRATOSPRODUTOS_FIELD_LABELS = {
	ativo: "ativo",
	aviso_atraso: "aviso_atraso",
	bairro: "bairro",
	bloqueio_automatico: "bloqueio_automatico",
	campos: "campos",
	campos_adicionais_carteira_de_cobranca:
		"campos_adicionais_carteira_de_cobranca",
	campos_adicionais_cidades: "campos_adicionais_cidades",
	campos_adicionais_cliente: "campos_adicionais_cliente",
	campos_adicionais_contrato: "campos_adicionais_contrato",
	campos_adicionais_filiais: "campos_adicionais_filiais",
	campos_adicionais_plano_de_venda: "campos_adicionais_plano_de_venda",
	campos_adicionais_tipo_de_cobranca: "campos_adicionais_tipo_de_cobranca",
	campos_adicionais_tipo_de_documento: "campos_adicionais_tipo_de_documento",
	cep: "cep",
	cidade: "cidade",
	cliente_final: "cliente_final",
	cliente_inicial: "cliente_inicial",
	com_motivo_desistiu: "com_motivo_desistiu",
	condominio_apartamento: "condominio_apartamento",
	condominio_bloco: "condominio_bloco",
	contrato_final: "contrato_final",
	contrato_inicial: "contrato_inicial",
	contrato_suspenso: "contrato_suspenso",
	creation_date: "creation_date",
	creation_user: "creation_user",
	creator_date: "creator_date",
	data_ativacao_final: "data_ativacao_final",
	data_ativacao_inicial: "data_ativacao_inicial",
	data_ativacao_periodo: "data_ativacao_periodo",
	data_base_final: "data_base_final",
	data_base_inicial: "data_base_inicial",
	data_base_periodo: "data_base_periodo",
	data_bloqueio_final: "data_bloqueio_final",
	data_bloqueio_inicial: "data_bloqueio_inicial",
	data_bloqueio_periodo: "data_bloqueio_periodo",
	data_cadastro_final: "data_cadastro_final",
	data_cadastro_inicial: "data_cadastro_inicial",
	data_cadastro_periodo: "data_cadastro_periodo",
	data_cancelamento_final: "data_cancelamento_final",
	data_cancelamento_inicial: "data_cancelamento_inicial",
	data_cancelamento_periodo: "data_cancelamento_periodo",
	data_desistencia_final: "data_desistencia_final",
	data_desistencia_inicial: "data_desistencia_inicial",
	data_desistencia_periodo: "data_desistencia_periodo",
	data_expiracao_final: "data_expiracao_final",
	data_expiracao_inicial: "data_expiracao_inicial",
	data_expiracao_periodo: "data_expiracao_periodo",
	data_negativacao_final: "data_negativacao_final",
	data_negativacao_inicial: "data_negativacao_inicial",
	data_negativacao_periodo: "data_negativacao_periodo",
	data_renovacao_final: "data_renovacao_final",
	data_renovacao_inicial: "data_renovacao_inicial",
	data_renovacao_periodo: "data_renovacao_periodo",
	data_ultima_impres: "data_ultima_impres",
	desbloqueio_confianca_ativo: "desbloqueio_confianca_ativo",
	dfv_final: "dfv_final",
	dfv_inicial: "dfv_inicial",
	dia_fixo_vencimento: "dia_fixo_vencimento",
	dia_vencimento_final: "dia_vencimento_final",
	dia_vencimento_inicial: "dia_vencimento_inicial",
	endereco: "endereco",
	forca_status_acesso: "forca_status_acesso",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cidade: "id_cidade",
	id_condominio: "id_condominio",
	id_contrato: "id_contrato",
	id_filial: "id_filial",
	id_instalador: "id_instalador",
	id_modelo_impressao: "id_modelo_impressao",
	id_motivo_cancelamento: "id_motivo_cancelamento",
	id_motivo_inclusao: "id_motivo_inclusao",
	id_motivo_negativacao: "id_motivo_negativacao",
	id_produto: "id_produto",
	id_subgrupo: "id_subgrupo",
	id_tipo_cobranca: "id_tipo_cobranca",
	id_tipo_contrato: "id_tipo_contrato",
	id_tipo_documento: "id_tipo_documento",
	id_vd_contrato: "id_vd_contrato",
	id_vendedor: "id_vendedor",
	id_vendedor_ativacao: "id_vendedor_ativacao",
	impresso_por: "impresso_por",
	indicado_atraves: "indicado_atraves",
	modelo: "modelo",
	motivo_cancelamento: "motivo_cancelamento",
	nome: "nome",
	origem_cancelamento: "origem_cancelamento",
	produto_ativo: "produto_ativo",
	relatorio: "relatorio",
	renovacao_automatica: "renovacao_automatica",
	restricao_auto_bloqueio: "restricao_auto_bloqueio",
	status: "status",
	status_velocidade: "status_velocidade",
	tipo_cliente: "tipo_cliente",
	tipo_cobranca: "tipo_cobranca",
	tipo_condicao_pagamento: "tipo_condicao_pagamento",
	tipo_data_ativacao: "tipo_data_ativacao",
	tipo_data_base: "tipo_data_base",
	tipo_data_bloqueio: "tipo_data_bloqueio",
	tipo_data_cadastro: "tipo_data_cadastro",
	tipo_data_cancelamento: "tipo_data_cancelamento",
	tipo_data_desistencia: "tipo_data_desistencia",
	tipo_data_expiracao: "tipo_data_expiracao",
	tipo_data_negativacao: "tipo_data_negativacao",
	tipo_data_renovacao: "tipo_data_renovacao",
	tipo_documento_fatura: "tipo_documento_fatura",
	tipo_documento_opcional: "tipo_documento_opcional",
	tipo_pagamento: "tipo_pagamento",
	tipo_pessoa: "tipo_pessoa",
	tipo_vencimento: "tipo_vencimento",
	utilizando_auto_liberacao: "utilizando_auto_liberacao",
	utilizando_bloqueio_confianca: "utilizando_bloqueio_confianca",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_AVISOATRASO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_BLOQUEIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_CONTRATOSUSPENSO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_DESBLOQUEIOCONFIANCAATIVO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_FORCASTATUSACESSO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_MOTIVOCANCELAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_ORIGEMCANCELAMENTO_LABELS = {
	M: "M",
	A: "A",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_PRODUTOATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_RENOVACAOAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_RESTRICAOAUTOBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_STATUSVELOCIDADE_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPOCOBRANCA_LABELS = {
	P: "P",
	E: "E",
	I: "I",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPOCONDICAOPAGAMENTO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATAATIVACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATABASE_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATABLOQUEIO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATACADASTRO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATACANCELAMENTO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATADESISTENCIA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATAEXPIRACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATANEGATIVACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPODATARENOVACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_TIPOVENCIMENTO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_UTILIZANDOAUTOLIBERACAO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELATORIOVDCONTRATOSPRODUTOS_UTILIZANDOBLOQUEIOCONFIANCA_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_vd_contratos_produtosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const relatorio_vd_contratos_produtosAvisoAtrasoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({ message: "aviso_atraso: valores válidos são [S, N, T]" }),
	},
);

export const relatorio_vd_contratos_produtosBloqueioAutomaticoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "bloqueio_automatico: valores válidos são [S, N, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosContratoSuspensoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "contrato_suspenso: valores válidos são [S, N, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosDesbloqueioConfiancaAtivoSchema =
	z.enum(["S", "N", "T"], {
		error: () => ({
			message: "desbloqueio_confianca_ativo: valores válidos são [S, N, T]",
		}),
	});

export const relatorio_vd_contratos_produtosForcaStatusAcessoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "forca_status_acesso: valores válidos são [S, N, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosMotivoCancelamentoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "motivo_cancelamento: valores válidos são [S, N]",
		}),
	},
);

export const relatorio_vd_contratos_produtosOrigemCancelamentoSchema = z.enum(
	["M", "A", "T"],
	{
		error: () => ({
			message: "origem_cancelamento: valores válidos são [M, A, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosProdutoAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "produto_ativo: valores válidos são [S, N]" }),
	},
);

export const relatorio_vd_contratos_produtosRenovacaoAutomaticaSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "renovacao_automatica: valores válidos são [S, N, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosRestricaoAutoBloqueioSchema =
	z.enum(["S", "N", "T"], {
		error: () => ({
			message: "restricao_auto_bloqueio: valores válidos são [S, N, T]",
		}),
	});

export const relatorio_vd_contratos_produtosStatusVelocidadeSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "status_velocidade: valores válidos são [S, N, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoCobrancaSchema = z.enum(
	["P", "E", "I", "T"],
	{
		error: () => ({
			message: "tipo_cobranca: valores válidos são [P, E, I, T]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoCondicaoPagamentoSchema =
	z.enum(["S", "N", "T"], {
		error: () => ({
			message: "tipo_condicao_pagamento: valores válidos são [S, N, T]",
		}),
	});

export const relatorio_vd_contratos_produtosTipoDataAtivacaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_ativacao: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataBaseSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_data_base: valores válidos são [D, P]" }),
	},
);

export const relatorio_vd_contratos_produtosTipoDataBloqueioSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_bloqueio: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataCadastroSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_cadastro: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataCancelamentoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_cancelamento: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataDesistenciaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_desistencia: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataExpiracaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_expiracao: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataNegativacaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_negativacao: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoDataRenovacaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_renovacao: valores válidos são [D, P]",
		}),
	},
);

export const relatorio_vd_contratos_produtosTipoVencimentoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({ message: "tipo_vencimento: valores válidos são [D, P]" }),
	},
);

export const relatorio_vd_contratos_produtosUtilizandoAutoLiberacaoSchema =
	z.enum(["S", "N", "T"], {
		error: () => ({
			message: "utilizando_auto_liberacao: valores válidos são [S, N, T]",
		}),
	});

export const relatorio_vd_contratos_produtosUtilizandoBloqueioConfiancaSchema =
	z.enum(["S", "N", "T"], {
		error: () => ({
			message: "utilizando_bloqueio_confianca: valores válidos são [S, N, T]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioVdContratosProdutosAtivo = z.infer<
	typeof relatorio_vd_contratos_produtosAtivoSchema
>;

export type RelatorioVdContratosProdutosAvisoAtraso = z.infer<
	typeof relatorio_vd_contratos_produtosAvisoAtrasoSchema
>;

export type RelatorioVdContratosProdutosBloqueioAutomatico = z.infer<
	typeof relatorio_vd_contratos_produtosBloqueioAutomaticoSchema
>;

export type RelatorioVdContratosProdutosContratoSuspenso = z.infer<
	typeof relatorio_vd_contratos_produtosContratoSuspensoSchema
>;

export type RelatorioVdContratosProdutosDesbloqueioConfiancaAtivo = z.infer<
	typeof relatorio_vd_contratos_produtosDesbloqueioConfiancaAtivoSchema
>;

export type RelatorioVdContratosProdutosForcaStatusAcesso = z.infer<
	typeof relatorio_vd_contratos_produtosForcaStatusAcessoSchema
>;

export type RelatorioVdContratosProdutosMotivoCancelamento = z.infer<
	typeof relatorio_vd_contratos_produtosMotivoCancelamentoSchema
>;

export type RelatorioVdContratosProdutosOrigemCancelamento = z.infer<
	typeof relatorio_vd_contratos_produtosOrigemCancelamentoSchema
>;

export type RelatorioVdContratosProdutosProdutoAtivo = z.infer<
	typeof relatorio_vd_contratos_produtosProdutoAtivoSchema
>;

export type RelatorioVdContratosProdutosRenovacaoAutomatica = z.infer<
	typeof relatorio_vd_contratos_produtosRenovacaoAutomaticaSchema
>;

export type RelatorioVdContratosProdutosRestricaoAutoBloqueio = z.infer<
	typeof relatorio_vd_contratos_produtosRestricaoAutoBloqueioSchema
>;

export type RelatorioVdContratosProdutosStatusVelocidade = z.infer<
	typeof relatorio_vd_contratos_produtosStatusVelocidadeSchema
>;

export type RelatorioVdContratosProdutosTipoCobranca = z.infer<
	typeof relatorio_vd_contratos_produtosTipoCobrancaSchema
>;

export type RelatorioVdContratosProdutosTipoCondicaoPagamento = z.infer<
	typeof relatorio_vd_contratos_produtosTipoCondicaoPagamentoSchema
>;

export type RelatorioVdContratosProdutosTipoDataAtivacao = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataAtivacaoSchema
>;

export type RelatorioVdContratosProdutosTipoDataBase = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataBaseSchema
>;

export type RelatorioVdContratosProdutosTipoDataBloqueio = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataBloqueioSchema
>;

export type RelatorioVdContratosProdutosTipoDataCadastro = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataCadastroSchema
>;

export type RelatorioVdContratosProdutosTipoDataCancelamento = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataCancelamentoSchema
>;

export type RelatorioVdContratosProdutosTipoDataDesistencia = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataDesistenciaSchema
>;

export type RelatorioVdContratosProdutosTipoDataExpiracao = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataExpiracaoSchema
>;

export type RelatorioVdContratosProdutosTipoDataNegativacao = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataNegativacaoSchema
>;

export type RelatorioVdContratosProdutosTipoDataRenovacao = z.infer<
	typeof relatorio_vd_contratos_produtosTipoDataRenovacaoSchema
>;

export type RelatorioVdContratosProdutosTipoVencimento = z.infer<
	typeof relatorio_vd_contratos_produtosTipoVencimentoSchema
>;

export type RelatorioVdContratosProdutosUtilizandoAutoLiberacao = z.infer<
	typeof relatorio_vd_contratos_produtosUtilizandoAutoLiberacaoSchema
>;

export type RelatorioVdContratosProdutosUtilizandoBloqueioConfianca = z.infer<
	typeof relatorio_vd_contratos_produtosUtilizandoBloqueioConfiancaSchema
>;
