/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	atividadePrioridadeSchema,
	atividadeStatusSchema,
	atividadeTipoAtividadeSchema,
	atividadeTipoSchema,
} from "./labels";

export const ATIVIDADE_TABLE_NAME = "atividade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const atividadeBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	atividade_interna: z.number(),
	criado_por: z.number(),
	data: z.string(),
	data_hora_fim: z.string(),
	data_hora_inicio: z.string(),
	hora_marcada: z.number(),
	id_categoria_atividade: z.number(),
	id_lead_negociacao: z.number(),
	id_responsavel: z.number(),
	id_usuario: z.number(),
	link_local: z.string(),
	observacao: z.string(),
	prioridade: atividadePrioridadeSchema,
	status: atividadeStatusSchema,
	tipo: atividadeTipoSchema,
	tipo_atividade: atividadeTipoAtividadeSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const atividadeSchema = atividadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const atividadeCreateSchema = atividadeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const atividadeUpdateSchema = atividadeCreateSchema.partial();
