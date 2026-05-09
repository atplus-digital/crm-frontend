/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { wfl_processoAtivoSchema } from "./labels";

export const WFL_PROCESSO_TABLE_NAME = "wfl_processo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wfl_processoBaseSchema = z.object({
	id: z.number(),
	ativo: wfl_processoAtivoSchema,
	descricao: z.string(),
	id_depto: z.number(),
	operador_ultima_atualizacao: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wfl_processoSchema = wfl_processoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wfl_processoCreateSchema = wfl_processoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wfl_processoUpdateSchema = wfl_processoCreateSchema.partial();
