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
export type ConfigAutoprovisionamento = z.infer<
	typeof import("./schemas").config_autoprovisionamentoSchema
>;
export type ConfigAutoprovisionamentoRelations = Record<string, never>;

export type ConfigAutoprovisionamentoRelationKey =
	keyof ConfigAutoprovisionamentoRelations;
