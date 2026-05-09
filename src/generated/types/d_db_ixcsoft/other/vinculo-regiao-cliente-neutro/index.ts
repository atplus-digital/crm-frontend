/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type VinculoRegiaoClienteNeutro = z.infer<
	typeof import("./schemas").vinculo_regiao_cliente_neutroSchema
>;
export type VinculoRegiaoClienteNeutroRelations = Record<string, never>;

export type VinculoRegiaoClienteNeutroRelationKey =
	keyof VinculoRegiaoClienteNeutroRelations;
