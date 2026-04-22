/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Cliente } from "./cliente";
import type { VdContratosProdutos } from "./vd-contratos-produtos";

export const CLIENTE_CONTRATO_TABLE_NAME = "cliente_contrato";

export const CLIENTECONTRATO_AGRUPARFINANCEIROCONTRATO_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_APLICARDESCONTOTEMPOBLOQUEIO_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_ASSINATURADIGITAL_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_AVISOATRASO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_BASEGERACAOTIPODOC_LABELS = {
	OPC: "Documento opcional do contrato",
	PROD: "Documento do produto do contrato",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_BLOQUEIOAUTOMATICO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_CCPREVISAO_LABELS = {
	P: "Configuração padrão (Parâmetros)",
	N: "Competência (Previsão não)",
	S: "Caixa (Previsão sim)",
	M: "Manual",
} as const;

export const CLIENTECONTRATO_CONTRATORECORRENCIA_LABELS = {
	PIX: "Pix automático",
	CREDIT: "Cartão de crédito",
	N: "Sem recorrência ativa",
} as const;

export const CLIENTECONTRATO_CONTRATOSUSPENSO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCA_LABELS = {
	S: "Habilitado",
	N: "Desabilitado",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_DESBLOQUEIOCONFIANCAATIVO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_DOCUMENTPHOTO_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_ESTRATOSOCIALCOL_LABELS = {
	"1": "1",
	"2": "2",
	"3": "3",
	"4": "4",
	"5": "5",
	"6": "6",
} as const;

export const CLIENTECONTRATO_GERARFINANASSINDIGITALCONTRATO_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_IMPBKP_LABELS = {
	S: "Realizado",
	N: "Em Andamento",
} as const;

export const CLIENTECONTRATO_IMPCARTEIRA_LABELS = {
	S: "Realizada",
	N: "Em Andamento",
} as const;

export const CLIENTECONTRATO_IMPIMPORTACAO_LABELS = {
	S: "Realizada",
	N: "Em Andamento",
} as const;

export const CLIENTECONTRATO_IMPREALIZADO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_IMPREDE_LABELS = {
	S: "Realizada",
	N: "Em Andamento",
} as const;

export const CLIENTECONTRATO_IMPSTATUS_LABELS = {
	F: "Finalizada",
	A: "Em Andamento",
} as const;

export const CLIENTECONTRATO_IMPTREINAMENTO_LABELS = {
	S: "Realizado",
	N: "Em Andamento",
} as const;

export const CLIENTECONTRATO_INTEGRACAOASSINATURADIGITAL_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_ISENTARCONTRATO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_LIBERACAOBLOQUEIOMANUAL_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_LIBERACAOSUSPENSAOPARCIAL_LABELS = {
	H: "Habilitado",
	D: "Desabilitado",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_MOTIVOINCLUSAO_LABELS = {
	I: "Instalação",
	U: "Upgrade",
	D: "Downgrade",
	M: "Mudança de Endereço",
	T: "Mudança de Tecnologia",
	L: "Mudança de titularidade",
	N: "Negociação",
	R: "Reativação",
} as const;

export const CLIENTECONTRATO_ORIGEMCANCELAMENTO_LABELS = {
	M: "Manual",
	A: "Automático",
} as const;

export const CLIENTECONTRATO_RENOVACAOAUTOMATICA_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_RESTRICAOAUTODESBLOQUEIO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_RESTRICAOAUTOLIBERASUSPPARCIAL_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTECONTRATO_SELFIEPHOTO_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTECONTRATO_STATUS_LABELS = {
	P: "Pré-contrato",
	A: "Ativo",
	I: "Inativo",
	N: "Negativado",
	D: "Desistiu",
} as const;

export const CLIENTECONTRATO_STATUSINTERNET_LABELS = {
	A: "Ativo",
	D: "Desativado",
	CM: "Bloqueio Manual",
	CA: "Bloqueio Automático",
	FA: "Financeiro em atraso",
	AA: "Aguardando Assinatura",
} as const;

export const CLIENTECONTRATO_STATUSRECORRENCIA_LABELS = {
	AGUARDANDO_APROVACAO: "Aguardando aprovação",
	APROVADA: "Aprovada",
	REJEITADA: "Rejeitada",
	EXPIRADA: "Expirada",
	CANCELADA: "Cancelada",
} as const;

export const CLIENTECONTRATO_STATUSVELOCIDADE_LABELS = {
	N: "Normal",
	R: "Reduzida",
} as const;

export const CLIENTECONTRATO_TIPO_LABELS = {
	I: "Internet",
	T: "Telefonia",
	S: "Serviços",
	SVA: "SVA",
} as const;

export const CLIENTECONTRATO_TIPOCOBRANCA_LABELS = {
	P: "Configuração padrão",
	I: "Impresso",
	E: "E-mail",
} as const;

export const CLIENTECONTRATO_TIPOLOCALIDADE_LABELS = {
	R: "Zona Rural",
	U: "Zona Urbana",
} as const;

export const CLIENTECONTRATO_UTILIZANDOAUTOLIBERASUSPPARC_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export type ClienteContratoAgruparFinanceiroContrato =
	keyof typeof CLIENTECONTRATO_AGRUPARFINANCEIROCONTRATO_LABELS;

export type ClienteContratoAplicarDescontoTempoBloqueio =
	keyof typeof CLIENTECONTRATO_APLICARDESCONTOTEMPOBLOQUEIO_LABELS;

export type ClienteContratoAssinaturaDigital =
	keyof typeof CLIENTECONTRATO_ASSINATURADIGITAL_LABELS;

export type ClienteContratoAvisoAtraso =
	keyof typeof CLIENTECONTRATO_AVISOATRASO_LABELS;

export type ClienteContratoBaseGeracaoTipoDoc =
	keyof typeof CLIENTECONTRATO_BASEGERACAOTIPODOC_LABELS;

export type ClienteContratoBloqueioAutomatico =
	keyof typeof CLIENTECONTRATO_BLOQUEIOAUTOMATICO_LABELS;

export type ClienteContratoCcPrevisao =
	keyof typeof CLIENTECONTRATO_CCPREVISAO_LABELS;

export type ClienteContratoContratoRecorrencia =
	keyof typeof CLIENTECONTRATO_CONTRATORECORRENCIA_LABELS;

export type ClienteContratoContratoSuspenso =
	keyof typeof CLIENTECONTRATO_CONTRATOSUSPENSO_LABELS;

export type ClienteContratoDesbloqueioConfianca =
	keyof typeof CLIENTECONTRATO_DESBLOQUEIOCONFIANCA_LABELS;

export type ClienteContratoDesbloqueioConfiancaAtivo =
	keyof typeof CLIENTECONTRATO_DESBLOQUEIOCONFIANCAATIVO_LABELS;

export type ClienteContratoDocumentPhoto =
	keyof typeof CLIENTECONTRATO_DOCUMENTPHOTO_LABELS;

export type ClienteContratoEstratoSocialCol =
	keyof typeof CLIENTECONTRATO_ESTRATOSOCIALCOL_LABELS;

export type ClienteContratoGerarFinanAssinDigitalContrato =
	keyof typeof CLIENTECONTRATO_GERARFINANASSINDIGITALCONTRATO_LABELS;

export type ClienteContratoImpBkp = keyof typeof CLIENTECONTRATO_IMPBKP_LABELS;

export type ClienteContratoImpCarteira =
	keyof typeof CLIENTECONTRATO_IMPCARTEIRA_LABELS;

export type ClienteContratoImpImportacao =
	keyof typeof CLIENTECONTRATO_IMPIMPORTACAO_LABELS;

export type ClienteContratoImpRealizado =
	keyof typeof CLIENTECONTRATO_IMPREALIZADO_LABELS;

export type ClienteContratoImpRede =
	keyof typeof CLIENTECONTRATO_IMPREDE_LABELS;

export type ClienteContratoImpStatus =
	keyof typeof CLIENTECONTRATO_IMPSTATUS_LABELS;

export type ClienteContratoImpTreinamento =
	keyof typeof CLIENTECONTRATO_IMPTREINAMENTO_LABELS;

export type ClienteContratoIntegracaoAssinaturaDigital =
	keyof typeof CLIENTECONTRATO_INTEGRACAOASSINATURADIGITAL_LABELS;

export type ClienteContratoIsentarContrato =
	keyof typeof CLIENTECONTRATO_ISENTARCONTRATO_LABELS;

export type ClienteContratoLiberacaoBloqueioManual =
	keyof typeof CLIENTECONTRATO_LIBERACAOBLOQUEIOMANUAL_LABELS;

export type ClienteContratoLiberacaoSuspensaoParcial =
	keyof typeof CLIENTECONTRATO_LIBERACAOSUSPENSAOPARCIAL_LABELS;

export type ClienteContratoMotivoInclusao =
	keyof typeof CLIENTECONTRATO_MOTIVOINCLUSAO_LABELS;

export type ClienteContratoOrigemCancelamento =
	keyof typeof CLIENTECONTRATO_ORIGEMCANCELAMENTO_LABELS;

export type ClienteContratoRenovacaoAutomatica =
	keyof typeof CLIENTECONTRATO_RENOVACAOAUTOMATICA_LABELS;

export type ClienteContratoRestricaoAutoDesbloqueio =
	keyof typeof CLIENTECONTRATO_RESTRICAOAUTODESBLOQUEIO_LABELS;

export type ClienteContratoRestricaoAutoLiberaSuspParcial =
	keyof typeof CLIENTECONTRATO_RESTRICAOAUTOLIBERASUSPPARCIAL_LABELS;

export type ClienteContratoSelfiePhoto =
	keyof typeof CLIENTECONTRATO_SELFIEPHOTO_LABELS;

export type ClienteContratoStatus = keyof typeof CLIENTECONTRATO_STATUS_LABELS;

export type ClienteContratoStatusInternet =
	keyof typeof CLIENTECONTRATO_STATUSINTERNET_LABELS;

export type ClienteContratoStatusRecorrencia =
	keyof typeof CLIENTECONTRATO_STATUSRECORRENCIA_LABELS;

export type ClienteContratoStatusVelocidade =
	keyof typeof CLIENTECONTRATO_STATUSVELOCIDADE_LABELS;

export type ClienteContratoTipo = keyof typeof CLIENTECONTRATO_TIPO_LABELS;

export type ClienteContratoTipoCobranca =
	keyof typeof CLIENTECONTRATO_TIPOCOBRANCA_LABELS;

export type ClienteContratoTipoLocalidade =
	keyof typeof CLIENTECONTRATO_TIPOLOCALIDADE_LABELS;

export type ClienteContratoUtilizandoAutoLiberaSuspParc =
	keyof typeof CLIENTECONTRATO_UTILIZANDOAUTOLIBERASUSPPARC_LABELS;

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

export interface ClienteContratoRelations {
	f_carteira_cobranca?: unknown | null;
	f_cond_pag_ativ?: unknown | null;
	f_contrato_principal?: ClienteContrato | null;
	f_filial?: unknown | null;
	f_indexador_reajuste?: unknown | null;
	f_indicacao_contrato?: unknown | null;
	f_modelo?: unknown | null;
	f_moeda?: unknown | null;
	f_motivo_inclusao?: unknown | null;
	f_nc_cliente?: Cliente | null;
	f_produto_ativ?: unknown | null;
	f_responsavel?: unknown | null;
	f_tipo_contrato?: unknown | null;
	f_tipo_doc_ativ?: unknown | null;
	f_tipo_documento?: unknown | null;
	f_vd_contrato?: VdContratosProdutos | null;
	f_vendedor?: unknown | null;
}

export type ClienteContratoRelationKey = keyof ClienteContratoRelations;
