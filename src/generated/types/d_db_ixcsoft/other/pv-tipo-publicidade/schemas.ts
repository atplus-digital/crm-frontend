/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PV_TIPO_PUBLICIDADE_TABLE_NAME = "pv_tipo_publicidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_tipo_publicidadeBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_tipo_publicidadeSchema = pv_tipo_publicidadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_tipo_publicidadeCreateSchema = pv_tipo_publicidadeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_tipo_publicidadeUpdateSchema =
	pv_tipo_publicidadeCreateSchema.partial();
