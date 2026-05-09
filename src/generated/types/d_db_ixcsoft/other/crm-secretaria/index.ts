/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmSecretaria = z.infer<
	typeof import("./schemas").crm_secretariaSchema
>;
export type CrmSecretariaRelations = Record<string, never>;

export type CrmSecretariaRelationKey = keyof CrmSecretariaRelations;
