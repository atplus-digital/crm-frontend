/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const CLIENTE_CONTRATO_TABLE_NAME = "cliente_contrato";

export enum ClienteContratoAgruparFinanceiroContrato {
	P = "P",
}

export enum ClienteContratoAlertaContrato {
	ClienteVaiPagarMaisUmDosValoresAte2902 = "cliente vai pagar \r\nmais  um dos valores ate 29/02",
	PossuiPontoExtraFast100Mega = "POSSUI PONTO EXTRA FAST (100 MEGA)",
	VaiPagarEm2911 = "vai pagar em 29/11",
}

export enum ClienteContratoAplicaDescontoTempoBloqueio {
	S = "S",
}

export enum ClienteContratoAplicarDescontoTempoBloqueio {
	P = "P",
}

export enum ClienteContratoAssinaturaDigital {
	N = "N",
	P = "P",
}

export enum ClienteContratoAtivoSummit {
	N = "N",
}

export enum ClienteContratoAvisoAtraso {
	N = "N",
	S = "S",
}

export enum ClienteContratoBaseGeracaoTipoDoc {
	P = "P",
}

export enum ClienteContratoBloqueioAutomatico {
	N = "N",
	S = "S",
}

export enum ClienteContratoCcPrevisao {
	P = "P",
}

export enum ClienteContratoContratoSuspenso {
	N = "N",
}

export enum ClienteContratoCreditCardRecorrenteBandeiraCartao {
	Mastercard = "mastercard",
	Visa = "Visa",
}

export enum ClienteContratoCreditCardRecorrenteCarteiraAntiga {
	Value1 = "1",
	Value5 = "5",
}

export enum ClienteContratoDesbloqueioConfianca {
	N = "N",
	P = "P",
}

export enum ClienteContratoDesbloqueioConfiancaAtivo {
	N = "N",
	S = "S",
}

export enum ClienteContratoDescricaoAuxPlanoVenda {
	Permuta = "PERMUTA",
}

export enum ClienteContratoDocumentPhoto {
	P = "P",
}

export enum ClienteContratoEnderecoPadraoCliente {
	N = "N",
	S = "S",
}

export enum ClienteContratoFidelidade {
	Value12 = "12",
	Value24 = "24",
}

export enum ClienteContratoFinanceiroMigrado {
	N = "N",
}

export enum ClienteContratoGerarFinanAssinDigitalContrato {
	N = "N",
	P = "P",
}

export enum ClienteContratoIdFilial {
	Value1 = "1",
}

export enum ClienteContratoIdModelo {
	Value5 = "5",
}

export enum ClienteContratoIdMotivoInclusao {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value5 = "5",
	Value7 = "7",
}

export enum ClienteContratoIdTipoDocumento {
	Value501 = "501",
}

export enum ClienteContratoImpBkp {
	N = "N",
}

export enum ClienteContratoImpCarteira {
	N = "N",
}

export enum ClienteContratoImpImportacao {
	N = "N",
}

export enum ClienteContratoImpRede {
	N = "N",
}

export enum ClienteContratoImpTreinamento {
	N = "N",
}

export enum ClienteContratoIntegracaoAssinaturaDigital {
	N = "N",
	P = "P",
}

export enum ClienteContratoIsentarContrato {
	N = "N",
	S = "S",
}

export enum ClienteContratoLiberacaoBloqueioManual {
	P = "P",
	S = "S",
}

export enum ClienteContratoLiberacaoSuspensaoParcial {
	P = "P",
}

export enum ClienteContratoMotivoInclusao {
	D = "D",
	I = "I",
	N = "N",
	T = "T",
	U = "U",
}

export enum ClienteContratoObs {
	CanceladoViaBancoDeDados = "cancelado via banco de dados",
}

export enum ClienteContratoOrigemCancelamento {
	M = "M",
}

export enum ClienteContratoPortabilidadeSummit {
	N = "N",
}

export enum ClienteContratoRenovacaoAutomatica {
	N = "N",
	S = "S",
}

export enum ClienteContratoRestricaoAutoDesbloqueio {
	N = "N",
	S = "S",
}

export enum ClienteContratoRestricaoAutoLiberaSuspParcial {
	N = "N",
}

export enum ClienteContratoSelfiePhoto {
	P = "P",
}

export enum ClienteContratoSituacaoFinanceiraContrato {
	R = "R",
}

export enum ClienteContratoStatus {
	A = "A",
	I = "I",
	P = "P",
}

export enum ClienteContratoStatusInternet {
	A = "A",
	Aa = "AA",
	Ca = "CA",
	D = "D",
	Fa = "FA",
}

export enum ClienteContratoStatusVelocidade {
	N = "N",
	R = "R",
}

export enum ClienteContratoTipo {
	I = "I",
}

export enum ClienteContratoTipoCobranca {
	P = "P",
}

export enum ClienteContratoTipoDocOpc3 {
	Value0 = "0",
	Value13 = "13",
}

export enum ClienteContratoTipoLocalidade {
	U = "U",
}

export enum ClienteContratoTipoProdutosPlano {
	P = "P",
}

export enum ClienteContratoUpdatedResponsibleSeller {
	N = "N",
}

export enum ClienteContratoUtilizandoAutoLiberaSuspParc {
	N = "N",
}

export interface ClienteContrato {
	id: number;
	agrupar_financeiro_contrato: ClienteContratoAgruparFinanceiroContrato;
	alerta_contrato: ClienteContratoAlertaContrato;
	apartamento: string;
	aplica_desconto_tempo_bloqueio: ClienteContratoAplicaDescontoTempoBloqueio;
	aplicar_desconto_tempo_bloqueio: ClienteContratoAplicarDescontoTempoBloqueio;
	assinatura_digital: ClienteContratoAssinaturaDigital;
	ativacao_numero_parcelas: string;
	ativacao_valor_parcela: string;
	ativacao_vencimentos: string;
	ativo_summit: ClienteContratoAtivoSummit;
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
	credit_card_recorrente_bandeira_cartao: ClienteContratoCreditCardRecorrenteBandeiraCartao;
	credit_card_recorrente_carteira_antiga: ClienteContratoCreditCardRecorrenteCarteiraAntiga;
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
	descricao_aux_plano_venda: ClienteContratoDescricaoAuxPlanoVenda;
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
	endereco_padrao_cliente: ClienteContratoEnderecoPadraoCliente;
	estrato_social_col: string;
	fidelidade: ClienteContratoFidelidade;
	fim_vigencia_summit: string;
	financeiro_migrado: ClienteContratoFinanceiroMigrado;
	gerar_finan_assin_digital_contrato: ClienteContratoGerarFinanAssinDigitalContrato;
	id_carteira_cobranca: number;
	id_cidade: string;
	id_cliente: number;
	id_cond_pag_ativ: string;
	id_condominio: string;
	id_contrato_principal: string;
	id_crm_negociacoes: string;
	id_filial: ClienteContratoIdFilial;
	id_indexador_reajuste: string;
	id_instalador: string;
	id_modelo: ClienteContratoIdModelo;
	id_motivo_inclusao: ClienteContratoIdMotivoInclusao;
	id_motivo_negativacao: string;
	id_notifica_massa: string;
	id_produto_ativ: string;
	id_responsavel: string;
	id_responsavel_cancelamento: string;
	id_responsavel_desistencia: string;
	id_responsavel_negativacao: string;
	id_tipo_contrato: number;
	id_tipo_doc_ativ: string;
	id_tipo_documento: ClienteContratoIdTipoDocumento;
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
	imp_realizado: string;
	imp_rede: ClienteContratoImpRede;
	imp_status: string;
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
	obs: ClienteContratoObs;
	obs_cancelamento: string;
	obs_contrato: string;
	obs_desistencia: string;
	obs_negativacao: string;
	origem_cancelamento: ClienteContratoOrigemCancelamento;
	pago_ate_data: string;
	pix_recorrente_id_carteira_cobranca: string;
	portabilidade_summit: ClienteContratoPortabilidadeSummit;
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
	situacao_financeira_contrato: ClienteContratoSituacaoFinanceiraContrato;
	status: ClienteContratoStatus;
	status_internet: ClienteContratoStatusInternet;
	status_recorrencia: string;
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
	tipo_doc_opc3: ClienteContratoTipoDocOpc3;
	tipo_doc_opc4: string;
	tipo_localidade: ClienteContratoTipoLocalidade;
	tipo_produtos_plano: ClienteContratoTipoProdutosPlano;
	token_assinatura_digital: string;
	ultima_atualizacao: string;
	updated_responsible_seller: ClienteContratoUpdatedResponsibleSeller;
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
	[ClienteContratoAgruparFinanceiroContrato.P]: "P",
};

export const CLIENTECONTRATO_ALERTACONTRATO_LABELS: Record<
	ClienteContratoAlertaContrato,
	string
> = {
	[ClienteContratoAlertaContrato.ClienteVaiPagarMaisUmDosValoresAte2902]:
		"Cliente Vai Pagar Mais Um Dos Valores Ate 29/02",
	[ClienteContratoAlertaContrato.PossuiPontoExtraFast100Mega]:
		"Possui Ponto Extra FAST (100 Mega)",
	[ClienteContratoAlertaContrato.VaiPagarEm2911]: "Vai Pagar Em 29/11",
};

export const CLIENTECONTRATO_APLICADESCONTOTEMPOBLOQUEIO_LABELS: Record<
	ClienteContratoAplicaDescontoTempoBloqueio,
	string
> = {
	[ClienteContratoAplicaDescontoTempoBloqueio.S]: "Sim",
};

export const CLIENTECONTRATO_APLICARDESCONTOTEMPOBLOQUEIO_LABELS: Record<
	ClienteContratoAplicarDescontoTempoBloqueio,
	string
> = {
	[ClienteContratoAplicarDescontoTempoBloqueio.P]: "P",
};

export const CLIENTECONTRATO_ASSINATURADIGITAL_LABELS: Record<
	ClienteContratoAssinaturaDigital,
	string
> = {
	[ClienteContratoAssinaturaDigital.N]: "Não",
	[ClienteContratoAssinaturaDigital.P]: "P",
};

export const CLIENTECONTRATO_ATIVOSUMMIT_LABELS: Record<
	ClienteContratoAtivoSummit,
	string
> = {
	[ClienteContratoAtivoSummit.N]: "Não",
};

export const CLIENTECONTRATO_AVISOATRASO_LABELS: Record<
	ClienteContratoAvisoAtraso,
	string
> = {
	[ClienteContratoAvisoAtraso.N]: "Não",
	[ClienteContratoAvisoAtraso.S]: "Sim",
};

export const CLIENTECONTRATO_BASEGERACAOTIPODOC_LABELS: Record<
	ClienteContratoBaseGeracaoTipoDoc,
	string
> = {
	[ClienteContratoBaseGeracaoTipoDoc.P]: "P",
};

export const CLIENTECONTRATO_BLOQUEIOAUTOMATICO_LABELS: Record<
	ClienteContratoBloqueioAutomatico,
	string
> = {
	[ClienteContratoBloqueioAutomatico.N]: "Não",
	[ClienteContratoBloqueioAutomatico.S]: "Sim",
};

export const CLIENTECONTRATO_CCPREVISAO_LABELS: Record<
	ClienteContratoCcPrevisao,
	string
> = {
	[ClienteContratoCcPrevisao.P]: "P",
};

export const CLIENTECONTRATO_CONTRATOSUSPENSO_LABELS: Record<
	ClienteContratoContratoSuspenso,
	string
> = {
	[ClienteContratoContratoSuspenso.N]: "Não",
};

export const CLIENTECONTRATO_CREDITCARDRECORRENTEBANDEIRACARTAO_LABELS: Record<
	ClienteContratoCreditCardRecorrenteBandeiraCartao,
	string
> = {
	[ClienteContratoCreditCardRecorrenteBandeiraCartao.Mastercard]: "Mastercard",
	[ClienteContratoCreditCardRecorrenteBandeiraCartao.Visa]: "Visa",
};

export const CLIENTECONTRATO_CREDITCARDRECORRENTECARTEIRAANTIGA_LABELS: Record<
	ClienteContratoCreditCardRecorrenteCarteiraAntiga,
	string
> = {
	[ClienteContratoCreditCardRecorrenteCarteiraAntiga.Value1]: "Ativo",
	[ClienteContratoCreditCardRecorrenteCarteiraAntiga.Value5]: "Código 5",
};

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCA_LABELS: Record<
	ClienteContratoDesbloqueioConfianca,
	string
> = {
	[ClienteContratoDesbloqueioConfianca.N]: "Não",
	[ClienteContratoDesbloqueioConfianca.P]: "P",
};

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCAATIVO_LABELS: Record<
	ClienteContratoDesbloqueioConfiancaAtivo,
	string
> = {
	[ClienteContratoDesbloqueioConfiancaAtivo.N]: "Não",
	[ClienteContratoDesbloqueioConfiancaAtivo.S]: "Sim",
};

export const CLIENTECONTRATO_DESCRICAOAUXPLANOVENDA_LABELS: Record<
	ClienteContratoDescricaoAuxPlanoVenda,
	string
> = {
	[ClienteContratoDescricaoAuxPlanoVenda.Permuta]: "Permuta",
};

export const CLIENTECONTRATO_DOCUMENTPHOTO_LABELS: Record<
	ClienteContratoDocumentPhoto,
	string
> = {
	[ClienteContratoDocumentPhoto.P]: "P",
};

export const CLIENTECONTRATO_ENDERECOPADRAOCLIENTE_LABELS: Record<
	ClienteContratoEnderecoPadraoCliente,
	string
> = {
	[ClienteContratoEnderecoPadraoCliente.N]: "Não",
	[ClienteContratoEnderecoPadraoCliente.S]: "Sim",
};

export const CLIENTECONTRATO_FIDELIDADE_LABELS: Record<
	ClienteContratoFidelidade,
	string
> = {
	[ClienteContratoFidelidade.Value12]: "Código 12",
	[ClienteContratoFidelidade.Value24]: "Código 24",
};

export const CLIENTECONTRATO_FINANCEIROMIGRADO_LABELS: Record<
	ClienteContratoFinanceiroMigrado,
	string
> = {
	[ClienteContratoFinanceiroMigrado.N]: "Não",
};

export const CLIENTECONTRATO_GERARFINANASSINDIGITALCONTRATO_LABELS: Record<
	ClienteContratoGerarFinanAssinDigitalContrato,
	string
> = {
	[ClienteContratoGerarFinanAssinDigitalContrato.N]: "Não",
	[ClienteContratoGerarFinanAssinDigitalContrato.P]: "P",
};

export const CLIENTECONTRATO_IDFILIAL_LABELS: Record<
	ClienteContratoIdFilial,
	string
> = {
	[ClienteContratoIdFilial.Value1]: "Ativo",
};

export const CLIENTECONTRATO_IDMODELO_LABELS: Record<
	ClienteContratoIdModelo,
	string
> = {
	[ClienteContratoIdModelo.Value5]: "Código 5",
};

export const CLIENTECONTRATO_IDMOTIVOINCLUSAO_LABELS: Record<
	ClienteContratoIdMotivoInclusao,
	string
> = {
	[ClienteContratoIdMotivoInclusao.Value1]: "Ativo",
	[ClienteContratoIdMotivoInclusao.Value2]: "Código 2",
	[ClienteContratoIdMotivoInclusao.Value3]: "Código 3",
	[ClienteContratoIdMotivoInclusao.Value5]: "Código 5",
	[ClienteContratoIdMotivoInclusao.Value7]: "Código 7",
};

export const CLIENTECONTRATO_IDTIPODOCUMENTO_LABELS: Record<
	ClienteContratoIdTipoDocumento,
	string
> = {
	[ClienteContratoIdTipoDocumento.Value501]: "501",
};

export const CLIENTECONTRATO_IMPBKP_LABELS: Record<
	ClienteContratoImpBkp,
	string
> = {
	[ClienteContratoImpBkp.N]: "Não",
};

export const CLIENTECONTRATO_IMPCARTEIRA_LABELS: Record<
	ClienteContratoImpCarteira,
	string
> = {
	[ClienteContratoImpCarteira.N]: "Não",
};

export const CLIENTECONTRATO_IMPIMPORTACAO_LABELS: Record<
	ClienteContratoImpImportacao,
	string
> = {
	[ClienteContratoImpImportacao.N]: "Não",
};

export const CLIENTECONTRATO_IMPREDE_LABELS: Record<
	ClienteContratoImpRede,
	string
> = {
	[ClienteContratoImpRede.N]: "Não",
};

export const CLIENTECONTRATO_IMPTREINAMENTO_LABELS: Record<
	ClienteContratoImpTreinamento,
	string
> = {
	[ClienteContratoImpTreinamento.N]: "Não",
};

export const CLIENTECONTRATO_INTEGRACAOASSINATURADIGITAL_LABELS: Record<
	ClienteContratoIntegracaoAssinaturaDigital,
	string
> = {
	[ClienteContratoIntegracaoAssinaturaDigital.N]: "Não",
	[ClienteContratoIntegracaoAssinaturaDigital.P]: "P",
};

export const CLIENTECONTRATO_ISENTARCONTRATO_LABELS: Record<
	ClienteContratoIsentarContrato,
	string
> = {
	[ClienteContratoIsentarContrato.N]: "Não",
	[ClienteContratoIsentarContrato.S]: "Sim",
};

export const CLIENTECONTRATO_LIBERACAOBLOQUEIOMANUAL_LABELS: Record<
	ClienteContratoLiberacaoBloqueioManual,
	string
> = {
	[ClienteContratoLiberacaoBloqueioManual.P]: "P",
	[ClienteContratoLiberacaoBloqueioManual.S]: "Sim",
};

export const CLIENTECONTRATO_LIBERACAOSUSPENSAOPARCIAL_LABELS: Record<
	ClienteContratoLiberacaoSuspensaoParcial,
	string
> = {
	[ClienteContratoLiberacaoSuspensaoParcial.P]: "P",
};

export const CLIENTECONTRATO_MOTIVOINCLUSAO_LABELS: Record<
	ClienteContratoMotivoInclusao,
	string
> = {
	[ClienteContratoMotivoInclusao.D]: "D",
	[ClienteContratoMotivoInclusao.I]: "Inativo",
	[ClienteContratoMotivoInclusao.N]: "Não",
	[ClienteContratoMotivoInclusao.T]: "T",
	[ClienteContratoMotivoInclusao.U]: "U",
};

export const CLIENTECONTRATO_OBS_LABELS: Record<ClienteContratoObs, string> = {
	[ClienteContratoObs.CanceladoViaBancoDeDados]: "Cancelado Via Banco De Dados",
};

export const CLIENTECONTRATO_ORIGEMCANCELAMENTO_LABELS: Record<
	ClienteContratoOrigemCancelamento,
	string
> = {
	[ClienteContratoOrigemCancelamento.M]: "M",
};

export const CLIENTECONTRATO_PORTABILIDADESUMMIT_LABELS: Record<
	ClienteContratoPortabilidadeSummit,
	string
> = {
	[ClienteContratoPortabilidadeSummit.N]: "Não",
};

export const CLIENTECONTRATO_RENOVACAOAUTOMATICA_LABELS: Record<
	ClienteContratoRenovacaoAutomatica,
	string
> = {
	[ClienteContratoRenovacaoAutomatica.N]: "Não",
	[ClienteContratoRenovacaoAutomatica.S]: "Sim",
};

export const CLIENTECONTRATO_RESTRICAOAUTODESBLOQUEIO_LABELS: Record<
	ClienteContratoRestricaoAutoDesbloqueio,
	string
> = {
	[ClienteContratoRestricaoAutoDesbloqueio.N]: "Não",
	[ClienteContratoRestricaoAutoDesbloqueio.S]: "Sim",
};

export const CLIENTECONTRATO_RESTRICAOAUTOLIBERASUSPPARCIAL_LABELS: Record<
	ClienteContratoRestricaoAutoLiberaSuspParcial,
	string
> = {
	[ClienteContratoRestricaoAutoLiberaSuspParcial.N]: "Não",
};

export const CLIENTECONTRATO_SELFIEPHOTO_LABELS: Record<
	ClienteContratoSelfiePhoto,
	string
> = {
	[ClienteContratoSelfiePhoto.P]: "P",
};

export const CLIENTECONTRATO_SITUACAOFINANCEIRACONTRATO_LABELS: Record<
	ClienteContratoSituacaoFinanceiraContrato,
	string
> = {
	[ClienteContratoSituacaoFinanceiraContrato.R]: "R",
};

export const CLIENTECONTRATO_STATUS_LABELS: Record<
	ClienteContratoStatus,
	string
> = {
	[ClienteContratoStatus.A]: "Ativo",
	[ClienteContratoStatus.I]: "Inativo",
	[ClienteContratoStatus.P]: "P",
};

export const CLIENTECONTRATO_STATUSINTERNET_LABELS: Record<
	ClienteContratoStatusInternet,
	string
> = {
	[ClienteContratoStatusInternet.A]: "Ativo",
	[ClienteContratoStatusInternet.Aa]: "AA",
	[ClienteContratoStatusInternet.Ca]: "CA",
	[ClienteContratoStatusInternet.D]: "D",
	[ClienteContratoStatusInternet.Fa]: "FA",
};

export const CLIENTECONTRATO_STATUSVELOCIDADE_LABELS: Record<
	ClienteContratoStatusVelocidade,
	string
> = {
	[ClienteContratoStatusVelocidade.N]: "Não",
	[ClienteContratoStatusVelocidade.R]: "R",
};

export const CLIENTECONTRATO_TIPO_LABELS: Record<ClienteContratoTipo, string> =
	{
		[ClienteContratoTipo.I]: "Inativo",
	};

export const CLIENTECONTRATO_TIPOCOBRANCA_LABELS: Record<
	ClienteContratoTipoCobranca,
	string
> = {
	[ClienteContratoTipoCobranca.P]: "P",
};

export const CLIENTECONTRATO_TIPODOCOPC3_LABELS: Record<
	ClienteContratoTipoDocOpc3,
	string
> = {
	[ClienteContratoTipoDocOpc3.Value0]: "Inativo",
	[ClienteContratoTipoDocOpc3.Value13]: "Código 13",
};

export const CLIENTECONTRATO_TIPOLOCALIDADE_LABELS: Record<
	ClienteContratoTipoLocalidade,
	string
> = {
	[ClienteContratoTipoLocalidade.U]: "U",
};

export const CLIENTECONTRATO_TIPOPRODUTOSPLANO_LABELS: Record<
	ClienteContratoTipoProdutosPlano,
	string
> = {
	[ClienteContratoTipoProdutosPlano.P]: "P",
};

export const CLIENTECONTRATO_UPDATEDRESPONSIBLESELLER_LABELS: Record<
	ClienteContratoUpdatedResponsibleSeller,
	string
> = {
	[ClienteContratoUpdatedResponsibleSeller.N]: "Não",
};

export const CLIENTECONTRATO_UTILIZANDOAUTOLIBERASUSPPARC_LABELS: Record<
	ClienteContratoUtilizandoAutoLiberaSuspParc,
	string
> = {
	[ClienteContratoUtilizandoAutoLiberaSuspParc.N]: "Não",
};
