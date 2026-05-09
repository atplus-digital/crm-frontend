/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALMOXUSUARIO_PADRAOUSUARIO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const almox_usuarioPadraoUsuarioSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao_usuario: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AlmoxUsuarioPadraoUsuario = z.infer<
	typeof almox_usuarioPadraoUsuarioSchema
>;
