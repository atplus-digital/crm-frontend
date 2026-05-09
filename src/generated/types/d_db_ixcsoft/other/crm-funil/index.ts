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
export type CrmFunil = z.infer<typeof import("./schemas").crm_funilSchema>;
export type CrmFunilRelations = Record<string, never>;

export type CrmFunilRelationKey = keyof CrmFunilRelations;
