/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CDR_IMPORTADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CDR_TARIFADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cdrImportadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "importado: valores válidos são [S, N]" }),
});

export const cdrTarifadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "tarifado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CdrImportado = z.infer<typeof cdrImportadoSchema>;

export type CdrTarifado = z.infer<typeof cdrTarifadoSchema>;
