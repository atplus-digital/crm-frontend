/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TelecomContratos = z.infer<
	typeof import("./schemas").telecom_contratosSchema
>;
export type TelecomContratosRelations = z.infer<
	typeof import("./schemas").telecom_contratosRelationSchema
>;

export type TelecomContratosRelationKey = keyof TelecomContratosRelations;
