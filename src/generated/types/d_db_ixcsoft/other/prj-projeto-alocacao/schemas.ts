/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRJ_PROJETO_ALOCACAO_TABLE_NAME = "prj_projeto_alocacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const prj_projeto_alocacaoBaseSchema = z.object({
	id: z.number(),
	custo_hora_adicionais: z.number(),
	custo_hora_base: z.number(),
	custo_previsto: z.number(),
	custo_realizado: z.number(),
	horas_previstas: z.number(),
	horas_realizadas: z.number(),
	id_prj_projeto: z.number(),
	id_tecnico: z.number(),
	papel: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const prj_projeto_alocacaoSchema = prj_projeto_alocacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const prj_projeto_alocacaoCreateSchema = prj_projeto_alocacaoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const prj_projeto_alocacaoUpdateSchema =
	prj_projeto_alocacaoCreateSchema.partial();
