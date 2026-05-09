/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_TRANSF_ATENDIMENTO_TABLE_NAME = "su_transf_atendimento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_transf_atendimentoBaseSchema = z.object({
	id: z.number(),
	data_transferencia: z.string(),
	id_atendimento: z.number(),
	id_departamento_destino: z.number(),
	id_departamento_origem: z.number(),
	id_responsavel_tecnico: z.number(),
	status_transf: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_transf_atendimentoSchema = su_transf_atendimentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_transf_atendimentoCreateSchema =
	su_transf_atendimentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_transf_atendimentoUpdateSchema =
	su_transf_atendimentoCreateSchema.partial();
