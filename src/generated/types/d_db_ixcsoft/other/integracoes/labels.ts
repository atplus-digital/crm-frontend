/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INTEGRACOES_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
} as const;

export const INTEGRACOES_ATIVARLOGINTV_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_COBRARSOMENTERAMAISATIVOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_COMPORTAMENTOBLOQUEIOPARCIALVOIP_LABELS = {
	A: "A",
	P: "P",
} as const;

export const INTEGRACOES_COMPORTAMENTOBLOQUEIOTOTALVOIP_LABELS = {
	D: "D",
	P: "P",
} as const;

export const INTEGRACOES_COMUNICARAPI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_DELETARARQUIVOSCDR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_FORMAIMPORTACAO_LABELS = {
	C: "C",
	F: "F",
} as const;

export const INTEGRACOES_GERARADICIONALEXCEDENTEPORLIGACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_HABILITARMEMORIAPLATAFORMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_PERIODOIMPORTACAOCDR_LABELS = {
	D: "D",
	M: "M",
} as const;

export const INTEGRACOES_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_UTILIZAPERIODOIMPORTACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const INTEGRACOES_VERSAOAPIPLAYHUB_LABELS = {
	v1: "v1",
	v3: "v3",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const integracoesAmbienteSchema = z.enum(["P", "H"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H]" }),
});

export const integracoesAtivarLoginTvSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativar_login_tv: valores válidos são [S, N]" }),
});

export const integracoesCobrarSomenteRamaisAtivosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "cobrar_somente_ramais_ativos: valores válidos são [S, N]",
	}),
});

export const integracoesComportamentoBloqueioParcialVoipSchema = z.enum(
	["A", "P"],
	{
		error: () => ({
			message:
				"comportamento_bloqueio_parcial_voip: valores válidos são [A, P]",
		}),
	},
);

export const integracoesComportamentoBloqueioTotalVoipSchema = z.enum(
	["D", "P"],
	{
		error: () => ({
			message: "comportamento_bloqueio_total_voip: valores válidos são [D, P]",
		}),
	},
);

export const integracoesComunicarApiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comunicar_api: valores válidos são [S, N]" }),
});

export const integracoesDeletarArquivosCdrSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "deletar_arquivos_cdr: valores válidos são [S, N]",
	}),
});

export const integracoesFormaImportacaoSchema = z.enum(["C", "F"], {
	error: () => ({ message: "forma_importacao: valores válidos são [C, F]" }),
});

export const integracoesGerarAdicionalExcedentePorLigacaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"gerar_adicional_excedente_por_ligacao: valores válidos são [S, N]",
		}),
	},
);

export const integracoesHabilitarMemoriaPlataformaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "habilitar_memoria_plataforma: valores válidos são [S, N]",
	}),
});

export const integracoesPeriodoImportacaoCdrSchema = z.enum(["D", "M"], {
	error: () => ({
		message: "periodo_importacao_cdr: valores válidos são [D, M]",
	}),
});

export const integracoesStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

export const integracoesUtilizaPeriodoImportacaoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "utiliza_periodo_importacao: valores válidos são [S, N]",
	}),
});

export const integracoesVersaoApiPlayhubSchema = z.enum(["v1", "v3"], {
	error: () => ({
		message: "versao_api_playhub: valores válidos são [v1, v3]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IntegracoesAmbiente = z.infer<typeof integracoesAmbienteSchema>;

export type IntegracoesAtivarLoginTv = z.infer<
	typeof integracoesAtivarLoginTvSchema
>;

export type IntegracoesCobrarSomenteRamaisAtivos = z.infer<
	typeof integracoesCobrarSomenteRamaisAtivosSchema
>;

export type IntegracoesComportamentoBloqueioParcialVoip = z.infer<
	typeof integracoesComportamentoBloqueioParcialVoipSchema
>;

export type IntegracoesComportamentoBloqueioTotalVoip = z.infer<
	typeof integracoesComportamentoBloqueioTotalVoipSchema
>;

export type IntegracoesComunicarApi = z.infer<
	typeof integracoesComunicarApiSchema
>;

export type IntegracoesDeletarArquivosCdr = z.infer<
	typeof integracoesDeletarArquivosCdrSchema
>;

export type IntegracoesFormaImportacao = z.infer<
	typeof integracoesFormaImportacaoSchema
>;

export type IntegracoesGerarAdicionalExcedentePorLigacao = z.infer<
	typeof integracoesGerarAdicionalExcedentePorLigacaoSchema
>;

export type IntegracoesHabilitarMemoriaPlataforma = z.infer<
	typeof integracoesHabilitarMemoriaPlataformaSchema
>;

export type IntegracoesPeriodoImportacaoCdr = z.infer<
	typeof integracoesPeriodoImportacaoCdrSchema
>;

export type IntegracoesStatus = z.infer<typeof integracoesStatusSchema>;

export type IntegracoesUtilizaPeriodoImportacao = z.infer<
	typeof integracoesUtilizaPeriodoImportacaoSchema
>;

export type IntegracoesVersaoApiPlayhub = z.infer<
	typeof integracoesVersaoApiPlayhubSchema
>;
