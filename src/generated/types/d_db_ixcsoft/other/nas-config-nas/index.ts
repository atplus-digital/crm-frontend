/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NasConfigNas = z.infer<
	typeof import("./schemas").nas_config_nasSchema
>;
export type NasConfigNasRelations = Record<string, never>;

export type NasConfigNasRelationKey = keyof NasConfigNasRelations;
