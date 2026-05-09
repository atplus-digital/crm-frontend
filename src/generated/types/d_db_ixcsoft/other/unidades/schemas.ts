/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { unidadesAtivoSchema } from "./labels";

export const UNIDADES_TABLE_NAME = "unidades";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const unidadesBaseSchema = z.object({
	id: z.number(),
	ativo: unidadesAtivoSchema,
	codigo: z.number(),
	descricao: z.string(),
	sigla: z.string(),
	ultima_atualizacao: z.string(),
	ultima_atualizacao_original: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const unidadesSchema = unidadesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const unidadesCreateSchema = unidadesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const unidadesUpdateSchema = unidadesCreateSchema.partial();
