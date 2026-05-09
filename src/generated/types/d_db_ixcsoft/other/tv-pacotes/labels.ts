/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TVPACOTES_ISLIFELINE_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVPACOTES_ISWIDE_LABELS = {
	Y: "Y",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tv_pacotesIslifelineSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "isLifeLine: valores válidos são [Y, N]" }),
});

export const tv_pacotesIswideSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "isWide: valores válidos são [Y, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TvPacotesIslifeline = z.infer<typeof tv_pacotesIslifelineSchema>;

export type TvPacotesIswide = z.infer<typeof tv_pacotesIswideSchema>;
