/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type InmapSalesItemEtiqueta = z.infer<
	typeof import("./schemas").inmap_sales_item_etiquetaSchema
>;
export type InmapSalesItemEtiquetaRelations = Record<string, never>;

export type InmapSalesItemEtiquetaRelationKey =
	keyof InmapSalesItemEtiquetaRelations;
