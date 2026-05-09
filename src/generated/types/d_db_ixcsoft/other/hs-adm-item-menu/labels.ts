/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSADMITEMMENU_ESCONDIDO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const HSADMITEMMENU_PAGINAINICIAL_LABELS = {
	S: "S",
	N: "N",
} as const;

export const HSADMITEMMENU_PUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_adm_item_menuEscondidoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "escondido: valores válidos são [S, N]" }),
});

export const hs_adm_item_menuPaginaInicialSchema = z.enum(["S", "N"], {
	error: () => ({ message: "pagina_inicial: valores válidos são [S, N]" }),
});

export const hs_adm_item_menuPublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "publicado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsAdmItemMenuEscondido = z.infer<
	typeof hs_adm_item_menuEscondidoSchema
>;

export type HsAdmItemMenuPaginaInicial = z.infer<
	typeof hs_adm_item_menuPaginaInicialSchema
>;

export type HsAdmItemMenuPublicado = z.infer<
	typeof hs_adm_item_menuPublicadoSchema
>;
