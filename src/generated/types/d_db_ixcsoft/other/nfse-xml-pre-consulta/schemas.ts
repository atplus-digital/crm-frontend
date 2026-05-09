/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	nfse_xml_pre_consultaComunicadoSchema,
	nfse_xml_pre_consultaConsultadoSchema,
} from "./labels";

export const NFSE_XML_PRE_CONSULTA_TABLE_NAME = "nfse_xml_pre_consulta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nfse_xml_pre_consultaBaseSchema = z.object({
	id: z.number(),
	comunicado: nfse_xml_pre_consultaComunicadoSchema,
	consultado: nfse_xml_pre_consultaConsultadoSchema,
	data_envio: z.string(),
	id_lote: z.number(),
	id_saida: z.number(),
	num_tentativas: z.number(),
	xml: z.string(),
	xml_pre_envio: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nfse_xml_pre_consultaSchema = nfse_xml_pre_consultaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nfse_xml_pre_consultaCreateSchema =
	nfse_xml_pre_consultaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nfse_xml_pre_consultaUpdateSchema =
	nfse_xml_pre_consultaCreateSchema.partial();
