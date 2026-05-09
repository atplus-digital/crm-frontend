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
export type Entrada = z.infer<typeof import("./schemas").entradaSchema>;
export type EntradaRelations = Record<string, never>;

export type EntradaRelationKey = keyof EntradaRelations;
