/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const DFE_HISTORICO_CONSULTA_TABLE_NAME = "dfe_historico_consulta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dfe_historico_consultaBaseSchema = z.object({
	id: z.number(),
	c_stat: z.string(),
	data_consulta: z.string(),
	docs_encontrados: z.number(),
	id_filial: z.number(),
	is_bloqueado: z.number(),
	nsu_consultado: z.string(),
	nsu_retornado: z.string(),
	status_consulta: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dfe_historico_consultaSchema = dfe_historico_consultaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dfe_historico_consultaCreateSchema =
	dfe_historico_consultaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dfe_historico_consultaUpdateSchema =
	dfe_historico_consultaCreateSchema.partial();
