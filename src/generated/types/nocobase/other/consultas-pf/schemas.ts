/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pessoasBaseSchema } from "../../pessoas/schemas";
import { usersBaseSchema } from "../../users/schemas";
import { consultas_pfStatusConsultaSchema } from "./labels";

export const T_CONSULTAS_PF_TABLE_NAME = "t_consultas_pf";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const consultas_pfBaseSchema = z.object({
	id: z.number(),
	f_id_pessoa_fk: z.number(),
	f_justificativa: z.string(),
	f_retorno_spc: z.string(),
	f_status_consulta: consultas_pfStatusConsultaSchema,
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const consultas_pfRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_id_pessoa: z.lazy(() => pessoasBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const consultas_pfSchema = consultas_pfBaseSchema.extend(
	consultas_pfRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const consultas_pfCreateSchema = consultas_pfSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_id_pessoa: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const consultas_pfUpdateSchema = consultas_pfCreateSchema.partial();
