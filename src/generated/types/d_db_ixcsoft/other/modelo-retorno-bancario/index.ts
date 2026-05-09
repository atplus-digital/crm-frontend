/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ModeloRetornoBancario = z.infer<
	typeof import("./schemas").modelo_retorno_bancarioSchema
>;
export type ModeloRetornoBancarioRelations = Record<string, never>;

export type ModeloRetornoBancarioRelationKey =
	keyof ModeloRetornoBancarioRelations;
