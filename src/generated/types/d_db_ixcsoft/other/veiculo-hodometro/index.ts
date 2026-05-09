/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VeiculoHodometro = z.infer<
	typeof import("./schemas").veiculo_hodometroSchema
>;
export type VeiculoHodometroRelations = Record<string, never>;

export type VeiculoHodometroRelationKey = keyof VeiculoHodometroRelations;
