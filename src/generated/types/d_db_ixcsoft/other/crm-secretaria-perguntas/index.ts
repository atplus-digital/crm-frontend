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
export type CrmSecretariaPerguntas = z.infer<
	typeof import("./schemas").crm_secretaria_perguntasSchema
>;
export type CrmSecretariaPerguntasRelations = Record<string, never>;

export type CrmSecretariaPerguntasRelationKey =
	keyof CrmSecretariaPerguntasRelations;
