/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RadgrupoPlanosConf = z.infer<
	typeof import("./schemas").radgrupo_planos_confSchema
>;
export type RadgrupoPlanosConfRelations = Record<string, never>;

export type RadgrupoPlanosConfRelationKey = keyof RadgrupoPlanosConfRelations;
