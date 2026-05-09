/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NasConfig = z.infer<typeof import("./schemas").nas_configSchema>;
export type NasConfigRelations = Record<string, never>;

export type NasConfigRelationKey = keyof NasConfigRelations;
