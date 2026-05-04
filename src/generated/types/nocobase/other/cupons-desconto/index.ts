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
export type CuponsDesconto = z.infer<
	typeof import("./schemas").cupons_descontoSchema
>;
export type CuponsDescontoRelations = z.infer<
	typeof import("./schemas").cupons_descontoRelationSchema
>;

export type CuponsDescontoRelationKey = keyof CuponsDescontoRelations;
