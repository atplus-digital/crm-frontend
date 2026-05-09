/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_FILMES_TABLE_NAME = "hs_filmes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_filmesBaseSchema = z.object({
	id: z.number(),
	ano_lancamento: z.number(),
	arquivo: z.string(),
	audio: z.string(),
	capa: z.string(),
	data: z.string(),
	duracao: z.string(),
	formato: z.string(),
	genero: z.string(),
	legenda: z.string(),
	qualidade: z.string(),
	qualidade_audio: z.number(),
	qualidado_video: z.number(),
	sinopse: z.string(),
	tamanho: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_filmesSchema = hs_filmesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_filmesCreateSchema = hs_filmesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_filmesUpdateSchema = hs_filmesCreateSchema.partial();
