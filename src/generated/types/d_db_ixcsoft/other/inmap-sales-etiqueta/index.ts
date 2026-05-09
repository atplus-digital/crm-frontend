/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type InmapSalesEtiqueta = z.infer<
	typeof import("./schemas").inmap_sales_etiquetaSchema
>;
export type InmapSalesEtiquetaRelations = Record<string, never>;

export type InmapSalesEtiquetaRelationKey = keyof InmapSalesEtiquetaRelations;
