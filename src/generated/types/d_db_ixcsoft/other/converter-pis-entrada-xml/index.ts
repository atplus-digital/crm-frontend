/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ConverterPisEntradaXml = z.infer<
	typeof import("./schemas").converter_pis_entrada_xmlSchema
>;
export type ConverterPisEntradaXmlRelations = Record<string, never>;

export type ConverterPisEntradaXmlRelationKey =
	keyof ConverterPisEntradaXmlRelations;
