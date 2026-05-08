/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import {
	aegisStatusdesbloqueioconfiacaSchema,
	aegisStatusloginSchema,
	aegisStatusmacSchema,
} from "./labels";

export const T_AEGIS_TABLE_NAME = "t_aegis";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const aegisBaseSchema = z.object({
	id: z.number(),
	f_idlogin: z.string(),
	f_notas: z.string(),
	f_notas_cliente: z.string(),
	f_statusdesbloqueioconfiaca: aegisStatusdesbloqueioconfiacaSchema,
	f_statuslogin: aegisStatusloginSchema,
	f_statusmac: aegisStatusmacSchema,
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const aegisRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const aegisSchema = aegisBaseSchema.extend(aegisRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const aegisCreateSchema = aegisSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const aegisUpdateSchema = aegisCreateSchema.partial();
