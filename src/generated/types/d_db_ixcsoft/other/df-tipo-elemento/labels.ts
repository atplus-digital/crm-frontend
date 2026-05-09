/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFTIPOELEMENTO_CABOPADRAO_LABELS = {
	A: "A",
	E: "E",
} as const;

export const DFTIPOELEMENTO_CLASSIFICACAOTIPO_LABELS = {
	Point: "Point",
	LineString: "LineString",
	Polygon: "Polygon",
} as const;

export const DFTIPOELEMENTO_CRIACAOAUTOMATICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_ESTILOPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_PONTILHADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_PONTILHADAINATIVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_SPLITTERTIPO_LABELS = {
	BA: "BA",
	DS: "DS",
} as const;

export const DFTIPOELEMENTO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

export const DFTIPOELEMENTO_TEC28_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_TEC58_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_TECADSL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_TECCABO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_TECFIBRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const DFTIPOELEMENTO_VERIFICARVIABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_tipo_elementoCaboPadraoSchema = z.enum(["A", "E"], {
	error: () => ({ message: "cabo_padrao: valores válidos são [A, E]" }),
});

export const df_tipo_elementoClassificacaoTipoSchema = z.enum(
	["Point", "LineString", "Polygon"],
	{
		error: () => ({
			message:
				"classificacao_tipo: valores válidos são [Point, LineString, Polygon]",
		}),
	},
);

export const df_tipo_elementoCriacaoAutomaticaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "criacao_automatica: valores válidos são [S, N]" }),
});

export const df_tipo_elementoEstiloPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "estilo_padrao: valores válidos são [S, N]" }),
});

export const df_tipo_elementoPontilhadaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pontilhada: valores válidos são [S, N]" }),
});

export const df_tipo_elementoPontilhadaInativaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pontilhada_inativa: valores válidos são [S, N]" }),
});

export const df_tipo_elementoSplitterTipoSchema = z.enum(["BA", "DS"], {
	error: () => ({ message: "splitter_tipo: valores válidos são [BA, DS]" }),
});

export const df_tipo_elementoStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

export const df_tipo_elementoTec28Schema = z.enum(["S", "N"], {
	error: () => ({ message: "tec_28: valores válidos são [S, N]" }),
});

export const df_tipo_elementoTec58Schema = z.enum(["S", "N"], {
	error: () => ({ message: "tec_58: valores válidos são [S, N]" }),
});

export const df_tipo_elementoTecAdslSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tec_adsl: valores válidos são [S, N]" }),
});

export const df_tipo_elementoTecCaboSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tec_cabo: valores válidos são [S, N]" }),
});

export const df_tipo_elementoTecFibraSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tec_fibra: valores válidos são [S, N]" }),
});

export const df_tipo_elementoVerificarViabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "verificar_viabilidade: valores válidos são [S, N]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfTipoElementoCaboPadrao = z.infer<
	typeof df_tipo_elementoCaboPadraoSchema
>;

export type DfTipoElementoClassificacaoTipo = z.infer<
	typeof df_tipo_elementoClassificacaoTipoSchema
>;

export type DfTipoElementoCriacaoAutomatica = z.infer<
	typeof df_tipo_elementoCriacaoAutomaticaSchema
>;

export type DfTipoElementoEstiloPadrao = z.infer<
	typeof df_tipo_elementoEstiloPadraoSchema
>;

export type DfTipoElementoPontilhada = z.infer<
	typeof df_tipo_elementoPontilhadaSchema
>;

export type DfTipoElementoPontilhadaInativa = z.infer<
	typeof df_tipo_elementoPontilhadaInativaSchema
>;

export type DfTipoElementoSplitterTipo = z.infer<
	typeof df_tipo_elementoSplitterTipoSchema
>;

export type DfTipoElementoStatus = z.infer<typeof df_tipo_elementoStatusSchema>;

export type DfTipoElementoTec28 = z.infer<typeof df_tipo_elementoTec28Schema>;

export type DfTipoElementoTec58 = z.infer<typeof df_tipo_elementoTec58Schema>;

export type DfTipoElementoTecAdsl = z.infer<
	typeof df_tipo_elementoTecAdslSchema
>;

export type DfTipoElementoTecCabo = z.infer<
	typeof df_tipo_elementoTecCaboSchema
>;

export type DfTipoElementoTecFibra = z.infer<
	typeof df_tipo_elementoTecFibraSchema
>;

export type DfTipoElementoVerificarViabilidade = z.infer<
	typeof df_tipo_elementoVerificarViabilidadeSchema
>;
