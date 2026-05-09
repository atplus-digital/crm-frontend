/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnFeriados = z.infer<typeof import("./schemas").fn_feriadosSchema>;
export type FnFeriadosRelations = Record<string, never>;

export type FnFeriadosRelationKey = keyof FnFeriadosRelations;
