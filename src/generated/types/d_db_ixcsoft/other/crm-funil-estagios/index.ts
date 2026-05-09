/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmFunilEstagios = z.infer<
	typeof import("./schemas").crm_funil_estagiosSchema
>;
export type CrmFunilEstagiosRelations = Record<string, never>;

export type CrmFunilEstagiosRelationKey = keyof CrmFunilEstagiosRelations;
