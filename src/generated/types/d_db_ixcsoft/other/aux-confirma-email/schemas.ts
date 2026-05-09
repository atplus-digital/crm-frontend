/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AUX_CONFIRMA_EMAIL_TABLE_NAME = "aux_confirma_email";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const aux_confirma_emailBaseSchema = z.object({
	id: z.number(),
	assunto: z.string(),
	cliente_id: z.number(),
	conteudo: z.string(),
	destinatario: z.string(),
	id_linha: z.number(),
	razao: z.string(),
	smtp: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const aux_confirma_emailSchema = aux_confirma_emailBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const aux_confirma_emailCreateSchema = aux_confirma_emailSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const aux_confirma_emailUpdateSchema =
	aux_confirma_emailCreateSchema.partial();
