/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AgeVeiculosModelo = z.infer<
	typeof import("./schemas").age_veiculos_modeloSchema
>;
export type AgeVeiculosModeloRelations = Record<string, never>;

export type AgeVeiculosModeloRelationKey = keyof AgeVeiculosModeloRelations;
