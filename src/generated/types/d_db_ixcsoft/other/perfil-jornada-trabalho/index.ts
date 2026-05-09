/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type PerfilJornadaTrabalho = z.infer<
	typeof import("./schemas").perfil_jornada_trabalhoSchema
>;
export type PerfilJornadaTrabalhoRelations = Record<string, never>;

export type PerfilJornadaTrabalhoRelationKey =
	keyof PerfilJornadaTrabalhoRelations;
