/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RetornoEnvioNfe = z.infer<
	typeof import("./schemas").retorno_envio_nfeSchema
>;
export type RetornoEnvioNfeRelations = Record<string, never>;

export type RetornoEnvioNfeRelationKey = keyof RetornoEnvioNfeRelations;
