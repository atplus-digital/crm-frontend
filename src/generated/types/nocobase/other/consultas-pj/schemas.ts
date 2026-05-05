/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { empresasBaseSchema } from "../../empresas/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { consultas_pjStatusConsultaSchema } from "./labels";

export const T_CONSULTAS_PJ_TABLE_NAME = "t_consultas_pj";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const consultas_pjBaseSchema = z.object({
	id: z.number(),
	f_id_pessoa_fk: z.number(),
	f_justificativa: z.string(),
	f_retorno_spc: z.string(),
	f_status_consulta: consultas_pjStatusConsultaSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const consultas_pjRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_id_pessoa: z.lazy(() => empresasBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const consultas_pjSchema = consultas_pjBaseSchema.extend(
	consultas_pjRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const consultas_pjCreateSchema = consultas_pjSchema.omit({
	createdAt: true,
	createdBy: true,
	f_id_pessoa: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const consultas_pjUpdateSchema = consultas_pjCreateSchema.partial();
