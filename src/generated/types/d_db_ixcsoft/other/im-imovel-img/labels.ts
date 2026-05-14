/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IMIMOVELIMG_FIELD_LABELS = {
	id: "id",
	id_imovel: "id_imovel",
	imagem: "imagem",
	imagem_big: "imagem_big",
	imagem_thumb: "imagem_thumb",
	principal: "principal",
} as const;

export const IMIMOVELIMG_PRINCIPAL_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const im_imovel_imgPrincipalSchema = z.enum(["S", "N"], {
	error: () => ({ message: "principal: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ImImovelImgPrincipal = z.infer<typeof im_imovel_imgPrincipalSchema>;
