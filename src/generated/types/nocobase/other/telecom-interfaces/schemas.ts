/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { acessosBaseSchema } from "../acessos/schemas";
import { equipamentosBaseSchema } from "../equipamentos/schemas";
import { telecom_recursosBaseSchema } from "../telecom-recursos/schemas";
import {
	telecom_interfacesConfiguracaoSchema,
	telecom_interfacesTipoSchema,
} from "./labels";

export const T_TELECOM_INTERFACES_TABLE_NAME = "t_telecom_interfaces";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_interfacesBaseSchema = z.object({
	id: z.number(),
	f_configuracao: telecom_interfacesConfiguracaoSchema,
	f_descricao: z.string(),
	f_interface: z.string(),
	f_p9gxrkh5utl: z.number(),
	f_tipo: telecom_interfacesTipoSchema,
	parentId: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_interfacesRelationSchema = z.object({
	children: z.lazy(() => telecom_interfacesBaseSchema.array()),
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_fk_equipamento: z.lazy(() => equipamentosBaseSchema.array()),
	f_fk_interfaces_equipamentos: z.lazy(() => equipamentosBaseSchema.array()),
	f_fk_recurso_interface_ponta_a: z.lazy(() =>
		telecom_recursosBaseSchema.array(),
	),
	f_fk_recurso_interface_ponta_b: z.lazy(() =>
		telecom_recursosBaseSchema.array(),
	),
	f_s3gs1jjkqzm: z.lazy(() => acessosBaseSchema.nullable()),
	parent: z.lazy(() => telecom_interfacesBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_interfacesSchema = telecom_interfacesBaseSchema.extend(
	telecom_interfacesRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_interfacesCreateSchema = telecom_interfacesSchema.omit({
	children: true,
	createdAt: true,
	createdBy: true,
	createdById: true,
	f_fk_equipamento: true,
	f_fk_interfaces_equipamentos: true,
	f_fk_recurso_interface_ponta_a: true,
	f_fk_recurso_interface_ponta_b: true,
	f_s3gs1jjkqzm: true,
	id: true,
	parent: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_interfacesUpdateSchema =
	telecom_interfacesCreateSchema.partial();
