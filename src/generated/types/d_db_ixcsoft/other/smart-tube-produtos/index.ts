/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SmartTubeProdutos = z.infer<
	typeof import("./schemas").smart_tube_produtosSchema
>;
export type SmartTubeProdutosRelations = Record<string, never>;

export type SmartTubeProdutosRelationKey = keyof SmartTubeProdutosRelations;
