/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { f_funcionariosBaseSchema } from "../funcionarios/schemas";

export const T_LOGS_CARGOS_TABLE_NAME = "t_logs_cargos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_cargosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	CBO: z.string(),
	f_atividades: z.string(),
	f_cargo_anterior: z.string(),
	f_data_inicio_cargo: z.string(),
	f_descricao: z.string(),
	f_nome_cargo: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const logs_cargosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_cargosSchema = logs_cargosBaseSchema.extend(
	logs_cargosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_cargosCreateSchema = logs_cargosSchema.omit({
	createdAt: true,
	createdBy: true,
	f_funcionarios: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_cargosUpdateSchema = logs_cargosCreateSchema.partial();
