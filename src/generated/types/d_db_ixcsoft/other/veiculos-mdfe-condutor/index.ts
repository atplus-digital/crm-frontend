/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VeiculosMdfeCondutor = z.infer<
	typeof import("./schemas").veiculos_mdfe_condutorSchema
>;
export type VeiculosMdfeCondutorRelations = Record<string, never>;

export type VeiculosMdfeCondutorRelationKey =
	keyof VeiculosMdfeCondutorRelations;
