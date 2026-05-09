/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PPP_ANATEL_TRAFEGO_TABLE_NAME = "ppp_anatel_trafego";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ppp_anatel_trafegoBaseSchema = z.object({
	id: z.number(),
	cnpj: z.string(),
	dado_informado: z.string(),
	date: z.string(),
	id_ppp_anatel_filtros: z.number(),
	id_uf: z.number(),
	servico: z.string(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ppp_anatel_trafegoSchema = ppp_anatel_trafegoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ppp_anatel_trafegoCreateSchema = ppp_anatel_trafegoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ppp_anatel_trafegoUpdateSchema =
	ppp_anatel_trafegoCreateSchema.partial();
