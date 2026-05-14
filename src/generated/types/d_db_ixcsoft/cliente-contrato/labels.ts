/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATO_FIELD_LABELS = {
	agrupar_financeiro_contrato: "agrupar_financeiro_contrato",
	alerta_contrato: "alerta_contrato",
	apartamento: "apartamento",
	aplica_desconto_tempo_bloqueio: "aplica_desconto_tempo_bloqueio",
	aplicar_desconto_tempo_bloqueio: "aplicar_desconto_tempo_bloqueio",
	assinatura_digital: "assinatura_digital",
	ativacao_numero_parcelas: "ativacao_numero_parcelas",
	ativacao_valor_parcela: "ativacao_valor_parcela",
	ativacao_vencimentos: "ativacao_vencimentos",
	ativo_summit: "ativo_summit",
	avalista_1: "avalista_1",
	avalista_2: "avalista_2",
	aviso_atraso: "aviso_atraso",
	bairro: "bairro",
	base_geracao_tipo_doc: "base_geracao_tipo_doc",
	bloco: "bloco",
	bloqueio_automatico: "bloqueio_automatico",
	cc_previsao: "cc_previsao",
	cep: "cep",
	chave_pix: "chave_pix",
	cidade: "cidade",
	comissao: "comissao",
	complemento: "complemento",
	concorrente_mot_adicional: "concorrente_mot_adicional",
	condicao_pagamento_primeira_fat: "condicao_pagamento_primeira_fat",
	contato_assinatura_digital: "contato_assinatura_digital",
	contrato: "contrato",
	contrato_suspenso: "contrato_suspenso",
	credit_card_recorrente_bandeira_cartao:
		"credit_card_recorrente_bandeira_cartao",
	credit_card_recorrente_carteira_antiga:
		"credit_card_recorrente_carteira_antiga",
	credit_card_recorrente_dv_cartao: "credit_card_recorrente_dv_cartao",
	credit_card_recorrente_token: "credit_card_recorrente_token",
	data: "data",
	data_acesso_desativado: "data_acesso_desativado",
	data_assinatura: "data_assinatura",
	data_ativacao: "data_ativacao",
	data_cadastro_sistema: "data_cadastro_sistema",
	data_cancelamento: "data_cancelamento",
	data_desistencia: "data_desistencia",
	data_expiracao: "data_expiracao",
	data_final_suspensao: "data_final_suspensao",
	data_inicial_suspensao: "data_inicial_suspensao",
	data_negativacao: "data_negativacao",
	data_renovacao: "data_renovacao",
	data_retomada_contrato: "data_retomada_contrato",
	data_validada: "data_validada",
	data_validade: "data_validade",
	desbloqueio_confianca: "desbloqueio_confianca",
	desbloqueio_confianca_ativo: "desbloqueio_confianca_ativo",
	desconto_fidelidade: "desconto_fidelidade",
	descricao_aux_plano_venda: "descricao_aux_plano_venda",
	document_photo: "document_photo",
	dt_retorno_desb_conf: "dt_retorno_desb_conf",
	dt_ult_ativacao: "dt_ult_ativacao",
	dt_ult_bloq_auto: "dt_ult_bloq_auto",
	dt_ult_bloq_manual: "dt_ult_bloq_manual",
	dt_ult_des_bloq_conf: "dt_ult_des_bloq_conf",
	dt_ult_desativacao: "dt_ult_desativacao",
	dt_ult_desb_conf: "dt_ult_desb_conf",
	dt_ult_desbloq_auto: "dt_ult_desbloq_auto",
	dt_ult_desbloq_manual: "dt_ult_desbloq_manual",
	dt_ult_desiste: "dt_ult_desiste",
	dt_ult_finan_atraso: "dt_ult_finan_atraso",
	dt_ult_inativacao: "dt_ult_inativacao",
	dt_ult_liberacao_susp_parc: "dt_ult_liberacao_susp_parc",
	dt_ult_liberacao_temporaria: "dt_ult_liberacao_temporaria",
	dt_utl_negativacao: "dt_utl_negativacao",
	email_assinatura_digital: "email_assinatura_digital",
	email_cobranca: "email_cobranca",
	endereco: "endereco",
	endereco_padrao_cliente: "endereco_padrao_cliente",
	estrato_social_col: "estrato_social_col",
	f_cidade: "Cidade Contrato",
	f_klf0fxs3rds: "NAO_USAR",
	f_locais: "Locais",
	f_mu9iid5odsa: "NC O.S.",
	f_nc_cliente: "NC Cliente",
	f_plano: "Plano",
	f_pmjtafiolpi: "NC Login",
	f_responsavel: "Responsável",
	f_sb68783cnok: "NC Produtos",
	f_x16njdir5g1: "NC IP Fixo",
	fidelidade: "fidelidade",
	fim_vigencia_summit: "fim_vigencia_summit",
	financeiro_migrado: "financeiro_migrado",
	gerar_finan_assin_digital_contrato: "gerar_finan_assin_digital_contrato",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cidade: "id_cidade",
	id_cliente: "id_cliente",
	id_cond_pag_ativ: "id_cond_pag_ativ",
	id_condominio: "id_condominio",
	id_contrato_principal: "id_contrato_principal",
	id_crm_negociacoes: "id_crm_negociacoes",
	id_filial: "id_filial",
	id_indexador_reajuste: "id_indexador_reajuste",
	id_instalador: "id_instalador",
	id_modelo: "id_modelo",
	id_motivo_inclusao: "id_motivo_inclusao",
	id_motivo_negativacao: "id_motivo_negativacao",
	id_notifica_massa: "id_notifica_massa",
	id_produto_ativ: "id_produto_ativ",
	id_responsavel: "id_responsavel",
	id_responsavel_cancelamento: "id_responsavel_cancelamento",
	id_responsavel_desistencia: "id_responsavel_desistencia",
	id_responsavel_negativacao: "id_responsavel_negativacao",
	id_tipo_contrato: "id_tipo_contrato",
	id_tipo_doc_ativ: "id_tipo_doc_ativ",
	id_tipo_documento: "id_tipo_documento",
	id_vd_contrato: "id_vd_contrato",
	id_vendedor: "id_vendedor",
	id_vendedor_ativ: "id_vendedor_ativ",
	id_vindi: "id_vindi",
	ids_contratos_recorrencia: "ids_contratos_recorrencia",
	imp_bkp: "imp_bkp",
	imp_carteira: "imp_carteira",
	imp_final: "imp_final",
	imp_importacao: "imp_importacao",
	imp_inicial: "imp_inicial",
	imp_motivo: "imp_motivo",
	imp_obs: "imp_obs",
	imp_realizado: "imp_realizado",
	imp_rede: "imp_rede",
	imp_status: "imp_status",
	imp_treinamento: "imp_treinamento",
	indicacao_contrato_id: "indicacao_contrato_id",
	inicio_vigencia_summit: "inicio_vigencia_summit",
	integracao_assinatura_digital: "integracao_assinatura_digital",
	isentar_contrato: "isentar_contrato",
	latitude: "latitude",
	liberacao_bloqueio_manual: "liberacao_bloqueio_manual",
	liberacao_suspensao_parcial: "liberacao_suspensao_parcial",
	longitude: "longitude",
	lote: "lote",
	moeda: "moeda",
	motivo_adicional: "motivo_adicional",
	motivo_cancelamento: "motivo_cancelamento",
	motivo_desistencia: "motivo_desistencia",
	motivo_inclusao: "motivo_inclusao",
	motivo_restri_auto_libera_parc: "motivo_restri_auto_libera_parc",
	motivo_restricao_auto_desbloq: "motivo_restricao_auto_desbloq",
	nao_avisar_ate: "nao_avisar_ate",
	nao_bloquear_ate: "nao_bloquear_ate",
	nao_susp_parc_ate: "nao_susp_parc_ate",
	nf_info_adicionais: "nf_info_adicionais",
	num_parcelas_atraso: "num_parcelas_atraso",
	numero: "numero",
	numero_antigo: "numero_antigo",
	obs: "obs",
	obs_cancelamento: "obs_cancelamento",
	obs_contrato: "obs_contrato",
	obs_desistencia: "obs_desistencia",
	obs_negativacao: "obs_negativacao",
	origem_cancelamento: "origem_cancelamento",
	pago_ate_data: "pago_ate_data",
	pix_recorrente_id_carteira_cobranca: "pix_recorrente_id_carteira_cobranca",
	portabilidade_summit: "portabilidade_summit",
	protocolo_negativacao: "protocolo_negativacao",
	range_final_summit: "range_final_summit",
	range_inicial_summit: "range_inicial_summit",
	rec_bandeira: "rec_bandeira",
	rec_cartao: "rec_cartao",
	rec_token: "rec_token",
	referencia: "referencia",
	renovacao_automatica: "renovacao_automatica",
	restricao_auto_desbloqueio: "restricao_auto_desbloqueio",
	restricao_auto_libera_susp_parcial: "restricao_auto_libera_susp_parcial",
	selfie_photo: "selfie_photo",
	situacao_financeira_contrato: "situacao_financeira_contrato",
	status: "status",
	status_internet: "status_internet",
	status_recorrencia: "status_recorrencia",
	status_velocidade: "status_velocidade",
	taxa_improdutiva: "taxa_improdutiva",
	taxa_instalacao: "taxa_instalacao",
	tel_franquia_prefix: "tel_franquia_prefix",
	tel_franquia_segundos: "tel_franquia_segundos",
	tempo_permanencia: "tempo_permanencia",
	testemunha_assinatura_digital: "testemunha_assinatura_digital",
	tipo: "tipo",
	tipo_cobranca: "tipo_cobranca",
	tipo_doc_opc: "tipo_doc_opc",
	tipo_doc_opc2: "tipo_doc_opc2",
	tipo_doc_opc3: "tipo_doc_opc3",
	tipo_doc_opc4: "tipo_doc_opc4",
	tipo_localidade: "tipo_localidade",
	tipo_produtos_plano: "tipo_produtos_plano",
	token_assinatura_digital: "token_assinatura_digital",
	ultima_atualizacao: "ultima_atualizacao",
	updated_responsible_seller: "updated_responsible_seller",
	url_assinatura_digital: "url_assinatura_digital",
	utilizando_auto_libera_susp_parc: "utilizando_auto_libera_susp_parc",
	valor_unitario: "valor_unitario",
} as const;

export const CLIENTECONTRATO_AGRUPARFINANCEIROCONTRATO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_APLICADESCONTOTEMPOBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_APLICARDESCONTOTEMPOBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_ASSINATURADIGITAL_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_ATIVOSUMMIT_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_AVISOATRASO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_BASEGERACAOTIPODOC_LABELS = {
	OPC: "OPC",
	PROD: "PROD",
	P: "P",
} as const;

export const CLIENTECONTRATO_BLOQUEIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_CCPREVISAO_LABELS = {
	P: "P",
	N: "N",
	S: "S",
	M: "M",
} as const;

export const CLIENTECONTRATO_CONTRATOSUSPENSO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCA_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCAATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_DOCUMENTPHOTO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_ENDERECOPADRAOCLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_ESTRATOSOCIALCOL_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
} as const;

export const CLIENTECONTRATO_FINANCEIROMIGRADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_GERARFINANASSINDIGITALCONTRATO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_IMPBKP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_IMPCARTEIRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_IMPIMPORTACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_IMPREALIZADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_IMPREDE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_IMPSTATUS_LABELS = {
	F: "F",
	A: "A",
} as const;

export const CLIENTECONTRATO_IMPTREINAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_INTEGRACAOASSINATURADIGITAL_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_ISENTARCONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_LIBERACAOBLOQUEIOMANUAL_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_LIBERACAOSUSPENSAOPARCIAL_LABELS = {
	H: "H",
	D: "D",
	P: "P",
} as const;

export const CLIENTECONTRATO_MOTIVOINCLUSAO_LABELS = {
	I: "I",
	U: "U",
	D: "D",
	M: "M",
	T: "T",
	L: "L",
	N: "N",
	R: "R",
} as const;

export const CLIENTECONTRATO_ORIGEMCANCELAMENTO_LABELS = {
	M: "M",
	A: "A",
} as const;

export const CLIENTECONTRATO_PORTABILIDADESUMMIT_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_RENOVACAOAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_RESTRICAOAUTODESBLOQUEIO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_RESTRICAOAUTOLIBERASUSPPARCIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_SELFIEPHOTO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTECONTRATO_SITUACAOFINANCEIRACONTRATO_LABELS = {
	R: "Regular",
	IR: "Irregular",
	I: "Inadimplente",
} as const;

export const CLIENTECONTRATO_STATUS_LABELS = {
	A: "Ativo",
	I: "Cancelado",
	P: "Pré-Contrato",
	N: "Negativado",
	D: "Desistiu",
} as const;

export const CLIENTECONTRATO_STATUSINTERNET_LABELS = {
	A: "Ativo",
	D: "Desativado",
	CM: "Bloqueio Manual",
	CA: "Bloqueio Automático",
	CE: "Financeiro Atraso",
	FA: "Financeiro Atraso",
	AA: "Aguardando Assinatura",
} as const;

export const CLIENTECONTRATO_STATUSRECORRENCIA_LABELS = {
	AGUARDANDO_APROVACAO: "AGUARDANDO_APROVACAO",
	APROVADA: "APROVADA",
	REJEITADA: "REJEITADA",
	EXPIRADA: "EXPIRADA",
	CANCELADA: "CANCELADA",
} as const;

export const CLIENTECONTRATO_TIPO_LABELS = {
	I: "Internet",
	T: "Telefonia",
	S: "TV por Assinatura",
	SVA: "SVA",
} as const;

export const CLIENTECONTRATO_TIPOCOBRANCA_LABELS = {
	P: "Pré-pago",
	I: "Iteração",
	E: "Especial",
} as const;

export const CLIENTECONTRATO_TIPOLOCALIDADE_LABELS = {
	R: "Rural",
	U: "Urbano",
} as const;

export const CLIENTECONTRATO_TIPOPRODUTOSPLANO_LABELS = {
	P: "P",
	PLA: "PLA",
	PRO: "PRO",
} as const;

export const CLIENTECONTRATO_UPDATEDRESPONSIBLESELLER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTECONTRATO_UTILIZANDOAUTOLIBERASUSPPARC_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contratoAgruparFinanceiroContratoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "agrupar_financeiro_contrato: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoAplicaDescontoTempoBloqueioSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "aplica_desconto_tempo_bloqueio: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoAplicarDescontoTempoBloqueioSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "aplicar_desconto_tempo_bloqueio: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoAssinaturaDigitalSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "assinatura_digital: valores válidos são [S, N, P]",
	}),
});

export const cliente_contratoAtivoSummitSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo_summit: valores válidos são [S, N]" }),
});

export const cliente_contratoAvisoAtrasoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aviso_atraso: valores válidos são [S, N]" }),
});

export const cliente_contratoBaseGeracaoTipoDocSchema = z.enum(
	["OPC", "PROD", "P"],
	{
		error: () => ({
			message: "base_geracao_tipo_doc: valores válidos são [OPC, PROD, P]",
		}),
	},
);

export const cliente_contratoBloqueioAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "bloqueio_automatico: valores válidos são [S, N]" }),
});

export const cliente_contratoCcPrevisaoSchema = z.enum(["P", "N", "S", "M"], {
	error: () => ({ message: "cc_previsao: valores válidos são [P, N, S, M]" }),
});

export const cliente_contratoContratoSuspensoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "contrato_suspenso: valores válidos são [S, N]" }),
});

export const cliente_contratoDesbloqueioConfiancaSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "desbloqueio_confianca: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoDesbloqueioConfiancaAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "desbloqueio_confianca_ativo: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contratoDocumentPhotoSchema = z.enum(["S", "N", "P"], {
	error: () => ({ message: "document_photo: valores válidos são [S, N, P]" }),
});

export const cliente_contratoEnderecoPadraoClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "endereco_padrao_cliente: valores válidos são [S, N]",
	}),
});

export const cliente_contratoEstratoSocialColSchema = z.enum(
	["1", "2", "3", "4", "5", "6"],
	{
		error: () => ({
			message: "estrato_social_col: valores válidos são [1, 2, 3, 4, 5, 6]",
		}),
	},
);

export const cliente_contratoFinanceiroMigradoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "financeiro_migrado: valores válidos são [S, N]" }),
});

export const cliente_contratoGerarFinanAssinDigitalContratoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"gerar_finan_assin_digital_contrato: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoImpBkpSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_bkp: valores válidos são [S, N]" }),
});

export const cliente_contratoImpCarteiraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_carteira: valores válidos são [S, N]" }),
});

export const cliente_contratoImpImportacaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_importacao: valores válidos são [S, N]" }),
});

export const cliente_contratoImpRealizadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_realizado: valores válidos são [S, N]" }),
});

export const cliente_contratoImpRedeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_rede: valores válidos são [S, N]" }),
});

export const cliente_contratoImpStatusSchema = z.enum(["F", "A"], {
	error: () => ({ message: "imp_status: valores válidos são [F, A]" }),
});

export const cliente_contratoImpTreinamentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_treinamento: valores válidos são [S, N]" }),
});

export const cliente_contratoIntegracaoAssinaturaDigitalSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "integracao_assinatura_digital: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoIsentarContratoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "isentar_contrato: valores válidos são [S, N]" }),
});

export const cliente_contratoLiberacaoBloqueioManualSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message: "liberacao_bloqueio_manual: valores válidos são [S, N, P]",
		}),
	},
);

export const cliente_contratoLiberacaoSuspensaoParcialSchema = z.enum(
	["H", "D", "P"],
	{
		error: () => ({
			message: "liberacao_suspensao_parcial: valores válidos são [H, D, P]",
		}),
	},
);

export const cliente_contratoMotivoInclusaoSchema = z.enum(
	["I", "U", "D", "M", "T", "L", "N", "R"],
	{
		error: () => ({
			message: "motivo_inclusao: valores válidos são [I, U, D, M, T, L, N, R]",
		}),
	},
);

export const cliente_contratoOrigemCancelamentoSchema = z.enum(["M", "A"], {
	error: () => ({ message: "origem_cancelamento: valores válidos são [M, A]" }),
});

export const cliente_contratoPortabilidadeSummitSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "portabilidade_summit: valores válidos são [S, N]",
	}),
});

export const cliente_contratoRenovacaoAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "renovacao_automatica: valores válidos são [S, N]",
	}),
});

export const cliente_contratoRestricaoAutoDesbloqueioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "restricao_auto_desbloqueio: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contratoRestricaoAutoLiberaSuspParcialSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "restricao_auto_libera_susp_parcial: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contratoSelfiePhotoSchema = z.enum(["S", "N", "P"], {
	error: () => ({ message: "selfie_photo: valores válidos são [S, N, P]" }),
});

export const cliente_contratoSituacaoFinanceiraContratoSchema = z.enum(
	["R", "IR", "I"],
	{
		error: () => ({
			message: "situacao_financeira_contrato: valores válidos são [R, IR, I]",
		}),
	},
);

export const cliente_contratoStatusSchema = z.enum(["A", "I", "P", "N", "D"], {
	error: () => ({
		message:
			"status: valores válidos são [Ativo, Cancelado, Pré-Contrato, Negativado, Desistiu]",
	}),
});

export const cliente_contratoStatusInternetSchema = z.enum(
	["A", "D", "CM", "CA", "CE", "FA", "AA"],
	{
		error: () => ({
			message:
				"status_internet: valores válidos são [Ativo, Desativado, Bloqueio Manual, Bloqueio Automático, Financeiro Atraso, Financeiro Atraso, Aguardando Assinatura]",
		}),
	},
);

export const cliente_contratoStatusRecorrenciaSchema = z.enum(
	["AGUARDANDO_APROVACAO", "APROVADA", "REJEITADA", "EXPIRADA", "CANCELADA"],
	{
		error: () => ({
			message:
				"status_recorrencia: valores válidos são [AGUARDANDO_APROVACAO, APROVADA, REJEITADA, EXPIRADA, CANCELADA]",
		}),
	},
);

export const cliente_contratoTipoSchema = z.enum(["I", "T", "S", "SVA"], {
	error: () => ({ message: "tipo: valores válidos são [I, T, S, SVA]" }),
});

export const cliente_contratoTipoCobrancaSchema = z.enum(["P", "I", "E"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [P, I, E]" }),
});

export const cliente_contratoTipoLocalidadeSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_localidade: valores válidos são [R, U]" }),
});

export const cliente_contratoTipoProdutosPlanoSchema = z.enum(
	["P", "PLA", "PRO"],
	{
		error: () => ({
			message: "tipo_produtos_plano: valores válidos são [P, PLA, PRO]",
		}),
	},
);

export const cliente_contratoUpdatedResponsibleSellerSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "updated_responsible_seller: valores válidos são [S, N]",
		}),
	},
);

export const cliente_contratoUtilizandoAutoLiberaSuspParcSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "utilizando_auto_libera_susp_parc: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoAgruparFinanceiroContrato = z.infer<
	typeof cliente_contratoAgruparFinanceiroContratoSchema
>;

export type ClienteContratoAplicaDescontoTempoBloqueio = z.infer<
	typeof cliente_contratoAplicaDescontoTempoBloqueioSchema
>;

export type ClienteContratoAplicarDescontoTempoBloqueio = z.infer<
	typeof cliente_contratoAplicarDescontoTempoBloqueioSchema
>;

export type ClienteContratoAssinaturaDigital = z.infer<
	typeof cliente_contratoAssinaturaDigitalSchema
>;

export type ClienteContratoAtivoSummit = z.infer<
	typeof cliente_contratoAtivoSummitSchema
>;

export type ClienteContratoAvisoAtraso = z.infer<
	typeof cliente_contratoAvisoAtrasoSchema
>;

export type ClienteContratoBaseGeracaoTipoDoc = z.infer<
	typeof cliente_contratoBaseGeracaoTipoDocSchema
>;

export type ClienteContratoBloqueioAutomatico = z.infer<
	typeof cliente_contratoBloqueioAutomaticoSchema
>;

export type ClienteContratoCcPrevisao = z.infer<
	typeof cliente_contratoCcPrevisaoSchema
>;

export type ClienteContratoContratoSuspenso = z.infer<
	typeof cliente_contratoContratoSuspensoSchema
>;

export type ClienteContratoDesbloqueioConfianca = z.infer<
	typeof cliente_contratoDesbloqueioConfiancaSchema
>;

export type ClienteContratoDesbloqueioConfiancaAtivo = z.infer<
	typeof cliente_contratoDesbloqueioConfiancaAtivoSchema
>;

export type ClienteContratoDocumentPhoto = z.infer<
	typeof cliente_contratoDocumentPhotoSchema
>;

export type ClienteContratoEnderecoPadraoCliente = z.infer<
	typeof cliente_contratoEnderecoPadraoClienteSchema
>;

export type ClienteContratoEstratoSocialCol = z.infer<
	typeof cliente_contratoEstratoSocialColSchema
>;

export type ClienteContratoFinanceiroMigrado = z.infer<
	typeof cliente_contratoFinanceiroMigradoSchema
>;

export type ClienteContratoGerarFinanAssinDigitalContrato = z.infer<
	typeof cliente_contratoGerarFinanAssinDigitalContratoSchema
>;

export type ClienteContratoImpBkp = z.infer<
	typeof cliente_contratoImpBkpSchema
>;

export type ClienteContratoImpCarteira = z.infer<
	typeof cliente_contratoImpCarteiraSchema
>;

export type ClienteContratoImpImportacao = z.infer<
	typeof cliente_contratoImpImportacaoSchema
>;

export type ClienteContratoImpRealizado = z.infer<
	typeof cliente_contratoImpRealizadoSchema
>;

export type ClienteContratoImpRede = z.infer<
	typeof cliente_contratoImpRedeSchema
>;

export type ClienteContratoImpStatus = z.infer<
	typeof cliente_contratoImpStatusSchema
>;

export type ClienteContratoImpTreinamento = z.infer<
	typeof cliente_contratoImpTreinamentoSchema
>;

export type ClienteContratoIntegracaoAssinaturaDigital = z.infer<
	typeof cliente_contratoIntegracaoAssinaturaDigitalSchema
>;

export type ClienteContratoIsentarContrato = z.infer<
	typeof cliente_contratoIsentarContratoSchema
>;

export type ClienteContratoLiberacaoBloqueioManual = z.infer<
	typeof cliente_contratoLiberacaoBloqueioManualSchema
>;

export type ClienteContratoLiberacaoSuspensaoParcial = z.infer<
	typeof cliente_contratoLiberacaoSuspensaoParcialSchema
>;

export type ClienteContratoMotivoInclusao = z.infer<
	typeof cliente_contratoMotivoInclusaoSchema
>;

export type ClienteContratoOrigemCancelamento = z.infer<
	typeof cliente_contratoOrigemCancelamentoSchema
>;

export type ClienteContratoPortabilidadeSummit = z.infer<
	typeof cliente_contratoPortabilidadeSummitSchema
>;

export type ClienteContratoRenovacaoAutomatica = z.infer<
	typeof cliente_contratoRenovacaoAutomaticaSchema
>;

export type ClienteContratoRestricaoAutoDesbloqueio = z.infer<
	typeof cliente_contratoRestricaoAutoDesbloqueioSchema
>;

export type ClienteContratoRestricaoAutoLiberaSuspParcial = z.infer<
	typeof cliente_contratoRestricaoAutoLiberaSuspParcialSchema
>;

export type ClienteContratoSelfiePhoto = z.infer<
	typeof cliente_contratoSelfiePhotoSchema
>;

export type ClienteContratoSituacaoFinanceiraContrato = z.infer<
	typeof cliente_contratoSituacaoFinanceiraContratoSchema
>;

export type ClienteContratoStatus = z.infer<
	typeof cliente_contratoStatusSchema
>;

export type ClienteContratoStatusInternet = z.infer<
	typeof cliente_contratoStatusInternetSchema
>;

export type ClienteContratoStatusRecorrencia = z.infer<
	typeof cliente_contratoStatusRecorrenciaSchema
>;

export type ClienteContratoTipo = z.infer<typeof cliente_contratoTipoSchema>;

export type ClienteContratoTipoCobranca = z.infer<
	typeof cliente_contratoTipoCobrancaSchema
>;

export type ClienteContratoTipoLocalidade = z.infer<
	typeof cliente_contratoTipoLocalidadeSchema
>;

export type ClienteContratoTipoProdutosPlano = z.infer<
	typeof cliente_contratoTipoProdutosPlanoSchema
>;

export type ClienteContratoUpdatedResponsibleSeller = z.infer<
	typeof cliente_contratoUpdatedResponsibleSellerSchema
>;

export type ClienteContratoUtilizandoAutoLiberaSuspParc = z.infer<
	typeof cliente_contratoUtilizandoAutoLiberaSuspParcSchema
>;
