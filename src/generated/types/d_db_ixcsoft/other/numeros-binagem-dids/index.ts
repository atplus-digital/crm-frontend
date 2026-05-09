/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NumerosBinagemDids = z.infer<
	typeof import("./schemas").numeros_binagem_didsSchema
>;
export type NumerosBinagemDidsRelations = Record<string, never>;

export type NumerosBinagemDidsRelationKey = keyof NumerosBinagemDidsRelations;
