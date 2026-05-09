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
export type NfeCartaCorrecao = z.infer<
	typeof import("./schemas").nfe_carta_correcaoSchema
>;
export type NfeCartaCorrecaoRelations = Record<string, never>;

export type NfeCartaCorrecaoRelationKey = keyof NfeCartaCorrecaoRelations;
