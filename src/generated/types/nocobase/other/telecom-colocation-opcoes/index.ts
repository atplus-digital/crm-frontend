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
export type TelecomColocationOpcoes = z.infer<
	typeof import("./schemas").telecom_colocation_opcoesSchema
>;
export type TelecomColocationOpcoesRelations = z.infer<
	typeof import("./schemas").telecom_colocation_opcoesRelationSchema
>;

export type TelecomColocationOpcoesRelationKey =
	keyof TelecomColocationOpcoesRelations;
