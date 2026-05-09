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
export type TransportadoraVeiculos = z.infer<
	typeof import("./schemas").transportadora_veiculosSchema
>;
export type TransportadoraVeiculosRelations = Record<string, never>;

export type TransportadoraVeiculosRelationKey =
	keyof TransportadoraVeiculosRelations;
