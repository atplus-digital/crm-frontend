/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TabelaPrecosCalculo = z.infer<
	typeof import("./schemas").tabela_precos_calculoSchema
>;
export type TabelaPrecosCalculoRelations = Record<string, never>;

export type TabelaPrecosCalculoRelationKey = keyof TabelaPrecosCalculoRelations;
