/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSMENUFAVORITOS_FIELD_LABELS = {
	ativo: "ativo",
	fullpath: "fullpath",
	grid: "grid",
	id: "id",
	usuario_id: "usuario_id",
} as const;

export const USUARIOSMENUFAVORITOS_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_menu_favoritosAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosMenuFavoritosAtivo = z.infer<
	typeof usuarios_menu_favoritosAtivoSchema
>;
