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
export type CrmCores = z.infer<typeof import("./schemas").crm_coresSchema>;
export type CrmCoresRelations = Record<string, never>;

export type CrmCoresRelationKey = keyof CrmCoresRelations;
