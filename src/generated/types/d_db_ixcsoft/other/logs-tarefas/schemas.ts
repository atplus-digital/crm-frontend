/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOGS_TAREFAS_TABLE_NAME = "logs_tarefas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_tarefasBaseSchema = z.object({
	id: z.number(),
	data_hora: z.string(),
	info: z.string(),
	log: z.string(),
	segundos_execucao: z.number(),
	tarefa: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_tarefasSchema = logs_tarefasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_tarefasCreateSchema = logs_tarefasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_tarefasUpdateSchema = logs_tarefasCreateSchema.partial();
