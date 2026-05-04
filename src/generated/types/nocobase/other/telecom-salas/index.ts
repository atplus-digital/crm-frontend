/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TelecomSalas = z.infer<
	typeof import("./schemas").telecom_salasSchema
>;
export type TelecomSalasRelations = z.infer<
	typeof import("./schemas").telecom_salasRelationSchema
>;

export type TelecomSalasRelationKey = keyof TelecomSalasRelations;
