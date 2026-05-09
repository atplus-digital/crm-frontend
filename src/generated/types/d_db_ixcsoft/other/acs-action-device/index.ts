/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AcsActionDevice = z.infer<
	typeof import("./schemas").acs_action_deviceSchema
>;
export type AcsActionDeviceRelations = Record<string, never>;

export type AcsActionDeviceRelationKey = keyof AcsActionDeviceRelations;
