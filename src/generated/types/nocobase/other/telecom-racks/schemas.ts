/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { equipamentosBaseSchema } from "../equipamentos/schemas";
import { sitesBaseSchema } from "../sites/schemas";
import { telecom_filaBaseSchema } from "../telecom-fila/schemas";
import { telecom_recursosBaseSchema } from "../telecom-recursos/schemas";
import { telecom_salasBaseSchema } from "../telecom-salas/schemas";

export const T_TELECOM_RACKS_TABLE_NAME = "t_telecom_racks";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_racksBaseSchema = z.object({
	id: z.number(),
	f_fk_rack_fila: z.number(),
	f_fk_rack_sala: z.number(),
	f_fk_site_racks: z.number(),
	f_rack: z.string(),
	f_sigla: z.string(),
	parentId: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_racksRelationSchema = z.object({
	children: z.lazy(() => telecom_racksBaseSchema.array()),
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_fila: z.lazy(() => telecom_filaBaseSchema.nullable()),
	f_fk_rack_a_recursos: z.lazy(() => telecom_recursosBaseSchema.array()),
	f_fk_rack_ativos: z.lazy(() => equipamentosBaseSchema.array()),
	f_fk_rack_sites: z.lazy(() => sitesBaseSchema.nullable()),
	f_fk_recursos_rack_b: z.lazy(() => telecom_recursosBaseSchema.array()),
	f_sala: z.lazy(() => telecom_salasBaseSchema.nullable()),
	parent: z.lazy(() => telecom_racksBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_racksSchema = telecom_racksBaseSchema.extend(
	telecom_racksRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_racksCreateSchema = telecom_racksSchema.omit({
	children: true,
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_fila: true,
	f_fk_rack_a_recursos: true,
	f_fk_rack_ativos: true,
	f_fk_rack_sites: true,
	f_fk_recursos_rack_b: true,
	f_sala: true,
	id: true,
	parent: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_racksUpdateSchema = telecom_racksCreateSchema.partial();
