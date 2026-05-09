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
export type FnAdtoFornecedor = z.infer<
	typeof import("./schemas").fn_adto_fornecedorSchema
>;
export type FnAdtoFornecedorRelations = Record<string, never>;

export type FnAdtoFornecedorRelationKey = keyof FnAdtoFornecedorRelations;
