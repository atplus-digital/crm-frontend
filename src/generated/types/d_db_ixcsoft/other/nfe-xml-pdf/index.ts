/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { z } from "zod";

// Re-exports: Schemas
export * from "./schemas";

// Type inferences
export type NfeXmlPdf = z.infer<typeof import("./schemas").nfe_xml_pdfSchema>;
export type NfeXmlPdfRelations = Record<string, never>;

export type NfeXmlPdfRelationKey = keyof NfeXmlPdfRelations;
