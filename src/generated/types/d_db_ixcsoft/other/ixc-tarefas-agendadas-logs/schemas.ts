/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ixc_tarefas_agendadas_logsOrigemSchema } from "./labels";

export const IXC_TAREFAS_AGENDADAS_LOGS_TABLE_NAME =
	"ixc_tarefas_agendadas_logs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_tarefas_agendadas_logsBaseSchema = z.object({
	id: z.number(),
	data_fim: z.string(),
	data_inicio: z.string(),
	id_tarefa: z.number(),
	id_usuario: z.number(),
	log: z.string(),
	origem: ixc_tarefas_agendadas_logsOrigemSchema,
	servidor_ip: z.string(),
	servidor_nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_tarefas_agendadas_logsSchema =
	ixc_tarefas_agendadas_logsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_tarefas_agendadas_logsCreateSchema =
	ixc_tarefas_agendadas_logsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_tarefas_agendadas_logsUpdateSchema =
	ixc_tarefas_agendadas_logsCreateSchema.partial();
