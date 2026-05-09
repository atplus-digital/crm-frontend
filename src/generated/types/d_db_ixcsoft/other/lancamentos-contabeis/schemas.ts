/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LANCAMENTOS_CONTABEIS_TABLE_NAME = "lancamentos_contabeis";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lancamentos_contabeisBaseSchema = z.object({
	id: z.number(),
	arquivo_contabil: z.string(),
	arquivo_importado: z.number(),
	data_importacao: z.string(),
	usuario_importacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lancamentos_contabeisSchema = lancamentos_contabeisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lancamentos_contabeisCreateSchema =
	lancamentos_contabeisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lancamentos_contabeisUpdateSchema =
	lancamentos_contabeisCreateSchema.partial();
