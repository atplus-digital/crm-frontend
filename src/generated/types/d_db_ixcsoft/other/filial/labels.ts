/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FILIAL_AMBNACIONAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_CENTROCUSTOSTATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const FILIAL_CERTIFICADOVALIDO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_CIIUCOL_LABELS = {
	6110: "6110",
	6120: "6120",
	6130: "6130",
	6190: "6190",
} as const;

export const FILIAL_CONTADOR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_ENVIAANEXOPDF_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_ENVIAEMAILASSINATURADIGITALCONTRATO_LABELS = {
	S: "S",
	N: "N",
	P: "P",
} as const;

export const FILIAL_ENVIAREMAILSUPORTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_GERARLOGIN_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_IMPORTARDFEAUTOMATICAMENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_INSENTIVOCULTURAL_LABELS = {
	0: "0",
	1: "1",
} as const;

export const FILIAL_INSERIRINFADICCONTRATODESCRICAOSERVICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_MOSTRARINFOADICIONAISANATEL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_NFCEIMPRIMEPRODUTOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_NFEAMBIENTE_LABELS = {
	1: "1",
	2: "2",
} as const;

export const FILIAL_NFEAMBIENTE62_LABELS = {
	1: "1",
	2: "2",
} as const;

export const FILIAL_NFECANHOTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_NFEENVIAPDFEMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_NFEENVIAXMLEMAIL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_NFEFORMATOIMP_LABELS = {
	P: "P",
	L: "L",
} as const;

export const FILIAL_OPCAOSIMPLES_LABELS = {
	0: "0",
	1: "1",
} as const;

export const FILIAL_PERMITECONVERSOESDUPLICADAS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIAL_REGIMEFISCALCOL_LABELS = {
	48: "48",
	49: "49",
} as const;

export const FILIAL_RT_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	"0-13": "0-13",
	"0-15": "0-15",
	"0-23": "0-23",
	"0-47": "0-47",
	"R-99-PN": "R-99-PN",
} as const;

export const FILIAL_TIPODOCUMENTOIDENTIFICACAOCOL_LABELS = {
	11: "11",
	12: "12",
	13: "13",
	21: "21",
	22: "22",
	31: "31",
	41: "41",
	42: "42",
	47: "47",
	50: "50",
	91: "91",
	CI: "CI",
	RUC: "RUC",
	NUIT: "NUIT",
} as const;

export const FILIAL_TIPOPESSOA_LABELS = {
	J: "J",
	F: "F",
	1: "1",
	2: "2",
} as const;

export const FILIAL_TRIBUTACAOPORRAMODEATIVIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const filialAmbNacionalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "amb_nacional: valores válidos são [S, N]" }),
});

export const filialAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const filialCentroCustoStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "centro_custo_status: valores válidos são [A, I]" }),
});

export const filialCertificadoValidoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "certificado_valido: valores válidos são [S, N]" }),
});

export const filialCiiuColSchema = z.enum(["6110", "6120", "6130", "6190"], {
	error: () => ({
		message: "ciiu_col: valores válidos são [6110, 6120, 6130, 6190]",
	}),
});

export const filialContadorSchema = z.enum(["S", "N"], {
	error: () => ({ message: "contador: valores válidos são [S, N]" }),
});

export const filialEnviaAnexoPdfSchema = z.enum(["S", "N"], {
	error: () => ({ message: "envia_anexo_pdf: valores válidos são [S, N]" }),
});

export const filialEnviaEmailAssinaturaDigitalContratoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"envia_email_assinatura_digital_contrato: valores válidos são [S, N, P]",
		}),
	},
);

export const filialEnviarEmailSuporteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "enviar_email_suporte: valores válidos são [S, N]",
	}),
});

export const filialGerarLoginSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gerar_login: valores válidos são [S, N]" }),
});

export const filialImportarDfeAutomaticamenteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "importar_dfe_automaticamente: valores válidos são [S, N]",
	}),
});

export const filialInsentivoCulturalSchema = z.enum(["0", "1"], {
	error: () => ({ message: "insentivo_cultural: valores válidos são [0, 1]" }),
});

export const filialInserirInfAdicContratoDescricaoServicoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"inserir_inf_adic_contrato_descricao_servico: valores válidos são [S, N]",
		}),
	},
);

export const filialMostrarInfoAdicionaisAnatelSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "mostrar_info_adicionais_anatel: valores válidos são [S, N]",
	}),
});

export const filialNfceImprimeProdutosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "nfce_imprime_produtos: valores válidos são [S, N]",
	}),
});

export const filialNfeAmbienteSchema = z.enum(["1", "2"], {
	error: () => ({ message: "nfe_ambiente: valores válidos são [1, 2]" }),
});

export const filialNfeAmbiente62Schema = z.enum(["1", "2"], {
	error: () => ({ message: "nfe_ambiente_62: valores válidos são [1, 2]" }),
});

export const filialNfeCanhotoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_canhoto: valores válidos são [S, N]" }),
});

export const filialNfeEnviaPdfEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_envia_pdf_email: valores válidos são [S, N]" }),
});

export const filialNfeEnviaXmlEmailSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nfe_envia_xml_email: valores válidos são [S, N]" }),
});

export const filialNfeFormatoImpSchema = z.enum(["P", "L"], {
	error: () => ({ message: "nfe_formato_imp: valores válidos são [P, L]" }),
});

export const filialOpcaoSimplesSchema = z.enum(["0", "1"], {
	error: () => ({ message: "opcao_simples: valores válidos são [0, 1]" }),
});

export const filialPermiteConversoesDuplicadasSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "permite_conversoes_duplicadas: valores válidos são [S, N]",
	}),
});

export const filialRegimeFiscalColSchema = z.enum(["48", "49"], {
	error: () => ({ message: "regime_fiscal_col: valores válidos são [48, 49]" }),
});

export const filialRtSchema = z.enum(
	["1", "2", "3", "0-13", "0-15", "0-23", "0-47", "R-99-PN"],
	{
		error: () => ({
			message:
				"rt: valores válidos são [1, 2, 3, 0-13, 0-15, 0-23, 0-47, R-99-PN]",
		}),
	},
);

export const filialTipoDocumentoIdentificacaoColSchema = z.enum(
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
		"CI",
		"RUC",
		"NUIT",
	],
	{
		error: () => ({
			message:
				"tipo_documento_identificacao_col: valores válidos são [11, 12, 13, 21, 22, 31, 41, 42, 47, 50, 91, CI, RUC, NUIT]",
		}),
	},
);

export const filialTipoPessoaSchema = z.enum(["J", "F", "1", "2"], {
	error: () => ({ message: "tipo_pessoa: valores válidos são [J, F, 1, 2]" }),
});

export const filialTributacaoPorRamoDeAtividadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "tributacao_por_ramo_de_atividade: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FilialAmbNacional = z.infer<typeof filialAmbNacionalSchema>;

export type FilialAtivo = z.infer<typeof filialAtivoSchema>;

export type FilialCentroCustoStatus = z.infer<
	typeof filialCentroCustoStatusSchema
>;

export type FilialCertificadoValido = z.infer<
	typeof filialCertificadoValidoSchema
>;

export type FilialCiiuCol = z.infer<typeof filialCiiuColSchema>;

export type FilialContador = z.infer<typeof filialContadorSchema>;

export type FilialEnviaAnexoPdf = z.infer<typeof filialEnviaAnexoPdfSchema>;

export type FilialEnviaEmailAssinaturaDigitalContrato = z.infer<
	typeof filialEnviaEmailAssinaturaDigitalContratoSchema
>;

export type FilialEnviarEmailSuporte = z.infer<
	typeof filialEnviarEmailSuporteSchema
>;

export type FilialGerarLogin = z.infer<typeof filialGerarLoginSchema>;

export type FilialImportarDfeAutomaticamente = z.infer<
	typeof filialImportarDfeAutomaticamenteSchema
>;

export type FilialInsentivoCultural = z.infer<
	typeof filialInsentivoCulturalSchema
>;

export type FilialInserirInfAdicContratoDescricaoServico = z.infer<
	typeof filialInserirInfAdicContratoDescricaoServicoSchema
>;

export type FilialMostrarInfoAdicionaisAnatel = z.infer<
	typeof filialMostrarInfoAdicionaisAnatelSchema
>;

export type FilialNfceImprimeProdutos = z.infer<
	typeof filialNfceImprimeProdutosSchema
>;

export type FilialNfeAmbiente = z.infer<typeof filialNfeAmbienteSchema>;

export type FilialNfeAmbiente62 = z.infer<typeof filialNfeAmbiente62Schema>;

export type FilialNfeCanhoto = z.infer<typeof filialNfeCanhotoSchema>;

export type FilialNfeEnviaPdfEmail = z.infer<
	typeof filialNfeEnviaPdfEmailSchema
>;

export type FilialNfeEnviaXmlEmail = z.infer<
	typeof filialNfeEnviaXmlEmailSchema
>;

export type FilialNfeFormatoImp = z.infer<typeof filialNfeFormatoImpSchema>;

export type FilialOpcaoSimples = z.infer<typeof filialOpcaoSimplesSchema>;

export type FilialPermiteConversoesDuplicadas = z.infer<
	typeof filialPermiteConversoesDuplicadasSchema
>;

export type FilialRegimeFiscalCol = z.infer<typeof filialRegimeFiscalColSchema>;

export type FilialRt = z.infer<typeof filialRtSchema>;

export type FilialTipoDocumentoIdentificacaoCol = z.infer<
	typeof filialTipoDocumentoIdentificacaoColSchema
>;

export type FilialTipoPessoa = z.infer<typeof filialTipoPessoaSchema>;

export type FilialTributacaoPorRamoDeAtividade = z.infer<
	typeof filialTributacaoPorRamoDeAtividadeSchema
>;
