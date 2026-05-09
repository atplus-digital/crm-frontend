/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_AGENDA_TEXTO_PADRAO_TABLE_NAME = "crm_agenda_texto_padrao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_agenda_texto_padraoBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_agenda_texto_padraoSchema = crm_agenda_texto_padraoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_agenda_texto_padraoCreateSchema =
	crm_agenda_texto_padraoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_agenda_texto_padraoUpdateSchema =
	crm_agenda_texto_padraoCreateSchema.partial();
