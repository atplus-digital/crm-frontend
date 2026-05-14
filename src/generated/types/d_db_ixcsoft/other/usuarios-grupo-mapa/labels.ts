/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const USUARIOSGRUPOMAPA_FIELD_LABELS = {
	descricao: "descricao",
	id: "id",
	id_grupo: "id_grupo",
	permissao: "permissao",
} as const;

export const USUARIOSGRUPOMAPA_PERMISSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const usuarios_grupo_mapaPermissaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "permissao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UsuariosGrupoMapaPermissao = z.infer<
	typeof usuarios_grupo_mapaPermissaoSchema
>;
