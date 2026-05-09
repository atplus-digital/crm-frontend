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
export type CrmPesoCalculo = z.infer<
	typeof import("./schemas").crm_peso_calculoSchema
>;
export type CrmPesoCalculoRelations = Record<string, never>;

export type CrmPesoCalculoRelationKey = keyof CrmPesoCalculoRelations;
