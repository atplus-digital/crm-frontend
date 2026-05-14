/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSMODULOS_FIELD_LABELS = {
	ban_cliente_banner: "ban_cliente_banner",
	ban_contador: "ban_contador",
	ban_destino: "ban_destino",
	ban_id_categoria: "ban_id_categoria",
	ban_pesquisar_tags: "ban_pesquisar_tags",
	ban_randomizar: "ban_randomizar",
	ban_sufixo_classe_modulo: "ban_sufixo_classe_modulo",
	ban_texto_cabecalho: "ban_texto_cabecalho",
	ban_texto_rodape: "ban_texto_rodape",
	bc_exibir_fim: "bc_exibir_fim",
	bc_exibir_inicio: "bc_exibir_inicio",
	bc_separador_texto: "bc_separador_texto",
	bc_sufixo_classe_modulo: "bc_sufixo_classe_modulo",
	bc_texto_elemento_inicio: "bc_texto_elemento_inicio",
	configuracoes: "configuracoes",
	descricao: "descricao",
	exibir_titulo: "exibir_titulo",
	habilitado: "habilitado",
	html_id: "html_id",
	id: "id",
	id_tipo_modulo: "id_tipo_modulo",
	imagem_id: "imagem_id",
	margens_laterais: "margens_laterais",
	menu_exib_submenu: "menu_exib_submenu",
	menu_id: "menu_id",
	menu_largura: "menu_largura",
	menu_margem: "menu_margem",
	menu_profundidade: "menu_profundidade",
	menu_tag_id: "menu_tag_id",
	menu_tipo: "menu_tipo",
	menus: "menus",
	nivel_acesso: "nivel_acesso",
	ordem: "ordem",
	posicao: "posicao",
	slideshow_id: "slideshow_id",
	tag_class: "tag_class",
	tag_id: "tag_id",
	titulo: "titulo",
} as const;

export const HSMODULOS_BANPESQUISARTAGS_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSMODULOS_BCEXIBIRFIM_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSMODULOS_BCEXIBIRINICIO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSMODULOS_EXIBIRTITULO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSMODULOS_HABILITADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSMODULOS_MARGENSLATERAIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const HSMODULOS_MENUEXIBSUBMENU_LABELS = {
	S: "S",
	N: "N",
} as const;

export const HSMODULOS_MENUS_LABELS = {
	T: "T",
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_modulosBanPesquisarTagsSchema = z.enum(["N", "S"], {
	error: () => ({ message: "ban_pesquisar_tags: valores válidos são [N, S]" }),
});

export const hs_modulosBcExibirFimSchema = z.enum(["N", "S"], {
	error: () => ({ message: "bc_exibir_fim: valores válidos são [N, S]" }),
});

export const hs_modulosBcExibirInicioSchema = z.enum(["N", "S"], {
	error: () => ({ message: "bc_exibir_inicio: valores válidos são [N, S]" }),
});

export const hs_modulosExibirTituloSchema = z.enum(["N", "S"], {
	error: () => ({ message: "exibir_titulo: valores válidos são [N, S]" }),
});

export const hs_modulosHabilitadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "habilitado: valores válidos são [N, S]" }),
});

export const hs_modulosMargensLateraisSchema = z.enum(["S", "N"], {
	error: () => ({ message: "margens_laterais: valores válidos são [S, N]" }),
});

export const hs_modulosMenuExibSubmenuSchema = z.enum(["S", "N"], {
	error: () => ({ message: "menu_exib_submenu: valores válidos são [S, N]" }),
});

export const hs_modulosMenusSchema = z.enum(["T", "N", "S"], {
	error: () => ({ message: "menus: valores válidos são [T, N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsModulosBanPesquisarTags = z.infer<
	typeof hs_modulosBanPesquisarTagsSchema
>;

export type HsModulosBcExibirFim = z.infer<typeof hs_modulosBcExibirFimSchema>;

export type HsModulosBcExibirInicio = z.infer<
	typeof hs_modulosBcExibirInicioSchema
>;

export type HsModulosExibirTitulo = z.infer<
	typeof hs_modulosExibirTituloSchema
>;

export type HsModulosHabilitado = z.infer<typeof hs_modulosHabilitadoSchema>;

export type HsModulosMargensLaterais = z.infer<
	typeof hs_modulosMargensLateraisSchema
>;

export type HsModulosMenuExibSubmenu = z.infer<
	typeof hs_modulosMenuExibSubmenuSchema
>;

export type HsModulosMenus = z.infer<typeof hs_modulosMenusSchema>;
