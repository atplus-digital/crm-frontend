/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RelatorioPatrimonioDivergencia = z.infer<
	typeof import("./schemas").relatorio_patrimonio_divergenciaSchema
>;
export type RelatorioPatrimonioDivergenciaRelations = Record<string, never>;

export type RelatorioPatrimonioDivergenciaRelationKey =
	keyof RelatorioPatrimonioDivergenciaRelations;
