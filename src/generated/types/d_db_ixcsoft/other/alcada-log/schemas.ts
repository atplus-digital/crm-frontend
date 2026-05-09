/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ALCADA_LOG_TABLE_NAME = "alcada_log";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alcada_logBaseSchema = z.object({
	id: z.number(),
	acao: z.number(),
	alcada: z.number(),
	id_grupo_lib: z.number(),
	id_grupo_sol: z.number(),
	id_usuario_lib: z.number(),
	id_usuario_sol: z.number(),
	tipo_lib: z.string(),
	tipo_sol: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alcada_logSchema = alcada_logBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alcada_logCreateSchema = alcada_logSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alcada_logUpdateSchema = alcada_logCreateSchema.partial();
