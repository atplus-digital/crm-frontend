/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type AnexosTrocaTitularidade = z.infer<
	typeof import("./schemas").anexos_troca_titularidadeSchema
>;
export type AnexosTrocaTitularidadeRelations = z.infer<
	typeof import("./schemas").anexos_troca_titularidadeRelationSchema
>;

export type AnexosTrocaTitularidadeRelationKey =
	keyof AnexosTrocaTitularidadeRelations;
