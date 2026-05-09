/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPURAMODULOSAU_TIPO_LABELS = {
	A: "A",
	T: "T",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_ura_modulos_auTipoSchema = z.enum(["A", "T"], {
	error: () => ({ message: "tipo: valores válidos são [A, T]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipUraModulosAuTipo = z.infer<
	typeof voip_ura_modulos_auTipoSchema
>;
