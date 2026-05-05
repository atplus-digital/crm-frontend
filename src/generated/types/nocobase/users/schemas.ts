/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { departmentsBaseSchema } from "../other/departments/schemas";
import { rolesBaseSchema } from "../other/roles/schemas";

export const USERS_TABLE_NAME = "users";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usersBaseSchema = z.object({
	id: z.number(),
	sort: z.number(),
	f_fk_cargos: z.number(),
	f_fk_departamentos: z.number(),
	f_fk_desconto_vendedor: z.number(),
	f_id_tecnico_ixc: z.number(),
	f_id_vendedor_ixc: z.number(),
	appLang: z.string(),
	email: z.string(),
	nickname: z.string(),
	password: z.string(),
	passwordChangeTz: z.number(),
	phone: z.string(),
	resetToken: z.string(),
	systemSettings: z.string(),
	username: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const usersRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	departments: z.lazy(() => departmentsBaseSchema.array()),
	mainDepartment: z.lazy(() => departmentsBaseSchema.nullable()),
	roles: z.lazy(() => rolesBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usersSchema = usersBaseSchema.extend(usersRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usersCreateSchema = usersSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	departments: true,
	id: true,
	mainDepartment: true,
	roles: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usersUpdateSchema = usersCreateSchema.partial();
