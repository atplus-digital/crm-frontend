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
export type SuMensagens = z.infer<
	typeof import("./schemas").su_mensagensSchema
>;
export type SuMensagensRelations = Record<string, never>;

export type SuMensagensRelationKey = keyof SuMensagensRelations;
