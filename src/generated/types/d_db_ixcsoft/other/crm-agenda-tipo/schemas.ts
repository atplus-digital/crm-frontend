/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRM_AGENDA_TIPO_TABLE_NAME = "crm_agenda_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_agenda_tipoBaseSchema = z.object({
	id: z.number(),
	cor: z.string(),
	cor_texto: z.string(),
	id_texto_padrao: z.number(),
	nome: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_agenda_tipoSchema = crm_agenda_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_agenda_tipoCreateSchema = crm_agenda_tipoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_agenda_tipoUpdateSchema =
	crm_agenda_tipoCreateSchema.partial();
