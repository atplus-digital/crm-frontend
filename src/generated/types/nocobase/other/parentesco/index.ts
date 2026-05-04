/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type Parentesco = z.infer<typeof import("./schemas").parentescoSchema>;
export type ParentescoRelations = z.infer<
	typeof import("./schemas").parentescoRelationSchema
>;

export type ParentescoRelationKey = keyof ParentescoRelations;
