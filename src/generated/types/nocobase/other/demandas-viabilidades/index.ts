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
export type DemandasViabilidades = z.infer<
	typeof import("./schemas").demandas_viabilidadesSchema
>;
export type DemandasViabilidadesRelations = z.infer<
	typeof import("./schemas").demandas_viabilidadesRelationSchema
>;

export type DemandasViabilidadesRelationKey =
	keyof DemandasViabilidadesRelations;
