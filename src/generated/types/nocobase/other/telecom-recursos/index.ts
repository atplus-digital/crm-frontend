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
export type TelecomRecursos = z.infer<
	typeof import("./schemas").telecom_recursosSchema
>;
export type TelecomRecursosRelations = z.infer<
	typeof import("./schemas").telecom_recursosRelationSchema
>;

export type TelecomRecursosRelationKey = keyof TelecomRecursosRelations;
