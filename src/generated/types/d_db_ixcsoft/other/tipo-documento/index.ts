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
export type TipoDocumento = z.infer<
	typeof import("./schemas").tipo_documentoSchema
>;
export type TipoDocumentoRelations = Record<string, never>;

export type TipoDocumentoRelationKey = keyof TipoDocumentoRelations;
