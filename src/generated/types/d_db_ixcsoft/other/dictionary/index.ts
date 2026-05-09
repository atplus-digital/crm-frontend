/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Dictionary = z.infer<typeof import("./schemas").dictionarySchema>;
export type DictionaryRelations = Record<string, never>;

export type DictionaryRelationKey = keyof DictionaryRelations;
