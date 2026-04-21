/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const CLIENTE_TABLE_NAME = "cliente";

export enum ClienteAcessoAutomaticoCentral {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteAlterarSenhaPrimeiroAcesso {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteAtivo {
	S = "S",
	N = "N",
}

export enum ClienteAtivoSerasa {
	Value1 = "1",
	Value2 = "2",
}

export enum ClienteCadastradoViaViabilidade {
	S = "S",
	N = "N",
}

export enum ClienteCobEnviaEmail {
	S = "S",
	N = "N",
}

export enum ClienteCobEnviaSms {
	S = "S",
	N = "N",
}

export enum ClienteContribuinteIcms {
	S = "S",
	N = "N",
	I = "I",
	E = "E",
}

export enum ClienteConvertClienteForn {
	S = "S",
	N = "N",
}

export enum ClienteCrm {
	S = "S",
	N = "N",
}

export enum ClienteDescontoIrrfValorInferior {
	S = "S",
	N = "N",
}

export enum ClienteEstadoCivil {
	Casado = "Casado",
	Solteiro = "Solteiro",
	Divorciado = "Divorciado",
	ViaVo = "ViÃºvo",
}

export enum ClienteFiltraFilial {
	S = "S",
	N = "N",
}

export enum ClienteGrauSatisfacao {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
}

export enum ClienteIssClassificacaoPadrao {
	Value00 = "00",
	Value01 = "01",
	Value02 = "02",
	Value03 = "03",
	Value99 = "99",
}

export enum ClienteMoradia {
	P = "P",
	A = "A",
}

export enum ClienteOrgaoPublico {
	S = "S",
	N = "N",
}

export enum ClienteParticipaPreCobranca {
	S = "S",
	N = "N",
}

export enum ClienteRegimeFiscalCol {
	Value48 = "48",
	Value49 = "49",
}

export enum ClienteReguaCobrancaConsidera {
	S = "S",
	N = "N",
	P = "P",
}

export enum ClienteReguaCobrancaNotificacao {
	S = "S",
	N = "N",
}

export enum ClienteReguaCobrancaWpp {
	S = "S",
	N = "N",
}

export enum ClienteSenhaHotsiteMd5 {
	S = "S",
	N = "N",
}

export enum ClienteSexo {
	F = "F",
	M = "M",
	Nb = "NB",
	O = "O",
	Pni = "PNI",
}

export enum ClienteStatusProspeccao {
	C = "C",
	S = "S",
	A = "A",
	N = "N",
	V = "V",
	P = "P",
	Ab = "AB",
	Sv = "SV",
	Sp = "SP",
}

export enum ClienteTipoAssinante {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export enum ClienteTipoClienteScm {
	Value01 = "01",
	Value02 = "02",
	Value03 = "03",
	Value04 = "04",
	Value05 = "05",
	Value06 = "06",
	Value07 = "07",
	Value08 = "08",
	Value99 = "99",
	Value013 = "0-13",
	Value015 = "0-15",
	Value023 = "0-23",
	Value047 = "0-47",
	R99Pn = "R-99-PN",
}

export enum ClienteTipoDocumentoIdentificacao {
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
	Value21 = "21",
	Value22 = "22",
	Value31 = "31",
	Value41 = "41",
	Value42 = "42",
	Value47 = "47",
	Value50 = "50",
	Value91 = "91",
	Nuit = "NUIT",
	Ruc = "RUC",
	Ci = "CI",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value9 = "9",
	Cuit = "CUIT",
	Cibol = "CIBOL",
	Rut = "RUT",
	Tin = "TIN",
	Rif = "RIF",
	Dni = "DNI",
	Nir = "NIR",
	Siren = "SIREN",
	Ruturu = "RUTURU",
}

export enum ClienteTipoEnteGovernamental {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
}

export enum ClienteTipoLocalidade {
	R = "R",
	U = "U",
}

export enum ClienteTipoPessoa {
	F = "F",
	J = "J",
	E = "E",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
}

export enum ClienteTipoPessoaTitularConta {
	F = "F",
	J = "J",
}

export interface Cliente {
	id: number;
	acesso_automatico_central: ClienteAcessoAutomaticoCentral;
	alerta: string;
	alterar_senha_primeiro_acesso: ClienteAlterarSenhaPrimeiroAcesso;
	antigo_acesso_central: string;
	apartamento: string;
	ativo: ClienteAtivo;
	ativo_serasa: ClienteAtivoSerasa;
	atualizar_cadastro_galaxPay: string;
	aviso_atraso: string;
	bairro: string;
	bairro_cob: string;
	bloco: string;
	bloqueio_automatico: string;
	cadastrado_no_galaxPay: string;
	cadastrado_via_viabilidade: ClienteCadastradoViaViabilidade;
	cep: string;
	cep_cob: string;
	cidade: number;
	cidade_cob: number;
	cidade_naturalidade: number;
	cif: string;
	cli_desconta_iss_retido_total: string;
	cnpj_cpf: string;
	cnpj_cpf_titular_conta: string;
	cob_envia_email: ClienteCobEnviaEmail;
	cob_envia_sms: ClienteCobEnviaSms;
	codigo_operacao: number;
	cofins_retem: string;
	complemento: string;
	complemento_cob: string;
	cond_pagamento: number;
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
	csll_retem: string;
	data: string;
	data_cadastro: string;
	data_hash_redefinir_senha: string;
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
	endereco_cob: string;
	estado_civil: ClienteEstadoCivil;
	external_id: string;
	external_system: string;
	facebook: string;
	fantasia: string;
	filial_id: number;
	filtra_filial: ClienteFiltraFilial;
	fone: string;
	fone_conjuge: string;
	freq_celular_calc_vel: string;
	freq_computador_calc_vel: string;
	freq_console_calc_vel: string;
	freq_pessoas_calc_vel: string;
	freq_smart_calc_vel: string;
	grau_satisfacao: ClienteGrauSatisfacao;
	hash_redefinir_senha: string;
	hotsite_acesso: number;
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
	id_tipo_cliente: number;
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
	inss_retem: string;
	ip_sistema: string;
	irrf_retem: string;
	iss_classificacao: string;
	iss_classificacao_padrao: ClienteIssClassificacaoPadrao;
	isuf: string;
	latitude: string;
	longitude: string;
	melhor_periodo_reserva_auto_viab: string;
	moradia: ClienteMoradia;
	nacionalidade: string;
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
	num_dias_cob: number;
	numero: string;
	numero_antigo: string;
	numero_cob: string;
	numero_cob_antigo: string;
	obs: string;
	operador_neutro: string;
	orgao_publico: ClienteOrgaoPublico;
	participa_cobranca: string;
	participa_pre_cobranca: ClienteParticipaPreCobranca;
	percentual_reducao: string;
	permite_armazenar_cartoes: string;
	pipe_id_organizacao: number;
	pis_retem: string;
	plano_negociacao_auto_viab: string;
	porta_ssh_sistema: string;
	primeiro_acesso_central: string;
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
	rede_ativacao: string;
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
	regime_fiscal_col: ClienteRegimeFiscalCol;
	regua_cobranca_considera: ClienteReguaCobrancaConsidera;
	regua_cobranca_notificacao: ClienteReguaCobrancaNotificacao;
	regua_cobranca_wpp: ClienteReguaCobrancaWpp;
	remessa_debito: string;
	responsavel: number;
	resultado_calc_vel: string;
	rg_conjuge: string;
	rg_orgao_emissor: string;
	senha: string;
	senha_hotsite_md5: ClienteSenhaHotsiteMd5;
	senha_root_sistema: string;
	Sexo: ClienteSexo;
	skype: string;
	status_internet: string;
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
	tipo_ente_governamental: ClienteTipoEnteGovernamental;
	tipo_localidade: ClienteTipoLocalidade;
	tipo_pessoa: ClienteTipoPessoa;
	tipo_pessoa_titular_conta: ClienteTipoPessoaTitularConta;
	tipo_rede: string;
	tv_access_token: string;
	tv_code: string;
	tv_refresh_token: string;
	tv_token_expires_in: string;
	uf: number;
	uf_cob: number;
	ultima_atualizacao: string;
	url_sistema: string;
	url_site: string;
	website: string;
	whatsapp: string;
	yapay_token_account: string;
}

export interface ClienteRelations {
	f_candato_tipo?: unknown | null;
	f_cidade?: unknown | null;
	f_cidade_cob?: unknown | null;
	f_cidade_naturalidade?: unknown | null;
	f_concorrente?: unknown | null;
	f_condominio?: unknown | null;
	f_conta?: unknown | null;
	f_estado_nascimento?: unknown | null;
	f_fornecedor_conversao?: unknown | null;
	f_operadora_celular?: unknown | null;
	f_perfil?: unknown | null;
	f_responsavel?: unknown | null;
	f_segmento?: unknown | null;
	f_tipo_cliente?: unknown | null;
	f_uf?: unknown | null;
	f_uf_cob?: unknown | null;
	f_vendedor?: unknown | null;
}

export type ClienteRelationKey = keyof ClienteRelations;

export const CLIENTE_ACESSOAUTOMATICOCENTRAL_LABELS: Record<
	ClienteAcessoAutomaticoCentral,
	string
> = {
	[ClienteAcessoAutomaticoCentral.S]: "Sim",
	[ClienteAcessoAutomaticoCentral.N]: "Não",
	[ClienteAcessoAutomaticoCentral.P]: "Padrão",
};

export const CLIENTE_ALTERARSENHAPRIMEIROACESSO_LABELS: Record<
	ClienteAlterarSenhaPrimeiroAcesso,
	string
> = {
	[ClienteAlterarSenhaPrimeiroAcesso.S]: "Sim",
	[ClienteAlterarSenhaPrimeiroAcesso.N]: "Não",
	[ClienteAlterarSenhaPrimeiroAcesso.P]: "Padrão",
};

export const CLIENTE_ATIVO_LABELS: Record<ClienteAtivo, string> = {
	[ClienteAtivo.S]: "Sim",
	[ClienteAtivo.N]: "Não",
};

export const CLIENTE_ATIVOSERASA_LABELS: Record<ClienteAtivoSerasa, string> = {
	[ClienteAtivoSerasa.Value1]: "Sim",
	[ClienteAtivoSerasa.Value2]: "Não",
};

export const CLIENTE_CADASTRADOVIAVIABILIDADE_LABELS: Record<
	ClienteCadastradoViaViabilidade,
	string
> = {
	[ClienteCadastradoViaViabilidade.S]: "Sim",
	[ClienteCadastradoViaViabilidade.N]: "Não",
};

export const CLIENTE_COBENVIAEMAIL_LABELS: Record<
	ClienteCobEnviaEmail,
	string
> = {
	[ClienteCobEnviaEmail.S]: "Sim",
	[ClienteCobEnviaEmail.N]: "Não",
};

export const CLIENTE_COBENVIASMS_LABELS: Record<ClienteCobEnviaSms, string> = {
	[ClienteCobEnviaSms.S]: "Sim",
	[ClienteCobEnviaSms.N]: "Não",
};

export const CLIENTE_CONTRIBUINTEICMS_LABELS: Record<
	ClienteContribuinteIcms,
	string
> = {
	[ClienteContribuinteIcms.S]: "Sim",
	[ClienteContribuinteIcms.N]: "Não",
	[ClienteContribuinteIcms.I]: "Isento",
	[ClienteContribuinteIcms.E]: "Excluido",
};

export const CLIENTE_CONVERTCLIENTEFORN_LABELS: Record<
	ClienteConvertClienteForn,
	string
> = {
	[ClienteConvertClienteForn.S]: "Sim",
	[ClienteConvertClienteForn.N]: "Não",
};

export const CLIENTE_CRM_LABELS: Record<ClienteCrm, string> = {
	[ClienteCrm.S]: "Sim",
	[ClienteCrm.N]: "Não",
};

export const CLIENTE_DESCONTOIRRFVALORINFERIOR_LABELS: Record<
	ClienteDescontoIrrfValorInferior,
	string
> = {
	[ClienteDescontoIrrfValorInferior.S]: "Sim",
	[ClienteDescontoIrrfValorInferior.N]: "Não",
};

export const CLIENTE_ESTADOCIVIL_LABELS: Record<ClienteEstadoCivil, string> = {
	[ClienteEstadoCivil.Casado]: "Casado",
	[ClienteEstadoCivil.Solteiro]: "Solteiro",
	[ClienteEstadoCivil.Divorciado]: "Divorciado",
	[ClienteEstadoCivil.ViaVo]: "Viúvo",
};

export const CLIENTE_FILTRAFILIAL_LABELS: Record<ClienteFiltraFilial, string> =
	{
		[ClienteFiltraFilial.S]: "Sim",
		[ClienteFiltraFilial.N]: "Não",
	};

export const CLIENTE_GRAUSATISFACAO_LABELS: Record<
	ClienteGrauSatisfacao,
	string
> = {
	[ClienteGrauSatisfacao.Value1]: "Nada satisfeito",
	[ClienteGrauSatisfacao.Value2]: "Pouco satisfeito",
	[ClienteGrauSatisfacao.Value3]: "Satisfeito",
	[ClienteGrauSatisfacao.Value4]: "Muito satisfeito",
	[ClienteGrauSatisfacao.Value5]: "Completamente satisfeito",
};

export const CLIENTE_ISSCLASSIFICACAOPADRAO_LABELS: Record<
	ClienteIssClassificacaoPadrao,
	string
> = {
	[ClienteIssClassificacaoPadrao.Value00]: "00 - Normal",
	[ClienteIssClassificacaoPadrao.Value01]: "01 - Retido",
	[ClienteIssClassificacaoPadrao.Value02]: "02 - Substituta",
	[ClienteIssClassificacaoPadrao.Value03]: "03 - Isento",
	[ClienteIssClassificacaoPadrao.Value99]: "99 - Padrão",
};

export const CLIENTE_MORADIA_LABELS: Record<ClienteMoradia, string> = {
	[ClienteMoradia.P]: "Própria",
	[ClienteMoradia.A]: "Alugada",
};

export const CLIENTE_ORGAOPUBLICO_LABELS: Record<ClienteOrgaoPublico, string> =
	{
		[ClienteOrgaoPublico.S]: "Sim",
		[ClienteOrgaoPublico.N]: "Não",
	};

export const CLIENTE_PARTICIPAPRECOBRANCA_LABELS: Record<
	ClienteParticipaPreCobranca,
	string
> = {
	[ClienteParticipaPreCobranca.S]: "Sim",
	[ClienteParticipaPreCobranca.N]: "Não",
};

export const CLIENTE_REGIMEFISCALCOL_LABELS: Record<
	ClienteRegimeFiscalCol,
	string
> = {
	[ClienteRegimeFiscalCol.Value48]: "Responsable de IVA",
	[ClienteRegimeFiscalCol.Value49]: "No responsable de IVA",
};

export const CLIENTE_REGUACOBRANCACONSIDERA_LABELS: Record<
	ClienteReguaCobrancaConsidera,
	string
> = {
	[ClienteReguaCobrancaConsidera.S]: "Sim",
	[ClienteReguaCobrancaConsidera.N]: "Não",
	[ClienteReguaCobrancaConsidera.P]: "Padrão",
};

export const CLIENTE_REGUACOBRANCANOTIFICACAO_LABELS: Record<
	ClienteReguaCobrancaNotificacao,
	string
> = {
	[ClienteReguaCobrancaNotificacao.S]: "Sim",
	[ClienteReguaCobrancaNotificacao.N]: "Não",
};

export const CLIENTE_REGUACOBRANCAWPP_LABELS: Record<
	ClienteReguaCobrancaWpp,
	string
> = {
	[ClienteReguaCobrancaWpp.S]: "Sim",
	[ClienteReguaCobrancaWpp.N]: "Não",
};

export const CLIENTE_SENHAHOTSITEMD5_LABELS: Record<
	ClienteSenhaHotsiteMd5,
	string
> = {
	[ClienteSenhaHotsiteMd5.S]: "Sim",
	[ClienteSenhaHotsiteMd5.N]: "Não",
};

export const CLIENTE_SEXO_LABELS: Record<ClienteSexo, string> = {
	[ClienteSexo.F]: "Feminino",
	[ClienteSexo.M]: "Masculino",
	[ClienteSexo.Nb]: "Não binário",
	[ClienteSexo.O]: "Outro",
	[ClienteSexo.Pni]: "Prefiro não dizer",
};

export const CLIENTE_STATUSPROSPECCAO_LABELS: Record<
	ClienteStatusProspeccao,
	string
> = {
	[ClienteStatusProspeccao.C]: "Novo",
	[ClienteStatusProspeccao.S]: "Sondagem",
	[ClienteStatusProspeccao.A]: "Apresentando",
	[ClienteStatusProspeccao.N]: "Negociando",
	[ClienteStatusProspeccao.V]: "Vencemos",
	[ClienteStatusProspeccao.P]: "Perdemos",
	[ClienteStatusProspeccao.Ab]: "Abortamos",
	[ClienteStatusProspeccao.Sv]: "Sem viabilidade",
	[ClienteStatusProspeccao.Sp]: "Sem porta disponível",
};

export const CLIENTE_TIPOASSINANTE_LABELS: Record<
	ClienteTipoAssinante,
	string
> = {
	[ClienteTipoAssinante.Value1]: "Comercial/Industrial",
	[ClienteTipoAssinante.Value2]: "Poder Público",
	[ClienteTipoAssinante.Value3]: "Residencial/Pessoa física",
	[ClienteTipoAssinante.Value4]: "Público",
	[ClienteTipoAssinante.Value5]: "Semi-Público",
	[ClienteTipoAssinante.Value6]: "Outros",
};

export const CLIENTE_TIPOCLIENTESCM_LABELS: Record<
	ClienteTipoClienteScm,
	string
> = {
	[ClienteTipoClienteScm.Value01]: "01 - Comercial",
	[ClienteTipoClienteScm.Value02]: "02 - Industrial",
	[ClienteTipoClienteScm.Value03]: "03 - Residencial/Pessoa Física",
	[ClienteTipoClienteScm.Value04]: "04 - Produtor Rural",
	[ClienteTipoClienteScm.Value05]:
		"05 - Órgão da administração pública estadual direta e suas fundações e autarquias, quando mantidas pelo poder público estadual e regidas por normas de direito público, termos do Convênio ICMS 107/95",
	[ClienteTipoClienteScm.Value06]:
		"06 - Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto incidente sobre a cessão dos meios de rede do prestador do serviço ao usuário final, termos do Convênio ICMS 17/13",
	[ClienteTipoClienteScm.Value07]:
		"07 - Missões Diplomáticas, Repartições Consulares e Organismos Internacionais, nos termos do Convênio ICMS 158/94",
	[ClienteTipoClienteScm.Value08]:
		"08 - Igrejas e Templos de qualquer natureza",
	[ClienteTipoClienteScm.Value99]:
		"99 - Outros não especificados anteriormente",
	[ClienteTipoClienteScm.Value013]: "0-13 - Grande contribuinte",
	[ClienteTipoClienteScm.Value015]: "0-15 - Auto retentor",
	[ClienteTipoClienteScm.Value023]: "0-23 - Agente de retenção IVA",
	[ClienteTipoClienteScm.Value047]: "0-47 - Regime simples de tributação",
	[ClienteTipoClienteScm.R99Pn]: "R-99-PN - Não aplica - Outros",
};

export const CLIENTE_TIPODOCUMENTOIDENTIFICACAO_LABELS: Record<
	ClienteTipoDocumentoIdentificacao,
	string
> = {
	[ClienteTipoDocumentoIdentificacao.Value11]: "Registro civil",
	[ClienteTipoDocumentoIdentificacao.Value12]: "Tarjeta de identidad",
	[ClienteTipoDocumentoIdentificacao.Value13]: "Cédula de ciudadanía",
	[ClienteTipoDocumentoIdentificacao.Value21]: "Tarjeta de extranjería",
	[ClienteTipoDocumentoIdentificacao.Value22]: "Cédula de extranjería",
	[ClienteTipoDocumentoIdentificacao.Value31]: "NIT",
	[ClienteTipoDocumentoIdentificacao.Value41]: "Pasaporte",
	[ClienteTipoDocumentoIdentificacao.Value42]:
		"Documento de identificación extranjero",
	[ClienteTipoDocumentoIdentificacao.Value47]: "PEP",
	[ClienteTipoDocumentoIdentificacao.Value50]: "NIT de otro país",
	[ClienteTipoDocumentoIdentificacao.Value91]: "NUIP",
	[ClienteTipoDocumentoIdentificacao.Nuit]: "NUIT",
	[ClienteTipoDocumentoIdentificacao.Ruc]: "Registro Único de Contribuyentes",
	[ClienteTipoDocumentoIdentificacao.Ci]: "Cédula de identidad",
	[ClienteTipoDocumentoIdentificacao.Value4]: "Cartão de Residência",
	[ClienteTipoDocumentoIdentificacao.Value5]: "Innominado",
	[ClienteTipoDocumentoIdentificacao.Value6]:
		"Cartão de Isenção de Imposto Diplomático",
	[ClienteTipoDocumentoIdentificacao.Value9]: "Outro",
	[ClienteTipoDocumentoIdentificacao.Cuit]: "CUIT",
	[ClienteTipoDocumentoIdentificacao.Cibol]: "Carnet de Identidad",
	[ClienteTipoDocumentoIdentificacao.Rut]: "Rol Único Tributario",
	[ClienteTipoDocumentoIdentificacao.Tin]: "Tax Identification Number",
	[ClienteTipoDocumentoIdentificacao.Rif]:
		"Registro de Información Fiscal (RIF)",
	[ClienteTipoDocumentoIdentificacao.Dni]: "Documento Nacional de Indentidad",
	[ClienteTipoDocumentoIdentificacao.Nir]: "Número de sécurité sociale",
	[ClienteTipoDocumentoIdentificacao.Siren]:
		"Système d'Identification du Répertoire des Entreprises",
	[ClienteTipoDocumentoIdentificacao.Ruturu]: "Registro Único de Tributario",
};

export const CLIENTE_TIPOENTEGOVERNAMENTAL_LABELS: Record<
	ClienteTipoEnteGovernamental,
	string
> = {
	[ClienteTipoEnteGovernamental.Value1]: "União",
	[ClienteTipoEnteGovernamental.Value2]: "Estado",
	[ClienteTipoEnteGovernamental.Value3]: "Distrito Federal",
	[ClienteTipoEnteGovernamental.Value4]: "Município",
};

export const CLIENTE_TIPOLOCALIDADE_LABELS: Record<
	ClienteTipoLocalidade,
	string
> = {
	[ClienteTipoLocalidade.R]: "Zona rural",
	[ClienteTipoLocalidade.U]: "Zona urbana",
};

export const CLIENTE_TIPOPESSOA_LABELS: Record<ClienteTipoPessoa, string> = {
	[ClienteTipoPessoa.F]: "Física",
	[ClienteTipoPessoa.J]: "Jurídica",
	[ClienteTipoPessoa.E]: "Estrangeiro",
	[ClienteTipoPessoa.Value1]: "Juridica",
	[ClienteTipoPessoa.Value2]: "Natural",
	[ClienteTipoPessoa.Value3]: "Estrangeiro",
};

export const CLIENTE_TIPOPESSOATITULARCONTA_LABELS: Record<
	ClienteTipoPessoaTitularConta,
	string
> = {
	[ClienteTipoPessoaTitularConta.F]: "Física",
	[ClienteTipoPessoaTitularConta.J]: "Jurídica",
};
