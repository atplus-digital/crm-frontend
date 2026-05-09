/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ChaveIntegrador = z.infer<
	typeof import("./schemas").chave_integradorSchema
>;
export type ChaveIntegradorRelations = Record<string, never>;

export type ChaveIntegradorRelationKey = keyof ChaveIntegradorRelations;
