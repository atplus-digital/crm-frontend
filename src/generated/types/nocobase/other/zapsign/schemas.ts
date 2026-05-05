/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_ZAPSIGN_TABLE_NAME = "t_zapsign";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const zapsignBaseSchema = z.object({
	id: z.number(),
	f_data_de_encerramento: z.string(),
	f_nome_do_plano: z.string(),
	f_numero_de_creditos: z.string(),
	f_periodo: z.string(),
	f_status: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const zapsignRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const zapsignSchema = zapsignBaseSchema.extend(
	zapsignRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const zapsignCreateSchema = zapsignSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const zapsignUpdateSchema = zapsignCreateSchema.partial();
