/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TelecomFila = z.infer<
	typeof import("./schemas").telecom_filaSchema
>;
export type TelecomFilaRelations = z.infer<
	typeof import("./schemas").telecom_filaRelationSchema
>;

export type TelecomFilaRelationKey = keyof TelecomFilaRelations;
