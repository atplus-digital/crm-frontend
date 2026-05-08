/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { equipamentosBaseSchema } from "../equipamentos/schemas";
import { servicosBaseSchema } from "../servicos/schemas";
import { sitesBaseSchema } from "../sites/schemas";
import { telecom_interfacesBaseSchema } from "../telecom-interfaces/schemas";
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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const acessosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_equipamento: z.lazy(() => equipamentosBaseSchema.nullable()),
	f_insumos: z.lazy(() => servicosBaseSchema.array()),
	f_interface: z.lazy(() => telecom_interfacesBaseSchema.nullable()),
	f_site: z.lazy(() => sitesBaseSchema.nullable()),
	f_xzuv9d6zkhr: z.lazy(() => servicosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const acessosSchema = acessosBaseSchema.extend(
	acessosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const acessosCreateSchema = acessosSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_equipamento: true,
	f_insumos: true,
	f_interface: true,
	f_site: true,
	f_xzuv9d6zkhr: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const acessosUpdateSchema = acessosCreateSchema.partial();
