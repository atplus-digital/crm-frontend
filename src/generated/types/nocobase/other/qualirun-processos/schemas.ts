/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { f_funcionariosBaseSchema } from "../../funcionarios/schemas";
import { usersBaseSchema } from "../../users/schemas";
import {
	qualirun_processosDetalhesProcedimentoSchema,
	qualirun_processosIdProcedimentoQualirunSchema,
	qualirun_processosProcedimentoSchema,
	qualirun_processosStatusSchema,
} from "./labels";

export const T_QUALIRUN_PROCESSOS_TABLE_NAME = "t_qualirun_processos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const qualirun_processosBaseSchema = z.object({
	id: z.number(),
	f_fk_funcionarios: z.number(),
	f_detalhes_procedimento: qualirun_processosDetalhesProcedimentoSchema,
	f_id_externo: z.string(),
	f_id_procedimento_qualirun: qualirun_processosIdProcedimentoQualirunSchema,
	f_link_externo: z.string(),
	f_procedimento: qualirun_processosProcedimentoSchema,
	f_status: qualirun_processosStatusSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const qualirun_processosRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_funcionarios: z.lazy(() => f_funcionariosBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const qualirun_processosSchema = qualirun_processosBaseSchema.extend(
	qualirun_processosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const qualirun_processosCreateSchema = qualirun_processosSchema.omit({
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
export const qualirun_processosUpdateSchema =
	qualirun_processosCreateSchema.partial();
