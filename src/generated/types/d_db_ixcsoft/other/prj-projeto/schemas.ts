/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { prj_projetoStatusSchema } from "./labels";

export const PRJ_PROJETO_TABLE_NAME = "prj_projeto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const prj_projetoBaseSchema = z.object({
	id: z.number(),
	chave: z.string(),
	custo_operacional_medio_funcionario: z.number(),
	custo_previsto: z.number(),
	custo_realizado: z.number(),
	data_fim: z.string(),
	data_hora_cadastro: z.string(),
	data_inicio: z.string(),
	descricao: z.string(),
	horas_previstas: z.number(),
	horas_trabalhadas: z.number(),
	nome: z.string(),
	status: prj_projetoStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const prj_projetoSchema = prj_projetoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const prj_projetoCreateSchema = prj_projetoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const prj_projetoUpdateSchema = prj_projetoCreateSchema.partial();
