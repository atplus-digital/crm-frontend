/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RELATORIO_EMAIL_PARAMETROS_TABLE_NAME =
	"relatorio_email_parametros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_email_parametrosBaseSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	formulario_nome: z.string(),
	relatorio_envio_email_parametro_id: z.number(),
	relatorio_id: z.number(),
	updated_at: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_email_parametrosSchema =
	relatorio_email_parametrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_email_parametrosCreateSchema =
	relatorio_email_parametrosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_email_parametrosUpdateSchema =
	relatorio_email_parametrosCreateSchema.partial();
