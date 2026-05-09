/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { tv_pacotesIslifelineSchema, tv_pacotesIswideSchema } from "./labels";

export const TV_PACOTES_TABLE_NAME = "tv_pacotes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tv_pacotesBaseSchema = z.object({
	id: z.number(),
	canais: z.string(),
	codigo_pacote: z.string(),
	data_inicio: z.string(),
	descricao: z.string(),
	id_de_linha: z.number(),
	id_plataforma: z.number(),
	isLifeLine: tv_pacotesIslifelineSchema,
	isWide: tv_pacotesIswideSchema,
	ncm: z.string(),
	nome: z.string(),
	plataforma: z.string(),
	svods: z.string(),
	tipo: z.number(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tv_pacotesSchema = tv_pacotesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tv_pacotesCreateSchema = tv_pacotesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tv_pacotesUpdateSchema = tv_pacotesCreateSchema.partial();
