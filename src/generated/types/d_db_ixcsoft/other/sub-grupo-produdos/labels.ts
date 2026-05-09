/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUBGRUPOPRODUDOS_ECOMMERCE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const sub_grupo_produdosEcommerceSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ecommerce: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SubGrupoProdudosEcommerce = z.infer<
	typeof sub_grupo_produdosEcommerceSchema
>;
