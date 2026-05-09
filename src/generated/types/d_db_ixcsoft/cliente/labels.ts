/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTE_ALTERARSENHAPRIMEIROACESSO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTE_ANTIGOACESSOCENTRAL_LABELS = {
	S: "S",
	N: "N",
	A: "A",
} as const;

export const CLIENTE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_ATUALIZARCADASTROGALAXPAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_AVISOATRASO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_BLOQUEIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_CADASTRADONOGALAXPAY_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_CADASTRADOVIAVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_CLIDESCONTAISSRETIDOTOTAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_COBENVIAEMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_COBENVIASMS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_COFINSRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_CONTRIBUINTEICMS_LABELS = {
	S: "S",
	N: "N",
	I: "I",
} as const;

export const CLIENTE_CONVERTCLIENTEFORN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_CRM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_CSLLRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_DESCONTOIRRFVALORINFERIOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_ESTADOCIVIL_LABELS = {
	Casado: "Casado",
	Solteiro: "Solteiro",
	Divorciado: "Divorciado",
	Viúvo: "Viúvo",
} as const;

export const CLIENTE_FILTRAFILIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_GRAUSATISFACAO_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
} as const;

export const CLIENTE_INSSRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_IRRFRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_MELHORPERIODORESERVAAUTOVIAB_LABELS = {
	M: "M",
	N: "N",
	T: "T",
} as const;

export const CLIENTE_MORADIA_LABELS = {
	P: "P",
	A: "A",
} as const;

export const CLIENTE_ORGAOPUBLICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_PARTICIPACOBRANCA_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTE_PARTICIPAPRECOBRANCA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_PERMITEARMAZENARCARTOES_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_PISRETEM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_REDEATIVACAO_LABELS = {
	P: "P",
	N: "N",
} as const;

export const CLIENTE_REGIMEFISCALCOL_LABELS = {
	48: "48",
	49: "49",
} as const;

export const CLIENTE_REGUACOBRANCACONSIDERA_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const CLIENTE_REGUACOBRANCANOTIFICACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_REGUACOBRANCAWPP_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_SENHAHOTSITEMD5_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_SEXO_LABELS = {
	F: "F",
	M: "M",
	NB: "NB",
	O: "O",
	PNI: "PNI",
} as const;

export const CLIENTE_STATUSINTERNET_LABELS = {
	N: "N",
	A: "A",
	D: "D",
	CM: "CM",
	CA: "CA",
	CE: "CE",
	FA: "FA",
} as const;

export const CLIENTE_STATUSPROSPECCAO_LABELS = {
	C: "C",
	S: "S",
	A: "A",
	N: "N",
	V: "V",
	P: "P",
	AB: "AB",
	SV: "SV",
	SP: "SP",
	AC: "AC",
} as const;

export const CLIENTE_STATUSVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CLIENTE_TIPOASSINANTE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
} as const;

export const CLIENTE_TIPOCLIENTESCM_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
	"08": "08",
	99: "99",
	"0-13": "0-13",
	"0-15": "0-15",
	"0-23": "0-23",
	"0-47": "0-47",
	"R-99-PN": "R-99-PN",
} as const;

export const CLIENTE_TIPOENTEGOVERNAMENTAL_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
} as const;

export const CLIENTE_TIPOLOCALIDADE_LABELS = {
	R: "R",
	U: "U",
} as const;

export const CLIENTE_TIPOPESSOA_LABELS = {
	J: "J",
	F: "F",
	E: "E",
	1: "1",
	2: "2",
	3: "3",
} as const;

export const CLIENTE_TIPOPESSOATITULARCONTA_LABELS = {
	F: "F",
	J: "J",
} as const;

export const CLIENTE_TIPOREDE_LABELS = {
	P: "P",
	N: "N",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const clienteAlterarSenhaPrimeiroAcessoSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "alterar_senha_primeiro_acesso: valores válidos são [S, N, P]",
	}),
});

export const clienteAntigoAcessoCentralSchema = z.enum(["S", "N", "A"], {
	error: () => ({
		message: "antigo_acesso_central: valores válidos são [S, N, A]",
	}),
});

export const clienteAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const clienteAtualizarCadastroGalaxpaySchema = z.enum(["S", "N"], {
	error: () => ({
		message: "atualizar_cadastro_galaxPay: valores válidos são [S, N]",
	}),
});

export const clienteAvisoAtrasoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aviso_atraso: valores válidos são [S, N]" }),
});

export const clienteBloqueioAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "bloqueio_automatico: valores válidos são [S, N]" }),
});

export const clienteCadastradoNoGalaxpaySchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cadastrado_no_galaxPay: valores válidos são [S, N]",
	}),
});

export const clienteCadastradoViaViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cadastrado_via_viabilidade: valores válidos são [S, N]",
	}),
});

export const clienteCliDescontaIssRetidoTotalSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cli_desconta_iss_retido_total: valores válidos são [S, N]",
	}),
});

export const clienteCobEnviaEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cob_envia_email: valores válidos são [S, N]" }),
});

export const clienteCobEnviaSmsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cob_envia_sms: valores válidos são [S, N]" }),
});

export const clienteCofinsRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "cofins_retem: valores válidos são [S, N]" }),
});

export const clienteContribuinteIcmsSchema = z.enum(["S", "N", "I"], {
	error: () => ({
		message: "contribuinte_icms: valores válidos são [S, N, I]",
	}),
});

export const clienteConvertClienteFornSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "convert_cliente_forn: valores válidos são [S, N]",
	}),
});

export const clienteCrmSchema = z.enum(["S", "N"], {
	error: () => ({ message: "crm: valores válidos são [S, N]" }),
});

export const clienteCsllRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "csll_retem: valores válidos são [S, N]" }),
});

export const clienteDescontoIrrfValorInferiorSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "desconto_irrf_valor_inferior: valores válidos são [S, N]",
	}),
});

export const clienteEstadoCivilSchema = z.enum(
	["Casado", "Solteiro", "Divorciado", "Viúvo"],
	{
		error: () => ({
			message:
				"estado_civil: valores válidos são [Casado, Solteiro, Divorciado, Viúvo]",
		}),
	},
);

export const clienteFiltraFilialSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filtra_filial: valores válidos são [S, N]" }),
});

export const clienteGrauSatisfacaoSchema = z.enum(["1", "2", "3", "4", "5"], {
	error: () => ({
		message: "grau_satisfacao: valores válidos são [1, 2, 3, 4, 5]",
	}),
});

export const clienteInssRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "inss_retem: valores válidos são [S, N]" }),
});

export const clienteIrrfRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "irrf_retem: valores válidos são [S, N]" }),
});

export const clienteMelhorPeriodoReservaAutoViabSchema = z.enum(
	["M", "N", "T"],
	{
		error: () => ({
			message:
				"melhor_periodo_reserva_auto_viab: valores válidos são [M, N, T]",
		}),
	},
);

export const clienteMoradiaSchema = z.enum(["P", "A"], {
	error: () => ({ message: "moradia: valores válidos são [P, A]" }),
});

export const clienteOrgaoPublicoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "orgao_publico: valores válidos são [S, N]" }),
});

export const clienteParticipaCobrancaSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "participa_cobranca: valores válidos são [S, N, P]",
	}),
});

export const clienteParticipaPreCobrancaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "participa_pre_cobranca: valores válidos são [S, N]",
	}),
});

export const clientePermiteArmazenarCartoesSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_armazenar_cartoes: valores válidos são [S, N]",
	}),
});

export const clientePisRetemSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pis_retem: valores válidos são [S, N]" }),
});

export const clienteRedeAtivacaoSchema = z.enum(["P", "N"], {
	error: () => ({ message: "rede_ativacao: valores válidos são [P, N]" }),
});

export const clienteRegimeFiscalColSchema = z.enum(["48", "49"], {
	error: () => ({ message: "regime_fiscal_col: valores válidos são [48, 49]" }),
});

export const clienteReguaCobrancaConsideraSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "regua_cobranca_considera: valores válidos são [S, N, P]",
	}),
});

export const clienteReguaCobrancaNotificacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "regua_cobranca_notificacao: valores válidos são [S, N]",
	}),
});

export const clienteReguaCobrancaWppSchema = z.enum(["S", "N"], {
	error: () => ({ message: "regua_cobranca_wpp: valores válidos são [S, N]" }),
});

export const clienteSenhaHotsiteMd5Schema = z.enum(["S", "N"], {
	error: () => ({ message: "senha_hotsite_md5: valores válidos são [S, N]" }),
});

export const clienteSexoSchema = z.enum(["F", "M", "NB", "O", "PNI"], {
	error: () => ({ message: "Sexo: valores válidos são [F, M, NB, O, PNI]" }),
});

export const clienteStatusInternetSchema = z.enum(
	["N", "A", "D", "CM", "CA", "CE", "FA"],
	{
		error: () => ({
			message: "status_internet: valores válidos são [N, A, D, CM, CA, CE, FA]",
		}),
	},
);

export const clienteStatusProspeccaoSchema = z.enum(
	["C", "S", "A", "N", "V", "P", "AB", "SV", "SP", "AC"],
	{
		error: () => ({
			message:
				"status_prospeccao: valores válidos são [C, S, A, N, V, P, AB, SV, SP, AC]",
		}),
	},
);

export const clienteStatusViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status_viabilidade: valores válidos são [S, N]" }),
});

export const clienteTipoAssinanteSchema = z.enum(
	["1", "2", "3", "4", "5", "6"],
	{
		error: () => ({
			message: "tipo_assinante: valores válidos são [1, 2, 3, 4, 5, 6]",
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
				"tipo_cliente_scm: valores válidos são [01, 02, 03, 04, 05, 06, 07, 08, 99, 0-13, 0-15, 0-23, 0-47, R-99-PN]",
		}),
	},
);

export const clienteTipoEnteGovernamentalSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({
		message: "tipo_ente_governamental: valores válidos são [1, 2, 3, 4]",
	}),
});

export const clienteTipoLocalidadeSchema = z.enum(["R", "U"], {
	error: () => ({ message: "tipo_localidade: valores válidos são [R, U]" }),
});

export const clienteTipoPessoaSchema = z.enum(["J", "F", "E", "1", "2", "3"], {
	error: () => ({
		message: "tipo_pessoa: valores válidos são [J, F, E, 1, 2, 3]",
	}),
});

export const clienteTipoPessoaTitularContaSchema = z.enum(["F", "J"], {
	error: () => ({
		message: "tipo_pessoa_titular_conta: valores válidos são [F, J]",
	}),
});

export const clienteTipoRedeSchema = z.enum(["P", "N", "A"], {
	error: () => ({ message: "tipo_rede: valores válidos são [P, N, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteAlterarSenhaPrimeiroAcesso = z.infer<
	typeof clienteAlterarSenhaPrimeiroAcessoSchema
>;

export type ClienteAntigoAcessoCentral = z.infer<
	typeof clienteAntigoAcessoCentralSchema
>;

export type ClienteAtivo = z.infer<typeof clienteAtivoSchema>;

export type ClienteAtualizarCadastroGalaxpay = z.infer<
	typeof clienteAtualizarCadastroGalaxpaySchema
>;

export type ClienteAvisoAtraso = z.infer<typeof clienteAvisoAtrasoSchema>;

export type ClienteBloqueioAutomatico = z.infer<
	typeof clienteBloqueioAutomaticoSchema
>;

export type ClienteCadastradoNoGalaxpay = z.infer<
	typeof clienteCadastradoNoGalaxpaySchema
>;

export type ClienteCadastradoViaViabilidade = z.infer<
	typeof clienteCadastradoViaViabilidadeSchema
>;

export type ClienteCliDescontaIssRetidoTotal = z.infer<
	typeof clienteCliDescontaIssRetidoTotalSchema
>;

export type ClienteCobEnviaEmail = z.infer<typeof clienteCobEnviaEmailSchema>;

export type ClienteCobEnviaSms = z.infer<typeof clienteCobEnviaSmsSchema>;

export type ClienteCofinsRetem = z.infer<typeof clienteCofinsRetemSchema>;

export type ClienteContribuinteIcms = z.infer<
	typeof clienteContribuinteIcmsSchema
>;

export type ClienteConvertClienteForn = z.infer<
	typeof clienteConvertClienteFornSchema
>;

export type ClienteCrm = z.infer<typeof clienteCrmSchema>;

export type ClienteCsllRetem = z.infer<typeof clienteCsllRetemSchema>;

export type ClienteDescontoIrrfValorInferior = z.infer<
	typeof clienteDescontoIrrfValorInferiorSchema
>;

export type ClienteEstadoCivil = z.infer<typeof clienteEstadoCivilSchema>;

export type ClienteFiltraFilial = z.infer<typeof clienteFiltraFilialSchema>;

export type ClienteGrauSatisfacao = z.infer<typeof clienteGrauSatisfacaoSchema>;

export type ClienteInssRetem = z.infer<typeof clienteInssRetemSchema>;

export type ClienteIrrfRetem = z.infer<typeof clienteIrrfRetemSchema>;

export type ClienteMelhorPeriodoReservaAutoViab = z.infer<
	typeof clienteMelhorPeriodoReservaAutoViabSchema
>;

export type ClienteMoradia = z.infer<typeof clienteMoradiaSchema>;

export type ClienteOrgaoPublico = z.infer<typeof clienteOrgaoPublicoSchema>;

export type ClienteParticipaCobranca = z.infer<
	typeof clienteParticipaCobrancaSchema
>;

export type ClienteParticipaPreCobranca = z.infer<
	typeof clienteParticipaPreCobrancaSchema
>;

export type ClientePermiteArmazenarCartoes = z.infer<
	typeof clientePermiteArmazenarCartoesSchema
>;

export type ClientePisRetem = z.infer<typeof clientePisRetemSchema>;

export type ClienteRedeAtivacao = z.infer<typeof clienteRedeAtivacaoSchema>;

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

export type ClienteStatusInternet = z.infer<typeof clienteStatusInternetSchema>;

export type ClienteStatusProspeccao = z.infer<
	typeof clienteStatusProspeccaoSchema
>;

export type ClienteStatusViabilidade = z.infer<
	typeof clienteStatusViabilidadeSchema
>;

export type ClienteTipoAssinante = z.infer<typeof clienteTipoAssinanteSchema>;

export type ClienteTipoClienteScm = z.infer<typeof clienteTipoClienteScmSchema>;

export type ClienteTipoEnteGovernamental = z.infer<
	typeof clienteTipoEnteGovernamentalSchema
>;

export type ClienteTipoLocalidade = z.infer<typeof clienteTipoLocalidadeSchema>;

export type ClienteTipoPessoa = z.infer<typeof clienteTipoPessoaSchema>;

export type ClienteTipoPessoaTitularConta = z.infer<
	typeof clienteTipoPessoaTitularContaSchema
>;

export type ClienteTipoRede = z.infer<typeof clienteTipoRedeSchema>;
