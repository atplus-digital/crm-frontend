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
export type Aniversarios = z.infer<
	typeof import("./schemas").aniversariosSchema
>;
export type AniversariosRelations = z.infer<
	typeof import("./schemas").aniversariosRelationSchema
>;

export type AniversariosRelationKey = keyof AniversariosRelations;
