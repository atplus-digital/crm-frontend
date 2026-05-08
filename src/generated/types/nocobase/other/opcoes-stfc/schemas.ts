/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { opcoes_stfcPortabilidadeSchema } from "./labels";

export const T_OPCOES_STFC_TABLE_NAME = "t_opcoes_stfc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const opcoes_stfcBaseSchema = z.object({
	id: z.number(),
	f_fk_opcoes_stfc: z.number(),
	f_canais: z.string(),
	f_franquia: z.string(),
	f_nome_do_plano: z.string(),
	f_portabilidade: opcoes_stfcPortabilidadeSchema,
	f_terminais: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const opcoes_stfcRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const opcoes_stfcSchema = opcoes_stfcBaseSchema.extend(
	opcoes_stfcRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const opcoes_stfcCreateSchema = opcoes_stfcSchema.omit({
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
export const opcoes_stfcUpdateSchema = opcoes_stfcCreateSchema.partial();
