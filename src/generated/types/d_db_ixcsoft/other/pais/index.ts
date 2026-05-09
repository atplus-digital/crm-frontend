/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Pais = z.infer<typeof import("./schemas").paisSchema>;
export type PaisRelations = Record<string, never>;

export type PaisRelationKey = keyof PaisRelations;
