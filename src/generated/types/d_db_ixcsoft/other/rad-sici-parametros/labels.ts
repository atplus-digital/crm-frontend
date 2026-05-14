/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADSICIPARAMETROS_FIELD_LABELS = {
	acata_rel712: "acata_rel712",
	id: "id",
	iem1_a: "iem1_a",
	iem1_b: "iem1_b",
	iem1_c: "iem1_c",
	iem1_d: "iem1_d",
	iem1_e: "iem1_e",
	iem1_f: "iem1_f",
	iem1_g: "iem1_g",
	iem2_a: "iem2_a",
	iem2_b: "iem2_b",
	iem2_c: "iem2_c",
	iem3_a: "iem3_a",
	ipl1_a: "ipl1_a",
	ipl1_b: "ipl1_b",
	ipl1_c: "ipl1_c",
	ipl1_d: "ipl1_d",
	ipl2_a: "ipl2_a",
	ipl2_b: "ipl2_b",
	ipl2_c: "ipl2_c",
	ipl2_d: "ipl2_d",
	numero_fistel: "numero_fistel",
} as const;

export const RADSICIPARAMETROS_ACATAREL712_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_sici_parametrosAcataRel712Schema = z.enum(["S", "N"], {
	error: () => ({ message: "acata_rel712: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadSiciParametrosAcataRel712 = z.infer<
	typeof rad_sici_parametrosAcataRel712Schema
>;
