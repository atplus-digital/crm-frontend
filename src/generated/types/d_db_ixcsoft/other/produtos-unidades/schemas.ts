/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { produtos_unidadesAtivoSchema } from "./labels";

export const PRODUTOS_UNIDADES_TABLE_NAME = "produtos_unidades";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_unidadesBaseSchema = z.object({
	id: z.number(),
	ativo: produtos_unidadesAtivoSchema,
	fator_conversao: z.number(),
	id_produto: z.number(),
	id_unidade: z.number(),
	sigla: z.string(),
	ultima_atualizacao: z.string(),
	ultima_atualizacao_original: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_unidadesSchema = produtos_unidadesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_unidadesCreateSchema = produtos_unidadesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_unidadesUpdateSchema =
	produtos_unidadesCreateSchema.partial();
