/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ConfigSmartTube = z.infer<
	typeof import("./schemas").config_smart_tubeSchema
>;
export type ConfigSmartTubeRelations = Record<string, never>;

export type ConfigSmartTubeRelationKey = keyof ConfigSmartTubeRelations;
