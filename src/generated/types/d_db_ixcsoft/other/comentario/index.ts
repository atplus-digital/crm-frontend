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
export type Comentario = z.infer<typeof import("./schemas").comentarioSchema>;
export type ComentarioRelations = Record<string, never>;

export type ComentarioRelationKey = keyof ComentarioRelations;
