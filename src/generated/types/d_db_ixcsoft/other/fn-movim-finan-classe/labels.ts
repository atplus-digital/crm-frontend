/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINANCLASSE_LIBERADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNMOVIMFINANCLASSE_STATUS_LABELS = {
	R: "R",
	AR: "AR",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finan_classeLiberadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "liberado: valores válidos são [S, N]" }),
});

export const fn_movim_finan_classeStatusSchema = z.enum(["R", "AR"], {
	error: () => ({ message: "status: valores válidos são [R, AR]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanClasseLiberado = z.infer<
	typeof fn_movim_finan_classeLiberadoSchema
>;

export type FnMovimFinanClasseStatus = z.infer<
	typeof fn_movim_finan_classeStatusSchema
>;
