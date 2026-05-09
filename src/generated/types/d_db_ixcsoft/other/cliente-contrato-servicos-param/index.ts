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
export type ClienteContratoServicosParam = z.infer<
	typeof import("./schemas").cliente_contrato_servicos_paramSchema
>;
export type ClienteContratoServicosParamRelations = Record<string, never>;

export type ClienteContratoServicosParamRelationKey =
	keyof ClienteContratoServicosParamRelations;
