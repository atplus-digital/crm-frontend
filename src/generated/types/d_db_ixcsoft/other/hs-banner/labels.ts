/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSBANNER_EXIBIRBANER_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSBANNER_FIXO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const HSBANNER_LIMITADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_bannerExibirBanerSchema = z.enum(["N", "S"], {
	error: () => ({ message: "exibir_baner: valores válidos são [N, S]" }),
});

export const hs_bannerFixoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "fixo: valores válidos são [N, S]" }),
});

export const hs_bannerLimitadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "limitado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsBannerExibirBaner = z.infer<typeof hs_bannerExibirBanerSchema>;

export type HsBannerFixo = z.infer<typeof hs_bannerFixoSchema>;

export type HsBannerLimitado = z.infer<typeof hs_bannerLimitadoSchema>;
