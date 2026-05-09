/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
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
