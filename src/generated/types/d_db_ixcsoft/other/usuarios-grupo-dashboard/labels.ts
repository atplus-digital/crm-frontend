/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSGRUPODASHBOARD_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const USUARIOSGRUPODASHBOARD_PERMISSAO_LABELS = {
	P: "P",
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_grupo_dashboardAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const usuarios_grupo_dashboardPermissaoSchema = z.enum(["P", "S", "N"], {
	error: () => ({ message: "permissao: valores válidos são [P, S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosGrupoDashboardAtivo = z.infer<
	typeof usuarios_grupo_dashboardAtivoSchema
>;

export type UsuariosGrupoDashboardPermissao = z.infer<
	typeof usuarios_grupo_dashboardPermissaoSchema
>;
