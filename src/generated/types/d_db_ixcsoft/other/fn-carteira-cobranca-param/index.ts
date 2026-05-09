/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnCarteiraCobrancaParam = z.infer<
	typeof import("./schemas").fn_carteira_cobranca_paramSchema
>;
export type FnCarteiraCobrancaParamRelations = Record<string, never>;

export type FnCarteiraCobrancaParamRelationKey =
	keyof FnCarteiraCobrancaParamRelations;
