/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
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
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_interfacesRelationSchema = z.object({
	children: telecom_interfacesBaseSchema.array(),
	createdBy: z.number().nullable(),
	f_fk_equipamento: z.number().array(),
	f_fk_interfaces_equipamentos: z.number().array(),
	f_fk_recurso_interface_ponta_a: z.number().array(),
	f_fk_recurso_interface_ponta_b: z.number().array(),
	f_s3gs1jjkqzm: z.number().nullable(),
	parent: telecom_interfacesBaseSchema.nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_interfacesSchema = telecom_interfacesBaseSchema.merge(
	telecom_interfacesRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_interfacesCreateSchema = telecom_interfacesSchema.omit({
	children: true,
	createdAt: true,
	createdBy: true,
	f_fk_equipamento: true,
	f_fk_interfaces_equipamentos: true,
	f_fk_recurso_interface_ponta_a: true,
	f_fk_recurso_interface_ponta_b: true,
	f_s3gs1jjkqzm: true,
	id: true,
	parent: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_interfacesUpdateSchema =
	telecom_interfacesCreateSchema.partial();
