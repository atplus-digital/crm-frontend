/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { configuracoesEscopoSchema } from "./labels";

export const T_CONFIGURACOES_TABLE_NAME = "t_configuracoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const configuracoesBaseSchema = z.object({
	id: z.number(),
	f_chave: z.string(),
	f_descricao: z.string(),
	f_escopo: configuracoesEscopoSchema,
	f_nome: z.string(),
	f_valor: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const configuracoesRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const configuracoesSchema = configuracoesBaseSchema.merge(
	configuracoesRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const configuracoesCreateSchema = configuracoesSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const configuracoesUpdateSchema = configuracoesCreateSchema.partial();
