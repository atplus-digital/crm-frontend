/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { periodos_feriasBaseSchema } from "../periodos-ferias/schemas";
import { lancamentos_feriasStatusSchema } from "./labels";

export const T_LANCAMENTOS_FERIAS_TABLE_NAME = "t_lancamentos_ferias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lancamentos_feriasBaseSchema = z.object({
	id: z.number(),
	f_fk_periodos_ferias: z.number(),
	f_data_retorno: z.string(),
	f_data_saida: z.string(),
	f_dias_gozados: z.number(),
	f_dias_vendidos: z.number(),
	f_observacoes: z.string(),
	f_status: lancamentos_feriasStatusSchema,
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const lancamentos_feriasRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_periodos_ferias: z.lazy(() => periodos_feriasBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lancamentos_feriasSchema = lancamentos_feriasBaseSchema.extend(
	lancamentos_feriasRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lancamentos_feriasCreateSchema = lancamentos_feriasSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_periodos_ferias: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lancamentos_feriasUpdateSchema =
	lancamentos_feriasCreateSchema.partial();
