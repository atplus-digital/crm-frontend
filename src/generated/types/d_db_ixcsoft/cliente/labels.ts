/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTE_ACESSOAUTOMATICOCENTRAL_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTE_ALTERARSENHAPRIMEIROACESSO_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTE_ATIVO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_ATIVOSERASA_LABELS = {
	"1": "Sim",
	"2": "Não",
} as const;

export const CLIENTE_CADASTRADOVIAVIABILIDADE_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_COBENVIAEMAIL_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_COBENVIASMS_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_CONTRIBUINTEICMS_LABELS = {
	S: "Sim",
	N: "Não",
	I: "Isento",
	E: "Excluido",
} as const;

export const CLIENTE_CONVERTCLIENTEFORN_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_CRM_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_DESCONTOIRRFVALORINFERIOR_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_ESTADOCIVIL_LABELS = {
	Casado: "Casado",
	Solteiro: "Solteiro",
	Divorciado: "Divorciado",
	ViaVo: "Viúvo",
} as const;

export const CLIENTE_FILTRAFILIAL_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_GRAUSATISFACAO_LABELS = {
	"1": "Nada satisfeito",
	"2": "Pouco satisfeito",
	"3": "Satisfeito",
	"4": "Muito satisfeito",
	"5": "Completamente satisfeito",
} as const;

export const CLIENTE_ISSCLASSIFICACAOPADRAO_LABELS = {
	Value00: "00 - Normal",
	Value01: "01 - Retido",
	Value02: "02 - Substituta",
	Value03: "03 - Isento",
	"99": "99 - Padrão",
} as const;

export const CLIENTE_MORADIA_LABELS = {
	P: "Própria",
	A: "Alugada",
} as const;

export const CLIENTE_ORGAOPUBLICO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_PARTICIPAPRECOBRANCA_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_REGIMEFISCALCOL_LABELS = {
	"48": "Responsable de IVA",
	"49": "No responsable de IVA",
} as const;

export const CLIENTE_REGUACOBRANCACONSIDERA_LABELS = {
	S: "Sim",
	N: "Não",
	P: "Padrão",
} as const;

export const CLIENTE_REGUACOBRANCANOTIFICACAO_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_REGUACOBRANCAWPP_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_SENHAHOTSITEMD5_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const CLIENTE_SEXO_LABELS = {
	F: "Feminino",
	M: "Masculino",
	NB: "Não binário",
	O: "Outro",
	PNI: "Prefiro não dizer",
} as const;

export const CLIENTE_STATUSPROSPECCAO_LABELS = {
	C: "Novo",
	S: "Sondagem",
	A: "Apresentando",
	N: "Negociando",
	V: "Vencemos",
	P: "Perdemos",
	AB: "Abortamos",
	SV: "Sem viabilidade",
	SP: "Sem porta disponível",
} as const;

export const CLIENTE_TIPOASSINANTE_LABELS = {
	"1": "Comercial/Industrial",
	"2": "Poder Público",
	"3": "Residencial/Pessoa física",
	"4": "Público",
	"5": "Semi-Público",
	"6": "Outros",
} as const;

export const CLIENTE_TIPOCLIENTESCM_LABELS = {
	Value01: "01 - Comercial",
	Value02: "02 - Industrial",
	Value03: "03 - Residencial/Pessoa Física",
	Value04: "04 - Produtor Rural",
	Value05:
		"05 - Órgão da administração pública estadual direta e suas fundações e autarquias, quando mantidas pelo poder público estadual e regidas por normas de direito público, termos do Convênio ICMS 107/95",
	Value06:
		"06 - Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto incidente sobre a cessão dos meios de rede do prestador do serviço ao usuário final, termos do Convênio ICMS 17/13",
	Value07:
		"07 - Missões Diplomáticas, Repartições Consulares e Organismos Internacionais, nos termos do Convênio ICMS 158/94",
	Value08: "08 - Igrejas e Templos de qualquer natureza",
	"99": "99 - Outros não especificados anteriormente",
	Value013: "0-13 - Grande contribuinte",
	Value015: "0-15 - Auto retentor",
	Value023: "0-23 - Agente de retenção IVA",
	Value047: "0-47 - Regime simples de tributação",
	R99Pn: "R-99-PN - Não aplica - Outros",
} as const;

export const CLIENTE_TIPODOCUMENTOIDENTIFICACAO_LABELS = {
	"11": "Registro civil",
	"12": "Tarjeta de identidad",
	"13": "Cédula de ciudadanía",
	"21": "Tarjeta de extranjería",
	"22": "Cédula de extranjería",
	"31": "NIT",
	"41": "Pasaporte",
	"42": "Documento de identificación extranjero",
	"47": "PEP",
	"50": "NIT de otro país",
	"91": "NUIP",
	NUIT: "NUIT",
	RUC: "Registro Único de Contribuyentes",
	CI: "Cédula de identidad",
	"4": "Cartão de Residência",
	"5": "Innominado",
	"6": "Cartão de Isenção de Imposto Diplomático",
	"9": "Outro",
	CUIT: "CUIT",
	CIBOL: "Carnet de Identidad",
	RUT: "Rol Único Tributario",
	TIN: "Tax Identification Number",
	RIF: "Registro de Información Fiscal (RIF)",
	DNI: "Documento Nacional de Indentidad",
	NIR: "Número de sécurité sociale",
	SIREN: "Système d'Identification du Répertoire des Entreprises",
	RUTURU: "Registro Único de Tributario",
} as const;

export const CLIENTE_TIPOENTEGOVERNAMENTAL_LABELS = {
	"1": "União",
	"2": "Estado",
	"3": "Distrito Federal",
	"4": "Município",
} as const;

export const CLIENTE_TIPOLOCALIDADE_LABELS = {
	R: "Zona rural",
	U: "Zona urbana",
} as const;

export const CLIENTE_TIPOPESSOA_LABELS = {
	F: "Física",
	J: "Jurídica",
	E: "Estrangeiro",
	"1": "Juridica",
	"2": "Natural",
	"3": "Estrangeiro",
} as const;

export const CLIENTE_TIPOPESSOATITULARCONTA_LABELS = {
	F: "Física",
	J: "Jurídica",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const clienteAcessoAutomaticoCentralSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message:
			"acesso_automatico_central: valores válidos são [Sim, Não, Padrão]",
	}),
});

export const clienteAlterarSenhaPrimeiroAcessoSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message:
			"alterar_senha_primeiro_acesso: valores válidos são [Sim, Não, Padrão]",
	}),
});

export const clienteAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [Sim, Não]" }),
});

export const clienteAtivoSerasaSchema = z.enum(["1", "2"], {
	error: () => ({ message: "ativo_serasa: valores válidos são [Sim, Não]" }),
});

export const clienteCadastradoViaViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cadastrado_via_viabilidade: valores válidos são [Sim, Não]",
	}),
});

export const clienteCobEnviaEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cob_envia_email: valores válidos são [Sim, Não]" }),
});

export const clienteCobEnviaSmsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cob_envia_sms: valores válidos são [Sim, Não]" }),
});

export const clienteContribuinteIcmsSchema = z.enum(["S", "N", "I", "E"], {
	error: () => ({
		message:
			"contribuinte_icms: valores válidos são [Sim, Não, Isento, Excluido]",
	}),
});

export const clienteConvertClienteFornSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "convert_cliente_forn: valores válidos são [Sim, Não]",
	}),
});

export const clienteCrmSchema = z.enum(["S", "N"], {
	error: () => ({ message: "crm: valores válidos são [Sim, Não]" }),
});

export const clienteDescontoIrrfValorInferiorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "desconto_irrf_valor_inferior: valores válidos são [Sim, Não]",
	}),
});

export const clienteEstadoCivilSchema = z.enum(
	["Casado", "Solteiro", "Divorciado", "ViÃºvo"],
	{
		error: () => ({
			message:
				"estado_civil: valores válidos são [Casado, Solteiro, Divorciado, Viúvo]",
		}),
	},
);

export const clienteFiltraFilialSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtra_filial: valores válidos são [Sim, Não]" }),
});

export const clienteGrauSatisfacaoSchema = z.enum(["1", "2", "3", "4", "5"], {
	error: () => ({
		message:
			"grau_satisfacao: valores válidos são [Nada satisfeito, Pouco satisfeito, Satisfeito, Muito satisfeito, Completamente satisfeito]",
	}),
});

export const clienteIssClassificacaoPadraoSchema = z.enum(
	["00", "01", "02", "03", "99"],
	{
		error: () => ({
			message:
				"iss_classificacao_padrao: valores válidos são [00 - Normal, 01 - Retido, 02 - Substituta, 03 - Isento, 99 - Padrão]",
		}),
	},
);

export const clienteMoradiaSchema = z.enum(["P", "A"], {
	error: () => ({ message: "moradia: valores válidos são [Própria, Alugada]" }),
});

export const clienteOrgaoPublicoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "orgao_publico: valores válidos são [Sim, Não]" }),
});

export const clienteParticipaPreCobrancaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "participa_pre_cobranca: valores válidos são [Sim, Não]",
	}),
});

export const clienteRegimeFiscalColSchema = z.enum(["48", "49"], {
	error: () => ({
		message:
			"regime_fiscal_col: valores válidos são [Responsable de IVA, No responsable de IVA]",
	}),
});

export const clienteReguaCobrancaConsideraSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "regua_cobranca_considera: valores válidos são [Sim, Não, Padrão]",
	}),
});

export const clienteReguaCobrancaNotificacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "regua_cobranca_notificacao: valores válidos são [Sim, Não]",
	}),
});

export const clienteReguaCobrancaWppSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "regua_cobranca_wpp: valores válidos são [Sim, Não]",
	}),
});

export const clienteSenhaHotsiteMd5Schema = z.enum(["S", "N"], {
	error: () => ({
		message: "senha_hotsite_md5: valores válidos são [Sim, Não]",
	}),
});

export const clienteSexoSchema = z.enum(["F", "M", "NB", "O", "PNI"], {
	error: () => ({
		message:
			"Sexo: valores válidos são [Feminino, Masculino, Não binário, Outro, Prefiro não dizer]",
	}),
});

export const clienteStatusProspeccaoSchema = z.enum(
	["C", "S", "A", "N", "V", "P", "AB", "SV", "SP"],
	{
		error: () => ({
			message:
				"status_prospeccao: valores válidos são [Novo, Sondagem, Apresentando, Negociando, Vencemos, Perdemos, Abortamos, Sem viabilidade, Sem porta disponível]",
		}),
	},
);

export const clienteTipoAssinanteSchema = z.enum(
	["1", "2", "3", "4", "5", "6"],
	{
		error: () => ({
			message:
				"tipo_assinante: valores válidos são [Comercial/Industrial, Poder Público, Residencial/Pessoa física, Público, Semi-Público, Outros]",
		}),
	},
);

export const clienteTipoClienteScmSchema = z.enum(
	[
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"99",
		"0-13",
		"0-15",
		"0-23",
		"0-47",
		"R-99-PN",
	],
	{
		error: () => ({
			message:
				"tipo_cliente_scm: valores válidos são [01 - Comercial, 02 - Industrial, 03 - Residencial/Pessoa Física, 04 - Produtor Rural, 05 - Órgão da administração pública estadual direta e suas fundações e autarquias, quando mantidas pelo poder público estadual e regidas por normas de direito público, termos do Convênio ICMS 107/95, 06 - Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto incidente sobre a cessão dos meios de rede do prestador do serviço ao usuário final, termos do Convênio ICMS 17/13, 07 - Missões Diplomáticas, Repartições Consulares e Organismos Internacionais, nos termos do Convênio ICMS 158/94, 08 - Igrejas e Templos de qualquer natureza, 99 - Outros não especificados anteriormente, 0-13 - Grande contribuinte, 0-15 - Auto retentor, 0-23 - Agente de retenção IVA, 0-47 - Regime simples de tributação, R-99-PN - Não aplica - Outros]",
		}),
	},
);

export const clienteTipoDocumentoIdentificacaoSchema = z.enum(
	[
		"11",
		"12",
		"13",
		"21",
		"22",
		"31",
		"41",
		"42",
		"47",
		"50",
		"91",
		"NUIT",
		"RUC",
		"CI",
		"4",
		"5",
		"6",
		"9",
		"CUIT",
		"CIBOL",
		"RUT",
		"TIN",
		"RIF",
		"DNI",
		"NIR",
		"SIREN",
		"RUTURU",
	],
	{
		error: () => ({
			message:
				"tipo_documento_identificacao: valores válidos são [Registro civil, Tarjeta de identidad, Cédula de ciudadanía, Tarjeta de extranjería, Cédula de extranjería, NIT, Pasaporte, Documento de identificación extranjero, PEP, NIT de otro país, NUIP, NUIT, Registro Único de Contribuyentes, Cédula de identidad, Cartão de Residência, Innominado, Cartão de Isenção de Imposto Diplomático, Outro, CUIT, Carnet de Identidad, Rol Único Tributario, Tax Identification Number, Registro de Información Fiscal (RIF), Documento Nacional de Indentidad, Número de sécurité sociale, Système d'Identification du Répertoire des Entreprises, Registro Único de Tributario]",
		}),
	},
);

export const clienteTipoEnteGovernamentalSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({
		message:
			"tipo_ente_governamental: valores válidos são [União, Estado, Distrito Federal, Município]",
	}),
});

export const clienteTipoLocalidadeSchema = z.enum(["R", "U"], {
	error: () => ({
		message: "tipo_localidade: valores válidos são [Zona rural, Zona urbana]",
	}),
});

export const clienteTipoPessoaSchema = z.enum(["F", "J", "E", "1", "2", "3"], {
	error: () => ({
		message:
			"tipo_pessoa: valores válidos são [Física, Jurídica, Estrangeiro, Juridica, Natural, Estrangeiro]",
	}),
});

export const clienteTipoPessoaTitularContaSchema = z.enum(["F", "J"], {
	error: () => ({
		message:
			"tipo_pessoa_titular_conta: valores válidos são [Física, Jurídica]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteAcessoAutomaticoCentral = z.infer<
	typeof clienteAcessoAutomaticoCentralSchema
>;

export type ClienteAlterarSenhaPrimeiroAcesso = z.infer<
	typeof clienteAlterarSenhaPrimeiroAcessoSchema
>;

export type ClienteAtivo = z.infer<typeof clienteAtivoSchema>;

export type ClienteAtivoSerasa = z.infer<typeof clienteAtivoSerasaSchema>;

export type ClienteCadastradoViaViabilidade = z.infer<
	typeof clienteCadastradoViaViabilidadeSchema
>;

export type ClienteCobEnviaEmail = z.infer<typeof clienteCobEnviaEmailSchema>;

export type ClienteCobEnviaSms = z.infer<typeof clienteCobEnviaSmsSchema>;

export type ClienteContribuinteIcms = z.infer<
	typeof clienteContribuinteIcmsSchema
>;

export type ClienteConvertClienteForn = z.infer<
	typeof clienteConvertClienteFornSchema
>;

export type ClienteCrm = z.infer<typeof clienteCrmSchema>;

export type ClienteDescontoIrrfValorInferior = z.infer<
	typeof clienteDescontoIrrfValorInferiorSchema
>;

export type ClienteEstadoCivil = z.infer<typeof clienteEstadoCivilSchema>;

export type ClienteFiltraFilial = z.infer<typeof clienteFiltraFilialSchema>;

export type ClienteGrauSatisfacao = z.infer<typeof clienteGrauSatisfacaoSchema>;

export type ClienteIssClassificacaoPadrao = z.infer<
	typeof clienteIssClassificacaoPadraoSchema
>;

export type ClienteMoradia = z.infer<typeof clienteMoradiaSchema>;

export type ClienteOrgaoPublico = z.infer<typeof clienteOrgaoPublicoSchema>;

export type ClienteParticipaPreCobranca = z.infer<
	typeof clienteParticipaPreCobrancaSchema
>;

export type ClienteRegimeFiscalCol = z.infer<
	typeof clienteRegimeFiscalColSchema
>;

export type ClienteReguaCobrancaConsidera = z.infer<
	typeof clienteReguaCobrancaConsideraSchema
>;

export type ClienteReguaCobrancaNotificacao = z.infer<
	typeof clienteReguaCobrancaNotificacaoSchema
>;

export type ClienteReguaCobrancaWpp = z.infer<
	typeof clienteReguaCobrancaWppSchema
>;

export type ClienteSenhaHotsiteMd5 = z.infer<
	typeof clienteSenhaHotsiteMd5Schema
>;

export type ClienteSexo = z.infer<typeof clienteSexoSchema>;

export type ClienteStatusProspeccao = z.infer<
	typeof clienteStatusProspeccaoSchema
>;

export type ClienteTipoAssinante = z.infer<typeof clienteTipoAssinanteSchema>;

export type ClienteTipoClienteScm = z.infer<typeof clienteTipoClienteScmSchema>;

export type ClienteTipoDocumentoIdentificacao = z.infer<
	typeof clienteTipoDocumentoIdentificacaoSchema
>;

export type ClienteTipoEnteGovernamental = z.infer<
	typeof clienteTipoEnteGovernamentalSchema
>;

export type ClienteTipoLocalidade = z.infer<typeof clienteTipoLocalidadeSchema>;

export type ClienteTipoPessoa = z.infer<typeof clienteTipoPessoaSchema>;

export type ClienteTipoPessoaTitularConta = z.infer<
	typeof clienteTipoPessoaTitularContaSchema
>;
