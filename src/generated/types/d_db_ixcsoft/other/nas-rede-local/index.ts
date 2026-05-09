/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NasRedeLocal = z.infer<
	typeof import("./schemas").nas_rede_localSchema
>;
export type NasRedeLocalRelations = Record<string, never>;

export type NasRedeLocalRelationKey = keyof NasRedeLocalRelations;
