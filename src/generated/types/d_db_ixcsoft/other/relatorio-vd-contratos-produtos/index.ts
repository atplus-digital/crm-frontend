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
export type RelatorioVdContratosProdutos = z.infer<
	typeof import("./schemas").relatorio_vd_contratos_produtosSchema
>;
export type RelatorioVdContratosProdutosRelations = Record<string, never>;

export type RelatorioVdContratosProdutosRelationKey =
	keyof RelatorioVdContratosProdutosRelations;
