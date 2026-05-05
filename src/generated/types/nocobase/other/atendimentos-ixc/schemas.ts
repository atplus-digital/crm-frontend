/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import { templates_atendimento_n1BaseSchema } from "../templates-atendimento-n1/schemas";
import {
	atendimentos_ixcAssuntoSchema,
	atendimentos_ixcDiagnosticosSchema,
	atendimentos_ixcPrioridadeSchema,
	atendimentos_ixcProcessoSchema,
	atendimentos_ixcTarefasSchema,
} from "./labels";

export const T_ATENDIMENTOS_IXC_TABLE_NAME = "t_atendimentos_ixc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const atendimentos_ixcBaseSchema = z.object({
	id: z.number(),
	f_assunto: atendimentos_ixcAssuntoSchema,
	f_cliente: z.string(),
	f_contrato: z.string(),
	f_datafim: z.string(),
	f_datainicio: z.string(),
	f_departamento: z.string(),
	f_descricao: z.string(),
	f_diagnosticos: atendimentos_ixcDiagnosticosSchema,
	f_finalizaatendimento: z.boolean(),
	f_id_login: z.string(),
	f_idatendimento: z.string(),
	f_idcliente: z.string(),
	f_idos: z.string(),
	f_prioridade: atendimentos_ixcPrioridadeSchema,
	f_processo: atendimentos_ixcProcessoSchema,
	f_responsavel: z.string(),
	f_tarefas: atendimentos_ixcTarefasSchema,
	f_usuario: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const atendimentos_ixcRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	f_templates_atendimentos: z.lazy(() =>
		templates_atendimento_n1BaseSchema.array(),
	),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const atendimentos_ixcSchema = atendimentos_ixcBaseSchema.extend(
	atendimentos_ixcRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const atendimentos_ixcCreateSchema = atendimentos_ixcSchema.omit({
	createdAt: true,
	createdBy: true,
	f_templates_atendimentos: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const atendimentos_ixcUpdateSchema =
	atendimentos_ixcCreateSchema.partial();
