/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ProdutosCodServicos = z.infer<
	typeof import("./schemas").produtos_cod_servicosSchema
>;
export type ProdutosCodServicosRelations = Record<string, never>;

export type ProdutosCodServicosRelationKey = keyof ProdutosCodServicosRelations;
