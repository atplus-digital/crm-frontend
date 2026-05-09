/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type StatusItem = z.infer<typeof import("./schemas").status_itemSchema>;
export type StatusItemRelations = Record<string, never>;

export type StatusItemRelationKey = keyof StatusItemRelations;
