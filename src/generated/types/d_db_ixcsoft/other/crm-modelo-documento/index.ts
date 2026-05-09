/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type CrmModeloDocumento = z.infer<
	typeof import("./schemas").crm_modelo_documentoSchema
>;
export type CrmModeloDocumentoRelations = Record<string, never>;

export type CrmModeloDocumentoRelationKey = keyof CrmModeloDocumentoRelations;
