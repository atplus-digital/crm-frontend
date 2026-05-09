/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Patrimonio = z.infer<typeof import("./schemas").patrimonioSchema>;
export type PatrimonioRelations = Record<string, never>;

export type PatrimonioRelationKey = keyof PatrimonioRelations;
