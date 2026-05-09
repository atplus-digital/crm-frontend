/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSADMARTIGOS_AVALIACAOARTIGO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_DATAHORADECRIACAO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_DATAHORAMODIFICACAO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_EXIBIRPAGINAINICIAL_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_EXIBIRTITULO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_ICONEEMAIL_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_ICONEIMPRESSAO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_ICONEPDF_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_NOMECATEGORIA_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_NOMECATEGORIACOMOLINK_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_NOMESECAO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_NOMESECAOCOMOLINK_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_NOMESAUTORES_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_PUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_TEXTOINTRODUTORIO_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

export const HSADMARTIGOS_TITULOCOMOLINK_LABELS = {
	G: "G",
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_adm_artigosAvaliacaoArtigoSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "avaliacao_artigo: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosDataHoraDeCriacaoSchema = z.enum(["G", "N", "S"], {
	error: () => ({
		message: "data_hora_de_criacao: valores válidos são [G, N, S]",
	}),
});

export const hs_adm_artigosDataHoraModificacaoSchema = z.enum(["G", "N", "S"], {
	error: () => ({
		message: "data_hora_modificacao: valores válidos são [G, N, S]",
	}),
});

export const hs_adm_artigosExibirPaginaInicialSchema = z.enum(["N", "S"], {
	error: () => ({
		message: "exibir_pagina_inicial: valores válidos são [N, S]",
	}),
});

export const hs_adm_artigosExibirTituloSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "exibir_titulo: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosIconeEmailSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "icone_email: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosIconeImpressaoSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "icone_impressao: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosIconePdfSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "icone_pdf: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosNomeCategoriaSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "nome_categoria: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosNomeCategoriaComoLinkSchema = z.enum(
	["G", "N", "S"],
	{
		error: () => ({
			message: "nome_categoria_como_link: valores válidos são [G, N, S]",
		}),
	},
);

export const hs_adm_artigosNomeSecaoSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "nome_secao: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosNomeSecaoComoLinkSchema = z.enum(["G", "N", "S"], {
	error: () => ({
		message: "nome_secao_como_link: valores válidos são [G, N, S]",
	}),
});

export const hs_adm_artigosNomesAutoresSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "nomes_autores: valores válidos são [G, N, S]" }),
});

export const hs_adm_artigosPublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "publicado: valores válidos são [N, S]" }),
});

export const hs_adm_artigosTextoIntrodutorioSchema = z.enum(["G", "N", "S"], {
	error: () => ({
		message: "texto_introdutorio: valores válidos são [G, N, S]",
	}),
});

export const hs_adm_artigosTituloComoLinkSchema = z.enum(["G", "N", "S"], {
	error: () => ({ message: "titulo_como_link: valores válidos são [G, N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsAdmArtigosAvaliacaoArtigo = z.infer<
	typeof hs_adm_artigosAvaliacaoArtigoSchema
>;

export type HsAdmArtigosDataHoraDeCriacao = z.infer<
	typeof hs_adm_artigosDataHoraDeCriacaoSchema
>;

export type HsAdmArtigosDataHoraModificacao = z.infer<
	typeof hs_adm_artigosDataHoraModificacaoSchema
>;

export type HsAdmArtigosExibirPaginaInicial = z.infer<
	typeof hs_adm_artigosExibirPaginaInicialSchema
>;

export type HsAdmArtigosExibirTitulo = z.infer<
	typeof hs_adm_artigosExibirTituloSchema
>;

export type HsAdmArtigosIconeEmail = z.infer<
	typeof hs_adm_artigosIconeEmailSchema
>;

export type HsAdmArtigosIconeImpressao = z.infer<
	typeof hs_adm_artigosIconeImpressaoSchema
>;

export type HsAdmArtigosIconePdf = z.infer<typeof hs_adm_artigosIconePdfSchema>;

export type HsAdmArtigosNomeCategoria = z.infer<
	typeof hs_adm_artigosNomeCategoriaSchema
>;

export type HsAdmArtigosNomeCategoriaComoLink = z.infer<
	typeof hs_adm_artigosNomeCategoriaComoLinkSchema
>;

export type HsAdmArtigosNomeSecao = z.infer<
	typeof hs_adm_artigosNomeSecaoSchema
>;

export type HsAdmArtigosNomeSecaoComoLink = z.infer<
	typeof hs_adm_artigosNomeSecaoComoLinkSchema
>;

export type HsAdmArtigosNomesAutores = z.infer<
	typeof hs_adm_artigosNomesAutoresSchema
>;

export type HsAdmArtigosPublicado = z.infer<
	typeof hs_adm_artigosPublicadoSchema
>;

export type HsAdmArtigosTextoIntrodutorio = z.infer<
	typeof hs_adm_artigosTextoIntrodutorioSchema
>;

export type HsAdmArtigosTituloComoLink = z.infer<
	typeof hs_adm_artigosTituloComoLinkSchema
>;
