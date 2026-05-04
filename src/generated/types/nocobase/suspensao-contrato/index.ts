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
export type SuspensaoContrato = z.infer<
	typeof import("./schemas").suspensao_contratoSchema
>;
export type SuspensaoContratoRelations = z.infer<
	typeof import("./schemas").suspensao_contratoRelationSchema
>;

export type SuspensaoContratoRelationKey = keyof SuspensaoContratoRelations;
