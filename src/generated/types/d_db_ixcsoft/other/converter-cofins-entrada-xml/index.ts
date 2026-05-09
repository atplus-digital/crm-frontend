/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ConverterCofinsEntradaXml = z.infer<
	typeof import("./schemas").converter_cofins_entrada_xmlSchema
>;
export type ConverterCofinsEntradaXmlRelations = Record<string, never>;

export type ConverterCofinsEntradaXmlRelationKey =
	keyof ConverterCofinsEntradaXmlRelations;
