/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type TelecomAnexos = z.infer<
	typeof import("./schemas").telecom_anexosSchema
>;
export type TelecomAnexosRelations = z.infer<
	typeof import("./schemas").telecom_anexosRelationSchema
>;

export type TelecomAnexosRelationKey = keyof TelecomAnexosRelations;
