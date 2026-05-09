/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type RestricoesSerasaCreditonm = z.infer<
	typeof import("./schemas").restricoes_serasa_creditonmSchema
>;
export type RestricoesSerasaCreditonmRelations = Record<string, never>;

export type RestricoesSerasaCreditonmRelationKey =
	keyof RestricoesSerasaCreditonmRelations;
