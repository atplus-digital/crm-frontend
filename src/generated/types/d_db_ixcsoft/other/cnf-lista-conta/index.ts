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
export type CnfListaConta = z.infer<
	typeof import("./schemas").cnf_lista_contaSchema
>;
export type CnfListaContaRelations = Record<string, never>;

export type CnfListaContaRelationKey = keyof CnfListaContaRelations;
