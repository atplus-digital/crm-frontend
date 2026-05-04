/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_CARGOS_TABLE_NAME = "t_cargos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cargosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_atividades: z.string(),
	f_cbo: z.string(),
	f_descricao: z.string(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const cargosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	f_responsavel: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cargosSchema = cargosBaseSchema.merge(cargosRelationSchema);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cargosCreateSchema = cargosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_responsavel: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cargosUpdateSchema = cargosCreateSchema.partial();
