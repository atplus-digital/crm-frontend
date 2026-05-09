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
export type NfseXmlPreConsulta = z.infer<
	typeof import("./schemas").nfse_xml_pre_consultaSchema
>;
export type NfseXmlPreConsultaRelations = Record<string, never>;

export type NfseXmlPreConsultaRelationKey = keyof NfseXmlPreConsultaRelations;
