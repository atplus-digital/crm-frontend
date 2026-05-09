/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LEAD_ARQUIVOS_TABLE_NAME = "lead_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lead_arquivosBaseSchema = z.object({
	id: z.number(),
	anexar_arquivo: z.string(),
	data_envio: z.string(),
	descricao: z.string(),
	id_lead: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lead_arquivosSchema = lead_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lead_arquivosCreateSchema = lead_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lead_arquivosUpdateSchema = lead_arquivosCreateSchema.partial();
