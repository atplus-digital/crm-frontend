/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFTIPOELEMENTO_FIELD_LABELS = {
	cabo_especura: "cabo_especura",
	cabo_numero_fibras: "cabo_numero_fibras",
	cabo_numero_loose_tube: "cabo_numero_loose_tube",
	cabo_padrao: "cabo_padrao",
	classificacao_tipo: "classificacao_tipo",
	codigo_identificador: "codigo_identificador",
	cor_ativa: "cor_ativa",
	cor_fundo: "cor_fundo",
	cor_futura: "cor_futura",
	cor_inativa: "cor_inativa",
	criacao_automatica: "criacao_automatica",
	db_perdas: "db_perdas",
	db_perdas_desbalanceado: "db_perdas_desbalanceado",
	especura_linha: "especura_linha",
	estilo_padrao: "estilo_padrao",
	fabricante: "fabricante",
	id: "id",
	id_categoria_tipo: "id_categoria_tipo",
	id_padrao_cores: "id_padrao_cores",
	id_produto: "id_produto",
	modelo: "modelo",
	nome_tipo: "nome_tipo",
	pontilhada: "pontilhada",
	pontilhada_inativa: "pontilhada_inativa",
	splitter_numero_entradas: "splitter_numero_entradas",
	splitter_numero_saidas: "splitter_numero_saidas",
	splitter_proporcao: "splitter_proporcao",
	splitter_tipo: "splitter_tipo",
	status: "status",
	tec_28: "tec_28",
	tec_58: "tec_58",
	tec_adsl: "tec_adsl",
	tec_cabo: "tec_cabo",
	tec_fibra: "tec_fibra",
	total_bandejas: "total_bandejas",
	url_icone: "url_icone",
	url_icone_amarelo: "url_icone_amarelo",
	url_icone_azul: "url_icone_azul",
	url_icone_cinza: "url_icone_cinza",
	url_icone_street_view: "url_icone_street_view",
	url_icone_verde: "url_icone_verde",
	url_icone_vermelho: "url_icone_vermelho",
	verificar_viabilidade: "verificar_viabilidade",
	z_index: "z_index",
} as const;

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
