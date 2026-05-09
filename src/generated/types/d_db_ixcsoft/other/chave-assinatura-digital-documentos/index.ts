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
export type ChaveAssinaturaDigitalDocumentos = z.infer<
	typeof import("./schemas").chave_assinatura_digital_documentosSchema
>;
export type ChaveAssinaturaDigitalDocumentosRelations = Record<string, never>;

export type ChaveAssinaturaDigitalDocumentosRelationKey =
	keyof ChaveAssinaturaDigitalDocumentosRelations;
