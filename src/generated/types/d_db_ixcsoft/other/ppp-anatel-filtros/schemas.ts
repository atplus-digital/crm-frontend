/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PPP_ANATEL_FILTROS_TABLE_NAME = "ppp_anatel_filtros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ppp_anatel_filtrosBaseSchema = z.object({
	id: z.number(),
	actives_jobs: z.number(),
	data_final: z.string(),
	data_inicial: z.string(),
	gerar_dici_ppp_segundo_plano: z.string(),
	id_filial: z.number(),
	status_geracao_dici_ppp: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ppp_anatel_filtrosSchema = ppp_anatel_filtrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ppp_anatel_filtrosCreateSchema = ppp_anatel_filtrosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ppp_anatel_filtrosUpdateSchema =
	ppp_anatel_filtrosCreateSchema.partial();
