/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VinculoVeiculosDespesasTipo = z.infer<
	typeof import("./schemas").vinculo_veiculos_despesas_tipoSchema
>;
export type VinculoVeiculosDespesasTipoRelations = Record<string, never>;

export type VinculoVeiculosDespesasTipoRelationKey =
	keyof VinculoVeiculosDespesasTipoRelations;
