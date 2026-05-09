/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VeiculosTracker = z.infer<
	typeof import("./schemas").veiculos_trackerSchema
>;
export type VeiculosTrackerRelations = Record<string, never>;

export type VeiculosTrackerRelationKey = keyof VeiculosTrackerRelations;
