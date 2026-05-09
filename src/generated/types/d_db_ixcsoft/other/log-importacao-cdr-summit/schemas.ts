/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOG_IMPORTACAO_CDR_SUMMIT_TABLE_NAME = "log_importacao_cdr_summit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_importacao_cdr_summitBaseSchema = z.object({
	id: z.number(),
	nome_arquivo: z.string(),
	quantidade_importado: z.number(),
	quantidade_total: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_importacao_cdr_summitSchema =
	log_importacao_cdr_summitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_importacao_cdr_summitCreateSchema =
	log_importacao_cdr_summitSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_importacao_cdr_summitUpdateSchema =
	log_importacao_cdr_summitCreateSchema.partial();
