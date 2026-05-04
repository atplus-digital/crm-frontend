/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TelecomOpcoesL2l = z.infer<
	typeof import("./schemas").telecom_opcoes_l2lSchema
>;
export type TelecomOpcoesL2lRelations = z.infer<
	typeof import("./schemas").telecom_opcoes_l2lRelationSchema
>;

export type TelecomOpcoesL2lRelationKey = keyof TelecomOpcoesL2lRelations;
