/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Labels + Enums
export * from "./labels";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type FnCarteiraCobranca = z.infer<
	typeof import("./schemas").fn_carteira_cobrancaSchema
>;
export type FnCarteiraCobrancaRelations = Record<string, never>;

export type FnCarteiraCobrancaRelationKey = keyof FnCarteiraCobrancaRelations;
