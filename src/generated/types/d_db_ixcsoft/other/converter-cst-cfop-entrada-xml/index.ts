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
export type ConverterCstCfopEntradaXml = z.infer<
	typeof import("./schemas").converter_cst_cfop_entrada_xmlSchema
>;
export type ConverterCstCfopEntradaXmlRelations = Record<string, never>;

export type ConverterCstCfopEntradaXmlRelationKey =
	keyof ConverterCstCfopEntradaXmlRelations;
