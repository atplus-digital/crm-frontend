/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSADMCATEGORIAS_PUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_adm_categoriasPublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "publicado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsAdmCategoriasPublicado = z.infer<
	typeof hs_adm_categoriasPublicadoSchema
>;
