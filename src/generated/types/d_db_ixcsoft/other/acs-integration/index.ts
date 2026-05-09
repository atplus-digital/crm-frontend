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
export type AcsIntegration = z.infer<
	typeof import("./schemas").acs_integrationSchema
>;
export type AcsIntegrationRelations = Record<string, never>;

export type AcsIntegrationRelationKey = keyof AcsIntegrationRelations;
