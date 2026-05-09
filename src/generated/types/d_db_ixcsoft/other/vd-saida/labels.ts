/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VDSAIDA_AMBIENTENF_LABELS = {
	1: "1",
	2: "2",
} as const;

export const VDSAIDA_APROVADESCONTO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_EHFATURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_FINALIDADENFE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	n62: "n62",
	s62: "s62",
	ad62: "ad62",
	5: "5",
	6: "6",
} as const;

export const VDSAIDA_FORMULARIO_LABELS = {
	P: "P",
	C: "C",
	I: "I",
	T: "T",
} as const;

export const VDSAIDA_GERAESTOQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_IMPRESSO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_MODNFSUBSTITUIDA_LABELS = {
	nf21: "nf21",
	nf22: "nf22",
	nfcom62: "nfcom62",
} as const;

export const VDSAIDA_MODELONOTASUBSTITUIDA_LABELS = {
	21: "21",
	22: "22",
} as const;

export const VDSAIDA_MOTIVOSUBSTITUICAO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
} as const;

export const VDSAIDA_NFEREFERENCIADASIGILO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_NOTARETROATIVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_ORIGEM_LABELS = {
	contrato_taxa_ativacao: "contrato_taxa_ativacao",
} as const;

export const VDSAIDA_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VDSAIDA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	D: "D",
	AP: "AP",
	PE: "PE",
} as const;

export const VDSAIDA_STATUSAJUSTENF_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_STATUSSUBSTITUICAONF_LABELS = {
	N: "N",
	S: "S",
} as const;

export const VDSAIDA_TIPOTRIBUTACAO_LABELS = {
	ICMS: "ICMS",
	ISSQN: "ISSQN",
} as const;

export const VDSAIDA_TPNOTACREDITO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
} as const;

export const VDSAIDA_TPNOTADEBITO_LABELS = {
	"01": "01",
	"02": "02",
	"03": "03",
	"04": "04",
	"05": "05",
	"06": "06",
	"07": "07",
} as const;

export const VDSAIDA_TPIMPNFE_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
	5: "5",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const vd_saidaAmbienteNfSchema = z.enum(["1", "2"], {
	error: () => ({ message: "ambiente_nf: valores válidos são [1, 2]" }),
});

export const vd_saidaAprovaDescontoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "aprova_desconto: valores válidos são [N, S]" }),
});

export const vd_saidaEhFaturaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "eh_fatura: valores válidos são [S, N]" }),
});

export const vd_saidaFinalidadeNfeSchema = z.enum(
	["1", "2", "3", "4", "n62", "s62", "ad62", "5", "6"],
	{
		error: () => ({
			message:
				"finalidade_nfe: valores válidos são [1, 2, 3, 4, n62, s62, ad62, 5, 6]",
		}),
	},
);

export const vd_saidaFormularioSchema = z.enum(["P", "C", "I", "T"], {
	error: () => ({ message: "formulario: valores válidos são [P, C, I, T]" }),
});

export const vd_saidaGeraEstoqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_estoque: valores válidos são [S, N]" }),
});

export const vd_saidaImpressoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "impresso: valores válidos são [N, S]" }),
});

export const vd_saidaModNfSubstituidaSchema = z.enum(
	["nf21", "nf22", "nfcom62"],
	{
		error: () => ({
			message: "mod_nf_substituida: valores válidos são [nf21, nf22, nfcom62]",
		}),
	},
);

export const vd_saidaModeloNotaSubstituidaSchema = z.enum(["21", "22"], {
	error: () => ({
		message: "modelo_nota_substituida: valores válidos são [21, 22]",
	}),
});

export const vd_saidaMotivoSubstituicaoSchema = z.enum(
	["01", "02", "03", "04", "05"],
	{
		error: () => ({
			message: "motivo_substituicao: valores válidos são [01, 02, 03, 04, 05]",
		}),
	},
);

export const vd_saidaNfeReferenciadaSigiloSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "nfe_referenciada_sigilo: valores válidos são [S, N]",
	}),
});

export const vd_saidaNotaRetroativaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "nota_retroativa: valores válidos são [S, N]" }),
});

export const vd_saidaOrigemSchema = z.enum(["contrato_taxa_ativacao"], {
	error: () => ({
		message: "origem: valores válidos são [contrato_taxa_ativacao]",
	}),
});

export const vd_saidaPrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const vd_saidaStatusSchema = z.enum(["A", "F", "C", "D", "AP", "PE"], {
	error: () => ({
		message: "status: valores válidos são [A, F, C, D, AP, PE]",
	}),
});

export const vd_saidaStatusAjusteNfSchema = z.enum(["N", "S"], {
	error: () => ({ message: "status_ajuste_nf: valores válidos são [N, S]" }),
});

export const vd_saidaStatusSubstituicaoNfSchema = z.enum(["N", "S"], {
	error: () => ({
		message: "status_substituicao_nf: valores válidos são [N, S]",
	}),
});

export const vd_saidaTipoTributacaoSchema = z.enum(["ICMS", "ISSQN"], {
	error: () => ({
		message: "tipo_tributacao: valores válidos são [ICMS, ISSQN]",
	}),
});

export const vd_saidaTpNotaCreditoSchema = z.enum(["01", "02", "03"], {
	error: () => ({
		message: "tp_nota_credito: valores válidos são [01, 02, 03]",
	}),
});

export const vd_saidaTpNotaDebitoSchema = z.enum(
	["01", "02", "03", "04", "05", "06", "07"],
	{
		error: () => ({
			message:
				"tp_nota_debito: valores válidos são [01, 02, 03, 04, 05, 06, 07]",
		}),
	},
);

export const vd_saidaTpimpNfeSchema = z.enum(["1", "2", "3", "4", "5"], {
	error: () => ({ message: "tpimp_nfe: valores válidos são [1, 2, 3, 4, 5]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VdSaidaAmbienteNf = z.infer<typeof vd_saidaAmbienteNfSchema>;

export type VdSaidaAprovaDesconto = z.infer<
	typeof vd_saidaAprovaDescontoSchema
>;

export type VdSaidaEhFatura = z.infer<typeof vd_saidaEhFaturaSchema>;

export type VdSaidaFinalidadeNfe = z.infer<typeof vd_saidaFinalidadeNfeSchema>;

export type VdSaidaFormulario = z.infer<typeof vd_saidaFormularioSchema>;

export type VdSaidaGeraEstoque = z.infer<typeof vd_saidaGeraEstoqueSchema>;

export type VdSaidaImpresso = z.infer<typeof vd_saidaImpressoSchema>;

export type VdSaidaModNfSubstituida = z.infer<
	typeof vd_saidaModNfSubstituidaSchema
>;

export type VdSaidaModeloNotaSubstituida = z.infer<
	typeof vd_saidaModeloNotaSubstituidaSchema
>;

export type VdSaidaMotivoSubstituicao = z.infer<
	typeof vd_saidaMotivoSubstituicaoSchema
>;

export type VdSaidaNfeReferenciadaSigilo = z.infer<
	typeof vd_saidaNfeReferenciadaSigiloSchema
>;

export type VdSaidaNotaRetroativa = z.infer<
	typeof vd_saidaNotaRetroativaSchema
>;

export type VdSaidaOrigem = z.infer<typeof vd_saidaOrigemSchema>;

export type VdSaidaPrevisao = z.infer<typeof vd_saidaPrevisaoSchema>;

export type VdSaidaStatus = z.infer<typeof vd_saidaStatusSchema>;

export type VdSaidaStatusAjusteNf = z.infer<
	typeof vd_saidaStatusAjusteNfSchema
>;

export type VdSaidaStatusSubstituicaoNf = z.infer<
	typeof vd_saidaStatusSubstituicaoNfSchema
>;

export type VdSaidaTipoTributacao = z.infer<
	typeof vd_saidaTipoTributacaoSchema
>;

export type VdSaidaTpNotaCredito = z.infer<typeof vd_saidaTpNotaCreditoSchema>;

export type VdSaidaTpNotaDebito = z.infer<typeof vd_saidaTpNotaDebitoSchema>;

export type VdSaidaTpimpNfe = z.infer<typeof vd_saidaTpimpNfeSchema>;
