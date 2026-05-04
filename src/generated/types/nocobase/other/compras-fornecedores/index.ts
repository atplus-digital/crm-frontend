/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ComprasFornecedores = z.infer<
	typeof import("./schemas").compras_fornecedoresSchema
>;
export type ComprasFornecedoresRelations = z.infer<
	typeof import("./schemas").compras_fornecedoresRelationSchema
>;

export type ComprasFornecedoresRelationKey = keyof ComprasFornecedoresRelations;
