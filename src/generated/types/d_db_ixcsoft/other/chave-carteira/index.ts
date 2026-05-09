/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ChaveCarteira = z.infer<
	typeof import("./schemas").chave_carteiraSchema
>;
export type ChaveCarteiraRelations = Record<string, never>;

export type ChaveCarteiraRelationKey = keyof ChaveCarteiraRelations;
