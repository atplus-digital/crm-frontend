/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type InmapSessao = z.infer<
	typeof import("./schemas").inmap_sessaoSchema
>;
export type InmapSessaoRelations = Record<string, never>;

export type InmapSessaoRelationKey = keyof InmapSessaoRelations;
