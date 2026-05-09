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
export type ViewRadgruposVdContratosProdutos = z.infer<
	typeof import("./schemas").view_radgrupos_vd_contratos_produtosSchema
>;
export type ViewRadgruposVdContratosProdutosRelations = Record<string, never>;

export type ViewRadgruposVdContratosProdutosRelationKey =
	keyof ViewRadgruposVdContratosProdutosRelations;
