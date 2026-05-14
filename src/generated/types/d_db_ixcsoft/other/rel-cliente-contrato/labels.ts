/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELCLIENTECONTRATO_FIELD_LABELS = {
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
	contrato_isento: "contrato_isento",
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
	data_bloqueio_final_auto: "data_bloqueio_final_auto",
	data_bloqueio_inicial: "data_bloqueio_inicial",
	data_bloqueio_inicial_auto: "data_bloqueio_inicial_auto",
	data_bloqueio_periodo: "data_bloqueio_periodo",
	data_bloqueio_periodo_auto: "data_bloqueio_periodo_auto",
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
	tipo_data_bloqueio_auto: "tipo_data_bloqueio_auto",
	tipo_data_bloqueio_manual: "tipo_data_bloqueio_manual",
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
