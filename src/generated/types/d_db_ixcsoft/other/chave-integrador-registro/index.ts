/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ChaveIntegradorRegistro = z.infer<
	typeof import("./schemas").chave_integrador_registroSchema
>;
export type ChaveIntegradorRegistroRelations = Record<string, never>;

export type ChaveIntegradorRegistroRelationKey =
	keyof ChaveIntegradorRegistroRelations;
