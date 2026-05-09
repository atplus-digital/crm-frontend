/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PDVCONFIG_TIPO_LABELS = {
	P: "P",
	V: "V",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pdv_configTipoSchema = z.enum(["P", "V"], {
	error: () => ({ message: "tipo: valores válidos são [P, V]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PdvConfigTipo = z.infer<typeof pdv_configTipoSchema>;
