/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_secretaria_perguntasRespostaSchema } from "./labels";

export const CRM_SECRETARIA_PERGUNTAS_TABLE_NAME = "crm_secretaria_perguntas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_secretaria_perguntasBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	pergunta: z.string(),
	resposta: crm_secretaria_perguntasRespostaSchema,
	visitante_id: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_secretaria_perguntasSchema =
	crm_secretaria_perguntasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_secretaria_perguntasCreateSchema =
	crm_secretaria_perguntasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_secretaria_perguntasUpdateSchema =
	crm_secretaria_perguntasCreateSchema.partial();
