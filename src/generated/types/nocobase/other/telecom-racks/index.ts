/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TelecomRacks = z.infer<
	typeof import("./schemas").telecom_racksSchema
>;
export type TelecomRacksRelations = z.infer<
	typeof import("./schemas").telecom_racksRelationSchema
>;

export type TelecomRacksRelationKey = keyof TelecomRacksRelations;
