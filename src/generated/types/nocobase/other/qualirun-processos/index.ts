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
export type QualirunProcessos = z.infer<
	typeof import("./schemas").qualirun_processosSchema
>;
export type QualirunProcessosRelations = z.infer<
	typeof import("./schemas").qualirun_processosRelationSchema
>;

export type QualirunProcessosRelationKey = keyof QualirunProcessosRelations;
