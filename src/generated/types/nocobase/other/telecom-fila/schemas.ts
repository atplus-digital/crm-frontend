/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { telecom_racksBaseSchema } from "../telecom-racks/schemas";

export const T_TELECOM_FILA_TABLE_NAME = "t_telecom_fila";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const telecom_filaBaseSchema = z.object({
	id: z.number(),
	f_fk_fila: z.number(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const telecom_filaRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_fk_fila_rack: z.lazy(() => telecom_racksBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const telecom_filaSchema = telecom_filaBaseSchema.extend(
	telecom_filaRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const telecom_filaCreateSchema = telecom_filaSchema.omit({
	createdAt: true,
	createdBy: true,
	f_fk_fila_rack: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const telecom_filaUpdateSchema = telecom_filaCreateSchema.partial();
