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
export type RelatorioSuOssChamado = z.infer<
	typeof import("./schemas").relatorio_su_oss_chamadoSchema
>;
export type RelatorioSuOssChamadoRelations = Record<string, never>;

export type RelatorioSuOssChamadoRelationKey =
	keyof RelatorioSuOssChamadoRelations;
