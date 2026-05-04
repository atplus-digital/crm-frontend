/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
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
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const aegisRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const aegisSchema = aegisBaseSchema.merge(aegisRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const aegisCreateSchema = aegisSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const aegisUpdateSchema = aegisCreateSchema.partial();
