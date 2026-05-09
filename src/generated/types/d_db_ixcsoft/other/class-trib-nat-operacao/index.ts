/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ClassTribNatOperacao = z.infer<
	typeof import("./schemas").class_trib_nat_operacaoSchema
>;
export type ClassTribNatOperacaoRelations = Record<string, never>;

export type ClassTribNatOperacaoRelationKey =
	keyof ClassTribNatOperacaoRelations;
