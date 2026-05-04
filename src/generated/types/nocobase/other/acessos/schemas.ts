/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { acessosTipoSchema } from "./labels";

export const T_ACESSOS_TABLE_NAME = "t_acessos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const acessosBaseSchema = z.object({
	id: z.number(),
	f_fk_servicos_x_acessos: z.number(),
	f_fk_site: z.number(),
	f_tipo: acessosTipoSchema,
	f_x7w60fv71f9: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const acessosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_equipamento: z.number().nullable(),
	f_insumos: z.number().array(),
	f_interface: z.number().nullable(),
	f_site: z.number().nullable(),
	f_xzuv9d6zkhr: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const acessosSchema = acessosBaseSchema.merge(acessosRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const acessosCreateSchema = acessosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_equipamento: true,
	f_insumos: true,
	f_interface: true,
	f_site: true,
	f_xzuv9d6zkhr: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const acessosUpdateSchema = acessosCreateSchema.partial();
