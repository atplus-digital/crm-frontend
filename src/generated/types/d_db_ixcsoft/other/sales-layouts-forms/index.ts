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
export type SalesLayoutsForms = z.infer<
	typeof import("./schemas").sales_layouts_formsSchema
>;
export type SalesLayoutsFormsRelations = Record<string, never>;

export type SalesLayoutsFormsRelationKey = keyof SalesLayoutsFormsRelations;
