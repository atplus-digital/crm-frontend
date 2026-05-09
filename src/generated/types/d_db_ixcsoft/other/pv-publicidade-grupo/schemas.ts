/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PV_PUBLICIDADE_GRUPO_TABLE_NAME = "pv_publicidade_grupo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_publicidade_grupoBaseSchema = z.object({
	id: z.number(),
	nome_grupo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_publicidade_grupoSchema = pv_publicidade_grupoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_publicidade_grupoCreateSchema = pv_publicidade_grupoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_publicidade_grupoUpdateSchema =
	pv_publicidade_grupoCreateSchema.partial();
