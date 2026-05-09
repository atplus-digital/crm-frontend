/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_MOV_TRANSF_ATENDIMENTO_TABLE_NAME = "su_mov_transf_atendimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_mov_transf_atendimentoBaseSchema = z.object({
	id: z.number(),
	data_fim_mov: z.string(),
	data_inicio_mov: z.string(),
	finalizar_atendimento: z.number(),
	id_resposta_padrao: z.number(),
	id_transferencia: z.number(),
	msg_adicional: z.string(),
	tipo_lancamento: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_mov_transf_atendimentoSchema =
	su_mov_transf_atendimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_mov_transf_atendimentoCreateSchema =
	su_mov_transf_atendimentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_mov_transf_atendimentoUpdateSchema =
	su_mov_transf_atendimentoCreateSchema.partial();
