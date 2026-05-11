/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
