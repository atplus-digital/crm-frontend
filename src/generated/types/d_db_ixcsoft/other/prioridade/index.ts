/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Prioridade = z.infer<typeof import("./schemas").prioridadeSchema>;
export type PrioridadeRelations = Record<string, never>;

export type PrioridadeRelationKey = keyof PrioridadeRelations;
