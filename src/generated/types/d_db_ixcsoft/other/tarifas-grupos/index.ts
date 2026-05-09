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
export type TarifasGrupos = z.infer<
	typeof import("./schemas").tarifas_gruposSchema
>;
export type TarifasGruposRelations = Record<string, never>;

export type TarifasGruposRelationKey = keyof TarifasGruposRelations;
