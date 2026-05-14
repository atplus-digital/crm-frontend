/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FUNILUSUARIO_FIELD_LABELS = {
	id: "id",
	id_funil: "id_funil",
	id_usuario: "id_usuario",
	padrao: "padrao",
} as const;

export const FUNILUSUARIO_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const funil_usuarioPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FunilUsuarioPadrao = z.infer<typeof funil_usuarioPadraoSchema>;
