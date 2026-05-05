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
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
	6: "6",
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

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contratoAgruparFinanceiroContratoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"agrupar_financeiro_contrato: valores válidos são [Sim, Não, Padrão]",
		}),
	},
);

export const cliente_contratoAplicarDescontoTempoBloqueioSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"aplicar_desconto_tempo_bloqueio: valores válidos são [Sim, Não, Padrão]",
		}),
	},
);

export const cliente_contratoAssinaturaDigitalSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "assinatura_digital: valores válidos são [Sim, Não, Padrão]",
	}),
});

export const cliente_contratoAvisoAtrasoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "aviso_atraso: valores válidos são [Sim, Não]" }),
});

export const cliente_contratoBaseGeracaoTipoDocSchema = z.enum(
	["OPC", "PROD", "P"],
	{
		error: () => ({
			message:
				"base_geracao_tipo_doc: valores válidos são [Documento opcional do contrato, Documento do produto do contrato, Padrão]",
		}),
	},
);

export const cliente_contratoBloqueioAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "bloqueio_automatico: valores válidos são [Sim, Não]",
	}),
});

export const cliente_contratoCcPrevisaoSchema = z.enum(["P", "N", "S", "M"], {
	error: () => ({
		message:
			"cc_previsao: valores válidos são [Configuração padrão (Parâmetros), Competência (Previsão não), Caixa (Previsão sim), Manual]",
	}),
});

export const cliente_contratoContratoSuspensoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "contrato_suspenso: valores válidos são [Sim, Não]",
	}),
});

export const cliente_contratoDesbloqueioConfiancaSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"desbloqueio_confianca: valores válidos são [Habilitado, Desabilitado, Padrão]",
		}),
	},
);

export const cliente_contratoDesbloqueioConfiancaAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "desbloqueio_confianca_ativo: valores válidos são [Sim, Não]",
		}),
	},
);

export const cliente_contratoDocumentPhotoSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "document_photo: valores válidos são [Sim, Não, Padrão]",
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

export const cliente_contratoGerarFinanAssinDigitalContratoSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"gerar_finan_assin_digital_contrato: valores válidos são [Sim, Não, Padrão]",
		}),
	},
);

export const cliente_contratoImpBkpSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imp_bkp: valores válidos são [Realizado, Em Andamento]",
	}),
});

export const cliente_contratoImpCarteiraSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imp_carteira: valores válidos são [Realizada, Em Andamento]",
	}),
});

export const cliente_contratoImpImportacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imp_importacao: valores válidos são [Realizada, Em Andamento]",
	}),
});

export const cliente_contratoImpRealizadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "imp_realizado: valores válidos são [Sim, Não]" }),
});

export const cliente_contratoImpRedeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imp_rede: valores válidos são [Realizada, Em Andamento]",
	}),
});

export const cliente_contratoImpStatusSchema = z.enum(["F", "A"], {
	error: () => ({
		message: "imp_status: valores válidos são [Finalizada, Em Andamento]",
	}),
});

export const cliente_contratoImpTreinamentoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "imp_treinamento: valores válidos são [Realizado, Em Andamento]",
	}),
});

export const cliente_contratoIntegracaoAssinaturaDigitalSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"integracao_assinatura_digital: valores válidos são [Sim, Não, Padrão]",
		}),
	},
);

export const cliente_contratoIsentarContratoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "isentar_contrato: valores válidos são [Sim, Não]",
	}),
});

export const cliente_contratoLiberacaoBloqueioManualSchema = z.enum(
	["S", "N", "P"],
	{
		error: () => ({
			message:
				"liberacao_bloqueio_manual: valores válidos são [Sim, Não, Padrão]",
		}),
	},
);

export const cliente_contratoLiberacaoSuspensaoParcialSchema = z.enum(
	["H", "D", "P"],
	{
		error: () => ({
			message:
				"liberacao_suspensao_parcial: valores válidos são [Habilitado, Desabilitado, Padrão]",
		}),
	},
);

export const cliente_contratoMotivoInclusaoSchema = z.enum(
	["I", "U", "D", "M", "T", "L", "N", "R"],
	{
		error: () => ({
			message:
				"motivo_inclusao: valores válidos são [Instalação, Upgrade, Downgrade, Mudança de Endereço, Mudança de Tecnologia, Mudança de titularidade, Negociação, Reativação]",
		}),
	},
);

export const cliente_contratoOrigemCancelamentoSchema = z.enum(["M", "A"], {
	error: () => ({
		message: "origem_cancelamento: valores válidos são [Manual, Automático]",
	}),
});

export const cliente_contratoRenovacaoAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "renovacao_automatica: valores válidos são [Sim, Não]",
	}),
});

export const cliente_contratoRestricaoAutoDesbloqueioSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "restricao_auto_desbloqueio: valores válidos são [Sim, Não]",
		}),
	},
);

export const cliente_contratoRestricaoAutoLiberaSuspParcialSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"restricao_auto_libera_susp_parcial: valores válidos são [Sim, Não]",
		}),
	},
);

export const cliente_contratoSelfiePhotoSchema = z.enum(["S", "N", "P"], {
	error: () => ({
		message: "selfie_photo: valores válidos são [Sim, Não, Padrão]",
	}),
});

export const cliente_contratoStatusSchema = z.enum(["P", "A", "I", "N", "D"], {
	error: () => ({
		message:
			"status: valores válidos são [Pré-contrato, Ativo, Inativo, Negativado, Desistiu]",
	}),
});

export const cliente_contratoStatusInternetSchema = z.enum(
	["A", "D", "CM", "CA", "FA", "AA"],
	{
		error: () => ({
			message:
				"status_internet: valores válidos são [Ativo, Desativado, Bloqueio Manual, Bloqueio Automático, Financeiro em atraso, Aguardando Assinatura]",
		}),
	},
);

export const cliente_contratoStatusRecorrenciaSchema = z.enum(
	["AGUARDANDO_APROVACAO", "APROVADA", "REJEITADA", "EXPIRADA", "CANCELADA"],
	{
		error: () => ({
			message:
				"status_recorrencia: valores válidos são [Aguardando aprovação, Aprovada, Rejeitada, Expirada, Cancelada]",
		}),
	},
);

export const cliente_contratoStatusVelocidadeSchema = z.enum(["N", "R"], {
	error: () => ({
		message: "status_velocidade: valores válidos são [Normal, Reduzida]",
	}),
});

export const cliente_contratoTipoSchema = z.enum(["I", "T", "S", "SVA"], {
	error: () => ({
		message: "tipo: valores válidos são [Internet, Telefonia, Serviços, SVA]",
	}),
});

export const cliente_contratoTipoCobrancaSchema = z.enum(["P", "I", "E"], {
	error: () => ({
		message:
			"tipo_cobranca: valores válidos são [Configuração padrão, Impresso, E-mail]",
	}),
});

export const cliente_contratoTipoLocalidadeSchema = z.enum(["R", "U"], {
	error: () => ({
		message: "tipo_localidade: valores válidos são [Zona Rural, Zona Urbana]",
	}),
});

export const cliente_contratoUtilizandoAutoLiberaSuspParcSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"utilizando_auto_libera_susp_parc: valores válidos são [Sim, Não]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoAgruparFinanceiroContrato = z.infer<
	typeof cliente_contratoAgruparFinanceiroContratoSchema
>;

export type ClienteContratoAplicarDescontoTempoBloqueio = z.infer<
	typeof cliente_contratoAplicarDescontoTempoBloqueioSchema
>;

export type ClienteContratoAssinaturaDigital = z.infer<
	typeof cliente_contratoAssinaturaDigitalSchema
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

export type ClienteContratoEstratoSocialCol = z.infer<
	typeof cliente_contratoEstratoSocialColSchema
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

export type ClienteContratoStatus = z.infer<
	typeof cliente_contratoStatusSchema
>;

export type ClienteContratoStatusInternet = z.infer<
	typeof cliente_contratoStatusInternetSchema
>;

export type ClienteContratoStatusRecorrencia = z.infer<
	typeof cliente_contratoStatusRecorrenciaSchema
>;

export type ClienteContratoStatusVelocidade = z.infer<
	typeof cliente_contratoStatusVelocidadeSchema
>;

export type ClienteContratoTipo = z.infer<typeof cliente_contratoTipoSchema>;

export type ClienteContratoTipoCobranca = z.infer<
	typeof cliente_contratoTipoCobrancaSchema
>;

export type ClienteContratoTipoLocalidade = z.infer<
	typeof cliente_contratoTipoLocalidadeSchema
>;

export type ClienteContratoUtilizandoAutoLiberaSuspParc = z.infer<
	typeof cliente_contratoUtilizandoAutoLiberaSuspParcSchema
>;
