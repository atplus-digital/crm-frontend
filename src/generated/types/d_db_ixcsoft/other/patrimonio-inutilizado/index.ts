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
export type PatrimonioInutilizado = z.infer<
	typeof import("./schemas").patrimonio_inutilizadoSchema
>;
export type PatrimonioInutilizadoRelations = Record<string, never>;

export type PatrimonioInutilizadoRelationKey =
	keyof PatrimonioInutilizadoRelations;
