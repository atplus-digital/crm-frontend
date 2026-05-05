/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { negociacoesBaseSchema } from "../../negociacoes/schemas";
import { usersBaseSchema } from "../../users/schemas";

export const T_AUDITORIA_AUTOMATICA_TABLE_NAME = "t_auditoria_automatica";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const auditoria_automaticaBaseSchema = z.object({
	id: z.number(),
	f_conferencia: z.boolean(),
	f_id_negociacao: z.number(),
	f_titulo_negociacao: z.string(),
	f_valor_mensal: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const auditoria_automaticaRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_negociacoes: z.lazy(() => negociacoesBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const auditoria_automaticaSchema = auditoria_automaticaBaseSchema.extend(
	auditoria_automaticaRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const auditoria_automaticaCreateSchema = auditoria_automaticaSchema.omit(
	{
		createdAt: true,
		createdBy: true,
		f_negociacoes: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const auditoria_automaticaUpdateSchema =
	auditoria_automaticaCreateSchema.partial();
