/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INMAPSALESITEMETIQUETA_ITEMTIPO_LABELS = {
	L: "L",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const inmap_sales_item_etiquetaItemTipoSchema = z.enum(["L", "N"], {
	error: () => ({ message: "item_tipo: valores válidos são [L, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type InmapSalesItemEtiquetaItemTipo = z.infer<
	typeof inmap_sales_item_etiquetaItemTipoSchema
>;
