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
export type FiberdocsUsuarioConfig = z.infer<
	typeof import("./schemas").fiberdocs_usuario_configSchema
>;
export type FiberdocsUsuarioConfigRelations = Record<string, never>;

export type FiberdocsUsuarioConfigRelationKey =
	keyof FiberdocsUsuarioConfigRelations;
