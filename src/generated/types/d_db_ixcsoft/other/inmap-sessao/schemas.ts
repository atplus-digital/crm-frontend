/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INMAP_SESSAO_TABLE_NAME = "inmap_sessao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inmap_sessaoBaseSchema = z.object({
	id: z.number(),
	alertas: z.string(),
	data_sessao: z.string(),
	elementos: z.string(),
	hash: z.string(),
	id_grupo_usuario: z.number(),
	id_usuario: z.number(),
	layer: z.string(),
	modulo: z.string(),
	tamanho_tela: z.string(),
	tema: z.string(),
	tempo_sessao: z.string(),
	versao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inmap_sessaoSchema = inmap_sessaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inmap_sessaoCreateSchema = inmap_sessaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inmap_sessaoUpdateSchema = inmap_sessaoCreateSchema.partial();
