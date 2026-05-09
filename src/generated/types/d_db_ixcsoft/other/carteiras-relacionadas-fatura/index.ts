/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CarteirasRelacionadasFatura = z.infer<
	typeof import("./schemas").carteiras_relacionadas_faturaSchema
>;
export type CarteirasRelacionadasFaturaRelations = Record<string, never>;

export type CarteirasRelacionadasFaturaRelationKey =
	keyof CarteirasRelacionadasFaturaRelations;
