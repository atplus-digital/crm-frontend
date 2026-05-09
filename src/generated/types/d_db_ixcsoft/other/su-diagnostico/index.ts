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
export type SuDiagnostico = z.infer<
	typeof import("./schemas").su_diagnosticoSchema
>;
export type SuDiagnosticoRelations = Record<string, never>;

export type SuDiagnosticoRelationKey = keyof SuDiagnosticoRelations;
