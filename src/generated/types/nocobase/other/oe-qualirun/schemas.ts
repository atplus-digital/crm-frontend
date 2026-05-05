/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { negociacoesBaseSchema } from "../../negociacoes/schemas";
import { usersBaseSchema } from "../../users/schemas";
import {
	oe_qualirunProcedimentoSchema,
	oe_qualirunStatusSchema,
} from "./labels";

export const T_OE_QUALIRUN_TABLE_NAME = "t_oe_qualirun";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const oe_qualirunBaseSchema = z.object({
	id: z.number(),
	f_fk_negociacoes: z.number(),
	f_id_externo: z.string(),
	f_link_externo: z.string(),
	f_procedimento: oe_qualirunProcedimentoSchema,
	f_status: oe_qualirunStatusSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const oe_qualirunRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_negociacoes: z.lazy(() => negociacoesBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const oe_qualirunSchema = oe_qualirunBaseSchema.extend(
	oe_qualirunRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const oe_qualirunCreateSchema = oe_qualirunSchema.omit({
	createdAt: true,
	createdBy: true,
	f_negociacoes: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const oe_qualirunUpdateSchema = oe_qualirunCreateSchema.partial();
