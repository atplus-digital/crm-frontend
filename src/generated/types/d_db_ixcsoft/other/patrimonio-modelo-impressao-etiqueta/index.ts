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
export type PatrimonioModeloImpressaoEtiqueta = z.infer<
	typeof import("./schemas").patrimonio_modelo_impressao_etiquetaSchema
>;
export type PatrimonioModeloImpressaoEtiquetaRelations = Record<string, never>;

export type PatrimonioModeloImpressaoEtiquetaRelationKey =
	keyof PatrimonioModeloImpressaoEtiquetaRelations;
