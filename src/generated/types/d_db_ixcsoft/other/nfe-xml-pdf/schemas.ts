/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NFE_XML_PDF_TABLE_NAME = "nfe_xml_pdf";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nfe_xml_pdfBaseSchema = z.object({
	id: z.number(),
	arquivo_xml_cancelamento_nfe: z.string(),
	id_entrada: z.number(),
	id_saida: z.number(),
	numero_recibo: z.string(),
	pdf_nf: z.string(),
	xml_cancelamento_nfe: z.string(),
	xml_nf: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nfe_xml_pdfSchema = nfe_xml_pdfBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nfe_xml_pdfCreateSchema = nfe_xml_pdfSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nfe_xml_pdfUpdateSchema = nfe_xml_pdfCreateSchema.partial();
