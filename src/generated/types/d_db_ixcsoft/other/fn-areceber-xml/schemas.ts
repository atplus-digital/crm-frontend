/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_XML_TABLE_NAME = "fn_areceber_xml";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_xmlBaseSchema = z.object({
	id: z.number(),
	id_areceber: z.number(),
	xml_gerencianet: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_xmlSchema = fn_areceber_xmlBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_xmlCreateSchema = fn_areceber_xmlSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_xmlUpdateSchema =
	fn_areceber_xmlCreateSchema.partial();
