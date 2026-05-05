/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { f_funcionariosBaseSchema } from "../funcionarios/schemas";
import { lancamentos_feriasBaseSchema } from "../lancamentos-ferias/schemas";
import { periodos_feriasStatusPeriodoSchema } from "./labels";

export const T_PERIODOS_FERIAS_TABLE_NAME = "t_periodos_ferias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const periodos_feriasBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_dias_direito: z.number(),
	f_periodo_aquisitivo_fim: z.string(),
	f_periodo_aquisitivo_inicio: z.string(),
	f_periodo_concessivo_fim: z.string(),
	f_periodo_concessivo_inicio: z.string(),
	f_status_periodo: periodos_feriasStatusPeriodoSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const periodos_feriasRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	f_lancamentos_ferias: z.lazy(() => lancamentos_feriasBaseSchema.array()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const periodos_feriasSchema = periodos_feriasBaseSchema.extend(
	periodos_feriasRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const periodos_feriasCreateSchema = periodos_feriasSchema.omit({
	createdAt: true,
	createdBy: true,
	f_funcionarios: true,
	f_lancamentos_ferias: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const periodos_feriasUpdateSchema =
	periodos_feriasCreateSchema.partial();
