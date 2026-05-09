/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PeriodoJornadaTrabalho = z.infer<
	typeof import("./schemas").periodo_jornada_trabalhoSchema
>;
export type PeriodoJornadaTrabalhoRelations = Record<string, never>;

export type PeriodoJornadaTrabalhoRelationKey =
	keyof PeriodoJornadaTrabalhoRelations;
