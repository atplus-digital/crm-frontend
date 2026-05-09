/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type IntegracoesIot = z.infer<
	typeof import("./schemas").integracoes_iotSchema
>;
export type IntegracoesIotRelations = Record<string, never>;

export type IntegracoesIotRelationKey = keyof IntegracoesIotRelations;
