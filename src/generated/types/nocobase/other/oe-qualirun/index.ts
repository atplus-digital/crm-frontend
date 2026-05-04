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
export type OeQualirun = z.infer<typeof import("./schemas").oe_qualirunSchema>;
export type OeQualirunRelations = z.infer<
	typeof import("./schemas").oe_qualirunRelationSchema
>;

export type OeQualirunRelationKey = keyof OeQualirunRelations;
