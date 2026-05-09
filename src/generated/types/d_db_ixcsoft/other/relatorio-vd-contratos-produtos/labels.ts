/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
