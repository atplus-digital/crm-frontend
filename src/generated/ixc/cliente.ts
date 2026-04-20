/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const CLIENTE_TABLE_NAME = "cliente";

export enum ClienteAcessoAutomaticoCentral {
	P = "P",
	S = "S",
}

export enum ClienteAlterarSenhaPrimeiroAcesso {
	N = "N",
	P = "P",
}

export enum ClienteAntigoAcessoCentral {
	N = "N",
}

export enum ClienteAtivo {
	N = "N",
	S = "S",
}

export enum ClienteAtualizarCadastroGalaxpay {
	N = "N",
	S = "S",
}

export enum ClienteAvisoAtraso {
	S = "S",
}

export enum ClienteBairroCob {
	ContaDinheiro = "Conta Dinheiro",
	Guaruj = "Guarujá",
	VilaNova = "Vila Nova",
}

export enum ClienteCadastradoNoGalaxpay {
	N = "N",
	S = "S",
}

export enum ClienteCepCob {
	Value88503210 = "88503-210",
	Value88520100 = "88520-100",
	Value88521020 = "88521-020",
}

export enum ClienteCliDescontaIssRetidoTotal {
	N = "N",
}

export enum ClienteCobEnviaEmail {
	S = "S",
}

export enum ClienteCobEnviaSms {
	S = "S",
}

export enum ClienteCofinsRetem {
	N = "N",
}

export enum ClienteComplementoCob {
	Casa = "CASA",
}

export enum ClienteCondPagamento {
	Value0 = "0",
	Value1 = "1",
}

export enum ClienteContribuinteIcms {
	I = "I",
	N = "N",
	S = "S",
}

export enum ClienteConvertClienteForn {
	N = "N",
}

export enum ClienteCrm {
	N = "N",
}

export enum ClienteCsllRetem {
	N = "N",
}

export enum ClienteDataHashRedefinirSenha {
	Value20220213210939 = "2022-02-13 21:09:39",
	Value20220430184027 = "2022-04-30 18:40:27",
	Value20220609214542 = "2022-06-09 21:45:42",
	InvalidDate = "Invalid date",
}

export enum ClienteDescontoIrrfValorInferior {
	N = "N",
	S = "S",
}

export enum ClienteEnderecoCob {
	AvenidaSegundoBatalhORodoviRio = "Avenida Segundo Batalhão Rodoviário",
	RuaJoODaSilvaRamos = "Rua João da Silva Ramos",
	RuaTomDeSouza = "Rua Tomé de Souza",
}

export enum ClienteEstadoCivil {
	Casado = "Casado",
	Divorciado = "Divorciado",
	Solteiro = "Solteiro",
}

export enum ClienteFilialId {
	Value1 = "1",
}

export enum ClienteFiltraFilial {
	S = "S",
}

export enum ClienteGrauSatisfacao {
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export enum ClienteHashRedefinirSenha {
	Value2cddcfdf3e2b1292698984122b758245 = "2cddcfdf3e2b1292698984122b758245",
	B66fbb2dd0c2ff76f8e9165f7a448dfb = "b66fbb2dd0c2ff76f8e9165f7a448dfb",
	E9b8b8e9d41ecb186ad4ac53e246fbad = "e9b8b8e9d41ecb186ad4ac53e246fbad",
}

export enum ClienteHotsiteAcesso {
	Value0 = "0",
	Value2 = "2",
}

export enum ClienteIdTipoCliente {
	Value0 = "0",
	Value2 = "2",
}

export enum ClienteInssRetem {
	N = "N",
}

export enum ClienteIrrfRetem {
	N = "N",
}

export enum ClienteMoradia {
	A = "A",
	P = "P",
}

export enum ClienteNacionalidade {
	Brasileiro = "Brasileiro",
}

export enum ClienteNumDiasCob {
	Value0 = "0",
	Value1 = "1",
}

export enum ClienteOrgaoPublico {
	N = "N",
}

export enum ClienteParticipaCobranca {
	N = "N",
	S = "S",
}

export enum ClienteParticipaPreCobranca {
	S = "S",
}

export enum ClientePermiteArmazenarCartoes {
	N = "N",
}

export enum ClientePisRetem {
	N = "N",
}

export enum ClientePrimeiroAcessoCentral {
	N = "N",
	S = "S",
}

export enum ClienteRedeAtivacao {
	P = "P",
}

export enum ClienteReguaCobrancaConsidera {
	P = "P",
}

export enum ClienteReguaCobrancaNotificacao {
	S = "S",
}

export enum ClienteReguaCobrancaWpp {
	S = "S",
}

export enum ClienteRgOrgaoEmissor {
	Dicrj = "DICRJ",
	Ssp = "SsP",
}

export enum ClienteSenhaHotsiteMd5 {
	N = "N",
	S = "S",
}

export enum ClienteSexo {
	F = "F",
	M = "M",
}

export enum ClienteStatusInternet {
	N = "N",
}

export enum ClienteStatusProspeccao {
	C = "C",
}

export enum ClienteTipoAssinante {
	Value1 = "1",
	Value3 = "3",
}

export enum ClienteTipoClienteScm {
	Value01 = "01",
	Value03 = "03",
}

export enum ClienteTipoDocumentoIdentificacao {
	Value13 = "13",
}

export enum ClienteTipoLocalidade {
	U = "U",
}

export enum ClienteTipoPessoa {
	F = "F",
	J = "J",
}

export enum ClienteTipoPessoaTitularConta {
	F = "F",
}

export enum ClienteUfCob {
	Value0 = "0",
	Value2 = "2",
}

export interface Cliente {
	id: number;
	acesso_automatico_central: ClienteAcessoAutomaticoCentral;
	alerta: string;
	alterar_senha_primeiro_acesso: ClienteAlterarSenhaPrimeiroAcesso;
	antigo_acesso_central: ClienteAntigoAcessoCentral;
	apartamento: string;
	ativo: ClienteAtivo;
	ativo_serasa: number;
	atualizar_cadastro_galaxPay: ClienteAtualizarCadastroGalaxpay;
	aviso_atraso: ClienteAvisoAtraso;
	bairro: string;
	bairro_cob: ClienteBairroCob;
	bloco: string;
	bloqueio_automatico: string;
	cadastrado_no_galaxPay: ClienteCadastradoNoGalaxpay;
	cadastrado_via_viabilidade: string;
	cep: string;
	cep_cob: ClienteCepCob;
	cidade: number;
	cidade_cob: number;
	cidade_naturalidade: number;
	cif: string;
	cli_desconta_iss_retido_total: ClienteCliDescontaIssRetidoTotal;
	cnpj_cpf: string;
	cnpj_cpf_titular_conta: string;
	cob_envia_email: ClienteCobEnviaEmail;
	cob_envia_sms: ClienteCobEnviaSms;
	codigo_operacao: number;
	cofins_retem: ClienteCofinsRetem;
	complemento: string;
	complemento_cob: ClienteComplementoCob;
	cond_pagamento: ClienteCondPagamento;
	contato: string;
	contribuinte_icms: ClienteContribuinteIcms;
	convert_cliente_forn: ClienteConvertClienteForn;
	cpf_conjuge: string;
	cpf_mae: string;
	cpf_pai: string;
	cpf_representante_1: string;
	cpf_representante_2: string;
	crm: ClienteCrm;
	crm_data_abortamos: string;
	crm_data_apresentando: string;
	crm_data_negociando: string;
	crm_data_novo: string;
	crm_data_perdemos: string;
	crm_data_sem_porta_disponivel: string;
	crm_data_sem_viabilidade: string;
	crm_data_sondagem: string;
	crm_data_vencemos: string;
	csll_retem: ClienteCsllRetem;
	data: string;
	data_cadastro: string;
	data_hash_redefinir_senha: ClienteDataHashRedefinirSenha;
	data_nascimento: string;
	data_nascimento_conjuge: string;
	data_reserva_auto_viab: string;
	deb_agencia: string;
	deb_automatico: string;
	deb_conta: string;
	desconto_irrf_valor_inferior: ClienteDescontoIrrfValorInferior;
	dia_vencimento: string;
	email: string;
	emp_cargo: string;
	emp_cep: string;
	emp_cidade: number;
	emp_cnpj: string;
	emp_contato: string;
	emp_data_admissao: string;
	emp_empresa: string;
	emp_endereco: string;
	emp_fone: string;
	emp_remuneracao: string;
	endereco: string;
	endereco_cob: ClienteEnderecoCob;
	estado_civil: ClienteEstadoCivil;
	external_id: string;
	external_system: string;
	facebook: string;
	fantasia: string;
	filial_id: ClienteFilialId;
	filtra_filial: ClienteFiltraFilial;
	fone: string;
	fone_conjuge: string;
	freq_celular_calc_vel: string;
	freq_computador_calc_vel: string;
	freq_console_calc_vel: string;
	freq_pessoas_calc_vel: string;
	freq_smart_calc_vel: string;
	grau_satisfacao: ClienteGrauSatisfacao;
	hash_redefinir_senha: ClienteHashRedefinirSenha;
	hotsite_acesso: ClienteHotsiteAcesso;
	hotsite_email: string;
	id_campanha: string;
	id_canal_venda: string;
	id_candato_tipo: number;
	id_concorrente: number;
	id_condominio: number;
	id_conta: number;
	id_contato_principal: string;
	id_fornecedor_conversao: number;
	id_galaxPay: number;
	id_myauth: string;
	id_operadora_celular: number;
	id_perfil: number;
	id_segmento: string;
	id_tipo_cliente: ClienteIdTipoCliente;
	id_vd_contrato_desejado: string;
	id_vendedor: number;
	id_vindi: string;
	identidade_mae: string;
	identidade_pai: string;
	identidade_representante_1: string;
	identidade_representante_2: string;
	idx: number;
	ie_identidade: string;
	im: string;
	indicado_por: string;
	inscricao_municipal: string;
	inss_retem: ClienteInssRetem;
	ip_sistema: string;
	irrf_retem: ClienteIrrfRetem;
	iss_classificacao: string;
	iss_classificacao_padrao: string;
	isuf: string;
	latitude: string;
	longitude: string;
	melhor_periodo_reserva_auto_viab: string;
	moradia: ClienteMoradia;
	nacionalidade: ClienteNacionalidade;
	nao_avisar_ate: string;
	nao_bloquear_ate: string;
	nascimento_mae: string;
	nascimento_pai: string;
	nome_conjuge: string;
	nome_contador: string;
	nome_mae: string;
	nome_pai: string;
	nome_representante_1: string;
	nome_representante_2: string;
	nome_social: string;
	num_dias_cob: ClienteNumDiasCob;
	numero: string;
	numero_antigo: string;
	numero_cob: string;
	numero_cob_antigo: string;
	obs: string;
	operador_neutro: string;
	orgao_publico: ClienteOrgaoPublico;
	participa_cobranca: ClienteParticipaCobranca;
	participa_pre_cobranca: ClienteParticipaPreCobranca;
	percentual_reducao: string;
	permite_armazenar_cartoes: ClientePermiteArmazenarCartoes;
	pipe_id_organizacao: number;
	pis_retem: ClientePisRetem;
	plano_negociacao_auto_viab: string;
	porta_ssh_sistema: string;
	primeiro_acesso_central: ClientePrimeiroAcessoCentral;
	profissao: string;
	prospeccao_proximo_contato: string;
	prospeccao_ultimo_contato: string;
	qtd_celular_calc_vel: string;
	qtd_computador_calc_vel: string;
	qtd_console_calc_vel: string;
	qtd_pessoas_calc_vel: string;
	qtd_smart_calc_vel: string;
	quantidade_dependentes: number;
	ramal: string;
	razao: string;
	rede_ativacao: ClienteRedeAtivacao;
	ref_com_empresa1: string;
	ref_com_empresa2: string;
	ref_com_fone1: string;
	ref_com_fone2: string;
	ref_pes_fone1: string;
	ref_pes_fone2: string;
	ref_pes_nome1: string;
	ref_pes_nome2: string;
	referencia: string;
	referencia_cob: string;
	regime_fiscal_col: string;
	regua_cobranca_considera: ClienteReguaCobrancaConsidera;
	regua_cobranca_notificacao: ClienteReguaCobrancaNotificacao;
	regua_cobranca_wpp: ClienteReguaCobrancaWpp;
	remessa_debito: string;
	responsavel: number;
	resultado_calc_vel: string;
	rg_conjuge: string;
	rg_orgao_emissor: ClienteRgOrgaoEmissor;
	senha: string;
	senha_hotsite_md5: ClienteSenhaHotsiteMd5;
	senha_root_sistema: string;
	Sexo: ClienteSexo;
	skype: string;
	status_internet: ClienteStatusInternet;
	status_prospeccao: ClienteStatusProspeccao;
	status_viabilidade: string;
	substatus_prospeccao: string;
	tabela_preco: number;
	telefone_celular: string;
	telefone_comercial: string;
	telefone_contador: string;
	tipo_assinante: ClienteTipoAssinante;
	tipo_cliente_scm: ClienteTipoClienteScm;
	tipo_cobranca_auto_viab: string;
	tipo_documento_identificacao: ClienteTipoDocumentoIdentificacao;
	tipo_ente_governamental: string;
	tipo_localidade: ClienteTipoLocalidade;
	tipo_pessoa: ClienteTipoPessoa;
	tipo_pessoa_titular_conta: ClienteTipoPessoaTitularConta;
	tipo_rede: string;
	tv_access_token: string;
	tv_code: string;
	tv_refresh_token: string;
	tv_token_expires_in: string;
	uf: number;
	uf_cob: ClienteUfCob;
	ultima_atualizacao: string;
	url_sistema: string;
	url_site: string;
	website: string;
	whatsapp: string;
	yapay_token_account: string;
}

export type ClienteRelations = Record<string, never>;

export type ClienteRelationKey = keyof ClienteRelations;

export const CLIENTE_ACESSOAUTOMATICOCENTRAL_LABELS: Record<
	ClienteAcessoAutomaticoCentral,
	string
> = {
	[ClienteAcessoAutomaticoCentral.P]: "P",
	[ClienteAcessoAutomaticoCentral.S]: "Sim",
};

export const CLIENTE_ALTERARSENHAPRIMEIROACESSO_LABELS: Record<
	ClienteAlterarSenhaPrimeiroAcesso,
	string
> = {
	[ClienteAlterarSenhaPrimeiroAcesso.N]: "Não",
	[ClienteAlterarSenhaPrimeiroAcesso.P]: "P",
};

export const CLIENTE_ANTIGOACESSOCENTRAL_LABELS: Record<
	ClienteAntigoAcessoCentral,
	string
> = {
	[ClienteAntigoAcessoCentral.N]: "Não",
};

export const CLIENTE_ATIVO_LABELS: Record<ClienteAtivo, string> = {
	[ClienteAtivo.N]: "Não",
	[ClienteAtivo.S]: "Sim",
};

export const CLIENTE_ATUALIZARCADASTROGALAXPAY_LABELS: Record<
	ClienteAtualizarCadastroGalaxpay,
	string
> = {
	[ClienteAtualizarCadastroGalaxpay.N]: "Não",
	[ClienteAtualizarCadastroGalaxpay.S]: "Sim",
};

export const CLIENTE_AVISOATRASO_LABELS: Record<ClienteAvisoAtraso, string> = {
	[ClienteAvisoAtraso.S]: "Sim",
};

export const CLIENTE_BAIRROCOB_LABELS: Record<ClienteBairroCob, string> = {
	[ClienteBairroCob.ContaDinheiro]: "Conta Dinheiro",
	[ClienteBairroCob.Guaruj]: "Guarujá",
	[ClienteBairroCob.VilaNova]: "Vila Nova",
};

export const CLIENTE_CADASTRADONOGALAXPAY_LABELS: Record<
	ClienteCadastradoNoGalaxpay,
	string
> = {
	[ClienteCadastradoNoGalaxpay.N]: "Não",
	[ClienteCadastradoNoGalaxpay.S]: "Sim",
};

export const CLIENTE_CEPCOB_LABELS: Record<ClienteCepCob, string> = {
	[ClienteCepCob.Value88503210]: "88503 210",
	[ClienteCepCob.Value88520100]: "88520 100",
	[ClienteCepCob.Value88521020]: "88521 020",
};

export const CLIENTE_CLIDESCONTAISSRETIDOTOTAL_LABELS: Record<
	ClienteCliDescontaIssRetidoTotal,
	string
> = {
	[ClienteCliDescontaIssRetidoTotal.N]: "Não",
};

export const CLIENTE_COBENVIAEMAIL_LABELS: Record<
	ClienteCobEnviaEmail,
	string
> = {
	[ClienteCobEnviaEmail.S]: "Sim",
};

export const CLIENTE_COBENVIASMS_LABELS: Record<ClienteCobEnviaSms, string> = {
	[ClienteCobEnviaSms.S]: "Sim",
};

export const CLIENTE_COFINSRETEM_LABELS: Record<ClienteCofinsRetem, string> = {
	[ClienteCofinsRetem.N]: "Não",
};

export const CLIENTE_COMPLEMENTOCOB_LABELS: Record<
	ClienteComplementoCob,
	string
> = {
	[ClienteComplementoCob.Casa]: "CASA",
};

export const CLIENTE_CONDPAGAMENTO_LABELS: Record<
	ClienteCondPagamento,
	string
> = {
	[ClienteCondPagamento.Value0]: "Inativo",
	[ClienteCondPagamento.Value1]: "Ativo",
};

export const CLIENTE_CONTRIBUINTEICMS_LABELS: Record<
	ClienteContribuinteIcms,
	string
> = {
	[ClienteContribuinteIcms.I]: "Inativo",
	[ClienteContribuinteIcms.N]: "Não",
	[ClienteContribuinteIcms.S]: "Sim",
};

export const CLIENTE_CONVERTCLIENTEFORN_LABELS: Record<
	ClienteConvertClienteForn,
	string
> = {
	[ClienteConvertClienteForn.N]: "Não",
};

export const CLIENTE_CRM_LABELS: Record<ClienteCrm, string> = {
	[ClienteCrm.N]: "Não",
};

export const CLIENTE_CSLLRETEM_LABELS: Record<ClienteCsllRetem, string> = {
	[ClienteCsllRetem.N]: "Não",
};

export const CLIENTE_DATAHASHREDEFINIRSENHA_LABELS: Record<
	ClienteDataHashRedefinirSenha,
	string
> = {
	[ClienteDataHashRedefinirSenha.Value20220213210939]: "2022 02 13 21:09:39",
	[ClienteDataHashRedefinirSenha.Value20220430184027]: "2022 04 30 18:40:27",
	[ClienteDataHashRedefinirSenha.Value20220609214542]: "2022 06 09 21:45:42",
	[ClienteDataHashRedefinirSenha.InvalidDate]: "Invalid Date",
};

export const CLIENTE_DESCONTOIRRFVALORINFERIOR_LABELS: Record<
	ClienteDescontoIrrfValorInferior,
	string
> = {
	[ClienteDescontoIrrfValorInferior.N]: "Não",
	[ClienteDescontoIrrfValorInferior.S]: "Sim",
};

export const CLIENTE_ENDERECOCOB_LABELS: Record<ClienteEnderecoCob, string> = {
	[ClienteEnderecoCob.AvenidaSegundoBatalhORodoviRio]:
		"Avenida Segundo Batalhão Rodoviário",
	[ClienteEnderecoCob.RuaJoODaSilvaRamos]: "Rua João Da Silva Ramos",
	[ClienteEnderecoCob.RuaTomDeSouza]: "Rua Tomé De Souza",
};

export const CLIENTE_ESTADOCIVIL_LABELS: Record<ClienteEstadoCivil, string> = {
	[ClienteEstadoCivil.Casado]: "Casado",
	[ClienteEstadoCivil.Divorciado]: "Divorciado",
	[ClienteEstadoCivil.Solteiro]: "Solteiro",
};

export const CLIENTE_FILIALID_LABELS: Record<ClienteFilialId, string> = {
	[ClienteFilialId.Value1]: "Ativo",
};

export const CLIENTE_FILTRAFILIAL_LABELS: Record<ClienteFiltraFilial, string> =
	{
		[ClienteFiltraFilial.S]: "Sim",
	};

export const CLIENTE_GRAUSATISFACAO_LABELS: Record<
	ClienteGrauSatisfacao,
	string
> = {
	[ClienteGrauSatisfacao.Value3]: "Código 3",
	[ClienteGrauSatisfacao.Value4]: "Código 4",
	[ClienteGrauSatisfacao.Value5]: "Código 5",
};

export const CLIENTE_HASHREDEFINIRSENHA_LABELS: Record<
	ClienteHashRedefinirSenha,
	string
> = {
	[ClienteHashRedefinirSenha.Value2cddcfdf3e2b1292698984122b758245]:
		"2cddcfdf3e2b1292698984122b758245",
	[ClienteHashRedefinirSenha.B66fbb2dd0c2ff76f8e9165f7a448dfb]:
		"B66fbb2dd0c2ff76f8e9165f7a448dfb",
	[ClienteHashRedefinirSenha.E9b8b8e9d41ecb186ad4ac53e246fbad]:
		"E9b8b8e9d41ecb186ad4ac53e246fbad",
};

export const CLIENTE_HOTSITEACESSO_LABELS: Record<
	ClienteHotsiteAcesso,
	string
> = {
	[ClienteHotsiteAcesso.Value0]: "Inativo",
	[ClienteHotsiteAcesso.Value2]: "Código 2",
};

export const CLIENTE_IDTIPOCLIENTE_LABELS: Record<
	ClienteIdTipoCliente,
	string
> = {
	[ClienteIdTipoCliente.Value0]: "Inativo",
	[ClienteIdTipoCliente.Value2]: "Código 2",
};

export const CLIENTE_INSSRETEM_LABELS: Record<ClienteInssRetem, string> = {
	[ClienteInssRetem.N]: "Não",
};

export const CLIENTE_IRRFRETEM_LABELS: Record<ClienteIrrfRetem, string> = {
	[ClienteIrrfRetem.N]: "Não",
};

export const CLIENTE_MORADIA_LABELS: Record<ClienteMoradia, string> = {
	[ClienteMoradia.A]: "Ativo",
	[ClienteMoradia.P]: "P",
};

export const CLIENTE_NACIONALIDADE_LABELS: Record<
	ClienteNacionalidade,
	string
> = {
	[ClienteNacionalidade.Brasileiro]: "Brasileiro",
};

export const CLIENTE_NUMDIASCOB_LABELS: Record<ClienteNumDiasCob, string> = {
	[ClienteNumDiasCob.Value0]: "Inativo",
	[ClienteNumDiasCob.Value1]: "Ativo",
};

export const CLIENTE_ORGAOPUBLICO_LABELS: Record<ClienteOrgaoPublico, string> =
	{
		[ClienteOrgaoPublico.N]: "Não",
	};

export const CLIENTE_PARTICIPACOBRANCA_LABELS: Record<
	ClienteParticipaCobranca,
	string
> = {
	[ClienteParticipaCobranca.N]: "Não",
	[ClienteParticipaCobranca.S]: "Sim",
};

export const CLIENTE_PARTICIPAPRECOBRANCA_LABELS: Record<
	ClienteParticipaPreCobranca,
	string
> = {
	[ClienteParticipaPreCobranca.S]: "Sim",
};

export const CLIENTE_PERMITEARMAZENARCARTOES_LABELS: Record<
	ClientePermiteArmazenarCartoes,
	string
> = {
	[ClientePermiteArmazenarCartoes.N]: "Não",
};

export const CLIENTE_PISRETEM_LABELS: Record<ClientePisRetem, string> = {
	[ClientePisRetem.N]: "Não",
};

export const CLIENTE_PRIMEIROACESSOCENTRAL_LABELS: Record<
	ClientePrimeiroAcessoCentral,
	string
> = {
	[ClientePrimeiroAcessoCentral.N]: "Não",
	[ClientePrimeiroAcessoCentral.S]: "Sim",
};

export const CLIENTE_REDEATIVACAO_LABELS: Record<ClienteRedeAtivacao, string> =
	{
		[ClienteRedeAtivacao.P]: "P",
	};

export const CLIENTE_REGUACOBRANCACONSIDERA_LABELS: Record<
	ClienteReguaCobrancaConsidera,
	string
> = {
	[ClienteReguaCobrancaConsidera.P]: "P",
};

export const CLIENTE_REGUACOBRANCANOTIFICACAO_LABELS: Record<
	ClienteReguaCobrancaNotificacao,
	string
> = {
	[ClienteReguaCobrancaNotificacao.S]: "Sim",
};

export const CLIENTE_REGUACOBRANCAWPP_LABELS: Record<
	ClienteReguaCobrancaWpp,
	string
> = {
	[ClienteReguaCobrancaWpp.S]: "Sim",
};

export const CLIENTE_RGORGAOEMISSOR_LABELS: Record<
	ClienteRgOrgaoEmissor,
	string
> = {
	[ClienteRgOrgaoEmissor.Dicrj]: "Dicrj",
	[ClienteRgOrgaoEmissor.Ssp]: "Ssp",
};

export const CLIENTE_SENHAHOTSITEMD5_LABELS: Record<
	ClienteSenhaHotsiteMd5,
	string
> = {
	[ClienteSenhaHotsiteMd5.N]: "Não",
	[ClienteSenhaHotsiteMd5.S]: "Sim",
};

export const CLIENTE_SEXO_LABELS: Record<ClienteSexo, string> = {
	[ClienteSexo.F]: "F",
	[ClienteSexo.M]: "M",
};

export const CLIENTE_STATUSINTERNET_LABELS: Record<
	ClienteStatusInternet,
	string
> = {
	[ClienteStatusInternet.N]: "Não",
};

export const CLIENTE_STATUSPROSPECCAO_LABELS: Record<
	ClienteStatusProspeccao,
	string
> = {
	[ClienteStatusProspeccao.C]: "C",
};

export const CLIENTE_TIPOASSINANTE_LABELS: Record<
	ClienteTipoAssinante,
	string
> = {
	[ClienteTipoAssinante.Value1]: "Ativo",
	[ClienteTipoAssinante.Value3]: "Código 3",
};

export const CLIENTE_TIPOCLIENTESCM_LABELS: Record<
	ClienteTipoClienteScm,
	string
> = {
	[ClienteTipoClienteScm.Value01]: "Código 01",
	[ClienteTipoClienteScm.Value03]: "Código 03",
};

export const CLIENTE_TIPODOCUMENTOIDENTIFICACAO_LABELS: Record<
	ClienteTipoDocumentoIdentificacao,
	string
> = {
	[ClienteTipoDocumentoIdentificacao.Value13]: "Código 13",
};

export const CLIENTE_TIPOLOCALIDADE_LABELS: Record<
	ClienteTipoLocalidade,
	string
> = {
	[ClienteTipoLocalidade.U]: "U",
};

export const CLIENTE_TIPOPESSOA_LABELS: Record<ClienteTipoPessoa, string> = {
	[ClienteTipoPessoa.F]: "F",
	[ClienteTipoPessoa.J]: "J",
};

export const CLIENTE_TIPOPESSOATITULARCONTA_LABELS: Record<
	ClienteTipoPessoaTitularConta,
	string
> = {
	[ClienteTipoPessoaTitularConta.F]: "F",
};

export const CLIENTE_UFCOB_LABELS: Record<ClienteUfCob, string> = {
	[ClienteUfCob.Value0]: "Inativo",
	[ClienteUfCob.Value2]: "Código 2",
};
