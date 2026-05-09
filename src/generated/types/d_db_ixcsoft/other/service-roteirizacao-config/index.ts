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
export type ServiceRoteirizacaoConfig = z.infer<
	typeof import("./schemas").service_roteirizacao_configSchema
>;
export type ServiceRoteirizacaoConfigRelations = Record<string, never>;

export type ServiceRoteirizacaoConfigRelationKey =
	keyof ServiceRoteirizacaoConfigRelations;
