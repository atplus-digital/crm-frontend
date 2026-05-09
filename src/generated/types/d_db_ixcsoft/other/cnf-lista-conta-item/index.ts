/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CnfListaContaItem = z.infer<
	typeof import("./schemas").cnf_lista_conta_itemSchema
>;
export type CnfListaContaItemRelations = Record<string, never>;

export type CnfListaContaItemRelationKey = keyof CnfListaContaItemRelations;
