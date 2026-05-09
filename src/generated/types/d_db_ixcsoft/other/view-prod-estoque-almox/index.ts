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
export type ViewProdEstoqueAlmox = z.infer<
	typeof import("./schemas").view_prod_estoque_almoxSchema
>;
export type ViewProdEstoqueAlmoxRelations = Record<string, never>;

export type ViewProdEstoqueAlmoxRelationKey =
	keyof ViewProdEstoqueAlmoxRelations;
