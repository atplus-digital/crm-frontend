/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOSIMG_FIELD_LABELS = {
	id: "id",
	id_produto: "id_produto",
	imagem: "imagem",
	imagem_big: "imagem_big",
	imagem_thumb: "imagem_thumb",
	principal: "principal",
} as const;

export const PRODUTOSIMG_PRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtos_imgPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "principal: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosImgPrincipal = z.infer<typeof produtos_imgPrincipalSchema>;
