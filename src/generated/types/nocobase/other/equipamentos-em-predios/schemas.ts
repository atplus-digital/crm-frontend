/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";

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
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const equipamentos_em_prediosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const equipamentos_em_prediosSchema =
	equipamentos_em_prediosBaseSchema.extend(
		equipamentos_em_prediosRelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const equipamentos_em_prediosCreateSchema =
	equipamentos_em_prediosSchema.omit({
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
export const equipamentos_em_prediosUpdateSchema =
	equipamentos_em_prediosCreateSchema.partial();
