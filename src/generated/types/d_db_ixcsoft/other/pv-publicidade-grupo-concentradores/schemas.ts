/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PV_PUBLICIDADE_GRUPO_CONCENTRADORES_TABLE_NAME =
	"pv_publicidade_grupo_concentradores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pv_publicidade_grupo_concentradoresBaseSchema = z.object({
	id: z.number(),
	id_concentrador: z.number(),
	id_grupo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pv_publicidade_grupo_concentradoresSchema =
	pv_publicidade_grupo_concentradoresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pv_publicidade_grupo_concentradoresCreateSchema =
	pv_publicidade_grupo_concentradoresSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pv_publicidade_grupo_concentradoresUpdateSchema =
	pv_publicidade_grupo_concentradoresCreateSchema.partial();
