/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFCONEXOES_POSICAOELEMENTO2_LABELS = {
	L: "L",
	R: "R",
	M: "M",
} as const;

export const DFCONEXOES_POSICAOINELEMENTO2_LABELS = {
	L: "L",
	R: "R",
	M: "M",
} as const;

export const DFCONEXOES_POSICAOOUTELEMENTO2_LABELS = {
	L: "L",
	R: "R",
	M: "M",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_conexoesPosicaoElemento2Schema = z.enum(["L", "R", "M"], {
	error: () => ({
		message: "posicao_elemento_2: valores válidos são [L, R, M]",
	}),
});

export const df_conexoesPosicaoInElemento2Schema = z.enum(["L", "R", "M"], {
	error: () => ({
		message: "posicao_in_elemento_2: valores válidos são [L, R, M]",
	}),
});

export const df_conexoesPosicaoOutElemento2Schema = z.enum(["L", "R", "M"], {
	error: () => ({
		message: "posicao_out_elemento_2: valores válidos são [L, R, M]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfConexoesPosicaoElemento2 = z.infer<
	typeof df_conexoesPosicaoElemento2Schema
>;

export type DfConexoesPosicaoInElemento2 = z.infer<
	typeof df_conexoesPosicaoInElemento2Schema
>;

export type DfConexoesPosicaoOutElemento2 = z.infer<
	typeof df_conexoesPosicaoOutElemento2Schema
>;
