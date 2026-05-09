/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ixc_tarefasStatusSchema } from "./labels";

export const IXC_TAREFAS_TABLE_NAME = "ixc_tarefas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_tarefasBaseSchema = z.object({
	id: z.number(),
	atualizado_em: z.string(),
	criado_em: z.string(),
	cron: z.number(),
	dia_mes: z.string(),
	dia_semana: z.string(),
	hora: z.string(),
	id_tarefa: z.number(),
	mes: z.string(),
	minuto: z.string(),
	status: ixc_tarefasStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_tarefasSchema = ixc_tarefasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_tarefasCreateSchema = ixc_tarefasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_tarefasUpdateSchema = ixc_tarefasCreateSchema.partial();
