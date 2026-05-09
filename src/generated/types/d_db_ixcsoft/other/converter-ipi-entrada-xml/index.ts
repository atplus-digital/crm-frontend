/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type ConverterIpiEntradaXml = z.infer<
	typeof import("./schemas").converter_ipi_entrada_xmlSchema
>;
export type ConverterIpiEntradaXmlRelations = Record<string, never>;

export type ConverterIpiEntradaXmlRelationKey =
	keyof ConverterIpiEntradaXmlRelations;
