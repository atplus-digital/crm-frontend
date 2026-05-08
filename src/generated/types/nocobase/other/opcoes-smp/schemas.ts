/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { opcoes_smpPortabilidadeSchema } from "./labels";

export const T_OPCOES_SMP_TABLE_NAME = "t_opcoes_smp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const opcoes_smpBaseSchema = z.object({
	id: z.number(),
	f_fk_prod_negociacao_opcoes_smp: z.number(),
	f_bonus: z.string(),
	f_franquia_dados: z.string(),
	f_minutos: z.string(),
	f_nome_do_plano: z.string(),
	f_portabilidade: opcoes_smpPortabilidadeSchema,
	f_sms: z.string(),
	f_sva_incluso: z.string(),
	f_terminal: z.string(),
	f_valor_smp: z.number(),
	f_valor_sva: z.number(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const opcoes_smpRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const opcoes_smpSchema = opcoes_smpBaseSchema.extend(
	opcoes_smpRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const opcoes_smpCreateSchema = opcoes_smpSchema.omit({
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
export const opcoes_smpUpdateSchema = opcoes_smpCreateSchema.partial();
