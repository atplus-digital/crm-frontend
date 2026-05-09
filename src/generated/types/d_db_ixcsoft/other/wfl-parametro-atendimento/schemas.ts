/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { wfl_parametro_atendimentoPrioridadeSchema } from "./labels";

export const WFL_PARAMETRO_ATENDIMENTO_TABLE_NAME = "wfl_parametro_atendimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wfl_parametro_atendimentoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_assunto: z.number(),
	id_setor: z.number(),
	id_tecnico: z.number(),
	id_wfl_processo: z.number(),
	prioridade: wfl_parametro_atendimentoPrioridadeSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wfl_parametro_atendimentoSchema =
	wfl_parametro_atendimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wfl_parametro_atendimentoCreateSchema =
	wfl_parametro_atendimentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wfl_parametro_atendimentoUpdateSchema =
	wfl_parametro_atendimentoCreateSchema.partial();
