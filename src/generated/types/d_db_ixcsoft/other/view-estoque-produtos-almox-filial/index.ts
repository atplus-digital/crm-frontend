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
export type ViewEstoqueProdutosAlmoxFilial = z.infer<
	typeof import("./schemas").view_estoque_produtos_almox_filialSchema
>;
export type ViewEstoqueProdutosAlmoxFilialRelations = Record<string, never>;

export type ViewEstoqueProdutosAlmoxFilialRelationKey =
	keyof ViewEstoqueProdutosAlmoxFilialRelations;
