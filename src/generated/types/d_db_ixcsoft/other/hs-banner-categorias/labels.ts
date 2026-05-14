/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSBANNERCATEGORIAS_FIELD_LABELS = {
	descricao: "descricao",
	id: "id",
	imagem: "imagem",
	nivel_acesso: "nivel_acesso",
	ordem_categoria: "ordem_categoria",
	posicao_imagem: "posicao_imagem",
	publicado: "publicado",
	titulo: "titulo",
} as const;

export const HSBANNERCATEGORIAS_PUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_banner_categoriasPublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "publicado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsBannerCategoriasPublicado = z.infer<
	typeof hs_banner_categoriasPublicadoSchema
>;
