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
export type RamaisSip = z.infer<typeof import("./schemas").ramais_sipSchema>;
export type RamaisSipRelations = Record<string, never>;

export type RamaisSipRelationKey = keyof RamaisSipRelations;
