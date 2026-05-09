/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Radreply = z.infer<typeof import("./schemas").radreplySchema>;
export type RadreplyRelations = Record<string, never>;

export type RadreplyRelationKey = keyof RadreplyRelations;
