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
export type EstoqueProdutosAlmoxFilial = z.infer<
	typeof import("./schemas").estoque_produtos_almox_filialSchema
>;
export type EstoqueProdutosAlmoxFilialRelations = Record<string, never>;

export type EstoqueProdutosAlmoxFilialRelationKey =
	keyof EstoqueProdutosAlmoxFilialRelations;
