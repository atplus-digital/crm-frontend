/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type SpeedTestResultados = z.infer<
	typeof import("./schemas").speed_test_resultadosSchema
>;
export type SpeedTestResultadosRelations = Record<string, never>;

export type SpeedTestResultadosRelationKey = keyof SpeedTestResultadosRelations;
