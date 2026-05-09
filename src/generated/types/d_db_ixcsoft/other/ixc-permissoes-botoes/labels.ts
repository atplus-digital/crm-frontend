/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCPERMISSOESBOTOES_LOCAL_LABELS = {
	F: "F",
	G: "G",
} as const;

export const IXCPERMISSOESBOTOES_TIPO_LABELS = {
	H: "H",
	R: "R",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_permissoes_botoesLocalSchema = z.enum(["F", "G"], {
	error: () => ({ message: "local: valores válidos são [F, G]" }),
});

export const ixc_permissoes_botoesTipoSchema = z.enum(["H", "R", "E"], {
	error: () => ({ message: "tipo: valores válidos são [H, R, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcPermissoesBotoesLocal = z.infer<
	typeof ixc_permissoes_botoesLocalSchema
>;

export type IxcPermissoesBotoesTipo = z.infer<
	typeof ixc_permissoes_botoesTipoSchema
>;
