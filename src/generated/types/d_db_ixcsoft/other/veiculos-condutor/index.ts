/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VeiculosCondutor = z.infer<
	typeof import("./schemas").veiculos_condutorSchema
>;
export type VeiculosCondutorRelations = Record<string, never>;

export type VeiculosCondutorRelationKey = keyof VeiculosCondutorRelations;
