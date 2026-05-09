/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { su_canal_atendimentoAtivoSchema } from "./labels";

export const SU_CANAL_ATENDIMENTO_TABLE_NAME = "su_canal_atendimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_canal_atendimentoBaseSchema = z.object({
	id: z.number(),
	ativo: su_canal_atendimentoAtivoSchema,
	canal_atendimento: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_canal_atendimentoSchema = su_canal_atendimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_canal_atendimentoCreateSchema = su_canal_atendimentoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_canal_atendimentoUpdateSchema =
	su_canal_atendimentoCreateSchema.partial();
