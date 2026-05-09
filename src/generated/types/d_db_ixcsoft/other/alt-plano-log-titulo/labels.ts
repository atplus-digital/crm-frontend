/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALTPLANOLOGTITULO_OPCOES_LABELS = {
	R: "R",
	N: "N",
	L: "L",
} as const;

export const ALTPLANOLOGTITULO_STATUS_LABELS = {
	A: "A",
	R: "R",
	P: "P",
	C: "C",
} as const;

export const ALTPLANOLOGTITULO_TIPO_LABELS = {
	V: "V",
	C: "C",
	N: "N",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const alt_plano_log_tituloOpcoesSchema = z.enum(["R", "N", "L"], {
	error: () => ({ message: "opcoes: valores válidos são [R, N, L]" }),
});

export const alt_plano_log_tituloStatusSchema = z.enum(["A", "R", "P", "C"], {
	error: () => ({ message: "status: valores válidos são [A, R, P, C]" }),
});

export const alt_plano_log_tituloTipoSchema = z.enum(["V", "C", "N", "R"], {
	error: () => ({ message: "tipo: valores válidos são [V, C, N, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AltPlanoLogTituloOpcoes = z.infer<
	typeof alt_plano_log_tituloOpcoesSchema
>;

export type AltPlanoLogTituloStatus = z.infer<
	typeof alt_plano_log_tituloStatusSchema
>;

export type AltPlanoLogTituloTipo = z.infer<
	typeof alt_plano_log_tituloTipoSchema
>;
