/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSTIPOMODULO_EXIBIRTITULO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSTIPOMODULO_HABILITADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSTIPOMODULO_MENUS_LABELS = {
	T: "T",
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_tipo_moduloExibirTituloSchema = z.enum(["N", "S"], {
	error: () => ({ message: "exibir_titulo: valores válidos são [N, S]" }),
});

export const hs_tipo_moduloHabilitadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "habilitado: valores válidos são [N, S]" }),
});

export const hs_tipo_moduloMenusSchema = z.enum(["T", "N", "S"], {
	error: () => ({ message: "menus: valores válidos são [T, N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsTipoModuloExibirTitulo = z.infer<
	typeof hs_tipo_moduloExibirTituloSchema
>;

export type HsTipoModuloHabilitado = z.infer<
	typeof hs_tipo_moduloHabilitadoSchema
>;

export type HsTipoModuloMenus = z.infer<typeof hs_tipo_moduloMenusSchema>;
