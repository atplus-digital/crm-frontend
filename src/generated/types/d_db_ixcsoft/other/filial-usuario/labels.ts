/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FILIALUSUARIO_FIELD_LABELS = {
	ativo: "ativo",
	filial_id: "filial_id",
	filial_padrao: "filial_padrao",
	id: "id",
	usuario_id: "usuario_id",
} as const;

export const FILIALUSUARIO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FILIALUSUARIO_FILIALPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const filial_usuarioAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const filial_usuarioFilialPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "filial_padrao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FilialUsuarioAtivo = z.infer<typeof filial_usuarioAtivoSchema>;

export type FilialUsuarioFilialPadrao = z.infer<
	typeof filial_usuarioFilialPadraoSchema
>;
