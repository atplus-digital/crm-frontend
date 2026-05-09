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
export type CrmEmailLog = z.infer<
	typeof import("./schemas").crm_email_logSchema
>;
export type CrmEmailLogRelations = Record<string, never>;

export type CrmEmailLogRelationKey = keyof CrmEmailLogRelations;
