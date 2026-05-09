/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AgeVeiculosMarca = z.infer<
	typeof import("./schemas").age_veiculos_marcaSchema
>;
export type AgeVeiculosMarcaRelations = Record<string, never>;

export type AgeVeiculosMarcaRelationKey = keyof AgeVeiculosMarcaRelations;
