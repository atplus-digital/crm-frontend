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
export type CrmTrocaTitularidade = z.infer<
	typeof import("./schemas").crm_troca_titularidadeSchema
>;
export type CrmTrocaTitularidadeRelations = z.infer<
	typeof import("./schemas").crm_troca_titularidadeRelationSchema
>;

export type CrmTrocaTitularidadeRelationKey =
	keyof CrmTrocaTitularidadeRelations;
