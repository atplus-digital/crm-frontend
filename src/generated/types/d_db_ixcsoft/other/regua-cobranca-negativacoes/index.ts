/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ReguaCobrancaNegativacoes = z.infer<
	typeof import("./schemas").regua_cobranca_negativacoesSchema
>;
export type ReguaCobrancaNegativacoesRelations = Record<string, never>;

export type ReguaCobrancaNegativacoesRelationKey =
	keyof ReguaCobrancaNegativacoesRelations;
