/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ContratoIxcItens = z.infer<
	typeof import("./schemas").contrato_ixc_itensSchema
>;
export type ContratoIxcItensRelations = z.infer<
	typeof import("./schemas").contrato_ixc_itensRelationSchema
>;

export type ContratoIxcItensRelationKey = keyof ContratoIxcItensRelations;
