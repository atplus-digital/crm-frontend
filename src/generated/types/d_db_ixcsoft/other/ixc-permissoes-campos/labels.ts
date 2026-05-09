/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCPERMISSOESCAMPOS_TIPO_LABELS = {
	H: "H",
	R: "R",
	E: "E",
} as const;

export const IXCPERMISSOESCAMPOS_TIPOE_LABELS = {
	H: "H",
	R: "R",
	E: "E",
} as const;

export const IXCPERMISSOESCAMPOS_TIPOG_LABELS = {
	H: "H",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_permissoes_camposTipoSchema = z.enum(["H", "R", "E"], {
	error: () => ({ message: "tipo: valores válidos são [H, R, E]" }),
});

export const ixc_permissoes_camposTipoESchema = z.enum(["H", "R", "E"], {
	error: () => ({ message: "tipo_e: valores válidos são [H, R, E]" }),
});

export const ixc_permissoes_camposTipoGSchema = z.enum(["H", "E"], {
	error: () => ({ message: "tipo_g: valores válidos são [H, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcPermissoesCamposTipo = z.infer<
	typeof ixc_permissoes_camposTipoSchema
>;

export type IxcPermissoesCamposTipoE = z.infer<
	typeof ixc_permissoes_camposTipoESchema
>;

export type IxcPermissoesCamposTipoG = z.infer<
	typeof ixc_permissoes_camposTipoGSchema
>;
