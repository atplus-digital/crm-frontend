/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ARQUIVO_SPED_CONTRIBUICOES_TABLE_NAME =
	"arquivo_sped_contribuicoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const arquivo_sped_contribuicoesBaseSchema = z.object({
	id: z.number(),
	id_sped_contribuicoes: z.number(),
	txt_sped: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const arquivo_sped_contribuicoesSchema =
	arquivo_sped_contribuicoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const arquivo_sped_contribuicoesCreateSchema =
	arquivo_sped_contribuicoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const arquivo_sped_contribuicoesUpdateSchema =
	arquivo_sped_contribuicoesCreateSchema.partial();
