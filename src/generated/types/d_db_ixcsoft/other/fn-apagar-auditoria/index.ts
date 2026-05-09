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
export type FnApagarAuditoria = z.infer<
	typeof import("./schemas").fn_apagar_auditoriaSchema
>;
export type FnApagarAuditoriaRelations = Record<string, never>;

export type FnApagarAuditoriaRelationKey = keyof FnApagarAuditoriaRelations;
