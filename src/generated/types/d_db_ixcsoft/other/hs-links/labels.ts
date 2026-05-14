/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSLINKS_FIELD_LABELS = {
	id: "id",
	id_categoria: "id_categoria",
	Nome: "Nome",
	ordernar: "ordernar",
	publicado: "publicado",
	url: "url",
} as const;

export const HSLINKS_PUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_linksPublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "publicado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsLinksPublicado = z.infer<typeof hs_linksPublicadoSchema>;
