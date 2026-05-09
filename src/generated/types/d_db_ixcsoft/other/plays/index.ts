/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Plays = z.infer<typeof import("./schemas").playsSchema>;
export type PlaysRelations = Record<string, never>;

export type PlaysRelationKey = keyof PlaysRelations;
