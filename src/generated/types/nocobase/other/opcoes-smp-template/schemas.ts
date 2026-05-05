/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

export const T_OPCOES_SMP_TEMPLATE_TABLE_NAME = "t_opcoes_smp_template";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const opcoes_smp_templateBaseSchema = z.object({
	id: z.number(),
	f_fk_smp_produtos: z.number(),
	f_bonus: z.string(),
	f_franquia_dados: z.string(),
	f_minutos: z.string(),
	f_nome_plano: z.string(),
	f_sms: z.string(),
	f_sva_incluso: z.string(),
	f_valor_smp: z.number(),
	f_valor_sva: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const opcoes_smp_templateRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const opcoes_smp_templateSchema = opcoes_smp_templateBaseSchema.extend(
	opcoes_smp_templateRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const opcoes_smp_templateCreateSchema = opcoes_smp_templateSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const opcoes_smp_templateUpdateSchema =
	opcoes_smp_templateCreateSchema.partial();
