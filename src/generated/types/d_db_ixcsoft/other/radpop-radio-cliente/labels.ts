/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIOCLIENTE_USASMART_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radio_clienteUsaSmartSchema = z.enum(["S", "N"], {
	error: () => ({ message: "usa_smart: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioClienteUsaSmart = z.infer<
	typeof radpop_radio_clienteUsaSmartSchema
>;
