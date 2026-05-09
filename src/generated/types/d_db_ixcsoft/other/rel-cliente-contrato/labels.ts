/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELCLIENTECONTRATO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELCLIENTECONTRATO_AVISOATRASO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_BLOQUEIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_CONTRATOISENTO_LABELS = {
	S: "S",
	N: "N",
	A: "A",
} as const;

export const RELCLIENTECONTRATO_CONTRATOSUSPENSO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_DESBLOQUEIOCONFIANCAATIVO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_FORCASTATUSACESSO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_MOTIVOCANCELAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RELCLIENTECONTRATO_ORIGEMCANCELAMENTO_LABELS = {
	M: "M",
	A: "A",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_RENOVACAOAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_RESTRICAOAUTOBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_STATUSVELOCIDADE_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_TIPOCOBRANCA_LABELS = {
	P: "P",
	E: "E",
	I: "I",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_TIPOCONDICAOPAGAMENTO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_TIPODATAATIVACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATABASE_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATABLOQUEIO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATABLOQUEIOAUTO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATABLOQUEIOMANUAL_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATACADASTRO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATACANCELAMENTO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATADESISTENCIA_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATAEXPIRACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATANEGATIVACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPODATARENOVACAO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_TIPOVENCIMENTO_LABELS = {
	D: "D",
	P: "P",
} as const;

export const RELCLIENTECONTRATO_UTILIZANDOAUTOLIBERACAO_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

export const RELCLIENTECONTRATO_UTILIZANDOBLOQUEIOCONFIANCA_LABELS = {
	S: "S",
	N: "N",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rel_cliente_contratoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const rel_cliente_contratoAvisoAtrasoSchema = z.enum(["S", "N", "T"], {
	error: () => ({ message: "aviso_atraso: valores válidos são [S, N, T]" }),
});

export const rel_cliente_contratoBloqueioAutomaticoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "bloqueio_automatico: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoContratoIsentoSchema = z.enum(
	["S", "N", "A"],
	{
		error: () => ({
			message: "contrato_isento: valores válidos são [S, N, A]",
		}),
	},
);

export const rel_cliente_contratoContratoSuspensoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "contrato_suspenso: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoDesbloqueioConfiancaAtivoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "desbloqueio_confianca_ativo: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoForcaStatusAcessoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "forca_status_acesso: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoMotivoCancelamentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "motivo_cancelamento: valores válidos são [S, N]" }),
});

export const rel_cliente_contratoOrigemCancelamentoSchema = z.enum(
	["M", "A", "T"],
	{
		error: () => ({
			message: "origem_cancelamento: valores válidos são [M, A, T]",
		}),
	},
);

export const rel_cliente_contratoRenovacaoAutomaticaSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "renovacao_automatica: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoRestricaoAutoBloqueioSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "restricao_auto_bloqueio: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoStatusVelocidadeSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "status_velocidade: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoTipoCobrancaSchema = z.enum(
	["P", "E", "I", "T"],
	{
		error: () => ({
			message: "tipo_cobranca: valores válidos são [P, E, I, T]",
		}),
	},
);

export const rel_cliente_contratoTipoCondicaoPagamentoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "tipo_condicao_pagamento: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoTipoDataAtivacaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_ativacao: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoTipoDataBaseSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_base: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoTipoDataBloqueioSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_bloqueio: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoTipoDataBloqueioAutoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_bloqueio_auto: valores válidos são [D, P]",
		}),
	},
);

export const rel_cliente_contratoTipoDataBloqueioManualSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_bloqueio_manual: valores válidos são [D, P]",
		}),
	},
);

export const rel_cliente_contratoTipoDataCadastroSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_cadastro: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoTipoDataCancelamentoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_cancelamento: valores válidos são [D, P]",
		}),
	},
);

export const rel_cliente_contratoTipoDataDesistenciaSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_desistencia: valores válidos são [D, P]",
		}),
	},
);

export const rel_cliente_contratoTipoDataExpiracaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_expiracao: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoTipoDataNegativacaoSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "tipo_data_negativacao: valores válidos são [D, P]",
		}),
	},
);

export const rel_cliente_contratoTipoDataRenovacaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_renovacao: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoTipoVencimentoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_vencimento: valores válidos são [D, P]" }),
});

export const rel_cliente_contratoUtilizandoAutoLiberacaoSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "utilizando_auto_liberacao: valores válidos são [S, N, T]",
		}),
	},
);

export const rel_cliente_contratoUtilizandoBloqueioConfiancaSchema = z.enum(
	["S", "N", "T"],
	{
		error: () => ({
			message: "utilizando_bloqueio_confianca: valores válidos são [S, N, T]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelClienteContratoAtivo = z.infer<
	typeof rel_cliente_contratoAtivoSchema
>;

export type RelClienteContratoAvisoAtraso = z.infer<
	typeof rel_cliente_contratoAvisoAtrasoSchema
>;

export type RelClienteContratoBloqueioAutomatico = z.infer<
	typeof rel_cliente_contratoBloqueioAutomaticoSchema
>;

export type RelClienteContratoContratoIsento = z.infer<
	typeof rel_cliente_contratoContratoIsentoSchema
>;

export type RelClienteContratoContratoSuspenso = z.infer<
	typeof rel_cliente_contratoContratoSuspensoSchema
>;

export type RelClienteContratoDesbloqueioConfiancaAtivo = z.infer<
	typeof rel_cliente_contratoDesbloqueioConfiancaAtivoSchema
>;

export type RelClienteContratoForcaStatusAcesso = z.infer<
	typeof rel_cliente_contratoForcaStatusAcessoSchema
>;

export type RelClienteContratoMotivoCancelamento = z.infer<
	typeof rel_cliente_contratoMotivoCancelamentoSchema
>;

export type RelClienteContratoOrigemCancelamento = z.infer<
	typeof rel_cliente_contratoOrigemCancelamentoSchema
>;

export type RelClienteContratoRenovacaoAutomatica = z.infer<
	typeof rel_cliente_contratoRenovacaoAutomaticaSchema
>;

export type RelClienteContratoRestricaoAutoBloqueio = z.infer<
	typeof rel_cliente_contratoRestricaoAutoBloqueioSchema
>;

export type RelClienteContratoStatusVelocidade = z.infer<
	typeof rel_cliente_contratoStatusVelocidadeSchema
>;

export type RelClienteContratoTipoCobranca = z.infer<
	typeof rel_cliente_contratoTipoCobrancaSchema
>;

export type RelClienteContratoTipoCondicaoPagamento = z.infer<
	typeof rel_cliente_contratoTipoCondicaoPagamentoSchema
>;

export type RelClienteContratoTipoDataAtivacao = z.infer<
	typeof rel_cliente_contratoTipoDataAtivacaoSchema
>;

export type RelClienteContratoTipoDataBase = z.infer<
	typeof rel_cliente_contratoTipoDataBaseSchema
>;

export type RelClienteContratoTipoDataBloqueio = z.infer<
	typeof rel_cliente_contratoTipoDataBloqueioSchema
>;

export type RelClienteContratoTipoDataBloqueioAuto = z.infer<
	typeof rel_cliente_contratoTipoDataBloqueioAutoSchema
>;

export type RelClienteContratoTipoDataBloqueioManual = z.infer<
	typeof rel_cliente_contratoTipoDataBloqueioManualSchema
>;

export type RelClienteContratoTipoDataCadastro = z.infer<
	typeof rel_cliente_contratoTipoDataCadastroSchema
>;

export type RelClienteContratoTipoDataCancelamento = z.infer<
	typeof rel_cliente_contratoTipoDataCancelamentoSchema
>;

export type RelClienteContratoTipoDataDesistencia = z.infer<
	typeof rel_cliente_contratoTipoDataDesistenciaSchema
>;

export type RelClienteContratoTipoDataExpiracao = z.infer<
	typeof rel_cliente_contratoTipoDataExpiracaoSchema
>;

export type RelClienteContratoTipoDataNegativacao = z.infer<
	typeof rel_cliente_contratoTipoDataNegativacaoSchema
>;

export type RelClienteContratoTipoDataRenovacao = z.infer<
	typeof rel_cliente_contratoTipoDataRenovacaoSchema
>;

export type RelClienteContratoTipoVencimento = z.infer<
	typeof rel_cliente_contratoTipoVencimentoSchema
>;

export type RelClienteContratoUtilizandoAutoLiberacao = z.infer<
	typeof rel_cliente_contratoUtilizandoAutoLiberacaoSchema
>;

export type RelClienteContratoUtilizandoBloqueioConfianca = z.infer<
	typeof rel_cliente_contratoUtilizandoBloqueioConfiancaSchema
>;
