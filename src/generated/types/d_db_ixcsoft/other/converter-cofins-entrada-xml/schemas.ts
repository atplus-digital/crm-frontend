/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONVERTER_COFINS_ENTRADA_XML_TABLE_NAME =
	"converter_cofins_entrada_xml";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const converter_cofins_entrada_xmlBaseSchema = z.object({
	id: z.number(),
	cofins_st_entrada: z.string(),
	cofins_st_saida: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const converter_cofins_entrada_xmlSchema =
	converter_cofins_entrada_xmlBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const converter_cofins_entrada_xmlCreateSchema =
	converter_cofins_entrada_xmlSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const converter_cofins_entrada_xmlUpdateSchema =
	converter_cofins_entrada_xmlCreateSchema.partial();
