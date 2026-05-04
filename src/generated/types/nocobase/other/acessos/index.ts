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
export type Acessos = z.infer<typeof import("./schemas").acessosSchema>;
export type AcessosRelations = z.infer<
	typeof import("./schemas").acessosRelationSchema
>;

export type AcessosRelationKey = keyof AcessosRelations;
