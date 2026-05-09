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
export type MovimentoComodatos = z.infer<
	typeof import("./schemas").movimento_comodatosSchema
>;
export type MovimentoComodatosRelations = Record<string, never>;

export type MovimentoComodatosRelationKey = keyof MovimentoComodatosRelations;
