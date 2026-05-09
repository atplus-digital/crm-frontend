/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type EstruturaHistorico = z.infer<
	typeof import("./schemas").estrutura_historicoSchema
>;
export type EstruturaHistoricoRelations = Record<string, never>;

export type EstruturaHistoricoRelationKey = keyof EstruturaHistoricoRelations;
