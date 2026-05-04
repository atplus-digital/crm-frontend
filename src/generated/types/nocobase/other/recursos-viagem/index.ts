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
export type RecursosViagem = z.infer<
	typeof import("./schemas").recursos_viagemSchema
>;
export type RecursosViagemRelations = z.infer<
	typeof import("./schemas").recursos_viagemRelationSchema
>;

export type RecursosViagemRelationKey = keyof RecursosViagemRelations;
