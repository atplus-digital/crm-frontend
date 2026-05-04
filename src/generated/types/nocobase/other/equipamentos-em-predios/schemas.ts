/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_EQUIPAMENTOS_EM_PREDIOS_TABLE_NAME = "t_equipamentos_em_predios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const equipamentos_em_prediosBaseSchema = z.object({
	id: z.number(),
	f_contato_sindico: z.string(),
	f_endereco: z.string(),
	f_modelo_equipamento: z.string(),
	f_nome_predio: z.string(),
	f_observacao: z.string(),
	f_sn: z.string(),
	f_tipo_equipamento: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const equipamentos_em_prediosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const equipamentos_em_prediosSchema =
	equipamentos_em_prediosBaseSchema.merge(
		equipamentos_em_prediosRelationSchema,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const equipamentos_em_prediosCreateSchema =
	equipamentos_em_prediosSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const equipamentos_em_prediosUpdateSchema =
	equipamentos_em_prediosCreateSchema.partial();
