/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { converter_cst_cfop_entrada_xmlRegimeTributarioSchema } from "./labels";

export const CONVERTER_CST_CFOP_ENTRADA_XML_TABLE_NAME =
	"converter_cst_cfop_entrada_xml";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const converter_cst_cfop_entrada_xmlBaseSchema = z.object({
	id: z.number(),
	cfop_entrada: z.number(),
	cfop_saida: z.number(),
	csosn_entrada: z.string(),
	csosn_saida: z.string(),
	cst_entrada: z.string(),
	cst_saida: z.string(),
	descricao: z.string(),
	regime_tributario: converter_cst_cfop_entrada_xmlRegimeTributarioSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const converter_cst_cfop_entrada_xmlSchema =
	converter_cst_cfop_entrada_xmlBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const converter_cst_cfop_entrada_xmlCreateSchema =
	converter_cst_cfop_entrada_xmlSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const converter_cst_cfop_entrada_xmlUpdateSchema =
	converter_cst_cfop_entrada_xmlCreateSchema.partial();
