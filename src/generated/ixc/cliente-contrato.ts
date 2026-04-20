/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const CLIENTE_CONTRATO_TABLE_NAME = "cliente_contrato";

export enum ClienteContratoAgruparFinanceiroContrato {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoAplicarDescontoTempoBloqueio {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoAssinaturaDigital {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoAvisoAtraso {
	S = "S",
	N = "N",
}

export enum ClienteContratoBaseGeracaoTipoDoc {
	Opc = "OPC",
	Prod = "PROD",
	P = "P",
}

export enum ClienteContratoBloqueioAutomatico {
	S = "S",
	N = "N",
}

export enum ClienteContratoCcPrevisao {
	P = "P",
	N = "N",
	S = "S",
	M = "M",
}

export enum ClienteContratoContratoRecorrencia {
	Pix = "PIX",
	Credit = "CREDIT",
	N = "N",
}

export enum ClienteContratoContratoSuspenso {
	S = "S",
	N = "N",
}

export enum ClienteContratoDesbloqueioConfianca {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoDesbloqueioConfiancaAtivo {
	S = "S",
	N = "N",
}

export enum ClienteContratoDocumentPhoto {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoEstratoSocialCol {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export enum ClienteContratoGerarFinanAssinDigitalContrato {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoImpBkp {
	S = "S",
	N = "N",
}

export enum ClienteContratoImpCarteira {
	S = "S",
	N = "N",
}

export enum ClienteContratoImpImportacao {
	S = "S",
	N = "N",
}

export enum ClienteContratoImpRealizado {
	S = "S",
	N = "N",
}

export enum ClienteContratoImpRede {
	S = "S",
	N = "N",
}

export enum ClienteContratoImpStatus {
	F = "F",
	A = "A",
}

export enum ClienteContratoImpTreinamento {
	S = "S",
	N = "N",
}

export enum ClienteContratoIntegracaoAssinaturaDigital {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoIsentarContrato {
	S = "S",
	N = "N",
}

export enum ClienteContratoLiberacaoBloqueioManual {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoLiberacaoSuspensaoParcial {
	H = "H",
	D = "D",
	P = "P",
}

export enum ClienteContratoMotivoInclusao {
	I = "I",
	U = "U",
	D = "D",
	M = "M",
	T = "T",
	L = "L",
	N = "N",
	R = "R",
}

export enum ClienteContratoOrigemCancelamento {
	M = "M",
	A = "A",
}

export enum ClienteContratoRenovacaoAutomatica {
	S = "S",
	N = "N",
}

export enum ClienteContratoRestricaoAutoDesbloqueio {
	S = "S",
	N = "N",
}

export enum ClienteContratoRestricaoAutoLiberaSuspParcial {
	S = "S",
	N = "N",
}

export enum ClienteContratoSelfiePhoto {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteContratoStatus {
	P = "P",
	A = "A",
	I = "I",
	N = "N",
	D = "D",
}

export enum ClienteContratoStatusInternet {
	A = "A",
	D = "D",
	Cm = "CM",
	Ca = "CA",
	Fa = "FA",
	Aa = "AA",
}

export enum ClienteContratoStatusRecorrencia {
	AguardandoAprovacao = "AGUARDANDO_APROVACAO",
	Aprovada = "APROVADA",
	Rejeitada = "REJEITADA",
	Expirada = "EXPIRADA",
	Cancelada = "CANCELADA",
}

export enum ClienteContratoStatusVelocidade {
	N = "N",
	R = "R",
}

export enum ClienteContratoTipo {
	I = "I",
	T = "T",
	S = "S",
	Sva = "SVA",
}

export enum ClienteContratoTipoCobranca {
	P = "P",
	I = "I",
	E = "E",
}

export enum ClienteContratoTipoLocalidade {
	R = "R",
	U = "U",
}

export enum ClienteContratoUtilizandoAutoLiberaSuspParc {
	S = "S",
	N = "N",
}

export interface ClienteContrato {
	id: number;
	agrupar_financeiro_contrato: ClienteContratoAgruparFinanceiroContrato;
	alerta_contrato: string;
	apartamento: string;
	aplica_desconto_tempo_bloqueio: string;
	aplicar_desconto_tempo_bloqueio: ClienteContratoAplicarDescontoTempoBloqueio;
	assinatura_digital: ClienteContratoAssinaturaDigital;
	ativacao_numero_parcelas: string;
	ativacao_valor_parcela: string;
	ativacao_vencimentos: string;
	ativo_summit: string;
	avalista_1: string;
	avalista_2: string;
	aviso_atraso: ClienteContratoAvisoAtraso;
	bairro: string;
	base_geracao_tipo_doc: ClienteContratoBaseGeracaoTipoDoc;
	bloco: string;
	bloqueio_automatico: ClienteContratoBloqueioAutomatico;
	cc_previsao: ClienteContratoCcPrevisao;
	cep: string;
	chave_pix: string;
	cidade: string;
	comissao: string;
	complemento: string;
	concorrente_mot_adicional: string;
	condicao_pagamento_primeira_fat: string;
	contato_assinatura_digital: string;
	contrato: string;
	contrato_suspenso: ClienteContratoContratoSuspenso;
	credit_card_recorrente_bandeira_cartao: string;
	credit_card_recorrente_carteira_antiga: string;
	credit_card_recorrente_dv_cartao: string;
	credit_card_recorrente_token: string;
	data: string;
	data_acesso_desativado: string;
	data_assinatura: string;
	data_ativacao: string;
	data_cadastro_sistema: string;
	data_cancelamento: string;
	data_desistencia: string;
	data_expiracao: string;
	data_final_suspensao: string;
	data_inicial_suspensao: string;
	data_negativacao: string;
	data_renovacao: string;
	data_retomada_contrato: string;
	data_validada: string;
	data_validade: string;
	desbloqueio_confianca: ClienteContratoDesbloqueioConfianca;
	desbloqueio_confianca_ativo: ClienteContratoDesbloqueioConfiancaAtivo;
	desconto_fidelidade: string;
	descricao_aux_plano_venda: string;
	document_photo: ClienteContratoDocumentPhoto;
	dt_retorno_desb_conf: string;
	dt_ult_ativacao: string;
	dt_ult_bloq_auto: string;
	dt_ult_bloq_manual: string;
	dt_ult_des_bloq_conf: string;
	dt_ult_desativacao: string;
	dt_ult_desb_conf: string;
	dt_ult_desbloq_auto: string;
	dt_ult_desbloq_manual: string;
	dt_ult_desiste: string;
	dt_ult_finan_atraso: string;
	dt_ult_inativacao: string;
	dt_ult_liberacao_susp_parc: string;
	dt_ult_liberacao_temporaria: string;
	dt_utl_negativacao: string;
	email_assinatura_digital: string;
	email_cobranca: string;
	endereco: string;
	endereco_padrao_cliente: string;
	estrato_social_col: ClienteContratoEstratoSocialCol;
	fidelidade: number;
	fim_vigencia_summit: string;
	financeiro_migrado: string;
	gerar_finan_assin_digital_contrato: ClienteContratoGerarFinanAssinDigitalContrato;
	id_carteira_cobranca: number;
	id_cidade: string;
	id_cliente: number;
	id_cond_pag_ativ: string;
	id_condominio: string;
	id_contrato_principal: string;
	id_crm_negociacoes: string;
	id_filial: number;
	id_indexador_reajuste: string;
	id_instalador: string;
	id_modelo: number;
	id_motivo_inclusao: number;
	id_motivo_negativacao: string;
	id_notifica_massa: string;
	id_produto_ativ: string;
	id_responsavel: string;
	id_responsavel_cancelamento: string;
	id_responsavel_desistencia: string;
	id_responsavel_negativacao: string;
	id_tipo_contrato: number;
	id_tipo_doc_ativ: string;
	id_tipo_documento: number;
	id_vd_contrato: number;
	id_vendedor: number;
	id_vendedor_ativ: string;
	id_vindi: string;
	ids_contratos_recorrencia: string;
	imp_bkp: ClienteContratoImpBkp;
	imp_carteira: ClienteContratoImpCarteira;
	imp_final: string;
	imp_importacao: ClienteContratoImpImportacao;
	imp_inicial: string;
	imp_motivo: string;
	imp_obs: string;
	imp_realizado: ClienteContratoImpRealizado;
	imp_rede: ClienteContratoImpRede;
	imp_status: ClienteContratoImpStatus;
	imp_treinamento: ClienteContratoImpTreinamento;
	indicacao_contrato_id: number;
	inicio_vigencia_summit: string;
	integracao_assinatura_digital: ClienteContratoIntegracaoAssinaturaDigital;
	isentar_contrato: ClienteContratoIsentarContrato;
	latitude: string;
	liberacao_bloqueio_manual: ClienteContratoLiberacaoBloqueioManual;
	liberacao_suspensao_parcial: ClienteContratoLiberacaoSuspensaoParcial;
	longitude: string;
	lote: string;
	moeda: string;
	motivo_adicional: string;
	motivo_cancelamento: number;
	motivo_desistencia: string;
	motivo_inclusao: ClienteContratoMotivoInclusao;
	motivo_restri_auto_libera_parc: string;
	motivo_restricao_auto_desbloq: string;
	nao_avisar_ate: string;
	nao_bloquear_ate: string;
	nao_susp_parc_ate: string;
	nf_info_adicionais: string;
	num_parcelas_atraso: string;
	numero: string;
	numero_antigo: string;
	obs: string;
	obs_cancelamento: string;
	obs_contrato: string;
	obs_desistencia: string;
	obs_negativacao: string;
	origem_cancelamento: ClienteContratoOrigemCancelamento;
	pago_ate_data: string;
	pix_recorrente_id_carteira_cobranca: string;
	portabilidade_summit: string;
	protocolo_negativacao: string;
	range_final_summit: string;
	range_inicial_summit: string;
	rec_bandeira: string;
	rec_cartao: string;
	rec_token: string;
	referencia: string;
	renovacao_automatica: ClienteContratoRenovacaoAutomatica;
	restricao_auto_desbloqueio: ClienteContratoRestricaoAutoDesbloqueio;
	restricao_auto_libera_susp_parcial: ClienteContratoRestricaoAutoLiberaSuspParcial;
	selfie_photo: ClienteContratoSelfiePhoto;
	situacao_financeira_contrato: string;
	status: ClienteContratoStatus;
	status_internet: ClienteContratoStatusInternet;
	status_recorrencia: ClienteContratoStatusRecorrencia;
	status_velocidade: ClienteContratoStatusVelocidade;
	taxa_improdutiva: string;
	taxa_instalacao: string;
	tel_franquia_prefix: string;
	tel_franquia_segundos: string;
	tempo_permanencia: string;
	testemunha_assinatura_digital: string;
	tipo: ClienteContratoTipo;
	tipo_cobranca: ClienteContratoTipoCobranca;
	tipo_doc_opc: number;
	tipo_doc_opc2: number;
	tipo_doc_opc3: string;
	tipo_doc_opc4: string;
	tipo_localidade: ClienteContratoTipoLocalidade;
	tipo_produtos_plano: string;
	token_assinatura_digital: string;
	ultima_atualizacao: string;
	updated_responsible_seller: string;
	url_assinatura_digital: string;
	utilizando_auto_libera_susp_parc: ClienteContratoUtilizandoAutoLiberaSuspParc;
	valor_unitario: string;
}

export type ClienteContratoRelations = Record<string, never>;

export type ClienteContratoRelationKey = keyof ClienteContratoRelations;

export const CLIENTECONTRATO_AGRUPARFINANCEIROCONTRATO_LABELS: Record<
	ClienteContratoAgruparFinanceiroContrato,
	string
> = {
	[ClienteContratoAgruparFinanceiroContrato.S]: "Sim",
	[ClienteContratoAgruparFinanceiroContrato.N]: "Não",
	[ClienteContratoAgruparFinanceiroContrato.P]: "Padrão",
};

export const CLIENTECONTRATO_APLICARDESCONTOTEMPOBLOQUEIO_LABELS: Record<
	ClienteContratoAplicarDescontoTempoBloqueio,
	string
> = {
	[ClienteContratoAplicarDescontoTempoBloqueio.S]: "Sim",
	[ClienteContratoAplicarDescontoTempoBloqueio.N]: "Não",
	[ClienteContratoAplicarDescontoTempoBloqueio.P]: "Padrão",
};

export const CLIENTECONTRATO_ASSINATURADIGITAL_LABELS: Record<
	ClienteContratoAssinaturaDigital,
	string
> = {
	[ClienteContratoAssinaturaDigital.S]: "Sim",
	[ClienteContratoAssinaturaDigital.N]: "Não",
	[ClienteContratoAssinaturaDigital.P]: "Padrão",
};

export const CLIENTECONTRATO_AVISOATRASO_LABELS: Record<
	ClienteContratoAvisoAtraso,
	string
> = {
	[ClienteContratoAvisoAtraso.S]: "Sim",
	[ClienteContratoAvisoAtraso.N]: "Não",
};

export const CLIENTECONTRATO_BASEGERACAOTIPODOC_LABELS: Record<
	ClienteContratoBaseGeracaoTipoDoc,
	string
> = {
	[ClienteContratoBaseGeracaoTipoDoc.Opc]: "Documento opcional do contrato",
	[ClienteContratoBaseGeracaoTipoDoc.Prod]: "Documento do produto do contrato",
	[ClienteContratoBaseGeracaoTipoDoc.P]: "Padrão",
};

export const CLIENTECONTRATO_BLOQUEIOAUTOMATICO_LABELS: Record<
	ClienteContratoBloqueioAutomatico,
	string
> = {
	[ClienteContratoBloqueioAutomatico.S]: "Sim",
	[ClienteContratoBloqueioAutomatico.N]: "Não",
};

export const CLIENTECONTRATO_CCPREVISAO_LABELS: Record<
	ClienteContratoCcPrevisao,
	string
> = {
	[ClienteContratoCcPrevisao.P]: "Configuração padrão (Parâmetros)",
	[ClienteContratoCcPrevisao.N]: "Competência (Previsão não)",
	[ClienteContratoCcPrevisao.S]: "Caixa (Previsão sim)",
	[ClienteContratoCcPrevisao.M]: "Manual",
};

export const CLIENTECONTRATO_CONTRATORECORRENCIA_LABELS: Record<
	ClienteContratoContratoRecorrencia,
	string
> = {
	[ClienteContratoContratoRecorrencia.Pix]: "Pix automático",
	[ClienteContratoContratoRecorrencia.Credit]: "Cartão de crédito",
	[ClienteContratoContratoRecorrencia.N]: "Sem recorrência ativa",
};

export const CLIENTECONTRATO_CONTRATOSUSPENSO_LABELS: Record<
	ClienteContratoContratoSuspenso,
	string
> = {
	[ClienteContratoContratoSuspenso.S]: "Sim",
	[ClienteContratoContratoSuspenso.N]: "Não",
};

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCA_LABELS: Record<
	ClienteContratoDesbloqueioConfianca,
	string
> = {
	[ClienteContratoDesbloqueioConfianca.S]: "Habilitado",
	[ClienteContratoDesbloqueioConfianca.N]: "Desabilitado",
	[ClienteContratoDesbloqueioConfianca.P]: "Padrão",
};

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCAATIVO_LABELS: Record<
	ClienteContratoDesbloqueioConfiancaAtivo,
	string
> = {
	[ClienteContratoDesbloqueioConfiancaAtivo.S]: "Sim",
	[ClienteContratoDesbloqueioConfiancaAtivo.N]: "Não",
};

export const CLIENTECONTRATO_DOCUMENTPHOTO_LABELS: Record<
	ClienteContratoDocumentPhoto,
	string
> = {
	[ClienteContratoDocumentPhoto.S]: "Sim",
	[ClienteContratoDocumentPhoto.N]: "Não",
	[ClienteContratoDocumentPhoto.P]: "Padrão",
};

export const CLIENTECONTRATO_ESTRATOSOCIALCOL_LABELS: Record<
	ClienteContratoEstratoSocialCol,
	string
> = {
	[ClienteContratoEstratoSocialCol.Value1]: "1",
	[ClienteContratoEstratoSocialCol.Value2]: "2",
	[ClienteContratoEstratoSocialCol.Value3]: "3",
	[ClienteContratoEstratoSocialCol.Value4]: "4",
	[ClienteContratoEstratoSocialCol.Value5]: "5",
	[ClienteContratoEstratoSocialCol.Value6]: "6",
};

export const CLIENTECONTRATO_GERARFINANASSINDIGITALCONTRATO_LABELS: Record<
	ClienteContratoGerarFinanAssinDigitalContrato,
	string
> = {
	[ClienteContratoGerarFinanAssinDigitalContrato.S]: "Sim",
	[ClienteContratoGerarFinanAssinDigitalContrato.N]: "Não",
	[ClienteContratoGerarFinanAssinDigitalContrato.P]: "Padrão",
};

export const CLIENTECONTRATO_IMPBKP_LABELS: Record<
	ClienteContratoImpBkp,
	string
> = {
	[ClienteContratoImpBkp.S]: "Realizado",
	[ClienteContratoImpBkp.N]: "Em Andamento",
};

export const CLIENTECONTRATO_IMPCARTEIRA_LABELS: Record<
	ClienteContratoImpCarteira,
	string
> = {
	[ClienteContratoImpCarteira.S]: "Realizada",
	[ClienteContratoImpCarteira.N]: "Em Andamento",
};

export const CLIENTECONTRATO_IMPIMPORTACAO_LABELS: Record<
	ClienteContratoImpImportacao,
	string
> = {
	[ClienteContratoImpImportacao.S]: "Realizada",
	[ClienteContratoImpImportacao.N]: "Em Andamento",
};

export const CLIENTECONTRATO_IMPREALIZADO_LABELS: Record<
	ClienteContratoImpRealizado,
	string
> = {
	[ClienteContratoImpRealizado.S]: "Sim",
	[ClienteContratoImpRealizado.N]: "Não",
};

export const CLIENTECONTRATO_IMPREDE_LABELS: Record<
	ClienteContratoImpRede,
	string
> = {
	[ClienteContratoImpRede.S]: "Realizada",
	[ClienteContratoImpRede.N]: "Em Andamento",
};

export const CLIENTECONTRATO_IMPSTATUS_LABELS: Record<
	ClienteContratoImpStatus,
	string
> = {
	[ClienteContratoImpStatus.F]: "Finalizada",
	[ClienteContratoImpStatus.A]: "Em Andamento",
};

export const CLIENTECONTRATO_IMPTREINAMENTO_LABELS: Record<
	ClienteContratoImpTreinamento,
	string
> = {
	[ClienteContratoImpTreinamento.S]: "Realizado",
	[ClienteContratoImpTreinamento.N]: "Em Andamento",
};

export const CLIENTECONTRATO_INTEGRACAOASSINATURADIGITAL_LABELS: Record<
	ClienteContratoIntegracaoAssinaturaDigital,
	string
> = {
	[ClienteContratoIntegracaoAssinaturaDigital.S]: "Sim",
	[ClienteContratoIntegracaoAssinaturaDigital.N]: "Não",
	[ClienteContratoIntegracaoAssinaturaDigital.P]: "Padrão",
};

export const CLIENTECONTRATO_ISENTARCONTRATO_LABELS: Record<
	ClienteContratoIsentarContrato,
	string
> = {
	[ClienteContratoIsentarContrato.S]: "Sim",
	[ClienteContratoIsentarContrato.N]: "Não",
};

export const CLIENTECONTRATO_LIBERACAOBLOQUEIOMANUAL_LABELS: Record<
	ClienteContratoLiberacaoBloqueioManual,
	string
> = {
	[ClienteContratoLiberacaoBloqueioManual.S]: "Sim",
	[ClienteContratoLiberacaoBloqueioManual.N]: "Não",
	[ClienteContratoLiberacaoBloqueioManual.P]: "Padrão",
};

export const CLIENTECONTRATO_LIBERACAOSUSPENSAOPARCIAL_LABELS: Record<
	ClienteContratoLiberacaoSuspensaoParcial,
	string
> = {
	[ClienteContratoLiberacaoSuspensaoParcial.H]: "Habilitado",
	[ClienteContratoLiberacaoSuspensaoParcial.D]: "Desabilitado",
	[ClienteContratoLiberacaoSuspensaoParcial.P]: "Padrão",
};

export const CLIENTECONTRATO_MOTIVOINCLUSAO_LABELS: Record<
	ClienteContratoMotivoInclusao,
	string
> = {
	[ClienteContratoMotivoInclusao.I]: "Instalação",
	[ClienteContratoMotivoInclusao.U]: "Upgrade",
	[ClienteContratoMotivoInclusao.D]: "Downgrade",
	[ClienteContratoMotivoInclusao.M]: "Mudança de Endereço",
	[ClienteContratoMotivoInclusao.T]: "Mudança de Tecnologia",
	[ClienteContratoMotivoInclusao.L]: "Mudança de titularidade",
	[ClienteContratoMotivoInclusao.N]: "Negociação",
	[ClienteContratoMotivoInclusao.R]: "Reativação",
};

export const CLIENTECONTRATO_ORIGEMCANCELAMENTO_LABELS: Record<
	ClienteContratoOrigemCancelamento,
	string
> = {
	[ClienteContratoOrigemCancelamento.M]: "Manual",
	[ClienteContratoOrigemCancelamento.A]: "Automático",
};

export const CLIENTECONTRATO_RENOVACAOAUTOMATICA_LABELS: Record<
	ClienteContratoRenovacaoAutomatica,
	string
> = {
	[ClienteContratoRenovacaoAutomatica.S]: "Sim",
	[ClienteContratoRenovacaoAutomatica.N]: "Não",
};

export const CLIENTECONTRATO_RESTRICAOAUTODESBLOQUEIO_LABELS: Record<
	ClienteContratoRestricaoAutoDesbloqueio,
	string
> = {
	[ClienteContratoRestricaoAutoDesbloqueio.S]: "Sim",
	[ClienteContratoRestricaoAutoDesbloqueio.N]: "Não",
};

export const CLIENTECONTRATO_RESTRICAOAUTOLIBERASUSPPARCIAL_LABELS: Record<
	ClienteContratoRestricaoAutoLiberaSuspParcial,
	string
> = {
	[ClienteContratoRestricaoAutoLiberaSuspParcial.S]: "Sim",
	[ClienteContratoRestricaoAutoLiberaSuspParcial.N]: "Não",
};

export const CLIENTECONTRATO_SELFIEPHOTO_LABELS: Record<
	ClienteContratoSelfiePhoto,
	string
> = {
	[ClienteContratoSelfiePhoto.S]: "Sim",
	[ClienteContratoSelfiePhoto.N]: "Não",
	[ClienteContratoSelfiePhoto.P]: "Padrão",
};

export const CLIENTECONTRATO_STATUS_LABELS: Record<
	ClienteContratoStatus,
	string
> = {
	[ClienteContratoStatus.P]: "Pré-contrato",
	[ClienteContratoStatus.A]: "Ativo",
	[ClienteContratoStatus.I]: "Inativo",
	[ClienteContratoStatus.N]: "Negativado",
	[ClienteContratoStatus.D]: "Desistiu",
};

export const CLIENTECONTRATO_STATUSINTERNET_LABELS: Record<
	ClienteContratoStatusInternet,
	string
> = {
	[ClienteContratoStatusInternet.A]: "Ativo",
	[ClienteContratoStatusInternet.D]: "Desativado",
	[ClienteContratoStatusInternet.Cm]: "Bloqueio Manual",
	[ClienteContratoStatusInternet.Ca]: "Bloqueio Automático",
	[ClienteContratoStatusInternet.Fa]: "Financeiro em atraso",
	[ClienteContratoStatusInternet.Aa]: "Aguardando Assinatura",
};

export const CLIENTECONTRATO_STATUSRECORRENCIA_LABELS: Record<
	ClienteContratoStatusRecorrencia,
	string
> = {
	[ClienteContratoStatusRecorrencia.AguardandoAprovacao]:
		"Aguardando aprovação",
	[ClienteContratoStatusRecorrencia.Aprovada]: "Aprovada",
	[ClienteContratoStatusRecorrencia.Rejeitada]: "Rejeitada",
	[ClienteContratoStatusRecorrencia.Expirada]: "Expirada",
	[ClienteContratoStatusRecorrencia.Cancelada]: "Cancelada",
};

export const CLIENTECONTRATO_STATUSVELOCIDADE_LABELS: Record<
	ClienteContratoStatusVelocidade,
	string
> = {
	[ClienteContratoStatusVelocidade.N]: "Normal",
	[ClienteContratoStatusVelocidade.R]: "Reduzida",
};

export const CLIENTECONTRATO_TIPO_LABELS: Record<ClienteContratoTipo, string> =
	{
		[ClienteContratoTipo.I]: "Internet",
		[ClienteContratoTipo.T]: "Telefonia",
		[ClienteContratoTipo.S]: "Serviços",
		[ClienteContratoTipo.Sva]: "SVA",
	};

export const CLIENTECONTRATO_TIPOCOBRANCA_LABELS: Record<
	ClienteContratoTipoCobranca,
	string
> = {
	[ClienteContratoTipoCobranca.P]: "Configuração padrão",
	[ClienteContratoTipoCobranca.I]: "Impresso",
	[ClienteContratoTipoCobranca.E]: "E-mail",
};

export const CLIENTECONTRATO_TIPOLOCALIDADE_LABELS: Record<
	ClienteContratoTipoLocalidade,
	string
> = {
	[ClienteContratoTipoLocalidade.R]: "Zona Rural",
	[ClienteContratoTipoLocalidade.U]: "Zona Urbana",
};

export const CLIENTECONTRATO_UTILIZANDOAUTOLIBERASUSPPARC_LABELS: Record<
	ClienteContratoUtilizandoAutoLiberaSuspParc,
	string
> = {
	[ClienteContratoUtilizandoAutoLiberaSuspParc.S]: "Sim",
	[ClienteContratoUtilizandoAutoLiberaSuspParc.N]: "Não",
};
