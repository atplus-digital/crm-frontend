/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	planejamento_analiticoAtivoSchema,
	planejamento_analiticoPrevisaoSchema,
} from "./labels";

export const PLANEJAMENTO_ANALITICO_TABLE_NAME = "planejamento_analitico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const planejamento_analiticoBaseSchema = z.object({
	id: z.number(),
	ativo: planejamento_analiticoAtivoSchema,
	auxiliar: z.number(),
	classificacao: z.string(),
	conta: z.number(),
	conta_dominio: z.string(),
	id_planejamento: z.number(),
	id_planejamento_analitico_finan: z.number(),
	planejamento_analitico: z.string(),
	previsao: planejamento_analiticoPrevisaoSchema,
	sequencia_planejamento_analitico: z.number(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const planejamento_analiticoSchema = planejamento_analiticoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const planejamento_analiticoCreateSchema =
	planejamento_analiticoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const planejamento_analiticoUpdateSchema =
	planejamento_analiticoCreateSchema.partial();
