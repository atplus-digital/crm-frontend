/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPURAHORARIOSRANGE_DOM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_FERIADOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_QUA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_QUI_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_SAB_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_SEG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_SEX_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VOIPURAHORARIOSRANGE_TER_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_ura_horarios_rangeDomSchema = z.enum(["S", "N"], {
	error: () => ({ message: "dom: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeFeriadosSchema = z.enum(["S", "N"], {
	error: () => ({ message: "feriados: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeQuaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "qua: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeQuiSchema = z.enum(["S", "N"], {
	error: () => ({ message: "qui: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeSabSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sab: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeSegSchema = z.enum(["S", "N"], {
	error: () => ({ message: "seg: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeSexSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sex: valores válidos são [S, N]" }),
});

export const voip_ura_horarios_rangeTerSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ter: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipUraHorariosRangeDom = z.infer<
	typeof voip_ura_horarios_rangeDomSchema
>;

export type VoipUraHorariosRangeFeriados = z.infer<
	typeof voip_ura_horarios_rangeFeriadosSchema
>;

export type VoipUraHorariosRangeQua = z.infer<
	typeof voip_ura_horarios_rangeQuaSchema
>;

export type VoipUraHorariosRangeQui = z.infer<
	typeof voip_ura_horarios_rangeQuiSchema
>;

export type VoipUraHorariosRangeSab = z.infer<
	typeof voip_ura_horarios_rangeSabSchema
>;

export type VoipUraHorariosRangeSeg = z.infer<
	typeof voip_ura_horarios_rangeSegSchema
>;

export type VoipUraHorariosRangeSex = z.infer<
	typeof voip_ura_horarios_rangeSexSchema
>;

export type VoipUraHorariosRangeTer = z.infer<
	typeof voip_ura_horarios_rangeTerSchema
>;
