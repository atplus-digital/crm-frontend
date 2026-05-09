/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_STATS_VISITANTE_TABLE_NAME = "hs_stats_visitante";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_stats_visitanteBaseSchema = z.object({
	id: z.number(),
	browser: z.string(),
	browser_versao: z.string(),
	chat: z.string(),
	chat_atendente: z.number(),
	chat_mensagens: z.string(),
	chat_setor: z.number(),
	cidade: z.string(),
	cor: z.string(),
	data_entrada: z.string(),
	data_saida: z.string(),
	host: z.string(),
	ip: z.string(),
	lang: z.string(),
	lat: z.number(),
	long: z.number(),
	os: z.string(),
	proxi: z.string(),
	referer: z.string(),
	referer_palavras: z.string(),
	res: z.string(),
	uf: z.string(),
	usuario_id: z.number(),
	usuario_nome: z.string(),
	visitante_id: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_stats_visitanteSchema = hs_stats_visitanteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_stats_visitanteCreateSchema = hs_stats_visitanteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_stats_visitanteUpdateSchema =
	hs_stats_visitanteCreateSchema.partial();
